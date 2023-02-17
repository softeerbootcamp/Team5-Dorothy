package dev.be.dorothy.attendance.repository;

import dev.be.dorothy.attendance.Attendance;
import dev.be.dorothy.attendance.AttendanceType;
import dev.be.dorothy.attendance.service.AttendanceResDto;
import dev.be.dorothy.attendance.service.AttendanceRetrieveResDto;
import org.springframework.data.jdbc.repository.query.Modifying;
import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.time.LocalTime;
import java.util.List;
import java.util.Optional;

public interface AttendanceRepository extends CrudRepository<Attendance, Long> {
    @Query("select idx, track_member_idx, date, time, type from attendance where track_member_idx = :trackMemberIdx and date = date_format(now(), '%Y-%m-%d') limit 1;")
    Optional<Attendance> getAttendance(@Param("trackMemberIdx") Long trackMemberIdx);

    @Modifying
    @Query("update attendance set time = :time, type = :type where idx = :idx;")
    void attend(@Param("idx") Long idx, @Param("time") LocalTime time, @Param("type") AttendanceType type);

    @Query("select date, time, type\n" +
            "from attendance\n" +
            "where track_member_idx = :trackMemberIdx\n" +
            "  and date = date_format(now(), '%Y-%m-%d');")
    AttendanceResDto getAttendanceByDayWhenMember(@Param("trackMemberIdx") Long trackMemberIdx);

    @Query("select name, date, time, type\n" +
            "from attendance\n" +
            "         inner join track_member on attendance.track_member_idx = track_member.idx\n" +
            "         inner join member on track_member.member_idx = member.idx\n" +
            "where track_idx = :trackIdx\n" +
            "  and track_member.role = 'MEMBER'\n" +
            "  and member.is_deleted = 0\n" +
            "  and track_member.is_deleted = 0\n" +
            "  and date = date_format(now(), '%Y-%m-%d');")
    List<AttendanceRetrieveResDto> getAttendanceByDayWhenAdmin(@Param("trackIdx") Long trackIdx);

    @Query("select date, time, type\n" +
            "from attendance\n" +
            "where track_member_idx = :trackMemberIdx\n" +
            "  and date_format(date, '%Y-%m') = date_format(now(), '%Y-%m');")
    List<AttendanceResDto> getAttendanceByMonthWhenMember(@Param("trackMemberIdx") Long trackMemberIdx);

    @Query("select date, time, type\n" +
            "from attendance\n" +
            "         inner join track_member on attendance.track_member_idx = track_member.idx\n" +
            "where track_idx = :trackIdx\n" +
            "  and role = 'MEMBER'\n" +
            "  and is_deleted = 0\n" +
            "  and date_format(date, '%Y-%m') = date_format(now(), '%Y-%m');")
    List<AttendanceResDto> getAttendanceByMonthWhenAdmin(@Param("trackIdx") Long trackIdx);
}
