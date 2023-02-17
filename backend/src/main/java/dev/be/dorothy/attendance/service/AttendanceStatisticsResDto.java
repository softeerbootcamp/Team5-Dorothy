package dev.be.dorothy.attendance.service;

import java.time.LocalDate;

public class AttendanceStatisticsResDto {
    private final LocalDate date;
    private final int present;
    private final int tardy;
    private final int absent;

    public AttendanceStatisticsResDto(LocalDate date, int present, int tardy, int absent) {
        this.date = date;
        this.present = present;
        this.tardy = tardy;
        this.absent = absent;
    }

    public LocalDate getDate() {
        return date;
    }

    public int getPresent() {
        return present;
    }

    public int getTardy() {
        return tardy;
    }

    public int getAbsent() {
        return absent;
    }
}
