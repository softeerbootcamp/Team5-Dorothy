package dev.be.dorothy.redis;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

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
}
