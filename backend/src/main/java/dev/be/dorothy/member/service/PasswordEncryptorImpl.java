package dev.be.dorothy.member.service;

import dev.be.dorothy.exception.BadRequestException;

import java.math.BigInteger;
import java.security.MessageDigest;
import java.security.SecureRandom;
import java.util.Base64;

public class PasswordEncryptorImpl implements PasswordEncryptor {
    private final MessageDigest messageDigest;

    public PasswordEncryptorImpl(MessageDigest messageDigest) {
        this.messageDigest = messageDigest;
    }

    @Override
    public String encrypt(String password, String salt) {
        password += salt;
        messageDigest.update(password.getBytes());

        return String.format("%064x", new BigInteger(1, messageDigest.digest()));
    }

    @Override
    public void match(String password, String salt, String hashedPassword) {
        String requestedPassword = encrypt(password, salt);
        boolean equals = requestedPassword.equals(hashedPassword);
        if (!equals) {
            throw new BadRequestException("입력 정보가 올바르지 않습니다.");
        }
    }

    @Override
    public String getSalt() {
        SecureRandom random = new SecureRandom();
        byte[] bytes = new byte[16];
        random.nextBytes(bytes);

        return new String(Base64.getEncoder().encode(bytes));
    }
}
