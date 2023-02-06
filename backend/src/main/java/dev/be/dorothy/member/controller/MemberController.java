package dev.be.dorothy.member.controller;

import dev.be.dorothy.common.CommonResponse;
import dev.be.dorothy.member.service.MemberResDto;
import dev.be.dorothy.member.service.MemberService;
import dev.be.dorothy.member.service.SignUpReqDto;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/member")
public class MemberController {

    private final MemberService memberService;

    public MemberController(MemberService memberService) {
        this.memberService = memberService;
    }

    @PostMapping("")
    public ResponseEntity<CommonResponse> signUp(@RequestBody SignUpReqDto signUpReqDto) {
        MemberResDto memberResDto = memberService.signUp(signUpReqDto);
        CommonResponse commonResponse = new CommonResponse(HttpStatus.CREATED, "회원가입이 완료되었습니다.", memberResDto);
        // TODO: 세션 등록 및 쿠키 발급
        return new ResponseEntity<>(commonResponse, HttpStatus.CREATED);
    }
}