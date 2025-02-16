'use client'

import { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'

export default function ModalLogin() {
  const [open, setOpen] = useState(true)

  return (
    <Dialog open={open} onClose={setOpen} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95"
          >
                     <button
                        type="button"
                        onClick={() => setOpen(false)}
                        className="absolute right-4 top-4 text-gray-400 hover:text-gray-500"
                      >
                        <span className="absolute -inset-0.5" />
                        <span className="sr-only">Close panel</span>
                        <XMarkIcon aria-hidden="true" className="size-6" />
                      </button>
             <div className="sm:flex sm:items-center justify-center mt-5 mb-5">
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left mb-5 mx-5">
                  <DialogTitle as="h3" className="text-base text-center font-semibold text-gray-900">
                    Connexion
                  </DialogTitle>
                    <div className="mt-2">
                        <p className="text-sm text-gray-500 text-center">
                        Veuillez vous connecter
                        </p>
                  <form className="mt-2">
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
                      Email
                    </label>
                    <div className="mt-1">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        autoComplete="email"
                        required
                        className= "block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6"
                        />
                    </div>

                    <label htmlFor="password" className="block mt-4 text-sm font-semibold text-gray-700">
                      Mot de passe
                    </label>
                    <div className="mt-1">
                      <input
                        type="password"
                        id="password"
                        name="password"
                        autoComplete="current-password"
                        required
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6"
                   />
                  </div>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500 mb-2">
                    Pas encore de compte ? <a href="#" className="font-semibold text-rose-500">Inscrivez-vous</a>.
                    </p>
                  </div>
                    <div className="mt-2">
                        <button
                            type="submit"
                            className="block w-full rounded-md bg-rose-400 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-rose-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-400"
                        >
                            Connexion
                        </button>
                    </div>

                    </form>
                </div>
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  )
}
