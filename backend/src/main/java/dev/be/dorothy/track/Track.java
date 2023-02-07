package dev.be.dorothy.track;

import dev.be.dorothy.member.Member;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.relational.core.mapping.MappedCollection;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

public class Track {
    @Id
    private Long idx;
    private String name;
    private String image;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
    private boolean isDeleted;

    public Track() {}

    public Track(String name, String image) {
        this.name = name;
        this.image = image;
        this.createdAt = LocalDateTime.now();
        this.updatedAt = LocalDateTime.now();
        this.isDeleted = false;
    }

    @MappedCollection(idColumn = "track_idx", keyColumn = "idx")
    private List<TrackMember> trackMembers = new ArrayList<>();

    @Transient
    private final List<Member> members = new ArrayList<>();

    private void setTrackMembers(List<TrackMember> trackMembers) {
        this.trackMembers = trackMembers;
    }

    public void addTrackMember(Member member) {
        trackMembers.add(new TrackMember(member.getIdx(), member.getRole(), LocalDateTime.now(), false));
    }

    public List<Long> getMemberIds() {
        return trackMembers.stream()
                .map(TrackMember::getMemberIdx)
                .collect(Collectors.toList());
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

    public boolean isDeleted() {
        return isDeleted;
    }
}
