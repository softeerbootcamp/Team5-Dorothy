package dev.be.dorothy.member.service;

import dev.be.dorothy.exception.BadRequestException;
import dev.be.dorothy.exception.InternalServerErrorException;
import dev.be.dorothy.member.Member;
import dev.be.dorothy.member.MemberRole;
import dev.be.dorothy.member.repository.MemberRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Optional;

@Service
public class MemberServiceImpl implements MemberService {
    private final MemberSignUpValidator memberSignUpValidator;
    private final MemberRepository memberRepository;
    private final PasswordEncryptor passwordEncryptor;

    public MemberServiceImpl(MemberSignUpValidator memberSignUpValidator, MemberRepository memberRepository, PasswordEncryptor passwordEncryptor) {
        this.memberSignUpValidator = memberSignUpValidator;
        this.memberRepository = memberRepository;
        this.passwordEncryptor = passwordEncryptor;
    }

    @Override
    public MemberResDto signUp(SignUpReqDto signUpReqDto) {
        memberSignUpValidator.validateId(signUpReqDto.getMemberId());
        memberSignUpValidator.validateEmailRegex(signUpReqDto.getEmail());
        memberSignUpValidator.validatePassword(signUpReqDto.getPassword(), signUpReqDto.getPasswordCheck());
        memberRepository.insert(
                signUpReqDto.getMemberId(),
                passwordEncryptor.encrypt(signUpReqDto.getPassword()),
                signUpReqDto.getName(),
                signUpReqDto.getEmail(),
                "",
                LocalDateTime.now().toString(),
                LocalDateTime.now().toString(),
                false,
                MemberRole.MEMBER.name()
        );

        Optional<Member> optionalMember = memberRepository.findByMemberId(signUpReqDto.getMemberId());
        Member member = optionalMember.orElseThrow(InternalServerErrorException::new);
        return MemberResDto.from(member);
    }

    @Override
    public MemberResDto login(LoginReqDto loginReqDto) {
        Member member = memberRepository.findByMemberId(loginReqDto.getMemberId())
                .orElseThrow(() -> new BadRequestException("입력 정보가 올바르지 않습니다."));
        passwordEncryptor.match(loginReqDto.getPassword(), member.getPassword());

        return MemberResDto.from(member);
    }
}
