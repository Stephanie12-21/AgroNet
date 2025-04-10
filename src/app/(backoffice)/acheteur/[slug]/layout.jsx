"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function LayoutAdmin({ children }) {
  const { data: session } = useSession();

  if (!session?.user) {
    return (
      <div className="flex items-center justify-center  min-h-screen bg-gray-100">
        <Card className="w-full max-w-md p-4">
          <CardHeader>
            <CardTitle className="text-2xl text-primary font-bold text-center">
              Connexion requise
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-center mb-6 text-gray-600">
              Veuillez vous connecter à votre compte pour continuer
            </p>
            <div className="flex justify-center">
              <Button asChild className="w-full">
                <Link href="/login">Se connecter</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return <div className="container mx-auto">{children}</div>;
}
