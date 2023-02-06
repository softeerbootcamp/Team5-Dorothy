package dev.be.dorothy.member.service;

import dev.be.dorothy.member.Member;

public class MemberResDto {
    private final Long idx;
    private final String memberId;
    private final String name;
    private final String email;
    private final String image;
    private final String createdAt;
    private final String updatedAt;
    private final String role;

    private MemberResDto(Long idx, String memberId, String name, String email, String image, String createdAt, String updatedAt, String role) {
        this.idx = idx;
        this.memberId = memberId;
        this.name = name;
        this.email = email;
        this.image = image;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.role = role;
    }

    public static MemberResDto from(Member member) {
        return new MemberResDto(
                member.getIdx(),
                member.getMemberId(),
                member.getName(),
                member.getEmail(),
                member.getImage(),
                member.getCreatedAt().toString(),
                member.getUpdatedAt().toString(),
                member.getRole().name()
        );
    }

    public Long getIdx() {
        return idx;
    }

    public String getMemberId() {
        return memberId;
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

    public String getCreatedAt() {
        return createdAt;
    }

    public String getUpdatedAt() {
        return updatedAt;
    }

    public String getRole() {
        return role;
    }
}
