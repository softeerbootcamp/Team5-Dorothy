package dev.be.dorothy.member.service;

import dev.be.dorothy.exception.BadRequestException;
import dev.be.dorothy.member.repository.MemberRepository;
import org.springframework.stereotype.Component;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

@Component
public class MemberSignUpValidatorImpl implements MemberSignUpValidator {
    private final MemberRepository memberRepository;

    public MemberSignUpValidatorImpl(MemberRepository memberRepository) {
        this.memberRepository = memberRepository;
    }

    @Override
    public void validateEmailRegex(String email) {
        // TODO regex -> ^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$
        String regex = "^[_a-z0-9-]+(.[_a-z0-9-]+)*@(?:\\w+\\.)+\\w+$";
        validateRegex(regex, email);
    }

    @Override
    public void validateId(String memberId) {
        validateDuplicatedId(memberId);
        String regex = "^[a-zA-Z]{1}[a-zA-Z0-9_]{4,11}$";
        validateRegex(regex, memberId);
    }

    @Override
    public void validatePassword(String password, String passwordCheck) {
        // TODO regex -> ^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&+=]).*$
        String regex = "^(?=.*[A-Za-z])(?=.*\\d)(?=.*[~!@#$%^&*()+|=])[A-Za-z\\d~!@#$%^&*()+|=]{8,16}$";
        validateRegex(regex, password);
        boolean isEquals = password.equals(passwordCheck);

        if (!isEquals) {
            throw new BadRequestException("비밀번호가 확인 비밀번호와 일치하지 않습니다.");
        }
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
