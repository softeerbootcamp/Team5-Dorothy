package dev.be.dorothy.security.authorization;

import dev.be.dorothy.security.filter.AuthorizationFilter;
import dev.be.dorothy.member.MemberRole;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.annotation.Order;

@Configuration
public class SecurityConfig {

    @Bean
    @Order(5)
    public AuthorizationFilter authorizationFilter(HttpSecurity httpSecurity){
        return httpSecurity
                .authorizeRequest()
                .antMatchers("/api/v1/member").permitAll()
                .antMatchers("/api/v1/member/login").permitAll()
                .antMatchers("/track/generate").hasRole(MemberRole.ADMIN)
                .antMatchers("/**").isAuthenticated()
                .and().build();
    }
}
