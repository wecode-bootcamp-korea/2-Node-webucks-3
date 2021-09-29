/*
  Warnings:

  - You are about to drop the `allegeis` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `procuct_allegeis` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `allegeis` DROP FOREIGN KEY `allegeis_allergyId_fkey`;

-- DropForeignKey
ALTER TABLE `allegeis` DROP FOREIGN KEY `allegeis_productId_fkey`;

-- DropTable
DROP TABLE `allegeis`;

-- DropTable
DROP TABLE `procuct_allegeis`;

-- CreateTable
CREATE TABLE `allergies` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `products_allegies` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `productId` INTEGER NOT NULL,
    `allergyId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `products_allegies` ADD CONSTRAINT `products_allegies_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `products`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `products_allegies` ADD CONSTRAINT `products_allegies_allergyId_fkey` FOREIGN KEY (`allergyId`) REFERENCES `allergies`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
