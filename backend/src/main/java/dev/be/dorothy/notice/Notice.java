package dev.be.dorothy.notice;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Table;

import java.time.LocalDateTime;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Table("notice")
public class Notice {
    @Id
    private Long idx;
    private Long memberIdx;
    private String title;
    private String content;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
    private Long views;
    private boolean isDeleted;

    private Notice(Long memberIdx, String title, String content) {
        this.title = title;
        this.memberIdx = memberIdx;
        this.content = content;
        this.views = 0L;
        this.createdAt = LocalDateTime.now();
        this.updatedAt = LocalDateTime.now();
        this.isDeleted = false;
    }

    public static Notice of(Long memberIdx, String title, String content) {
        return new Notice(memberIdx, title, content);
    }
}
