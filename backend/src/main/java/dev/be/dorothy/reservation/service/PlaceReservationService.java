package dev.be.dorothy.reservation.service;

import java.time.LocalTime;
import java.util.List;

public interface PlaceReservationService {

    ReservationResDto reservePlace(Long memberIdx, Long placeIdx, LocalTime startTime);

    List<ReservationResDto> readReservationDetail(Long placeIdx);

    List<ReservationResDto> readMyReservations(Long memberIdx);
}
