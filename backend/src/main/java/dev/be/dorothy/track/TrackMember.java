package dev.be.dorothy.track;

import dev.be.dorothy.member.MemberRole;
import org.springframework.data.relational.core.mapping.Table;

import java.time.LocalDateTime;

@Table("track_member")
public class TrackMember {
    private Long memberIdx;
    private Long trackIdx;
    private MemberRole role;
    private LocalDateTime joinedAt;
    private boolean isDeleted;

    public TrackMember() {}

    public TrackMember(Long memberIdx, Long trackIdx, MemberRole role, LocalDateTime joinedAt, boolean isDeleted) {
        this.memberIdx = memberIdx;
        this.trackIdx = trackIdx;
        this.role = role;
        this.joinedAt = joinedAt;
        this.isDeleted = isDeleted;
    }

    public Long getMemberIdx() {
        return memberIdx;
    }

    public Long getTrackIdx() {
        return trackIdx;
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
