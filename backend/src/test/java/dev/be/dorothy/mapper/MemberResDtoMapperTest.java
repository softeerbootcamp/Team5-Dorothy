package dev.be.dorothy.mapper;

import dev.be.dorothy.member.Member;
import dev.be.dorothy.member.MemberRole;
import dev.be.dorothy.member.service.MemberResDto;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

@DisplayName("MemberResDtoMapper Test")
public class MemberResDtoMapperTest {

    @Test
    @DisplayName("entity - dto 간 변환 테스트")
    void entityToDtoTest(){
        Member member = Member.of(
                "dorothy",
                "abcd1234",
                "2p7VxertGPCkNfnr",
                "dorothy",
                "dorothy@example.com",
                MemberRole.MEMBER
        );
        MemberResDto dto = MemberResDtoMapper.INSTANCE.entityToMemberResDto(member);
        Assertions.assertThat(dto.getName()).isEqualTo("dorothy");
    }
}
