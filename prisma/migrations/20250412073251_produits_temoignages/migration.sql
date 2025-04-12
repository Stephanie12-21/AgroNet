-- CreateEnum
CREATE TYPE "categories" AS ENUM ('Vivrières', 'Fourragères', 'Laitiers', 'Ovoproduits', 'Carnés', 'Apicoles', 'Aquacoles', 'Industrielles_rente', 'Péréennes');

-- CreateTable
CREATE TABLE "temoignages" (
    "id" SERIAL NOT NULL,
    "temoignage" TEXT NOT NULL,
    "noteAgroNet" INTEGER NOT NULL,
    "ville" TEXT,
    "pays" TEXT,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "temoignages_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "produits" (
    "id" SERIAL NOT NULL,
    "designation" TEXT NOT NULL,
    "provenance" TEXT NOT NULL,
    "quantite" INTEGER NOT NULL,
    "dateRecolte" TIMESTAMP(3) NOT NULL,
    "dureeConservation" INTEGER NOT NULL,
    "categorie" "categories" NOT NULL,
    "type" TEXT NOT NULL,
    "userId" INTEGER,

    CONSTRAINT "produits_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "temoignages" ADD CONSTRAINT "temoignages_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "produits" ADD CONSTRAINT "produits_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;
