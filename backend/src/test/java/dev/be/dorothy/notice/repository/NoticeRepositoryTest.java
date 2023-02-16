package dev.be.dorothy.notice.repository;

import dev.be.dorothy.member.Member;
import dev.be.dorothy.member.MemberRole;
import dev.be.dorothy.member.repository.MemberRepository;
import dev.be.dorothy.notice.Notice;
import org.junit.jupiter.api.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.data.jdbc.DataJdbcTest;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;

import java.time.LocalDateTime;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertAll;

@DataJdbcTest
@AutoConfigureTestDatabase(replace= AutoConfigureTestDatabase.Replace.NONE)
@TestInstance(TestInstance.Lifecycle.PER_CLASS)
@DisplayName("NoticeRepository Test")
public class NoticeRepositoryTest {

    @Autowired
    NoticeRepository noticeRepository;

    @Autowired
    MemberRepository memberRepository;

    @BeforeAll
    void init() {
        Member member = memberRepository.save(
                Member.of("lucas", "a1234567!", "absadas", "lucas", "lucas@example.com", MemberRole.ADMIN)
        );

        Notice noticeOfHyundai = new Notice(null, member.getIdx(), "현대차그룹 채용 결과 안내", "all pass", LocalDateTime.now().minusDays(1), LocalDateTime.now().minusDays(1), 0L, false);
        Notice noticeOfCodeSquad = new Notice(null, member.getIdx(), "코드스쿼드 수료 결과 안내", "all pass", LocalDateTime.now(), LocalDateTime.now(), 0L, false);
        noticeRepository.saveAll(List.of(noticeOfHyundai, noticeOfCodeSquad));
    }

    @AfterAll
    void clear() {
        noticeRepository.deleteAll();
        memberRepository.deleteAll();
    }

    @Test
    @DisplayName("findAll ORDER BY ASC 정상 조회 테스트")
    void findAllWithOrderByAsc() {
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
        List<Notice> notices = noticeRepository.findAll(true);

        // then
        assertAll(
                () -> assertThat(notices.size()).isEqualTo(2),
                () -> assertThat(notices.get(0).getTitle()).isEqualTo("코드스쿼드 수료 결과 안내")
        );
    }
}
