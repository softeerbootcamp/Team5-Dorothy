package dev.be.dorothy.member.service;

import dev.be.dorothy.exception.BadRequestException;

import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;

public class PasswordEncryptorImpl implements PasswordEncryptor {

    private final MessageDigest messageDigest;

    public PasswordEncryptorImpl(MessageDigest messageDigest) {
        this.messageDigest = messageDigest;
    }

    @Override
    public String encrypt(String password) {
        byte[] sha256Hash = messageDigest.digest(password.getBytes(StandardCharsets.UTF_8));
        StringBuilder result = new StringBuilder();
        for (byte hash : sha256Hash) {
            result.append(Integer.toString((0xff & hash) + 0x100, 16).substring(1));
        }
        return result.toString();
    }

    @Override
    public void match(String password, String hashedPassword) {
        String requestedPassword = encrypt(password);
        boolean equals = requestedPassword.equals(hashedPassword);
        if (!equals) {
            throw new BadRequestException("입력 정보가 올바르지 않습니다.");
        }
    }
}
