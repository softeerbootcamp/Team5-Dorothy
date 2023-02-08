package dev.be.dorothy.exception;

import dev.be.dorothy.common.CommonResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.Objects;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertAll;

@DisplayName("HttpExceptionHandler Test")
public class HttpExceptionHandlerTest {

    HttpExceptionHandler handler = new HttpExceptionHandler();

    @Test
    @DisplayName("BadRequest handle Test")
    void badRequest() {
        // given
        BadRequestException exception = new BadRequestException("이것은 배드 리퀘스트야");

        // when
        ResponseEntity<CommonResponse> response = handler.handle(exception);

        // then
        assertAll(
                () -> assertThat(response.getStatusCode()).isEqualTo(HttpStatus.BAD_REQUEST),
                () -> assertThat(Objects.requireNonNull(response.getBody()).getMessage()).isEqualTo("이것은 배드 리퀘스트야")
        );
    }

    @Test
    @DisplayName("InternalServerError handle Test")
    void internalServerError() {
        // given
        InternalServerErrorException exception = new InternalServerErrorException("서버에서 알 수 없는 에러가 발생했단말이야,,");

        // when
        ResponseEntity<CommonResponse> response = handler.handle(exception);

        // then
        assertAll(
                () -> assertThat(response.getStatusCode()).isEqualTo(HttpStatus.INTERNAL_SERVER_ERROR),
                () -> assertThat(Objects.requireNonNull(response.getBody()).getMessage()).isEqualTo("서버에서 알 수 없는 에러가 발생했단말이야,,")
        );
    }
}
