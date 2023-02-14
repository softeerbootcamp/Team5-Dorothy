package dev.be.dorothy.notice.repository;

import dev.be.dorothy.notice.Notice;
import org.springframework.data.repository.CrudRepository;

public interface NoticeRepository extends CrudRepository<Notice, Long>, CustomNoticeRepository {
}
