package dev.be.dorothy.auth.authentication;

import dev.be.dorothy.auth.MemberDetail;

public class UsernameAndPasswordToken implements Authentication {

    private final MemberDetail memberDetail;
    private final String credential;
    private final boolean isAuthenticated;

    public UsernameAndPasswordToken(MemberDetail memberDetail, String credential, boolean isAuthenticated) {
        this.memberDetail = memberDetail;
        this.credential = credential;
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
    public Object getRole() {
        return memberDetail.getMemberDto().getRole();
    }

    @Override
    public boolean isAuthenticated() {
        return isAuthenticated;
    }
}
