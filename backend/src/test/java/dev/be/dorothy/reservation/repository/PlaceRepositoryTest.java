package dev.be.dorothy.reservation.repository;

import dev.be.dorothy.member.Member;
import dev.be.dorothy.member.MemberRole;
import dev.be.dorothy.member.repository.MemberRepository;
import dev.be.dorothy.reservation.Place;
import dev.be.dorothy.reservation.service.PlaceResDto;
import dev.be.dorothy.reservation.service.ReservationResDto;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.*;
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
@TestInstance(TestInstance.Lifecycle.PER_CLASS)
@DisplayName("PlaceRepository Test")
class PlaceRepositoryTest {

    @Autowired
    PlaceRepository placeRepository;
    @Autowired
    MemberRepository memberRepository;
    Member member;
    Place place;

    @BeforeAll
    void testSetUp() {
        member = Member.of(
                "dorothy",
                "abcd1234",
                "2p7VxertGPCkNfnr",
                "dorothy",
                "dorothy@example.com",
                MemberRole.MEMBER
        );
        memberRepository.save(member);

        place = new Place("place1", "");
        placeRepository.save(place);
    }

    @AfterEach
    void postTestSetUp(){
        placeRepository.deleteAllReservation();
        placeRepository.deleteAll();
        memberRepository.deleteAll();
    }

    int makeReservation(){

        return placeRepository.reservePlace(
                member.getIdx(),
                place.getIdx(),
                LocalDateTime.now(),
                LocalTime.now(),
                LocalTime.now().plusMinutes(15),
                false);
    }

    @Test
    @DisplayName("공간 등록 기능 테스트")
    void placeRegisterTest(){
        Place place1 = new Place("pot", "");
        Place savedPlace = placeRepository.save(place1);
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
        Assertions.assertThat(allPlaces).hasSize(3);
    }

    @Test
    @DisplayName("공간 예약 신청 테스트 - 동시성 배제")
    void reservePlaceTest(){
        //when
        int reservationId = makeReservation();

        //then
        Optional<ReservationResDto> reservation = placeRepository.findReservationById(reservationId);
        assertThat(reservation).isNotNull();}

    @Test
    @DisplayName("공간 별 예약 현황 조회 테스트")
    void findReservationByPlaceIdTest(){
        //when
        makeReservation();
        makeReservation();
        //then
        Assertions.assertThat(placeRepository.findReservationByPlaceId(place.getIdx())).hasSize(2);
    }

    @Test
    @DisplayName("나의 예약 현황 조회 테스트")
    void findReservationByMemberId(){
        //when
        makeReservation();
        makeReservation();
        //then
        Assertions.assertThat(placeRepository.findReservationByMemberId(member.getIdx())).hasSize(2);
    }
}