package dev.be.dorothy.track.repository;

import dev.be.dorothy.member.Member;
import dev.be.dorothy.member.MemberRole;
import dev.be.dorothy.member.repository.MemberRepository;
import dev.be.dorothy.track.Track;
import dev.be.dorothy.track.service.TrackResDto;
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
        List<TrackResDto> trackResList = trackRepository.findByMemberId(memberIdx);
        assertThat(trackResList.size()).isEqualTo(1);
    }

    @Test
    @DisplayName("TrackMember에 중복 데이터 있는 경우 테스트")
    void doesExistTrackMemberSuccessTest() {
        Member member = memberRepository.findAll().iterator().next();
        Long memberIdx = member.getIdx();
        List<TrackResDto> trackResList = trackRepository.findByMemberId(memberIdx);
        Long trackIdx = trackResList.get(0).getIdx();

        Optional<Long> idx = trackRepository.doesExistTrackMember(memberIdx, trackIdx);

        assertThat(idx.isPresent()).isTrue();
    }

    @Test
    @DisplayName("TrackMember에 중복 데이터 없는 경우 테스트")
    void doesExistTrackMemberFailTest() {
        Member member = memberRepository.findAll().iterator().next();
        Long memberIdx = member.getIdx();
        List<TrackResDto> trackResList = trackRepository.findByMemberId(memberIdx);
        Long trackIdx = trackResList.get(0).getIdx();

        Optional<Long> idx = trackRepository.doesExistTrackMember(999L, trackIdx);

        assertThat(idx.isPresent()).isFalse();
    }
}
