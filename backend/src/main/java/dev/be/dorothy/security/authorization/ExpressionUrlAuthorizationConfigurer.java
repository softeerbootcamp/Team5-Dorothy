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

    public UrlRegistry findRegistry(String path){
        return urlRegistryList.stream()
                .filter(urlRegistry -> urlRegistry.getPath().equals(path))
                .findFirst().orElse(new UrlRegistry("noPath", AcccessEnum.IS_AUTHENTICATED));
    }

    public UrlRegistry antMatchers(String path){
        UrlRegistry registry = findRegistry(path);
        if(registry.getPath().equals("noPath")) {
            registry.reInitialize(path);
        }
        urlRegistryList.add(registry);
        return registry;
    }

    public HttpSecurity and(){
        return this.httpSecurity;
    }

    class UrlRegistry {

        private String path;

        private final List<AcccessEnum> accessList = new ArrayList<>();
        private final List<MemberRole> roleList = new ArrayList<>();

        public UrlRegistry(String path) {
            this.path = path;
        }

        public UrlRegistry(String path, AcccessEnum access) {
            this.path = path;
            this.accessList.add(access);
        }

        public void addAccessList(AcccessEnum access){
            accessList.add(access);
        }

        public String getPath() {
            return path;
        }

        public void reInitialize(String path) {
            this.path = path;
            accessList.clear();
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
