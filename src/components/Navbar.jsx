import { useState } from 'react'

const liens = [
  { href: '#catalogue', label: 'Catalogue' },
  { href: '#about', label: 'À Propos' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [menuOuvert, setMenuOuvert] = useState(false)

  const fermerMenu = () => setMenuOuvert(false)

  return (
    <nav
      className="fixed top-0 right-0 left-0 z-[100] flex items-center justify-between border-b border-or/15 px-16 py-6 max-md:px-6 max-md:py-5"
      style={{ background: 'linear-gradient(90deg, #000000, #322700)' }}
    >
      <div className="font-serif text-[1.8rem] font-light tracking-[0.3em] text-or uppercase max-md:text-xl max-md:tracking-[0.15em]">
        Lumière <span className="text-or-clair italic">Dorée</span>
      </div>

      <ul
        className={`flex list-none gap-12 max-md:fixed max-md:inset-0 max-md:z-[150] max-md:flex-col max-md:items-center max-md:justify-center max-md:gap-10 max-md:bg-noir/97 ${
          menuOuvert ? 'max-md:flex' : 'max-md:hidden'
        }`}
      >
        {liens.map(({ href, label }) => (
          <li key={href}>
            <a
              href={href}
              onClick={fermerMenu}
              className="text-creme no-underline text-[0.75rem] tracking-[0.2em] uppercase transition-colors duration-300 hover:text-or max-md:text-xl max-md:tracking-[0.3em]"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>

      <button
        type="button"
        className={`hidden max-md:flex max-md:flex-col max-md:gap-[5px] max-md:border-0 max-md:bg-transparent max-md:p-[5px] max-md:z-[200] ${
          menuOuvert ? '' : ''
        }`}
        onClick={() => setMenuOuvert((o) => !o)}
        aria-label={menuOuvert ? 'Fermer le menu' : 'Ouvrir le menu'}
        aria-expanded={menuOuvert}
      >
        <span
          className={`block h-0.5 w-[25px] bg-or transition-all duration-300 ${
            menuOuvert ? 'rotate-45 translate-x-[5px] translate-y-[5px]' : ''
          }`}
        />
        <span
          className={`block h-0.5 w-[25px] bg-or transition-all duration-300 ${
            menuOuvert ? 'opacity-0' : ''
          }`}
        />
        <span
          className={`block h-0.5 w-[25px] bg-or transition-all duration-300 ${
            menuOuvert ? '-rotate-45 translate-x-[5px] -translate-y-[5px]' : ''
          }`}
        />
      </button>
    </nav>
  )
}
