"use client";

import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Plus, CalendarIcon } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { format, isValid } from "date-fns";
import { cn } from "@/lib/utils";
import { fr } from "date-fns/locale";

const ProduitsPage = () => {
  const { data: session } = useSession();
  const userId = session?.user?.id;

  const [designation, setDesignation] = useState("");
  const [provenance, setProvenance] = useState("");
  const [quantite, setQuantite] = useState("");
  const [dateRecolte, setDateRecolte] = useState(undefined);
  const [dureeConservation, setDureeConservation] = useState("");
  const [categorie, setCategorie] = useState("");
  const [type, setType] = useState("");
  const [formOpen, setFormOpen] = useState(false);
  const [unite, setUnite] = useState("");
  const [uniteTemps, setUniteTemps] = useState("");

  const resetForm = () => {
    setDesignation("");
    setProvenance("");
    setQuantite("");
    setDateRecolte(undefined);
    setDureeConservation("");
    setUnite("");
    setUniteTemps("");
    setCategorie("");
    setType("");
  };

  const handleAddProduct = (e) => {
    e.preventDefault();

    console.log("👤 Produit ajouté par l'utilisateur :", userId);

    console.log("📝 Données du formulaire :", {
      designation,
      provenance,
      quantite:
        quantite && unite ? `${quantite} ${unite}` : "Pas de quantité définie",
      unite,
      categorie,
      type,
      dateRecolte:
        dateRecolte && isValid(dateRecolte)
          ? format(dateRecolte, "yyyy-MM-dd", { locale: fr })
          : "Pas de date sélectionnée",
      dureeConservation:
        dureeConservation && uniteTemps
          ? `${dureeConservation} ${uniteTemps}`
          : "Pas de durée définie",
    });

    resetForm();
    setFormOpen(false);
  };

  const categoryWithType = {
    Vivrières: [
      "Fruits ",
      "Légumes",
      "Céréales",
      "Tubercules",
      "Légumineuses",
      "Racines comestibles",
    ],
    Fourragères: [
      "Plantes herbacées ",
      "Plantes fourragères céréalières",
      "Foin et pâturages",
    ],
    Laitiers: ["Lait cru", "Fromages", "Yaourts ", "Beurre"],
    Carnés: [
      "Viande bovine",
      "Viande ovine",
      "Viande avicole",
      "Viande caprine",
      "Viande porcine",
    ],
    Ovoproduits: [
      "oeufs de poules",
      "oeufs de cailles",
      "oeufs de canards",
      "oeufs de dindes",
      "oeufs de pintades",
      "oeufs d' oies",
    ],
    Apicoles: ["miel", "cire d'abeille", "gelée royale", " pollen"],
    Aquacoles: ["Poissons", "Crustacées", "Algues ", "Mollusques"],
    Industrielles_rente: [
      "Canne à sucre",
      "Café",
      "Thé ",
      "Vanille",
      "Cacao",
      "Épices",
      "Huile végétale ",
      "Fruits à coque",
      "Plantes médicinales",
      "Plantes aromatiques",
      "Fleurs",
    ],
  };

  return (
    <div>
      <Dialog open={formOpen} onOpenChange={setFormOpen}>
        <DialogTrigger asChild>
          <Button className="bg-[#0cc0df] hover:bg-[#0aa8c4] text-white transition-all duration-200">
            <Plus className="h-4 w-4" />
            <span className="ml-2">Ajouter un produit</span>
          </Button>
        </DialogTrigger>

        <DialogContent className="sm:max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-[#0cc0df] text-xl">
              Ajouter un produit
            </DialogTitle>
            <DialogDescription>
              Remplissez les informations pour ajouter un nouveau produit
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleAddProduct} className="space-y-6 mt-4 px-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Désignation</Label>
                <Input
                  value={designation}
                  onChange={(e) => setDesignation(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label>Provenance</Label>
                <Input
                  value={provenance}
                  onChange={(e) => setProvenance(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label>Quantité</Label>
                <Input
                  type="number"
                  value={quantite}
                  onChange={(e) => setQuantite(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label>Unité</Label>
                <Select value={unite} onValueChange={setUnite}>
                  <SelectTrigger id="unite" className="w-full">
                    <SelectValue placeholder="Choisir l’unité" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="kg">Kilogramme</SelectItem>
                    <SelectItem value="g">Gramme</SelectItem>
                    <SelectItem value="L">Litre</SelectItem>
                    <SelectItem value="unité">Unité</SelectItem>
                    <SelectItem value="boîte">Boîte</SelectItem>
                    <SelectItem value="caisse">Caisse</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Catégorie</Label>
                <Select
                  value={categorie}
                  onValueChange={(value) => {
                    setCategorie(value);
                    setType("");
                  }}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Choisir une catégorie" />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.keys(categoryWithType).map((cat) => (
                      <SelectItem key={cat} value={cat}>
                        {cat}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {categorie && Array.isArray(categoryWithType[categorie]) && (
                <div className="space-y-2">
                  <Label>Type</Label>
                  <Select value={type} onValueChange={setType}>
                    <SelectTrigger>
                      <SelectValue placeholder="Choisir un type" />
                    </SelectTrigger>
                    <SelectContent>
                      {categoryWithType[categorie].map((typeOption) => (
                        <SelectItem key={typeOption} value={typeOption}>
                          {typeOption}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}
            </div>

            <div className="space-y-2">
              <Label>Date de récolte</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal bg-white border",
                      !dateRecolte && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {dateRecolte ? (
                      format(dateRecolte, "dd MMMM yyyy", { locale: fr })
                    ) : (
                      <span>Sélectionner la date de récolte</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-full p-0" align="start">
                  <Calendar
                    locale={fr}
                    mode="single"
                    selected={dateRecolte}
                    onSelect={(date) => {
                      setDateRecolte(date);
                      console.log("📅 Date sélectionnée :", date);
                    }}
                    initialFocus
                    defaultMonth={dateRecolte}
                  />
                </PopoverContent>
              </Popover>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Durée de conservation</Label>
                <Input
                  type="number"
                  value={dureeConservation}
                  onChange={(e) => setDureeConservation(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label>Unité</Label>
                <Select value={uniteTemps} onValueChange={setUniteTemps}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Choisir l’unité" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="an">Années</SelectItem>
                    <SelectItem value="mois">Mois</SelectItem>
                    <SelectItem value="semaines">Semaines</SelectItem>
                    <SelectItem value="jours">Jours</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <DialogFooter className="pt-4">
              <Button
                type="submit"
                className="w-full bg-[#0cc0df] hover:bg-[#0aa8c4] text-white"
              >
                Ajouter
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => {
                  resetForm();
                  setFormOpen(false);
                }}
                className="w-full"
              >
                Annuler
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProduitsPage;
