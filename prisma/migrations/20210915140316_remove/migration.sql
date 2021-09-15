/*
  Warnings:

  - You are about to drop the column `caffeine` on the `nutiritions` table. All the data in the column will be lost.
  - You are about to drop the column `fat` on the `nutiritions` table. All the data in the column will be lost.
  - You are about to drop the column `kcal` on the `nutiritions` table. All the data in the column will be lost.
  - You are about to drop the column `protein` on the `nutiritions` table. All the data in the column will be lost.
  - You are about to drop the column `sodium` on the `nutiritions` table. All the data in the column will be lost.
  - You are about to drop the column `sugar` on the `nutiritions` table. All the data in the column will be lost.
  - Added the required column `amount` to the `nutiritions` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `nutiritions` DROP COLUMN `caffeine`,
    DROP COLUMN `fat`,
    DROP COLUMN `kcal`,
    DROP COLUMN `protein`,
    DROP COLUMN `sodium`,
    DROP COLUMN `sugar`,
    ADD COLUMN `amount` INTEGER NOT NULL;
