package dev.be.dorothy.member.repository;

import dev.be.dorothy.member.Member;
import dev.be.dorothy.member.MemberRole;
import org.junit.jupiter.api.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.data.jdbc.DataJdbcTest;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;

import java.util.List;
import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;

@DataJdbcTest
@AutoConfigureTestDatabase(replace= AutoConfigureTestDatabase.Replace.NONE)
@TestInstance(TestInstance.Lifecycle.PER_CLASS)
public class MemberRepositoryTest {
    @Autowired
    MemberRepository memberRepository;

    @BeforeAll
    void insertMembers() {
        Member member1 = Member.of(
                "dorothy",
                "abcd1234",
                "dorothy",
                "dorothy@example.com",
                MemberRole.MEMBER
        );

        Member member2 = Member.of(
                "lucas",
                "abcd1234",
                "lucas",
                "lucas@example.com",
                MemberRole.MEMBER
        );

        Member member3 = Member.of(
                "skywalker",
                "abcd1234",
                "skywalker",
                "skywalker@example.com",
                MemberRole.MEMBER
        );

        List<Member> members = List.of(member1, member2, member3);

        memberRepository.saveAll(members);
    }

    @AfterAll
    void clear() {
        memberRepository.deleteAll();
    }

    @Test
    @DisplayName("멤버가 디비에 몇 명 있는지 조회 테스트")
    void countByMemberId() {
        int count = memberRepository.countByMemberId("lucas");

        assertThat(count).isEqualTo(1);
    }

    @Test
    @DisplayName("멤버 아이디로 찾고자 하는 멤버가 있는지 조회 테스트 - 멤버가 없는 케이스")
    void findByMemberIdFailTest() {
        Optional<Member> optionalMember = memberRepository.findByMemberId("honux");

        assertThat(optionalMember.isEmpty()).isTrue();
    }

    @Test
    @DisplayName("멤버 아이디로 찾고자 하는 멤버가 있는지 조회 테스트 - 멤버가 존재하는 케이스")
    void findByMemberIdSuccessTest() {
        Optional<Member> optionalMember = memberRepository.findByMemberId("dorothy");

        assertThat(optionalMember.isPresent()).isTrue();
    }
}
