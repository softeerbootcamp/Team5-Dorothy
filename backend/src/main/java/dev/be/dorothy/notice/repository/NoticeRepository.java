package dev.be.dorothy.notice.repository;

import dev.be.dorothy.notice.Notice;
import org.springframework.data.jdbc.repository.query.Modifying;
import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.CrudRepository;

public interface NoticeRepository extends CrudRepository<Notice, Long>, CustomNoticeRepository {
    @Query("UPDATE `notice` SET views = :views WHERE idx = :idx;")
    @Modifying
    void updateViews(Long idx, Long views);
}
