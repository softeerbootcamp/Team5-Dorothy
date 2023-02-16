package dev.be.dorothy.mapper;

import dev.be.dorothy.attendance.Attendance;
import dev.be.dorothy.attendance.service.AttendanceResDto;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

@Mapper(componentModel = "spring")
public interface AttendanceResDtoMapper {
    AttendanceResDtoMapper INSTANCE = Mappers.getMapper(AttendanceResDtoMapper.class);

    AttendanceResDto entityToAttendanceResDto(Attendance attendance);
}
