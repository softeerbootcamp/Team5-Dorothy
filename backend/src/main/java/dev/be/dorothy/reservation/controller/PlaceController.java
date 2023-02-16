package dev.be.dorothy.reservation.controller;

import dev.be.dorothy.common.CommonResponse;
import dev.be.dorothy.member.service.MemberResDto;
import dev.be.dorothy.reservation.service.*;
import dev.be.dorothy.security.context.ContextHolder;
import dev.be.dorothy.security.context.MemberDetail;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/v1/place")
public class PlaceController {

    private final PlaceRegisterService placeRegisterService;
    private final PlaceReservationService placeReservationService;

    public PlaceController(PlaceRegisterService placeRegisterService, PlaceReservationServiceImpl placeReservationService) {
        this.placeRegisterService = placeRegisterService;
        this.placeReservationService = placeReservationService;
    }

    @GetMapping("")
    public ResponseEntity<CommonResponse> placeList(){
        List<PlaceResDto> placeList = placeRegisterService.retrievePlaces();
        CommonResponse commonResponse = new CommonResponse(HttpStatus.OK, "공간 조회에 성공하였습니다.", placeList);
        return new ResponseEntity<>(commonResponse, HttpStatus.OK);
    }

    @PostMapping("")
    public ResponseEntity<CommonResponse> placeAdd(@RequestBody Map<String, Object> requestMap){
        PlaceResDto newPlace = placeRegisterService.addPlace(requestMap.get("name").toString());
        CommonResponse commonResponse = new CommonResponse(HttpStatus.CREATED, "공간 등록이 완료되었습니다.", newPlace);
        return new ResponseEntity<>(commonResponse, HttpStatus.CREATED);
    }

    @GetMapping("/{placeIdx}")
    public ResponseEntity<CommonResponse> placeDetail(@PathVariable Long placeIdx){
        List<ReservationResDto> placeList = placeReservationService.readReservationDetail(placeIdx);
        CommonResponse commonResponse = new CommonResponse(HttpStatus.OK, "공간 대여 현황 조회에 성공하였습니다.", placeList);
        return new ResponseEntity<>(commonResponse, HttpStatus.OK);
    }

    @PostMapping("/reservation/{placeIdx}")
    public ResponseEntity<CommonResponse> reservePlace(
            @PathVariable Long placeIdx,
            @RequestBody Map<String, Object> requestMap){
        MemberDetail memberDetail = (MemberDetail) ContextHolder.getContext().getPrincipal();
        List<ReservationResDto> appliedPlace = placeReservationService.reservePlace(memberDetail.getMemberDto().getIdx(),placeIdx, requestMap.get("data"));
        CommonResponse commonResponse = new CommonResponse(HttpStatus.OK, "공간 대여 신청이 완료되었습니다.", appliedPlace);
        return new ResponseEntity<>(commonResponse, HttpStatus.OK);
    }

    @GetMapping("/reservation")
    public ResponseEntity<CommonResponse> myReservation(){
        MemberDetail principal = (MemberDetail) ContextHolder.getContext().getPrincipal();
        MemberResDto memberDto = principal.getMemberDto();

        List<ReservationResDto> placeList = placeReservationService.readMyReservations(memberDto.getIdx());
        CommonResponse commonResponse = new CommonResponse(HttpStatus.OK, "공간 대여 현황 조회에 성공하였습니다.", placeList);
        return new ResponseEntity<>(commonResponse, HttpStatus.OK);
    }

}
