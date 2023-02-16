package dev.be.dorothy.reservation.service;

import dev.be.dorothy.exception.BadRequestException;
import dev.be.dorothy.reservation.repository.PlaceRepository;
import org.springframework.stereotype.Service;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.List;

@Service
public class PlaceReservationServiceImpl implements PlaceReservationService{

    private final PlaceRepository placeRepository;
    private final PlaceReservationManagerImpl placeReservationManagerImpl;
    private static final String RESERVATION_KEY = "RESERVATION_";

    public PlaceReservationServiceImpl(PlaceRepository placeRepository, PlaceReservationManagerImpl placeReservationManagerImpl) {
        this.placeRepository = placeRepository;
        this.placeReservationManagerImpl = placeReservationManagerImpl;
    }

    @Override
    public ReservationResDto reservePlace(Long memberIdx, Long placeIdx, LocalTime startTime) {
        StringBuilder keyBuilder = new StringBuilder();
        keyBuilder.append(RESERVATION_KEY)
                .append(placeIdx)
                .append("-")
                .append(startTime);
        if(!placeReservationManagerImpl.reservePlace(keyBuilder.toString(), memberIdx)){
            throw new BadRequestException("이미 예약된 공간입니다.");
        }
        Integer reservationID = placeRepository.reservePlace(memberIdx, placeIdx, LocalDateTime.now(), startTime, startTime.plusMinutes(15), false);
        return placeRepository.findReservationById(reservationID).orElseThrow(() -> new BadRequestException("입력 정보가 올바르지 않습니다."));
    }

    @Override
    public List<ReservationResDto> readReservationDetail(Long placeIdx) {
        return placeRepository.findReservationByPlaceId(placeIdx);
    }

    @Override
    public List<ReservationResDto> readMyReservations(Long memberIdx) {
        return placeRepository.findReservationByPlaceId(memberIdx);
    }
}
