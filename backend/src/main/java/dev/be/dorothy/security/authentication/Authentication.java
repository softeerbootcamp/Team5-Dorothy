package dev.be.dorothy.security.authentication;

public interface Authentication {

    Object getPrincipal();

    Object getCredential();

    Object getRole();

    boolean isAuthenticated();

}
