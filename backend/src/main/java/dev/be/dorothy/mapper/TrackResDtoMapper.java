package dev.be.dorothy.mapper;

import dev.be.dorothy.track.Track;
import dev.be.dorothy.track.service.TrackResDto;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

@Mapper(componentModel = "spring")
public interface TrackResDtoMapper {

    TrackResDtoMapper INSTANCE = Mappers.getMapper(TrackResDtoMapper.class);

    TrackResDto entityToTrackResDto(Track track);

}
