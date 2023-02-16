package dev.be.dorothy.reservation.controller;

import dev.be.dorothy.common.CommonResponse;
import dev.be.dorothy.reservation.service.PlaceResDto;
import dev.be.dorothy.reservation.service.PlaceReservationServiceImpl;
import dev.be.dorothy.reservation.service.PlaceService;

import dev.be.dorothy.reservation.service.ReservationResDto;
import dev.be.dorothy.security.context.ContextHolder;
import dev.be.dorothy.security.context.MemberDetail;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalTime;
import java.util.List;

@RestController
@RequestMapping("/api/v1/place")
public class PlaceController {

    private final PlaceService placeService;
    private final PlaceReservationServiceImpl placeReservationService;

    public PlaceController(PlaceService placeService, PlaceReservationServiceImpl placeReservationService) {
        this.placeService = placeService;
        this.placeReservationService = placeReservationService;
    }

    @GetMapping("")
    public ResponseEntity<CommonResponse> placeList(){
        List<PlaceResDto> placeList = placeService.retrievePlaces();
        CommonResponse commonResponse = new CommonResponse(HttpStatus.OK, "공간 조회에 성공하였습니다.", placeList);
        return new ResponseEntity<>(commonResponse, HttpStatus.OK);
    }

    @PostMapping("")
    public ResponseEntity<CommonResponse> placeAdd(@RequestParam("name") String name){
        PlaceResDto newPlace = placeService.addPlace(name);
        CommonResponse commonResponse = new CommonResponse(HttpStatus.CREATED, "공간 등록이 완료되었습니다.", newPlace);
        return new ResponseEntity<>(commonResponse, HttpStatus.CREATED);
    }

    @PostMapping("/reservation/{placeIdx}")
    public ResponseEntity<CommonResponse> applyPlace(
            @PathVariable Long placeIdx,
            @RequestParam("time") @DateTimeFormat(iso = DateTimeFormat.ISO.TIME) LocalTime startTime){
        MemberDetail memberDetail = (MemberDetail) ContextHolder.getContext().getPrincipal();
        ReservationResDto appliedPlace = placeReservationService.reservePlace(memberDetail.getMemberDto().getIdx(),placeIdx, startTime);
        CommonResponse commonResponse = new CommonResponse(HttpStatus.OK, "공간 대여 신청이 완료되었습니다.", appliedPlace);
        return new ResponseEntity<>(commonResponse, HttpStatus.CREATED);
    }

}
