package dev.be.dorothy.auth.authorization;

import dev.be.dorothy.auth.AuthorizationFilter;
import dev.be.dorothy.member.MemberRole;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.annotation.Order;

@Configuration
public class SecurityConfig {

    @Bean
    @Order(2)
    public AuthorizationFilter authorizationFilter(HttpSecurity httpSecurity){
        return httpSecurity
                .authorizeRequest()
                .antMatchers("/login").permitAll()
                .antMatchers("/member").isAuthenticated()
                .antMatchers("/track").hasRole(MemberRole.ADMIN)
                .and().build();
    }
}
