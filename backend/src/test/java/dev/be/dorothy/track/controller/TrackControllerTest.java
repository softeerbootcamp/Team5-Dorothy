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
    @DisplayName("트랙 코드 조회 테스트")
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
        CommonResponse commonResponse = new CommonResponse(HttpStatus.OK, "트랙 초대 코드 조회가 완료되었습니다.", trackCode);
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
                .andExpect(jsonPath("$.message").value("트랙 초대 코드 조회가 완료되었습니다."))
                .andExpect(jsonPath("$.data").value("1ab2c3"));
    }
}
