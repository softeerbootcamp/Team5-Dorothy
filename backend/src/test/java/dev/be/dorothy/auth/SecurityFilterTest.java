package dev.be.dorothy.auth;

import dev.be.dorothy.exception.BadRequestException;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.mock.web.MockHttpSession;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;
import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.*;

@WebMvcTest(SecurityFilter.class)
class SecurityFilterTest {

    @Autowired
    MockMvc mockMvc;
    @Autowired
    private WebApplicationContext context;

    MockHttpSession session = new MockHttpSession();
    SecurityFilter securityFilter = new SecurityFilter();

    @BeforeEach
    void testSetUp(){
        mockMvc = MockMvcBuilders.webAppContextSetup(context)
                .addFilter(securityFilter)
                .build();
        session.setAttribute("JSESSIONID", "testJSESSIONID");
    }
    @Test
    @DisplayName("컨트롤러 접근 테스트 - 세션을 가지고 접근할 때")
    void accessWithSession(){
        assertDoesNotThrow(()->mockMvc.perform(MockMvcRequestBuilders.get("/").session(session)));
    }

    @Test
    @DisplayName("컨트롤러 접근 테스트 - 세션 없이 접근할 때")
    void accessWithoutSession(){
        BadRequestException exception = assertThrows(BadRequestException.class, () -> mockMvc.perform(MockMvcRequestBuilders.get("/")));
        assertThat(exception.getMessage()).isEqualTo("세션이 존재하지 않습니다.");
    }
}