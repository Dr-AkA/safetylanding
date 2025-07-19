/*
  Warnings:

  - A unique constraint covering the columns `[hashEmail]` on the table `Admin` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Admin_hashEmail_key` ON `Admin`(`hashEmail`);
