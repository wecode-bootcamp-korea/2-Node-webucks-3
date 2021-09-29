-- CreateTable
CREATE TABLE `nutiritions` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `products` INTEGER NOT NULL,
    `amount` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `nutiritions` ADD CONSTRAINT `nutiritions_products_fkey` FOREIGN KEY (`products`) REFERENCES `products`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
