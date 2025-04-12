import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function POST(request) {
  try {
    const body = await request.json();

    const requiredFields = [
      "designation",
      "quantite",
      "dureeConservation",
      "dateRecolte",
      "provenance",
      "categorie",
      "type",
      "userId",
      "unite",
      "uniteTemps",
    ];

    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json(
          { message: `Le champ "${field}" est requis.` },
          { status: 400 }
        );
      }
    }

    const newProduit = await db.produits.create({
      data: {
        designation: body.designation,
        quantite: body.quantite,
        dureeConservation: body.dureeConservation,
        unite: body.unite,
        uniteTemps: body.uniteTemps,
        dateRecolte: new Date(body.dateRecolte),
        provenance: body.provenance,
        categorie: body.categorie,
        type: body.type,
        userId: body.userId,
      },
    });

    return NextResponse.json(
      {
        message: "Annonce créée avec succès.",
        produit: newProduit,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erreur lors de la création du produit :", error);
    return NextResponse.json(
      {
        message: "Une erreur est survenue lors de la création du produit.",
      },
      { status: 500 }
    );
  }
}
