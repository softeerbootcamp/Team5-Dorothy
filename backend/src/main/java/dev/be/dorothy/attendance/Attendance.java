package dev.be.dorothy.attendance;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Table;

import java.time.LocalDate;
import java.time.LocalTime;

@Table("attendance")
public class Attendance {
    @Id
    private Long idx;
    private Long trackMemberIdx;
    private LocalDate date;
    private LocalTime time;
    private AttendanceType type;

    public Attendance() {
    }

    public Attendance(Long idx, Long trackMemberIdx, LocalDate date, LocalTime time, AttendanceType type) {
        this.idx = idx;
        this.trackMemberIdx = trackMemberIdx;
        this.date = date;
        this.time = time;
        this.type = type;
    }

    public Long getIdx() {
        return idx;
    }

    public Long getTrackMemberIdx() {
        return trackMemberIdx;
    }

    public LocalDate getDate() {
        return date;
    }

    public LocalTime getTime() {
        return time;
    }

    public AttendanceType getType() {
        return type;
    }
}
