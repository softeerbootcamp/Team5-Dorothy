package dev.be.dorothy.attendance.service;

import dev.be.dorothy.attendance.AttendanceType;

import java.time.LocalTime;

public interface AttendanceManagerService {
    void checkAttendanceLocation(Long trackIdx, Double x, Double y); // 좌표 계산을 통해 출석이 가능한지 확인
    AttendanceType checkAttendanceTime(Long trackIdx, LocalTime time); // 출석한 시간에 따라 출결 상태 반환
}
