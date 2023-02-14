package dev.be.dorothy.reservation.service;

import dev.be.dorothy.exception.BadRequestException;
import dev.be.dorothy.reservation.repository.PlaceRepository;
import org.springframework.stereotype.Service;
import java.time.LocalDateTime;
import java.time.LocalTime;

@Service
public class PlaceReservationServiceImpl implements PlaceReservationService{

    private final PlaceRepository placeRepository;
    public PlaceReservationServiceImpl(PlaceRepository placeRepository) {
        this.placeRepository = placeRepository;
    }

    @Override
    public ReservationResDto reservePlace(Long memberIdx, Long placeIdx, LocalTime startTime) {
        //TODO : 날짜와 시작 시간의 형식은 향후 수정할 예정
        Integer reservationID = placeRepository.reservePlace(memberIdx, placeIdx, LocalDateTime.now(), startTime, startTime.plusMinutes(15), false);
        return placeRepository.findReservationById(reservationID).orElseThrow(() -> new BadRequestException("입력 정보가 올바르지 않습니다."));
    }
}
