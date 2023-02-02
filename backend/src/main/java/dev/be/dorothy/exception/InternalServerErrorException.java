package dev.be.dorothy.exception;

import org.springframework.http.HttpStatus;

public class InternalServerErrorException extends RuntimeException {
    private final HttpStatus status;

    public InternalServerErrorException() {
        super("서버에서 알 수 없는 문제가 발생하였습니다.");
        this.status = HttpStatus.INTERNAL_SERVER_ERROR;
    }

    public InternalServerErrorException(String message) {
        super(message);
        this.status = HttpStatus.INTERNAL_SERVER_ERROR;
    }

    public HttpStatus getStatus() {
        return status;
    }
}
