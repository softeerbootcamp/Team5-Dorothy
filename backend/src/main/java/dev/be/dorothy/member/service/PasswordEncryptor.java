package dev.be.dorothy.member.service;

public interface PasswordEncryptor {
    String encrypt(String password);
    void match(String password, String hashedPassword);
}
