/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `password` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `users` ADD COLUMN `address` VARCHAR(100),
    ADD COLUMN `password` VARCHAR(50) NOT NULL,
    ADD COLUMN `phone_number` VARCHAR(16),
    ADD COLUMN `policy_agreed` BOOLEAN NOT NULL DEFAULT true,
    ADD COLUMN `username` VARCHAR(16),
    MODIFY `email` VARCHAR(50) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `users_email_key` ON `users`(`email`);

-- AddForeignKey
ALTER TABLE `products` ADD CONSTRAINT `products_category_id_fkey` FOREIGN KEY (`category_id`) REFERENCES `categories`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
