package dev.be.dorothy.security.filter;

import dev.be.dorothy.security.authentication.Authentication;
import dev.be.dorothy.security.authentication.UsernameAndPasswordTokenProvider;
import dev.be.dorothy.security.context.ContextHolder;
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
public class AuthenticationFilter implements Filter {

    private static final Logger logger = LoggerFactory.getLogger(AuthenticationFilter.class);
    private final UsernameAndPasswordTokenProvider usernameAndPasswordTokenProvider;


    public AuthenticationFilter(UsernameAndPasswordTokenProvider usernameAndPasswordTokenProvider) {
        this.usernameAndPasswordTokenProvider = usernameAndPasswordTokenProvider;
    }

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
        logger.info("authentication filter");
        HttpServletRequest req = (HttpServletRequest) request;
        HttpSession session = req.getSession(false);
        if(session != null){
            MemberResDto member = (MemberResDto) session.getAttribute("member");
            if(member != null){
                Authentication authentication = usernameAndPasswordTokenProvider.getAuthentication(member.getMemberId());
                ContextHolder.setContext(authentication);
            }
        }
        chain.doFilter(request, response);
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
