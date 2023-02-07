package dev.be.dorothy.auth.authorization;

import dev.be.dorothy.auth.MemberDetail;
import dev.be.dorothy.exception.BadRequestException;
import dev.be.dorothy.member.MemberRole;
import java.util.List;

public enum AcccessEnum {

    PERMIT_ALL{
        @Override
        public void validate(MemberDetail member, List<MemberRole> roleList){
            //TODO : 아무 일도 하지 않은 메소드의 처리
        }
    },
    IS_AUTHENTICATED{
        @Override
        public void validate(MemberDetail member, List<MemberRole> roleList){
            if(member == null)
                throw new BadRequestException("사용자 정보가 존재하지 않습니다.");
    }},
    HAS_ROLE{
        @Override
         public void validate(MemberDetail member, List<MemberRole> roleList) {
            if(!roleList.contains(member.getRole())){
                throw new BadRequestException("권한이 존재하지 않습니다");
            }
    }};

    public abstract void validate(MemberDetail member, List<MemberRole> roleList);
}
