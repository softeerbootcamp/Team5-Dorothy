package dev.be.dorothy.auth;

import dev.be.dorothy.auth.authentication.Authentication;

public class ContextHolder {

    private static final ThreadLocal<Authentication> context = new ThreadLocal<>();

    private ContextHolder() {
    }

    public static Authentication getContext() {
        return context.get();
    }

    public static void setContext(Authentication authentication) {
        context.set(authentication);
    }

}
