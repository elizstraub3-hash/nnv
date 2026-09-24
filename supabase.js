// Conexão com o banco de dados (Supabase) — NNV by Neneve
// A chave "publicável" é feita para ficar no site; as edições são protegidas por login.
const SUPABASE_URL = "https://vxsukhtnlvddrrhxiziv.supabase.co";
const SUPABASE_KEY = "sb_publishable_H_Tb4Q5IDLuG_IJttrck8A_oS-D-6bS";

try {
  if (window.supabase && window.supabase.createClient) {
    window.sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
  }
} catch (e) {
  console.warn("Supabase não inicializado:", e);
}
