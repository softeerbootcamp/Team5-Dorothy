package dev.be.dorothy.track.service;

import dev.be.dorothy.exception.ForbiddenException;
import dev.be.dorothy.member.MemberRole;
import dev.be.dorothy.track.Track;
import dev.be.dorothy.track.repository.TrackRepository;
import org.springframework.stereotype.Service;

@Service
public class TrackRegisterServiceImpl implements TrackRegisterService {
    private final TrackRepository trackRepository;

    public TrackRegisterServiceImpl(TrackRepository trackRepository) {
        this.trackRepository = trackRepository;
    }

    @Override
    public TrackResDto create(Long memberIdx, String name, MemberRole role) {
        if (role != MemberRole.ADMIN) {
            throw new ForbiddenException();
        }

        Track track = new Track(name, "");
        track.addTrackMember(memberIdx, role);
        trackRepository.save(track);

        return new TrackResDto(
                track.getIdx(),
                track.getName(),
                track.getImage(),
                track.getCreatedAt(),
                track.getUpdatedAt()
        );
    }
}
