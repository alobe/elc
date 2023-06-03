-- CreateTable
CREATE TABLE `user` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(50) NOT NULL,
    `nick_name` VARCHAR(50) NOT NULL,
    `email` VARCHAR(50) NULL,
    `phone` CHAR(11) NULL,
    `avatar` VARCHAR(200) NULL,
    `created_at` TIMESTAMP NOT NULL,

    UNIQUE INDEX `email`(`email`),
    UNIQUE INDEX `phone`(`phone`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

