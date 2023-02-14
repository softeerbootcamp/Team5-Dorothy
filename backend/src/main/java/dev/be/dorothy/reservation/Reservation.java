package dev.be.dorothy.reservation;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Table;

import java.time.LocalDateTime;
import java.time.LocalTime;


@Table("reservation")
public class Reservation {

    @Id
    private Long idx;
    private final Long memberIdx;
    private final Long placeIdx;
    private final LocalDateTime date;
    private final LocalTime startTime;
    private final LocalTime endTime;
    private final boolean isDeleted;

    public Reservation(Long memberIdx, Long placeIdx, LocalTime startTime) {
        this.memberIdx = memberIdx;
        this.placeIdx = placeIdx;
        this.date = LocalDateTime.now();
        this.startTime = startTime;
        this.endTime = startTime.plusMinutes(15);
        this.isDeleted = false;
    }

    public Long getIdx() {
        return idx;
    }

    public Long getMemberIdx() {
        return memberIdx;
    }

    public Long getPlaceIdx() {
        return placeIdx;
    }

    public LocalDateTime getDate() {
        return date;
    }

    public LocalTime getStartTime() {
        return startTime;
    }

    public LocalTime getEndTime() {
        return endTime;
    }

    public boolean isDeleted() {
        return isDeleted;
    }
}
