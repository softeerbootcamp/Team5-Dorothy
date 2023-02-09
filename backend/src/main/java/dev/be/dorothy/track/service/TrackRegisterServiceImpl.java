package dev.be.dorothy.track.service;

import dev.be.dorothy.exception.BadRequestException;
import dev.be.dorothy.exception.ForbiddenException;
import dev.be.dorothy.member.MemberRole;
import dev.be.dorothy.track.Track;
import dev.be.dorothy.track.repository.TrackRepository;
import org.springframework.stereotype.Service;

import javax.crypto.BadPaddingException;

@Service
public class TrackRegisterServiceImpl implements TrackRegisterService {
    private final TrackCodeManagerService trackCodeManagerService;
    private final TrackRepository trackRepository;

    public TrackRegisterServiceImpl(TrackCodeManagerService trackCodeManagerService, TrackRepository trackRepository) {
        this.trackCodeManagerService = trackCodeManagerService;
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

    @Override
    public TrackResDto join(Long trackIdx, Long memberIdx, String joinCode) {
        return null;
    }
}
