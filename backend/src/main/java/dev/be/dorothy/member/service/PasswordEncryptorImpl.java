package dev.be.dorothy.member.service;

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

    }
}
