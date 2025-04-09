// import Link from "next/link"
// import Image from "next/image"
// import { ArrowRight, Leaf, ShoppingCart, BarChart3 } from "lucide-react"

// import { Button } from "@/components/ui/button"

// export default function Home() {
//   return (
//     <div className="flex min-h-screen flex-col">
//       {/* Navigation */}
//       <header className="sticky top-0 z-10 border-b bg-white">
//         <div className="container flex h-16 items-center justify-between py-4">
//           <div className="flex items-center gap-2">
//             <Leaf className="h-6 w-6 text-[#44aa00]" />
//             <span className="text-xl font-bold">AgriMarket</span>
//           </div>
//           <nav className="hidden md:flex items-center gap-6">
//             <Link href="#fonctionnalites" className="text-sm font-medium hover:text-[#44aa00] transition-colors">
//               Fonctionnalités
//             </Link>
//             <Link href="#comment-ca-marche" className="text-sm font-medium hover:text-[#44aa00] transition-colors">
//               Comment ça marche
//             </Link>
//             <Link href="#tarifs" className="text-sm font-medium hover:text-[#44aa00] transition-colors">
//               Tarifs
//             </Link>
//             <Link href="/marketplace" className="text-sm font-medium hover:text-[#44aa00] transition-colors">
//               Marketplace
//             </Link>
//           </nav>
//           <div className="flex items-center gap-4">
//             <Link href="/login">
//               <Button variant="outline" className="hidden sm:flex">
//                 Connexion
//               </Button>
//             </Link>
//             <Link href="/signup">
//               <Button className="bg-[#44aa00] hover:bg-[#3a9000]">Inscription</Button>
//             </Link>
//           </div>
//         </div>
//       </header>

