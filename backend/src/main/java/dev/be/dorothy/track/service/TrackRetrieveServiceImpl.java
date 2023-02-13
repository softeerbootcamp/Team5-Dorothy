package dev.be.dorothy.track.service;

import dev.be.dorothy.exception.BadRequestException;
import dev.be.dorothy.track.Track;
import dev.be.dorothy.track.repository.TrackRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TrackRetrieveServiceImpl implements TrackRetrieveService{

    private final TrackRepository trackRepository;
    
    public TrackRetrieveServiceImpl(TrackRepository trackRepository) {
        this.trackRepository = trackRepository;
    }

    @Override
    public List<TrackResDto> retrieveTracks(Long userIdx) {
        return trackRepository.findByMemberId(userIdx);
    }

    @Override
    public Track getTrack(Long trackIdx) {
        return trackRepository
                .findById(trackIdx)
                .orElseThrow(() -> new BadRequestException("존재하지 않는 트랙입니다."));
    }
}
