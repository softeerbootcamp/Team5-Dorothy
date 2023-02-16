package dev.be.dorothy.attendance.service;

import dev.be.dorothy.attendance.AttendanceType;

import java.time.LocalDate;
import java.time.LocalTime;

public class AttendanceRetrieveResDto {
    private final String name;
    private final LocalDate date;
    private final LocalTime time;
    private final AttendanceType type;

    public AttendanceRetrieveResDto(String name, LocalDate date, LocalTime time, AttendanceType type) {
        this.name = name;
        this.date = date;
        this.time = time;
        this.type = type;
    }

    public String getName() {
        return name;
    }

    public LocalDate getDate() {
        return date;
    }

    public LocalTime getTime() {
        return time;
    }

    public AttendanceType getType() {
        return type;
    }
}
