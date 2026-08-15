/* ------------------------------------------------------------------
   Sagar — Finance and Fiction · static site script (no build needed)
   Edit the DATA block below to update the site content.
------------------------------------------------------------------- */

/* ------------------------------- DATA ---------------------------- */

const TICKERS = [
  ["S&P 500", "5832.10", 0.42],
  ["NASDAQ", "18966.13", 0.81],
  ["DOW", "43210.45", -0.12],
  ["BTC", "67430.20", 1.24],
  ["ETH", "3520.18", 0.66],
  ["GOLD", "2710.30", 0.18],
  ["OIL", "70.45", -0.55],
  ["EUR/USD", "1.0842", 0.05],
  ["USD/JPY", "154.22", -0.21],
  ["10Y YIELD", "4.31%", 0.03],
  ["VIX", "15.62", -1.1],
  ["AAPL", "232.18", 0.92],
  ["MSFT", "418.55", 0.34],
  ["NVDA", "142.10", 2.15],
  ["BRK.B", "462.30", 0.41],
];

const FEATURED = {
  title: "Global Valuation Monitor",
  desc: "Tracks global market valuations using real-time economic and financial data to identify relatively expensive and undervalued markets.",
  tags: ["Valuation", "Macro", "Data", "Ready soon"],
};

const PROJECTS = [
  ["Coming soon", "Something is in the works here. I'd rather leave it blank than fill it with noise.", "In progress"],
  ["Coming soon", "A second idea still taking shape. It'll show up once it's worth reading.", "In progress"],
];

const INTERESTS = [
  ["Financial Analysis", "My lens for understanding the world, through ratios, models, and the narrative behind every number."],
  ["Investing", "How I think about patience, risk, and compounding in markets and in life."],
  ["Corporate Finance", "Capital structure, M&A, and the decisions that move money inside companies."],
  ["Accounting", "The language of business. I read footnotes the way others read headlines."],
  ["Economics", "Why things cost what they cost, and where the world might be heading next."],
  ["Technology", "AI, fintech, and the platforms quietly reshaping how we live and invest."],
  ["Books", "Fiction and non-fiction. I believe in compounding knowledge, not just capital."],
  ["Data Analysis", "Excel, SQL, and Python for turning curiosity into better questions."],
];

const EXP = [
  ["2025 — Present", "Independent Research", "Exploring companies, markets, and ideas, then publishing what I learn."],
  ["2024 — Present", "Student Ambassador, PolyU", "Supported online student information sessions by sharing insights on university life and academics."],
  ["2024 — 2025", "Student Liaison & Recruitment Executive, Advanced Case Competition Club", "Revamped LinkedIn strategy, achieving 60%+ follower growth through the \u201cCase Preparation Series.\u201d"],
  ["Spring 2025", "Business Development Intern, Tsunami Advisors Limited", "Automated research workflows, reducing manual effort by 60\u201380% and enabling scalable analysis across 50+ organizations."],
];

const RESEARCH = [
  ["First Post", "0 min read · subject", "https://substack.com/profile/290631586-sagar/note/c-314713990?utm_source=substack&utm_content=first-note-modal"],
  ["Coming Soon", "0 min read · subject"],
  ["Coming Soon", "0 min read · subject"],
  ["Coming Soon", "0 min read · subject"],
  ["Coming Soon", "0 min read · subject"],
];

const STORYGRAPH_URL = "https://app.thestorygraph.com/profile/sagar_reads";

const BOOKS = [
  { title: "Freakonomics", author: "Levitt & Dubner", status: "Finished", shelf: "finance" },
  { title: "Rich Dad Poor Dad", author: "Robert Kiyosaki", status: "Finished", shelf: "finance" },
  { title: "Fahrenheit 451", author: "Ray Bradbury", status: "Fiction", shelf: "fiction" },
  { title: "Deep Work", author: "Cal Newport", status: "Reading", shelf: "reading" },
  { title: "Crime and Punishment", author: "Fyodor Dostoevsky", status: "Fiction", shelf: "fiction" },
  { title: "Norwegian Wood", author: "Haruki Murakami", status: "Fiction", shelf: "fiction" },
  { title: "The Midnight Library", author: "Matt Haig", status: "Fiction", shelf: "fiction" },
  { title: "The Alchemist", author: "Paulo Coelho", status: "Finished", shelf: "reading" },
];

const QUOTES = [
  ["The stock market is a device for transferring money from the impatient to the patient.", "Warren Buffett"],
  ["All I want to know is where I'm going to die, so I'll never go there.", "Charlie Munger"],
  ["What gets measured gets managed.", "Peter Drucker"],
  ["Play long-term games with long-term people.", "Naval Ravikant"],
  ["Risk comes from not knowing what you're doing.", "Warren Buffett"],
];

const LINKS = [
  ["Email", "sagar.dhakal@connect.polyu.hk", "mailto:sagar.dhakal@connect.polyu.hk"],
  ["LinkedIn", "linkedin.com/in/sagardhakal99", "https://linkedin.com/in/sagardhakal99"],
];

/* ------------------------------ HELPERS -------------------------- */

const $ = (sel) => document.querySelector(sel);
const esc = (s) =>
  String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);

/* ------------------------------ TICKER --------------------------- */

function renderTicker() {
  const one = TICKERS.map(
    ([s, p, c]) =>
      `<span class="item"><span class="sym">${esc(s)}</span>${esc(p)} <span class="${
        c >= 0 ? "up" : "down"
      }">${c >= 0 ? "▲" : "▼"} ${Math.abs(c).toFixed(2)}%</span></span>`,
  ).join("");
  $("#ticker").innerHTML = one + one;
}

/* ------------------------------ CONTENT -------------------------- */

