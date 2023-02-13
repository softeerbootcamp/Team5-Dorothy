package dev.be.dorothy.track.repository;

import dev.be.dorothy.track.Track;
import dev.be.dorothy.track.service.TrackResDto;
import org.springframework.data.jdbc.repository.query.Modifying;
import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface TrackRepository extends CrudRepository<Track, Long> {

    @Query("select a.idx, a.name, a.image, a.created_at, a.updated_at from track a inner join track_member b on a.idx = b.track_idx where b.is_deleted = 0 and a.is_deleted = 0 and b.member_idx = :userIdx")
    List<TrackResDto> findByMemberId(@Param("userIdx") Long idx);

    @Query("select idx from track_member where member_idx = :memberIdx and track_idx = :trackIdx limit 1")
    Optional<Long> doesExistTrackMember(@Param("memberIdx") Long memberIdx, @Param("trackIdx") Long trackIdx);

    @Modifying
    @Query("insert into track_member values(null, :memberIdx, :trackIdx, :role, :joinedAt, :isDeleted);")
    void saveTrackMember(
            @Param("memberIdx") Long memberIdx,
            @Param("trackIdx") Long trackIdx,
            @Param("role") String role,
            @Param("joinedAt") String joinedAt,
            @Param("isDeleted") boolean isDeleted);

    @Modifying
    @Query("delete from track_member;")
    void deleteTrackMember();
}
