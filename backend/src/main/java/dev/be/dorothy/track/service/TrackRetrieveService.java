package dev.be.dorothy.track.service;

import java.util.List;

public interface TrackRetrieveService {

    List<TrackResDto> retrieveTracks(Long userIdx);
}
