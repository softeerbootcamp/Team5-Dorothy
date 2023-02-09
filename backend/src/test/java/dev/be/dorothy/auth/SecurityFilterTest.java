package dev.be.dorothy.auth;

import dev.be.dorothy.auth.authentication.UsernameAndPasswordTokenProvider;
import dev.be.dorothy.member.service.PasswordEncryptor;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.mock.web.MockHttpSession;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;
import static org.junit.jupiter.api.Assertions.*;

@WebMvcTest(AuthenticationFilter.class)
@ExtendWith(MockitoExtension.class)
class SecurityFilterTest {

    @MockBean
    UsernameAndPasswordTokenProvider usernameAndPasswordTokenProviderMck;
    @MockBean
    PasswordEncryptor passwordEncryptor;
    @InjectMocks
    AuthenticationFilter authenticationFilter ;
    @MockBean
    AuthenticationManager authenticationManager;
    @InjectMocks
    LoginFilter loginFilter;

    @Autowired
    MockMvc mockMvc;
    @Autowired
    private WebApplicationContext context;

    MockHttpSession session = new MockHttpSession();
    @BeforeEach
    void testSetUp(){
        mockMvc = MockMvcBuilders.webAppContextSetup(context)
                .addFilter(authenticationFilter)
                .addFilter(loginFilter)
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
        //ToDo : authorizationFilter 완성 후 접근 권한 관련 사항 검사 로직 추가
        assertDoesNotThrow(()->mockMvc.perform(MockMvcRequestBuilders.get("/").session(session)));
    }
}