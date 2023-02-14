package dev.be.dorothy.attendance.service;

import dev.be.dorothy.exception.ForbiddenException;
import dev.be.dorothy.member.MemberRole;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.junit.jupiter.MockitoExtension;

import java.time.LocalDate;
import java.time.LocalTime;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertThrows;

@ExtendWith(MockitoExtension.class)
@DisplayName("AttendanceServiceImpl Test")
public class AttendanceServiceImplTest {
    @InjectMocks
    AttendanceServiceImpl attendanceServiceImpl;

    @Test
    @DisplayName("권한이 일반 멤버가 아닌 경우, 403 예외를 던지는지 테스트 - 관리자(ADMIN)")
    void attendWhenAdmin() {
        Long memberIdx = 1L;
        Long trackIdx = 1L;
        AttendanceReqDto attendanceReqDto = new AttendanceReqDto(37.490847, 127.033101);

        ForbiddenException forbiddenException = assertThrows(ForbiddenException.class,
                () -> attendanceServiceImpl.attend(memberIdx, trackIdx, MemberRole.ADMIN, LocalDate.now(), LocalTime.now(), attendanceReqDto));

        assertThat(forbiddenException.getMessage()).isEqualTo("잘못된 접근입니다.");
    }

    @Test
    @DisplayName("권한이 일반 멤버가 아닌 경우, 403 예외를 던지는지 테스트 - 슈퍼 관리자(SUPER_ADMIN)")
    void attendWhenSuperAdmin() {
        Long memberIdx = 1L;
        Long trackIdx = 1L;
        AttendanceReqDto attendanceReqDto = new AttendanceReqDto(37.490847, 127.033101);

        ForbiddenException forbiddenException = assertThrows(ForbiddenException.class,
                () -> attendanceServiceImpl.attend(memberIdx, trackIdx, MemberRole.SUPER_ADMIN, LocalDate.now(), LocalTime.now(), attendanceReqDto));

        assertThat(forbiddenException.getMessage()).isEqualTo("잘못된 접근입니다.");
    }
}
