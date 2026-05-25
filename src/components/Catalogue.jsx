import { useMemo, useState } from 'react'
import SectionTitle from './ui/SectionTitle.jsx'
import Filtres from './Filtres.jsx'
import ProduitCard from './ProduitCard.jsx'
import Modal from './Modal.jsx'
import { produitsMock } from '../data/produitsMock.js'

export default function Catalogue() {
  const [filtreActif, setFiltreActif] = useState('tous')
  const [produitSelectionne, setProduitSelectionne] = useState(null)

  // Étape suivante : remplacer produitsMock par supabase.from('produits')...
  const produits = produitsMock

  const categories = useMemo(
    () => [...new Set(produits.map((p) => p.categorie))],
    [produits],
  )

  const produitsFiltres = useMemo(() => {
    if (filtreActif === 'tous') return produits
    return produits.filter((p) => p.categorie === filtreActif)
  }, [produits, filtreActif])

  const ouvrirModal = (produit) => {
    setProduitSelectionne(produit)
    document.body.style.overflow = 'hidden'
  }

  const fermerModal = () => {
    setProduitSelectionne(null)
    document.body.style.overflow = ''
  }

  return (
    <>
      <section
        id="catalogue"
        className="bg-gradient-to-b from-noir to-[#111] px-16 py-32 max-md:px-6 max-md:py-20"
      >
        <SectionTitle label="✦ Notre Sélection ✦">
          La <em className="text-or-clair not-italic">Collection</em> Prestige
        </SectionTitle>

        <Filtres
          categories={categories}
          filtreActif={filtreActif}
          onFiltreChange={setFiltreActif}
        />

        {produitsFiltres.length === 0 ? (
          <div className="animate-scroll py-16 text-center font-serif text-2xl text-gris">
            <p>Aucun produit disponible pour le moment.</p>
          </div>
        ) : (
          <div className="animate-scroll mx-auto grid max-w-[1100px] grid-cols-3 gap-0.5 max-md:grid-cols-2">
            {produitsFiltres.map((produit) => (
              <ProduitCard key={produit.id} produit={produit} onClick={ouvrirModal} />
            ))}
          </div>
        )}
      </section>

      <Modal produit={produitSelectionne} onClose={fermerModal} />
    </>
  )
}
