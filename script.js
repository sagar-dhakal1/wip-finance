/* ------------------------------------------------------------------
   Sagar — Finance and Fiction · static site script
   All page content lives in index.html (fully static, no JS needed).
   This file only adds: rotating quotes, scroll progress, reveal-on-
   scroll animations, and offset-aware smooth anchor scrolling.
------------------------------------------------------------------- */

const QUOTES = [
  ["The stock market is a device for transferring money from the impatient to the patient.", "Warren Buffett"],
  ["All I want to know is where I'm going to die, so I'll never go there.", "Charlie Munger"],
  ["What gets measured gets managed.", "Peter Drucker"],
  ["Play long-term games with long-term people.", "Naval Ravikant"],
  ["Risk comes from not knowing what you're doing.", "Warren Buffett"],
];

const HEADER_OFFSET = 110;
const $ = (sel) => document.querySelector(sel);

/* ------------------------------ QUOTES --------------------------- */

function initQuotes() {
  const card = $(".quote-card");
  if (!card) return;
  const textEl = card.querySelector(".quote-text");
  const authorEl = card.querySelector(".quote-author");
  const dots = Array.from(card.querySelectorAll(".quote-dots button"));
  let i = 0;

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

/* ---------------------- ANCHOR / NAV SCROLLING ------------------- */

function initAnchorScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const id = a.getAttribute("href").slice(1);
      const target = id ? document.getElementById(id) : null;
      if (!target) return;
      e.preventDefault();
      const y = target.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
      window.scrollTo({ top: Math.max(0, y), behavior: "smooth" });
      history.replaceState(null, "", "#" + id);
    });
  });

  // land correctly when arriving with a hash in the URL
  if (location.hash.length > 1) {
    const target = document.getElementById(location.hash.slice(1));
    if (target) {
      requestAnimationFrame(() => {
        const y = target.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
        window.scrollTo({ top: Math.max(0, y) });
      });
    }
  }
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
      if (bar) bar.style.transform = `scaleX(${p})`;
      document.documentElement.style.setProperty("--scroll-y", y + "px");
      document.documentElement.style.setProperty("--scroll-p", String(p));
    });
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
}

function initScrollReveal() {
  if (!("IntersectionObserver" in window)) return;
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

initQuotes();
initAnchorScroll();
initScrollFlow();
initScrollReveal();
