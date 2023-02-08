package dev.be.dorothy.track.service;

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
        List<TrackResDto> byMemberId = trackRepository.findByMemberId(userIdx);
        return byMemberId;
    }
}
