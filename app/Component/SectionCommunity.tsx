'use client' 

export default function SectionCommunity() {
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
                  href="/Community"
                  className="inline-block rounded-md border border-transparent bg-rose-400 px-8 py-3 text-center font-medium text-white hover:bg-rose-100"
                >
                  Adhérer
                </a>
              </div>
            </div>

            {/* Images */}
            <div className="mt-10 lg:mt-0">
                {/* Colonne 1 */}
                <div className="h-300 w-400 overflow-hidden rounded-lg hover:opacity-75">
                  <img
                    alt=""
                    src="images/shopping.jpg"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

