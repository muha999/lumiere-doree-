/**
 * Client Supabase — prêt pour les prochaines étapes (Auth, CRUD, Storage).
 * Ne pas utiliser pour l’instant : les produits viennent de données mockées.
 *
 * Variables d’environnement (.env.local, jamais commitées) :
 *   VITE_SUPABASE_URL
 *   VITE_SUPABASE_ANON_KEY
 */
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase =
  supabaseUrl && supabaseAnonKey
    ? createClient(supabaseUrl, supabaseAnonKey)
    : null
