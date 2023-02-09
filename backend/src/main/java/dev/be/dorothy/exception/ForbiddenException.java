package dev.be.dorothy.exception;

import org.springframework.http.HttpStatus;

public class ForbiddenException extends RuntimeException {
    private final HttpStatus status;

    public ForbiddenException() {
        super("권한이 존재하지 않습니다.");
        this.status = HttpStatus.FORBIDDEN;
    }

    public ForbiddenException(String message) {
        super(message);
        this.status = HttpStatus.FORBIDDEN;
    }

    public HttpStatus getStatus() {
        return status;
    }
}
