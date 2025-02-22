import Header from "../Component/Header"

const products = [
    {
      id: 1,
      name: 'Basic Tee',
      href: '/Detail-product',
      imageSrc: 'images/20.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '35 €',
      color: 'Black',
    },

    {
        id: 2,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'images/18.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '35 €',
        color: 'Black',
      },

      {
        id: 3,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'images/23.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '35 €',
        color: 'Black',
      },

      {
        id: 4,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'images/15.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '35 €',
        color: 'Black',
      },

      {
        id: 5,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'images/19.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '35 €',
        color: 'Black',
      },

      {
        id: 6,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'images/16.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '35 €',
        color: 'Black',
      },

      {
        id: 7,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'images/21.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '35 €',
        color: 'Black',
      },

      {
        id: 8,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'images/22.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '35 €',
        color: 'Black',
      },

      
      {
        id: 9,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'images/17.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '35 €',
        color: 'Black',
      },

      
      {
        id: 10,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'images/11.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '35 €',
        color: 'Black',
      },

      
      {
        id: 11,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'images/08.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '35 €',
        color: 'Black',
      },

      
      {
        id: 12,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'images/02.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '35 €',
        color: 'Black',
      },

      
      {
        id: 13,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'images/05.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '35 €',
        color: 'Black',
      },

      
      {
        id: 14,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'images/14.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '35 €',
        color: 'Black',
      },

      
      {
        id: 15,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'images/06.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '35 €',
        color: 'Black',
      },

      
      {
        id: 16,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'images/03.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '35 €',
        color: 'Black',
      },

      
      {
        id: 17,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'images/01.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '35 €',
        color: 'Black',
      },
  ]
  
  export default function Products() {
    return (
      <div id="Products">
        <Header />
        
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-center mt-5 mb-6 bg-gradient-to-tr from-rose-400 to-gray-400 bg-clip-text text-transparent hover:animate-bounce">Notre dressing</h1>
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Découvrez nos vêtements et accessoires seconde main</h2>
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
                  <button className="bg-rose-400 hover:bg-rose-100 text-sm font-medium text-white px-5">{product.price}</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }