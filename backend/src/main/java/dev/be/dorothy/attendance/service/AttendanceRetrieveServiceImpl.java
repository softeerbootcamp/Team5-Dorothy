package dev.be.dorothy.attendance.service;

import dev.be.dorothy.attendance.repository.AttendanceRepository;
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
    public List<AttendanceResDto> retrieveAttendanceByMonthWhenMember(Long memberIdx, Long trackIdx) {
        Long trackMemberIdx = trackRetrieveService.getTrackMemberIdx(memberIdx, trackIdx);

        return attendanceRepository.getAttendanceByMonthWhenMember(trackMemberIdx);
    }

    @Override
    public List<AttendanceStatisticsResDto> retrieveAttendanceByMonthWhenAdmin(Long trackIdx) {
        return attendanceRepository.getAttendanceByMonthWhenAdmin(trackIdx);
    }
}
