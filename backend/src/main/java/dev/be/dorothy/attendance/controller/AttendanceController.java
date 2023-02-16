package dev.be.dorothy.attendance.controller;

import dev.be.dorothy.attendance.service.*;
import dev.be.dorothy.common.CommonResponse;
import dev.be.dorothy.member.MemberRole;
import dev.be.dorothy.member.service.MemberResDto;
import dev.be.dorothy.security.context.ContextHolder;
import dev.be.dorothy.security.context.MemberDetail;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

@RestController
@RequestMapping("/api/v1/attendance")
public class AttendanceController {
    private final AttendanceService attendanceService;
    private final AttendanceRetrieveService attendanceRetrieveService;

    public AttendanceController(AttendanceService attendanceService, AttendanceRetrieveService attendanceRetrieveService) {
        this.attendanceService = attendanceService;
        this.attendanceRetrieveService = attendanceRetrieveService;
    }

    @PostMapping("{trackIdx}")
    public ResponseEntity<CommonResponse> attend(
            @PathVariable("trackIdx") Long trackIdx,
            @RequestBody AttendanceReqDto attendanceReqDto) {
        MemberDetail principal = (MemberDetail) ContextHolder.getContext().getPrincipal();
        MemberResDto memberDto = principal.getMemberDto();

        AttendanceResDto attendanceResDto = attendanceService.attend(
                memberDto.getIdx(),
                trackIdx,
                MemberRole.valueOf(memberDto.getRole()),
                LocalDate.now(),
                LocalTime.now(),
                attendanceReqDto
        );
        CommonResponse commonResponse = new CommonResponse(HttpStatus.OK, "출결 처리되었습니다.", attendanceResDto);

        return new ResponseEntity<>(commonResponse, HttpStatus.OK);
    }

    @GetMapping("/day/{trackIdx}")
    public ResponseEntity<CommonResponse> readAttendanceByDay(
            @PathVariable("trackIdx") Long trackIdx) {
        MemberDetail principal = (MemberDetail) ContextHolder.getContext().getPrincipal();
        MemberResDto memberDto = principal.getMemberDto();

        CommonResponse commonResponse = null;
        if (MemberRole.valueOf(memberDto.getRole()) == MemberRole.MEMBER) {
            AttendanceResDto attendanceResDto = attendanceRetrieveService.retrieveAttendanceByDayWhenMember(
                    memberDto.getIdx(),
                    trackIdx
            );
            commonResponse = new CommonResponse(HttpStatus.OK, "출결 현황 조회가 완료되었습니다.", attendanceResDto);
        } else if (MemberRole.valueOf(memberDto.getRole()) == MemberRole.ADMIN) {
            List<AttendanceRetrieveResDto> attendanceResDtoList = attendanceRetrieveService.retrieveAttendanceByDayWhenAdmin(
                    trackIdx
            );
            commonResponse = new CommonResponse(HttpStatus.OK, "출결 현황 조회가 완료되었습니다.", attendanceResDtoList);
        }

        return new ResponseEntity<>(commonResponse, HttpStatus.OK);
    }
}
