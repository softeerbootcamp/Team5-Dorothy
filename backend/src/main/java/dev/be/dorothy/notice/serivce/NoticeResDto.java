package dev.be.dorothy.notice.serivce;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
@AllArgsConstructor(access = AccessLevel.PRIVATE)
public class NoticeResDto {
    private final String title;
    private final String content;
    private final LocalDateTime createdAt;
    private final Long views;

    public static NoticeResDto of(String title, String content, LocalDateTime createdAt, Long views) {
        return new NoticeResDto(title, content, createdAt, views);
    }
}
