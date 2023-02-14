package dev.be.dorothy.notice.repository;

import dev.be.dorothy.notice.Notice;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInstance;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.data.jdbc.DataJdbcTest;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.test.annotation.Rollback;

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
    @Rollback(value = false)
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
}
