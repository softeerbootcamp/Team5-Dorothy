package dev.be.dorothy.track.service;

import dev.be.dorothy.member.MemberRole;

import java.time.LocalDateTime;

public class TrackResDto {
    private final Long idx;
    private final String name;
    private final String image;
    private final LocalDateTime createdAt;
    private final LocalDateTime updatedAt;
    private final MemberRole role;
    private final LocalDateTime joinedAt;

    public TrackResDto(Long idx, String name, String image, LocalDateTime createdAt, LocalDateTime updatedAt, MemberRole role, LocalDateTime joinedAt) {
        this.idx = idx;
        this.name = name;
        this.image = image;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.role = role;
        this.joinedAt = joinedAt;
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

    public MemberRole getRole() {
        return role;
    }

    public LocalDateTime getJoinedAt() {
        return joinedAt;
    }
}
