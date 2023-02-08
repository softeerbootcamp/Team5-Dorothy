package dev.be.dorothy.auth.authentication;

public interface Authentication {

    Object getPrincipal();

    Object getCredential();

    Object getRole();

    boolean isAuthenticated();

}
