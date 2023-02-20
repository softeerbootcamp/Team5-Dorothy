package dev.be.dorothy.security.filter;

import com.fasterxml.jackson.databind.ObjectMapper;
import dev.be.dorothy.common.CommonResponse;
import dev.be.dorothy.exception.BadRequestException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.core.annotation.Order;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;
import javax.servlet.*;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Arrays;

@Component
@Order(3)
public class LogoutFilter implements Filter {
    private static final Logger logger = LoggerFactory.getLogger(LogoutFilter.class);
    private final ObjectMapper objectMapper = new ObjectMapper();

    @Override
    public void init(FilterConfig filterConfig) throws ServletException {
        Filter.super.init(filterConfig);
    }

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws ServletException, IOException {
        logger.info("logout filter");
        HttpServletRequest httpReq = (HttpServletRequest) request;
        String url = httpReq.getRequestURI();
        logger.info(url);
        if(url.equals("/api/v1/member/logout")){
            try {
                Cookie cookie = attemptLogout(httpReq);
                writeSuccessResponse(response, cookie);
            }catch (BadRequestException e) {
                throw new BadRequestException("입력 정보가 올바르지 않습니다.");
            }
            return;
        }
        chain.doFilter(request, response);
    }

    @Override
    public void destroy() {
        Filter.super.destroy();
    }

    private void writeSuccessResponse(ServletResponse response, Cookie cookie) throws IOException {
        CommonResponse commonResponse = new CommonResponse(HttpStatus.OK, "로그아웃에 성공하였습니다", null);
        String result = objectMapper.writeValueAsString(commonResponse);
        HttpServletResponse httpRes = (HttpServletResponse) response;
        httpRes.setStatus(200);
        ((HttpServletResponse) response).addCookie(cookie);
        response.setContentType("application/json");
        response.setCharacterEncoding("utf-8");
        response.getWriter().write(result);
    }

    private Cookie attemptLogout(HttpServletRequest request){
        Cookie cookie = Arrays.stream(request.getCookies()).findFirst().orElseThrow(() -> new BadRequestException("로그인 정보가 없습니다"));
        cookie.setMaxAge(0);
        request.getSession().invalidate();
        return cookie;
    }

}
