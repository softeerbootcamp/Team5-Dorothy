package dev.be.dorothy.attendance.service;

import dev.be.dorothy.attendance.repository.AttendanceRepository;
import dev.be.dorothy.exception.ForbiddenException;
import dev.be.dorothy.member.MemberRole;
import dev.be.dorothy.track.service.TrackRetrieveService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AttendanceRetrieveServiceImpl implements AttendanceRetrieveService {
    private final AttendanceRepository attendanceRepository;
    private final TrackRetrieveService trackRetrieveService;

    public AttendanceRetrieveServiceImpl(AttendanceRepository attendanceRepository, TrackRetrieveService trackRetrieveService) {
        this.attendanceRepository = attendanceRepository;
        this.trackRetrieveService = trackRetrieveService;
    }

    @Override
    public AttendanceResDto retrieveAttendanceByDayWhenMember(Long memberIdx, Long trackIdx) {
        Long trackMemberIdx = trackRetrieveService.getTrackMemberIdx(memberIdx, trackIdx);

        return attendanceRepository.getAttendanceByDayWhenMember(trackMemberIdx);
    }

    @Override
    public List<AttendanceRetrieveResDto> retrieveAttendanceByDayWhenAdmin(Long trackIdx) {
        return attendanceRepository.getAttendanceByDayWhenAdmin(trackIdx);
    }

    @Override
    public List<AttendanceResDto> retrieveAttendanceByMonth(Long memberIdx, Long trackIdx, MemberRole role) {
        if(role == MemberRole.SUPER_ADMIN) {
            throw new ForbiddenException("잘못된 접근입니다.");
        }

        if(role == MemberRole.MEMBER) {
            Long trackMemberIdx = trackRetrieveService.getTrackMemberIdx(memberIdx, trackIdx);

            return attendanceRepository.getAttendanceByMonthWhenMember(trackMemberIdx);
        }

        return attendanceRepository.getAttendanceByMonthWhenAdmin(trackIdx);
    }
}
