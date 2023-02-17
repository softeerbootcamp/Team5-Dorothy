package dev.be.dorothy.attendance.service;

import java.util.List;

public interface AttendanceRetrieveService {
    AttendanceResDto retrieveAttendanceByDayWhenMember(Long memberIdx, Long trackIdx);
    List<AttendanceRetrieveResDto> retrieveAttendanceByDayWhenAdmin(Long trackIdx);
    List<AttendanceResDto> retrieveAttendanceByMonthWhenMember(Long memberIdx, Long trackIdx);
    List<AttendanceStatisticsResDto> retrieveAttendanceByMonthWhenAdmin(Long trackIdx);
}
