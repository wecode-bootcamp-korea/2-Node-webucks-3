/*
  Warnings:

  - You are about to drop the column `dirnkId` on the `allegeis` table. All the data in the column will be lost.
  - You are about to drop the column `drinkId` on the `images` table. All the data in the column will be lost.
  - You are about to drop the column `categoryId` on the `products` table. All the data in the column will be lost.
  - You are about to alter the column `isNew` on the `products` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `TinyInt`.
  - You are about to drop the `nutrients` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `productId` to the `allegeis` table without a default value. This is not possible if the table is not empty.
  - Added the required column `productId` to the `images` table without a default value. This is not possible if the table is not empty.
  - Added the required column `categories` to the `products` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `allegeis` DROP COLUMN `dirnkId`,
    ADD COLUMN `productId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `images` DROP COLUMN `drinkId`,
    ADD COLUMN `productId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `products` DROP COLUMN `categoryId`,
    ADD COLUMN `categories` INTEGER NOT NULL,
    MODIFY `isNew` BOOLEAN NOT NULL;

-- DropTable
DROP TABLE `nutrients`;

-- CreateTable
CREATE TABLE `nutiritions` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `products` INTEGER NOT NULL,
    `kcal` DECIMAL(65, 30) NOT NULL,
    `fat` DECIMAL(65, 30) NOT NULL,
    `protein` DECIMAL(65, 30) NOT NULL,
    `sodium` DECIMAL(65, 30) NOT NULL,
    `sugar` DECIMAL(65, 30) NOT NULL,
    `caffeine` DECIMAL(65, 30) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `products` ADD CONSTRAINT `products_categories_fkey` FOREIGN KEY (`categories`) REFERENCES `categories`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `nutiritions` ADD CONSTRAINT `nutiritions_products_fkey` FOREIGN KEY (`products`) REFERENCES `products`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `images` ADD CONSTRAINT `images_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `products`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `allegeis` ADD CONSTRAINT `allegeis_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `products`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `allegeis` ADD CONSTRAINT `allegeis_allergyId_fkey` FOREIGN KEY (`allergyId`) REFERENCES `procuct_allegeis`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
