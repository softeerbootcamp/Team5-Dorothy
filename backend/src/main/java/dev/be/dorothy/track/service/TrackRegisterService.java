package dev.be.dorothy.track.service;

import dev.be.dorothy.member.MemberRole;

public interface TrackRegisterService {
    TrackResDto create(Long memberIdx, String name, MemberRole role);
    TrackResDto join(Long trackIdx, Long memberIdx, String joinCode);
}
