// ===== Dados =====
const WHATSAPP = "554195585452"; // 41 9558-5452 (com código do país 55)

const SIZES = ["PP", "P", "M", "G", "GG"];
const collections = [
  {
    tag: "Novo",
    cat: "Macaquinhos",
    name: "Macaquinho Sculpt",
    code: "NNV-MAC-001",
    price: "R$ 69,90",
    priceNum: 69.9,
    old: null,
    img: "prod-macaquinho.jpg",
    alt: "prod-macaquinho-back.jpg",
    colors: [
      { name: "Vermelho", hex: "#a5121b", sizes: ["G"] },
      { name: "Azul", hex: "#2f6fb0", sizes: ["P"] },
      { name: "Preto", hex: "#141414", sizes: ["M"] },
    ],
  },
  {
    tag: "Best-seller",
    cat: "Conjuntos",
    name: "Conjunto Flare Power",
    code: "NNV-CJ-002",
    price: "R$ 160,00",
    priceNum: 160,
    old: null,
    img: "prod-flare-front.jpg",
    alt: "prod-flare-back.jpg",
    colors: [{ name: "Preto", hex: "#141414" }],
    sizes: SIZES,
    soldOut: true,
  },
  {
    tag: "Novo",
    cat: "Conjuntos",
    name: "Conjunto Active Marinho",
    code: "NNV-CJ-003",
    price: "R$ 279",
    priceNum: 279,
    old: null,
    img: "prod-marinho-front.jpg",
    alt: "prod-marinho-back.jpg",
    colors: [
      { name: "Marinho", hex: "#1b2440" },
      { name: "Preto", hex: "#141414" },
    ],
    sizes: SIZES,
  },
  {
    tag: "Novo",
    cat: "Conjuntos",
    name: "Conjunto Move Cinza",
    code: "NNV-CJ-004",
    price: "R$ 259",
    priceNum: 259,
    old: null,
    img: "prod-conjunto-cinza.jpg",
    colors: [
      { name: "Cinza", hex: "#8a8683" },
      { name: "Preto", hex: "#141414" },
    ],
    sizes: SIZES,
  },
  {
    tag: "Best-seller",
    cat: "Shorts",
    name: "Conjunto Short Cintura Alta",
    code: "NNV-SH-005",
    price: "R$ 169",
    priceNum: 169,
    old: "R$ 219",
    img: "prod-short-front.jpg",
    alt: "prod-short-back.jpg",
    colors: [
      { name: "Azul", hex: "#a9c7e0" },
      { name: "Preto", hex: "#141414" },
    ],
    sizes: SIZES,
  },
  {
    tag: "Novo",
    cat: "Baby Look",
    name: "Baby Look",
    code: "NNV-BBY-006",
    price: "R$ 35,00",
    priceNum: 35,
    old: null,
    img: "prod-baby-look.jpg",
    colors: [{ name: "Preto", hex: "#141414" }],
    sizes: ["M"],
  },
  {
    tag: "Novo",
    cat: "Regatas",
    name: "Regata",
    code: "NNV-REG-007",
    price: "R$ 40,00",
    priceNum: 40,
    old: null,
    img: "prod-regata.jpg",
    colors: [
      { name: "Preto", hex: "#141414", sizes: ["M"] },
      { name: "Azul", hex: "#2f6fb0", sizes: ["M"] },
    ],
  },
  {
    tag: "Novo",
    cat: "Shorts",
    name: "Short Ribbed",
    code: "NNV-SH-008",
    price: "R$ 49,90",
    priceNum: 49.9,
    old: null,
    img: "prod-shorts.jpg",
    colors: [
      { name: "Preto", hex: "#141414", sizes: ["P", "M"] },
      { name: "Marrom", hex: "#5b3a29", sizes: ["P", "M"] },
      { name: "Azul", hex: "#2f6fb0", sizes: ["P", "M"] },
      { name: "Roxo", hex: "#7d1f6a", sizes: ["P", "M"] },
    ],
  },
  {
    tag: "Novo",
    cat: "Leggings",
    name: "Legging",
    code: "NNV-LEG-009",
    price: "R$ 49,90",
    priceNum: 49.9,
    old: null,
    img: "prod-legging.jpg",
    colors: [
      { name: "Preto", hex: "#141414", sizes: ["G"] },
      { name: "Azul", hex: "#2f6fb0", sizes: ["G"] },
    ],
  },
  {
    tag: "Best-seller",
    cat: "Conjuntos",
    name: "Conjunto Verde Militar",
    code: "NNV-CJ-010",
    price: "R$ 120,00",
    priceNum: 120,
    old: null,
    img: "prod-conjunto-verde.jpg",
    colors: [{ name: "Verde militar", hex: "#4d5a3a" }],
    sizes: ["Único"],
    soldOut: true,
  },
  {
    tag: "Novo",
    cat: "Conjuntos",
    name: "Conjunto Top Azul + Short Marrom",
    code: "NNV-CJ-011",
    price: "R$ 76,90",
    priceNum: 76.9,
    old: null,
    img: "prod-conjunto-azul-marrom.jpg",
    colors: [{ name: "Azul/Marrom", hex: "#2f6fb0" }],
    sizes: ["Único"],
  },
  {
    tag: "Novo",
    cat: "Conjuntos",
    name: "Conjunto Marrom",
    code: "NNV-CJ-012",
    price: "R$ 76,90",
    priceNum: 76.9,
    old: null,
    img: "prod-conjunto-marrom.jpg",
    colors: [{ name: "Marrom", hex: "#8a6b52" }],
    sizes: ["Único"],
  },
];

