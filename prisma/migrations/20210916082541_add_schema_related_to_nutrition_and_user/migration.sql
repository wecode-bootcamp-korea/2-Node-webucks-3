-- CreateTable
CREATE TABLE `nutritions` (
    `id` TINYINT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(16) NOT NULL,
    `product_id` TINYINT NOT NULL,
    `amount` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `users` (
    `id` TINYINT NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(16) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
