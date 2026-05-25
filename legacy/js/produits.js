// ===========================
// CONFIGURATION
// ===========================
const WHATSAPP_NUM = "221771553545"; // Ton vrai numéro

// Stocker tous les produits
let tousLesProduits = [];

// ===========================
// MESSAGE WHATSAPP
// ===========================
function genererMessageWA(produit) {
  return encodeURIComponent(
    "Bonjour *Lumière Dorée* 👋\n\n" +
    "Je souhaite commander le produit suivant :\n\n" +
    "🛍️ *Produit :* " + produit.nom + "\n" +
    "🏷️ *Catégorie :* " + produit.categorie + "\n" +
    "💰 *Prix :* " + produit.prix.toLocaleString("fr-FR") + " FCFA\n" +
    (produit.description ? "📝 *Description :* " + produit.description + "\n" : "") +
    "\nMerci !"
  );
}

// ===========================
// FILTRES
// ===========================
function filtrer(categorie, btn) {
  document.querySelectorAll(".filtre-btn").forEach(b => b.classList.remove("actif"));
  btn.classList.add("actif");

  const cartes = document.querySelectorAll(".produit-card");
  cartes.forEach(carte => {
    if (categorie === "tous" || carte.dataset.categorie === categorie) {
      carte.classList.remove("cache");
    } else {
      carte.classList.add("cache");
    }
  });
}

// ===========================
// GÉNÉRER LES FILTRES
// ===========================
function genererFiltres(produits) {
  const categories = [...new Set(produits.map(p => p.categorie))];
  const container = document.getElementById("filtres");

  container.innerHTML = `
    <button class="filtre-btn actif" onclick="filtrer('tous', this)">Tout</button>
    ${categories.map(cat => `
      <button class="filtre-btn" onclick="filtrer('${cat}', this)">${cat}</button>
    `).join("")}
  `;
}

// ===========================
// MODALE
// ===========================
function ouvrirModal(produit) {
  document.getElementById("modal-image").src = produit.image_url || "";
  document.getElementById("modal-cat").textContent = produit.categorie;
  document.getElementById("modal-nom").textContent = produit.nom;
  document.getElementById("modal-prix").textContent = produit.prix.toLocaleString("fr-FR") + " FCFA";
  document.getElementById("modal-desc").textContent = produit.description || "Aucune description disponible.";
  document.getElementById("modal-wa").href = "https://wa.me/" + WHATSAPP_NUM + "?text=" + genererMessageWA(produit);
  document.getElementById("modal").classList.add("actif");
  document.body.style.overflow = "hidden";
}

function fermerModal() {
  document.getElementById("modal").classList.remove("actif");
  document.body.style.overflow = "";
}

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("modal").addEventListener("click", function(e) {
    if (e.target === this) fermerModal();
  });
});

// ===========================
// AFFICHER LES PRODUITS
// ===========================
async function chargerProduits() {

  const { data: produits, error } = await supabaseClient
    .from("produits")
    .select("*")
    .eq("disponible", true);

  const container = document.getElementById("liste-produits");

  if (error || !produits || produits.length === 0) {
    container.innerHTML = `
      <div class="produits-vide">
        <p>Aucun produit disponible pour le moment.</p>
      </div>
    `;
    return;
  }

  tousLesProduits = produits;
  genererFiltres(produits);

  container.innerHTML = produits.map(function(produit, index) {
    return `
      <div class="produit-card"
           data-categorie="${produit.categorie}"
           onclick="ouvrirModal(tousLesProduits[${index}])">
        <div class="produit-img-wrap">
          ${produit.image_url
            ? `<img src="${produit.image_url}" alt="${produit.nom}" />`
            : `<div class="produit-placeholder">&#9672;</div>`
          }
        </div>
        <div class="produit-overlay">
          <div class="produit-cat">${produit.categorie}</div>
          <div class="produit-nom">${produit.nom}</div>
          <div class="produit-prix">${produit.prix.toLocaleString("fr-FR")} FCFA</div>
          <a href="https://wa.me/${WHATSAPP_NUM}?text=${genererMessageWA(produit)}"
             class="btn-whatsapp"
             target="_blank"
             onclick="event.stopPropagation()">
            <svg viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Commander
          </a>
        </div>
      </div>
    `;
  }).join("");
}

document.addEventListener("DOMContentLoaded", chargerProduits);