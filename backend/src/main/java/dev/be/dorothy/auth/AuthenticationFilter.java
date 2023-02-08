package dev.be.dorothy.auth;

import dev.be.dorothy.auth.authentication.Authentication;
import dev.be.dorothy.auth.authentication.UsernameAndPasswordTokenProvider;
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
@Order(1)
public class AuthenticationFilter implements Filter {

    private static final Logger logger = LoggerFactory.getLogger(AuthenticationFilter.class);
    private final UsernameAndPasswordTokenProvider usernameAndPasswordTokenProvider;

    public AuthenticationFilter(UsernameAndPasswordTokenProvider usernameAndPasswordTokenProvider) {
        this.usernameAndPasswordTokenProvider = usernameAndPasswordTokenProvider;
    }

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
        HttpServletRequest req = (HttpServletRequest) request;
/*        HttpSession session = req.getSession(false);
        Authentication authentication = attemptAuthentication(session);
        ContextHolder.setContext(authentication);*/
        chain.doFilter(request, response);
    }

    private Authentication attemptAuthentication(HttpSession session) {
        MemberResDto member = (MemberResDto) session.getAttribute("member");
        //TODO : 멤버 정보를 바탕으로 로그인 여부 판별 로직 구현

        return usernameAndPasswordTokenProvider.getAuthentication(member.getMemberId());
    }

    @Override
    public void init(FilterConfig filterConfig) throws ServletException {
        Filter.super.init(filterConfig);
        logger.info("filter init");
    }

    @Override
    public void destroy() {
        Filter.super.destroy();
    }
}
