package dev.be.dorothy.member.service;

public interface MemberSignUpValidator {
    void validateEmailRegex(String email);
    void validateId(String memberId); // ID 중복 체크랑 정규식 체크
    void validatePassword(String password, String passwordCheck); // password 정규식 체크랑 password, 확인 password 같은지 체크
}
