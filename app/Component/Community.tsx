export default function Community() {
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-8">
            {/* Texte */}
            <div className="sm:max-w-lg lg:max-w-md">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Rejoignez la communauté
              </h1>
              <p className="mt-4 text-xl text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat aspernatur eum dolore, quam unde fugit!
              </p>
              <div className="mt-10">
                <a
                  href="#"
                  className="inline-block rounded-md border border-transparent bg-pink-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700"
                >
                  Adhérer
                </a>
              </div>
            </div>

            {/* Images */}
            <div className="mt-10 lg:mt-0">
              <div className="grid grid-cols-2 gap-4 lg:grid-cols-3 lg:gap-6 lg:px-4">
                {/* Colonne 1 */}
                <div className="h-60 w-40 overflow-hidden rounded-lg lg:h-64 lg:w-44">
                  <img
                    alt=""
                    src="https://tailwindui.com/plus/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="h-60 w-40 overflow-hidden rounded-lg lg:h-64 lg:w-44">
                  <img
                    alt=""
                    src="https://tailwindui.com/plus/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg"
                    className="h-full w-full object-cover object-center"
                  />
                </div>

                {/* Colonne 2 (affichée uniquement sur desktop) */}
                <div className="hidden lg:block h-60 w-40 overflow-hidden rounded-lg lg:h-64 lg:w-44">
                  <img
                    alt=""
                    src="https://tailwindui.com/plus/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg"
                    className="h-full w-full object-cover object-center"
                  />
                </div>

                <div className="hidden lg:block h-60 w-40 overflow-hidden rounded-lg lg:h-64 lg:w-44">
                  <img
                    alt=""
                    src="https://tailwindui.com/plus/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg"
                    className="h-full w-full object-cover object-center"
                  />
                </div>

                {/* Colonne 3 (affichée uniquement sur desktop) */}
                <div className="hidden lg:block h-60 w-40 overflow-hidden rounded-lg lg:h-64 lg:w-44">
                  <img
                    alt=""
                    src="https://tailwindui.com/plus/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg"
                    className="h-full w-full object-cover object-center"
                  />
                </div>

                <div className="hidden lg:block h-60 w-40 overflow-hidden rounded-lg lg:h-64 lg:w-44">
                  <img
                    alt=""
                    src="https://tailwindui.com/plus/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
