import Image from 'next/image';
import { FaLeaf, FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import Header from '../Component/Header';

export default function About()  {
  return (
    <div className="container mx-auto p-8">
        <Header />
      {/* Introduction */}
      <section className="text-center mt-12 mb-12">
        <h1 className="text-4xl font-bold mb-4">À propos de nous</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Bienvenue dans notre boutique de vêtements de seconde main pour femme. Notre mission : redonner vie aux vêtements tout en promouvant une mode responsable et accessible.
        </p>
      </section>

      {/* Notre Histoire */}
      <section className="flex flex-col md:flex-row items-center mb-12">
        <div className="md:w-1/2 mb-6 md:mb-0">
          <h2 className="text-3xl font-semibold mb-4">Notre Histoire</h2>
            <FaQuoteLeft className="text-4xl text-gray-400" />
            <br />
          <p className="text-gray-700 mx-4 text-justify">
            Née d&apos;une passion pour la mode durable, notre boutique sélectionne avec soin des pièces uniques pour offrir une seconde vie aux vêtements. Chaque article raconte une histoire et contribue à un avenir plus vert. 
            </p>
            <p className="text-gray-700 mx-4 mt-4 text-justify">
            Ce projet est né de la volonté de proposer une alternative éthique à la fast fashion, en valorisant des vêtements de qualité déjà produits. Nous croyons fermement que la mode peut être à la fois élégante et responsable. Chaque pièce est soigneusement inspectée et choisie pour garantir à nos clientes des articles à la fois tendances et durables.
          </p>
            <br />
            <FaQuoteRight className="text-4xl text-gray-400 text-right" />
        </div>
        <div className="md:w-1/2">
          <Image src="/images/boutique.png" alt="Notre histoire" width={500} height={500} className="rounded-2xl shadow-lg opacity-80" />
        </div>
      </section>

      {/* Engagement Écoresponsable */}
      <section className="flex flex-col md:flex-row-reverse items-center mb-12">
        <div className="md:w-1/2 mb-6 md:mb-0">
          <h2 className="text-3xl font-semibold mb-4">Notre Engagement Écoresponsable</h2>
          <FaLeaf className="text-4xl text-green-500 text-center justify-center" />
            <br />
          <p className="text-gray-700 text-justify mx-2">
            Nous croyons en une mode plus durable. En choisissant la seconde main, vous participez à la réduction des déchets textiles et à la préservation des ressources naturelles.
          </p>
          <p className="text-gray-700 mx-2 mt-4 text-justify mx-2">
            En donnant une seconde vie aux vêtements, nous réduisons l&apos;empreinte carbone et participons à la préservation des ressources naturelles. Notre objectif est d&apos;encourager une consommation plus consciente, où chaque achat devient un acte engagé pour la planète. Nous collaborons également avec des associations locales pour redistribuer les vêtements invendus, assurant ainsi qu&apos;aucun article ne soit gaspillé.
          </p>
        </div>
        <div className="md:w-1/2">
          <Image src="/images/eco.jpg" alt="Engagement écoresponsable" width={600} height={400} className="rounded-2xl shadow-lg opacity-80 transition-transform duration-500 ease-in-out hover:scale-110 hover:opacity-70" />
        </div>
      </section>

      {/* Notre Boutique */}
      <section className="text-center mb-12">
        <h2 className="text-3xl font-semibold mb-4">Visitez notre Boutique</h2>
        <p className="text-gray-700 mb-6">
          Retrouvez-nous dans notre boutique située au cœur de la ville. Un espace chaleureux où chaque vêtement a une seconde chance.
        </p>
        <Image src="/images/magasin.jpg" alt="Notre boutique" width={800} height={500} className="rounded-2xl shadow-lg transition-transform duration-500 ease-in-out hover:scale-110 hover:opacity-80" />
      </section>

      {/* Galerie d'Images */}
      <section>
        <h2 className="text-3xl font-semibold text-center mb-8">Galerie</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {["/images/robes-cintre.jpg", "/images/accessoires.jpg", "/images/bijoux.jpg"].map((src, index) => (
            <div key={index} className="overflow-hidden  rounded-2xl shadow-lg">
              <Image src={src} alt={`Image ${index + 1}`} width={400} height={400} className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110 hover:opacity-80" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

