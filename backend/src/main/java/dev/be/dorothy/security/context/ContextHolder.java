package dev.be.dorothy.security.context;

import dev.be.dorothy.security.authentication.Authentication;

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

    public static void clearContext() {
        context.remove();
    }
}
