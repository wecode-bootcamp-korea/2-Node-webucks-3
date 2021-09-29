/*
  Warnings:

  - You are about to drop the column `imageUrl` on the `images` table. All the data in the column will be lost.
  - You are about to drop the column `productId` on the `images` table. All the data in the column will be lost.
  - You are about to drop the column `categories` on the `products` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `products` table. All the data in the column will be lost.
  - You are about to drop the column `englishName` on the `products` table. All the data in the column will be lost.
  - You are about to drop the column `isNew` on the `products` table. All the data in the column will be lost.
  - You are about to drop the column `koreanName` on the `products` table. All the data in the column will be lost.
  - You are about to drop the `products_allegies` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `image_url` to the `images` table without a default value. This is not possible if the table is not empty.
  - Added the required column `product_id` to the `images` table without a default value. This is not possible if the table is not empty.
  - Added the required column `category_id` to the `products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `english_name` to the `products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `korean_name` to the `products` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `images` DROP FOREIGN KEY `images_productId_fkey`;

-- DropForeignKey
ALTER TABLE `products` DROP FOREIGN KEY `products_categories_fkey`;

-- DropForeignKey
ALTER TABLE `products_allegies` DROP FOREIGN KEY `products_allegies_allergyId_fkey`;

-- DropForeignKey
ALTER TABLE `products_allegies` DROP FOREIGN KEY `products_allegies_productId_fkey`;

-- AlterTable
ALTER TABLE `allergies` MODIFY `name` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `images` DROP COLUMN `imageUrl`,
    DROP COLUMN `productId`,
    ADD COLUMN `image_url` VARCHAR(191) NOT NULL,
    ADD COLUMN `product_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `products` DROP COLUMN `categories`,
    DROP COLUMN `description`,
    DROP COLUMN `englishName`,
    DROP COLUMN `isNew`,
    DROP COLUMN `koreanName`,
    ADD COLUMN `category_id` INTEGER NOT NULL,
    ADD COLUMN `english_name` VARCHAR(191) NOT NULL,
    ADD COLUMN `korean_name` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `products_allegies`;

-- CreateTable
CREATE TABLE `products_allergies` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `product_id` INTEGER NOT NULL,
    `allergy_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `products` ADD CONSTRAINT `products_category_id_fkey` FOREIGN KEY (`category_id`) REFERENCES `categories`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `images` ADD CONSTRAINT `images_product_id_fkey` FOREIGN KEY (`product_id`) REFERENCES `products`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `products_allergies` ADD CONSTRAINT `products_allergies_product_id_fkey` FOREIGN KEY (`product_id`) REFERENCES `products`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `products_allergies` ADD CONSTRAINT `products_allergies_allergy_id_fkey` FOREIGN KEY (`allergy_id`) REFERENCES `allergies`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
