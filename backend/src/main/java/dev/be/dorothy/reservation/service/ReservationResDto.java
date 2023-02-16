package dev.be.dorothy.reservation.service;

import java.time.LocalTime;

public class ReservationResDto {

    private final Long idx;
    private final LocalTime startTime;
    private final LocalTime endTime;

    private ReservationResDto(Long idx, LocalTime startTime, LocalTime endTime) {
        this.idx = idx;
        this.startTime = startTime;
        this.endTime = endTime;
    }

    public static ReservationResDto of(Long placeIdx, LocalTime startTime, LocalTime endTime) {
        return new ReservationResDto(placeIdx, startTime, endTime);
    }

    public Long getIdx() {
        return idx;
    }

    public LocalTime getStartTime() {
        return startTime;
    }

    public LocalTime getEndTime() {
        return endTime;
    }
}
