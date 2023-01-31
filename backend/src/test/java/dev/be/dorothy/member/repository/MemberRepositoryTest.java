package dev.be.dorothy.member.repository;

import dev.be.dorothy.member.Member;
import dev.be.dorothy.member.MemberRole;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.data.jdbc.DataJdbcTest;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;

import java.time.LocalDateTime;

@DataJdbcTest
@AutoConfigureTestDatabase(replace= AutoConfigureTestDatabase.Replace.NONE)
public class MemberRepositoryTest {
    @Autowired
    MemberRepository memberRepository;

    @Test
    @DisplayName("멤버 정보가 DB에 잘 들어가는지 테스트")
    void insert() {
        Member member = new Member(
                "dorothy",
                "abcd1234",
                "dorothy",
                "dorothy@example.com",
                "",
                LocalDateTime.now(),
                LocalDateTime.now(),
                false,
                MemberRole.MEMBER
        );

        memberRepository.insert(
                member.getMemberId(),
                member.getPassword(),
                member.getName(),
                member.getEmail(),
                member.getImage(),
                member.getCreatedAt().toString(),
                member.getUpdatedAt().toString(),
                member.isDeleted(),
                member.getRole().name()
        );
    }
}
