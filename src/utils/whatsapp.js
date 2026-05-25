import { WHATSAPP_NUM } from '../constants/config.js'

export function genererMessageWA(produit) {
  const texte =
    'Bonjour *Lumière Dorée* 👋\n\n' +
    'Je souhaite commander le produit suivant :\n\n' +
    '🛍️ *Produit :* ' +
    produit.nom +
    '\n' +
    '🏷️ *Catégorie :* ' +
    produit.categorie +
    '\n' +
    '💰 *Prix :* ' +
    produit.prix.toLocaleString('fr-FR') +
    ' FCFA\n' +
    (produit.description ? '📝 *Description :* ' + produit.description + '\n' : '') +
    '\nMerci !'

  return encodeURIComponent(texte)
}

export function lienWhatsApp(produit) {
  return `https://wa.me/${WHATSAPP_NUM}?text=${genererMessageWA(produit)}`
}
