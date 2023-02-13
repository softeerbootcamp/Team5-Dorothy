package dev.be.dorothy.track.service;

import dev.be.dorothy.track.Track;

import java.util.List;

public interface TrackRetrieveService {
    List<TrackResDto> retrieveTracks(Long userIdx);
    Track getTrack(Long trackIdx);
}
