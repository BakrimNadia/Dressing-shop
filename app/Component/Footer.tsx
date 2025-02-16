import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <div className="relative isolate overflow-hidden text-gray-500 bg-gradient-to-tr from-[#f5efe6] via-[#f8d7da] to-[#d1d5db]
 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="text-4xl font-semibold tracking-tight">Inscrivez-vous à la newsletter</h2>
            <p className="mt-4 text-lg">
              Retrouvez l&apos;actualité hebdomadaire de notre communauté.
            </p>
            <div className="mt-6 flex max-w-md gap-x-4">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                required
                placeholder="Votre email"
                autoComplete="email"
                className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-rose-500 sm:text-sm sm:leading-6"
              />
              <button
                type="submit"
                className="flex-none rounded-md bg-rose-400 text-white px-3.5 py-2.5 text-sm font-semibold shadow-sm hover:bg-rose-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-500"
              >
                Souscrire
              </button>
            </div>
          </div>
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
            <div className="flex flex-col items-start">
              <dt className="mt-4 font-semibold"></dt>
              <dd className="mt-2 leading-7">
                Nos Collections
              </dd>
              <dd className="mt-2 leading-7">
                Notre communauté
              </dd>
              <dd className="mt-2 leading-7">
                FAQ
              </dd>
              <dd className="mt-2 leading-7">
                Contact
              </dd>
            </div>
            <div className="flex flex-col items-start">
              <dt className="mt-4 font-semibold"></dt>
              <dd className="mt-2 leading-7">
                Nos magasins
              </dd>
              <dd className="mt-2 leading-7">
               Notre politique de remboursement
              </dd>
              <dd className="mt-2 leading-7">
                Nous rejoindre
              </dd>
              
            </div>
          </dl>
        </div>
      </div>
      <div aria-hidden="true" className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6">
      </div>
      <div className="px-6 mt-10 text-center font-bold">Suivez-nous sur les réseaux</div>
      <div className="mt-6 flex justify-center gap-x-6">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className=" hover:text-gray-400">
          <FontAwesomeIcon icon={faFacebook} className="h-6 w-6" />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
          <FontAwesomeIcon icon={faInstagram} className="h-6 w-6" />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
          <FontAwesomeIcon icon={faTwitter} className="h-6 w-6" />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
          <FontAwesomeIcon icon={faLinkedin} className="h-6 w-6" />
        </a>
      </div>
      <div className="px-4 mt-5 text-center font-bold">@ Tous droits réservés</div>
    </div>
  )
}