package dev.be.dorothy.member.service;

public class LoginReqDto {
    private String memberId;
    private String password;

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
}
