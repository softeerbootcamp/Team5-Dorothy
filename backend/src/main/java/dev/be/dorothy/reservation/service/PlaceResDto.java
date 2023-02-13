package dev.be.dorothy.reservation.service;

import java.time.LocalDateTime;

public class PlaceResDto {

    private Long idx;
    private String name;
    private String image;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;

    public PlaceResDto(Long idx, String name, String image) {
        this.idx = idx;
        this.name = name;
        this.image = image;
        this.createdAt = LocalDateTime.now();
        this.updatedAt = LocalDateTime.now();
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
