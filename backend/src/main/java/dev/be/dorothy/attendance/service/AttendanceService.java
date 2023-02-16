package dev.be.dorothy.attendance.service;

import dev.be.dorothy.member.MemberRole;

import java.time.LocalDate;
import java.time.LocalTime;

public interface AttendanceService {
    AttendanceResDto attend(Long memberIdx, Long trackIdx, MemberRole memberRole, LocalDate date, LocalTime time, AttendanceReqDto attendanceReqDto);
}
