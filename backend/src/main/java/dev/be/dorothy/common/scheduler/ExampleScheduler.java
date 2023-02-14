package dev.be.dorothy.common.scheduler;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.scheduling.annotation.Scheduled;

import java.time.LocalDateTime;

public class ExampleScheduler {
    private final static Logger logger = LoggerFactory.getLogger(ExampleScheduler.class);

    @Scheduled(cron = "0/2 * * * * *")
    public void example() {
        logger.info("current local date time : {}", LocalDateTime.now());
    }
}
