package dev.be.dorothy.reservation.service;

import dev.be.dorothy.member.Member;
import dev.be.dorothy.member.MemberRole;
import dev.be.dorothy.member.repository.MemberRepository;
import dev.be.dorothy.reservation.Place;
import dev.be.dorothy.reservation.repository.PlaceRepository;
import dev.be.dorothy.security.authentication.UsernameAndPasswordTokenProvider;
import dev.be.dorothy.security.context.ContextHolder;
import org.junit.jupiter.api.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.time.LocalTime;
import java.util.List;
import java.util.concurrent.CountDownLatch;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
@TestInstance(TestInstance.Lifecycle.PER_CLASS)
class PlaceReservationServiceImplTest{

    @Autowired
    PlaceRepository placeRepository;
    @Autowired
    MemberRepository memberRepository;

    @Autowired
    UsernameAndPasswordTokenProvider usernameAndPasswordTokenProvider;
    @Autowired
    PlaceReservationServiceImpl placeReservationService;

    @Test
    @DisplayName("공간 예약 신청 테스트 - 동시성 포함")
    void concurrentPlaceReservationTest() throws InterruptedException {
        Member member = Member.of(
                "dorothy",
                "abcd1234",
                "2p7VxertGPCkNfnr",
                "dorothy",
                "dorothy@example.com",
                MemberRole.MEMBER
        );
        memberRepository.save(member);

        ContextHolder.setContext(usernameAndPasswordTokenProvider.getAuthentication(member.getMemberId()));
        Place place = new Place("place1", "");
        placeRepository.save(place);

        int numberOfThreads = 100;
        ExecutorService executorService = Executors.newFixedThreadPool(32);
        CountDownLatch latch = new CountDownLatch(numberOfThreads);

        for (int i=0; i<numberOfThreads; i++) {
            executorService.submit(() -> {
                try {
                    placeReservationService.reservePlace(1L, 1L, LocalTime.of(12,27));
                } finally {
                    latch.countDown();
                }
            });
        }

        latch.await();
        List<ReservationResDto> reservationList = placeRepository.findAllReservations();
        assertThat(reservationList).hasSize(1);
    }

}