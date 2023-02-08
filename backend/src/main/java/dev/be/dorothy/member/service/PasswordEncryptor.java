package dev.be.dorothy.member.service;

public interface PasswordEncryptor {
    String encrypt(String password, String salt);

    void match(String password, String hashedPassword, String salt);

    String getSalt();
}
