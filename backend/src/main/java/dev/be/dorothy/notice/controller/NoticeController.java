package dev.be.dorothy.notice.controller;

import dev.be.dorothy.common.CommonResponse;
import dev.be.dorothy.exception.ForbiddenException;
import dev.be.dorothy.member.MemberRole;
import dev.be.dorothy.notice.serivce.*;
import dev.be.dorothy.security.context.ContextHolder;
import dev.be.dorothy.security.context.MemberDetail;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/notice")
public class NoticeController {
    private final NoticeReadService noticeReadService;
    private final NoticeCreateService noticeCreateService;

    public NoticeController(NoticeReadService noticeReadService, NoticeCreateService noticeCreateService) {
        this.noticeReadService = noticeReadService;
        this.noticeCreateService = noticeCreateService;
    }

    @GetMapping("{noticeId}")
    public ResponseEntity<CommonResponse> read(
            @PathVariable("noticeId") Long noticeId
    ) {
        CommonResponse response = new CommonResponse(
                HttpStatus.OK,
                "공지사항을 성공적으로 조회하였습니다.",
                noticeReadService.getNotice(noticeId)
        );
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @PostMapping("")
    public ResponseEntity<CommonResponse> create(
            @RequestBody NoticeCreateDto noticeCreateDto
    ) {
        MemberRole role = MemberRole.valueOf(ContextHolder.getContext().getRole().toString());
        if (role != MemberRole.ADMIN) {
            throw new ForbiddenException("권한이 존재하지 않습니다.");
        }

        MemberDetail principal = (MemberDetail) ContextHolder.getContext().getPrincipal();

        NoticeResDto noticeResDto = noticeCreateService.create(principal.getMemberDto().getIdx(), noticeCreateDto);
        CommonResponse response = new CommonResponse(HttpStatus.CREATED, "공지사항을 정상적으로 생성하였습니다.", noticeResDto);
        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

}
