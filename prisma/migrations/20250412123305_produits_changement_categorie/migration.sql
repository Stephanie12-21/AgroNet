/*
  Warnings:

  - The values [Pereennes] on the enum `categories` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "categories_new" AS ENUM ('Vivrieres', 'Fourrageres', 'Laitiers', 'Ovoproduits', 'Carnes', 'Apicoles', 'Aquacoles', 'Industrielles_rente');
ALTER TABLE "produits" ALTER COLUMN "categorie" TYPE "categories_new" USING ("categorie"::text::"categories_new");
ALTER TYPE "categories" RENAME TO "categories_old";
ALTER TYPE "categories_new" RENAME TO "categories";
DROP TYPE "categories_old";
COMMIT;
