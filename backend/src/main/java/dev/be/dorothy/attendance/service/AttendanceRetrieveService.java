package dev.be.dorothy.attendance.service;

import dev.be.dorothy.member.MemberRole;

import java.util.List;

public interface AttendanceRetrieveService {
    AttendanceResDto retrieveAttendanceByDayWhenMember(Long memberIdx, Long trackIdx);
    List<AttendanceRetrieveResDto> retrieveAttendanceByDayWhenAdmin(Long trackIdx);
    List<AttendanceResDto> retrieveAttendanceByMonth(Long memberIdx, Long trackIdx, MemberRole role);
}
