package dev.be.dorothy.track.service.register;

import dev.be.dorothy.exception.ForbiddenException;
import dev.be.dorothy.member.MemberRole;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.junit.jupiter.api.Assertions.assertThrows;

@ExtendWith(MockitoExtension.class)
@DisplayName("TrackRegister Test")
public class TrackRegisterTest {

    @InjectMocks
    TrackRegisterImpl trackRegister;

    @Test
    @DisplayName("권한이 운영진이 아닌 경우 (멤버인 경우) 403 예외를 던지는지 테스트")
    void createTrackWhenMember() {
        // given when then
        assertThrows(
                ForbiddenException.class,
                () -> trackRegister.create(1L, "lucas", MemberRole.MEMBER)
        );
    }

    @Test
    @DisplayName("권한이 운영진이 아닌 경우 (슈퍼 어드민인 경우) 403 예외를 던지는지 테스트")
    void createTrackWhenSuperAdmin() {
        // given when then
        assertThrows(
                ForbiddenException.class,
                () -> trackRegister.create(1L, "lucas", MemberRole.SUPER_ADMIN)
        );
    }
}
