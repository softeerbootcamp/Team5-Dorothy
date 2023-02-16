package dev.be.dorothy.reservation.repository;

import dev.be.dorothy.reservation.Place;
import dev.be.dorothy.reservation.service.PlaceResDto;
import dev.be.dorothy.reservation.service.ReservationResDto;
import org.springframework.data.jdbc.repository.query.Modifying;
import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.List;
import java.util.Optional;

public interface PlaceRepository extends CrudRepository<Place, Long> {

    @Query("select idx, name, image, created_at, updated_at from place")
    List<PlaceResDto> findAllPlaces();

    @Query("select idx, start_time, end_time from reservation where idx = :idx")
    Optional<ReservationResDto> findReservationById(@Param("idx") Integer idx);

    @Query("select idx, start_time, end_time from reservation")
    List<ReservationResDto> findAllReservations();

    @Modifying
    @Query("insert into reservation (member_idx, place_idx, date, start_time, end_time, is_deleted) values (:memberIdx, :placeIdx, :date, :startTime, :endTime, :isDeleted)")
    Integer reservePlace(
            @Param("memberIdx") Long memberIdx,
            @Param("placeIdx")Long placeIdx,
            @Param("date") LocalDateTime date,
            @Param("startTime") LocalTime startTime,
            @Param("endTime") LocalTime endTime,
            @Param("isDeleted") boolean isDeleted);

    @Modifying
    @Query("delete from reservation")
    void deleteAllReservation();

    @Query("select place_idx, start_time, end_time from reservation where place_idx = :placeIdx")
    List<ReservationResDto> findReservationByPlaceId(@Param("placeIdx") Long placeIdx);

    @Query("select place_idx, start_time, end_time from reservation where member_idx = :memberIdx")
    List<ReservationResDto> findReservationByMemberId(@Param("memberIdx") Long memberIdx);
}
