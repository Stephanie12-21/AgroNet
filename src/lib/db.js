import { PrismaClient } from "../../generated/prisma";

// Déclare globalThis.prisma si non défini
const globalForPrisma = globalThis;

// Utilise l'instance existante ou crée-en une nouvelle
const prisma = globalForPrisma.prisma ?? new PrismaClient();

// Évite de créer plusieurs instances en dev (hot reload)
if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}

export const db = prisma;
