package dev.be.dorothy.member.service;

public interface MemberSignUpValidator {
    boolean emailRegexValidate(String email);
    boolean idValidate(String memberId); // ID 중복 체크랑 정규식 체크
    boolean passwordValidate(String password, String passwordCheck); // password 정규식 체크랑 password, 확인 password 같은지 체크
}
