package dev.be.dorothy.member.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import dev.be.dorothy.auth.authentication.UsernameAndPasswordTokenProvider;
import dev.be.dorothy.exception.BadRequestException;
import dev.be.dorothy.member.Member;
import dev.be.dorothy.member.MemberRole;
import dev.be.dorothy.member.service.LoginReqDto;
import dev.be.dorothy.member.service.MemberResDto;
import dev.be.dorothy.member.service.MemberService;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultActions;

import static org.mockito.BDDMockito.given;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@WebMvcTest
@DisplayName("MemberController Test")
public class MemberControllerTest {
    @Autowired
    MockMvc mockMvc;

    @MockBean
    MemberService memberService;

    @MockBean
    UsernameAndPasswordTokenProvider usernameAndPasswordTokenProvider;

    ObjectMapper objectMapper = new ObjectMapper();

    @Test
    @DisplayName("로그인 성공 시, 정상적으로 MemberReqDto 반환하는지 테스트")
    void login() throws Exception {
        // given
        LoginReqDto loginReqDto = new LoginReqDto("sol", "1234");
        String content = objectMapper.writeValueAsString(loginReqDto);
        Member member = Member.of("sol", "1234", "2p7VxertGPCkNfnr", "sol", "", MemberRole.MEMBER);
        given(memberService.login(loginReqDto)).willReturn(MemberResDto.from(member));

        // when
        ResultActions perform = mockMvc.perform(
                post("/api/v1/member/login")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(content));

        // then
        perform
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.message").value("로그인에 성공하였습니다."))
                .andExpect(jsonPath("$.data.memberId").value("sol"))
                .andExpect(jsonPath("$.data.name").value("sol"))
                .andExpect(jsonPath("$.data.role").value("MEMBER"));
    }

    @Test
    @DisplayName("로그인에 실패하여 발생하는 예외를 정상적으로 처리하는지 테스트")
    void loginFail() throws Exception {
        // given
        LoginReqDto loginReqDto = new LoginReqDto("sol", "1234");
        String content = objectMapper.writeValueAsString(loginReqDto);
        given(memberService.login(loginReqDto)).willThrow(new BadRequestException("입력 정보가 올바르지 않습니다."));

        // when
        ResultActions perform = mockMvc.perform(
                post("/api/v1/member/login")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(content));

        // then
        perform
                .andExpect(status().isBadRequest())
                .andExpect(jsonPath("$.message").value("입력 정보가 올바르지 않습니다."));
    }
}