const reviews = [
  { text: "Melhor legging que já usei. Não marca, não desce e é super confortável no crossfit.", name: "Amanda R.", role: "CrossFit · São Paulo", initials: "AR" },
  { text: "As regatas são absurdas de leves. Corro 10km e a peça continua sequinha.", name: "Bruno L.", role: "Corredor · Rio de Janeiro", initials: "BL" },
  { text: "Qualidade de marca gringa com preço justo e entrega rápida. Virei cliente fiel.", name: "Carla M.", role: "Yoga · Belo Horizonte", initials: "CM" },
];

// ===== Render =====
function renderCollections(filter = "Todas") {
  const grid = document.getElementById("collectionGrid");
  const list =
    filter === "Todas" ? collections : collections.filter((p) => p.cat === filter);
  const sizesOf = (p, c) => (c.sizes && c.sizes.length ? c.sizes : p.sizes || SIZES);
  grid.innerHTML = list
    .map((p) => {
      const initialSizes = sizesOf(p, p.colors[0]);
      return `
    <article class="card reveal${p.soldOut ? " card--out" : ""}" data-name="${p.name}" data-price="${p.priceNum}" data-code="${p.code}">
      <div class="card__img">
        <img class="card__photo" src="${p.img}" alt="${p.name}" loading="lazy" />
        ${p.alt ? `<img class="card__photo card__photo--alt" src="${p.alt}" alt="${p.name} — costas" loading="lazy" />` : ""}
        ${p.soldOut ? `<span class="card__tag card__tag--out">Esgotado</span>` : `<span class="card__tag">${p.tag}</span>`}
      </div>
      <div class="card__body">
        <span class="card__cat">${p.cat}</span>
        <h3 class="card__name">${p.name}</h3>
        <span class="card__code">Cód. ${p.code}</span>
        <div class="card__colors" role="group" aria-label="Cores disponíveis">
          ${p.colors
            .map(
              (c, i) =>
                `<button type="button" class="swatch${i === 0 ? " is-active" : ""}" data-color="${c.name}" data-sizes="${sizesOf(p, c).join(",")}" style="--sw:${c.hex}" title="${c.name}" aria-label="${c.name}"></button>`
            )
            .join("")}
        </div>
        ${
          p.soldOut
            ? ""
            : `<label class="card__size">
          <span class="card__size-label">Tamanho</span>
          <select class="card__select" aria-label="Tamanho">
            ${initialSizes.map((s) => `<option value="${s}">${s}</option>`).join("")}
          </select>
        </label>`
        }
        <div class="card__foot">
          <span class="card__price">${p.old ? `<small>${p.old}</small>` : ""}${p.price}</span>
          ${
            p.soldOut
              ? `<button class="card__btn card__restock" type="button">Pedir reposição</button>`
              : `<button class="card__btn" type="button">Comprar</button>`
          }
        </div>
      </div>
    </article>`;
    })
    .join("");
}

function renderReviews() {
  const grid = document.getElementById("reviewGrid");
  grid.innerHTML = reviews
    .map(
      (r) => `
    <div class="review reveal">
      <div class="review__stars">★★★★★</div>
      <p class="review__text">"${r.text}"</p>
      <div class="review__author">
        <div class="review__avatar">${r.initials}</div>
        <div>
          <div class="review__name">${r.name}</div>
          <div class="review__role">${r.role}</div>
        </div>
      </div>
    </div>`
    )
    .join("");
}

// ===== Interações =====
function initNav() {
  const toggle = document.getElementById("navToggle");
  const nav = document.getElementById("nav");
  toggle.addEventListener("click", () => nav.classList.toggle("is-open"));
  nav.querySelectorAll("a").forEach((link) =>
    link.addEventListener("click", () => nav.classList.remove("is-open"))
  );
}

