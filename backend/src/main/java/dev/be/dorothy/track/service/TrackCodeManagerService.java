package dev.be.dorothy.track.service;

public interface TrackCodeManagerService {
    String store(String trackIdx); // 랜덤으로 생성된 초대 코드를 redis 에 저장한 후 반환
    String read(String trackIdx); // trackIdx를 키 값으로 가진 초대 코드 조회
}
