package dev.be.dorothy.reservation.service;

import java.time.LocalTime;

public class ReservationResDto {

    private final Long placeIdx;
    private final String startTime;
    private String endTime;

    public ReservationResDto(Long placeIdx, String startTime, String endTime) {
        this.placeIdx = placeIdx;
        this.startTime = startTime.substring(0, startTime.lastIndexOf(":"));
        this.endTime = endTime.substring(0, endTime.lastIndexOf(":"));
    }

    public static ReservationResDto of(Long placeIdx, LocalTime startTime, LocalTime endTime) {
        return new ReservationResDto(placeIdx, startTime.toString().concat(":00"), endTime.toString().concat(":00"));
    }

    public Long getPlaceIdx() {
        return placeIdx;
    }

    public String getStartTime() {
        return startTime;
    }

    public String getEndTime() {
        return endTime;
    }

    public void setEndTime(String endTime) {
        this.endTime = endTime;
    }
}
