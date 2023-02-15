package dev.be.dorothy.aspect;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;
import java.util.concurrent.TimeUnit;

/**
 *  annotation for distributed lock using Redisson Client
 */
@Target(ElementType.METHOD)
@Retention(RetentionPolicy.RUNTIME)
public @interface EnableLock {

    String key(); //name of lock
    TimeUnit timeUnit() default TimeUnit.SECONDS;
    long waitTime() default 5L;
    long occupyTime() default 3L;

}
