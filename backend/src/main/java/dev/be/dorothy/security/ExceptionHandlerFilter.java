package dev.be.dorothy.security;

import com.fasterxml.jackson.databind.ObjectMapper;
import dev.be.dorothy.common.CommonResponse;
import dev.be.dorothy.exception.BadRequestException;
import org.springframework.core.annotation.Order;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;
import javax.servlet.*;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Component
@Order(1)
public class ExceptionHandlerFilter implements Filter {

    private final ObjectMapper objectMapper = new ObjectMapper();

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
        try{
            chain.doFilter(request, response);
        }catch (BadRequestException ex){
            makeErrorResponse(response, ex);
        }
    }

    private void makeErrorResponse(ServletResponse response, BadRequestException ex) throws IOException {
        CommonResponse commonResponse = new CommonResponse(HttpStatus.UNAUTHORIZED, ex.getMessage(), null);
        String result = objectMapper.writeValueAsString(commonResponse);
        HttpServletResponse httpRes = (HttpServletResponse) response;
        httpRes.setStatus(401);
        response.setContentType("application/json");
        response.setCharacterEncoding("utf-8");
        response.getWriter().write(result);
    }
}
