package dev.be.dorothy.exception;

import dev.be.dorothy.common.CommonResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class HttpExceptionHandler {
    @ExceptionHandler(BadRequestException.class)
    public ResponseEntity<CommonResponse> handle(BadRequestException e) {
        CommonResponse body = new CommonResponse(HttpStatus.BAD_REQUEST, e.getMessage(), null);
        return ResponseEntity
                .badRequest()
                .body(body);
    }

    @ExceptionHandler(InternalServerErrorException.class)
    public ResponseEntity<CommonResponse> handle(InternalServerErrorException e) {
        CommonResponse body = new CommonResponse(HttpStatus.INTERNAL_SERVER_ERROR, e.getMessage(), null);
        return ResponseEntity
                .internalServerError()
                .body(body);
    }
}
