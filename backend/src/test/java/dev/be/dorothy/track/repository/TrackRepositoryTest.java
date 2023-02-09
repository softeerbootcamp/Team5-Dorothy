package dev.be.dorothy.track.repository;

import dev.be.dorothy.member.Member;
import dev.be.dorothy.member.MemberRole;
import dev.be.dorothy.member.repository.MemberRepository;
import dev.be.dorothy.track.Track;
import dev.be.dorothy.track.service.TrackResDto;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.data.jdbc.DataJdbcTest;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;

import java.util.List;

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
        Member member = Member.of(
                "dorothy",
                "abcd1234",
                "2p7VxertGPCkNfnr",
                "dorothy",
                "dorothy@example.com",
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
        trackRepository.deleteAll();
        memberRepository.deleteAll();
    }

    @Test
    @DisplayName("멤버 별 가입 트랙 조회 기능 ")
    void retrieveTrackByMember() {
        Member member = memberRepository.findAll().iterator().next();
        Long memberIdx = member.getIdx();
        List<TrackResDto> TrackResList = trackRepository.findByMemberId(memberIdx);
        Assertions.assertThat(TrackResList.size()).isEqualTo(1);
    }
}
