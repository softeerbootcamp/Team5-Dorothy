package dev.be.dorothy.reservation.service;

import java.util.List;

public interface PlaceReservationManager {
    boolean reservePlace(String key, Long memberIdx);
    void findFailReservation(int paramLength, int failLength, List<ReservationResDto> resultList);
}
