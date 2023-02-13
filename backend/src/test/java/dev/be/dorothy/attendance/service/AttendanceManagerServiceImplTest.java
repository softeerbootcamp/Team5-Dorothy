package dev.be.dorothy.attendance.service;

import dev.be.dorothy.track.Track;
import dev.be.dorothy.track.service.TrackRetrieveService;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.BDDMockito.given;

@ExtendWith(MockitoExtension.class)
public class AttendanceManagerServiceImplTest {
    @Mock
    TrackRetrieveService trackRetrieveService;

    @InjectMocks
    AttendanceManagerServiceImpl attendanceManagerServiceImpl;

    @Test
    @DisplayName("거리 기반 출석 확인 테스트 - 출석 성공 케이스")
    void checkAttendanceSuccessTest() {
        Track track = new Track(
                "hyundai",
                ""
        );
        // 약 8m
        double x = 37.490847;
        double y = 127.033301;

        given(trackRetrieveService.getTrack(track.getIdx())).willReturn(track);

        assertThat(attendanceManagerServiceImpl.checkAttendance(track.getIdx(), x, y)).isTrue();
    }

    @Test
    @DisplayName("거리 기반 출석 확인 테스트 - 출석 실패 케이스")
    void checkAttendanceFailTest() {
        Track track = new Track(
                "hyundai",
                ""
        );
        // 약 13m
        double x = 37.490847;
        double y = 127.033251;

        given(trackRetrieveService.getTrack(track.getIdx())).willReturn(track);

        assertThat(attendanceManagerServiceImpl.checkAttendance(track.getIdx(), x, y)).isFalse();
    }
}
