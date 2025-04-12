/*
  Warnings:

  - You are about to drop the column `unite` on the `produits` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "produits" DROP COLUMN "unite";

-- DropEnum
DROP TYPE "unites";
