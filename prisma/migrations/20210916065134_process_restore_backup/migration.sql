/*
  Warnings:

  - You are about to alter the column `name` on the `allergies` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(100)`.
  - You are about to alter the column `name` on the `categories` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(100)`.
  - You are about to alter the column `image_url` on the `images` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(100)`.
  - You are about to drop the column `products` on the `nutritions` table. All the data in the column will be lost.
  - You are about to alter the column `english_name` on the `products` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(100)`.
  - You are about to alter the column `korean_name` on the `products` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(100)`.
  - You are about to drop the column `phoneNumber` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `userName` on the `users` table. All the data in the column will be lost.
  - You are about to alter the column `email` on the `users` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(100)`.
  - You are about to alter the column `password` on the `users` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(100)`.
  - You are about to alter the column `address` on the `users` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(100)`.
  - Added the required column `product_id` to the `nutritions` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `nutritions` DROP FOREIGN KEY `nutritions_products_fkey`;

-- AlterTable
ALTER TABLE `allergies` MODIFY `name` VARCHAR(100) NOT NULL;

-- AlterTable
ALTER TABLE `categories` MODIFY `name` VARCHAR(100) NOT NULL;

-- AlterTable
ALTER TABLE `images` MODIFY `image_url` VARCHAR(100) NOT NULL;

-- AlterTable
ALTER TABLE `nutritions` DROP COLUMN `products`,
    ADD COLUMN `product_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `products` MODIFY `english_name` VARCHAR(100) NOT NULL,
    MODIFY `korean_name` VARCHAR(100) NOT NULL;

-- AlterTable
ALTER TABLE `users` DROP COLUMN `phoneNumber`,
    DROP COLUMN `userName`,
    ADD COLUMN `phone_number` VARCHAR(100),
    ADD COLUMN `user_name` VARCHAR(100),
    MODIFY `email` VARCHAR(100) NOT NULL,
    MODIFY `password` VARCHAR(100) NOT NULL,
    MODIFY `address` VARCHAR(100);

-- AddForeignKey
ALTER TABLE `nutritions` ADD CONSTRAINT `nutritions_product_id_fkey` FOREIGN KEY (`product_id`) REFERENCES `products`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
