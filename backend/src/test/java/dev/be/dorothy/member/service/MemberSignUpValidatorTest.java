package dev.be.dorothy.member.service;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertAll;

public class MemberSignUpValidatorTest {
    MemberSignUpValidatorImpl memberSignUpValidatorImpl = new MemberSignUpValidatorImpl();

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
}
