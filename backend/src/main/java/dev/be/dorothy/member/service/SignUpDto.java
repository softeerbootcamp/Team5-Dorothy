package dev.be.dorothy.member.service;

public class SignUpDto {
    private final String memberId;
    private final String password;
    private final String passwordCheck;
    private final String name;
    private final String email;

    public SignUpDto(String memberId, String password, String passwordCheck, String name, String email) {
        this.memberId = memberId;
        this.password = password;
        this.passwordCheck = passwordCheck;
        this.name = name;
        this.email = email;
    }

    public String getMemberId() {
        return memberId;
    }

    public String getPassword() {
        return password;
    }

    public String getPasswordCheck() {
        return passwordCheck;
    }

    public String getName() {
        return name;
    }

    public String getEmail() {
        return email;
    }
}
