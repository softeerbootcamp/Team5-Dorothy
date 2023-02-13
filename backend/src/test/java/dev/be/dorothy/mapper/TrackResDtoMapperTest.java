package dev.be.dorothy.mapper;

import dev.be.dorothy.member.Member;
import dev.be.dorothy.member.MemberRole;
import dev.be.dorothy.member.service.MemberResDto;
import dev.be.dorothy.track.Track;
import dev.be.dorothy.track.service.TrackResDto;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

@DisplayName("TrackResDtoMapper test")
public class TrackResDtoMapperTest {
    @Test
    @DisplayName("entity - dto 간 변환 테스트")
    void entityToDtoTest(){
        Track track = new Track(
                "hyundai",
                ""
        );
        TrackResDto dto = TrackResDtoMapper.INSTANCE.entityToTrackResDto(track);
        Assertions.assertThat(dto.getName()).isEqualTo("hyundai");
    }
}
