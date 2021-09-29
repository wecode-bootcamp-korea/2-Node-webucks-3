/*
  Warnings:

  - You are about to drop the `nutiritions` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `nutiritions` DROP FOREIGN KEY `nutiritions_products_fkey`;

-- DropTable
DROP TABLE `nutiritions`;
