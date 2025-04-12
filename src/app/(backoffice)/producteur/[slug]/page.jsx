"use client";

import { ErrorModal } from "@/app/(dialog)/erreur/ErrorModal";
import { SuccessModal } from "@/app/(dialog)/success/SuccessModal";
import { Button } from "@/components/ui/button";
import { signOut, useSession } from "next-auth/react";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import {
  AlertDialogFooter,
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
} from "@/components/ui/alert-dialog";
import { Star } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

export default function ProducteurPage() {
  const { slug } = useParams();
  const router = useRouter();
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [testimony, setTestimony] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);

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
    router.push(`/producteur/${slug}/profil/${session?.user?.id}`);
  };

  const handleProduits = () => {
    router.push(`/producteur/${slug}/produits`);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!testimony || rating === 0) {
      alert("Veuillez écrire un témoignage et donner une note.");
      return;
    }

    const data = {
      userId: session.user.id,
      testimony,
      rating,
      city,
      country,
    };

    try {
      const response = await fetch("/api/testimony/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setTestimony("");
        setRating(0);
        setIsSuccessModalOpen(true);
        handleCloseDialog();
      } else {
        handleCloseDialog();
        setIsErrorModalOpen(true);
      }
    } catch (error) {
      handleCloseDialog();
      setIsErrorModalOpen(true);
      console.error("Erreur:", error);
    }
  };

  const handleOpenDialog = () => {
    setIsOpen(true);
  };

  const handleCloseDialog = () => {
    setIsOpen(false);
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
          onClick={handleProduits}
          className="bg-primary text-white hover:bg-primary/80"
        >
          Produits
        </Button>
        <Button
          onClick={handleOpenDialog}
          className="bg-primary text-white hover:bg-primary/80"
        >
          Noter la plateforme
        </Button>
        <Button
          onClick={handleProfile}
          className="bg-primary text-white hover:bg-primary/80"
        >
          Profil du producteur
        </Button>
      </div>
      <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
        <AlertDialogContent className="max-w-lg w-full p-6 gap-6">
          <AlertDialogHeader className="space-y-4">
            <AlertDialogTitle className="text-3xl font-bold text-center">
              Noter la plateforme LILEE
            </AlertDialogTitle>
            <AlertDialogDescription className="text-center  text-gray-600">
              Votre avis est précieux pour nous aider à améliorer votre
              expérience
            </AlertDialogDescription>
          </AlertDialogHeader>

          <div className="flex flex-col gap-6 py-4">
            <div className="flex flex-col items-center gap-4">
              <span className="text-base font-medium text-gray-700">
                Sélectionnez une note
              </span>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHover(star)}
                    onMouseLeave={() => setHover(0)}
                    className="relative p-1 transition-transform hover:scale-110 focus:outline-none"
                  >
                    <Star
                      size={32}
                      className={`transition-colors duration-200 ${
                        star <= (hover || rating)
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="testimony"
                className="text-base font-medium text-gray-700"
              >
                Partagez votre expérience
              </label>
              <Textarea
                id="testimony"
                value={testimony}
                onChange={(e) => setTestimony(e.target.value)}
                required
                className="min-h-[100px] resize-none border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                placeholder="Qu'avez-vous apprécié ? Que pourrions-nous améliorer ?"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-y-0">
              <div className="space-y-2">
                <label
                  htmlFor="city"
                  className="text-base font-medium text-gray-700"
                >
                  Ville
                </label>
                <Input
                  id="city"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  required
                  className="border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Votre ville"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="country"
                  className="text-base font-medium text-gray-700"
                >
                  Pays
                </label>
                <Input
                  id="country"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  required
                  className="border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Votre pays"
                />
              </div>
            </div>
          </div>

          <AlertDialogFooter className="flex-col gap-3 sm:flex-col">
            <Button
              onClick={handleSubmit}
              className="w-full text-white py-2"
              disabled={
                !rating || !testimony.trim() || !city.trim() || !country.trim()
              }
            >
              Soumettre mon avis
            </Button>
            <Button
              variant="ghost"
              onClick={handleCloseDialog}
              className="w-full text-gray-600 hover:text-gray-800 hover:bg-gray-100 hover:underline"
            >
              Annuler
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      <SuccessModal
        isOpen={isSuccessModalOpen}
        onClose={() => setIsSuccessModalOpen(false)}
      />
      <ErrorModal
        isOpen={isErrorModalOpen}
        onClose={() => setIsErrorModalOpen(false)}
      />
    </div>
  );
}
