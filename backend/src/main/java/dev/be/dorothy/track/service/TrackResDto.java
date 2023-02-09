package dev.be.dorothy.track.service;

import java.time.LocalDateTime;

public class TrackResDto {
    private final Long idx;
    private final String name;
    private final String image;
    private final LocalDateTime createdAt;
    private final LocalDateTime updatedAt;

    public TrackResDto(Long idx, String name, String image, LocalDateTime createdAt, LocalDateTime updatedAt) {
        this.idx = idx;
        this.name = name;
        this.image = image;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
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

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public LocalDateTime getUpdatedAt() {
        return updatedAt;
    }
}
