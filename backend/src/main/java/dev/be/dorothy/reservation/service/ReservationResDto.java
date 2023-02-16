package dev.be.dorothy.reservation.service;

import java.time.LocalTime;

public class ReservationResDto {

    private final Long placeIdx;
    private final LocalTime startTime;

    public ReservationResDto(Long placeIdx, LocalTime startTime) {
        this.placeIdx = placeIdx;
        this.startTime = startTime;
    }

    public static ReservationResDto of(Long placeIdx, LocalTime time) {
        return new ReservationResDto(placeIdx, time);
    }

    public Long getPlaceIdx() {
        return placeIdx;
    }

    public LocalTime getStartTime() {
        return startTime;
    }
}
