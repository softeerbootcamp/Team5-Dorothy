package dev.be.dorothy.auth;

import dev.be.dorothy.member.Member;
import dev.be.dorothy.member.MemberRole;

public class MemberDetail {

    private final String username;
    private final String password;
    private final MemberRole role;

    private MemberDetail(String username, String password, MemberRole role) {
        this.username = username;
        this.password = password;
        this.role = role;
    }

    public static MemberDetail from(Member member){
        return new MemberDetail(member.getMemberId(),
                member.getPassword(),
                member.getRole());
    }
    public String getUsername() {
        return username;
    }

    public String getPassword() {
        return password;
    }

    public MemberRole getRole() {
        return role;
    }
}
