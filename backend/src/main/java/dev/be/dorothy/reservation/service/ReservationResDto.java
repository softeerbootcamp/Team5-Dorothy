package dev.be.dorothy.reservation.service;

public class ReservationResDto {

    private final Long placeIdx;
    private final String startTime;

    public ReservationResDto(Long placeIdx, String startTime) {
        this.placeIdx = placeIdx;
        this.startTime = startTime.substring(0, startTime.lastIndexOf(":"));
    }

    public static ReservationResDto of(Long placeIdx, String time) {
        return new ReservationResDto(placeIdx, time);
    }

    public Long getPlaceIdx() {
        return placeIdx;
    }

    public String getStartTime() {
        return startTime;
    }
}
