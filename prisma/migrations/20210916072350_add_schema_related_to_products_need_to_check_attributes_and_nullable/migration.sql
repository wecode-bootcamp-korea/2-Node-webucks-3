/*
  Warnings:

  - The primary key for the `categories` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `categories` table. The data in that column could be lost. The data in that column will be cast from `Int` to `TinyInt`.
  - You are about to alter the column `name` on the `categories` table. The data in that column could be lost. The data in that column will be cast from `VarChar(100)` to `VarChar(16)`.
  - You are about to drop the `Product` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE `categories` DROP PRIMARY KEY,
    MODIFY `id` TINYINT NOT NULL AUTO_INCREMENT,
    MODIFY `name` VARCHAR(16) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- DropTable
DROP TABLE `Product`;

-- CreateTable
CREATE TABLE `products` (
    `id` TINYINT NOT NULL AUTO_INCREMENT,
    `korean_name` VARCHAR(50) NOT NULL,
    `english_name` VARCHAR(50) NOT NULL,
    `category_id` TINYINT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `images` (
    `id` TINYINT NOT NULL AUTO_INCREMENT,
    `imageUrl` VARCHAR(100) NOT NULL,
    `product_id` TINYINT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `allergies` (
    `id` TINYINT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(16) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `product_allergies` (
    `id` TINYINT NOT NULL AUTO_INCREMENT,
    `product_id` TINYINT NOT NULL,
    `allergy_id` TINYINT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
