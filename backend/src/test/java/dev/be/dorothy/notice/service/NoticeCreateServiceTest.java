package dev.be.dorothy.notice.service;

import dev.be.dorothy.exception.BadRequestException;
import dev.be.dorothy.notice.serivce.NoticeCreateDto;
import dev.be.dorothy.notice.serivce.NoticeCreateServiceImpl;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertThrows;

@DisplayName("NoticeCreateService Test")
@ExtendWith(MockitoExtension.class)
public class NoticeCreateServiceTest {

    @InjectMocks
    NoticeCreateServiceImpl noticeCreateService;

    @Test
    @DisplayName("빈 타이틀로 공지사항 생성 시, 400 예외를 던지는지 테스트")
    void createWithInvalidData() {
        // given
        NoticeCreateDto noticeCreateDto = new NoticeCreateDto("", "all pass");

        // when then
        BadRequestException exception = assertThrows(
                BadRequestException.class,
                () -> noticeCreateService.create(1L, noticeCreateDto)
        );
        assertThat(exception.getMessage()).isEqualTo("요청 인자를 확인하세요.");
    }
}
