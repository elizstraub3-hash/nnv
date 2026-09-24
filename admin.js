// ===== Painel NNV by Neneve =====
const ADMIN_EMAIL = "admin@neneve.app";
const BUCKET = "fotos";
const CAT_ORDER = ["Macaquinhos", "Conjuntos", "Shorts", "Leggings", "Regatas", "Baby Tee", "Sugestões de looks", "Acessórios"];
const DB_COLS = ["ordem", "categoria", "nome", "codigo", "preco", "preco_antigo", "tag", "esgotado", "sugestao_look", "nota", "cores", "tamanhos", "imagens"];

let STATE = [];
const $ = (s, r = document) => r.querySelector(s);
const esc = (s) => String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const num = (v) => (v === "" || v == null ? null : Number(String(v).replace(",", ".")));

const loginView = $("#loginView");
const panelView = $("#panelView");
const listEl = $("#list");
const toastEl = $("#toast");

function toast(msg) {
  toastEl.textContent = msg;
  toastEl.classList.add("show");
  clearTimeout(toast._t);
  toast._t = setTimeout(() => toastEl.classList.remove("show"), 2600);
}

// ---------- Sessão / Login ----------
async function boot() {
  if (!window.sb) {
    $("#loginMsg").textContent = "Erro ao conectar no banco. Recarregue a página.";
    return;
  }
  const { data } = await window.sb.auth.getSession();
  if (data && data.session) showPanel();
  else showLogin();
}

function showLogin() {
  loginView.hidden = false;
  panelView.hidden = true;
}
function showPanel() {
  loginView.hidden = true;
  panelView.hidden = false;
  loadAll();
}

$("#loginForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const btn = $("#loginBtn");
  const msg = $("#loginMsg");
  msg.textContent = "";
  btn.disabled = true;
  btn.textContent = "Entrando...";
  const { error } = await window.sb.auth.signInWithPassword({ email: ADMIN_EMAIL, password: $("#pw").value });
  btn.disabled = false;
  btn.textContent = "Entrar";
  if (error) {
    const m = (error.message || "").toLowerCase();
    if (m.includes("not confirmed")) msg.textContent = "E-mail não confirmado. No Supabase, confirme o usuário admin@neneve.app.";
    else if (m.includes("invalid")) msg.textContent = "Senha incorreta. Digite exatamente: neneve";
    else msg.textContent = "Erro: " + (error.message || "desconhecido");
    return;
  }
  showPanel();
});

$("#logoutBtn").addEventListener("click", async () => {
  await window.sb.auth.signOut();
  showLogin();
});

// ---------- Carregar produtos ----------
async function loadAll() {
  const { data, error } = await window.sb.from("produtos").select("*").order("ordem", { ascending: true }).order("criado_em", { ascending: true });
  if (error) {
    listEl.innerHTML = `<div class="hint">Erro ao carregar: ${esc(error.message)}<br>Confira se você já rodou o passo de configuração (SQL).</div>`;
    return;
  }
  STATE = (data || []).map((r) => ({
    ...r,
    cores: Array.isArray(r.cores) ? r.cores : [],
    tamanhos: Array.isArray(r.tamanhos) ? r.tamanhos : [],
    imagens: Array.isArray(r.imagens) ? r.imagens : [],
  }));
  $("#seedHint").hidden = STATE.length > 0;
  render();
}

// ---------- Render ----------
function catList() {
  return [...new Set([...CAT_ORDER, ...STATE.map((r) => r.categoria)])].filter(Boolean);
}

function render() {
  const cats = catList().map((c) => `<option value="${esc(c)}">`).join("");
  listEl.innerHTML =
    `<datalist id="catlist">${cats}</datalist>` +
    STATE.map((r, i) => productCard(r, i)).join("");
}

