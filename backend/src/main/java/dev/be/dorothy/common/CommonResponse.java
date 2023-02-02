package dev.be.dorothy.common;

import org.springframework.http.HttpStatus;

public class CommonResponse {
    private final HttpStatus code;
    private final String message;
    private final Object data;

    public CommonResponse(HttpStatus code, String message, Object data) {
        this.code = code;
        this.message = message;
        this.data = data;
    }

    public HttpStatus getCode() {
        return code;
    }

    public String getMessage() {
        return message;
    }

    public Object getData() {
        return data;
    }
}
