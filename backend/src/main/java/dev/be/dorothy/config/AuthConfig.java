package dev.be.dorothy.config;

import dev.be.dorothy.member.service.PasswordEncryptor;
import dev.be.dorothy.member.service.PasswordEncryptorImpl;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

@Configuration
public class AuthConfig {

    @Bean
    public PasswordEncryptor getPasswordEncryptor() throws NoSuchAlgorithmException {
        return new PasswordEncryptorImpl(MessageDigest.getInstance("SHA-256"));
    }
}
