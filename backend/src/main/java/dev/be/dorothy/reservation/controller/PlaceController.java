package dev.be.dorothy.reservation.controller;

import dev.be.dorothy.common.CommonResponse;
import dev.be.dorothy.reservation.Place;
import dev.be.dorothy.reservation.service.PlaceResDto;
import dev.be.dorothy.reservation.service.PlaceService;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/places")
public class PlaceController {

    private final PlaceService placeService;

    public PlaceController(PlaceService placeService) {
        this.placeService = placeService;
    }

    @PostMapping("")
    public ResponseEntity<CommonResponse> registerPlace(@RequestParam("name") String name){
        Place register = placeService.register(name);
        CommonResponse commonResponse = new CommonResponse(HttpStatus.CREATED, "공간 등록이 완료되었습니다.", register);
        return new ResponseEntity<>(commonResponse, HttpStatus.CREATED);
    }

    @GetMapping("/list")
    public ResponseEntity<CommonResponse> listAllPlaces(){
        List<PlaceResDto> placeList = placeService.retrievePlaces();
        CommonResponse commonResponse = new CommonResponse(HttpStatus.OK, "공간 조회가 완료되었습니다.", placeList);
        return new ResponseEntity<>(commonResponse, HttpStatus.CREATED);
    }

}
