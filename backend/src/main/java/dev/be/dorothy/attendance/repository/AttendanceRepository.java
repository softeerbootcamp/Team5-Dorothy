package dev.be.dorothy.attendance.repository;

import dev.be.dorothy.attendance.Attendance;
import dev.be.dorothy.attendance.service.AttendanceResDto;
import dev.be.dorothy.attendance.service.AttendanceRetrieveResDto;
import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface AttendanceRepository extends CrudRepository<Attendance, Long> {
    @Query("select idx from attendance where track_member_idx = :trackMemberIdx limit 1;")
    Optional<Long> getAttendanceIdx(@Param("trackMemberIdx") Long trackMemberIdx);

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
}
