package dev.be.dorothy.auth;

import dev.be.dorothy.exception.InternalServerErrorException;
import dev.be.dorothy.member.Member;
import dev.be.dorothy.member.repository.MemberRepository;
import org.springframework.stereotype.Service;

@Service
public class MemberDetailService {

    private final MemberRepository memberRepository;

    public MemberDetailService(MemberRepository memberRepository) {
        this.memberRepository = memberRepository;
    }

    public MemberDetail loadMemberByName(String userId){
        Member member = memberRepository.findByMemberId(userId).orElseThrow(InternalServerErrorException::new);
        return MemberDetail.from(member);
    }
}
