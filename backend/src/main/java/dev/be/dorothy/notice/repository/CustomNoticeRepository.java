package dev.be.dorothy.notice.repository;

import dev.be.dorothy.notice.Notice;

import java.util.List;
import java.util.Optional;

public interface CustomNoticeRepository {
    Optional<Notice> findOne(Long noticeId);
    List<Notice> findAll(boolean orderByCreatedAtDesc);
}
