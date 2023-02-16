package dev.be.dorothy.notice.service;

import dev.be.dorothy.exception.BadRequestException;
import dev.be.dorothy.notice.Notice;
import dev.be.dorothy.notice.repository.NoticeRepository;
import dev.be.dorothy.notice.serivce.NoticeReadServiceImpl;
import dev.be.dorothy.notice.serivce.NoticeResDto;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.time.LocalDateTime;
import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertAll;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.BDDMockito.given;

@DisplayName("NoticeReadService Test")
@ExtendWith(MockitoExtension.class)
public class NoticeReadServiceTest {
    @Mock
    NoticeRepository noticeRepository;

    @InjectMocks
    NoticeReadServiceImpl noticeReadService;

    @Test
    @DisplayName("Notice 단일 조회 시, 디비에서 조회한 Notice를 정상적으로 NoticeResDto로 반환하는지 테스트")
    void getNotice() {
        // given
        Long noticeId = 1L;
        Notice notice = new Notice(noticeId, 1L, "현대차그룹 채용결과 안내", "all pass", LocalDateTime.now(), LocalDateTime.now(), 0L, false);
        given(noticeRepository.findOne(noticeId)).willReturn(Optional.of(notice));

        // when
        NoticeResDto noticeResDto = noticeReadService.getNotice(noticeId);

        // then
        assertAll(
                () -> assertThat(noticeResDto.getIdx()).isEqualTo(noticeId),
                () -> assertThat(noticeResDto.getTitle()).isEqualTo("현대차그룹 채용결과 안내")
        );
    }

    @Test
    @DisplayName("존재하지 않는 Notice ID로 조회 요청 시, 400 BAD REQUEST 예외를 던지는지 테스트")
    void getNoticeWithInvalidNoticeId() {
        // given
        Long noticeId = 1L;
        given(noticeRepository.findOne(noticeId)).willReturn(Optional.empty());

        // when then
        BadRequestException exception = assertThrows(
                BadRequestException.class,
                () -> noticeReadService.getNotice(noticeId)
        );
        assertThat(exception.getMessage()).isEqualTo("해당 공지사항이 존재하지 않습니다.");
    }
}
