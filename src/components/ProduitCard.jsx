import WhatsAppIcon from './icons/WhatsAppIcon.jsx'
import { lienWhatsApp } from '../utils/whatsapp.js'

export default function ProduitCard({ produit, onClick }) {
  return (
    <article
      role="button"
      tabIndex={0}
      onClick={() => onClick(produit)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onClick(produit)
        }
      }}
      className="group relative aspect-[3/4] cursor-pointer overflow-hidden bg-[#111]"
    >
      <div className="h-full w-full">
        {produit.image_url ? (
          <img
            src={produit.image_url}
            alt={produit.nom}
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.07]"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#111] to-[#1a1a1a] font-serif text-6xl text-or/15">
            ◆
          </div>
        )}
      </div>

      <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-noir/92 via-transparent to-transparent p-8">
        <div className="mb-1.5 text-[0.65rem] tracking-[0.3em] text-or uppercase">
          {produit.categorie}
        </div>
        <div className="mb-1.5 font-serif text-2xl text-creme">{produit.nom}</div>
        <div className="mb-5 text-[0.85rem] tracking-[0.1em] text-or-clair">
          {produit.prix.toLocaleString('fr-FR')} FCFA
        </div>
        <a
          href={lienWhatsApp(produit)}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="inline-flex w-fit translate-y-2.5 items-center gap-2 bg-[#25D366] px-6 py-2.5 text-[0.75rem] font-medium tracking-[0.1em] text-white uppercase opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 hover:bg-[#1da851] no-underline"
        >
          <WhatsAppIcon />
          Commander
        </a>
      </div>
    </article>
  )
}
