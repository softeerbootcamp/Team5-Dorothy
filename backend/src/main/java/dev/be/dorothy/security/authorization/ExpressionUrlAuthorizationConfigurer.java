package dev.be.dorothy.security.authorization;
import dev.be.dorothy.member.MemberRole;
import org.springframework.stereotype.Component;

import java.util.*;

@Component
public class ExpressionUrlAuthorizationConfigurer {

    private final List<UrlRegistry> urlRegistryList = new ArrayList<>();

    private HttpSecurity httpSecurity;

    public void setHttpSecurity(HttpSecurity httpSecurity) {
        this.httpSecurity = httpSecurity;
    }

    public UrlRegistry antMatchers(String path){
        UrlRegistry registry = urlRegistryList.stream()
                .filter(urlRegistry -> urlRegistry.getPath().equals(path))
                .findFirst().orElse(new UrlRegistry(path));
        urlRegistryList.add(registry);
        return registry;
    }

    public HttpSecurity and(){
        return this.httpSecurity;
    }

    class UrlRegistry {

        private final String path;

        private final List<AcccessEnum> accessList;
        private final List<MemberRole> roleList;

        public UrlRegistry(String path) {
            this.path = path;
            accessList = new ArrayList<>();
            roleList = new ArrayList<>();
        }

        public void addAccessList(AcccessEnum access){
            accessList.add(access);
        }

        public String getPath() {
            return path;
        }
        public List<AcccessEnum> getAccessList() {
            return accessList;
        }
        public List<MemberRole> getRoleList() {
            return roleList;
        }

        public ExpressionUrlAuthorizationConfigurer permitAll(){
            addAccessList(AcccessEnum.PERMIT_ALL);
            return ExpressionUrlAuthorizationConfigurer.this;
        }

        public ExpressionUrlAuthorizationConfigurer hasRole(MemberRole memberRole){
            addAccessList(AcccessEnum.HAS_ROLE);
            roleList.add(memberRole);
            return ExpressionUrlAuthorizationConfigurer.this;
        }

        public ExpressionUrlAuthorizationConfigurer isAuthenticated(){
            addAccessList(AcccessEnum.IS_AUTHENTICATED);
            return ExpressionUrlAuthorizationConfigurer.this;
        }

    }


}
