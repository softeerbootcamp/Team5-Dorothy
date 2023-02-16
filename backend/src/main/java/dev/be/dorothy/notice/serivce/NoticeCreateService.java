package dev.be.dorothy.notice.serivce;

public interface NoticeCreateService {
    NoticeResDto create(Long memberIdx, NoticeCreateDto noticeCreateDto);
}
