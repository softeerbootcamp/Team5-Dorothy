package dev.be.dorothy.auth;

import com.fasterxml.jackson.databind.ObjectMapper;
import dev.be.dorothy.common.CommonResponse;
import dev.be.dorothy.exception.BadRequestException;
import dev.be.dorothy.member.service.LoginReqDto;
import dev.be.dorothy.member.service.MemberResDto;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.core.annotation.Order;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;
import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;

@Component
@Order(2)
public class LoginFilter implements Filter {
    private static final Logger logger = LoggerFactory.getLogger(LoginFilter.class);
    private final AuthenticationManager authenticationManager;
    private final ObjectMapper objectMapper = new ObjectMapper();

    public LoginFilter(AuthenticationManager authenticationMangager) {
        this.authenticationManager = authenticationMangager;
    }

    @Override
    public void init(FilterConfig filterConfig) throws ServletException {
        Filter.super.init(filterConfig);
    }

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws ServletException, IOException {
        logger.info("login filter");
        HttpServletRequest httpReq = (HttpServletRequest) request;
        String url = httpReq.getRequestURI();
        logger.info(url);
        if(url.equals("/member/login")){
            try {
                MemberResDto memberResDto = attemptAuthentication(httpReq);
                writeSuccessResponse(httpReq, response, memberResDto);
            }catch (BadRequestException e) {
                writeFailResponse(response, e.getMessage());
            }
            return;
        }
        chain.doFilter(request, response);
    }

    @Override
    public void destroy() {
        Filter.super.destroy();
    }

    private void writeSuccessResponse(HttpServletRequest httpReq, ServletResponse response, MemberResDto memberResDto) throws IOException {
        HttpSession session = httpReq.getSession(true);
        session.setAttribute("member", memberResDto);
        CommonResponse commonResponse = new CommonResponse(HttpStatus.OK, "로그인에 성공하였습니다", memberResDto);
        String result = objectMapper.writeValueAsString(commonResponse);
        HttpServletResponse httpRes = (HttpServletResponse) response;
        httpRes.setStatus(200);
        response.setContentType("application/json");
        response.setCharacterEncoding("utf-8");
        response.getWriter().write(result);
    }

    private void writeFailResponse(ServletResponse response, String message) throws IOException {
        CommonResponse commonResponse = new CommonResponse(HttpStatus.UNAUTHORIZED, message, null);
        String result = objectMapper.writeValueAsString(commonResponse);
        HttpServletResponse httpRes = (HttpServletResponse) response;
        httpRes.setStatus(401);
        response.setContentType("application/json");
        response.setCharacterEncoding("utf-8");
        response.getWriter().write(result);
    }

    private MemberResDto attemptAuthentication(HttpServletRequest request) throws IOException, BadRequestException {
        LoginReqDto loginReqDto = objectMapper.readValue(request.getInputStream(), LoginReqDto.class);
        return authenticationManager.matchAuthentication(loginReqDto);
    }
}
