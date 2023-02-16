package dev.be.dorothy.mapper;

import dev.be.dorothy.attendance.Attendance;
import dev.be.dorothy.attendance.AttendanceType;
import dev.be.dorothy.attendance.service.AttendanceResDto;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import java.time.LocalDate;
import java.time.LocalTime;

import static org.assertj.core.api.Assertions.assertThat;

@DisplayName("AttendanceResDtoMapper Test")
public class AttendanceResDtoMapperTest {
    @Test
    @DisplayName("Attendance - AttendanceResDto 간 변환 테스트")
    void entityToDtoTest() {
        Attendance attendance = new Attendance(
                1L,
                LocalDate.now(),
                LocalTime.now(),
                AttendanceType.PRESENT
        );

        AttendanceResDto attendanceResDto = AttendanceResDtoMapper.INSTANCE.entityToAttendanceResDto(attendance);

        assertThat(attendanceResDto.getType()).isEqualTo(AttendanceType.PRESENT);
    }
}
