package dev.be.dorothy.attendance.controller;

import dev.be.dorothy.attendance.service.AttendanceReqDto;
import dev.be.dorothy.attendance.service.AttendanceResDto;
import dev.be.dorothy.attendance.service.AttendanceService;
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

@RestController
@RequestMapping("/api/v1/attendance")
public class AttendanceController {
    private final AttendanceService attendanceService;

    public AttendanceController(AttendanceService attendanceService) {
        this.attendanceService = attendanceService;
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
}
