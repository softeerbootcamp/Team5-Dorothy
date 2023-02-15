package dev.be.dorothy.attendance.service;

import dev.be.dorothy.attendance.AttendanceType;
import dev.be.dorothy.exception.BadRequestException;
import dev.be.dorothy.track.Track;
import dev.be.dorothy.track.service.TrackRetrieveService;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.time.LocalTime;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertAll;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.BDDMockito.given;

@ExtendWith(MockitoExtension.class)
public class AttendanceManagerServiceImplTest {
    @Mock
    TrackRetrieveService trackRetrieveService;

    @InjectMocks
    AttendanceManagerServiceImpl attendanceManagerServiceImpl;

    @Test
    @DisplayName("거리 기반 출석 확인 테스트 - 실패 케이스")
    void checkAttendanceLocation() {
        Track track = new Track(
                "hyundai",
                ""
        );
        // 약 33m
        double x = 37.490847;
        double y = 127.033021;

        given(trackRetrieveService.getTrack(track.getIdx())).willReturn(track);

        BadRequestException badRequestException = assertThrows(BadRequestException.class,
                () -> attendanceManagerServiceImpl.checkAttendanceLocation(track.getIdx(), x, y));

        assertThat(badRequestException.getMessage()).isEqualTo("잘못된 요청입니다.");
    }

    @Test
    @DisplayName("출석 시간에 따른 출결 상태 테스트 - 출석 케이스")
    void checkAttendanceTimeWhenPresent() {
        Track track = new Track(
                "hyundai",
                ""
        );
        LocalTime time1 = LocalTime.of(10, 0);
        LocalTime time2 = LocalTime.of(10, 9, 59);
        LocalTime time3 = LocalTime.of(9, 30);

        given(trackRetrieveService.getTrack(track.getIdx())).willReturn(track);

        assertAll(
                () -> assertThat(attendanceManagerServiceImpl.checkAttendanceTime(track.getIdx(), time1)).isEqualTo(AttendanceType.PRESENT),
                () -> assertThat(attendanceManagerServiceImpl.checkAttendanceTime(track.getIdx(), time2)).isEqualTo(AttendanceType.PRESENT),
                () -> assertThat(attendanceManagerServiceImpl.checkAttendanceTime(track.getIdx(), time3)).isEqualTo(AttendanceType.PRESENT)
        );
    }

    @Test
    @DisplayName("출석 시간에 따른 출결 상태 테스트 - 지각 케이스")
    void checkAttendanceTimeWhenTardy() {
        Track track = new Track(
                "hyundai",
                ""
        );
        LocalTime time1 = LocalTime.of(10, 10);
        LocalTime time2 = LocalTime.of(10, 29, 59);

        given(trackRetrieveService.getTrack(track.getIdx())).willReturn(track);

        assertAll(
                () -> assertThat(attendanceManagerServiceImpl.checkAttendanceTime(track.getIdx(), time1)).isEqualTo(AttendanceType.TARDY),
                () -> assertThat(attendanceManagerServiceImpl.checkAttendanceTime(track.getIdx(), time2)).isEqualTo(AttendanceType.TARDY)
        );
    }

    @Test
    @DisplayName("출석 시간에 따른 출결 상태 테스트 - 결석 케이스")
    void checkAttendanceTimeWhenAbsent() {
        Track track = new Track(
                "hyundai",
                ""
        );
        LocalTime time = LocalTime.of(10, 40);

        given(trackRetrieveService.getTrack(track.getIdx())).willReturn(track);

        assertThat(attendanceManagerServiceImpl.checkAttendanceTime(track.getIdx(), time)).isEqualTo(AttendanceType.ABSENT);
    }

    @Test
    @DisplayName("출석 시간에 따른 출결 상태 테스트 - 출석 가능한 시간 전에 요청이 오는 케이스 예외 처리")
    void checkAttendanceTimeTooEarly() {
        Track track = new Track(
                "hyundai",
                ""
        );
        LocalTime time = LocalTime.of(9, 29, 59);

        given(trackRetrieveService.getTrack(track.getIdx())).willReturn(track);

        BadRequestException badRequestException = assertThrows(BadRequestException.class,
                () -> attendanceManagerServiceImpl.checkAttendanceTime(track.getIdx(), time));

        assertThat(badRequestException.getMessage()).isEqualTo("잘못된 요청입니다.");
    }
}