//       <main className="flex-1">
//         {/* Hero Section */}
//         <section id="accueil" className="relative">
//           <div className="relative h-[500px] w-full">
//             <Image
//               src="/placeholder.svg?height=500&width=1920"
//               alt="Champs agricoles"
//               fill
//               className="object-cover brightness-75"
//               priority
//             />
//             <div className="absolute inset-0 bg-black/30" />
//             <div className="absolute inset-0 flex items-center">
//               <div className="container">
//                 <div className="max-w-xl space-y-4">
//                   <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
//                     La marketplace des produits agricoles locaux
//                   </h1>
//                   <p className="text-lg text-white/90">
//                     Connectez-vous directement avec les agriculteurs locaux et achetez des produits frais sans
//                     intermédiaire.
//                   </p>
//                   <div className="flex flex-col sm:flex-row gap-4 pt-4">
//                     <Link href="/marketplace">
//                       <Button className="bg-[#44aa00] hover:bg-[#3a9000]">
//                         Explorer la marketplace
//                         <ArrowRight className="ml-2 h-4 w-4" />
//                       </Button>
//                     </Link>
//                     <Link href="/signup?type=farmer">
//                       <Button variant="outline" className="bg-white text-gray-900 hover:bg-gray-100 border-none">
//                         Devenir vendeur
//                       </Button>
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Features */}
//         <section id="fonctionnalites" className="py-16 bg-gray-50">
//           <div className="container">
//             <div className="text-center mb-12">
//               <h2 className="text-3xl font-bold mb-4">Pourquoi choisir AgriMarket ?</h2>
//               <p className="text-gray-600 max-w-2xl mx-auto">
//                 Notre plateforme offre des avantages uniques tant pour les agriculteurs que pour les consommateurs.
//               </p>
//             </div>
//             <div className="grid gap-8 md:grid-cols-3">
//               <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm">
//                 <div className="p-3 rounded-full bg-[#44aa00]/10 mb-4">
//                   <Leaf className="h-6 w-6 text-[#44aa00]" />
//                 </div>
//                 <h3 className="text-xl font-semibold mb-2">Pour les agriculteurs</h3>
//                 <p className="text-gray-600">
//                   Vendez directement vos produits, fixez vos prix et développez votre clientèle sans intermédiaire.
//                 </p>
//               </div>
//               <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm">
//                 <div className="p-3 rounded-full bg-[#44aa00]/10 mb-4">
//                   <ShoppingCart className="h-6 w-6 text-[#44aa00]" />
//                 </div>
//                 <h3 className="text-xl font-semibold mb-2">Pour les acheteurs</h3>
//                 <p className="text-gray-600">
//                   Achetez des produits frais et locaux, soutenez les agriculteurs de votre région et mangez plus
//                   sainement.
//                 </p>
//               </div>
//               <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm">
//                 <div className="p-3 rounded-full bg-[#44aa00]/10 mb-4">
//                   <BarChart3 className="h-6 w-6 text-[#44aa00]" />
//                 </div>
//                 <h3 className="text-xl font-semibold mb-2">Transparence totale</h3>
//                 <p className="text-gray-600">
//                   Connaissez l'origine exacte de vos produits, les méthodes de culture et l'impact environnemental.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* How it works */}
//         <section id="comment-ca-marche" className="py-16">
//           <div className="container">
//             <div className="text-center mb-12">
//               <h2 className="text-3xl font-bold mb-4">Comment ça marche ?</h2>
//               <p className="text-gray-600 max-w-2xl mx-auto">
//                 Un processus simple pour connecter agriculteurs et consommateurs sans intermédiaire.
//               </p>
//             </div>
//             <div className="grid md:grid-cols-2 gap-12 items-center">
//               <div>
//                 <h3 className="text-2xl font-bold mb-6">Pour les agriculteurs</h3>
//                 <div className="space-y-6">
//                   <div className="flex gap-4">
//                     <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#44aa00] text-white flex items-center justify-center font-bold">
//                       1
//                     </div>
//                     <div>
//                       <h4 className="font-semibold text-lg">Créez votre compte</h4>
//                       <p className="text-gray-600">Inscrivez-vous gratuitement et créez votre profil d'agriculteur.</p>
//                     </div>
//                   </div>
//                   <div className="flex gap-4">
//                     <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#44aa00] text-white flex items-center justify-center font-bold">
//                       2
//                     </div>
//                     <div>
//                       <h4 className="font-semibold text-lg">Ajoutez vos produits</h4>
//                       <p className="text-gray-600">Publiez vos produits avec photos, descriptions et prix.</p>
//                     </div>
//                   </div>
//                   <div className="flex gap-4">
//                     <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#44aa00] text-white flex items-center justify-center font-bold">
//                       3
//                     </div>
//                     <div>
//                       <h4 className="font-semibold text-lg">Gérez vos commandes</h4>
//                       <p className="text-gray-600">Recevez les commandes et organisez les livraisons ou retraits.</p>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="mt-8">
//                   <Link href="/signup?type=farmer">
//                     <Button className="bg-[#44aa00] hover:bg-[#3a9000]">Devenir vendeur</Button>
//                   </Link>
//                 </div>
//               </div>
//               <div>
//                 <h3 className="text-2xl font-bold mb-6">Pour les acheteurs</h3>
//                 <div className="space-y-6">
//                   <div className="flex gap-4">
//                     <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#44aa00] text-white flex items-center justify-center font-bold">
//                       1
//                     </div>
//                     <div>
//                       <h4 className="font-semibold text-lg">Explorez la marketplace</h4>
//                       <p className="text-gray-600">Parcourez les produits par catégorie, région ou agriculteur.</p>
//                     </div>
//                   </div>
//                   <div className="flex gap-4">
//                     <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#44aa00] text-white flex items-center justify-center font-bold">
//                       2
//                     </div>
//                     <div>
//                       <h4 className="font-semibold text-lg">Ajoutez au panier</h4>
//                       <p className="text-gray-600">Sélectionnez vos produits et ajoutez-les à votre panier.</p>
//                     </div>
//                   </div>
//                   <div className="flex gap-4">
//                     <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#44aa00] text-white flex items-center justify-center font-bold">
//                       3
//                     </div>
//                     <div>
//                       <h4 className="font-semibold text-lg">Payez et récupérez</h4>
//                       <p className="text-gray-600">
//                         Payez en ligne et choisissez entre livraison ou retrait à la ferme.
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="mt-8">
//                   <Link href="/marketplace">
//                     <Button className="bg-[#44aa00] hover:bg-[#3a9000]">Explorer la marketplace</Button>
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Featured Products */}
//         <section className="py-16 bg-gray-50">
//           <div className="container">
//             <div className="text-center mb-12">
//               <h2 className="text-3xl font-bold mb-4">Produits populaires</h2>
//               <p className="text-gray-600 max-w-2xl mx-auto">
//                 Découvrez quelques-uns des produits les plus appréciés sur notre marketplace.
//               </p>
//             </div>
//             <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
//               {[
//                 {
//                   name: "Panier de légumes bio",
//                   price: "24,99 €",
//                   farmer: "Ferme des Oliviers",
//                   location: "Provence",
//                   image: "/placeholder.svg?height=300&width=400",
//                 },
//                 {
//                   name: "Miel de montagne",
//                   price: "12,50 €",
//                   farmer: "Rucher du Mont Blanc",
//                   location: "Haute-Savoie",
//                   image: "/placeholder.svg?height=300&width=400",
//                 },
//                 {
//                   name: "Fromage de chèvre",
//                   price: "8,75 €",
//                   farmer: "Chèvrerie du Vallon",
//                   location: "Ardèche",
//                   image: "/placeholder.svg?height=300&width=400",
//                 },
//                 {
//                   name: "Pommes Golden",
//                   price: "3,99 €/kg",
//                   farmer: "Vergers de Normandie",
//                   location: "Normandie",
//                   image: "/placeholder.svg?height=300&width=400",
//                 },
//               ].map((product, index) => (
//                 <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm">
//                   <div className="relative h-48">
//                     <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
//                   </div>
//                   <div className="p-4">
//                     <h3 className="text-lg font-semibold">{product.name}</h3>
//                     <p className="text-[#44aa00] font-bold">{product.price}</p>
//                     <div className="mt-2 text-sm text-gray-600">
//                       <p>{product.farmer}</p>
//                       <p>{product.location}</p>
//                     </div>
//                     <Button className="w-full mt-4 bg-[#44aa00] hover:bg-[#3a9000]">Voir le produit</Button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//             <div className="text-center mt-8">
//               <Link href="/marketplace">
//                 <Button
//                   variant="outline"
//                   className="border-[#44aa00] text-[#44aa00] hover:bg-[#44aa00] hover:text-white"
//                 >
//                   Voir tous les produits
//                 </Button>
//               </Link>
//             </div>
//           </div>
//         </section>

