package dev.be.dorothy.auth.authentication;

import dev.be.dorothy.auth.MemberDetail;
import dev.be.dorothy.auth.MemberDetailService;
import org.springframework.stereotype.Component;

@Component
public class UsernameAndPasswordTokenProvider {

    private final MemberDetailService memberDetailService;

    public UsernameAndPasswordTokenProvider(MemberDetailService memberDetailService) {
        this.memberDetailService = memberDetailService;
    }

    public Authentication getAuthentication(String username){
        MemberDetail memberDetail = memberDetailService.loadMemberByName(username);
        return new UsernameAndPasswordToken(memberDetail, "", memberDetail.getRole(), true);
    }
}
