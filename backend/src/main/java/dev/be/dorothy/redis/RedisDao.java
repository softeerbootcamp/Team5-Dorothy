package dev.be.dorothy.redis;

import org.springframework.data.redis.connection.RedisConnection;
import org.springframework.data.redis.connection.RedisConnectionFactory;
import org.springframework.data.redis.core.Cursor;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.core.ScanOptions;
import org.springframework.data.redis.core.ValueOperations;
import org.springframework.stereotype.Component;
import java.nio.charset.StandardCharsets;
import java.util.Set;

@Component
public class RedisDao {
    private final RedisTemplate<String, String> redisTemplate;

    public RedisDao(RedisTemplate<String, String> redisTemplate) {
        this.redisTemplate = redisTemplate;
    }

    public void setValues(String key, String value) {
        ValueOperations<String, String> valueOperations = redisTemplate.opsForValue();
        valueOperations.set(key, value);
    }

    public String getValues(String key) {
        ValueOperations<String, String> valueOperations = redisTemplate.opsForValue();
        return valueOperations.get(key);
    }

    public void deleteValues(String pattern) {
        Set<String> keys = redisTemplate.keys(pattern);

        if(keys != null) {
            redisTemplate.delete(keys);
        }
    }

    public Long increment(String key) {
        return redisTemplate.opsForValue().increment(key);
    }

    public Set<String> keys(String keyPattern) {
        return redisTemplate.keys(keyPattern);
    }

    public void clear(String keyPattern) {
        Set<String> keys = keys(keyPattern);
        for (String key: keys) {
            redisTemplate.delete(key);
        }
    }

    public void deleteWithScan(String keyPattern){
        RedisConnectionFactory connectionFactory = redisTemplate.getConnectionFactory();
        RedisConnection connection = connectionFactory.getConnection();
        ScanOptions options = ScanOptions.scanOptions().match(keyPattern).build();

        Cursor<byte[]> cursor = connection.scan(options);

        while(cursor.hasNext()){
            byte[] next = cursor.next();
            String matchedKey = new String(next, StandardCharsets.UTF_8);
            redisTemplate.delete(matchedKey);
        }
    }
}
