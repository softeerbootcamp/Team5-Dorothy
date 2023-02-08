package dev.be.dorothy.track.repository;

import dev.be.dorothy.track.Track;
import org.springframework.data.repository.CrudRepository;

public interface TrackRepository extends CrudRepository<Track, Long> {
}
