package dev.be.dorothy.mapper;

import dev.be.dorothy.reservation.Place;
import dev.be.dorothy.reservation.service.PlaceResDto;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

@DisplayName("PlaceResDtoMapper Test")
public class PlaceResDtoMapperTest {

    @Test
    @DisplayName("entity-dto 간 변환 테스트")
    void entityToDtoTest() {
        Place place = new Place(
                "dorothy",
                "");
        PlaceResDto dto = PlaceResDtoMapper.INSTANCE.entityToPlaceResDto(place);
        Assertions.assertThat(dto.getName()).isEqualTo("dorothy");
    }
}
