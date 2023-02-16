package dev.be.dorothy.reservation.service;

import dev.be.dorothy.aspect.RedissonKeyUtils;
import dev.be.dorothy.reservation.repository.PlaceRepository;
import org.springframework.stereotype.Service;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Service
public class PlaceReservationServiceImpl implements PlaceReservationService{

    private final PlaceRepository placeRepository;
    private final PlaceReservationManagerImpl placeReservationManagerImpl;
    public static final String RESERVATION_KEY = "RESERVATION_";

    public PlaceReservationServiceImpl(PlaceRepository placeRepository, PlaceReservationManagerImpl placeReservationManagerImpl) {
        this.placeRepository = placeRepository;
        this.placeReservationManagerImpl = placeReservationManagerImpl;
    }

    @Override
    public List<ReservationResDto> reservePlace(Long memberIdx, Long placeIdx, Object startTimeObj) {
        List<Map<String, String>> startTimeList = (ArrayList) startTimeObj;
        List<ReservationResDto> resultList = new ArrayList<>();
        for(Map<String, String> startTimeStr : startTimeList){
            LocalTime startTime = LocalTime.parse(startTimeStr.get("time"));
            String key = RedissonKeyUtils.keyBuilder(placeIdx, startTime);
            if(!placeReservationManagerImpl.reservePlace(key, memberIdx)){
                resultList.add(ReservationResDto.of(placeIdx, startTime));
            }else{
            placeRepository.reservePlace(memberIdx, placeIdx, LocalDateTime.now(), startTime, startTime.plusMinutes(15), false);
            }
        }
        return resultList;
    }

    @Override
    public List<ReservationResDto> readReservationDetail(Long placeIdx) {
        return placeRepository.findReservationByPlaceId(placeIdx);
    }

    @Override
    public List<ReservationResDto> readMyReservations(Long memberIdx) {
        return placeRepository.findReservationByMemberId(memberIdx);
    }

}