//         {/* Pricing */}
//         <section id="tarifs" className="py-16">
//           <div className="container">
//             <div className="text-center mb-12">
//               <h2 className="text-3xl font-bold mb-4">Nos tarifs</h2>
//               <p className="text-gray-600 max-w-2xl mx-auto">
//                 Des formules adaptées à tous les agriculteurs, quelle que soit la taille de votre exploitation.
//               </p>
//             </div>
//             <div className="grid gap-8 md:grid-cols-3">
//               <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
//                 <div className="p-6">
//                   <h3 className="text-xl font-bold mb-2">Débutant</h3>
//                   <p className="text-gray-600 mb-4">Idéal pour commencer</p>
//                   <div className="mb-4">
//                     <span className="text-4xl font-bold">Gratuit</span>
//                   </div>
//                   <ul className="space-y-3 mb-6">
//                     <li className="flex items-center">
//                       <svg
//                         className="h-5 w-5 text-[#44aa00] mr-2"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                       >
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                       </svg>
//                       Jusqu'à 10 produits
//                     </li>
//                     <li className="flex items-center">
//                       <svg
//                         className="h-5 w-5 text-[#44aa00] mr-2"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                       >
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                       </svg>
//                       Profil de base
//                     </li>
//                     <li className="flex items-center">
//                       <svg
//                         className="h-5 w-5 text-[#44aa00] mr-2"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                       >
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                       </svg>
//                       Commission de 8%
//                     </li>
//                   </ul>
//                   <Button className="w-full bg-[#44aa00] hover:bg-[#3a9000]">Commencer gratuitement</Button>
//                 </div>
//               </div>
//               <div className="bg-white rounded-lg shadow-sm overflow-hidden border-2 border-[#44aa00] relative">
//                 <div className="absolute top-0 right-0 bg-[#44aa00] text-white px-4 py-1 text-sm font-semibold">
//                   Populaire
//                 </div>
//                 <div className="p-6">
//                   <h3 className="text-xl font-bold mb-2">Professionnel</h3>
//                   <p className="text-gray-600 mb-4">Pour les agriculteurs établis</p>
//                   <div className="mb-4">
//                     <span className="text-4xl font-bold">29,99 €</span>
//                     <span className="text-gray-600">/mois</span>
//                   </div>
//                   <ul className="space-y-3 mb-6">
//                     <li className="flex items-center">
//                       <svg
//                         className="h-5 w-5 text-[#44aa00] mr-2"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                       >
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                       </svg>
//                       Produits illimités
//                     </li>
//                     <li className="flex items-center">
//                       <svg
//                         className="h-5 w-5 text-[#44aa00] mr-2"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                       >
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                       </svg>
//                       Profil détaillé
//                     </li>
//                     <li className="flex items-center">
//                       <svg
//                         className="h-5 w-5 text-[#44aa00] mr-2"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                       >
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                       </svg>
//                       Commission de 5%
//                     </li>
//                     <li className="flex items-center">
//                       <svg
//                         className="h-5 w-5 text-[#44aa00] mr-2"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                       >
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                       </svg>
//                       Statistiques de vente
//                     </li>
//                   </ul>
//                   <Button className="w-full bg-[#44aa00] hover:bg-[#3a9000]">S'abonner</Button>
//                 </div>
//               </div>
//               <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
//                 <div className="p-6">
//                   <h3 className="text-xl font-bold mb-2">Entreprise</h3>
//                   <p className="text-gray-600 mb-4">Pour les grandes exploitations</p>
//                   <div className="mb-4">
//                     <span className="text-4xl font-bold">79,99 €</span>
//                     <span className="text-gray-600">/mois</span>
//                   </div>
//                   <ul className="space-y-3 mb-6">
//                     <li className="flex items-center">
//                       <svg
//                         className="h-5 w-5 text-[#44aa00] mr-2"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                       >
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                       </svg>
//                       Tout du plan Professionnel
//                     </li>
//                     <li className="flex items-center">
//                       <svg
//                         className="h-5 w-5 text-[#44aa00] mr-2"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                       >
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                       </svg>
//                       Commission de 3%
//                     </li>
//                     <li className="flex items-center">
//                       <svg
//                         className="h-5 w-5 text-[#44aa00] mr-2"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                       >
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                       </svg>
//                       Support prioritaire
//                     </li>
//                     <li className="flex items-center">
//                       <svg
//                         className="h-5 w-5 text-[#44aa00] mr-2"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                       >
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                       </svg>
//                       Mise en avant des produits
//                     </li>
//                   </ul>
//                   <Button className="w-full bg-[#44aa00] hover:bg-[#3a9000]">Contacter les ventes</Button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Testimonials */}
//         <section className="py-16 bg-gray-50">
//           <div className="container">
//             <div className="text-center mb-12">
//               <h2 className="text-3xl font-bold mb-4">Ils nous font confiance</h2>
//               <p className="text-gray-600 max-w-2xl mx-auto">
//                 Découvrez les témoignages d'agriculteurs et de consommateurs qui utilisent notre plateforme.
//               </p>
//             </div>
//             <div className="grid gap-8 md:grid-cols-2">
//               <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
//                 <div className="flex flex-col h-full">
//                   <div className="mb-4">
//                     <svg className="h-6 w-6 text-[#44aa00]" fill="currentColor" viewBox="0 0 24 24">
//                       <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
//                     </svg>
//                   </div>
//                   <p className="text-gray-600 mb-4 flex-1">
//                     "Grâce à AgriMarket, j'ai pu développer ma clientèle et vendre mes produits à un prix juste. La
//                     plateforme est intuitive et le support est réactif."
//                   </p>
//                   <div className="flex items-center">
//                     <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
//                       <Image src="/placeholder.svg?height=48&width=48" alt="Photo de profil" width={48} height={48} />
//                     </div>
//                     <div>
//                       <p className="font-semibold">Pierre Durand</p>
//                       <p className="text-sm text-gray-500">Maraîcher bio, Région Centre</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
//                 <div className="flex flex-col h-full">
//                   <div className="mb-4">
//                     <svg className="h-6 w-6 text-[#44aa00]" fill="currentColor" viewBox="0 0 24 24">
//                       <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
//                     </svg>
//                   </div>
//                   <p className="text-gray-600 mb-4 flex-1">
//                     "En tant que consommatrice, j'apprécie de pouvoir acheter directement auprès des producteurs locaux.
//                     Les produits sont frais et j'aime connaître leur origine."
//                   </p>
//                   <div className="flex items-center">
//                     <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
//                       <Image src="/placeholder.svg?height=48&width=48" alt="Photo de profil" width={48} height={48} />
//                     </div>
//                     <div>
//                       <p className="font-semibold">Sophie Martin</p>
//                       <p className="text-sm text-gray-500">Cliente régulière, Lyon</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* CTA */}
//         <section className="py-16 bg-[#44aa00]">
//           <div className="container">
//             <div className="text-center text-white">
//               <h2 className="text-3xl font-bold mb-4">Prêt à rejoindre la révolution agricole ?</h2>
//               <p className="max-w-2xl mx-auto mb-8">
//                 Que vous soyez agriculteur ou consommateur, rejoignez notre communauté et participez à un système
//                 alimentaire plus juste et durable.
//               </p>
//               <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                 <Link href="/signup?type=farmer">
//                   <Button className="bg-white text-[#44aa00] hover:bg-gray-100">Je suis agriculteur</Button>
//                 </Link>
//                 <Link href="/signup">
//                   <Button className="bg-white text-[#44aa00] hover:bg-gray-100">Je suis consommateur</Button>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </section>
//       </main>

