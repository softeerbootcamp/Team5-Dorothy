package dev.be.dorothy.track.service;

import dev.be.dorothy.redis.RedisDao;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.BDDMockito.given;

@ExtendWith(MockitoExtension.class)
public class TrackCodeManagerServiceImplTest {
    @Mock
    RedisDao redisDao;

    @InjectMocks
    TrackCodeManagerServiceImpl trackCodeManagerImpl;

    @Test
    @DisplayName("초대 코드 발급 테스트")
    void store() {
        String code = trackCodeManagerImpl.store("1");

        assertThat(code.length()).isEqualTo(6);
    }

    @Test
    @DisplayName("초대 코드 조회 테스트")
    void read() {
        given(redisDao.getValues("1")).willReturn("ab123c");

        String code = trackCodeManagerImpl.read("1");

        assertThat(code).isEqualTo("ab123c");
    }
}
