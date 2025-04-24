"use client";

import { ChevronDownIcon, ChevronUpIcon, TruckIcon, ShieldCheckIcon, CreditCardIcon } from "@heroicons/react/24/solid";
import Category from "./Component/Category";
import SectionCommunity from "./Component/SectionCommunity";
import Header from "./Component/Header";
import Banner from "./Component/Banner";
import ModalCookies from "./Component/ModalCookies";

export default function Home() {
  return (
    <div>
      <Header />

      <div className="relative isolate">
        <Banner />
        <div
          style={{
            backgroundImage: "url(images/homepage.jpeg)",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            position: "relative",
            
          }}
          className="max-w-full py-32 sm:py-48 lg:py-56"
        >
          <div className="mb-8 flex justify-center sm:justify-center">
            <div className="text-center">
              <h1 className="px-2 text-balance text-5xl font-semibold tracking-tight text-white sm:text-3xl sm:leading-[3.5rem] sm:text-center hover:scale-105 transition-transform duration-300">
                Bienvenue au <br />
                <span className="text-rose-100 animate-pulse hover:scale-105 transition-transform duration-300">
                  Dressing de Nadia
                </span>
              </h1>
              <p className="px-2 mt-8 text-pretty text-lg font-medium text-white sm:text-3xl sm:text-center">
                Boutique vêtements et accessoires seconde main pour femmes
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6 grid-cols-3 sm:gap-x-4 sm:grid-cols-1">
                <a
                  href="/Products"
                  className="rounded-md bg-white/20 backdrop-blur-sm px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-rose-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Accès boutique
                </a>

                <a
                  href="#community"
                  className="rounded-md bg-white/20 backdrop-blur-sm px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-rose-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  La communauté
                </a>
              </div>
            </div>
          </div>
          <a
            href="#category"
            className="flex absolute bottom-4 left-[calc(50%-16px)] items-center justify-center text-white animate-bounce"
          >
            <ChevronDownIcon className="w-8 h-8 text-white animate-bounce" />
          </a>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        ></div>

        {/* ============================= CATEGORY  & COMMUNITY ============================= */}
        <div id="category">
          <Category />
        </div>
        <div id="community" className="relative">
          <SectionCommunity />
          <a
            href="#header"
            className="flex absolute bottom-4 left-[calc(50%-16px)] items-center justify-center text-white animate-bounce"
          >
            <ChevronUpIcon className="w-8 h-8 text-rose-400 animate-bounce" />
          </a>
        </div>

        {/* ============================= INFO STRIP ============================= */}
        <section className="bg-rose-50/60 backdrop-blur-sm py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            {/* Livraison rapide */}
            <div className="flex flex-col items-center">
              <TruckIcon className="w-12 h-12 text-rose-400 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Livraison rapide</h3>
              <p className="text-sm text-gray-600 max-w-xs">
                Expédition sous 48h partout en France &amp; retours faciles en point
                relais.
              </p>
            </div>

            {/* Paiement sécurisé */}
            <div className="flex flex-col items-center">
              <ShieldCheckIcon className="w-12 h-12 text-rose-400 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Paiement sécurisé</h3>
              <p className="text-sm text-gray-600 max-w-xs">
                Transactions cryptées SSL et prise en charge de toutes les cartes
                bancaires &amp; PayPal.
              </p>
            </div>

            {/* Seconde main de qualité */}
            <div className="flex flex-col items-center">
              <CreditCardIcon className="w-12 h-12 text-rose-400 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Qualité contrôlée</h3>
              <p className="text-sm text-gray-600 max-w-xs">
                Chaque pièce est soigneusement inspectée et décrite pour vous
                garantir une expérience premium du seconde main.
              </p>
            </div>
          </div>
        </section>

        <ModalCookies />
      </div>
    </div>
  );
}
