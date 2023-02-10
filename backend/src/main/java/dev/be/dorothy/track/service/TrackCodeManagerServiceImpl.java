package dev.be.dorothy.track.service;

import dev.be.dorothy.exception.BadRequestException;
import dev.be.dorothy.redis.RedisDao;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class TrackCodeManagerServiceImpl implements TrackCodeManagerService {
    private final RedisDao redisDao;

    public TrackCodeManagerServiceImpl(RedisDao redisDao) {
        this.redisDao = redisDao;
    }

    @Override
    public String store(String trackIdx) {
        String code = generate();
        redisDao.setValues(trackIdx, code);
        return code;
    }

    @Override
    public String read(String trackIdx) {
        String code = redisDao.getValues(trackIdx);

        if(code == null) {
            throw new BadRequestException("잘못된 요청입니다.");
        }

        return code;
    }

    private String generate() {
        String code = UUID.randomUUID().toString();
        return code.substring(0, 6);
    }
}
