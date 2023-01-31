package dev.be.dorothy.member;

import org.springframework.data.annotation.Id;

import java.time.LocalDateTime;

public class Member {
    @Id
    private Long idx;
    private String memberId;
    private String password;
    private String name;
    private String email;
    private String image;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
    private boolean isDeleted;
    private MemberRole role;

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
}
