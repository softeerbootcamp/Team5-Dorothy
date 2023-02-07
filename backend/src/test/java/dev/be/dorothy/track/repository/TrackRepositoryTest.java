package dev.be.dorothy.track.repository;

import dev.be.dorothy.member.Member;
import dev.be.dorothy.member.MemberRole;
import dev.be.dorothy.member.repository.MemberRepository;
import dev.be.dorothy.track.Track;
import org.junit.jupiter.api.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.data.jdbc.DataJdbcTest;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;

import java.time.LocalDateTime;

@DataJdbcTest
@AutoConfigureTestDatabase(replace= AutoConfigureTestDatabase.Replace.NONE)
@TestInstance(TestInstance.Lifecycle.PER_CLASS)
public class TrackRepositoryTest {
    @Autowired
    TrackRepository trackRepository;
    @Autowired
    MemberRepository memberRepository;

    @BeforeAll
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

        memberRepository.save(member);

        Track track = new Track(
                "hyundai",
                ""
        );

        track.addTrackMember(member);
        trackRepository.save(track);
    }

    @AfterAll
    void clear() {
        memberRepository.deleteAll();
        trackRepository.deleteAll();
    }

    @Test
    @DisplayName("테스트의 테스트")
    void test() {

    }
}
