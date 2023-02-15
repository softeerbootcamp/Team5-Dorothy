package dev.be.dorothy.attendance.service;

import dev.be.dorothy.attendance.AttendanceType;
import dev.be.dorothy.attendance.repository.AttendanceRepository;
import dev.be.dorothy.exception.BadRequestException;
import dev.be.dorothy.exception.ForbiddenException;
import dev.be.dorothy.member.MemberRole;
import dev.be.dorothy.track.service.TrackRetrieveService;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.BDDMockito.given;
import static org.mockito.Mockito.doNothing;

@ExtendWith(MockitoExtension.class)
@DisplayName("AttendanceServiceImpl Test")
public class AttendanceServiceImplTest {
    @Mock
    AttendanceRepository attendanceRepository;
    @Mock
    AttendanceManagerService attendanceManagerService;
    @Mock
    TrackRetrieveService trackRetrieveService;

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

    @Test
    @DisplayName("중복된 출석 요청이 오는 경우, 예외 처리 던지는지 테스트")
    void checkDuplicatedAttendance() {
        Long memberIdx = 1L;
        Long trackIdx = 1L;
        Long trackMemberIdx = 1L;
        AttendanceReqDto attendanceReqDto = new AttendanceReqDto(37.490847, 127.033101);

        doNothing().when(attendanceManagerService).checkAttendanceLocation(trackIdx, 37.490847, 127.033101);
        given(attendanceManagerService.checkAttendanceTime(trackIdx, LocalDate.now(), LocalTime.of(10, 0))).willReturn(AttendanceType.PRESENT);
        given(trackRetrieveService.getTrackMemberIdx(memberIdx, trackIdx)).willReturn(1L);
        given(attendanceRepository.getAttendanceIdx(trackMemberIdx)).willReturn(Optional.of(1L));

        BadRequestException badRequestException = assertThrows(BadRequestException.class,
                () -> attendanceServiceImpl.attend(memberIdx, trackIdx, MemberRole.MEMBER, LocalDate.now(), LocalTime.of(10, 0), attendanceReqDto));

        assertThat(badRequestException.getMessage()).isEqualTo("이미 출결 처리가 완료되었습니다.");
    }
}
