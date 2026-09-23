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
    images: [
      "prod-macaquinho.jpg",
      "prod-macaquinho-back.jpg",
      "prod-mac-preto.jpg",
      "prod-mac-azul.jpg",
      "prod-mac-stack.jpg",
    ],
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
    price: "R$ 159,90",
    priceNum: 159.9,
    old: null,
    img: "prod-flare-front.jpg",
    alt: "prod-flare-back.jpg",
    colors: [{ name: "Preto", hex: "#141414" }],
    sizes: SIZES,
    soldOut: true,
  },
  {
    tag: "Novo",
    cat: "Sugestões de looks",
    name: "Look Cinza — Short + Baby Tee",
    code: "NNV-LK-004",
    price: "",
    priceNum: 0,
    old: null,
    img: "prod-conjunto-cinza.jpg",
    note: "Short e baby tee vendidos separadamente.",
    lookSuggestion: true,
    soldOut: true,
    colors: [{ name: "Cinza", hex: "#8a8683" }],
    sizes: ["Único"],
  },
  {
    tag: "Novo",
    cat: "Sugestões de looks",
    name: "Look Azul — Short Ribbed + Regata",
    code: "NNV-LK-005",
    price: "",
    priceNum: 0,
    old: null,
    img: "prod-short-front.jpg",
    alt: "prod-short-back.jpg",
    note: "Short Ribbed + Regata Azul — peças vendidas separadamente.",
    lookSuggestion: true,
    colors: [{ name: "Azul", hex: "#a9c7e0" }],
  },
  {
    tag: "Novo",
    cat: "Baby Tee",
    name: "Baby Tee",
    code: "NNV-BBY-006",
    price: "R$ 35,90",
    priceNum: 35.9,
    old: null,
    img: "prod-baby-tee.jpg",
    colors: [{ name: "Preto", hex: "#141414" }],
    sizes: ["M"],
  },
  {
    tag: "Novo",
    cat: "Regatas",
    name: "Regata",
    code: "NNV-REG-007",
    price: "R$ 39,90",
    priceNum: 39.9,
    old: null,
    img: "prod-regata-flat.jpg",
    images: ["prod-regata-flat.jpg", "prod-regata-azul.jpg"],
    colors: [
      { name: "Azul", hex: "#2f6fb0", sizes: ["M"] },
      { name: "Preto", hex: "#141414", sizes: ["M"] },
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
    images: [
      "prod-shorts.jpg",
      "prod-short-azul.jpg",
      "prod-short-marrom.jpg",
      "prod-short-roxo.jpg",
    ],
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
    name: "Legging Azul Marinho",
    code: "NNV-LEG-009",
    price: "R$ 49,90",
    priceNum: 49.9,
    old: null,
    img: "prod-legging-marinho.jpg",
    images: ["prod-legging-marinho.jpg", "prod-legging-flat.jpg"],
    colors: [
      { name: "Azul marinho", hex: "#1b2440", sizes: ["G"] },
      { name: "Preto", hex: "#141414", sizes: ["G"] },
    ],
  },
  {
    tag: "Best-seller",
    cat: "Conjuntos",
    name: "Conjunto Verde Militar",
    code: "NNV-CJ-010",
    price: "R$ 119,90",
    priceNum: 119.9,
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
    images: ["prod-conjunto-marrom.jpg", "prod-conjunto-marrom-flat.jpg"],
    colors: [{ name: "Marrom", hex: "#8a6b52" }],
    sizes: ["Único"],
  },
  {
    tag: "Novo",
    cat: "Acessórios",
    name: "Bolsa de Treino",
    code: "NNV-BAG-013",
    price: "R$ 69,90",
    priceNum: 69.9,
    old: null,
    img: "prod-bolsa.jpg",
    colors: [{ name: "Preto", hex: "#141414" }],
    sizes: ["Único"],
  },
];

