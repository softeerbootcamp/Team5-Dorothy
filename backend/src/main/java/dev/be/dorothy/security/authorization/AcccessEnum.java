package dev.be.dorothy.security.authorization;

import dev.be.dorothy.security.context.ContextHolder;
import dev.be.dorothy.security.context.MemberDetail;
import dev.be.dorothy.exception.BadRequestException;
import dev.be.dorothy.member.MemberRole;
import java.util.List;

public enum AcccessEnum {

    PERMIT_ALL{
        @Override
        public void validate(List<MemberRole> roleList){
            //TODO : 아무 일도 하지 않은 메소드의 처리
        }
    },
    IS_AUTHENTICATED{
        @Override
        public void validate(List<MemberRole> roleList){
            if(ContextHolder.getContext() == null)
                throw new BadRequestException("사용자 정보가 존재하지 않습니다.");
    }},
    HAS_ROLE{
        @Override
         public void validate(List<MemberRole> roleList) {
            MemberDetail member = (MemberDetail) ContextHolder.getContext().getPrincipal();
            MemberRole role = MemberRole.valueOf(member.getMemberDto().getRole());
            if(!roleList.contains(role)){
                throw new BadRequestException("권한이 존재하지 않습니다");
            }
    }};

    public abstract void validate(List<MemberRole> roleList);
}
