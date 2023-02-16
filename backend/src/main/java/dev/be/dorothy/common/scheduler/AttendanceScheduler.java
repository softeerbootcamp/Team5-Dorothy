package dev.be.dorothy.common.scheduler;

import dev.be.dorothy.attendance.Attendance;
import dev.be.dorothy.attendance.AttendanceType;
import dev.be.dorothy.attendance.repository.AttendanceRepository;
import dev.be.dorothy.track.repository.TrackRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.scheduling.annotation.Scheduled;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;

public class AttendanceScheduler {
    private final static Logger logger = LoggerFactory.getLogger(AttendanceScheduler.class);
    private final TrackRepository trackRepository;
    private final AttendanceRepository attendanceRepository;

    public AttendanceScheduler(TrackRepository trackRepository, AttendanceRepository attendanceRepository) {
        this.attendanceRepository = attendanceRepository;
        this.trackRepository = trackRepository;
    }

    @Scheduled(cron = "0 0 0 * * *")
    public void setAttendance() {
        List<Long> allTrackMemberIdx = trackRepository.getAllTrackMemberIdx();
        List<Attendance> attendances = new ArrayList<>(allTrackMemberIdx.size());

        for (Long trackMemberIdx: allTrackMemberIdx) {
            Attendance attendance = new Attendance(trackMemberIdx, LocalDate.now(), LocalTime.now(), AttendanceType.ABSENT);
            attendances.add(attendance);
        }

        attendanceRepository.saveAll(attendances);
        logger.info("current time : {}, init {} members attendance", LocalDateTime.now(), allTrackMemberIdx.size());
    }
}
