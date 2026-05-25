import WhatsAppIcon from './icons/WhatsAppIcon.jsx'
import { lienWhatsApp } from '../utils/whatsapp.js'

export default function Modal({ produit, onClose }) {
  if (!produit) return null

  return (
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center bg-black/85 p-8 max-md:p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-nom"
    >
      <div
        className="relative grid max-h-[90vh] w-full max-w-[900px] grid-cols-2 overflow-hidden border border-or/20 bg-[#111] max-md:max-h-[95vh] max-md:grid-cols-1 max-md:overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 flex h-9 w-9 cursor-pointer items-center justify-center border border-or/30 text-or transition-all duration-300 hover:bg-or hover:text-noir"
          aria-label="Fermer"
        >
          ✕
        </button>

        <div className="aspect-square overflow-hidden max-md:aspect-[4/3]">
          {produit.image_url ? (
            <img
              src={produit.image_url}
              alt={produit.nom}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#111] to-[#1a1a1a] font-serif text-8xl text-or/15">
              ◆
            </div>
          )}
        </div>

        <div className="flex flex-col justify-center gap-4 p-10 max-md:p-6">
          <div className="text-[0.65rem] tracking-[0.3em] text-or uppercase">
            {produit.categorie}
          </div>
          <h2 id="modal-nom" className="font-serif text-3xl font-light text-creme leading-tight max-md:text-2xl">
            {produit.nom}
          </h2>
          <div className="text-xl tracking-[0.1em] text-or">
            {produit.prix.toLocaleString('fr-FR')} FCFA
          </div>
          <p className="text-[0.9rem] leading-relaxed text-gris">
            {produit.description || 'Aucune description disponible.'}
          </p>
          <a
            href={lienWhatsApp(produit)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-or inline-flex items-center gap-2 self-start"
          >
            <WhatsAppIcon className="h-[18px] w-[18px] fill-current" />
            Commander sur WhatsApp
          </a>
        </div>
      </div>
    </div>
  )
}
