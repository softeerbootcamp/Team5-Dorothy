package dev.be.dorothy.track.service;

import dev.be.dorothy.exception.BadRequestException;
import dev.be.dorothy.exception.ForbiddenException;
import dev.be.dorothy.member.MemberRole;
import dev.be.dorothy.track.Track;
import dev.be.dorothy.track.repository.TrackRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

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
        trackCodeManagerService.store(track.getIdx().toString());

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
        Track track = trackRepository
                .findById(trackIdx)
                .orElseThrow(() -> new BadRequestException("트랙정보가 유효하지 않습니다."));

        Optional<Long> trackMemberIdx = trackRepository.doesExistTrackMember(memberIdx, trackIdx);
        if(trackMemberIdx.isPresent()) {
            throw new BadRequestException("이미 존재하는 멤버입니다.");
        }

        String code = trackCodeManagerService.read(trackIdx.toString());
        if (!code.equals(joinCode)) {
            throw new ForbiddenException();
        }

        track.addTrackMember(memberIdx, MemberRole.MEMBER);
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
