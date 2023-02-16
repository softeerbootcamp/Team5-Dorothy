package dev.be.dorothy.notice.serivce;

import dev.be.dorothy.exception.BadRequestException;
import dev.be.dorothy.notice.Notice;
import dev.be.dorothy.notice.repository.NoticeRepository;
import org.springframework.stereotype.Service;

@Service
public class NoticeCreateServiceImpl implements NoticeCreateService {
    private final NoticeRepository noticeRepository;

    public NoticeCreateServiceImpl(NoticeRepository noticeRepository) {
        this.noticeRepository = noticeRepository;
    }

    @Override
    public NoticeResDto create(Long memberIdx, NoticeCreateDto noticeCreateDto) {
        validateCreateData(noticeCreateDto);

        Notice notice = Notice.of(memberIdx, noticeCreateDto.getTitle(), noticeCreateDto.getContent());
        noticeRepository.save(notice);

        return NoticeResDto.of(
                notice.getIdx(), notice.getTitle(), notice.getContent(), notice.getUpdatedAt(), notice.getViews()
        );
    }

    private void validateCreateData(NoticeCreateDto noticeCreateDto) {
        if (noticeCreateDto.getTitle().isBlank()) {
            throw new BadRequestException("요청 인자를 확인하세요.");
        }
    }
}
