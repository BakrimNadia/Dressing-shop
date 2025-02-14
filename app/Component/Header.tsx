'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon, ShoppingBagIcon, HeartIcon } from '@heroicons/react/24/outline' // Import des icônes supplémentaires
import ShoppingBagModal from './ShoppingBagModal'

const navigation = [
    { name: 'Accueil', href: '/' },
    { name: 'Nos Produits', href: '/Products' },
    { name: 'Communauté', href: '#' },
    { name: 'A propos', href: '#' },
    { name: 'Contact', href: '/Contact' },
]

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [isOpen, setIsOpen] = useState(false);

    return (
      <header className="absolute inset-x-0 top-0 z-50 bg-gradient-to-tr from-[#f5efe6] via-[#f8d7da] to-[#d1d5db]">
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8 pt-2">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src="images/logo-dressing2.png"
                className="h-8 w-auto"
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900">
                {item.name}
              </a>
            ))}
          </div>

          {/* Icons for Wishlist and Cart */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center gap-x-6">
            {/* Wishlist Icon */}
            <a href="#" className="text-gray-700 hover:text-gray-900">
              <HeartIcon className="h-6 w-6" aria-hidden="true" />
            </a>

            {/* Cart Icon */}
            <div>
         {/* Bouton pour ouvrir la modale */}
         <button
             className="text-gray-700 hover:text-gray-900"
             title="Shopping Bag"
             onClick={() => setIsOpen(true)}
         >
        <ShoppingBagIcon className="h-6 w-6" aria-hidden="true" />
         </button>

       {/* Affichage de la modale si isOpen est true */}
      {isOpen && <ShoppingBagModal />}
      </div>


            {/* Log in button */}
            <button className="bg-rose-400 rounded-md px-3 py-2">
            <a href="#" className="text-sm font-bold leading-6 text-white rounded-md px-3 py-2">
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
            </button>
          </div>
        </nav>
        
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50 mb-2" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gradient-to-tr from-[#f5efe6] via-[#f8d7da] to-[#d1d5db] px-4 py-4 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  alt=""
                  src="images/logo-dressing2.png"
                  className="h-8 w-auto"
                />
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900">
              <HeartIcon className="h-6 w-6" aria-hidden="true" />
            </a>

            {/* Cart Icon */}
            <a href="#" className="text-gray-700 hover:text-gray-900">
              <ShoppingBagIcon className="h-6 w-6" aria-hidden="true" />
            </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className=" block rounded-md px-3.5 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-rose-100"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
    );
}
