package dev.be.dorothy.attendance.service;

import dev.be.dorothy.attendance.AttendanceType;
import dev.be.dorothy.exception.BadRequestException;
import dev.be.dorothy.track.Track;
import dev.be.dorothy.track.service.TrackRetrieveService;
import org.springframework.data.geo.Point;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalTime;
import java.time.temporal.ChronoUnit;
import java.util.Objects;

@Service
public class AttendanceManagerServiceImpl implements AttendanceManagerService {
    private final TrackRetrieveService trackRetrieveService;

    public AttendanceManagerServiceImpl(TrackRetrieveService trackRetrieveService) {
        this.trackRetrieveService = trackRetrieveService;
    }

    @Override
    public void checkAttendanceLocation(Long trackIdx, Double x, Double y) {
        Point trackPoint = getTrackPoint(trackIdx);
        Point memberPoint = new Point(x, y);

        Double distance = calculateDistance(trackPoint, memberPoint);

        if (distance > 30) {
            throw new BadRequestException("잘못된 요청입니다.");
        }
    }

    private Point getTrackPoint(Long trackIdx) {
        Track track = trackRetrieveService.getTrack(trackIdx);

        return new Point(track.getLocation());
    }

    private Double calculateDistance(Point trackPoint, Point memberPoint) {
        int EARTH_RADIUS = 6371;
        double dX = Math.toRadians(trackPoint.getX() - memberPoint.getX());
        double dY = Math.toRadians(trackPoint.getY() - memberPoint.getY());

        double a = Math.sin(dX / 2) * Math.sin(dX / 2) +
                Math.cos(Math.toRadians(trackPoint.getX())) * Math.cos(Math.toRadians(memberPoint.getX())) *
                        Math.sin(dY / 2) * Math.sin(dY / 2);
        double b = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

        return EARTH_RADIUS * b * 1000; // 단위: m
    }

    @Override
    public AttendanceType checkAttendanceTime(Long trackIdx, LocalDate date, LocalTime time) {
        Track track = trackRetrieveService.getTrack(trackIdx);
        LocalTime attendanceTime = track.getAttendanceTime();
        long duration = ChronoUnit.SECONDS.between(attendanceTime, time);

        if(!Objects.equals(date, LocalDate.now())) {
            throw new BadRequestException("잘못된 요청입니다.");
        }

        if (duration < -1800) {
            throw new BadRequestException("잘못된 요청입니다."); // 너무 이른 출석 요청
        } else if (duration >= 1800) {
            return AttendanceType.ABSENT; // 결석
        } else if (duration >= 600) {
            return AttendanceType.TARDY; // 지각
        }

        return AttendanceType.PRESENT; // 출석
    }
}
