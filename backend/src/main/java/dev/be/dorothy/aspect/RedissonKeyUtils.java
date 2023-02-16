package dev.be.dorothy.aspect;

import org.springframework.expression.ExpressionParser;
import org.springframework.expression.spel.standard.SpelExpressionParser;
import org.springframework.expression.spel.support.StandardEvaluationContext;

import java.time.LocalTime;

import static dev.be.dorothy.reservation.service.PlaceReservationServiceImpl.RESERVATION_KEY;

public class RedissonKeyUtils {

    //SpelExpression으로 전달된 key값을 파싱
    public static Object getDynamicValue(String[] parameterNames, Object[] args, String key) {
        ExpressionParser parser = new SpelExpressionParser();
        StandardEvaluationContext context = new StandardEvaluationContext();

        for (int i = 0; i < parameterNames.length; i++) {
            context.setVariable(parameterNames[i], args[i]);
        }

        return parser.parseExpression(key).getValue(context, Object.class);
    }

    public static String keyBuilder(Long placeIdx, LocalTime startTime){
        StringBuilder keyBuilder = new StringBuilder();
        keyBuilder.append(RESERVATION_KEY)
                .append(placeIdx)
                .append("-")
                .append(startTime);
        return keyBuilder.toString();
    }
}
