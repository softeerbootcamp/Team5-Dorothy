package dev.be.dorothy.member;

import org.springframework.data.annotation.Id;

import java.time.LocalDateTime;

public class Member {
    @Id
    private Long idx;
    private final String memberId;
    private final String password;
    private final String name;
    private final String email;
    private final String image;
    private final LocalDateTime createdAt;
    private final LocalDateTime updatedAt;
    private final boolean isDeleted;
    private final MemberRole role;

    public Member(String memberId, String password, String name, String email, String image, LocalDateTime createdAt, LocalDateTime updatedAt, boolean isDeleted, MemberRole role) {
        this.memberId = memberId;
        this.password = password;
        this.name = name;
        this.email = email;
        this.image = image;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.isDeleted = isDeleted;
        this.role = role;
    }

    public Long getIdx() {
        return idx;
    }

    public String getMemberId() {
        return memberId;
    }

    public String getPassword() {
        return password;
    }

    public String getName() {
        return name;
    }

    public String getEmail() {
        return email;
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

    public boolean isDeleted() {
        return isDeleted;
    }

    public MemberRole getRole() {
        return role;
    }
}
