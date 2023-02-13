package dev.be.dorothy.track;

import org.springframework.data.annotation.Id;
import org.springframework.data.geo.Point;
import org.springframework.data.relational.core.mapping.Embedded;
import org.springframework.data.relational.core.mapping.Table;

import java.time.LocalDateTime;
import java.time.LocalTime;

@Table("track")
public class Track {
    @Id
    private Long idx;
    private String name;
    private String image;
    private LocalTime attendanceTime;
    @Embedded(onEmpty = Embedded.OnEmpty.USE_NULL)
    private Point location;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
    private boolean isDeleted;

    public Track() {}

    public Track(String name, String image) {
        this.name = name;
        this.image = image;
        this.attendanceTime = LocalTime.of(10, 0);
        this.location = new Point(37.490847, 127.033401);
        this.createdAt = LocalDateTime.now();
        this.updatedAt = LocalDateTime.now();
        this.isDeleted = false;
    }

    public Long getIdx() {
        return idx;
    }

    public String getName() {
        return name;
    }

    public String getImage() {
        return image;
    }

    public LocalTime getAttendanceTime() {
        return attendanceTime;
    }

    public Point getLocation() {
        return location;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public LocalDateTime getUpdatedAt() {
        return updatedAt;
    }

    public boolean isDeleted() {
        return isDeleted;
    }
}
