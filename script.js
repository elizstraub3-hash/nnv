// ===== Dados =====
const WHATSAPP = "554195585452"; // 41 9558-5452 (com código do país 55)

const collections = [
  {
    tag: "Novo",
    cat: "Leggings",
    name: "Legging Power Move",
    price: "R$ 189",
    priceNum: 189,
    old: "R$ 249",
    grad: "linear-gradient(145deg, #d81f2a, #a5121b)",
  },
  {
    tag: "Best-seller",
    cat: "Tops",
    name: "Top Compressão Flex",
    price: "R$ 119",
    priceNum: 119,
    old: "R$ 149",
    grad: "linear-gradient(145deg, #1a1614, #3a3230)",
  },
  {
    tag: "Novo",
    cat: "Conjuntos",
    name: "Conjunto Active Neneve",
    price: "R$ 279",
    priceNum: 279,
    old: null,
    grad: "linear-gradient(145deg, #d81f2a, #1a1614)",
  },
  {
    tag: "Best-seller",
    cat: "Shorts",
    name: "Short Saia Move Free",
    price: "R$ 129",
    priceNum: 129,
    old: null,
    grad: "linear-gradient(145deg, #2b2523, #d81f2a)",
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
  grid.innerHTML = list
    .map(
      (p) => `
    <article class="card reveal">
      <div class="card__img" style="background:${p.grad}">
        <span class="card__tag">${p.tag}</span>
      </div>
      <div class="card__body">
        <span class="card__cat">${p.cat}</span>
        <h3 class="card__name">${p.name}</h3>
        <div class="card__foot">
          <span class="card__price">${p.old ? `<small>${p.old}</small>` : ""}${p.price}</span>
          <button class="card__btn" type="button" data-name="${p.name}" data-price="${p.priceNum}">Comprar</button>
        </div>
      </div>
    </article>`
    )
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

  const money = (n) => "R$ " + n.toLocaleString("pt-BR");

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
  function add(name, price) {
    const found = cart.find((i) => i.name === name);
    if (found) found.qty++;
    else cart.push({ name, price, qty: 1 });
    render();
    openBtn.classList.remove("is-bump");
    void openBtn.offsetWidth; // reinicia a animação
    openBtn.classList.add("is-bump");
  }
  function changeQty(name, delta) {
    const it = cart.find((i) => i.name === name);
    if (!it) return;
    it.qty += delta;
    if (it.qty <= 0) cart = cart.filter((i) => i.name !== name);
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
            <span class="cart-item__unit">${money(i.price)} / un.</span>
          </div>
          <div class="cart-item__qty">
            <button type="button" data-act="dec" data-name="${i.name}" aria-label="Diminuir">−</button>
            <span>${i.qty}</span>
            <button type="button" data-act="inc" data-name="${i.name}" aria-label="Aumentar">+</button>
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
    const btn = e.target.closest(".card__btn");
    if (!btn) return;
    add(btn.dataset.name, Number(btn.dataset.price));
  });
  itemsWrap.addEventListener("click", (e) => {
    const b = e.target.closest("button[data-act]");
    if (!b) return;
    changeQty(b.dataset.name, b.dataset.act === "inc" ? 1 : -1);
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
      text += `• ${i.qty}x ${i.name} — ${money(i.price * i.qty)}\n`;
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
