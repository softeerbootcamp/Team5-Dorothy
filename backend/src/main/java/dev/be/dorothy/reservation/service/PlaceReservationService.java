package dev.be.dorothy.reservation.service;

import java.time.LocalTime;

public interface PlaceReservationService {

    ReservationResDto reservePlace(Long memberIdx, Long placeIdx, LocalTime startTime);

}
