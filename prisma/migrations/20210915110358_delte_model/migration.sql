/*
  Warnings:

  - You are about to drop the `articles` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `comments` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `users` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `articles` DROP FOREIGN KEY `articles_user_id_fkey`;

-- DropForeignKey
ALTER TABLE `comments` DROP FOREIGN KEY `comments_article_id_fkey`;

-- DropForeignKey
ALTER TABLE `comments` DROP FOREIGN KEY `comments_user_id_fkey`;

-- DropTable
DROP TABLE `articles`;

-- DropTable
DROP TABLE `comments`;

-- DropTable
DROP TABLE `users`;
