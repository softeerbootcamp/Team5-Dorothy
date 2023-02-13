package dev.be.dorothy.notice.repository;

import dev.be.dorothy.notice.Notice;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class NoticeRowMapper implements RowMapper<Notice> {
    @Override
    public Notice mapRow(ResultSet rs, int rowNum) throws SQLException {
        return new Notice(
                Long.valueOf(rs.getString("idx")),
                rs.getString("title"),
                rs.getString("content"),
                rs.getTimestamp("created_at").toLocalDateTime(),
                rs.getTimestamp("updated_at").toLocalDateTime(),
                Boolean.parseBoolean(rs.getString("is_deleted"))
        );
    }
}
