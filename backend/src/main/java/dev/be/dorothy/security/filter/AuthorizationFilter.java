package dev.be.dorothy.security.filter;

import dev.be.dorothy.security.authorization.HttpSecurity;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;
import java.io.IOException;

public class AuthorizationFilter implements Filter {

    private static final Logger logger = LoggerFactory.getLogger(AuthorizationFilter.class);
    private final HttpSecurity httpSecurity;

    public AuthorizationFilter(HttpSecurity httpSecurity) {
        this.httpSecurity = httpSecurity;
    }

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
        logger.info("authorization filter");
/*        HttpServletRequest req = (HttpServletRequest) request;
        String url = req.getRequestURI();
        httpSecurity.validateRequest(url);*/
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
