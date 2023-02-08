package dev.be.dorothy.member.repository;

import dev.be.dorothy.member.Member;
import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface MemberRepository extends CrudRepository<Member, Long> {
    @Query("select count(*) from member where member_id = :memberId;")
    int countByMemberId(@Param("memberId") String memberId);

    @Query("select * from member where member_id = :memberId")
    Optional<Member> findByMemberId(@Param("memberId") String memberId);
}
