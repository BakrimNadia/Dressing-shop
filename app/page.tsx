'use client'

import Category from './Component/Category'
import Community from './Component/Community'
import Header from './Component/Header'
import Background from './Component/Background'
import Banner from './Component/Banner'




export default function Home() {


  return (
    <div className="bg-white">
    <Header />

    <div className="relative isolate px-6 pt-14 lg:px-8">
  <Background /><Banner />
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
        
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
        
        
        <div className="text-left">  
          <h1 className="text-balance text-5xl font-semibold tracking-tight text-white sm:text-7xl">
          Bienvenue au <br /> <span className="text-rose-200">Dressing de Nadia</span>
          </h1>
          <p className="mt-8 text-pretty text-lg font-medium text-white sm:text-xl/8">
            La boutique en ligne de vêtements et accessoires pour femmes
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-white/20 backdrop-blur-sm px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-rose-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Accès boutique
            </a>
            <a
              href="#category"
              className="rounded-md bg-white/20 backdrop-blur-sm px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-rose-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Nos collections
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
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
        />
      </div>
      <div id="category">
   <Category />
   </div>
   <div id="community">
   <Community />
   </div>
    </div> 
   
  </div>
 
  );
}
