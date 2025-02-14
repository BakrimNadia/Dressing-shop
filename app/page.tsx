'use client'

import Category from './Component/Category'
import SectionCommunity from './Component/SectionCommunity'
import Header from './Component/Header'
import Banner from './Component/Banner'
import ModalCookies from './Component/ModalCookies'




export default function Home() {


  return (
    <div>
    <Header />

    <div className="relative isolate pt-14 mb-5">
  <Banner />
      <div 
      style={{
        backgroundImage: 'url(images/homepage.jpeg)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        position: 'relative',
        zIndex: 1,
      }}
       
     className="max-w-full py-32 sm:py-48 lg:py-56">
        
        <div className="mb-8 flex justify-center sm:justify-center">
        
        
        <div className="text-left">  
          <h1 className="px-2 text-balance text-5xl font-semibold tracking-tight text-white sm:text-3xl sm:leading-[3.5rem] sm:text-center">
          Bienvenue au <br /> <span className="text-rose-200">Dressing de Nadia</span>
          </h1>
          <p className="px-2 mt-8 text-pretty text-lg font-medium text-white sm:text-3xl sm:text-center">
            La boutique en ligne de vêtements et accessoires pour femmes
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6 grid-cols-3 sm:gap-x-4 sm:grid-cols-1">
            <a
              href="#"
              className="rounded-md bg-white/20 backdrop-blur-sm px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-rose-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Accès boutique
            </a>

            <a
              href="#community"
              className="rounded-md bg-white/20 backdrop-blur-sm px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-rose-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              La communauté
            </a>
           
          </div>
        </div>

        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
      >
      </div>
      <div id="category">
   <Category />
   </div>
   <div id="community">
   <SectionCommunity />
   </div>
   <ModalCookies />
    </div> 
   
  </div>
 
  );
}
