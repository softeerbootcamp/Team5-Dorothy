package dev.be.dorothy.reservation.service;

import java.util.List;

public interface PlaceReservationService {

    List<ReservationResDto> reservePlace(Long memberIdx, Long placeIdx, Object startTime);

    List<ReservationResDto> readReservationDetail(Long placeIdx);

    List<ReservationResDto> readMyReservations(Long memberIdx);
}
