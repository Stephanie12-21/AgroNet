/*
  Warnings:

  - Added the required column `unite` to the `produits` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "produits" ADD COLUMN     "unite" TEXT NOT NULL;
