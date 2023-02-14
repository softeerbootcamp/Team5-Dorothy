package dev.be.dorothy.attendance.service;

public interface AttendanceManagerService {
    boolean checkAttendanceLocation(Long trackIdx, Double x, Double y); // 좌표 계산을 통해 출석이 가능한지 확인
}
