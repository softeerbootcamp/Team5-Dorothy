package dev.be.dorothy.member.service;

import dev.be.dorothy.exception.BadRequestException;
import dev.be.dorothy.member.repository.MemberRepository;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.BDDMockito.given;

@ExtendWith(MockitoExtension.class)
public class MemberSignUpValidatorTest {
    @Mock
    MemberRepository memberRepository;

    @InjectMocks
    MemberSignUpValidatorImpl memberSignUpValidatorImpl;

    @Test
    @DisplayName("이메일이 정규식에 부합하는지 테스트 - 실패 케이스")
    void emailRegexValidateFailTest() {
        String case1 = "";
        String case2 = "example";
        String case3 = "@";
        String case4 = "example@";
        String case5 = "example@abcd";

        assertAll(
                () -> assertThrows(BadRequestException.class, () -> memberSignUpValidatorImpl.validateEmailRegex(case1)),
                () -> assertThrows(BadRequestException.class, () -> memberSignUpValidatorImpl.validateEmailRegex(case2)),
                () -> assertThrows(BadRequestException.class, () -> memberSignUpValidatorImpl.validateEmailRegex(case3)),
                () -> assertThrows(BadRequestException.class, () -> memberSignUpValidatorImpl.validateEmailRegex(case4)),
                () -> assertThrows(BadRequestException.class, () -> memberSignUpValidatorImpl.validateEmailRegex(case5))
        );
    }

    @Test
    @DisplayName("이메일이 정규식에 부합하는지 테스트 - 성공 케이스")
    void emailRegexValidateSuccessTest() {
        String case1 = "example@abcd.com";

        assertDoesNotThrow(() -> memberSignUpValidatorImpl.validateEmailRegex(case1));
    }

    @Test
    @DisplayName("ID 중복 체크 - 중복인 경우")
    void idDuplicateValidate() {
        String case1 = "abcd1234";
        given(memberRepository.countByMemberId(case1)).willReturn(1);

        BadRequestException badRequestException =
                Assertions.assertThrows(BadRequestException.class, () ->
                memberSignUpValidatorImpl.validateId(case1));

        assertThat(badRequestException.getMessage()).isEqualTo("중복된 ID입니다.");
    }

    @Test
    @DisplayName("ID가 정규식에 부합하는지 테스트 - 실패 케이스")
    void idRegexValidate() {
        String case1 = "";
        String case2 = "한글";
        String case3 = "???";
        String case4 = "abcd";
        String case5 = "abcdefghijklm";
        String case6 = "1234abcd";
        given(memberRepository.countByMemberId(any())).willReturn(0);

        assertAll(
                () -> assertThrows(BadRequestException.class, () -> memberSignUpValidatorImpl.validateId(case1)),
                () -> assertThrows(BadRequestException.class, () -> memberSignUpValidatorImpl.validateId(case2)),
                () -> assertThrows(BadRequestException.class, () -> memberSignUpValidatorImpl.validateId(case3)),
                () -> assertThrows(BadRequestException.class, () -> memberSignUpValidatorImpl.validateId(case4)),
                () -> assertThrows(BadRequestException.class, () -> memberSignUpValidatorImpl.validateId(case5)),
                () -> assertThrows(BadRequestException.class, () -> memberSignUpValidatorImpl.validateId(case6))
        );
    }

    @Test
    @DisplayName("비밀번호가 정규식에 부합하는지 테스트 - 실패 케이스")
    void validatePasswordRegex() {
        //'숫자', '문자', '특수문자' 무조건 1개 이상, 비밀번호 '최소 8자에서 최대 16자'까지 허용
        String case1 = "";
        String case2 = "한글";
        String case3 = "abcdefgh";
        String case4 = "12345678";
        String case5 = "a1234567";
        String case6 = "abcd12!";
        String case7 = "abcdefg123456789!";
        String case8 = "!@#$%^&*";
        String case9 = "abcd!@#$";
        String case10 = "1234!@#$";

        assertAll(
                () -> assertThrows(BadRequestException.class, () -> memberSignUpValidatorImpl.validatePassword(case1, case1)),
                () -> assertThrows(BadRequestException.class, () -> memberSignUpValidatorImpl.validatePassword(case2, case2)),
                () -> assertThrows(BadRequestException.class, () -> memberSignUpValidatorImpl.validatePassword(case3, case3)),
                () -> assertThrows(BadRequestException.class, () -> memberSignUpValidatorImpl.validatePassword(case4, case4)),
                () -> assertThrows(BadRequestException.class, () -> memberSignUpValidatorImpl.validatePassword(case5, case5)),
                () -> assertThrows(BadRequestException.class, () -> memberSignUpValidatorImpl.validatePassword(case6, case6)),
                () -> assertThrows(BadRequestException.class, () -> memberSignUpValidatorImpl.validatePassword(case7, case7)),
                () -> assertThrows(BadRequestException.class, () -> memberSignUpValidatorImpl.validatePassword(case8, case8)),
                () -> assertThrows(BadRequestException.class, () -> memberSignUpValidatorImpl.validatePassword(case9, case9)),
                () -> assertThrows(BadRequestException.class, () -> memberSignUpValidatorImpl.validatePassword(case10, case10))
        );
    }

    @Test
    @DisplayName("비밀번호와 확인 비밀번호가 일치하는지 테스트 - 실패 케이스")
    void validatePasswordCheck() {
        String password = "a123467!";
        String passwordCheck = "b1234567!";

        assertThrows(
                BadRequestException.class,
                () -> memberSignUpValidatorImpl.validatePassword(password, passwordCheck)
        );
    }

    @Test
    @DisplayName("비밀먼호가 정규식에 부합하고 확인 비밀번호와 일치하는지 테스트 - 성공 케이스")
    void validatePasswordSuccessTest() {
        String password = "a123467!";
        String passwordCheck = "a1234567!";

        assertDoesNotThrow(() -> memberSignUpValidatorImpl.validatePassword(password, passwordCheck));
    }
}
