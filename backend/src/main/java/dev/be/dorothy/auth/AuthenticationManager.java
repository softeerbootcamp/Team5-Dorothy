package dev.be.dorothy.auth;

import dev.be.dorothy.exception.BadRequestException;
import dev.be.dorothy.member.Member;
import dev.be.dorothy.member.repository.MemberRepository;
import dev.be.dorothy.member.service.LoginReqDto;
import dev.be.dorothy.member.service.MemberResDto;
import dev.be.dorothy.member.service.PasswordEncryptor;
import org.springframework.stereotype.Component;

@Component
public class AuthenticationManager {
    private final MemberRepository memberRepository;
    private final PasswordEncryptor passwordEncryptor;

    public AuthenticationManager(MemberRepository memberRepository, PasswordEncryptor passwordEncryptor) {
        this.memberRepository = memberRepository;
        this.passwordEncryptor = passwordEncryptor;
    }

    public MemberResDto matchAuthentication(LoginReqDto loginReqDto) {
        Member member = memberRepository.findByMemberId(loginReqDto.getMemberId())
                .orElseThrow(() -> new BadRequestException("입력 정보가 올바르지 않습니다."));
        passwordEncryptor.match(loginReqDto.getPassword(), member.getSalt(), member.getPassword());
        return MemberResDto.from(member);
    }
}
