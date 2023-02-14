package dev.be.dorothy.reservation.repository;

import dev.be.dorothy.reservation.Place;
import dev.be.dorothy.reservation.service.PlaceResDto;
import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface PlaceRepository extends CrudRepository<Place, Long> {

    @Query("select idx, name, image, created_at, updated_at from place")
    List<PlaceResDto> findAllPlaces();
}
