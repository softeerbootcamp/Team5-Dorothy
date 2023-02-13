package dev.be.dorothy.reservation.repository;

import dev.be.dorothy.reservation.Place;
import dev.be.dorothy.reservation.service.PlaceResDto;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.data.jdbc.DataJdbcTest;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import java.util.List;

@DataJdbcTest
@AutoConfigureTestDatabase(replace= AutoConfigureTestDatabase.Replace.NONE)
@DisplayName("PlaceRepository Test")
class PlaceRepositoryTest {

    @Autowired
    PlaceRepository placeRepository;
    
    @Test
    @DisplayName("공간 등록 기능 테스트")
    void placeRegisterTest(){
        Place place = new Place("pot", "");
        Place savedPlace = placeRepository.save(place);
        Assertions.assertThat(savedPlace.getName()).isEqualTo("pot");
    }

    @Test
    @DisplayName("findAll 커스텀 쿼리 테스트")
    void findAllPlacesTest(){

        //given
        Place place1 = new Place("place1", "");
        Place place2 = new Place("place2", "");
        List<Place> places = List.of(place1, place2);
        placeRepository.saveAll(places);

        //when
        List<PlaceResDto> allPlaces = placeRepository.findAllPlaces();

        //then
        Assertions.assertThat(allPlaces).hasSize(2);
    }

}