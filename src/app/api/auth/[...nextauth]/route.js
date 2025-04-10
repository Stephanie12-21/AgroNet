import { db } from "@/lib/db";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcrypt";
import NextAuth from "next-auth";

// ✅ Requis pour Stripe (optionnel selon ton besoin)
import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const authOptions = {
  adapter: PrismaAdapter(db),
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/signup",
  },
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { email, password } = credentials ?? {};
        if (!email || !password) return null;

        const user = await db.user.findUnique({
          where: { email },
          include: { profileImages: true },
        });
        if (!user) return null;

        const isValid = await compare(password, user.hashPassword);
        if (!isValid) return null;

        const imageUrl =
          user.profileImages.length > 0 ? user.profileImages[0].path : null;

        return {
          id: String(user.id),
          nom: user.nom,
          prenom: user.prenom,
          email: user.email,
          role: user.role,
          image: imageUrl,
          stripeAccountId: user.stripeAccountId,
          stripeAccountCompleted: user.stripeAccountCompleted,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, trigger, session }) {
      if (trigger === "update" && session?.stripeAccountId) {
        token.stripeAccountId = session.stripeAccountId;
        return token;
      }
      if (user) {
        token.id = user.id;
        token.nom = user.nom;
        token.prenom = user.prenom;
        token.email = user.email;
        token.picture = user.image;
        token.role = user.role;
        token.stripeAccountId = user.stripeAccountId || null;
        token.stripeAccountCompleted = user.stripeAccountCompleted || false;
      }
      return token;
    },
    async session({ session, token }) {
      session.user = {
        id: token.id,
        nom: token.nom,
        prenom: token.prenom,
        email: token.email,
        image: token.picture,
        role: token.role,
        stripeAccountId: token.stripeAccountId,
        stripeAccountCompleted: token.stripeAccountCompleted,
      };
      console.log("session", session);
      return session;
    },
  },
  events: {
    createUser: async ({ user }) => {
      if (!user?.id || !user?.email) return;
      try {
        await stripe.customers.create({ email: user.email });
      } catch (error) {
        console.error("Erreur création Stripe:", error);
      }
    },
  },
};

// ✅ La ligne qui corrige TOUT avec App Router (Next.js 13+)
const handler = NextAuth(authOptions);

// ✅ Ne pas appeler handler() à la main !
export const GET = handler;
export const POST = handler;
