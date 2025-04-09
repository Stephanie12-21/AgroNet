"use client";
import { signOut, useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import React from "react";
import { useRouter } from "next/navigation";

const HomeAcheteur = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const handleSignOut = async () => {
    await signOut({ redirect: false });
    router.push("/login");
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">
        Bienvenue sur AgroNet, {session?.user?.nom} {session?.user?.prenom}
      </h1>
      <div className="flex  items-center gap-4">
        <Button
          onClick={handleSignOut}
          className="bg-primary text-white hover:bg-primary/80"
        >
          Se déconnecter
        </Button>
        <Button
          onClick={handleSignOut}
          className="bg-primary text-white hover:bg-primary/80"
        >
          Produits
        </Button>
        <Button
          onClick={handleSignOut}
          className="bg-primary text-white hover:bg-primary/80"
        >
          Annonces
        </Button>
      </div>
    </div>
  );
};

export default HomeAcheteur;
