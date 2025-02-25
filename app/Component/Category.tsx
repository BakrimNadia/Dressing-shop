'use client';

const callouts = [
    {
      name: 'Les Robes',
      description: 'Decouvrez nos robes pour toutes les occasions',
      imageSrc: 'images/robes-cintre.jpg',
      imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
      href: '/Products',
    },
    {
      name: 'Les Accessoires',
      description: 'Ajoutez une touche de style à votre tenue',
      imageSrc: 'images/accessoires.jpg',
      imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
      href: '/Products',
    },
    {
      name: 'les bijoux',
      description: 'Des bijoux à la fois élégants et intemporels',
      imageSrc: 'images/bijoux.jpg',
      imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
      href: '/Products',
    },
  ]
  
  export default function Category() {
    return (
      <div id="Collection">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
            <h2 className="text-2xl font-bold text-gray-900">Collections</h2>
  
            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
              {callouts.map((callout) => (
                <div key={callout.name} className="group relative">
                  <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                    <img
                      alt={callout.imageAlt}
                      src={callout.imageSrc}
                      className="h-full w-full object-cover object-center transition-transform duration-500 ease-in-out hover:scale-110"
                    />
                  </div>
                  <h3 className="mt-6 text-sm text-gray-500">
                    <a href={callout.href}>
                      <span className="absolute inset-0" />
                      {callout.name}
                    </a>
                  </h3>
                  <p className="text-base font-semibold text-gray-900">{callout.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }