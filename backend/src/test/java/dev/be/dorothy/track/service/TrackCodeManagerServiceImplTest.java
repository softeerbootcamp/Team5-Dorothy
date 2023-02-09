package dev.be.dorothy.track.service;

import dev.be.dorothy.exception.BadRequestException;
import dev.be.dorothy.redis.RedisDao;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertThrows;
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
    @DisplayName("초대 코드 조회 테스트 - 성공 케이스")
    void readSuccessTest() {
        given(redisDao.getValues("1")).willReturn("ab123c");

        String code = trackCodeManagerImpl.read("1");

        assertThat(code).isEqualTo("ab123c");
    }

    @Test
    @DisplayName("초대 코드 조회 테스트 - 실패 케이스")
    void readFailTest() {
        given(redisDao.getValues("1")).willReturn(null);

        BadRequestException badRequestException =
                assertThrows(BadRequestException.class, () -> trackCodeManagerImpl.read("1"));

        assertThat(badRequestException.getMessage()).isEqualTo("잘못된 요청입니다.");
    }
}
