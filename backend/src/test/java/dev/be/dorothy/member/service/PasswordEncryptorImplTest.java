package dev.be.dorothy.member.service;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertAll;

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
    void match() {
    }
}