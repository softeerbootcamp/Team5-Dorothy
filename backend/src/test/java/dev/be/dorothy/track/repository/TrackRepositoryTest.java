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

import java.time.LocalDateTime;
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

        Member lucas = Member.of(
                "lucas",
                "abcd1234",
                "2p7VxertGPCkNfnr",
                "lucas",
                "lucas@example.com",
                MemberRole.MEMBER
        );

        memberRepository.saveAll(List.of(member, lucas));

        Track track = new Track(
                "hyundai",
                ""
        );

        trackRepository.save(track);
        trackRepository.saveTrackMember(
                member.getIdx(),
                track.getIdx(),
                MemberRole.MEMBER.name(),
                LocalDateTime.now().toString(),
                false);
        trackRepository.saveTrackMember(
                lucas.getIdx(),
                track.getIdx(),
                MemberRole.MEMBER.name(),
                LocalDateTime.now().toString(),
                false);
    }

    @AfterAll
    void clear() {
        trackRepository.deleteTrackMember();
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

        Optional<Long> idx = trackRepository.getTrackMemberIdx(memberIdx, trackIdx);

        assertThat(idx.isPresent()).isTrue();
    }

    @Test
    @DisplayName("TrackMember에 중복 데이터 없는 경우 테스트")
    void doesExistTrackMemberFailTest() {
        Member member = memberRepository.findAll().iterator().next();
        Long memberIdx = member.getIdx();
        List<TrackResDto> trackResList = trackRepository.findByMemberId(memberIdx);
        Long trackIdx = trackResList.get(0).getIdx();

        Optional<Long> idx = trackRepository.getTrackMemberIdx(999L, trackIdx);

        assertThat(idx.isPresent()).isFalse();
    }

    @Test
    @DisplayName("모든 트랙 멤버 idx 조회 테스트")
    void getAllTrackIdx() {
        List<Long> allTrackMemberIdx = trackRepository.getAllTrackMemberIdx();
        assertThat(allTrackMemberIdx.size()).isEqualTo(2L);
    }
}
