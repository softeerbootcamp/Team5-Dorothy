package dev.be.dorothy.attendance.repository;

import dev.be.dorothy.attendance.Attendance;
import dev.be.dorothy.attendance.service.AttendanceResDto;
import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface AttendanceRepository extends CrudRepository<Attendance, Long> {
    @Query("select idx from attendance where track_member_idx = :trackMemberIdx limit 1;")
    Optional<Long> getAttendanceIdx(@Param("trackMemberIdx") Long trackMemberIdx);

    @Query("select date, time, type from attendance where track_member_idx = :trackMemberIdx;")
    Optional<AttendanceResDto> getAttendanceByDayWhenMember(@Param("trackMemberIdx") Long trackMemberIdx);

    @Query("select date, time, type from attendance inner join track_member on attendance.track_member_idx = track_member.idx where track_idx = :trackIdx and role = 'MEMBER' and is_deleted = 0;")
    List<AttendanceResDto> getAttendanceByDayWhenAdmin(@Param("trackIdx") Long trackIdx);
}
