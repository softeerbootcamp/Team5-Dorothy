package dev.be.dorothy.attendance.repository;

import dev.be.dorothy.attendance.Attendance;
import org.springframework.data.repository.CrudRepository;

public interface AttendanceRepository extends CrudRepository<Attendance, Long> {
}
