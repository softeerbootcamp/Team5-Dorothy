package dev.be.dorothy.reservation.service;

import dev.be.dorothy.reservation.Place;

import java.util.List;

public interface PlaceService {

    Place register(String name);

    List<PlaceResDto> retrievePlaces();
}
