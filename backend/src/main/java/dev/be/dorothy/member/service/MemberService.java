package dev.be.dorothy.member.service;

public interface MemberService {
    MemberResDto signUp(SignUpReqDto signUpReqDto);
    MemberResDto login(LoginReqDto loginReqDto);
}
