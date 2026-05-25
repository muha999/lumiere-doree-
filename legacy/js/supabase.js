// ===========================
// CONNEXION À SUPABASE
// ===========================

const SUPABASE_URL = "https://slwnagxuexjijqbfxgpe.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNsd25hZ3h1ZXhqaWpxYmZ4Z3BlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk0NjAyNTQsImV4cCI6MjA5NTAzNjI1NH0.-Q4xvNl7owbTGy3zVdMpKZMbcEd3aRBq6SQVqL2gd8w";

const { createClient } = supabase;
const supabaseClient = createClient(SUPABASE_URL, SUPABASE_KEY);