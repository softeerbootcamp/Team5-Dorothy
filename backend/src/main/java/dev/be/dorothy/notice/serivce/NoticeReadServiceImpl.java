package dev.be.dorothy.notice.serivce;

import dev.be.dorothy.aspect.EnableLock;
import dev.be.dorothy.exception.BadRequestException;
import dev.be.dorothy.notice.Notice;
import dev.be.dorothy.notice.repository.NoticeRepository;
import dev.be.dorothy.redis.RedisDao;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class NoticeReadServiceImpl implements NoticeReadService {
    private final String REDIS_KEY = "NOTICE_";

    private final NoticeRepository noticeRepository;
    private final RedisDao redisDao;

    public NoticeReadServiceImpl(NoticeRepository noticeRepository, RedisDao redisDao) {
        this.noticeRepository = noticeRepository;
        this.redisDao = redisDao;
    }

    @Override
    @EnableLock(key = "#NOTICE")
    public NoticeResDto getNotice(Long noticeId) {
        Notice notice = noticeRepository.findOne(noticeId)
                .orElseThrow(() -> new BadRequestException("해당 공지사항이 존재하지 않습니다."));
        Long viewsInRedis = redisDao.inclement(REDIS_KEY + noticeId);
        return NoticeResDto.of(
                notice.getIdx(),
                notice.getTitle(),
                notice.getContent(),
                notice.getCreatedAt(),
                notice.getViews() + viewsInRedis);
    }

    @Override
    public List<NoticeResDto> getNotices() {
        List<Notice> notices = noticeRepository.findAll(true);

        List<NoticeResDto> noticeResDtos = new ArrayList<>();

        for (Notice notice: notices) {
            String viewsInRedis = redisDao.getValues(REDIS_KEY + notice.getIdx());
            NoticeResDto noticeResDto = NoticeResDto.of(
                    notice.getIdx(),
                    notice.getTitle(),
                    notice.getContent(),
                    notice.getCreatedAt(),
                    notice.getViews() + Long.parseLong(viewsInRedis)
            );
            noticeResDtos.add(noticeResDto);
        }

        return noticeResDtos;
    }
}
