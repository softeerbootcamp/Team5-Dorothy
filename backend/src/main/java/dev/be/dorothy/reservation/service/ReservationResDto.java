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

    private ReservationResDto(Long placeIdx, LocalTime startTime, LocalTime endTime) {
        this.placeIdx = placeIdx;
        this.startTime = startTime.toString();
        this.endTime = endTime.toString();
    }

    public static ReservationResDto of(Long placeIdx, LocalTime startTime, LocalTime endTime) {
        return new ReservationResDto(placeIdx, startTime, endTime);
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
