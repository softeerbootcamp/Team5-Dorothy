package dev.be.dorothy.track.repository;

import dev.be.dorothy.track.Track;
import dev.be.dorothy.track.service.TrackResDto;
import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface TrackRepository extends CrudRepository<Track, Long> {

    @Query("select a.idx, a.name, a.image, a.created_at, a.updated_at from track a inner join track_member b on a.idx = b.track_idx where b.is_deleted = 0 and a.is_deleted = 0 and b.member_idx = :userIdx")
    List<TrackResDto> findByMemberId(@Param("userIdx") Long idx);

}
