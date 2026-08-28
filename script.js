// ===== Dados =====
const collections = [
  {
    tag: "Novo",
    cat: "Feminino",
    name: "Legging Power Move",
    price: "R$ 189",
    old: "R$ 249",
    grad: "linear-gradient(145deg, #c6ff3d, #7bdc00)",
  },
  {
    tag: "Best-seller",
    cat: "Masculino",
    name: "Regata Dry Elite",
    price: "R$ 99",
    old: "R$ 139",
    grad: "linear-gradient(145deg, #ff5a3c, #ff9a3c)",
  },
  {
    tag: "Novo",
    cat: "Feminino",
    name: "Top Compressão Flex",
    price: "R$ 119",
    old: null,
    grad: "linear-gradient(145deg, #7b61ff, #b06bff)",
  },
  {
    tag: "Kit",
    cat: "Unissex",
    name: "Conjunto Treino Pro",
    price: "R$ 279",
    old: "R$ 349",
    grad: "linear-gradient(145deg, #2ce2c8, #1fa3ff)",
  },
  {
    tag: "Best-seller",
    cat: "Masculino",
    name: "Bermuda Runner 2 em 1",
    price: "R$ 149",
    old: null,
    grad: "linear-gradient(145deg, #ffd23c, #ff8a3c)",
  },
  {
    tag: "Novo",
    cat: "Acessórios",
    name: "Meião Grip Antiderrapante",
    price: "R$ 49",
    old: "R$ 69",
    grad: "linear-gradient(145deg, #ff5a8a, #ff3c6e)",
  },
];

const benefits = [
  { icon: "💨", title: "Tecido Dry-Fit", text: "Absorve o suor e seca rápido, mantendo você leve do início ao fim." },
  { icon: "🏋️", title: "Compressão Ativa", text: "Sustentação muscular que melhora o desempenho e acelera a recuperação." },
  { icon: "🌱", title: "Anti-odor", text: "Tecnologia antibacteriana que neutraliza odores mesmo nos treinos mais intensos." },
  { icon: "♻️", title: "Durável e Sustentável", text: "Peças que aguentam o ritmo, feitas com processos responsáveis." },
];

const reviews = [
  { text: "Melhor legging que já usei. Não marca, não desce e é super confortável no crossfit.", name: "Amanda R.", role: "CrossFit · São Paulo", initials: "AR" },
  { text: "As regatas são absurdas de leves. Corro 10km e a peça continua sequinha.", name: "Bruno L.", role: "Corredor · Rio de Janeiro", initials: "BL" },
  { text: "Qualidade de marca gringa com preço justo e entrega rápida. Virei cliente fiel.", name: "Carla M.", role: "Yoga · Belo Horizonte", initials: "CM" },
];

// ===== Render =====
function renderCollections() {
  const grid = document.getElementById("collectionGrid");
  grid.innerHTML = collections
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
          <button class="card__btn" type="button">Comprar</button>
        </div>
      </div>
    </article>`
    )
    .join("");
}

function renderBenefits() {
  const grid = document.getElementById("benefitGrid");
  grid.innerHTML = benefits
    .map(
      (b) => `
    <div class="benefit reveal">
      <div class="benefit__icon">${b.icon}</div>
      <h3>${b.title}</h3>
      <p>${b.text}</p>
    </div>`
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
    msg.textContent = "🎉 Cupom FITINES10 a caminho do seu e-mail!";
    form.reset();
  });
}

function initReveal() {
  const items = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  items.forEach((el) => observer.observe(el));
}

// ===== Init =====
document.addEventListener("DOMContentLoaded", () => {
  renderCollections();
  renderBenefits();
  renderReviews();
  initNav();
  initNewsletter();
  initReveal();
  document.getElementById("year").textContent = new Date().getFullYear();
});
