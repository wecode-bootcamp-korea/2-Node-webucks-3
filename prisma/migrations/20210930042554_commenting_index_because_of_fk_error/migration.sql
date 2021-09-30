/*
  Warnings:

  - You are about to drop the column `sugars` on the `nutritions` table. All the data in the column will be lost.
  - Added the required column `sugar` to the `nutritions` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `nutritions` DROP COLUMN `sugars`,
    ADD COLUMN `sugar` INTEGER NOT NULL;
