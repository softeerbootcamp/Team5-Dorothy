package dev.be.dorothy.notice.serivce;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class NoticeCreateDto {
    private String title;
    private String content;
}
