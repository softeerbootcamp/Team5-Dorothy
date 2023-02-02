package dev.be.dorothy.member.service;

import dev.be.dorothy.exception.BadRequestException;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.*;

class PasswordEncryptorImplTest {
    MessageDigest messageDigest;
    PasswordEncryptorImpl passwordEncryptorImpl;

    {
        try {
            messageDigest = MessageDigest.getInstance("SHA-256");
            passwordEncryptorImpl = new PasswordEncryptorImpl(messageDigest);
        } catch (NoSuchAlgorithmException e) {
            throw new RuntimeException(e);
        }
    }

    @Test
    @DisplayName("비밀번호 해시 테스트 - 성공 케이스")
    void encrypt() {
        String password = "a1234567!";

        String hashedPassword = passwordEncryptorImpl.encrypt(password);

        assertAll(
                () -> assertThat(hashedPassword).isNotEqualTo(password),
                () -> assertThat(hashedPassword.length()).isEqualTo(64)
        );
    }

    @Test
    @DisplayName("디비에 저장된 패스워드, 사용자 보낸 비밀번호 간 매치 테스트 - 실패 케이스")
    void matchFailTest() {
        String password = "a1234567!";
        String hashedPassword = "45a49cbdfe0e5b676579f409c96f58759b44cfc907e78d4cbc3qe38a9c67b0ca";

        BadRequestException exception = assertThrows(
                BadRequestException.class,
                () -> passwordEncryptorImpl.match(password, hashedPassword)
        );

        assertThat(exception.getMessage()).isEqualTo("입력 정보가 올바르지 않습니다.");
    }


    @Test
    @DisplayName("디비에 저장된 패스워드, 사용자 보낸 비밀번호 간 매치 테스트 - 성공 케이스")
    void matchSuccessTest() {
        String password = "a1234567!";
        String hashedPassword = "45a49cbdfe0e5b676579f409c96f58759b44cfc907e78d6c2c3fe38a9c67b0cf";

        assertDoesNotThrow(() -> passwordEncryptorImpl.match(password, hashedPassword));
    }
}