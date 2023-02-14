package dev.be.dorothy.mapper;

import dev.be.dorothy.reservation.Place;
import dev.be.dorothy.reservation.service.PlaceResDto;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

@Mapper(componentModel = "spring")
public interface PlaceResDtoMapper {

    PlaceResDtoMapper INSTANCE = Mappers.getMapper(PlaceResDtoMapper.class);

    PlaceResDto entityToPlaceResDto(Place place);
}