function productCard(r, i) {
  const imgs = r.imagens
    .map((src, k) => `<figure><img src="${esc(src)}" alt=""><button type="button" title="Remover" onclick="rmImg(${i},${k})">&times;</button></figure>`)
    .join("");
  const cores = r.cores
    .map(
      (c, k) => `<div class="color-row">
        <input class="field c-name" placeholder="Cor (ex: Preto)" value="${esc(c.name)}">
        <input type="color" class="c-hex" value="${esc(c.hex || "#141414")}">
        <input class="field c-sizes" placeholder="Tam. (ex: P,M)" value="${esc((c.sizes || []).join(","))}">
        <button type="button" class="icon-btn" title="Remover cor" onclick="rmColor(${i},${k})">&times;</button>
      </div>`
    )
    .join("");
  const isNew = !r.id;
  return `
  <div class="prod ${isNew ? "open" : ""}" data-idx="${i}">
    <div class="prod__head" onclick="if(!event.target.closest('button'))this.parentElement.classList.toggle('open')">
      <span class="prod__title">${esc(r.nome) || "(novo produto)"}
        ${r.esgotado ? '<span class="pill pill--out">Esgotado</span>' : ""}
        ${r.sugestao_look ? '<span class="pill">Sugestão de look</span>' : ""}
        <span class="pill">${esc(r.categoria) || "—"}</span>
      </span>
      <span style="color:var(--muted);font-size:.85rem">${r.preco ? "R$ " + Number(r.preco).toFixed(2).replace(".", ",") : "—"}</span>
    </div>
    <div class="prod__body">
      <div class="row">
        <div><label class="lbl">Nome</label><input class="field f-nome" value="${esc(r.nome)}"></div>
        <div><label class="lbl">Categoria</label><input class="field f-categoria" list="catlist" value="${esc(r.categoria)}"></div>
      </div>
      <div class="row">
        <div><label class="lbl">Preço (R$)</label><input class="field f-preco" type="number" step="0.01" placeholder="ex: 49.90" value="${r.preco ?? ""}"></div>
        <div><label class="lbl">Preço antigo (opcional)</label><input class="field f-preco_antigo" type="number" step="0.01" placeholder="riscado" value="${r.preco_antigo ?? ""}"></div>
      </div>
      <div class="row">
        <div><label class="lbl">Código</label><input class="field f-codigo" value="${esc(r.codigo)}"></div>
        <div><label class="lbl">Selo (tag)</label><input class="field f-tag" placeholder="Novo / Best-seller" value="${esc(r.tag)}"></div>
      </div>
      <div class="row">
        <div class="chk"><input type="checkbox" class="f-esgotado" ${r.esgotado ? "checked" : ""}><label class="lbl" style="margin:0">Esgotado (tirar do estoque)</label></div>
        <div class="chk"><input type="checkbox" class="f-look" ${r.sugestao_look ? "checked" : ""}><label class="lbl" style="margin:0">Sugestão de look</label></div>
      </div>
      <div class="row"><div class="full"><label class="lbl">Observação (opcional)</label><input class="field f-nota" value="${esc(r.nota)}"></div></div>
      <div class="row"><div class="full"><label class="lbl">Tamanhos (separados por vírgula)</label><input class="field f-tamanhos" placeholder="PP,P,M,G,GG" value="${esc((r.tamanhos || []).join(","))}"></div></div>
      <div class="full" style="margin-bottom:12px">
        <label class="lbl">Cores</label>
        <div class="colors">${cores}</div>
        <button type="button" class="btn btn--ghost" style="margin-top:8px;padding:8px 14px" onclick="addColor(${i})">+ cor</button>
      </div>
      <div class="full">
        <label class="lbl">Fotos</label>
        <div class="imgs">
          ${imgs}
          <label class="up">+<input type="file" accept="image/*" multiple hidden onchange="upImgs(${i}, this.files)"></label>
        </div>
      </div>
      <div class="prod__foot">
        <button type="button" class="btn btn--danger" onclick="del(${i})">Excluir</button>
        <button type="button" class="btn btn--primary" onclick="save(${i})">Salvar</button>
      </div>
    </div>
  </div>`;
}

