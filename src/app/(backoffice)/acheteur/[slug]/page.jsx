"use client";

import { Button } from "@/components/ui/button";
import { signOut, useSession } from "next-auth/react";
import { useParams, useRouter } from "next/navigation";

export default function AcheteurPage() {
  const { slug } = useParams();
  const router = useRouter();
  const { data: session } = useSession();

  if (!slug) {
    return <div>Chargement...</div>;
  }

  const [nom, prenom] = slug.split("-");

  if (!nom || !prenom) {
    return <div>Erreur : données du slug invalides</div>;
  }
  const capitalizeWords = (str) => {
    return str
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const handleSignOut = async () => {
    await signOut({ redirect: false });
    router.push("/login");
  };

  const handleProfile = () => {
    router.push(`/acheteur/${slug}/profil/${session?.user?.id}`);
  };

  return (
    <div className="p-10 text-center">
      <h1 className="text-2xl font-bold">
        Bienvenue dans votre espace, {capitalizeWords(nom)}{" "}
        {capitalizeWords(prenom)}
      </h1>

      <div className="flex items-center gap-4">
        <Button
          onClick={handleSignOut}
          className="bg-primary text-white hover:bg-primary/80"
        >
          Se déconnecter
        </Button>
        <Button
          onClick={() => router.push("/produits")}
          className="bg-primary text-white hover:bg-primary/80"
        >
          Produits
        </Button>
        <Button
          onClick={() => router.push("/annonces")}
          className="bg-primary text-white hover:bg-primary/80"
        >
          Annonces
        </Button>
        <Button
          onClick={handleProfile}
          className="bg-primary text-white hover:bg-primary/80"
        >
          Profil de l&apos;acheteur
        </Button>
      </div>
    </div>
  );
}
