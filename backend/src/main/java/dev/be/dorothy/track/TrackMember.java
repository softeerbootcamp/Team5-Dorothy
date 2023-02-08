package dev.be.dorothy.track;

import dev.be.dorothy.member.MemberRole;
import org.springframework.data.relational.core.mapping.Table;

import java.time.LocalDateTime;

@Table("track_member")
public class TrackMember {
    private Long memberIdx;
    private MemberRole role;
    private LocalDateTime joinedAt;
    private boolean isDeleted;

    public TrackMember() {}

    public TrackMember(Long memberIdx, MemberRole role, LocalDateTime joinedAt, boolean isDeleted) {
        this.memberIdx = memberIdx;
        this.role = role;
        this.joinedAt = joinedAt;
        this.isDeleted = isDeleted;
    }

    public Long getMemberIdx() {
        return memberIdx;
    }

    public MemberRole getRole() {
        return role;
    }

    public LocalDateTime getJoinedAt() {
        return joinedAt;
    }

    public boolean isDeleted() {
        return isDeleted;
    }
}