function renderContent() {
  $("#featured-title").textContent = FEATURED.title;
  $("#featured-desc").textContent = FEATURED.desc;
  $("#featured-tags").innerHTML = FEATURED.tags.map((t) => `<span class="chip">${esc(t)}</span>`).join("");

  $("#projects-grid").innerHTML = PROJECTS.map(
    ([t, d, tag]) =>
      `<div class="card"><h3>${esc(t)}</h3><p>${esc(d)}</p><p class="kicker" style="margin-top:14px;margin-bottom:0">${esc(
        tag,
      )}</p></div>`,
  ).join("");

  $("#interests-grid").innerHTML = INTERESTS.map(
    ([t, d]) => `<div class="card"><h3>${esc(t)}</h3><p>${esc(d)}</p></div>`,
  ).join("");

  $("#timeline").innerHTML = EXP.map(
    ([w, t, d]) => `<li><div class="when">${esc(w)}</div><h3>${esc(t)}</h3><p>${esc(d)}</p></li>`,
  ).join("");

  $("#research-list").innerHTML = RESEARCH.map(
    ([t, m, href]) =>
      `<a class="row" href="${esc(href || "#research")}"${
        href ? ' target="_blank" rel="noreferrer"' : ""
      }><h3>${esc(t)}</h3><span class="meta">${esc(m)}</span></a>`,
  ).join("");

  $("#links-grid").innerHTML = LINKS.map(
    ([k, v, h]) =>
      `<a class="card contact-card" href="${esc(h)}" target="_blank" rel="noreferrer"><div><div class="label">${esc(
        k,
      )}</div><div class="val">${esc(v)}</div></div><span class="arrow">→</span></a>`,
  ).join("");

  $("#year").textContent = new Date().getFullYear();
}

/* ----------------------------- BOOKSHELF ------------------------- */

function renderBookshelf() {
  const half = Math.ceil(BOOKS.length / 2);
  const columns = [BOOKS.slice(0, half), BOOKS.slice(half)];
  const rows = columns
    .map(
      (col, r) => `
      <div class="shelf-row">
        <div class="shelf-books">
          ${col
            .map(
              (b, i) => `
            <div class="book-spine ${b.shelf} p${(i + r) % 4}" tabindex="0" aria-label="${esc(b.title)} by ${esc(
                b.author,
              )}">
              <span class="spine-cap" aria-hidden="true"></span>
              <span class="spine-band" aria-hidden="true"></span>
              <span class="spine-rule" aria-hidden="true"></span>
              <span class="spine-crest" aria-hidden="true"></span>
              <span class="book-tip"><strong>${esc(b.title)}</strong><em>${esc(
                b.author,
              )}</em><span class="tip-status">${esc(b.status)}</span></span>
            </div>`,
            )
            .join("")}
        </div>
        <div class="shelf-plank" aria-hidden="true"></div>
      </div>`,
    )
    .join("");

  $("#bookshelf").innerHTML = `
    <div class="bookshelf-wrap">
      <div class="bookshelf">
        <a class="shelf-bookmark" href="${STORYGRAPH_URL}" target="_blank" rel="noreferrer">
          <span class="bm-label">sagar_reads</span>
          <span class="bm-sub">StoryGraph ↗</span>
          <span class="bm-tail" aria-hidden="true"></span>
        </a>
        <div class="shelf-columns">${rows}</div>
      </div>
    </div>`;
}

/* ------------------------------ QUOTES --------------------------- */

function renderQuotes() {
  let i = 0;
  const el = $("#quotes");
  el.innerHTML = `
    <div class="card quote-card">
      <div class="quote-mark">"</div>
      <blockquote>
        <p class="quote-text"></p>
        <footer class="quote-author mono"></footer>
      </blockquote>
      <div class="quote-dots">${QUOTES.map((_, n) => `<button aria-label="Quote ${n + 1}"></button>`).join("")}</div>
    </div>`;

  const textEl = el.querySelector(".quote-text");
  const authorEl = el.querySelector(".quote-author");
  const dots = Array.from(el.querySelectorAll(".quote-dots button"));

  const paint = () => {
    textEl.textContent = QUOTES[i][0];
    authorEl.textContent = "— " + QUOTES[i][1];
    dots.forEach((d, n) => d.classList.toggle("on", n === i));
  };
  dots.forEach((d, n) =>
    d.addEventListener("click", () => {
      i = n;
      paint();
    }),
  );
  paint();
  setInterval(() => {
    i = (i + 1) % QUOTES.length;
    paint();
  }, 6000);
}

/* --------------------------- SCROLL EFFECTS ---------------------- */

function initScrollFlow() {
  const bar = $("#progress-bar");
  let raf = 0;
  const onScroll = () => {
    if (raf) return;
    raf = requestAnimationFrame(() => {
      raf = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const y = window.scrollY;
      const p = max > 0 ? Math.min(1, y / max) : 0;
      bar.style.transform = `scaleX(${p})`;
      document.documentElement.style.setProperty("--scroll-y", y + "px");
      document.documentElement.style.setProperty("--scroll-p", String(p));
    });
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
}

function initScrollReveal() {
  const els = Array.from(document.querySelectorAll("main section .container > *, main .hero-inner > *"));
  els.forEach((el) => el.classList.add("reveal"));
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: "0px 0px -6% 0px" },
  );
  els.forEach((el, i) => {
    el.style.transitionDelay = Math.min(i % 6, 5) * 60 + "ms";
    io.observe(el);
  });
}

/* ------------------------------- BOOT ---------------------------- */

renderTicker();
renderContent();
renderBookshelf();
renderQuotes();
initScrollFlow();
initScrollReveal();
