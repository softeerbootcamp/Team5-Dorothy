package dev.be.dorothy.auth.authentication;

import dev.be.dorothy.auth.MemberDetail;
import dev.be.dorothy.member.MemberRole;

public class UsernameAndPasswordToken implements Authentication {

    private final MemberDetail memberDetail;
    private final String credential;

    private final MemberRole memberRole;
    private final boolean isAuthenticated;

    public UsernameAndPasswordToken(MemberDetail memberDetail, String credential, MemberRole memberRole, boolean isAuthenticated) {
        this.memberDetail = memberDetail;
        this.credential = credential;
        this.memberRole = memberRole;
        this.isAuthenticated = isAuthenticated;
    }

    @Override
    public Object getPrincipal() {
        return memberDetail;
    }

    @Override
    public Object getCredential() {
        return credential;
    }

    @Override
    public Object getRole(){
        return memberRole;
    }

    @Override
    public boolean isAuthenticated() {
        return isAuthenticated;
    }
}
