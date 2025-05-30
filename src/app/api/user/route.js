import { db } from "@/lib/db";
import stripe from "@/lib/stripe";

import { hash } from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    console.log("Début du traitement des données du formulaire");
    const body = await req.formData();

    const nom = body.get("nom");
    const prenom = body.get("prenom");
    const email = body.get("email");
    const phone = body.get("phone");
    const password = body.get("password");
    const imageFile = body.get("imageFile");
    const role = body.get("role");

    console.log("Données reçues :", {
      nom,
      prenom,
      email,
      phone,
      role,
      imageFile,
    });

    const existingUserByEmail = await db.user.findUnique({
      where: { email },
    });
    if (existingUserByEmail) {
      console.log("Email déjà utilisé");
      return NextResponse.json(
        { message: "Un utilisateur avec cet email existe déjà." },
        { status: 409 }
      );
    }

    const existingUserByPhone = await db.user.findUnique({
      where: { phone },
    });
    if (existingUserByPhone) {
      console.log("Numéro de téléphone déjà utilisé");
      return NextResponse.json(
        { message: "Un utilisateur avec ce numéro de téléphone existe déjà." },
        { status: 409 }
      );
    }

    const hashedPassword = await hash(password, 10);

    let imageUrl = null;

    if (imageFile) {
      console.log("Début de l'upload de l'image");
      const formData = new FormData();
      formData.append("file", imageFile);
      formData.append("upload_preset", "ko4bjtic");

      const uploadResponse = await fetch(
        "https://api.cloudinary.com/v1_1/dtryutlkz/image/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      const uploadResult = await uploadResponse.json();
      console.log("Résultat de l'upload :", uploadResult);

      if (uploadResponse.ok && uploadResult.secure_url) {
        imageUrl = uploadResult.secure_url;
        console.log("Image uploadée avec succès, URL :", imageUrl);
      } else {
        console.error("Erreur lors de l'upload de l'image :", uploadResult);
        throw new Error("Échec de l'upload de l'image");
      }
    } else {
      console.log("Aucune image fournie pour l'upload.");
    }

    if (!role) {
      return NextResponse.json(
        { message: "Le rôle fourni est invalide." },
        { status: 400 }
      );
    }

    console.log("Création de l'utilisateur");
    const newcomptePerso = await db.user.create({
      data: {
        nom,
        prenom,
        email,
        phone,
        hashPassword: hashedPassword,
        role,
      },
    });

    if (imageUrl) {
      console.log("Association de l'image avec l'utilisateur");
      await db.profileImage.create({
        data: {
          path: imageUrl,
          userId: newcomptePerso.id,
        },
      });
    }

    const { hashPassword: _, ...rest } = newcomptePerso;

    console.log("Compte créé avec succès");

    // <-- creation stripe account

    const account = await stripe.accounts.create({
      country: "FR",
      email: newcomptePerso.email,
      controller: {
        fees: {
          payer: "application",
        },
        losses: {
          payments: "application",
        },
        stripe_dashboard: {
          type: "express",
        },
      },
      capabilities: {
        transfers: {
          requested: true,
        },
        card_payments: {
          requested: true,
        },
      },

      business_type: "individual",
      individual: {
        email: newcomptePerso.email,
        first_name: newcomptePerso.prenom,
        last_name: newcomptePerso.last_name,
      },
      metadata: {
        userId: newcomptePerso.id,
        userRole: newcomptePerso.role,
      },
      default_currency: "eur",
    });

    await db.user.update({
      where: { id: newcomptePerso.id },
      data: {
        stripeAccountId: account.id,
      },
    });

    // -->
    console.log("Compte créé avec succès");
    console.log("Données envoyées avec succès à la base de données");

    return NextResponse.json(
      {
        comptePerso: rest,
        message:
          "Compte créé avec succès. Les données ont été envoyées avec succès à la base de données et l'image a été bien enregistrée.",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Erreur lors de la création du compte :", error);
    return NextResponse.json(
      { message: "Erreur interne du serveur." },
      { status: 500 }
    );
  }
}
