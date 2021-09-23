/*
  Warnings:

  - You are about to drop the column `amount` on the `nutritions` table. All the data in the column will be lost.
  - Added the required column `caffeine` to the `nutritions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fat` to the `nutritions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `kcal` to the `nutritions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `protein` to the `nutritions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sodium` to the `nutritions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sugars` to the `nutritions` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `nutritions` DROP COLUMN `amount`,
    ADD COLUMN `caffeine` INTEGER NOT NULL,
    ADD COLUMN `fat` INTEGER NOT NULL,
    ADD COLUMN `kcal` INTEGER NOT NULL,
    ADD COLUMN `protein` INTEGER NOT NULL,
    ADD COLUMN `sodium` INTEGER NOT NULL,
    ADD COLUMN `sugars` INTEGER NOT NULL;
