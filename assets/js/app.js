/* ==========================================================================
   Parambariyam: site behaviour
   ========================================================================== */
(function () {
  "use strict";

  const SITE = window.SITE, PRODUCTS = window.PRODUCTS, CATS = window.CATEGORIES,
        CONCERNS = window.CONCERNS, ING = window.INGREDIENTS;
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => Array.from(el.querySelectorAll(s));
  const byId = id => PRODUCTS.find(p => p.id === id);
  const catName = id => (CATS.find(c => c.id === id) || {}).name || "";
  const esc = s => String(s == null ? "" : s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const money = n => SITE.currency + Number(n).toLocaleString("en-IN");
  const page = document.body.dataset.page || "";

  document.documentElement.classList.remove("no-js");

  /* ---------- Icons ---------- */
  const I = {
    search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>',
    bag: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 8h14l-1 12H6L5 8Z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/></svg>',
    menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 7h16M4 12h16M4 17h10"/></svg>',
    close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M6 6l12 12M18 6 6 18"/></svg>',
    plus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12h14"/></svg>',
    arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    leaf: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 4c-9 0-15 4-15 11 0 1.6.4 3 1 4.2C7.5 15 10.5 12 15 10c-4 2.6-6.6 5.6-8 9.6.8.3 1.7.4 2.6.4C17 20 20 13 20 4Z"/></svg>',
    wa: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2c-1.5 0-3-.4-4.3-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3Z"/></svg>',
    sun: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>',
    hand: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M7 11V6.5a1.5 1.5 0 0 1 3 0V11M10 10V4.5a1.5 1.5 0 0 1 3 0V10M13 10V5.5a1.5 1.5 0 0 1 3 0V12M16 9.5a1.5 1.5 0 0 1 3 0V14a7 7 0 0 1-7 7h-.5a6 6 0 0 1-4.6-2.2L4 15.2a1.5 1.5 0 0 1 2.3-1.9L7 14"/></svg>',
    home: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M3 11 12 4l9 7"/><path d="M5 10v10h14V10"/><path d="M10 20v-5h4v5"/></svg>',
    shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M12 3 5 6v6c0 4.4 3 7.8 7 9 4-1.2 7-4.6 7-9V6l-7-3Z"/><path d="m9 12 2 2 4-4"/></svg>',
    pot: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M8 4h8M9 4c0 2-3 3-3 7a6 6 0 0 0 12 0c0-4-3-5-3-7"/><path d="M6 21h12"/></svg>',
    truck: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M3 6h11v10H3zM14 9h4l3 3v4h-7"/><circle cx="7" cy="17.5" r="1.8"/><circle cx="17" cy="17.5" r="1.8"/></svg>'
  };
  window.ICONS = I;

  const sprig = '<svg class="sprig" viewBox="0 0 120 80" fill="currentColor" aria-hidden="true"><path d="M4 76C30 60 58 44 112 8l2 3C62 46 34 63 6 79Z"/><ellipse cx="34" cy="52" rx="10" ry="4" transform="rotate(-50 34 52)"/><ellipse cx="46" cy="58" rx="10" ry="4" transform="rotate(20 46 58)"/><ellipse cx="58" cy="36" rx="11" ry="4" transform="rotate(-60 58 36)"/><ellipse cx="72" cy="42" rx="11" ry="4" transform="rotate(15 72 42)"/><ellipse cx="82" cy="20" rx="11" ry="4" transform="rotate(-65 82 20)"/><ellipse cx="96" cy="26" rx="10" ry="4" transform="rotate(10 96 26)"/></svg>';
  window.SPRIG = sprig;

  /* ---------- Shell ---------- */
  const navLinks = [
    ["shop.html", "Shop all"],
    ["shop.html?cat=bath", "Bath & Skin"],
    ["shop.html?cat=hair", "Hair"],
    ["story.html", "Our story"],
    ["contact.html", "Contact"]
  ];
  const brandMark = '<span class="brand__mark" role="img" aria-label="Parambariyam"></span>';

  function current(href) {
    const here = location.pathname.split("/").pop() || "index.html";
    const [file, q] = href.split("?");
    if (file !== here) return false;
    if (!q) return !location.search || page !== "shop";
    return location.search.includes(q);
  }

  function shell() {
    const msgs = [
      "Handmade in small batches in a home kitchen",
      "Order on WhatsApp &middot; we reply personally",
      "Zero chemicals &middot; hand-picked &middot; sun-dried",
      "Eeyachombu hand-crafted by artisans of Kumbakonam"
    ];
    const top = document.createElement("div");
    top.innerHTML = `
      <a class="skip" href="#main">Skip to content</a>
      <div class="announce" role="region" aria-label="Announcements"><div class="announce__track">${msgs.map((m, i) => `<div class="announce__item${i ? "" : " is-on"}">${m}</div>`).join("")}</div></div>
      <header class="header" id="header">
        <div class="wrap header__inner">
          <button class="icon-btn menu-btn" data-open="menu" aria-label="Open menu">${I.menu}</button>
          <nav class="nav" aria-label="Primary">${navLinks.slice(0, 3).map(([h, t]) => `<a href="${h}"${current(h) ? ' aria-current="page"' : ""}>${t}</a>`).join("")}</nav>
          <a class="brand" href="index.html" aria-label="Parambariyam home">${brandMark}</a>
          <div class="header__actions">
            <nav class="nav" aria-label="Secondary" style="margin-right:14px">${navLinks.slice(3).map(([h, t]) => `<a href="${h}"${current(h) ? ' aria-current="page"' : ""}>${t}</a>`).join("")}</nav>
            <button class="icon-btn" data-open="search" aria-label="Search products">${I.search}</button>
            <button class="icon-btn" data-open="basket" aria-label="Open basket">${I.bag}<span class="badge-count" id="bagCount">0</span></button>
          </div>
        </div>
      </header>`;
    document.body.prepend(...top.childNodes);

    const contacts = SITE.contacts.map(c => `<a class="person" href="https://wa.me/${c.wa}" target="_blank" rel="noopener"><b>${esc(c.name)}</b>${esc(c.phone)}</a>`).join("");
    const foot = document.createElement("div");
    foot.innerHTML = `
      <footer class="footer">
        <div class="wrap">
          <div class="footer__top">
            <div>
              <a class="brand" href="index.html" aria-label="Parambariyam home">${brandMark}</a>
              <p style="max-width:34ch">Herbal bath powders, hair rituals, kitchen remedies and heritage vessels. Made by hand, the way our grandmothers did.</p>
            </div>
            <div><h4>Shop</h4><ul>${CATS.map(c => `<li><a href="shop.html?cat=${c.id}">${c.name}</a></li>`).join("")}<li><a href="shop.html">All products</a></li></ul></div>
            <div><h4>Parambariyam</h4><ul><li><a href="story.html">Our story</a></li><li><a href="story.html#ingredients">Ingredient library</a></li><li><a href="contact.html#how-to-order">How to order</a></li><li><a href="contact.html#faq">FAQs</a></li><li><a href="contact.html">Bulk &amp; gifting</a></li></ul></div>
            <div><h4>Order & enquiries</h4>${contacts}${SITE.email ? `<a class="person" href="mailto:${esc(SITE.email)}">${esc(SITE.email)}</a>` : ""}${SITE.instagram ? `<a class="person" href="${esc(SITE.instagram)}" target="_blank" rel="noopener">Instagram</a>` : ""}</div>
          </div>
          <div class="footer__bottom"><span>&copy; ${new Date().getFullYear()} Parambariyam. Back to our Roots.</span><span>Handmade in Tamil Nadu &middot; Orders on WhatsApp</span></div>
        </div>
      </footer>
      <a class="wa-float" href="https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent("Hi Parambariyam! I have a question.")}" target="_blank" rel="noopener" aria-label="Chat on WhatsApp">${I.wa}</a>
      <div class="scrim" id="scrim"></div>
      <aside class="drawer drawer--left" id="menu" aria-label="Menu" aria-hidden="true">
        <div class="drawer__head"><a class="brand" href="index.html" style="width:150px">${brandMark}</a><button class="icon-btn" data-close aria-label="Close menu">${I.close}</button></div>
        <div class="drawer__body"><nav class="mobile-nav">${[["index.html", "Home"], ...navLinks, ["shop.html?cat=wellness", "Kitchen Wellness"], ["shop.html?cat=heritage", "Heritage Vessels"]].map(([h, t]) => `<a href="${h}">${t}<span>${I.arrow.replace("<svg", '<svg width="20" height="20"')}</span></a>`).join("")}</nav>
        <div class="mobile-nav__contact"><p class="eyebrow">Order on WhatsApp</p>${contacts}</div></div>
      </aside>
      <aside class="drawer" id="basket" aria-label="Basket" aria-hidden="true">
        <div class="drawer__head"><h3>Your basket</h3><button class="icon-btn" data-close aria-label="Close basket">${I.close}</button></div>
        <div class="drawer__body" id="basketBody"></div>
        <div class="drawer__foot" id="basketFoot"></div>
      </aside>
      <div class="search-panel" id="search" role="dialog" aria-label="Search" aria-hidden="true">
        <div class="wrap">
          <div class="search-panel__bar">${I.search.replace("<svg", '<svg width="26" height="26"')}<input id="searchInput" type="search" placeholder="Search shikakai, hair oil, eeyachombu..." autocomplete="off" aria-label="Search products"><button class="icon-btn" data-close aria-label="Close search">${I.close}</button></div>
          <div class="search-suggest" id="searchSuggest">${["Bath powder", "Hair fall", "Baby", "Digestion", "Brass", "Gifting"].map(s => `<button class="chip" data-q="${s}">${s}</button>`).join("")}</div>
          <div class="search-results" id="searchResults"></div>
        </div>
      </div>
      <div class="toast" id="toast" role="status" aria-live="polite"></div>`;
    document.body.append(...foot.childNodes);

    // rotating announcement
    const items = $$(".announce__item");
    let ai = 0;
    if (items.length > 1) setInterval(() => {
      items[ai].classList.remove("is-on"); items[ai].classList.add("is-off");
      const prev = items[ai];
      setTimeout(() => prev.classList.remove("is-off"), 700);
      ai = (ai + 1) % items.length;
      items[ai].classList.add("is-on");
    }, 4200);

    // header shadow
    const header = $("#header");
    const onScroll = () => header.classList.toggle("is-scrolled", scrollY > 8);
    addEventListener("scroll", onScroll, { passive: true }); onScroll();
  }

  /* ---------- Overlays ---------- */
  let openEl = null, lastFocus = null;
  function open(id) {
    close();
    const el = document.getElementById(id); if (!el) return;
    lastFocus = document.activeElement;
    openEl = el;
    el.classList.add("is-open"); el.setAttribute("aria-hidden", "false");
    $("#scrim").classList.add("is-on");
    document.body.classList.add("locked");
    if (id === "basket") renderBasket();
    setTimeout(() => {
      const f = id === "search" ? $("#searchInput") : el.querySelector("button, a, input");
      f && f.focus();
    }, 60);
  }
  function close() {
    if (!openEl) return;
    openEl.classList.remove("is-open"); openEl.setAttribute("aria-hidden", "true");
    $("#scrim").classList.remove("is-on");
    document.body.classList.remove("locked");
    openEl = null;
    lastFocus && lastFocus.focus && lastFocus.focus();
  }
  window.PB_open = open;

  document.addEventListener("click", e => {
    const o = e.target.closest("[data-open]");
    if (o) { e.preventDefault(); open(o.dataset.open); return; }
    if (e.target.closest("[data-close]") || e.target.id === "scrim") { close(); return; }
    const add = e.target.closest("[data-add]");
    if (add) {
      e.preventDefault();
      const p = byId(add.dataset.add);
      if (p) addToBasket(p.id, add.dataset.variant != null ? +add.dataset.variant : 0, 1);
      return;
    }
    const q = e.target.closest("[data-q]");
    if (q) { $("#searchInput").value = q.dataset.q; runSearch(); }
  });
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") close();
    if (e.key === "/" && !/input|textarea/i.test(document.activeElement.tagName)) { e.preventDefault(); open("search"); }
    if (e.key === "Tab" && openEl) {
      const f = $$("a[href], button:not([disabled]), input, select, textarea", openEl).filter(x => x.offsetParent !== null);
      if (!f.length) return;
      const first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });

  /* ---------- Search ---------- */
  function haystack(p) {
    return [p.name, p.ta, p.subtitle, p.short, catName(p.category), ...(p.tags || []),
      ...p.concerns.map(c => (CONCERNS.find(x => x.id === c) || {}).name),
      ...p.ingredients.map(i => ING[i] ? ING[i].ta + " " + ING[i].en : "")].join(" ").toLowerCase();
  }
  function search(q) {
    const terms = q.toLowerCase().split(/\s+/).filter(Boolean);
    if (!terms.length) return [];
    return PRODUCTS.map(p => {
      const h = haystack(p);
      let score = 0;
      for (const t of terms) {
        const stem = t.replace(/s$/, "");
        if (p.name.toLowerCase().includes(stem)) score += 5;
        else if (h.includes(stem)) score += 1;
        else return null;
      }
      return { p, score };
    }).filter(Boolean).sort((a, b) => b.score - a.score).map(x => x.p);
  }
  window.PB_search = search;
  function runSearch() {
    const q = $("#searchInput").value.trim();
    const res = $("#searchResults");
    if (!q) { res.innerHTML = ""; return; }
    const hits = search(q);
    res.innerHTML = hits.length
      ? hits.map(p => `<a class="search-hit" href="product.html?p=${p.id}"><img src="${p.images[0]}" alt="" loading="lazy"><span><strong>${esc(p.name)}</strong><small>${esc(p.subtitle)}</small></span>${I.arrow.replace("<svg", '<svg width="20" height="20"')}</a>`).join("") +
        `<a class="link-arrow" style="margin-top:14px;justify-self:start" href="shop.html?q=${encodeURIComponent(q)}">See all results <span>&rarr;</span></a>`
      : `<p class="fine" style="padding:12px 0">Nothing found for &ldquo;${esc(q)}&rdquo;. Try &ldquo;bath&rdquo;, &ldquo;hair&rdquo; or <a href="https://wa.me/${SITE.whatsapp}" style="text-decoration:underline">ask us on WhatsApp</a>.</p>`;
  }

  /* ---------- Basket ---------- */
  const KEY = "pb_basket_v1";
  let basket = [];
  try { basket = JSON.parse(localStorage.getItem(KEY)) || []; } catch (e) { basket = []; }
  basket = basket.filter(l => byId(l.id) && byId(l.id).variants[l.v]);
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(basket)); } catch (e) {} updateCount(); };
  const count = () => basket.reduce((s, l) => s + l.qty, 0);
  const priceOf = l => byId(l.id).variants[l.v].price;
  function total() {
    let t = 0, unknown = 0;
    basket.forEach(l => { const pr = priceOf(l); if (pr == null) unknown++; else t += pr * l.qty; });
    return { t, unknown };
  }
  function updateCount(bump) {
    const el = $("#bagCount"); if (!el) return;
    const n = count();
    el.textContent = n; el.classList.toggle("is-on", n > 0);
    if (bump) { el.classList.remove("bump"); void el.offsetWidth; el.classList.add("bump"); }
  }
  function addToBasket(id, v, qty) {
    const ex = basket.find(l => l.id === id && l.v === v);
    if (ex) ex.qty = Math.min(99, ex.qty + qty); else basket.push({ id, v, qty });
    save(); updateCount(true);
    const p = byId(id);
    toast(`<img src="${p.images[0]}" alt=""><span><b>${esc(p.name)}</b><br><small>${esc(p.variants[v].label)} &middot; added to basket</small></span><button data-open="basket">View</button>`);
    if (openEl && openEl.id === "basket") renderBasket();
  }
  window.PB_add = addToBasket;

  let tt;
  function toast(html) {
    const t = $("#toast"); t.innerHTML = html; t.classList.add("is-on");
    clearTimeout(tt); tt = setTimeout(() => t.classList.remove("is-on"), 3600);
  }

  let stage = "lines";
  function renderBasket() {
    const body = $("#basketBody"), foot = $("#basketFoot");
    if (!basket.length) {
      stage = "lines";
      body.innerHTML = `<div class="basket-empty">${I.pot}<h3>Your basket is empty</h3><p>Start with our bestselling Nalangu Maavu or Shika Podi.</p><a class="btn" href="shop.html">Shop the range</a></div>`;
      foot.innerHTML = ""; return;
    }
    const { t, unknown } = total();
    const totalHtml = unknown === basket.length ? `<span class="price--ask">Shared on WhatsApp</span>` : `<strong>${money(t)}</strong>${unknown ? `<small class="fine"> + ${unknown} item${unknown > 1 ? "s" : ""} priced on WhatsApp</small>` : ""}`;

    if (stage === "lines") {
      body.innerHTML = basket.map((l, i) => {
        const p = byId(l.id), vr = p.variants[l.v];
        return `<div class="line"><a href="product.html?p=${p.id}"><img src="${p.images[0]}" alt="${esc(p.name)}"></a>
          <div><a class="line__name" href="product.html?p=${p.id}">${esc(p.name)}</a><div class="line__meta">${esc(vr.label)}${vr.note ? " &middot; " + esc(vr.note) : ""}</div>
          <div class="qty"><button data-dec="${i}" aria-label="Decrease">&minus;</button><input value="${l.qty}" data-qty="${i}" inputmode="numeric" aria-label="Quantity"><button data-inc="${i}" aria-label="Increase">+</button></div></div>
          <div><div class="line__price">${vr.price != null ? money(vr.price * l.qty) : '<span class="price--ask">On ask</span>'}</div><button class="line__remove" data-rm="${i}">Remove</button></div></div>`;
      }).join("");
      foot.innerHTML = `<div class="totals"><span>Subtotal</span>${totalHtml}</div>
        <p class="fine">Delivery charges and final pricing are confirmed personally on WhatsApp. No online payment needed now.</p>
        <button class="btn btn--block" id="toDetails" style="margin-top:12px">Continue to details ${I.arrow}</button>`;
    } else {
      let saved = {};
      try { saved = JSON.parse(localStorage.getItem("pb_details")) || {}; } catch (e) {}
      body.innerHTML = `<div class="steps-mini"><button id="backLines">&larr; Basket</button> / <b>Delivery details</b></div>
        <form class="checkout" id="checkoutForm" novalidate>
          <div class="field"><label for="f-name">Full name</label><input id="f-name" name="name" autocomplete="name" required value="${esc(saved.name)}"></div>
          <div class="field"><label for="f-phone">Phone (WhatsApp)</label><input id="f-phone" name="phone" type="tel" inputmode="tel" autocomplete="tel" required pattern="[0-9+ ]{10,15}" value="${esc(saved.phone)}"></div>
          <div class="field"><label for="f-addr">Delivery address</label><textarea id="f-addr" name="addr" autocomplete="street-address" required>${esc(saved.addr)}</textarea></div>
          <div class="row-2"><div class="field"><label for="f-city">City</label><input id="f-city" name="city" autocomplete="address-level2" required value="${esc(saved.city)}"></div>
          <div class="field"><label for="f-pin">Pincode</label><input id="f-pin" name="pin" inputmode="numeric" autocomplete="postal-code" required pattern="[0-9]{6}" maxlength="6" value="${esc(saved.pin)}"></div></div>
          <div class="field"><label for="f-note">Note (optional)</label><textarea id="f-note" name="note" placeholder="Gift wrap, preferred delivery time, questions...">${esc(saved.note)}</textarea></div>
        </form>`;
      foot.innerHTML = `<div class="totals"><span>Subtotal</span>${totalHtml}</div>
        <button class="btn btn--wa btn--block" id="sendOrder" style="margin-top:12px">${I.wa} Send order on WhatsApp</button>
        <p class="fine" style="margin-top:10px;text-align:center">Opens WhatsApp with your order filled in. We confirm price, delivery and payment (UPI / bank transfer) personally.</p>`;
    }
  }

  document.addEventListener("click", e => {
    const t = e.target.closest("button"); if (!t || !t.closest("#basket")) return;
    if (t.dataset.inc != null) { basket[+t.dataset.inc].qty = Math.min(99, basket[+t.dataset.inc].qty + 1); save(); renderBasket(); }
    else if (t.dataset.dec != null) { const l = basket[+t.dataset.dec]; l.qty--; if (l.qty < 1) basket.splice(+t.dataset.dec, 1); save(); renderBasket(); }
    else if (t.dataset.rm != null) { basket.splice(+t.dataset.rm, 1); save(); renderBasket(); }
    else if (t.id === "toDetails") { stage = "details"; renderBasket(); setTimeout(() => $("#f-name") && $("#f-name").focus(), 50); }
    else if (t.id === "backLines") { stage = "lines"; renderBasket(); }
    else if (t.id === "sendOrder") sendOrder();
  });
  document.addEventListener("change", e => {
    const i = e.target.dataset && e.target.dataset.qty;
    if (i == null) return;
    const n = parseInt(e.target.value, 10);
    if (!n || n < 1) basket.splice(+i, 1); else basket[+i].qty = Math.min(99, n);
    save(); renderBasket();
  });

  function sendOrder() {
    const f = $("#checkoutForm"); let ok = true;
    $$(".field", f).forEach(fd => {
      const inp = fd.querySelector("input, textarea");
      const bad = !inp.checkValidity() || (inp.required && !inp.value.trim());
      fd.classList.toggle("is-invalid", bad); if (bad && ok) { ok = false; inp.focus(); }
    });
    if (!ok) return;
    const d = Object.fromEntries(new FormData(f).entries());
    try { localStorage.setItem("pb_details", JSON.stringify(d)); } catch (e) {}
    const { t, unknown } = total();
    const lines = basket.map((l, i) => {
      const p = byId(l.id), vr = p.variants[l.v];
      return `${i + 1}. ${p.name} (${vr.label}) x ${l.qty}${vr.price != null ? " = " + money(vr.price * l.qty) : ""}`;
    });
    const msg = [
      "Vanakkam Parambariyam! I'd like to place an order:", "",
      ...lines, "",
      unknown === basket.length ? "Please share the total with delivery." : `Subtotal: ${money(t)}${unknown ? " (+ items to be priced)" : ""}`, "",
      "*Deliver to*",
      d.name, d.phone, d.addr, `${d.city} - ${d.pin}`,
      d.note ? `\nNote: ${d.note}` : ""
    ].join("\n").trim();
    window.open(`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}`, "_blank", "noopener");
    toast(`<span><b>Order sent to WhatsApp.</b><br><small>We'll confirm shortly. Your basket is saved until you clear it.</small></span><button id="clearBasket">Clear</button>`);
  }
  document.addEventListener("click", e => {
    if (e.target.id === "clearBasket") { basket = []; save(); stage = "lines"; renderBasket(); $("#toast").classList.remove("is-on"); }
  });

  /* ---------- Cards ---------- */
  function priceLabel(p) {
    const ps = p.variants.map(v => v.price).filter(x => x != null);
    if (!ps.length) return '<span class="price--ask">Price on WhatsApp</span>';
    const min = Math.min(...ps);
    return `<span class="price">${p.variants.length > 1 && ps.length > 1 && Math.max(...ps) !== min ? "From " : ""}${money(min)}</span>`;
  }
  window.PB_priceLabel = priceLabel;
  function card(p) {
    const tagCls = t => /best/i.test(t) ? "tag--indigo" : /gift|artisan/i.test(t) ? "tag--turmeric" : "tag--leaf";
    const sizes = p.variants.length > 1 ? `<span class="sizes-hint">${p.variants.length} sizes</span>` : "";
    return `<article class="card reveal">
      <div class="card__media">
        <img src="${p.images[0]}" alt="${esc(p.name)}" loading="lazy" decoding="async">
        ${p.images[1] ? `<img src="${p.images[1]}" alt="" loading="lazy" decoding="async" aria-hidden="true">` : ""}
        <div class="card__tags">${(p.tags || []).slice(0, 2).map(t => `<span class="tag ${tagCls(t)}">${esc(t)}</span>`).join("")}</div>
        <div class="card__quick"><button class="btn btn--sm" data-add="${p.id}">${I.plus} Add ${esc(p.variants[0].label)}</button></div>
      </div>
      <div class="card__body">
        <span class="card__cat">${esc(catName(p.category))}</span>
        <h3 class="card__name"><a href="product.html?p=${p.id}">${esc(p.name)}</a></h3>
        <p class="card__desc">${esc(p.subtitle)}</p>
        <div class="card__foot">${priceLabel(p)}${sizes}<button class="card__add-m" data-add="${p.id}" aria-label="Add ${esc(p.name)} to basket">${I.plus}</button></div>
      </div>
    </article>`;
  }
  window.PB_card = card;

  /* ---------- Reveal ---------- */
  let io;
  function reveal(root = document) {
    const els = $$(".reveal:not(.is-in)", root);
    if (!("IntersectionObserver" in window)) { els.forEach(e => e.classList.add("is-in")); return; }
    io = io || new IntersectionObserver(es => es.forEach(en => { if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); } }), { rootMargin: "0px 0px -8% 0px", threshold: .05 });
    els.forEach(e => io.observe(e));
  }
  window.PB_reveal = reveal;

  /* ---------- Page: home ---------- */
  function home() {
    const best = PRODUCTS.slice().sort((a, b) => a.featured - b.featured).slice(0, 8);
    const g = $("#bestsellers"); if (g) g.innerHTML = best.map(card).join("");
    const cats = $("#cats");
    if (cats) cats.innerHTML = CATS.map((c, i) => `<a class="cat reveal d${i % 4}" href="shop.html?cat=${c.id}"><img src="${c.img}" alt="" loading="lazy"><small>${c.ta}<span class="cat__n"> &middot; ${PRODUCTS.filter(p => p.category === c.id).length} products</span></small><h3>${c.name}</h3><span class="go">Explore ${I.arrow.replace("<svg", '<svg width="16" height="16"')}</span></a>`).join("");
    ingredientGrid();
  }

  function ingredientGrid() {
    const host = $("#ingGrid"); if (!host) return;
    const filt = $("#ingFilter");
    const groups = [["all", "All"], ["bath", "Bath & skin"], ["hair", "Hair"], ["wellness", "Wellness"]];
    const colors = { turmeric: ["var(--turmeric-tint)", "#a26e07"], leaf: ["var(--leaf-tint)", "var(--leaf-deep)"], rose: ["#f6e3e1", "#9b4a43"], ink: ["var(--indigo-tint)", "var(--indigo)"] };
    const used = id => PRODUCTS.filter(p => p.ingredients.includes(id));
    function draw(g) {
      host.innerHTML = Object.entries(ING).filter(([, v]) => g === "all" || v.group === g).map(([id, v]) => {
        const [bg, fg] = colors[v.color] || colors.leaf;
        const inP = used(id);
        return `<div class="ing reveal"><div class="ing__dot" style="background:${bg};color:${fg}">${I.leaf}</div><h4>${esc(v.ta)}</h4><span class="en">${esc(v.en)}</span><p>${esc(v.note)}</p>${inP.length ? `<p class="fine" style="margin-top:10px">In: ${inP.map(p => `<a href="product.html?p=${p.id}" style="text-decoration:underline;text-underline-offset:2px">${esc(p.name)}</a>`).join(", ")}</p>` : ""}</div>`;
      }).join("");
      reveal(host);
    }
    if (filt) {
      filt.innerHTML = groups.map(([k, n], i) => `<button class="chip" aria-pressed="${i === 0}" data-g="${k}">${n}</button>`).join("");
      filt.addEventListener("click", e => {
        const b = e.target.closest("[data-g]"); if (!b) return;
        $$("[data-g]", filt).forEach(x => x.setAttribute("aria-pressed", x === b));
        draw(b.dataset.g);
      });
    }
    draw("all");
  }

  /* ---------- Page: shop ---------- */
  function shop() {
    const params = new URLSearchParams(location.search);
    const state = { cat: params.get("cat") || "all", concern: params.get("concern") || "", sort: params.get("sort") || "featured", q: params.get("q") || "" };
    const chips = $("#catChips"), conc = $("#concernChips"), grid = $("#shopGrid"), sort = $("#sort"), cnt = $("#count"), title = $("#shopTitle"), intro = $("#shopIntro");

    chips.innerHTML = [["all", "All", PRODUCTS.length], ...CATS.map(c => [c.id, c.name, PRODUCTS.filter(p => p.category === c.id).length])]
      .map(([id, n, k]) => `<button class="chip" data-cat="${id}">${n} <small>${k}</small></button>`).join("");
    conc.innerHTML = `<span>Shop by need</span>` + CONCERNS.map(c => `<button class="chip" data-concern="${c.id}">${c.name}</button>`).join("");
    sort.value = state.sort;

    function apply(push) {
      let list = state.q ? search(state.q) : PRODUCTS.slice();
      if (state.cat !== "all") list = list.filter(p => p.category === state.cat);
      if (state.concern) list = list.filter(p => p.concerns.includes(state.concern));
      if (!state.q || state.sort !== "featured") {
        const minP = p => Math.min(...p.variants.map(v => v.price == null ? Infinity : v.price));
        if (state.sort === "featured") list.sort((a, b) => a.featured - b.featured);
        if (state.sort === "az") list.sort((a, b) => a.name.localeCompare(b.name));
        if (state.sort === "price-asc") list.sort((a, b) => minP(a) - minP(b));
        if (state.sort === "price-desc") list.sort((a, b) => (minP(b) === Infinity ? -1 : minP(b)) - (minP(a) === Infinity ? -1 : minP(a)));
      }
      $$("[data-cat]", chips).forEach(b => b.setAttribute("aria-pressed", b.dataset.cat === state.cat));
      $$("[data-concern]", conc).forEach(b => b.setAttribute("aria-pressed", b.dataset.concern === state.concern));
      const c = CATS.find(x => x.id === state.cat);
      title.innerHTML = state.q ? `Results for <em class="serif-it">&ldquo;${esc(state.q)}&rdquo;</em>` : c ? esc(c.name) : "The Parambariyam range";
      intro.textContent = state.q ? "" : c ? c.blurb : "Every product is made by hand in small batches. Hand-picked, sun-dried, finely ground, and free of chemicals.";
      cnt.textContent = `${list.length} product${list.length === 1 ? "" : "s"}`;
      grid.innerHTML = list.length ? list.map(card).join("") : `<div class="empty-state"><h3>Nothing here yet</h3><p>Try another filter, or tell us what you're looking for.</p><a class="btn btn--wa" href="https://wa.me/${SITE.whatsapp}" target="_blank" rel="noopener">${I.wa} Ask on WhatsApp</a></div>`;
      reveal(grid);
      if (push) {
        const u = new URLSearchParams();
        if (state.cat !== "all") u.set("cat", state.cat);
        if (state.concern) u.set("concern", state.concern);
        if (state.sort !== "featured") u.set("sort", state.sort);
        if (state.q) u.set("q", state.q);
        history.replaceState(null, "", "shop.html" + (u.toString() ? "?" + u : ""));
        $$(".nav a").forEach(a => a.toggleAttribute("aria-current", false));
      }
    }
    chips.addEventListener("click", e => { const b = e.target.closest("[data-cat]"); if (!b) return; state.cat = b.dataset.cat; state.q = ""; apply(true); });
    conc.addEventListener("click", e => { const b = e.target.closest("[data-concern]"); if (!b) return; state.concern = state.concern === b.dataset.concern ? "" : b.dataset.concern; apply(true); });
    sort.addEventListener("change", () => { state.sort = sort.value; apply(true); });
    apply(false);
  }

  /* ---------- Page: product ---------- */
  function product() {
    const id = new URLSearchParams(location.search).get("p");
    const p = byId(id) || PRODUCTS[0];
    const root = $("#pdp");
    let v = 0, qty = 1;

    document.title = `${p.name} | ${p.subtitle} | Parambariyam`;
    const md = $('meta[name="description"]'); if (md) md.setAttribute("content", p.short);
    const ld = document.createElement("script"); ld.type = "application/ld+json";
    ld.textContent = JSON.stringify({ "@context": "https://schema.org", "@type": "Product", name: p.name, description: p.short, image: p.images.map(i => new URL(i, location.href).href), brand: { "@type": "Brand", name: "Parambariyam" }, category: catName(p.category) });
    document.head.appendChild(ld);

    const ingChips = p.ingredients.map(i => ING[i] ? `<span class="ing-chip" tabindex="0" data-tip="${esc(ING[i].en + ". " + ING[i].note)}">${esc(ING[i].ta)}</span>` : "").join("");
    const list = arr => `<ul>${arr.map(x => `<li>${esc(x)}</li>`).join("")}</ul>`;
    const ol = arr => `<ol style="padding-left:18px;margin:0">${arr.map(x => `<li style="margin-bottom:6px">${esc(x)}</li>`).join("")}</ol>`;

    root.innerHTML = `
      <div class="gallery${p.images.length < 2 ? " gallery--single" : ""}">
        <div class="gallery__thumbs">${p.images.map((src, i) => `<button aria-label="Image ${i + 1}" aria-current="${i === 0}" data-img="${i}"><img src="${src}" alt=""></button>`).join("")}</div>
        <div class="gallery__main" id="mainImg"><img src="${p.images[0]}" alt="${esc(p.name)}"></div>
      </div>
      <div class="pdp__info">
        <nav class="crumbs" aria-label="Breadcrumb"><a href="index.html">Home</a><span aria-hidden="true">/</span><a href="shop.html?cat=${p.category}">${esc(catName(p.category))}</a></nav>
        <div class="pdp__tags">${(p.tags || []).map(t => `<span class="tag tag--leaf">${esc(t)}</span>`).join("")}</div>
        <h1>${esc(p.name)}</h1>
        <div class="pdp__ta">${esc(p.ta)} &middot; ${esc(p.subtitle)}</div>
        <div class="pdp__price" id="pdpPrice"></div>
        <p class="pdp__short">${esc(p.short)}</p>
        <div class="opt-label">${p.variants.length > 1 ? "Choose size" : "Pack"} <span id="varNote"></span></div>
        <div class="variants" role="radiogroup" aria-label="Size">${p.variants.map((vr, i) => `<button class="variant" role="radio" aria-checked="${i === 0}" data-v="${i}"><b>${esc(vr.label)}</b>${vr.note ? `<small>${esc(vr.note)}</small>` : ""}</button>`).join("")}</div>
        <div class="opt-label">Quantity</div>
        <div class="buy-row">
          <div class="qty qty--lg"><button id="qDec" aria-label="Decrease">&minus;</button><input id="qIn" value="1" inputmode="numeric" aria-label="Quantity"><button id="qInc" aria-label="Increase">+</button></div>
          <button class="btn" id="addBtn">${I.bag} Add to basket</button>
        </div>
        <a class="btn btn--wa btn--block" id="waNow" target="_blank" rel="noopener">${I.wa} Order this on WhatsApp</a>
        <div class="assure">
          <div>${I.hand}Made by hand, small batches</div>
          <div>${I.sun}${p.category === "heritage" ? "Traditional craft, built to last" : "Sun-dried, zero chemicals"}</div>
          <div>${I.truck}Delivery confirmed on WhatsApp</div>
        </div>
        <div class="acc">
          ${p.ingredients.length ? `<details open><summary>What's inside<span class="pm"></span></summary><div class="acc__body"><div class="ing-chips">${ingChips}</div><p class="fine">Hover or tap an ingredient to learn what it does. Nothing else added: no preservatives, fragrance or fillers.</p></div></details>` : ""}
          <details${p.ingredients.length ? "" : " open"}><summary>${p.category === "heritage" ? "Why you'll love it" : "Benefits"}<span class="pm"></span></summary><div class="acc__body">${list(p.benefits)}</div></details>
          <details><summary>${p.category === "heritage" ? "How to use" : "How to use"}<span class="pm"></span></summary><div class="acc__body">${ol(p.howTo)}</div></details>
          <details><summary>Care &amp; storage<span class="pm"></span></summary><div class="acc__body"><p>${esc(p.care)}</p></div></details>
        </div>
        ${p.caution ? `<div class="caution"><b>Please note:</b> ${esc(p.caution)}</div>` : ""}
      </div>`;

    const sticky = document.createElement("div");
    sticky.className = "sticky-buy";
    sticky.innerHTML = `<div class="sticky-buy__name">${esc(p.name)}<small id="stickyVar"></small></div><button class="btn btn--sm" id="stickyAdd">Add to basket</button>`;
    document.body.appendChild(sticky);
    document.body.classList.add("has-sticky-buy");

    function sync() {
      const vr = p.variants[v];
      $("#pdpPrice").innerHTML = vr.price != null ? money(vr.price) : '<span class="price--ask">Price shared on WhatsApp</span>';
      $("#varNote").textContent = vr.label + (vr.note ? " · " + vr.note : "");
      $("#stickyVar").textContent = vr.label + (vr.price != null ? " · " + money(vr.price) : "");
      $$(".variant", root).forEach(b => b.setAttribute("aria-checked", +b.dataset.v === v));
      $("#qIn").value = qty;
      const msg = `Vanakkam Parambariyam! I'd like to order:\n${p.name} (${vr.label}) x ${qty}\n\nPlease share price and delivery details.`;
      $("#waNow").href = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}`;
    }
    root.addEventListener("click", e => {
      const b = e.target.closest("button"); if (!b) return;
      if (b.dataset.v != null) { v = +b.dataset.v; sync(); }
      if (b.dataset.img != null) {
        const img = $("#mainImg img"); img.style.opacity = 0;
        setTimeout(() => { img.src = p.images[+b.dataset.img]; img.style.opacity = 1; }, 150);
        $$("[data-img]", root).forEach(x => x.setAttribute("aria-current", x === b));
      }
      if (b.id === "qDec") { qty = Math.max(1, qty - 1); sync(); }
      if (b.id === "qInc") { qty = Math.min(99, qty + 1); sync(); }
      if (b.id === "addBtn") addToBasket(p.id, v, qty);
    });
    $("#qIn").addEventListener("change", e => { qty = Math.max(1, Math.min(99, parseInt(e.target.value, 10) || 1)); sync(); });
    $("#stickyAdd").addEventListener("click", () => addToBasket(p.id, v, qty));
    // zoom
    const main = $("#mainImg");
    main.addEventListener("click", () => main.classList.toggle("is-zoom"));
    main.addEventListener("mousemove", e => {
      if (!main.classList.contains("is-zoom")) return;
      const r = main.getBoundingClientRect();
      main.querySelector("img").style.transformOrigin = `${(e.clientX - r.left) / r.width * 100}% ${(e.clientY - r.top) / r.height * 100}%`;
    });
    main.addEventListener("mouseleave", () => main.classList.remove("is-zoom"));
    // sticky bar when buy row out of view
    const target = $("#addBtn");
    if ("IntersectionObserver" in window) new IntersectionObserver(([en]) => sticky.classList.toggle("is-on", !en.isIntersecting && en.boundingClientRect.top < 0)).observe(target);
    sync();

    // related
    const rel = PRODUCTS.filter(x => x.id !== p.id).map(x => ({ x, s: (x.category === p.category ? 2 : 0) + x.concerns.filter(c => p.concerns.includes(c)).length })).sort((a, b) => b.s - a.s || a.x.featured - b.x.featured).slice(0, 4).map(o => o.x);
    $("#related").innerHTML = rel.map(card).join("");

    // ritual pairing copy
    const pair = { bath: "Pair with Shika Podi on oil-bath days for the complete Saturday ritual.", hair: "Oil the night before, wash with Shika Podi the next morning.", wellness: "A pinch after dinner, every day, works better than a spoonful once in a while.", heritage: "Makes a beautiful gift for housewarmings and weddings." }[p.category];
    const pe = $("#pairNote"); if (pe) pe.textContent = pair;
  }

  /* ---------- Boot ---------- */
  shell();
  updateCount();
  const si = $("#searchInput");
  si.addEventListener("input", runSearch);
  si.addEventListener("keydown", e => { if (e.key === "Enter" && si.value.trim()) location.href = "shop.html?q=" + encodeURIComponent(si.value.trim()); });
  if (page === "home") home();
  if (page === "shop") shop();
  if (page === "product") product();
  if (page === "story") ingredientGrid();
  reveal();
})();
