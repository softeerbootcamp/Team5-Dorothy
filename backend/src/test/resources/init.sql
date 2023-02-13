USE `test`;

drop table if exists `attendance`;
drop table if exists `track_member`;
drop table if exists `reservation`;
drop table if exists `place`;
drop table if exists `member`;
drop table if exists `track`;
drop table if exists `notice`;

CREATE TABLE IF NOT EXISTS `member`
(
    `idx`        int          NOT NULL auto_increment primary key,
    `member_id`  varchar(100) NOT NULL,
    `password`   varchar(100) NOT NULL,
    `name`       varchar(100) NOT NULL,
    `email`      varchar(100) NOT NULL,
    `image`      text         NOT NULL COMMENT 'default image url',
    `created_at` datetime     NOT NULL DEFAULT current_timestamp,
    `updated_at` datetime     NOT NULL DEFAULT current_timestamp on update current_timestamp,
    `is_deleted` BIT(1)       NOT NULL DEFAULT 0 COMMENT '0: not deleted, 1: deleted',
    `role`       varchar(100) NOT NULL COMMENT 'SUPER_ADMIN, ADMIN, MEMBER',
    `salt`       varchar(50)  NOT NULL
);

CREATE TABLE IF NOT EXISTS `track`
(
    `idx`             int          NOT NULL auto_increment primary key,
    `name`            varchar(100) NOT NULL,
    `image`           text         NOT NULL COMMENT 'default image url',
    `attendance_time` time         NOT NULL,
    `x`               double       NOT NULL,
    `y`               double       NOT NULL,
    `created_at`      datetime     NOT NULL DEFAULT current_timestamp,
    `updated_at`      datetime     NOT NULL DEFAULT current_timestamp on update current_timestamp,
    `is_deleted`      BIT(1)       NOT NULL DEFAULT 0 COMMENT '0: not deleted, 1: deleted'
);

CREATE TABLE IF NOT EXISTS `track_member`
(
    `idx`        int          NOT NULL auto_increment primary key,
    `member_idx` int          NOT NULL,
    `track_idx`  int          NOT NULL,
    `role`       varchar(100) NOT NULL COMMENT 'ADMIN, MEMBER',
    `joined_at`  datetime     NOT NULL DEFAULT current_timestamp,
    `is_deleted` BIT(1)       NOT NULL DEFAULT 0 COMMENT '0: not deleted, 1: deleted'
);

CREATE TABLE IF NOT EXISTS `place`
(
    `idx`        int          NOT NULL auto_increment primary key,
    `name`       varchar(100) NOT NULL,
    `image`      text         NOT NULL,
    `created_at` datetime     NOT NULL DEFAULT current_timestamp,
    `updated_at` datetime     NOT NULL DEFAULT current_timestamp on update current_timestamp,
    `is_deleted` BIT(1)       NOT NULL DEFAULT 0 COMMENT '0: not deleted, 1: deleted'
);

CREATE TABLE IF NOT EXISTS `reservation`
(
    `idx`        int      NOT NULL auto_increment primary key,
    `member_idx` int      NOT NULL,
    `place_idx`  int      NOT NULL,
    `date`       datetime NOT NULL DEFAULT current_timestamp,
    `start_time` time     NOT NULL,
    `end_time`   time     NOT NULL,
    `is_deleted` BIT(1)   NOT NULL DEFAULT 0 COMMENT '0: not deleted, 1: deleted'
);

CREATE TABLE IF NOT EXISTS `attendance`
(
    `idx`              int         NOT NULL auto_increment primary key,
    `track_member_idx` int         NOT NULL,
    `date`             date    NOT NULL,
    `time`             time    NOT NULL,
    `type`             varchar(50) NOT NULL COMMENT 'PRESENT, TARDY, ABSENT'
);

CREATE TABLE IF NOT EXISTS `notice`
(
    `idx`        int      NOT NULL auto_increment primary key,
    `title`      TEXT     NOT NULL,
    `content`    TEXT     NOT NULL,
    `created_at` datetime NOT NULL DEFAULT current_timestamp,
    `updated_at` datetime NULL     DEFAULT current_timestamp on update current_timestamp,
    `is_deleted` BIT(1)   NULL     DEFAULT 0 COMMENT '0: not deleted, 1: deleted'
);

ALTER TABLE `track_member`
    ADD CONSTRAINT `FK_Member_TO_track_member_1` FOREIGN KEY (`member_idx`)
        REFERENCES `member` (`idx`);

ALTER TABLE `track_member`
    ADD CONSTRAINT `FK_track_TO_track_member_1` FOREIGN KEY (`track_idx`)
        REFERENCES `track` (`idx`);

ALTER TABLE `reservation`
    ADD CONSTRAINT `FK_Member_TO_reservation_1` FOREIGN KEY (`member_idx`)
        REFERENCES `member` (`idx`);

ALTER TABLE `reservation`
    ADD CONSTRAINT `FK_place_TO_reservation_1` FOREIGN KEY (`place_idx`)
        REFERENCES `place` (`idx`);

ALTER TABLE `attendance`
    ADD CONSTRAINT `FK_track_member_TO_attendance_1` FOREIGN KEY (`track_member_idx`)
        REFERENCES `track_member` (`idx`);
