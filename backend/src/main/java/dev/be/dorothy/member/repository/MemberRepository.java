package dev.be.dorothy.member.repository;

import dev.be.dorothy.member.Member;
import org.springframework.data.jdbc.repository.query.Modifying;
import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface MemberRepository extends CrudRepository<Member, Long> {
    @Modifying
    @Query("insert into member values (null, :memberId, :password, :name, :email, :image, :created_at, :updated_at, :is_deleted, :role );")
    void insert(
            @Param("memberId") String memberId,
            @Param("password") String password,
            @Param("name") String name,
            @Param("email") String email,
            @Param("image") String image,
            @Param("created_at") String createdAt,
            @Param("updated_at") String updatedAt,
            @Param("is_deleted") boolean isDeleted,
            @Param("role") String role);

    @Query("select count(*) from member where member_id = :memberId;")
    int countByMemberId(
            @Param("memberId") String memberId
    );

    @Query("select * from member where member_id = :memberId")
    Optional<Member> findByMemberId(@Param("memberId") String memberId);
}
