package dev.be.dorothy.member.controller;

import dev.be.dorothy.common.CommonResponse;
import dev.be.dorothy.member.service.LoginReqDto;
import dev.be.dorothy.member.service.MemberResDto;
import dev.be.dorothy.member.service.MemberService;
import dev.be.dorothy.member.service.SignUpReqDto;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

@RestController
@RequestMapping("/api/v1/member")
public class MemberController {

    private final MemberService memberService;

    public MemberController(MemberService memberService) {
        this.memberService = memberService;
    }

    @PostMapping("")
    public ResponseEntity<CommonResponse> signUp(
            HttpServletRequest request,
            @RequestBody SignUpReqDto signUpReqDto
    ) {
        MemberResDto memberResDto = memberService.signUp(signUpReqDto);
        CommonResponse commonResponse = new CommonResponse(HttpStatus.CREATED, "회원가입이 완료되었습니다.", memberResDto);

        HttpSession session = request.getSession(true);
        session.setAttribute("member", memberResDto);

        return new ResponseEntity<>(commonResponse, HttpStatus.CREATED);
    }

    @PostMapping("/login")
    public ResponseEntity<CommonResponse> login(
            HttpServletRequest request,
            @RequestBody LoginReqDto loginReqDto
    ) {
        MemberResDto memberResDto = memberService.login(loginReqDto);

        HttpSession session = request.getSession(true);
        session.setAttribute("member", memberResDto);

        CommonResponse commonResponse = new CommonResponse(HttpStatus.OK, "로그인에 성공하였습니다.", memberResDto);
        return new ResponseEntity<>(commonResponse, HttpStatus.OK);
    }
}
