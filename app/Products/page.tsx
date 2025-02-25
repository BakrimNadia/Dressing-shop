import { ChevronUpIcon } from "@heroicons/react/24/solid"
import Header from "../Component/Header"

const products = [
    {
      id: 1,
      name: 'Robe boheme',
      href: '/Detail-product',
      imageSrc: 'images/20.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '25 €',
      color: 'Blanche',
    },

    {
        id: 2,
        name: 'Robe d\été',
        href: '#',
        imageSrc: 'images/18.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '29 €',
        color: 'Rouge',
      },

      {
        id: 3,
        name: 'Robe courte',
        href: '#',
        imageSrc: 'images/23.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '35 €',
        color: 'Blanche',
      },

      {
        id: 4,
        name: 'Robe mongue',
        href: '#',
        imageSrc: 'images/15.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '35 €',
        color: 'Marron',
      },

      {
        id: 5,
        name: 'Robe de soirée',
        href: '#',
        imageSrc: 'images/19.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '35 €',
        color: 'Verte',
      },

      {
        id: 6,
        name: 'Jupe longue',
        href: '#',
        imageSrc: 'images/16.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '35 €',
        color: 'Verte kaki',
      },

      {
        id: 7,
        name: 'Jupe plissée',
        href: '#',
        imageSrc: 'images/21.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '15 €',
        color: 'Rose',
      },

      {
        id: 8,
        name: 'Veste tailleur',
        href: '#',
        imageSrc: 'images/22.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '15 €',
        color: 'Camel',
      },

      
      {
        id: 9,
        name: 'Veste tailleur',
        href: '#',
        imageSrc: 'images/17.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '30 €',
        color: 'Grise',
      },

      
      {
        id: 10,
        name: 'Short jeans',
        href: '#',
        imageSrc: 'images/11.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '10 €',
        color: 'Bleu',
      },

      
      {
        id: 11,
        name: 'Short jeans',
        href: '#',
        imageSrc: 'images/08.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '10 €',
        color: 'Bleu',
      },

      
      {
        id: 12,
        name: 'Sac de plage',
        href: '#',
        imageSrc: 'images/02.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '15 €',
        color: 'Blanc',
      },

      
      {
        id: 13,
        name: 'sac à main',
        href: '#',
        imageSrc: 'images/05.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '25 €',
        color: 'Gris',
      },

      
      {
        id: 14,
        name: 'Sac à main',
        href: '#',
        imageSrc: 'images/14.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '29 €',
        color: 'Blanc',
      },

      
      {
        id: 15,
        name: 'Boucles d\'oreilles',
        href: '#',
        imageSrc: 'images/06.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '19 €',
        color: 'Noir et multicolor',
      },

      
      {
        id: 16,
        name: 'Bracelet',
        href: '#',
        imageSrc: 'images/03.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '35 €',
        color: 'Noir et Marron',
      },

      
      {
        id: 17,
        name: 'Collier',
        href: '#',
        imageSrc: 'images/01.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '35 €',
        color: 'Gris',
      },
  ]
  
  export default function Products() {
    return (
      <div id="Products">
        <Header />
        
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-center mt-5 mb-6 bg-gradient-to-tr from-rose-400 to-gray-400 bg-clip-text text-transparent hover:animate-bounce">Notre dressing</h1>
          <h2 className="text-2xl font-bold text-center tracking-tight text-gray-900">Découvrez nos vêtements et accessoires seconde main</h2>
          <h3 className="mt-2 text-sm text-gray-500">Nos vêtements et accessoires</h3>
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    alt={product.imageAlt}
                    src={product.imageSrc}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                  </div>
                  <button className="text-sm font-medium text-white px-5  bg-rose-400 hover:!bg-rose-100">{product.price}</button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <a href="#header" className="flex left-[calc(50%-16px)] items-center justify-center text-white animate-bounce mb-3">
        <ChevronUpIcon className="w-8 h-8 text-rose-400 animate-bounce" />
        </a>
      </div>
    )
  }