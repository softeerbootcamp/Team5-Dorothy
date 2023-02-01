package dev.be.dorothy.member.service;


import java.security.MessageDigest;

public class PasswordEncryptorImpl implements PasswordEncryptor {
    private final MessageDigest messageDigest;

    public PasswordEncryptorImpl(MessageDigest messageDigest) {
        this.messageDigest = messageDigest;
    }

    @Override
    public String encrypt(String password) {
        return null;
    }

    @Override
    public void match(String password, String hashedPassword) {

    }
}
