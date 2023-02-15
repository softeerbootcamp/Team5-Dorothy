package dev.be.dorothy.attendance.service;

import java.util.List;

public interface AttendanceRetrieveService {
    AttendanceResDto retrieveAttendanceByDayWhenMember(Long memberIdx, Long trackIdx);
    List<AttendanceResDto> retrieveAttendanceByDayWhenAdmin(Long trackIdx);
}