function initNewsletter() {
  const form = document.getElementById("newsletterForm");
  const input = document.getElementById("emailInput");
  const msg = document.getElementById("formMsg");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = input.value.trim();
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!valid) {
      msg.style.color = "var(--accent)";
      msg.textContent = "Ops! Digite um e-mail válido.";
      return;
    }
    msg.style.color = "var(--brand)";
    msg.textContent = "🎉 Cupom NNV10 a caminho do seu e-mail!";
    form.reset();
  });
}

function initHeroSlider() {
  const slider = document.getElementById("heroSlider");
  if (!slider) return;
  const slides = Array.from(slider.querySelectorAll(".hero__slide"));
  const dotsWrap = document.getElementById("heroDots");
  if (slides.length < 2) return;

  let index = 0;
  let timer;

  slides.forEach((_, i) => {
    const dot = document.createElement("button");
    dot.className = "hero__dot";
    dot.type = "button";
    dot.setAttribute("aria-label", "Ir para o slide " + (i + 1));
    dot.addEventListener("click", () => go(i));
    dotsWrap.appendChild(dot);
  });
  const dots = Array.from(dotsWrap.children);

  function render() {
    slides.forEach((s, i) => s.classList.toggle("is-active", i === index));
    dots.forEach((d, i) => d.classList.toggle("is-active", i === index));
  }
  function go(n) {
    index = (n + slides.length) % slides.length;
    render();
    restart();
  }
  function restart() {
    clearInterval(timer);
    timer = setInterval(() => go(index + 1), 6000);
  }

  document.getElementById("heroPrev").addEventListener("click", () => go(index - 1));
  document.getElementById("heroNext").addEventListener("click", () => go(index + 1));
  slider.addEventListener("mouseenter", () => clearInterval(timer));
  slider.addEventListener("mouseleave", restart);

  render();
  restart();
}

// ===== Carrinho =====
let cart = [];
function initCart() {
  const drawer = document.getElementById("cartDrawer");
  if (!drawer) return;
  const overlay = document.getElementById("cartOverlay");
  const openBtn = document.getElementById("cartBtn");
  const closeBtn = document.getElementById("cartClose");
  const itemsWrap = document.getElementById("cartItems");
  const totalEl = document.getElementById("cartTotal");
  const countEl = document.getElementById("cartCount");
  const checkoutBtn = document.getElementById("checkoutBtn");
  const emptyMsg = document.getElementById("cartEmpty");

  const money = (n) =>
    "R$ " + n.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  function open() {
    drawer.classList.add("is-open");
    overlay.classList.add("is-open");
    document.body.style.overflow = "hidden";
  }
  function close() {
    drawer.classList.remove("is-open");
    overlay.classList.remove("is-open");
    document.body.style.overflow = "";
  }
  function total() {
    return cart.reduce((s, i) => s + i.price * i.qty, 0);
  }
  function add(name, price, color, size) {
    const key = `${name}|${color}|${size}`;
    const found = cart.find((i) => i.key === key);
    if (found) found.qty++;
    else cart.push({ key, name, price, color, size, qty: 1 });
    render();
    openBtn.classList.remove("is-bump");
    void openBtn.offsetWidth; // reinicia a animação
    openBtn.classList.add("is-bump");
  }
  function changeQty(key, delta) {
    const it = cart.find((i) => i.key === key);
    if (!it) return;
    it.qty += delta;
    if (it.qty <= 0) cart = cart.filter((i) => i.key !== key);
    render();
  }
  function render() {
    const count = cart.reduce((s, i) => s + i.qty, 0);
    countEl.textContent = count;
    countEl.classList.toggle("is-visible", count > 0);
    if (!cart.length) {
      itemsWrap.innerHTML = "";
      emptyMsg.hidden = false;
      checkoutBtn.disabled = true;
    } else {
      emptyMsg.hidden = true;
      checkoutBtn.disabled = false;
      itemsWrap.innerHTML = cart
        .map(
          (i) => `
        <div class="cart-item">
          <div class="cart-item__info">
            <span class="cart-item__name">${i.name}</span>
            <span class="cart-item__meta">${[i.color, i.size ? "Tam " + i.size : ""].filter(Boolean).join(" · ")}</span>
            <span class="cart-item__unit">${money(i.price)} / un.</span>
          </div>
          <div class="cart-item__qty">
            <button type="button" data-act="dec" data-key="${i.key}" aria-label="Diminuir">−</button>
            <span>${i.qty}</span>
            <button type="button" data-act="inc" data-key="${i.key}" aria-label="Aumentar">+</button>
          </div>
          <span class="cart-item__sub">${money(i.price * i.qty)}</span>
        </div>`
        )
        .join("");
    }
    totalEl.textContent = money(total());
  }

  const grid = document.getElementById("collectionGrid");
  grid.addEventListener("click", (e) => {
    // seleção de cor (swatch) — atualiza os tamanhos disponíveis daquela cor
    const sw = e.target.closest(".swatch");
    if (sw) {
      const card = sw.closest(".card");
      card.querySelectorAll(".swatch").forEach((s) => s.classList.remove("is-active"));
      sw.classList.add("is-active");
      const select = card.querySelector(".card__select");
      const sizes = (sw.dataset.sizes || "").split(",").filter(Boolean);
      if (select && sizes.length) {
        select.innerHTML = sizes.map((s) => `<option value="${s}">${s}</option>`).join("");
      }
      return;
    }
    // pedir reposição (produto esgotado)
    const restock = e.target.closest(".card__restock");
    if (restock) {
      const card = restock.closest(".card");
      const text = `Olá! Gostaria de pedir a reposição do produto ${card.dataset.name} (Cód. ${card.dataset.code}). Tem previsão de voltar ao estoque?`;
      window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`, "_blank");
      return;
    }
    const btn = e.target.closest(".card__btn");
    if (!btn) return;
    const card = btn.closest(".card");
    const activeSwatch = card.querySelector(".swatch.is-active");
    const color = activeSwatch ? activeSwatch.dataset.color : "";
    const select = card.querySelector(".card__select");
    const size = select ? select.value : "";
    add(card.dataset.name, Number(card.dataset.price), color, size);
  });
  itemsWrap.addEventListener("click", (e) => {
    const b = e.target.closest("button[data-act]");
    if (!b) return;
    changeQty(b.dataset.key, b.dataset.act === "inc" ? 1 : -1);
  });
  openBtn.addEventListener("click", open);
  closeBtn.addEventListener("click", close);
  overlay.addEventListener("click", close);

  checkoutBtn.addEventListener("click", () => {
    if (!cart.length) return;
    const pay = document.querySelector('input[name="pay"]:checked');
    const payLabel = pay ? pay.value : "A combinar";
    let text = "Olá! Quero finalizar meu pedido na NNV by Neneve:\n\n";
    cart.forEach((i) => {
      const det = [i.color, i.size ? "Tam " + i.size : ""].filter(Boolean).join(", ");
      text += `• ${i.qty}x ${i.name}${det ? ` (${det})` : ""} — ${money(i.price * i.qty)}\n`;
    });
    text += `\nTotal: ${money(total())}\nForma de pagamento: ${payLabel}`;
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`, "_blank");
  });

  render();
}

