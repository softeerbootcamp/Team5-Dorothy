package dev.be.dorothy.aspect;

import lombok.extern.slf4j.Slf4j;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.reflect.MethodSignature;
import org.redisson.api.RLock;
import org.redisson.api.RedissonClient;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.lang.reflect.Method;

@Aspect
@Component
@Slf4j
public class DistributedLockAop {

    private final RedissonClient redissonClient;
    private final AopForTransaction aopForTransaction;
    @Value("${spring.redis.prefix}")
    private String prefix;

    public DistributedLockAop(RedissonClient redissonClient, AopForTransaction aopForTransaction) {
        this.redissonClient = redissonClient;
        this.aopForTransaction = aopForTransaction;
    }

    @Around("@annotation(dev.be.dorothy.aspect.EnableLock)")
    public Object lock(final ProceedingJoinPoint joinPoint) throws InterruptedException {
        //Aspect의 대상 메소드와 애노테이션에 대한 정보를 획득
        MethodSignature signature = (MethodSignature) joinPoint.getSignature();
        Method method = signature.getMethod();
        EnableLock distributeLock = method.getAnnotation(EnableLock.class);

        String key = prefix + RedissonKeyUtils.getDynamicValue(signature.getParameterNames(), joinPoint.getArgs(), distributeLock.key());
        RLock rLock = redissonClient.getLock(key);

        try {
            //lock 획득 시도
            boolean available = rLock.tryLock(distributeLock.waitTime(), distributeLock.occupyTime(), distributeLock.timeUnit());
            if (!available) {
                return false;
            }
            log.info("get lock success {}" , key);
            return aopForTransaction.proceed(joinPoint);  //메소드 호출
        } catch (Throwable e) {
            Thread.currentThread().interrupt();
            throw new InterruptedException();
        } finally {
            rLock.unlock();  //lock 반환
        }
    }
}
