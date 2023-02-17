package dev.be.dorothy.redis;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Set;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest(classes = {RedisConfig.class, RedisDao.class})
public class RedisDaoTest {
    @Autowired
    private RedisDao redisDao;

    @AfterEach
    void clear() {
        redisDao.deleteValues("*");
    }

    @Test
    @DisplayName("Redis Test")
    void redisTest() {
        redisDao.setValues("key", "value");
        String value = redisDao.getValues("key");
        assertThat(value).isEqualTo("value");
    }

    @Test
    @DisplayName("증가 메서드 테스트")
    void inclement() throws InterruptedException {
        // given when
        Thread incKey1 = new Thread(() -> incTest("incKey"));
        Thread incKey2 = new Thread(() -> incTest("incKey"));
        incKey1.start();
        incKey2.start();
        incKey1.join();
        incKey2.join();

        // then
        assertThat(redisDao.getValues("incKey")).isEqualTo("2000");
    }

    private void incTest(String key) {
        for (int idx = 0; idx < 1000; idx++) {
            redisDao.increment(key);
        }
    }

    @Test
    @DisplayName("키 패턴으로 조회 테스트")
    void keys() {
        // given
        redisDao.setValues("PAT_1_A", "A");
        redisDao.setValues("PAT_1_B", "B");
        redisDao.setValues("PAT_2_c", "C");

        // when
        Set<String> keys = redisDao.keys("PAT_1*");

        // then
        assertThat(keys.size()).isEqualTo(2);
    }

    @Test
    @DisplayName("키 패턴으로 삭제 테스트")
    void clearByKeyPattern() {
        // given
        redisDao.setValues("DEL_1_A", "A");
        redisDao.setValues("DEL_1_B", "B");
        redisDao.setValues("DEL_2_c", "C");

        // when
        redisDao.clear("DEL_1*");
        Set<String> keys = redisDao.keys("DEL_1*");

        // then
        assertThat(keys.size()).isEqualTo(0);
    }
}
