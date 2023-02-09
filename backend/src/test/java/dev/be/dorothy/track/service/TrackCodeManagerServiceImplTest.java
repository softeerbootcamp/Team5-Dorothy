package dev.be.dorothy.track.service;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import static org.assertj.core.api.Assertions.assertThat;

public class TrackCodeManagerServiceImplTest {
    TrackCodeManagerServiceImpl trackCodeManagerImpl = new TrackCodeManagerServiceImpl();

    @Test
    @DisplayName("초대 코드 발급 테스트")
    void store() {
        String code = trackCodeManagerImpl.store();

        assertThat(code.length()).isEqualTo(6);
    }
}
