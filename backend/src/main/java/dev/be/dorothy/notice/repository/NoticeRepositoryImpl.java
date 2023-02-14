package dev.be.dorothy.notice.repository;

import dev.be.dorothy.notice.Notice;
import lombok.RequiredArgsConstructor;
import org.springframework.dao.EmptyResultDataAccessException;

import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcOperations;

import javax.annotation.PostConstruct;
import java.util.Optional;

@RequiredArgsConstructor
public class NoticeRepositoryImpl implements CustomNoticeRepository {
    private final NamedParameterJdbcOperations operations;
    private RowMapper<Notice> rowMapper;

    @PostConstruct
    void initRowMapper() {
        this.rowMapper = new NoticeRowMapper();
    }

    private static final String ALL_FIELD = "idx, title, content, created_at, updated_at, is_deleted ";

    @Override
    public Optional<Notice> findOne(Long noticeId) {
        String sql = "SELECT " + ALL_FIELD + " FROM notice WHERE idx=:noticeId LIMIT 1";
        MapSqlParameterSource params = new MapSqlParameterSource("noticeId", noticeId);
        try {
            Notice notice = operations.queryForObject(sql, params, rowMapper);
            return Optional.ofNullable(notice);
        } catch (EmptyResultDataAccessException e) {
            return Optional.empty();
        }
    }
}
