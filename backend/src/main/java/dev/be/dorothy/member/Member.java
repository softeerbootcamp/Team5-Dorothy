package dev.be.dorothy.member;

import org.springframework.data.annotation.Id;

import java.time.LocalDateTime;

public class Member {
    @Id
    private Long idx;
    private String memberId;
    private String password;
    private String salt;
    private String name;
    private String email;
    private String image;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
    private boolean isDeleted;
    private MemberRole role;

    private Member(String memberId, String password, String salt, String name, String email, MemberRole memberRole) {
        this.memberId = memberId;
        this.password = password;
        this.salt = salt;
        this.name = name;
        this.email = email;
        this.image = "";
        this.createdAt = LocalDateTime.now();
        this.updatedAt = LocalDateTime.now();
        this.isDeleted = false;
        this.role = memberRole;
    }

    public Member() {}

    public static Member of(String memberId, String password, String salt, String name, String email, MemberRole memberRole) {
        return new Member(memberId, password, salt, name, email, memberRole);
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

    public String getSalt() {
        return salt;
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
