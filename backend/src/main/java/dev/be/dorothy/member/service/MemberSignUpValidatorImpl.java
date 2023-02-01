package dev.be.dorothy.member.service;

public class MemberSignUpValidatorImpl implements MemberSignUpValidator {
    @Override
    public boolean emailRegexValidate(String email) {
        return false;
    }

    @Override
    public boolean idValidate(String memberId) {
        return false;
    }

    @Override
    public boolean passwordValidate(String password, String passwordCheck) {
        return false;
    }
}
