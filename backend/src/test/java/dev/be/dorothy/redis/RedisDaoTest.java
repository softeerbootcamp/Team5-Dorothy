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
}
