package dev.be.dorothy.attendance.repository;

import dev.be.dorothy.attendance.Attendance;
import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface AttendanceRepository extends CrudRepository<Attendance, Long> {
    @Query("select idx from attendance where track_member_idx = :trackMemberIdx limit 1;")
    Optional<Long> getAttendanceIdx(@Param("trackMemberIdx") Long trackMemberIdx);
}
