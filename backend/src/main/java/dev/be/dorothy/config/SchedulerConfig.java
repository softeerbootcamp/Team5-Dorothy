package dev.be.dorothy.config;

import dev.be.dorothy.attendance.repository.AttendanceRepository;
import dev.be.dorothy.common.scheduler.AttendanceScheduler;
import dev.be.dorothy.track.repository.TrackRepository;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.SchedulingConfigurer;
import org.springframework.scheduling.concurrent.ThreadPoolTaskScheduler;
import org.springframework.scheduling.config.ScheduledTaskRegistrar;

@Configuration
@EnableScheduling
public class SchedulerConfig implements SchedulingConfigurer {
    private static final int POOL_SIZE = 10;

    private final TrackRepository trackRepository;
    private final AttendanceRepository attendanceRepository;

    public SchedulerConfig(TrackRepository trackRepository, AttendanceRepository attendanceRepository) {
        this.trackRepository = trackRepository;
        this.attendanceRepository = attendanceRepository;
    }

    @Override
    public void configureTasks(ScheduledTaskRegistrar taskRegistrar) {
        ThreadPoolTaskScheduler threadPoolTaskScheduler = new ThreadPoolTaskScheduler();

        threadPoolTaskScheduler.setPoolSize(POOL_SIZE);
        threadPoolTaskScheduler.setThreadNamePrefix("my-scheduled-task-pool-");
        threadPoolTaskScheduler.initialize();

        taskRegistrar.setTaskScheduler(threadPoolTaskScheduler);
    }

    @Bean
    public AttendanceScheduler getAttendanceScheduler() {
        return new AttendanceScheduler(trackRepository, attendanceRepository);
    }
}
