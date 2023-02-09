package dev.be.dorothy.track.service;

import dev.be.dorothy.exception.ForbiddenException;
import dev.be.dorothy.member.MemberRole;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.BDDMockito.given;
import static org.mockito.Mockito.mock;

@ExtendWith(MockitoExtension.class)
@DisplayName("TrackRegisterService Test")
public class TrackRegisterServiceTest {

    @InjectMocks
    TrackRegisterServiceImpl trackRegisterService;

    @Test
    @DisplayName("권한이 운영진이 아닌 경우 (멤버인 경우) 403 예외를 던지는지 테스트")
    void createTrackWhenMember() {
        // given when then
        assertThrows(
                ForbiddenException.class,
                () -> trackRegisterService.create(1L, "lucas", MemberRole.MEMBER)
        );
    }

    @Test
    @DisplayName("권한이 운영진이 아닌 경우 (슈퍼 어드민인 경우) 403 예외를 던지는지 테스트")
    void createTrackWhenSuperAdmin() {
        // given when then
        assertThrows(
                ForbiddenException.class,
                () -> trackRegisterService.create(1L, "lucas", MemberRole.SUPER_ADMIN)
        );
    }

    @Test
    @DisplayName("트랙 가입 시, 초대 코드가 일치하지 않는 경우 테스트")
    void joinWithInvalidJoinCode() {
        // given
        long trackIdx = 1L;
        long memberIdx = 99L;
        String joinCode = "123456";
        TrackCodeManagerService trackCodeManagerService = mock(TrackCodeManagerService.class);
        given(trackCodeManagerService.read(Long.toString(trackIdx))).willReturn("a1b2c3");

        // when then
        assertThrows(
                ForbiddenException.class,
                () -> trackRegisterService.join(trackIdx, memberIdx, joinCode)
        );
    }
}
