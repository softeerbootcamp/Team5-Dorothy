package dev.be.dorothy.member.service;

import dev.be.dorothy.exception.BadRequestException;
import dev.be.dorothy.mapper.MemberResDtoMapper;
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

        String salt = passwordEncryptor.getSalt();
        String hashedPassword = passwordEncryptor.encrypt(signUpReqDto.getPassword(), salt);

        Member member = Member.of(
                signUpReqDto.getMemberId(),
                hashedPassword,
                salt,
                signUpReqDto.getName(),
                signUpReqDto.getEmail(),
                MemberRole.MEMBER
        );
        member = memberRepository.save(member);

        return MemberResDtoMapper.INSTANCE.entityToMemberResDto(member);
    }

    @Override
    public MemberResDto login(LoginReqDto loginReqDto) {
        Member member = memberRepository.findByMemberId(loginReqDto.getMemberId())
                .orElseThrow(() -> new BadRequestException("입력 정보가 올바르지 않습니다."));
        passwordEncryptor.match(loginReqDto.getPassword(), member.getSalt(), member.getPassword());

        return MemberResDtoMapper.INSTANCE.entityToMemberResDto(member);
    }
}
