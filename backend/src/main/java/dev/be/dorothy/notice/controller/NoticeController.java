package dev.be.dorothy.notice.controller;

import dev.be.dorothy.common.CommonResponse;
import dev.be.dorothy.exception.ForbiddenException;
import dev.be.dorothy.member.MemberRole;
import dev.be.dorothy.notice.serivce.NoticeCreateDto;
import dev.be.dorothy.notice.serivce.NoticeCreateService;
import dev.be.dorothy.notice.serivce.NoticeResDto;
import dev.be.dorothy.security.context.ContextHolder;
import dev.be.dorothy.security.context.MemberDetail;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/notice")
public class NoticeController {
    private final NoticeCreateService noticeCreateService;

    public NoticeController(NoticeCreateService noticeCreateService) {
        this.noticeCreateService = noticeCreateService;
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