const reviews = [
  { text: "Melhor legging que já usei. Não marca, não desce e é super confortável no crossfit.", name: "Amanda R.", role: "CrossFit · São Paulo", initials: "AR" },
  { text: "As regatas são absurdas de leves. Corro 10km e a peça continua sequinha.", name: "Bruno L.", role: "Corredor · Rio de Janeiro", initials: "BL" },
  { text: "Qualidade de marca gringa com preço justo e entrega rápida. Virei cliente fiel.", name: "Carla M.", role: "Yoga · Belo Horizonte", initials: "CM" },
];

// ===== Render =====
const CAT_ORDER = [
  "Macaquinhos",
  "Conjuntos",
  "Shorts",
  "Leggings",
  "Regatas",
  "Baby Tee",
  "Sugestões de looks",
  "Acessórios",
];
const sizesOf = (p, c) => (c.sizes && c.sizes.length ? c.sizes : p.sizes || SIZES);

function cardHTML(p) {
  const initialSizes = sizesOf(p, p.colors[0]);
  const imgs = p.images && p.images.length ? p.images : [p.img, p.alt].filter(Boolean);
  return `
    <article class="card reveal${p.soldOut ? " card--out" : ""}" data-name="${p.name}" data-price="${p.priceNum}" data-code="${p.code}">
      <div class="card__img">
        ${imgs
          .map(
            (src, i) =>
              `<img class="card__photo${i === 0 ? " is-active" : ""}" src="${src}" alt="${p.name}" loading="lazy" />`
          )
          .join("")}
        ${
          imgs.length > 1
            ? `<button class="card__imgnav card__imgnav--prev" data-dir="-1" type="button" aria-label="Foto anterior">&#8249;</button>
        <button class="card__imgnav card__imgnav--next" data-dir="1" type="button" aria-label="Próxima foto">&#8250;</button>
        <div class="card__imgdots">${imgs.map((_, i) => `<span class="card__imgdot${i === 0 ? " is-active" : ""}" data-i="${i}"></span>`).join("")}</div>`
            : ""
        }
        ${p.soldOut ? `<span class="card__tag card__tag--out">Esgotado</span>` : `<span class="card__tag">${p.tag}</span>`}
        ${p.lookSuggestion ? `<span class="card__look">Sugestão de look</span>` : ""}
      </div>
      <div class="card__body">
        <h3 class="card__name">${p.name}</h3>
        <span class="card__code">Cód. ${p.code}</span>
        ${p.note ? `<span class="card__note">${p.note}</span>` : ""}
        <div class="card__colors" role="group" aria-label="Cores disponíveis">
          ${p.colors
            .map(
              (c, i) =>
                `<button type="button" class="swatch${i === 0 ? " is-active" : ""}" data-color="${c.name}" data-sizes="${sizesOf(p, c).join(",")}" style="--sw:${c.hex}" title="${c.name}" aria-label="${c.name}"></button>`
            )
            .join("")}
        </div>
        ${
          p.cat !== "Acessórios" && !p.lookSuggestion
            ? `<label class="card__size">
          <span class="card__size-label">Tamanho</span>
          <select class="card__select" aria-label="Tamanho">
            ${initialSizes.map((s) => `<option value="${s}">${s}</option>`).join("")}
          </select>
        </label>`
            : ""
        }
        <div class="card__foot">
          <span class="card__price">${p.price ? `${p.old ? `<small>${p.old}</small>` : ""}${p.price}` : ""}</span>
          ${
            p.soldOut
              ? `<button class="card__btn card__restock" type="button">Pedir reposição</button>`
              : p.lookSuggestion
              ? `<button class="card__btn card__lookbtn" type="button">Quero este look</button>`
              : `<button class="card__btn" type="button">Comprar</button>`
          }
        </div>
      </div>
    </article>`;
}

