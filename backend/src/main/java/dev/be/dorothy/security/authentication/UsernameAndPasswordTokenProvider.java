package dev.be.dorothy.security.authentication;

import dev.be.dorothy.security.context.MemberDetail;
import dev.be.dorothy.security.context.MemberDetailService;
import org.springframework.stereotype.Component;

@Component
public class UsernameAndPasswordTokenProvider {

    private final MemberDetailService memberDetailService;

    public UsernameAndPasswordTokenProvider(MemberDetailService memberDetailService) {
        this.memberDetailService = memberDetailService;
    }


    public Authentication getAuthentication(String username){
        MemberDetail memberDetail = memberDetailService.loadMemberByName(username);
        return new UsernameAndPasswordToken(memberDetail, "", true);
    }
}
