package dev.be.dorothy.auth;

import com.fasterxml.jackson.databind.ObjectMapper;
import dev.be.dorothy.member.service.LoginReqDto;
import dev.be.dorothy.member.service.MemberResDto;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;
import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;
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
            MemberResDto memberResDto = attemptAuthentication(httpReq);
            writeResponse(httpReq, response, memberResDto);
            return;
        }
        chain.doFilter(request, response);
    }

    @Override
    public void destroy() {
        Filter.super.destroy();
    }

    private void writeResponse(HttpServletRequest httpReq, ServletResponse response, MemberResDto memberResDto) throws IOException {
        HttpSession session = httpReq.getSession(true);
        session.setAttribute("member", memberResDto);
        String result = objectMapper.writeValueAsString(memberResDto);
        response.getWriter().write(result);
    }

    private MemberResDto attemptAuthentication(HttpServletRequest request) throws IOException {
        LoginReqDto loginReqDto = objectMapper.readValue(request.getInputStream(), LoginReqDto.class);
        return authenticationManager.matchAuthentication(loginReqDto);
    }
}
