package dev.be.dorothy.reservation.repository;

import dev.be.dorothy.member.Member;
import dev.be.dorothy.member.MemberRole;
import dev.be.dorothy.member.repository.MemberRepository;
import dev.be.dorothy.reservation.Place;
import dev.be.dorothy.reservation.service.PlaceResDto;
import dev.be.dorothy.reservation.service.ReservationResDto;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.data.jdbc.DataJdbcTest;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;

import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.List;
import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;

@DataJdbcTest
@AutoConfigureTestDatabase(replace= AutoConfigureTestDatabase.Replace.NONE)
@DisplayName("PlaceRepository Test")
class PlaceRepositoryTest {

    @Autowired
    PlaceRepository placeRepository;

    @Autowired
    MemberRepository memberRepository;

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

    @Test
    @DisplayName("공간 예약 신청 테스트 - 동시성 배제")
    void reservePlaceTest(){

        //given
        Member member = Member.of(
                "dorothy",
                "abcd1234",
                "2p7VxertGPCkNfnr",
                "dorothy",
                "dorothy@example.com",
                MemberRole.MEMBER
        );
        memberRepository.save(member);

        Place place = new Place("place1", "");
        placeRepository.save(place);

        //when
        int reservationId = placeRepository.reservePlace(
                member.getIdx(),
                place.getIdx(),
                LocalDateTime.now(),
                LocalTime.now(),
                LocalTime.now().plusMinutes(15),
                false);

        //then
        Optional<ReservationResDto> reservation = placeRepository.findReservationById(reservationId);
        assertThat(reservation).isNotNull();}

}