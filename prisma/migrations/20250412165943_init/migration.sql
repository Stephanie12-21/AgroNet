-- CreateEnum
CREATE TYPE "categories" AS ENUM ('Vivrieres', 'Fourrageres', 'Laitiers', 'Ovoproduits', 'Carnes', 'Apicoles', 'Aquacoles', 'Industrielles_rente');

-- CreateEnum
CREATE TYPE "unite" AS ENUM ('Kg', 'g', 'L', 'caisse', 'unite', 'boite');

-- CreateEnum
CREATE TYPE "uniteTemps" AS ENUM ('an', 'mois', 'semaine', 'jour');

-- CreateTable
CREATE TABLE "newsletter" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "unsubscribeToken" TEXT,

    CONSTRAINT "newsletter_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "nom" TEXT NOT NULL,
    "prenom" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "hashPassword" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "stripeAccountId" TEXT,
    "stripeAccountCompleted" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "profileImage" (
    "id" SERIAL NOT NULL,
    "path" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "profileImage_pkey" PRIMARY KEY ("id")
);

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
    "unite" "unite" NOT NULL,
    "uniteTemps" "uniteTemps" NOT NULL,
    "dateRecolte" TIMESTAMP(3) NOT NULL,
    "dureeConservation" INTEGER NOT NULL,
    "categorie" "categories" NOT NULL,
    "type" TEXT NOT NULL,
    "userId" INTEGER,

    CONSTRAINT "produits_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "newsletter_email_key" ON "newsletter"("email");

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "user_phone_key" ON "user"("phone");

-- AddForeignKey
ALTER TABLE "profileImage" ADD CONSTRAINT "profileImage_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "temoignages" ADD CONSTRAINT "temoignages_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "produits" ADD CONSTRAINT "produits_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;
