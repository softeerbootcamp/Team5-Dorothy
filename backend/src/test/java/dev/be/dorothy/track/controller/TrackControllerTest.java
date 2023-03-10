package dev.be.dorothy.track.controller;

import dev.be.dorothy.common.CommonResponse;
import dev.be.dorothy.member.Member;
import dev.be.dorothy.member.MemberRole;
import dev.be.dorothy.security.ExceptionHandlerFilter;
import dev.be.dorothy.security.authentication.Authentication;
import dev.be.dorothy.security.authentication.UsernameAndPasswordTokenProvider;
import dev.be.dorothy.security.context.ContextHolder;
import dev.be.dorothy.security.context.MemberDetail;
import dev.be.dorothy.security.filter.AuthenticationFilter;
import dev.be.dorothy.security.filter.AuthorizationFilter;
import dev.be.dorothy.security.filter.LoginFilter;
import dev.be.dorothy.track.service.TrackCodeManagerService;
import dev.be.dorothy.track.service.TrackRegisterService;
import dev.be.dorothy.track.service.TrackRetrieveService;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.FilterType;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultActions;
import org.testcontainers.shaded.com.fasterxml.jackson.databind.ObjectMapper;

import static org.mockito.BDDMockito.given;
import static org.mockito.Mockito.mock;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@WebMvcTest(controllers = TrackController.class,
        excludeFilters = {@ComponentScan.Filter(
                type = FilterType.ASSIGNABLE_TYPE,
                classes = {
                        AuthenticationFilter.class,
                        LoginFilter.class,
                        AuthorizationFilter.class,
                        ExceptionHandlerFilter.class})
        })
@DisplayName("TrackController Test")
public class TrackControllerTest {
    @Autowired
    MockMvc mockMvc;

    @MockBean
    UsernameAndPasswordTokenProvider usernameAndPasswordTokenProvider;
    @MockBean
    TrackCodeManagerService trackCodeManagerService;
    @MockBean
    TrackRegisterService trackRegisterService;
    @MockBean
    TrackRetrieveService trackRetrieveService;

    ObjectMapper objectMapper = new ObjectMapper();

    @Test
    @DisplayName("?????? ?????? ?????? ?????????")
    void getTrackCode() throws Exception {
        // given
        Member member = Member.of(
                "dorothy",
                "abcd1234",
                "2p7VxertGPCkNfnr",
                "dorothy",
                "dorothy@example.com",
                MemberRole.ADMIN
        );
        Authentication mock = mock(Authentication.class);
        ContextHolder.setContext(mock);
        given(mock.getPrincipal()).willReturn(MemberDetail.from(member));

        String trackCode = "1ab2c3";
        CommonResponse commonResponse = new CommonResponse(HttpStatus.OK, "?????? ?????? ?????? ????????? ?????????????????????.", trackCode);
        ResponseEntity<CommonResponse> responseEntity = new ResponseEntity<>(commonResponse, HttpStatus.OK);
        String content = objectMapper.writeValueAsString(responseEntity);
        given(trackCodeManagerService.read("1")).willReturn("1ab2c3");

        // when
        ResultActions perform = mockMvc.perform(
                get("/api/v1/track/code/1")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(content));

        // then
        perform
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.message").value("?????? ?????? ?????? ????????? ?????????????????????."))
                .andExpect(jsonPath("$.data").value("1ab2c3"));
    }

    @Test
    @DisplayName("Member??? ?????? ?????? ????????? ???????????? ??????, 403 ?????? ??? ???????????? ?????????")
    void getTrackCodeWhenMember() throws Exception {
        // given
        Member member = Member.of(
                "dorothy",
                "abcd1234",
                "2p7VxertGPCkNfnr",
                "dorothy",
                "dorothy@example.com",
                MemberRole.MEMBER
        );
        Authentication mock = mock(Authentication.class);
        ContextHolder.setContext(mock);
        given(mock.getPrincipal()).willReturn(MemberDetail.from(member));

        CommonResponse commonResponse = new CommonResponse(HttpStatus.FORBIDDEN, "????????? ???????????? ????????????.", null);
        ResponseEntity<CommonResponse> responseEntity = new ResponseEntity<>(commonResponse, HttpStatus.FORBIDDEN);
        String content = objectMapper.writeValueAsString(responseEntity);
        given(trackCodeManagerService.read("1")).willReturn(null);

        // when
        ResultActions perform = mockMvc.perform(
                get("/api/v1/track/code/1")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(content));

        // then
        perform
                .andExpect(status().isForbidden())
                .andExpect(jsonPath("$.message").value("????????? ???????????? ????????????."))
                .andExpect(jsonPath("$.data").isEmpty());
    }

    @Test
    @DisplayName("Super Admin??? ?????? ?????? ????????? ???????????? ??????, 403 ?????? ??? ???????????? ?????????")
    void getTrackCodeWhenSuperAdmin() throws Exception {
        // given
        Member member = Member.of(
                "dorothy",
                "abcd1234",
                "2p7VxertGPCkNfnr",
                "dorothy",
                "dorothy@example.com",
                MemberRole.SUPER_ADMIN
        );
        Authentication mock = mock(Authentication.class);
        ContextHolder.setContext(mock);
        given(mock.getPrincipal()).willReturn(MemberDetail.from(member));

        CommonResponse commonResponse = new CommonResponse(HttpStatus.FORBIDDEN, "????????? ???????????? ????????????.", null);
        ResponseEntity<CommonResponse> responseEntity = new ResponseEntity<>(commonResponse, HttpStatus.FORBIDDEN);
        String content = objectMapper.writeValueAsString(responseEntity);
        given(trackCodeManagerService.read("1")).willReturn(null);

        // when
        ResultActions perform = mockMvc.perform(
                get("/api/v1/track/code/1")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(content));

        // then
        perform
                .andExpect(status().isForbidden())
                .andExpect(jsonPath("$.message").value("????????? ???????????? ????????????."))
                .andExpect(jsonPath("$.data").isEmpty());
    }
}
