package dev.be.dorothy.member.service;

import dev.be.dorothy.exception.BadRequestException;
import dev.be.dorothy.member.repository.MemberRepository;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class MemberSignUpValidatorImpl implements MemberSignUpValidator {
    private final MemberRepository memberRepository;

    public MemberSignUpValidatorImpl(MemberRepository memberRepository) {
        this.memberRepository = memberRepository;
    }

    @Override
    public boolean emailRegexValidate(String email) {
        String regex = "^[_a-z0-9-]+(.[_a-z0-9-]+)*@(?:\\w+\\.)+\\w+$";
        validateRegex(regex, email);
        return true;
    }

    @Override
    public boolean idValidate(String memberId) {
        validateDuplicatedId(memberId);
        String regex = "^[a-zA-Z]{1}[a-zA-Z0-9_]{4,11}$";
        validateRegex(regex, memberId);
        return true;
    }

    @Override
    public boolean passwordValidate(String password, String passwordCheck) {
        return false;
    }

    private void validateDuplicatedId(String memberId) {
        int count = memberRepository.countByMemberId(memberId);

        if(count >= 1) {
            throw new BadRequestException("중복된 ID입니다.");
        }
    }

    private void validateRegex(String regex, String target) {
        Pattern p = Pattern.compile(regex);
        Matcher m = p.matcher(target);
        if(!m.matches()) {
            throw new BadRequestException("조건에 부합하지 않습니다.");
        }
    }
}
