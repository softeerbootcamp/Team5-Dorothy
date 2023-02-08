package dev.be.dorothy.member.service;

import dev.be.dorothy.exception.BadRequestException;
import dev.be.dorothy.member.repository.MemberRepository;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.BDDMockito.*;

@ExtendWith(MockitoExtension.class)
public class MemberServiceImplTest {
    @Mock
    MemberRepository memberRepository;
    @Mock
    PasswordEncryptor passwordEncryptor;

    @InjectMocks
    MemberServiceImpl memberServiceImpl;

    @Test
    @DisplayName("로그인 테스트 - 실패 케이스(ID가 존재하지 않는 경우)")
    void validateIdExists() {
        LoginReqDto loginReqDto = new LoginReqDto("abcd1234", "a1234567!");

        given(memberRepository.findByMemberId(loginReqDto.getMemberId())).willReturn(Optional.empty());

        BadRequestException badRequestException =
                assertThrows(BadRequestException.class, () ->
                        memberServiceImpl.login(loginReqDto));

        assertThat(badRequestException.getMessage()).isEqualTo("입력 정보가 올바르지 않습니다.");
    }

    @Test
    @DisplayName("로그인 테스트 - 실패 케이스(password가 일치하지 않는 경우)")
    void validatePassword() {
        LoginReqDto loginReqDto = new LoginReqDto("abcd1234", "a1234567!");
        String hashedPassword = "45a49cbdfe0e5b676579f409c96f58759b44cfc907e78d6c2c3fe38a9c67b0cf";

        lenient().doThrow(BadRequestException.class)
                .when(passwordEncryptor)
                .match(loginReqDto.getPassword(), hashedPassword);

        BadRequestException badRequestException =
                Assertions.assertThrows(BadRequestException.class, () ->
                        memberServiceImpl.login(loginReqDto));

        assertThat(badRequestException.getMessage()).isEqualTo("입력 정보가 올바르지 않습니다.");
    }
}