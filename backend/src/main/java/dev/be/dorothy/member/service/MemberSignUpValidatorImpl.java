package dev.be.dorothy.member.service;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class MemberSignUpValidatorImpl implements MemberSignUpValidator {
    @Override
    public boolean emailRegexValidate(String email) {
        boolean err = false;
        String regex = "^[_a-z0-9-]+(.[_a-z0-9-]+)*@(?:\\w+\\.)+\\w+$";
        Pattern p = Pattern.compile(regex);
        Matcher m = p.matcher(email);
        if(m.matches()) {
            err = true;
        }
        return err;
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