// ---------- Sincronizar DOM -> STATE ----------
function syncCard(i) {
  const card = document.querySelector(`.prod[data-idx="${i}"]`);
  if (!card) return;
  const g = (s) => card.querySelector(s);
  const r = STATE[i];
  r.nome = g(".f-nome").value.trim();
  r.categoria = g(".f-categoria").value.trim();
  r.codigo = g(".f-codigo").value.trim();
  r.preco = num(g(".f-preco").value);
  r.preco_antigo = num(g(".f-preco_antigo").value);
  r.tag = g(".f-tag").value.trim() || "Novo";
  r.nota = g(".f-nota").value.trim();
  r.esgotado = g(".f-esgotado").checked;
  r.sugestao_look = g(".f-look").checked;
  r.tamanhos = g(".f-tamanhos").value.split(",").map((s) => s.trim()).filter(Boolean);
  r.cores = Array.from(card.querySelectorAll(".color-row"))
    .map((cr) => {
      const name = cr.querySelector(".c-name").value.trim();
      const hex = cr.querySelector(".c-hex").value;
      const sizes = cr.querySelector(".c-sizes").value.split(",").map((s) => s.trim()).filter(Boolean);
      const o = { name, hex };
      if (sizes.length) o.sizes = sizes;
      return o;
    })
    .filter((c) => c.name);
}
function syncAll() {
  STATE.forEach((_, i) => syncCard(i));
}

// ---------- Ações estruturais ----------
window.addColor = (i) => { syncAll(); STATE[i].cores.push({ name: "", hex: "#141414" }); render(); };
window.rmColor = (i, k) => { syncAll(); STATE[i].cores.splice(k, 1); render(); };
window.rmImg = (i, k) => { syncAll(); STATE[i].imagens.splice(k, 1); render(); };

window.upImgs = async (i, files) => {
  if (!files || !files.length) return;
  syncAll();
  toast("Enviando foto...");
  try {
    for (const f of files) {
      const ext = (f.name.split(".").pop() || "jpg").toLowerCase();
      const path = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;
      const { error } = await window.sb.storage.from(BUCKET).upload(path, f, { cacheControl: "3600", upsert: false });
      if (error) throw error;
      const { data } = window.sb.storage.from(BUCKET).getPublicUrl(path);
      STATE[i].imagens.push(data.publicUrl);
    }
    render();
    toast("Foto adicionada! Clique em Salvar.");
  } catch (e) {
    toast("Erro na foto: " + (e.message || e));
  }
};

$("#addBtn").addEventListener("click", () => {
  syncAll();
  const maxOrd = STATE.reduce((m, r) => Math.max(m, r.ordem || 0), 0);
  STATE.unshift({ ordem: maxOrd + 1, categoria: "", nome: "", codigo: "", preco: null, preco_antigo: null, tag: "Novo", esgotado: false, sugestao_look: false, nota: "", cores: [{ name: "Preto", hex: "#141414" }], tamanhos: ["PP", "P", "M", "G", "GG"], imagens: [] });
  $("#seedHint").hidden = true;
  render();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

$("#seedBtn").addEventListener("click", async () => {
  if (!window.SEED) return;
  $("#seedBtn").disabled = true;
  const { error } = await window.sb.from("produtos").insert(window.SEED.map((r) => ({ ...r })));
  $("#seedBtn").disabled = false;
  if (error) return toast("Erro ao importar: " + error.message);
  toast("Produtos importados! ✅");
  loadAll();
});

// ---------- Salvar / Excluir ----------
window.save = async (i) => {
  syncCard(i);
  const r = STATE[i];
  if (!r.nome || !r.categoria) return toast("Preencha nome e categoria.");
  const payload = {};
  DB_COLS.forEach((c) => (payload[c] = r[c] ?? (c === "cores" || c === "tamanhos" || c === "imagens" ? [] : null)));
  try {
    if (r.id) {
      const { error } = await window.sb.from("produtos").update(payload).eq("id", r.id);
      if (error) throw error;
    } else {
      const { data, error } = await window.sb.from("produtos").insert(payload).select().single();
      if (error) throw error;
      STATE[i].id = data.id;
    }
    toast("Salvo! ✅");
  } catch (e) {
    toast("Erro ao salvar: " + (e.message || e));
  }
};

window.del = async (i) => {
  const r = STATE[i];
  if (!confirm(`Excluir "${r.nome || "este produto"}"?`)) return;
  try {
    if (r.id) {
      const { error } = await window.sb.from("produtos").delete().eq("id", r.id);
      if (error) throw error;
    }
    STATE.splice(i, 1);
    render();
    $("#seedHint").hidden = STATE.length > 0;
    toast("Excluído.");
  } catch (e) {
    toast("Erro ao excluir: " + (e.message || e));
  }
};

boot();