function renderCollections(filter = "Todas") {
  const wrap = document.getElementById("collectionGrid");
  const cats =
    filter === "Todas"
      ? CAT_ORDER.filter((c) => collections.some((p) => p.cat === c))
      : [filter];
  wrap.innerHTML = cats
    .map((cat) => {
      const items = collections.filter((p) => p.cat === cat);
      if (!items.length) return "";
      return `
      <div class="cat-group">
        <h3 class="cat-group__title">${cat}</h3>
        <div class="grid grid--collections">${items.map(cardHTML).join("")}</div>
      </div>`;
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
    msg.textContent = "🎉 Use o cupom NNV5 e ganhe 5% no Pix!";
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
  const couponInput = document.getElementById("couponInput");
  const couponBtn = document.getElementById("couponBtn");
  const couponMsg = document.getElementById("couponMsg");
  const discountRow = document.getElementById("cartDiscountRow");
  const discountEl = document.getElementById("cartDiscount");
  let discountRate = 0;
  let couponCode = "";

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
    const sub = total();
    const desc = sub * discountRate;
    if (discountRate > 0 && cart.length) {
      discountRow.hidden = false;
      discountEl.textContent = "- " + money(desc);
    } else {
      discountRow.hidden = true;
    }
    totalEl.textContent = money(sub - desc);
  }

  couponBtn.addEventListener("click", () => {
    const code = couponInput.value.trim().toUpperCase();
    if (code === "NNV5") {
      discountRate = 0.05;
      couponCode = "NNV5";
      couponMsg.style.color = "var(--brand)";
      couponMsg.textContent = "✅ Cupom NNV5 aplicado — 5% no Pix.";
    } else {
      discountRate = 0;
      couponCode = "";
      couponMsg.style.color = "var(--accent)";
      couponMsg.textContent = code ? "Cupom inválido. Use NNV5." : "Digite um cupom.";
    }
    render();
  });

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
    // sugestão de look — quero este look
    const lookbtn = e.target.closest(".card__lookbtn");
    if (lookbtn) {
      const card = lookbtn.closest(".card");
      const text = `Olá! Gostei da sugestão de look "${card.dataset.name}". Quero montar esse look 😍`;
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
    const sub = total();
    const desc = sub * discountRate;
    text += `\nSubtotal: ${money(sub)}`;
    if (discountRate > 0) text += `\nCupom ${couponCode}: - ${money(desc)}`;
    text += `\nTotal: ${money(sub - desc)}\nForma de pagamento: ${payLabel}`;
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`, "_blank");
  });

  render();
}

function initLightbox() {
  const box = document.getElementById("lightbox");
  if (!box) return;
  const img = document.getElementById("lightboxImg");
  const closeBtn = document.getElementById("lightboxClose");
  const grid = document.getElementById("collectionGrid");

  function open(src, alt) {
    img.src = src;
    img.alt = alt || "";
    box.classList.add("is-open");
    document.body.style.overflow = "hidden";
  }
  function close() {
    box.classList.remove("is-open");
    document.body.style.overflow = "";
  }
  function slide(card, dir, toIndex) {
    const photos = Array.from(card.querySelectorAll(".card__photo"));
    const dots = Array.from(card.querySelectorAll(".card__imgdot"));
    const cur = photos.findIndex((ph) => ph.classList.contains("is-active"));
    const next =
      toIndex != null ? toIndex : (cur + dir + photos.length) % photos.length;
    photos.forEach((ph, i) => ph.classList.toggle("is-active", i === next));
    dots.forEach((d, i) => d.classList.toggle("is-active", i === next));
  }

  grid.addEventListener("click", (e) => {
    // navegação do slideshow
    const nav = e.target.closest(".card__imgnav");
    if (nav) {
      slide(nav.closest(".card"), Number(nav.dataset.dir));
      return;
    }
    const dot = e.target.closest(".card__imgdot");
    if (dot) {
      slide(dot.closest(".card"), 0, Number(dot.dataset.i));
      return;
    }
    // zoom da foto ativa
    const photo = e.target.closest(".card__photo");
    if (!photo) return;
    const active = photo.closest(".card__img").querySelector(".card__photo.is-active") || photo;
    open(active.src, active.alt);
  });
  closeBtn.addEventListener("click", close);
  box.addEventListener("click", (e) => {
    if (e.target === box) close();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });
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
  initLightbox();
  initHeroSlider();
  initNav();
  initNewsletter();
  initReveal();
  document.getElementById("year").textContent = new Date().getFullYear();
});
