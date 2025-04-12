import Link from "next/link";
import { PlusCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ProductsDataTable } from "@/components/section/ProductsDataTable";

export const metadata = {
  title: "Gestion des Achats Agricoles",
  description: "Système de gestion des achats de produits agricoles",
};

export default function ProduitsPage() {
  return (
    <div className="container mx-auto py-10">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Achats de Produits Agricoles
          </h1>
          <p className="text-muted-foreground">
            Gérez vos achats de produits agricoles
          </p>
        </div>
        <Link href="/produits/ajouter">
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" />
            Ajouter un achat
          </Button>
        </Link>
      </div>
      <ProductsDataTable />
    </div>
  );
}