let revealObserver;
function observeReveals() {
  if (!revealObserver) return;
  document
    .querySelectorAll(".reveal:not(.is-visible)")
    .forEach((el) => revealObserver.observe(el));
}
function initReveal() {
  revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  observeReveals();
}

function initCategoryFilter() {
  const dropdown = document.getElementById("categoryDropdown");
  if (!dropdown) return;
  const btn = document.getElementById("categoryBtn");
  const menu = document.getElementById("categoryMenu");
  const label = document.getElementById("categoryLabel");

  const cats = ["Todas", ...new Set(collections.map((p) => p.cat))];
  menu.innerHTML = cats
    .map(
      (c, i) =>
        `<li role="option" class="filter__option${i === 0 ? " is-active" : ""}" data-cat="${c}">${
          c === "Todas" ? "Todas as categorias" : c
        }</li>`
    )
    .join("");

  function close() {
    dropdown.classList.remove("is-open");
    btn.setAttribute("aria-expanded", "false");
  }

  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    const open = dropdown.classList.toggle("is-open");
    btn.setAttribute("aria-expanded", open ? "true" : "false");
  });

  menu.querySelectorAll(".filter__option").forEach((opt) => {
    opt.addEventListener("click", () => {
      const cat = opt.dataset.cat;
      menu.querySelectorAll(".filter__option").forEach((o) => o.classList.remove("is-active"));
      opt.classList.add("is-active");
      label.textContent = cat === "Todas" ? "Todas as categorias" : cat;
      renderCollections(cat);
      observeReveals();
      close();
    });
  });

  document.addEventListener("click", (e) => {
    if (!dropdown.contains(e.target)) close();
  });
}

// ===== Init =====
document.addEventListener("DOMContentLoaded", () => {
  renderCollections();
  renderReviews();
  initCategoryFilter();
  initCart();
  initHeroSlider();
  initNav();
  initNewsletter();
  initReveal();
  document.getElementById("year").textContent = new Date().getFullYear();
});
