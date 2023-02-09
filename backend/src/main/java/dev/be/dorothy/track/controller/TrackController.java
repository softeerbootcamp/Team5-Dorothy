package dev.be.dorothy.track.controller;

import dev.be.dorothy.common.CommonResponse;
import dev.be.dorothy.member.MemberRole;
import dev.be.dorothy.member.service.MemberResDto;
import dev.be.dorothy.security.context.ContextHolder;
import dev.be.dorothy.security.context.MemberDetail;
import dev.be.dorothy.track.service.TrackRegisterService;
import dev.be.dorothy.track.service.TrackResDto;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/track")
public class TrackController {
    private final TrackRegisterService trackRegisterService;

    public TrackController(TrackRegisterService trackRegisterService) {
        this.trackRegisterService = trackRegisterService;
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
}
