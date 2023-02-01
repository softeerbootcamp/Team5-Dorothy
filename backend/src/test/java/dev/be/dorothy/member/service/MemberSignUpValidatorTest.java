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
import static org.junit.jupiter.api.Assertions.assertAll;
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

        boolean result1 = memberSignUpValidatorImpl.emailRegexValidate(case1);
        boolean result2 = memberSignUpValidatorImpl.emailRegexValidate(case2);
        boolean result3 = memberSignUpValidatorImpl.emailRegexValidate(case3);
        boolean result4 = memberSignUpValidatorImpl.emailRegexValidate(case4);
        boolean result5 = memberSignUpValidatorImpl.emailRegexValidate(case5);

        assertAll(
                () -> assertThat(result1).isFalse(),
                () -> assertThat(result2).isFalse(),
                () -> assertThat(result3).isFalse(),
                () -> assertThat(result4).isFalse(),
                () -> assertThat(result5).isFalse()
        );
    }

    @Test
    @DisplayName("이메일이 정규식에 부합하는지 테스트 - 성공 케이스")
    void emailRegexValidateSuccessTest() {
        String case1 = "example@abcd.com";

        boolean result1 = memberSignUpValidatorImpl.emailRegexValidate(case1);

        assertThat(result1).isTrue();
    }

    @Test
    @DisplayName("ID 중복 체크 - 중복인 경우")
    void idDuplicateValidate() {
        String case1 = "abcd1234";
        given(memberRepository.countByMemberId(case1)).willReturn(1);

        BadRequestException badRequestException =
                Assertions.assertThrows(BadRequestException.class, () ->
                memberSignUpValidatorImpl.idValidate(case1));

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

        boolean result1 = memberSignUpValidatorImpl.idValidate(case1);
        boolean result2 = memberSignUpValidatorImpl.idValidate(case2);
        boolean result3 = memberSignUpValidatorImpl.idValidate(case3);
        boolean result4 = memberSignUpValidatorImpl.idValidate(case4);
        boolean result5 = memberSignUpValidatorImpl.idValidate(case5);
        boolean result6 = memberSignUpValidatorImpl.idValidate(case6);

        assertAll(
                () -> assertThat(result1).isFalse(),
                () -> assertThat(result2).isFalse(),
                () -> assertThat(result3).isFalse(),
                () -> assertThat(result4).isFalse(),
                () -> assertThat(result5).isFalse(),
                () -> assertThat(result6).isFalse()
        );
    }
}
