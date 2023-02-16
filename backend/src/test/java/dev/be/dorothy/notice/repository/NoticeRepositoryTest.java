package dev.be.dorothy.notice.repository;

import dev.be.dorothy.notice.Notice;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInstance;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.data.jdbc.DataJdbcTest;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertAll;

@DataJdbcTest
@AutoConfigureTestDatabase(replace= AutoConfigureTestDatabase.Replace.NONE)
@TestInstance(TestInstance.Lifecycle.PER_CLASS)
@DisplayName("NoticeRepository Test")
public class NoticeRepositoryTest {

    @Autowired
    NoticeRepository noticeRepository;

    @Test
    @DisplayName("findOne 정상 조회 테스트")
    void findOne() {
        // given
        Notice noticeOfHyundai = Notice.of("현대차그룹 채용 결과 안내", "all pass");
        noticeRepository.save(noticeOfHyundai);
        // when
        Optional<Notice> optionalNotice = noticeRepository.findOne(noticeOfHyundai.getIdx());

        // then
        assertThat(optionalNotice.isPresent()).isTrue();
        Notice notice = optionalNotice.get();
        assertAll(
                () -> assertThat(notice.getTitle()).isEqualTo("현대차그룹 채용 결과 안내"),
                () -> assertThat(notice.getContent()).isEqualTo("all pass")
        );
    }

    @Test
    @DisplayName("findAll ORDER BY ASC 정상 조회 테스트")
    void findAllWithOrderByAsc() {
        // given
        Notice noticeOfHyundai = new Notice(null, "현대차그룹 채용 결과 안내", "all pass", LocalDateTime.now().minusDays(1), LocalDateTime.now().minusDays(1), false);
        Notice noticeOfCodeSquad = new Notice(null, "코드스쿼드 수료 결과 안내", "all pass", LocalDateTime.now(), LocalDateTime.now(), false);
        noticeRepository.saveAll(List.of(noticeOfHyundai, noticeOfCodeSquad));
        // when
        List<Notice> notices = noticeRepository.findAll(false);

        // then
        assertAll(
                () -> assertThat(notices.size()).isEqualTo(2),
                () -> assertThat(notices.get(0).getTitle()).isEqualTo("현대차그룹 채용 결과 안내")
        );
    }

    @Test
    @DisplayName("findAll ORDER BY DESC 정상 조회 테스트")
    void findAllWithOrderByDesc() {
        // given
        Notice noticeOfHyundai = new Notice(null, "현대차그룹 채용 결과 안내", "all pass", LocalDateTime.now().minusDays(1), LocalDateTime.now().minusDays(1), false);
        Notice noticeOfCodeSquad = new Notice(null, "코드스쿼드 수료 결과 안내", "all pass", LocalDateTime.now(), LocalDateTime.now(), false);
        noticeRepository.saveAll(List.of(noticeOfHyundai, noticeOfCodeSquad));

        // when
        List<Notice> notices = noticeRepository.findAll(true);

        // then
        assertAll(
                () -> assertThat(notices.size()).isEqualTo(2),
                () -> assertThat(notices.get(0).getTitle()).isEqualTo("코드스쿼드 수료 결과 안내")
        );
    }
}
