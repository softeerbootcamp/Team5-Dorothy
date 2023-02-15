package dev.be.dorothy.aspect;

import org.aspectj.lang.ProceedingJoinPoint;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

@Component
public class AopForTransaction {

    //AOP 내의 트랜잭션을 생성하기 위하여 생성, 부모 트랜잭션의 유무와는 별도로 새 트랙잭션 생성
    @Transactional(propagation = Propagation.REQUIRES_NEW)
    public Object proceed(final ProceedingJoinPoint joinPoint) throws Throwable {
        return joinPoint.proceed();
    }
}
