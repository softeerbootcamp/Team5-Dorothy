package dev.be.dorothy.security.context;

import dev.be.dorothy.member.Member;
import dev.be.dorothy.member.service.MemberResDto;

public class MemberDetail {

    private final MemberResDto memberDto;

    private MemberDetail(MemberResDto memberDto) {
        this.memberDto = memberDto;
    }

    public static MemberDetail from(Member member){
        return new MemberDetail(MemberResDto.from(member));
    }

    public MemberResDto getMemberDto() {
        return memberDto;
    }
}
