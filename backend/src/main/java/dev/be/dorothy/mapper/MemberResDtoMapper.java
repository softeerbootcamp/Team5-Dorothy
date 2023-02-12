package dev.be.dorothy.mapper;

import dev.be.dorothy.member.Member;
import dev.be.dorothy.member.service.MemberResDto;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

@Mapper(componentModel = "spring")
public interface MemberResDtoMapper {

    MemberResDtoMapper INSTANCE = Mappers.getMapper(MemberResDtoMapper.class);

    @Mapping(target = "createdAt", expression = "java(member.getCreatedAt().toString())")
    @Mapping(target = "updatedAt", expression = "java(member.getCreatedAt().toString())")
    @Mapping(target = "role", expression = "java(member.getRole().name())")
    MemberResDto entityToMemberResDto(Member member);
}
