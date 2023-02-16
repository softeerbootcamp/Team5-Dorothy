package dev.be.dorothy.attendance.service;

public class AttendanceReqDto {
    private Double x;
    private Double y;

    public AttendanceReqDto() {}

    public AttendanceReqDto(Double x, Double y) {
        this.x = x;
        this.y = y;
    }

    public Double getX() {
        return x;
    }

    public Double getY() {
        return y;
    }
}
