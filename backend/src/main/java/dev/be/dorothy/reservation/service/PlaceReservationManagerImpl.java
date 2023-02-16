package dev.be.dorothy.reservation.service;

import dev.be.dorothy.aspect.EnableLock;
import dev.be.dorothy.redis.RedisDao;
import org.springframework.stereotype.Service;
import java.util.Optional;

@Service
public class PlaceReservationManagerImpl implements PlaceReservationManager{
    private final RedisDao redisDao;

    public PlaceReservationManagerImpl(RedisDao redisDao) {
        this.redisDao = redisDao;
    }

    @EnableLock(key = "#key")  //Distructed Lock을 획득하기 위한 Aspect를 호출
    public boolean reservePlace(String key, Long memberIdx) {
        Optional<String> values = Optional.ofNullable(redisDao.getValues(key));
        if(values.isPresent()){
            return false;
        }
        redisDao.setValues(key, String.valueOf(memberIdx));
        return true;
    }
}
