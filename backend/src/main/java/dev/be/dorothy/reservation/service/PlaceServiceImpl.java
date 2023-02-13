package dev.be.dorothy.reservation.service;

import dev.be.dorothy.mapper.PlaceResDtoMapper;
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

    @Override
    public PlaceResDto addPlace(String name){
        Place place = new Place(name, "");
        place = placeRepository.save(place);
        return PlaceResDtoMapper.INSTANCE.entityToPlaceResDto(place);
    }

    @Override
    public List<PlaceResDto> retrievePlaces() {
        return placeRepository.findAllPlaces();
    }
}
