package dev.be.dorothy.attendance.service;

import dev.be.dorothy.attendance.Attendance;
import dev.be.dorothy.attendance.AttendanceType;
import dev.be.dorothy.attendance.repository.AttendanceRepository;
import dev.be.dorothy.exception.BadRequestException;
import dev.be.dorothy.exception.ForbiddenException;
import dev.be.dorothy.mapper.AttendanceResDtoMapper;
import dev.be.dorothy.member.MemberRole;
import dev.be.dorothy.track.service.TrackRetrieveService;

import java.time.LocalDate;
import java.time.LocalTime;

public class AttendanceServiceImpl implements AttendanceService {
    private final TrackRetrieveService trackRetrieveService;
    private final AttendanceManagerService attendanceManagerService;
    private final AttendanceRepository attendanceRepository;

    public AttendanceServiceImpl(TrackRetrieveService trackRetrieveService, AttendanceManagerService attendanceManagerService, AttendanceRepository attendanceRepository) {
        this.trackRetrieveService = trackRetrieveService;
        this.attendanceManagerService = attendanceManagerService;
        this.attendanceRepository = attendanceRepository;
    }

    @Override
    public AttendanceResDto attend(Long memberIdx, Long trackIdx, MemberRole memberRole, LocalDate date, LocalTime time, AttendanceReqDto attendanceReqDto) {
        if(memberRole != MemberRole.MEMBER) {
            throw new ForbiddenException("잘못된 접근입니다.");
        }

        boolean isCorrectLocation = attendanceManagerService.checkAttendanceLocation(trackIdx, attendanceReqDto.getX(), attendanceReqDto.getY());
        if(!isCorrectLocation) {
            throw new BadRequestException("잘못된 요청입니다.");
        }
        AttendanceType attendanceType = attendanceManagerService.checkAttendanceTime(trackIdx, time);

        Long trackMemberIdx = trackRetrieveService.getTrackMemberIdx(memberIdx, trackIdx);
        Attendance attendance = new Attendance(
                trackMemberIdx,
                date,
                time,
                attendanceType
        );
        attendance = attendanceRepository.save(attendance);

        return AttendanceResDtoMapper.INSTANCE.entityToAttendanceResDto(attendance);
    }
}
