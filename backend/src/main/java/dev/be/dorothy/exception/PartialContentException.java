package dev.be.dorothy.exception;

import org.springframework.http.HttpStatus;

public class PartialContentException extends  RuntimeException{
    private final HttpStatus status;
    private final Object content;

    public PartialContentException(String message, Object content) {
        super(message);
        this.status = HttpStatus.PARTIAL_CONTENT;
        this.content = content;

    }

    public HttpStatus getStatus() {
        return status;
    }
    public Object getContent(){return content;}
}
