package dev.be.dorothy.reservation.service;

public interface PlaceReservationManager {
    boolean reservePlace(String key, Long memberIdx);
}
