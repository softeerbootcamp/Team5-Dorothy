package dev.be.dorothy.reservation.service;

import dev.be.dorothy.reservation.repository.PlaceRepository;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import java.util.List;
import static org.assertj.core.api.Assertions.*;
import static org.mockito.BDDMockito.given;

@DisplayName("PlaceReservaionService Test")
@ExtendWith(MockitoExtension.class)
class PlaceReservationServiceImplTest {

    @Mock
    PlaceRepository placeRepository;

    @InjectMocks
    PlaceReservationServiceImpl placeReservationService;

    @Test
    @DisplayName("나의 예약 조회 시 병합 처리 테스트")
    void reservationCombinationTest(){
        // given
        Long memberIdx = 1L;
        List<ReservationResDto> reservations = List.of(new ReservationResDto(1L, "12:00:00", "12:15:00")
                                                      ,new ReservationResDto(2L, "12:00:00", "12:15:00")
                                                      ,new ReservationResDto(1L, "12:15:00", "12:30:00")
                                                      ,new ReservationResDto(2L, "12:15:00", "12:30:00"));
        given(placeRepository.findReservationByMemberId(memberIdx)).willReturn(reservations);

        //when
        placeRepository.findReservationByMemberId(memberIdx);
        List<ReservationResDto> reservationResDtos = placeReservationService.readMyReservations(memberIdx);
        assertThat(reservationResDtos).hasSize(2);
    }
}