//       <footer className="bg-gray-900 text-white py-12">
//         <div className="container">
//           <div className="grid gap-8 md:grid-cols-4">
//             <div>
//               <div className="flex items-center gap-2 mb-4">
//                 <Leaf className="h-6 w-6 text-[#44aa00]" />
//                 <span className="text-xl font-bold">AgriMarket</span>
//               </div>
//               <p className="text-gray-400 mb-4">
//                 La marketplace qui connecte directement agriculteurs et consommateurs pour un système alimentaire plus
//                 juste.
//               </p>
//             </div>
//             <div>
//               <h3 className="text-lg font-semibold mb-4">Liens rapides</h3>
//               <ul className="space-y-2">
//                 <li>
//                   <Link href="/marketplace" className="text-gray-400 hover:text-white transition-colors">
//                     Marketplace
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="#fonctionnalites" className="text-gray-400 hover:text-white transition-colors">
//                     Fonctionnalités
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="#tarifs" className="text-gray-400 hover:text-white transition-colors">
//                     Tarifs
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="#comment-ca-marche" className="text-gray-400 hover:text-white transition-colors">
//                     Comment ça marche
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//             <div>
//               <h3 className="text-lg font-semibold mb-4">Légal</h3>
//               <ul className="space-y-2">
//                 <li>
//                   <Link href="/conditions" className="text-gray-400 hover:text-white transition-colors">
//                     Conditions d'utilisation
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
//                     Politique de confidentialité
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="/mentions" className="text-gray-400 hover:text-white transition-colors">
//                     Mentions légales
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//             <div>
//               <h3 className="text-lg font-semibold mb-4">Contact</h3>
//               <ul className="space-y-2 text-gray-400">
//                 <li>Email: contact@agrimarket.fr</li>
//                 <li>Téléphone: +33 1 23 45 67 89</li>
//                 <li>Adresse: 123 Avenue de l'Agriculture, 75000 Paris</li>
//               </ul>
//               <div className="flex space-x-4 mt-4">
//                 <a href="#" className="text-gray-400 hover:text-white">
//                   <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
//                     <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
//                   </svg>
//                 </a>
//                 <a href="#" className="text-gray-400 hover:text-white">
//                   <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
//                     <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
//                   </svg>
//                 </a>
//                 <a href="#" className="text-gray-400 hover:text-white">
//                   <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
//                     <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
//                   </svg>
//                 </a>
//               </div>
//             </div>
//           </div>
//           <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
//             <p>&copy; {new Date().getFullYear()} AgriMarket. Tous droits réservés.</p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   )
// }

