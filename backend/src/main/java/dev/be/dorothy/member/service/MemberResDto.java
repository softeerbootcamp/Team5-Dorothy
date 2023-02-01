package dev.be.dorothy.member.service;

import dev.be.dorothy.member.Member;

public class MemberResDto {
    private final Long idx;
    private final String name;
    private final String email;
    private final String image;
    private final String createdAt;
    private final String updatedAt;
    private final String role;

    private MemberResDto(Long idx, String name, String email, String image, String createdAt, String updatedAt, String role) {
        this.idx = idx;
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
                member.getName(),
                member.getEmail(),
                member.getImage(),
                member.getCreatedAt().toString(),
                member.getUpdatedAt().toString(),
                member.getRole().name()
        );
    }
}
