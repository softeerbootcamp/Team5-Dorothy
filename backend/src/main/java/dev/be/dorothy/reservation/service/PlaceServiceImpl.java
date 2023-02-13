package dev.be.dorothy.reservation.service;

import dev.be.dorothy.reservation.Place;
import dev.be.dorothy.reservation.repository.PlaceRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PlaceServiceImpl implements PlaceService{

    private final PlaceRepository placeRepository;

    public PlaceServiceImpl(PlaceRepository placeRepository) {
        this.placeRepository = placeRepository;
    }

    public Place register(String name){
        Place place = new Place(name, "");
        return placeRepository.save(place);
    }

    @Override
    public List<PlaceResDto> retrievePlaces() {
        return placeRepository.findAllPlaces();
    }
}
