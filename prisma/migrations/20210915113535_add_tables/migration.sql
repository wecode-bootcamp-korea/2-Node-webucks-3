-- CreateTable
CREATE TABLE `categories` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `products` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `categoryId` INTEGER NOT NULL,
    `koreanName` VARCHAR(191) NOT NULL,
    `englishName` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `isNew` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nutrients` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `drinkId` INTEGER NOT NULL,
    `kcal` DECIMAL(65, 30) NOT NULL,
    `fat` DECIMAL(65, 30) NOT NULL,
    `protein` DECIMAL(65, 30) NOT NULL,
    `sodium` DECIMAL(65, 30) NOT NULL,
    `sugar` DECIMAL(65, 30) NOT NULL,
    `caffeine` DECIMAL(65, 30) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `images` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `imageUrl` VARCHAR(191) NOT NULL,
    `drinkId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `procuct_allegeis` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `allegeis` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `dirnkId` INTEGER NOT NULL,
    `allergyId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
