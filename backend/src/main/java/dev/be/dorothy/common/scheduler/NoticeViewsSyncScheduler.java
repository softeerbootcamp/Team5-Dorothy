package dev.be.dorothy.common.scheduler;

import dev.be.dorothy.notice.Notice;
import dev.be.dorothy.notice.repository.NoticeRepository;
import dev.be.dorothy.redis.RedisDao;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.scheduling.annotation.Scheduled;

import java.time.LocalDateTime;
import java.util.Optional;
import java.util.Set;

public class NoticeViewsSyncScheduler {
    private final static Logger logger = LoggerFactory.getLogger(NoticeViewsSyncScheduler.class);
    private final NoticeRepository noticeRepository;
    private final RedisDao redisDao;

    public NoticeViewsSyncScheduler(NoticeRepository noticeRepository, RedisDao redisDao) {
        this.noticeRepository = noticeRepository;
        this.redisDao = redisDao;
    }

    @Scheduled(cron = "0 0 2 * * *")
    public void syncNoticeViews() {
        Set<String> keys = redisDao.keys("NOTICE*");
        for (String key: keys) {
            Long noticeId = Long.parseLong(key.replace("NOTICE_", ""));
            Optional<Notice> optionalNotice = noticeRepository.findOne(noticeId);
            if (optionalNotice.isEmpty()) {
                continue;
            }
            Long totalViews = optionalNotice.get().getViews() + Long.parseLong(redisDao.getValues("NOTICE_" + noticeId));
            noticeRepository.updateViews(noticeId, totalViews);
        }
        redisDao.clear("NOTICE*");
        logger.info("current local date time : {}, sync views total {}", LocalDateTime.now(), keys.size());
    }
}
