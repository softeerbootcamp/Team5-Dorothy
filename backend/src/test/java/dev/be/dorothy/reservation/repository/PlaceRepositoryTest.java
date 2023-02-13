package dev.be.dorothy.reservation.repository;

import dev.be.dorothy.reservation.Place;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.data.jdbc.DataJdbcTest;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import static org.junit.jupiter.api.Assertions.*;

@DataJdbcTest
@AutoConfigureTestDatabase(replace= AutoConfigureTestDatabase.Replace.NONE)
@DisplayName("PlaceRepository Test")
class PlaceRepositoryTest {

    @Autowired
    PlaceRepository placeRepository;
    
    @Test
    @DisplayName("공간 등록 및 조회 기능 테스트")
    void placeRegisterTest(){
        Place place = new Place("pot", "");
        Place savedPlace = placeRepository.save(place);
        Assertions.assertThat(savedPlace.getName()).isEqualTo("pot");
    }

}