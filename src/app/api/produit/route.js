import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const formData = await req.formData();

    const fields = {
      designation: formData.get("designation"),
      quantite: Number(formData.get("quantite")),
      dureeConservation: Number(formData.get("dureeConservation")),
      dateRecolte: new Date(formData.get("dateRecolte")),
      provenance: formData.get("provenance"),
      categorie: formData.get("categorie"),
      type: formData.get("type"),
      userId: parseInt(formData.get("userId")),
      unite: formData.get("unite"),
      uniteTemps: formData.get("uniteTemps"),
    };

    // Vérification des champs requis
    for (const [key, value] of Object.entries(fields)) {
      if (!value || value === "") {
        return NextResponse.json(
          { message: `Le champ "${key}" est requis.` },
          { status: 400 }
        );
      }
    }

    const newProduit = await db.produits.create({
      data: fields,
    });

    return NextResponse.json(
      {
        message: "Produit créé avec succès.",
        produit: newProduit,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("❌ Erreur lors de la création du produit :", error);
    return NextResponse.json(
      { message: "Erreur serveur lors de la création du produit." },
      { status: 500 }
    );
  }
}
