package dev.be.dorothy.reservation.service;

import java.util.List;

public interface PlaceRegisterService {

    PlaceResDto addPlace(String name);

    List<PlaceResDto> retrievePlaces();
}
