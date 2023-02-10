package dev.be.dorothy.member.service;

import java.util.Objects;

public class LoginReqDto {
    private String memberId;
    private String password;

    public LoginReqDto() {}

    public LoginReqDto(String memberId, String password) {
        this.memberId = memberId;
        this.password = password;
    }

    public void setMemberId(String memberId) {
        this.memberId = memberId;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getMemberId() {
        return memberId;
    }

    public String getPassword() {
        return password;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        LoginReqDto that = (LoginReqDto) o;
        return Objects.equals(memberId, that.memberId) && Objects.equals(password, that.password);
    }

    @Override
    public int hashCode() {
        return Objects.hash(memberId, password);
    }
}