package dev.be.dorothy.notice.serivce;

import dev.be.dorothy.exception.BadRequestException;
import dev.be.dorothy.notice.Notice;
import dev.be.dorothy.notice.repository.NoticeRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NoticeReadServiceImpl implements NoticeReadService {
    private final NoticeRepository noticeRepository;

    public NoticeReadServiceImpl(NoticeRepository noticeRepository) {
        this.noticeRepository = noticeRepository;
    }

    @Override
    public NoticeResDto getNotice(Long noticeId) {
        Notice notice = noticeRepository.findOne(noticeId)
                .orElseThrow(() -> new BadRequestException("해당 공지사항이 존재하지 않습니다."));
        // TODO: 현재 views 관련 기능 구현 전
        return NoticeResDto.of(notice.getIdx(), notice.getTitle(), notice.getContent(), notice.getCreatedAt(), 0L);
    }

    @Override
    public List<NoticeResDto> getNotices() {
        return null;
    }
}
