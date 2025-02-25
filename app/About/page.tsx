import Image from 'next/image';
import { FaLeaf, FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import Header from '../Component/Header';
import { ChevronUpIcon } from '@heroicons/react/24/solid';

export default function About()  {
  return (
    <div className="container mx-auto p-8">
        <Header />
      {/* Introduction */}
      <section className="text-center mt-12 mb-12">
        <h1 className="text-4xl font-bold pt-4 mt-8 mb-4 bg-gradient-to-tr from-rose-400 to-gray-400 bg-clip-text text-transparent hover:animate-bounce">À propos de nous</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Bienvenue dans notre boutique de vêtements de seconde main pour femme. Notre mission : redonner vie aux vêtements tout en promouvant une mode responsable et accessible.
        </p>
      </section>

      {/* Notre Histoire */}
      <section className="flex flex-col md:flex-row items-center mb-12">
        <div className="md:w-1/2 mb-6 md:mb-0">
          <h2 className="text-3xl font-semibold mx-4 px-2 mb-4">Notre Histoire</h2>
            <FaQuoteLeft className="text-4xl text-gray-400" />
            <br />
          <p className="text-gray-700 mx-4 px-2 text-justify text-lg">
            Née d&apos;une passion pour la mode durable, notre boutique sélectionne avec soin des pièces uniques pour offrir une seconde vie aux vêtements. Chaque article raconte une histoire et contribue à un avenir plus vert. 
            </p>
            <p className="text-gray-700 mx-4 px-2 mt-4 text-justify text-lg">
            Ce projet est né de la volonté de proposer une alternative éthique à la fast fashion, en valorisant des vêtements de qualité déjà produits. Nous croyons fermement que la mode peut être à la fois élégante et responsable. Chaque pièce est soigneusement inspectée et choisie pour garantir à nos clientes des articles à la fois tendances et durables.
          </p>
            <br />
            <FaQuoteRight className="text-4xl text-gray-400 text-right" />
        </div>
        <div className="md:w-1/2">
          <Image src="/images/boutique.png" alt="Notre histoire" width={500} height={500} className="rounded-2xl shadow-lg opacity-80 transition-transform duration-500 ease-in-out hover:scale-110 hover:opacity-70" />
        </div>
      </section>

      {/* Engagement Écoresponsable */}
      <section className="flex flex-col md:flex-row-reverse items-center mb-12">
        <div className="md:w-1/2 mb-6 md:mb-0">
          <h2 className="text-3xl font-semibold mx-4 px-2 mb-4">Notre Engagement Écoresponsable</h2>
          <FaLeaf className="text-4xl text-green-500 text-center justify-center mx-4 px-2" />
            <br />
          <p className="text-gray-700 text-justify mx-4 px-2 text-lg">
            Nous croyons en une mode plus durable. En choisissant la seconde main, vous participez à la réduction des déchets textiles et à la préservation des ressources naturelles.
          </p>
          <p className="text-gray-700 mx-4 px-2 mt-4 text-justify text-lg">
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
        <p className="text-gray-700 mb-6 text-lg">
          Retrouvez-nous dans notre boutique située au cœur de la ville. Un espace chaleureux où chaque vêtement a une seconde chance.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
        <Image src="/images/magasin.jpg" alt="Notre boutique" width={800} height={500} className="rounded-2xl shadow-lg transition-transform duration-500 ease-in-out hover:scale-110 hover:opacity-80" />
        <p>
          <span className="text-gray-700 text-lg">Adresse :<br /> </span> 12 rue de la Mode, <br />75001 Paris <br /><br />
          <span className="text-gray-700 text-lg">Horaires :<br /></span> Lundi au Samedi de 10h à 19h <br /> <br />
          <span className="text-gray-700 text-lg">Contact :<br /></span> 01 23 45 67 89
        </p>
        </div>
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
      <a href="#header" className="flex left-[calc(50%-16px)] items-center justify-center text-white animate-bounce mt-4 pt-4 mb-3">
        <ChevronUpIcon className="w-8 h-8 text-rose-400 animate-bounce" />
        </a>
    </div>
  );
};

