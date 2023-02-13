package dev.be.dorothy.reservation.service;

import java.util.List;

public interface PlaceService {

    PlaceResDto addPlace(String name);

    List<PlaceResDto> retrievePlaces();
}
