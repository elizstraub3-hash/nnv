// ===== Dados =====
const collections = [
  {
    tag: "Novo",
    cat: "Feminino",
    name: "Legging Power Move",
    price: "R$ 189",
    old: "R$ 249",
    grad: "linear-gradient(145deg, #d81f2a, #a5121b)",
  },
  {
    tag: "Best-seller",
    cat: "Feminino",
    name: "Top Compressão Flex",
    price: "R$ 119",
    old: "R$ 149",
    grad: "linear-gradient(145deg, #1a1614, #3a3230)",
  },
  {
    tag: "Novo",
    cat: "Feminino",
    name: "Conjunto Active Neneve",
    price: "R$ 279",
    old: null,
    grad: "linear-gradient(145deg, #d81f2a, #1a1614)",
  },
  {
    tag: "Kit",
    cat: "Feminino",
    name: "Macaquinho Fit Sculpt",
    price: "R$ 219",
    old: "R$ 289",
    grad: "linear-gradient(145deg, #7a0d14, #d81f2a)",
  },
  {
    tag: "Best-seller",
    cat: "Feminino",
    name: "Short Saia Move Free",
    price: "R$ 129",
    old: null,
    grad: "linear-gradient(145deg, #2b2523, #d81f2a)",
  },
  {
    tag: "Novo",
    cat: "Acessórios",
    name: "Meião Grip Antiderrapante",
    price: "R$ 49",
    old: "R$ 69",
    grad: "linear-gradient(145deg, #a5121b, #1a1614)",
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
    msg.textContent = "🎉 Cupom NNV10 a caminho do seu e-mail!";
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
