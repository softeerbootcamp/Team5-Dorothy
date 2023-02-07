package dev.be.dorothy.member.service;

import dev.be.dorothy.member.Member;
import dev.be.dorothy.member.MemberRole;
import dev.be.dorothy.member.repository.MemberRepository;
import org.springframework.stereotype.Service;

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

        Member member = Member.of(
                signUpReqDto.getMemberId(),
                passwordEncryptor.encrypt(signUpReqDto.getPassword()),
                signUpReqDto.getName(),
                signUpReqDto.getEmail(),
                MemberRole.MEMBER
        );
        member = memberRepository.save(member);

        return MemberResDto.from(member);
    }

    @Override
    public MemberResDto login(LoginReqDto loginReqDto) {
        return null;
    }
}
