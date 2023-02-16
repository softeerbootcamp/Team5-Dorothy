package dev.be.dorothy.track.controller;

import dev.be.dorothy.common.CommonResponse;
import dev.be.dorothy.exception.ForbiddenException;
import dev.be.dorothy.member.MemberRole;
import dev.be.dorothy.member.service.MemberResDto;
import dev.be.dorothy.security.context.ContextHolder;
import dev.be.dorothy.security.context.MemberDetail;
import dev.be.dorothy.track.service.TrackCodeManagerService;
import dev.be.dorothy.track.service.TrackRegisterService;
import dev.be.dorothy.track.service.TrackResDto;
import dev.be.dorothy.track.service.TrackRetrieveService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Objects;

@RestController
@RequestMapping("/api/v1/track")
public class TrackController {
    private final TrackRegisterService trackRegisterService;
    private final TrackRetrieveService trackRetrieveService;
    private final TrackCodeManagerService trackCodeManagerService;

    public TrackController(
            TrackRegisterService trackRegisterService,
            TrackRetrieveService trackRetrieveService,
            TrackCodeManagerService trackCodeManagerService) {
        this.trackRegisterService = trackRegisterService;
        this.trackRetrieveService = trackRetrieveService;
        this.trackCodeManagerService = trackCodeManagerService;
    }

    @PostMapping("")
    public ResponseEntity<CommonResponse> create(@RequestParam("name") String name) {
        MemberDetail principal = (MemberDetail) ContextHolder.getContext().getPrincipal();
        MemberResDto memberDto = principal.getMemberDto();

        TrackResDto trackResDto = trackRegisterService.create(
                memberDto.getIdx(),
                name,
                MemberRole.valueOf(memberDto.getRole())
        );
        CommonResponse commonResponse = new CommonResponse(HttpStatus.CREATED, "트랙 생성이 완료되었습니다.", trackResDto);

        return new ResponseEntity<>(commonResponse, HttpStatus.CREATED);
    }

    @GetMapping("/list")
    public ResponseEntity<CommonResponse> readAll() {
        MemberDetail principal = (MemberDetail) ContextHolder.getContext().getPrincipal();
        MemberResDto memberDto = principal.getMemberDto();

        List<TrackResDto> trackResDtos = trackRetrieveService.retrieveTracks(memberDto.getIdx());
        CommonResponse commonResponse = new CommonResponse(HttpStatus.OK, "전체 트랙에 대한 조회가 완료되었습니다.", trackResDtos);

        return new ResponseEntity<>(commonResponse, HttpStatus.OK);
    }

    @PostMapping("/join/{trackIdx}")
    public ResponseEntity<CommonResponse> join(
            @PathVariable("trackIdx") Long trackIdx,
            @RequestParam("joinCode") String joinCode
    ) {
        MemberDetail principal = (MemberDetail) ContextHolder.getContext().getPrincipal();
        MemberResDto memberDto = principal.getMemberDto();

        TrackResDto trackResDto = trackRegisterService.join(trackIdx, memberDto.getIdx(), joinCode);
        CommonResponse commonResponse = new CommonResponse(HttpStatus.OK, "트랙 참여에 성공하였습니다.", trackResDto);
        return new ResponseEntity<>(commonResponse, HttpStatus.OK);
    }

    @GetMapping("/code/{trackIdx}")
    public ResponseEntity<CommonResponse> getTrackCode(
            @PathVariable("trackIdx") Long trackIdx
    ) {
        MemberDetail principal = (MemberDetail) ContextHolder.getContext().getPrincipal();
        MemberResDto memberDto = principal.getMemberDto();

        if(!Objects.equals(MemberRole.valueOf(memberDto.getRole()), MemberRole.ADMIN)) {
            throw new ForbiddenException();
        }

        String trackCode = trackCodeManagerService.read(String.valueOf(trackIdx));
        CommonResponse commonResponse = new CommonResponse(HttpStatus.OK, "트랙 초대 코드 조회가 완료되었습니다.", trackCode);
        return new ResponseEntity<>(commonResponse, HttpStatus.OK);
    }
}
