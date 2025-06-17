/*
  Warnings:

  - Added the required column `tags` to the `Job` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tags` to the `Training` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Job` ADD COLUMN `tags` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `Training` ADD COLUMN `tags` VARCHAR(191) NOT NULL;
