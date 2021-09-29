/*
  Warnings:

  - You are about to drop the `nutiritions` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `nutiritions` DROP FOREIGN KEY `nutiritions_products_fkey`;

-- DropTable
DROP TABLE `nutiritions`;

-- CreateTable
CREATE TABLE `nutritions` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `products` INTEGER NOT NULL,
    `amount` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `nutritions` ADD CONSTRAINT `nutritions_products_fkey` FOREIGN KEY (`products`) REFERENCES `products`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
