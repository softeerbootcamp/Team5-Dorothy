package dev.be.dorothy.common.scheduler;

import dev.be.dorothy.redis.RedisDao;
import dev.be.dorothy.reservation.repository.PlaceRepository;
import org.springframework.scheduling.annotation.Scheduled;

import static dev.be.dorothy.reservation.service.PlaceReservationServiceImpl.RESERVATION_KEY;

public class ReservationScheduler {
    private final PlaceRepository placeRepository;
    private final RedisDao redisDao;

    public ReservationScheduler(PlaceRepository placeRepository, RedisDao redisDao) {
        this.placeRepository = placeRepository;
        this.redisDao = redisDao;
    }

    @Scheduled(cron = "0 0 2 * * *")
    public void clearReservation() {
        redisDao.deleteWithScan(RESERVATION_KEY);
        placeRepository.deleteAllReservation();
    }
}
