package dev.be.dorothy.reservation.service;

import dev.be.dorothy.aspect.RedissonKeyUtils;
import dev.be.dorothy.reservation.repository.PlaceRepository;
import org.springframework.stereotype.Service;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.HashMap;
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
            LocalTime startTime = LocalTime.parse(startTimeStr.get("time")).withSecond(0);
            String key = RedissonKeyUtils.keyBuilder(placeIdx, startTime);
            if(!placeReservationManagerImpl.reservePlace(key, memberIdx)){
                resultList.add(ReservationResDto.of(placeIdx, startTime, startTime.plusMinutes(15)));
            }else{
                placeRepository.reservePlace(memberIdx, placeIdx, LocalDateTime.now(), startTime, startTime.plusMinutes(15), false);
            }
        }
        placeReservationManagerImpl.findFailReservation(startTimeList.size(), resultList.size(), resultList);
        return resultList;
    }

    @Override
    public List<ReservationResDto> readReservationDetail(Long placeIdx) {
        return placeRepository.findReservationByPlaceId(placeIdx);
    }

    @Override
    public List<ReservationResDto> readMyReservations(Long memberIdx) {
        List<ReservationResDto> reservations = placeRepository.findReservationByMemberId(memberIdx);
        if(reservations.isEmpty())
            return reservations;
        Map<Long, ArrayList<ReservationResDto>> reservationMap = reservationListToMap(reservations);
        return getResultList(reservationMap);
    }

    private List<ReservationResDto> getResultList(Map<Long, ArrayList<ReservationResDto>> reservationMap) {
        List<ReservationResDto> resultList = new ArrayList<>();
        reservationMap.forEach((idx, reserve)->{
            ReservationResDto tempReservation = reserve.get(0);
            for(int i = 1 ; i < reserve.size(); i++){
                ReservationResDto reservation = reserve.get(i);
                if(!reservation.getStartTime().equals(tempReservation.getEndTime()) || !reservation.getPlaceIdx().equals(tempReservation.getPlaceIdx()) ) {
                    resultList.add(tempReservation);
                    tempReservation = reservation;
                }else{
                    tempReservation.setEndTime(reservation.getEndTime());
                }
            }
            resultList.add(tempReservation);
        });
        return resultList;
    }

    private Map<Long, ArrayList<ReservationResDto>> reservationListToMap(List<ReservationResDto> reservations) {
        Map<Long, ArrayList<ReservationResDto>> reservationMap = new HashMap<>();
        reservations.forEach(reservation -> {
            if(reservationMap.get(reservation.getPlaceIdx()) != null) {
                reservationMap.get(reservation.getPlaceIdx()).add(reservation);
            }else{
                reservationMap.put(reservation.getPlaceIdx(), new ArrayList<>(List.of(reservation)));
            }
        });
        return reservationMap;
    }

}
