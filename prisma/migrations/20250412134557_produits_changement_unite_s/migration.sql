/*
  Warnings:

  - Changed the type of `unite` on the `produits` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "unites" AS ENUM ('Kg', 'g', 'L', 'caisse', 'unite', 'boite');

-- AlterTable
ALTER TABLE "produits" DROP COLUMN "unite",
ADD COLUMN     "unite" "unites" NOT NULL;
