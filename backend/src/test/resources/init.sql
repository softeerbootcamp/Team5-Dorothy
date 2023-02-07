USE `test`;

CREATE TABLE IF NOT EXISTS `member`
(
    `idx`        INT                 NOT NULL AUTO_INCREMENT,
    `member_id`  VARCHAR(100) UNIQUE NOT NULL,
    `password`   VARCHAR(100)        NOT NULL,
    `name`       VARCHAR(100)        NOT NULL,
    `email`      VARCHAR(100)        NOT NULL,
    `image`      TEXT                NOT NULL,
    `created_at` DATETIME            NOT NULL,
    `updated_at` DATETIME            NOT NULL,
    `is_deleted` BIT(1)              NOT NULL,
    `role`       VARCHAR(100)        NOT NULL,
    PRIMARY KEY (`idx`)
);

CREATE TABLE IF NOT EXISTS `track`
(
    `idx`        int          NOT NULL auto_increment primary key,
    `name`       varchar(100) NOT NULL,
    `image`      text         NOT NULL COMMENT 'default image url',
    `created_at` datetime     NOT NULL DEFAULT current_timestamp,
    `updated_at` datetime     NOT NULL DEFAULT current_timestamp on update current_timestamp,
    `is_deleted` BIT(1)       NOT NULL DEFAULT 0 COMMENT '0: not deleted, 1: deleted'
);

CREATE TABLE IF NOT EXISTS `track_member`
(
    `idx`        int          NOT NULL auto_increment primary key,
    `member_idx` int          NOT NULL,
    `track_idx`  int          NOT NULL,
    `role`       varchar(100) NOT NULL COMMENT '0: 관리자, 1: 일반 사용자',
    `joined_at`  datetime     NOT NULL DEFAULT current_timestamp,
    `is_deleted` BIT(1)       NOT NULL DEFAULT 0 COMMENT '0: not deleted, 1: deleted'
);

ALTER TABLE `track_member`
    DROP CONSTRAINT `FK_Member_TO_TrackMember_1`;

ALTER TABLE `track_member`
    DROP CONSTRAINT `FK_Track_TO_TrackMember_1`;

ALTER TABLE `track_member`
    ADD CONSTRAINT `FK_Member_TO_TrackMember_1` FOREIGN KEY (`member_idx`)
        REFERENCES `member` (`idx`);

ALTER TABLE `track_member`
    ADD CONSTRAINT `FK_Track_TO_TrackMember_1` FOREIGN KEY (`track_idx`)
        REFERENCES `track` (`idx`);