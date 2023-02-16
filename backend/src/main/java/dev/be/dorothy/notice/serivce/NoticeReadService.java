package dev.be.dorothy.notice.serivce;

import java.util.List;

public interface NoticeReadService {
    NoticeResDto getNotice(Long noticeId);
    List<NoticeResDto> getNotices();
}
