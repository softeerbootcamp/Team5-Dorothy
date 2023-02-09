package dev.be.dorothy.track.service.register;

import dev.be.dorothy.member.MemberRole;
import dev.be.dorothy.track.service.TrackResDto;

public interface TrackRegister {
    TrackResDto create(Long memberIdx, String name, MemberRole role);
}
