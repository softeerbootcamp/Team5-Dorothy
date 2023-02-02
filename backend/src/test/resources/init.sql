CREATE TABLE IF NOT EXISTS `test`.`member` (
    `idx` INT NOT NULL AUTO_INCREMENT,
    `member_id` VARCHAR(100) UNIQUE NOT NULL,
    `password` VARCHAR(100) NOT NULL,
    `name` VARCHAR(100) NOT NULL,
    `email` VARCHAR(100) NOT NULL,
    `image` TEXT NOT NULL,
    `created_at` DATETIME NOT NULL,
    `updated_at` DATETIME NOT NULL,
    `is_deleted` BIT(1) NOT NULL,
    `role` VARCHAR(100) NOT NULL,
PRIMARY KEY (`idx`));
