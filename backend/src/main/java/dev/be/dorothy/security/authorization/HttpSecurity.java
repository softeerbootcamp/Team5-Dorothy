package dev.be.dorothy.security.authorization;

import dev.be.dorothy.security.filter.AuthorizationFilter;
import dev.be.dorothy.member.MemberRole;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class HttpSecurity {

    private final ExpressionUrlAuthorizationConfigurer expressionUrlAuthorizationConfigurer;

    public HttpSecurity(ExpressionUrlAuthorizationConfigurer expressionUrlAuthorizationConfigurer) {
        this.expressionUrlAuthorizationConfigurer = expressionUrlAuthorizationConfigurer;
        expressionUrlAuthorizationConfigurer.setHttpSecurity(this);
    }

    public ExpressionUrlAuthorizationConfigurer authorizeRequest(){
        return expressionUrlAuthorizationConfigurer;
    }

    public void validateRequest(String url){
        ExpressionUrlAuthorizationConfigurer.UrlRegistry urlRegistry = expressionUrlAuthorizationConfigurer.antMatchers(url);
        List<AcccessEnum> accessList = urlRegistry.getAccessList();
        List<MemberRole> roleList = urlRegistry.getRoleList();
        accessList.forEach(acccessEnum -> acccessEnum.validate(roleList));
    }

    public AuthorizationFilter build() {
        return new AuthorizationFilter(HttpSecurity.this);
    }
}