"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { z } from "zod";

import { SuccessModal } from "../(dialog)/success/SuccessModal";
import { ErrorModal } from "../(dialog)/erreur/ErrorModal";
import { InfoModal } from "../(dialog)/info/InfoModal";

const emailSchema = z.object({
  email: z.string().email("Entrez un email valide."),
});

export default function Home() {
  const [email, setEmail] = useState("");
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);
  const [infoMessage, setInfoMessage] = useState("");

  const router = useRouter();

  const handleContact = () => {
    router.push("/contact");
  };

  const handleLogin = () => {
    router.push("/login");
  };

  const handleSubmit = async () => {
    const result = emailSchema.safeParse({ email });

    if (!result.success) {
      setInfoMessage(result.error.errors[0].message);
      setIsInfoModalOpen(true);
      return;
    }

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setIsSuccessModalOpen(true);
        setEmail("");
      } else if (response.status === 409) {
        setInfoMessage("Vous êtes déjà abonné à notre newsletter !");
        setIsInfoModalOpen(true);
        setEmail("");
      } else {
        setIsErrorModalOpen(true);
        setEmail("");
      }
    } catch (error) {
      console.error("Erreur réseau :", error);
      setIsErrorModalOpen(true);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="flex flex-col space-y-6 items-center">
        <Button variant="default" onClick={handleContact}>
          Contact
        </Button>
        <Button variant="default" onClick={handleLogin}>
          Se connecter
        </Button>
        <div className="flex flex-col space-y-4 items-center text-center">
          <h2 className="text-xl font-bold text-[#15213D]">
            Abonnez-vous à notre{" "}
            <span className="text-[#FCA311]">newsletter</span>
          </h2>
          <div className="flex flex-col sm:flex-row gap-2 items-center">
            <label htmlFor="userEmail" className="sr-only">
              Adresse email
            </label>
            <Input
              id="userEmail"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Votre adresse email"
              className="bg-transparent text-black border h-10"
            />
            <Button onClick={handleSubmit}>S&apos;abonner</Button>
          </div>
        </div>
      </div>

      {/* Modals */}
      <SuccessModal
        isOpen={isSuccessModalOpen}
        onClose={() => setIsSuccessModalOpen(false)}
      />
      <ErrorModal
        isOpen={isErrorModalOpen}
        onClose={() => setIsErrorModalOpen(false)}
      />
      <InfoModal
        isOpen={isInfoModalOpen}
        onClose={() => setIsInfoModalOpen(false)}
        message={infoMessage}
      />
    </div>
  );
}
