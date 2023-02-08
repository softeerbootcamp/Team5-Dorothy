package dev.be.dorothy.track.service.register;

import dev.be.dorothy.member.Member;
import dev.be.dorothy.member.MemberRole;
import dev.be.dorothy.track.Track;
import dev.be.dorothy.track.repository.TrackRepository;
import dev.be.dorothy.track.service.TrackResDto;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;


import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertAll;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.BDDMockito.given;

@ExtendWith(MockitoExtension.class)
@DisplayName("TrackRegister Test")
public class TrackRegisterTest {

    @Mock
    TrackRepository trackRepository;

    @InjectMocks
    TrackRegisterImpl trackRegister;

    @Mock
    Member member;

    @Test
    @DisplayName("트랙 생성 성공하여 정상적으로 TrackResDto 응답하는지 테스트")
    void createTrack() {
        // given
        given(member.getIdx()).willReturn(1L);
        given(member.getRole()).willReturn(MemberRole.MEMBER);

        Track track = new Track("code-squad", "");
        track.addTrackMember(member);
        given(trackRepository.save(any())).willReturn(track);

        // when
        TrackResDto trackResDto = trackRegister.create(1L, "lucas", MemberRole.MEMBER);

        // then
        assertAll(
                () -> assertThat(trackResDto.getName()).isEqualTo("code-squad"),
                () -> assertThat(trackResDto.getRole()).isEqualTo(MemberRole.MEMBER)
        );
    }
}
