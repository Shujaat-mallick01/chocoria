/* ═══════════════════════════════════════════════════════════════════════
   Chocoria — language toggle, menu, filters, cart, WhatsApp checkout.
   Every user-facing string lives in the TEXT object below.
   ═══════════════════════════════════════════════════════════════════════ */

const WHATSAPP = '97334041163';
const STORE_CART = 'chocoria.cart';
const STORE_LANG = 'chocoria.lang';

/* ─────────────────────────────── strings ─────────────────────────────── */
const TEXT = {
  ar: {
    'meta.title': 'شوكوريا | شوكولاتة سويسرية وبلجيكية فاخرة في البحرين',
    'meta.desc': 'شوكوريا: شوكولاتة سويسرية وبلجيكية فاخرة، بوكسات هدايا وتوزيعات للمناسبات في البحرين. اطلب الآن عبر واتساب.',

    'ui.langLabel': 'EN',

    'nav.home': 'الرئيسية',
    'nav.shop': 'الشوكولاتة',
    'nav.gifts': 'الهدايا والتوزيعات',
    'nav.story': 'قصتنا',
    'nav.contact': 'تواصل معنا',

    'hero.h1': 'أكثر من مجرد شوكولاتة',
    'hero.sub': 'جودة تجمع بين سحر سويسرا وروعة بلجيكا',
    'hero.cta1': 'تصفّح الشوكولاتة',
    'hero.cta2': 'اطلب عبر واتساب',

    'shop.h2': 'تشكيلتنا',
    'shop.all': 'الكل',
    'shop.pralines': 'برالين',
    'shop.truffles': 'ترافل',
    'shop.giftBoxes': 'بوكسات الهدايا',
    'shop.favors': 'توزيعات',
    'shop.add': 'أضف إلى السلة',
    'shop.noneInFilter': 'لا توجد منتجات في هذا التصنيف حالياً.',

    'gifts.h2': 'هدايا تليق بمناسباتكم',
    'gifts.body': 'نجهّز لكم بوكسات هدايا وتوزيعات خاصة للأعياد والأعراس والمواليد والتخرّج وهدايا الشركات، بالتصميم والكمية التي تناسبكم.',
    'gifts.cta': 'اطلب بوكس خاص',

    'story.h2': 'قصتنا',
    'story.body': 'في شوكوريا نختار أجود أنواع الشوكولاتة السويسرية والبلجيكية، ونقدّمها بلمسة فاخرة تناسب لحظاتكم اليومية ومناسباتكم الخاصة.',
    'story.p1': 'طعم فاخر في كل لحظة',
    'story.p2': 'اختيارك دائماً مميز',
    'story.p3': 'جودة سويسرية وبلجيكية',

    'insta.h2': 'تابعونا على إنستغرام',

    'visit.h2': 'زورونا',
    'visit.addressLabel': 'الموقع',
    'visit.address': 'حاضنة روزي فود، الرفاعة حجيات، البحرين',
    'visit.phoneLabel': 'الهاتف',
    'visit.hoursLabel': 'أوقات العمل',
    'visit.hours': '[أوقات العمل]',
    'visit.instaLabel': 'إنستغرام',
    'visit.call': 'اتصلوا بنا',

    'footer.credit': 'تصميم الموقع: Shujaat Mallick',

    'cart.title': 'سلة الطلب',
    'cart.empty': 'سلتكم فارغة حتى الآن.',
    'cart.subtotal': 'المجموع',
    'cart.name': 'الاسم',
    'cart.method': 'طريقة الاستلام',
    'cart.pickup': 'استلام من الموقع',
    'cart.delivery': 'توصيل',
    'cart.area': 'المنطقة',
    'cart.notes': 'ملاحظات',
    'cart.send': 'أرسل الطلب عبر واتساب',

    'err.name': 'الرجاء كتابة الاسم.',
    'err.area': 'الرجاء كتابة المنطقة لإتمام التوصيل.',
    'err.empty': 'السلة فارغة، أضيفوا منتجاً أولاً.',

    'toast.added': 'أُضيف إلى السلة',

    'a11y.skip': 'تخطَّ إلى تشكيلتنا',
    'a11y.brand': 'شوكوريا — الصفحة الرئيسية',
    'a11y.nav': 'التنقل الرئيسي',
    'a11y.navMobile': 'التنقل في الجوال',
    'a11y.footerNav': 'روابط الموقع',
    'a11y.lang': 'Switch to English',
    'a11y.openMenu': 'فتح القائمة',
    'a11y.closeMenu': 'إغلاق القائمة',
    'a11y.closeCart': 'إغلاق السلة',
    'a11y.filters': 'تصفية حسب النوع',
    'a11y.map': 'موقع شوكوريا على الخريطة',
    'a11y.wa': 'تواصل معنا عبر واتساب',
    'a11y.cart': n => `سلة الطلب، ${n} منتج`,
    'a11y.inc': name => `زيادة كمية ${name}`,
    'a11y.dec': name => `إنقاص كمية ${name}`,
    'a11y.remove': name => `إزالة ${name} من السلة`,

    'alt.logo': 'شعار شوكوريا للشوكولاتة السويسرية والبلجيكية',
    'alt.logoRing': 'شعار شوكوريا داخل إطار ذهبي',
    'alt.logoSmall': 'شعار شوكوريا',
    'alt.hero': 'تشكيلة شوكولاتة شوكوريا الفاخرة',
    'alt.gift': 'بوكس هدايا من شوكوريا مجهّز للمناسبات',
    'alt.insta1': 'من حساب شوكوريا على إنستغرام: برالين مشكّل',
    'alt.insta2': 'من حساب شوكوريا على إنستغرام: ترافل داكن',
    'alt.insta3': 'من حساب شوكوريا على إنستغرام: بوكس هدايا',
    'alt.insta4': 'من حساب شوكوريا على إنستغرام: شوكولاتة بالبندق',
    'alt.insta5': 'من حساب شوكوريا على إنستغرام: توزيعات مناسبات',
    'alt.insta6': 'من حساب شوكوريا على إنستغرام: حبوب الكاكاو'
  },

  en: {
    'meta.title': 'Chocoria | Luxury Swiss & Belgian Chocolate in Bahrain',
    'meta.desc': 'Chocoria: luxury Swiss and Belgian chocolate, gift boxes, and occasion favors in Bahrain. Order easily on WhatsApp.',

    'ui.langLabel': 'ع',

    'nav.home': 'Home',
    'nav.shop': 'Chocolates',
    'nav.gifts': 'Gifts & favors',
    'nav.story': 'Our story',
    'nav.contact': 'Contact',

    'hero.h1': 'More Than Chocolate',
    'hero.sub': 'Quality that brings together the charm of Switzerland and the richness of Belgium',
    'hero.cta1': 'Browse chocolates',
    'hero.cta2': 'Order on WhatsApp',

    'shop.h2': 'Our collection',
    'shop.all': 'All',
    'shop.pralines': 'Pralines',
    'shop.truffles': 'Truffles',
    'shop.giftBoxes': 'Gift boxes',
    'shop.favors': 'Favors',
    'shop.add': 'Add to cart',
    'shop.noneInFilter': 'Nothing in this category just yet.',

    'gifts.h2': 'Gifts made for your occasions',
    'gifts.body': 'We prepare gift boxes and favors for Eid, weddings, newborns, graduations, and corporate gifting — in the design and quantity that suit you.',
    'gifts.cta': 'Request a custom box',

    'story.h2': 'Our story',
    'story.body': 'At Chocoria we choose the finest Swiss and Belgian chocolate and present it with a touch of luxury, for your everyday moments and your special occasions.',
    'story.p1': 'A luxurious taste in every moment',
    'story.p2': 'Your choice, always special',
    'story.p3': 'Swiss and Belgian quality',

    'insta.h2': 'Follow us on Instagram',

    'visit.h2': 'Visit us',
    'visit.addressLabel': 'Location',
    'visit.address': 'Rosy Food incubator, Riffa Hajiyat, Bahrain',
    'visit.phoneLabel': 'Phone',
    'visit.hoursLabel': 'Working hours',
    'visit.hours': '[Working hours]',
    'visit.instaLabel': 'Instagram',
    'visit.call': 'Call us',

    'footer.credit': 'Website by Shujaat Mallick',

    'cart.title': 'Your order',
    'cart.empty': 'Your cart is empty.',
    'cart.subtotal': 'Total',
    'cart.name': 'Name',
    'cart.method': 'Collection method',
    'cart.pickup': 'Pickup',
    'cart.delivery': 'Delivery',
    'cart.area': 'Area',
    'cart.notes': 'Notes',
    'cart.send': 'Send order on WhatsApp',

    'err.name': 'Please enter your name.',
    'err.area': 'Please enter the area for delivery.',
    'err.empty': 'Your cart is empty — add a product first.',

    'toast.added': 'Added to cart',

    'a11y.skip': 'Skip to our collection',
    'a11y.brand': 'Chocoria — home',
    'a11y.nav': 'Main navigation',
    'a11y.navMobile': 'Mobile navigation',
    'a11y.footerNav': 'Site links',
    'a11y.lang': 'التبديل إلى العربية',
    'a11y.openMenu': 'Open menu',
    'a11y.closeMenu': 'Close menu',
    'a11y.closeCart': 'Close cart',
    'a11y.filters': 'Filter by type',
    'a11y.map': 'Chocoria location on the map',
    'a11y.wa': 'Chat with us on WhatsApp',
    'a11y.cart': n => `Cart, ${n} item${n === 1 ? '' : 's'}`,
    'a11y.inc': name => `Increase quantity of ${name}`,
    'a11y.dec': name => `Decrease quantity of ${name}`,
    'a11y.remove': name => `Remove ${name} from the cart`,

    'alt.logo': 'Chocoria logo — Swiss and Belgian chocolate',
    'alt.logoRing': 'Chocoria logo inside a gold ring',
    'alt.logoSmall': 'Chocoria logo',
    'alt.hero': 'An assortment of Chocoria chocolates',
    'alt.gift': 'A Chocoria gift box prepared for an occasion',
    'alt.insta1': 'From Chocoria on Instagram: assorted pralines',
    'alt.insta2': 'From Chocoria on Instagram: dark truffles',
    'alt.insta3': 'From Chocoria on Instagram: a gift box',
    'alt.insta4': 'From Chocoria on Instagram: hazelnut chocolate',
    'alt.insta5': 'From Chocoria on Instagram: occasion favors',
    'alt.insta6': 'From Chocoria on Instagram: cocoa beans'
  }
};

/* ──────────────────────────────── state ──────────────────────────────── */
let lang = 'ar';
let filter = 'all';
let cart = [];            // [{ id, qty }]

const $  = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

const t = key => TEXT[lang][key];
const byId = id => PRODUCTS.find(p => p.id === id);

/** 6.5 → "6.500 د.ب" (ar) or "BD 6.500" (en). Western digits, 3 decimals. */
function money(value) {
  const n = Number(value).toFixed(3);
  return lang === 'ar' ? `${n} د.ب` : `BD ${n}`;
}

/* ──────────────────────────── persistence ──────────────────────────── */
function readStore(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw === null ? fallback : JSON.parse(raw);
  } catch { return fallback; }
}
function writeStore(key, value) {
  try { localStorage.setItem(key, JSON.stringify(value)); } catch { /* private mode */ }
}

/* ──────────────────────────── language ──────────────────────────── */
function applyLang(next) {
  lang = next;
  const root = document.documentElement;
  root.lang = lang;
  root.dir = lang === 'ar' ? 'rtl' : 'ltr';

  document.title = t('meta.title');
  $('meta[name="description"]').setAttribute('content', t('meta.desc'));
  $('meta[property="og:title"]').setAttribute('content', t('meta.title'));
  $('meta[property="og:description"]').setAttribute('content', t('meta.desc'));
  $('meta[name="twitter:title"]').setAttribute('content', t('meta.title'));
  $('meta[name="twitter:description"]').setAttribute('content', t('meta.desc'));

  $$('[data-i18n]').forEach(el => { el.textContent = t(el.dataset.i18n); });
  $$('[data-i18n-aria]').forEach(el => { el.setAttribute('aria-label', t(el.dataset.i18nAria)); });
  $$('[data-i18n-alt]').forEach(el => { el.alt = t(el.dataset.i18nAlt); });
  $$('[data-i18n-title]').forEach(el => { el.title = t(el.dataset.i18nTitle); });

  $('#langToggle').textContent = t('ui.langLabel');

  writeStore(STORE_LANG, lang);
  renderProducts();
  renderCart();
}

/* ──────────────────────────── product grid ──────────────────────────── */
function renderProducts() {
  const grid = $('#productGrid');
  const shown = PRODUCTS.filter(p => filter === 'all' || p.category === filter);

  grid.innerHTML = '';
  shown.forEach(p => {
    const name = lang === 'ar' ? p.nameAr : p.nameEn;
    const tile = document.createElement('article');
    tile.className = 'tile';
    tile.innerHTML = `
      <img src="${p.image}" width="800" height="800" loading="lazy" alt="${name}">
      <h3 class="tile__name">${name}</h3>
      <p class="tile__desc">${lang === 'ar' ? p.descAr : p.descEn}</p>
      <p class="tile__price" dir="${lang === 'ar' ? 'rtl' : 'ltr'}">${money(p.price)}</p>
      <button class="btn" type="button" data-add="${p.id}">${t('shop.add')}</button>`;
    grid.appendChild(tile);
  });

  $('#gridEmpty').hidden = shown.length > 0;
}

/* ─────────────────────────────── cart ─────────────────────────────── */
function cartCount() { return cart.reduce((sum, line) => sum + line.qty, 0); }
function cartTotal() { return cart.reduce((sum, line) => sum + byId(line.id).price * line.qty, 0); }

function addToCart(id) {
  const line = cart.find(l => l.id === id);
  if (line) line.qty += 1;
  else cart.push({ id, qty: 1 });
  persistCart();
  toast(t('toast.added'));
}

function setQty(id, qty) {
  const line = cart.find(l => l.id === id);
  if (!line) return;
  line.qty = qty;
  if (line.qty < 1) cart = cart.filter(l => l.id !== id);
  persistCart();
}

function persistCart() {
  writeStore(STORE_CART, cart);
  renderCart();
}

function renderCart() {
  const list = $('#cartItems');
  const count = cartCount();

  list.innerHTML = '';
  cart.forEach(line => {
    const p = byId(line.id);
    const name = lang === 'ar' ? p.nameAr : p.nameEn;
    const li = document.createElement('li');
    li.innerHTML = `
      <img src="${p.image}" width="64" height="64" alt="" loading="lazy">
      <div>
        <p class="cart__name">${name}</p>
        <p class="cart__line" dir="${lang === 'ar' ? 'rtl' : 'ltr'}">${money(p.price * line.qty)}</p>
        <div class="qty">
          <button type="button" data-dec="${p.id}" aria-label="${t('a11y.dec')(name)}">−</button>
          <output>${line.qty}</output>
          <button type="button" data-inc="${p.id}" aria-label="${t('a11y.inc')(name)}">+</button>
        </div>
      </div>
      <button class="cart__remove" type="button" data-remove="${p.id}" aria-label="${t('a11y.remove')(name)}">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg>
      </button>`;
    list.appendChild(li);
  });

  $('#cartEmpty').hidden = count > 0;
  $('#cartTotalRow').hidden = count === 0;
  $('#cartTotal').textContent = money(cartTotal());
  $('#checkoutForm').hidden = count === 0;

  const badge = $('#cartCount');
  badge.textContent = count;
  badge.hidden = count === 0;
  $('#cartToggle').setAttribute('aria-label', t('a11y.cart')(count));
}

/* ─────────────────────── WhatsApp order message ─────────────────────── */
function buildOrderMessage(form) {
  const name = form.custName.value.trim();
  const method = form.method.value;
  const area = form.custArea.value.trim();
  const notes = form.custNotes.value.trim();

  const lines = cart.map(line => {
    const p = byId(line.id);
    const label = lang === 'ar' ? p.nameAr : p.nameEn;
    return `• ${line.qty} × ${label} (${money(p.price * line.qty)})`;
  });

  if (lang === 'ar') {
    const how = method === 'delivery' ? `توصيل (المنطقة: ${area})` : 'استلام من الموقع';
    return [
      'مرحباً Chocoria، أرغب بطلب:',
      ...lines,
      `المجموع: ${money(cartTotal())}`,
      `الاسم: ${name}`,
      `طريقة الاستلام: ${how}`,
      notes ? `ملاحظات: ${notes}` : null
    ].filter(Boolean).join('\n');
  }

  const how = method === 'delivery' ? `Delivery (Area: ${area})` : 'Pickup';
  return [
    'Hello Chocoria, I would like to order:',
    ...lines,
    `Total: ${money(cartTotal())}`,
    `Name: ${name}`,
    `Collection: ${how}`,
    notes ? `Notes: ${notes}` : null
  ].filter(Boolean).join('\n');
}

/* ─────────────────────────── form validation ─────────────────────────── */
function showError(fieldEl, errEl, message) {
  fieldEl.classList.add('has-error');
  errEl.textContent = message;
  errEl.hidden = false;
}
function clearError(fieldEl, errEl) {
  fieldEl.classList.remove('has-error');
  errEl.hidden = true;
  errEl.textContent = '';
}

function validate(form) {
  const nameField = $('#custName').closest('.field');
  const areaField = $('#areaField');
  const errName = $('#errName');
  const errArea = $('#errArea');
  const errForm = $('#errForm');
  let firstBad = null;

  clearError(nameField, errName);
  clearError(areaField, errArea);
  errForm.hidden = true;

  if (!cart.length) {
    errForm.textContent = t('err.empty');
    errForm.hidden = false;
    return false;
  }
  if (!form.custName.value.trim()) {
    showError(nameField, errName, t('err.name'));
    firstBad = form.custName;
  }
  if (form.method.value === 'delivery' && !form.custArea.value.trim()) {
    showError(areaField, errArea, t('err.area'));
    firstBad = firstBad || form.custArea;
  }
  if (firstBad) { firstBad.focus(); return false; }
  return true;
}

/* ─────────────────────────────── toast ─────────────────────────────── */
let toastTimer;
function toast(message) {
  const el = $('#toast');
  el.textContent = message;
  el.classList.add('is-visible');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('is-visible'), 2200);
}

/* ───────────────────────── overlays (menu + cart) ───────────────────────── */
let lastFocused = null;

function openOverlay(panel, trigger) {
  lastFocused = trigger || document.activeElement;
  panel.hidden = false;
  $('#scrim').hidden = false;
  document.body.style.overflow = 'hidden';
  requestAnimationFrame(() => panel.classList.add('is-open'));
  if (trigger) trigger.setAttribute('aria-expanded', 'true');
  const focusable = panel.querySelector('button, [href], input, textarea');
  if (focusable) focusable.focus();
}

function closeOverlay(panel, trigger) {
  panel.classList.remove('is-open');
  $('#scrim').hidden = true;
  document.body.style.overflow = '';
  if (trigger) trigger.setAttribute('aria-expanded', 'false');
  const done = () => { panel.hidden = true; };
  setTimeout(done, 320);
  if (lastFocused) lastFocused.focus();
}

function anyOpen() { return $$('.is-open').find(el => el.matches('.cart, .mobile-nav')); }

/** Keep Tab inside whichever panel is open. */
function trapFocus(event) {
  if (event.key !== 'Tab') return;
  const panel = anyOpen();
  if (!panel) return;
  const items = $$('button, [href], input, textarea, select', panel)
    .filter(el => !el.disabled && el.offsetParent !== null);
  if (!items.length) return;
  const first = items[0];
  const last = items[items.length - 1];
  if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
  else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
}

/* ─────────────────────────────── wiring ─────────────────────────────── */
function init() {
  cart = readStore(STORE_CART, []).filter(line => byId(line.id));
  applyLang(readStore(STORE_LANG, null) === 'en' ? 'en' : 'ar');

  const header = $('#siteHeader');
  const cartPanel = $('#cartDrawer');
  const cartBtn = $('#cartToggle');
  const menuPanel = $('#mobileNav');
  const menuBtn = $('#menuToggle');

  // Header changes from transparent to Cream once the hero starts scrolling away.
  const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 40);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  $('#langToggle').addEventListener('click', () => applyLang(lang === 'ar' ? 'en' : 'ar'));

  // Filters
  $$('.chip').forEach(chip => chip.addEventListener('click', () => {
    filter = chip.dataset.filter;
    $$('.chip').forEach(c => {
      const on = c === chip;
      c.classList.toggle('is-active', on);
      c.setAttribute('aria-pressed', String(on));
    });
    renderProducts();
  }));

  // Add to cart
  $('#productGrid').addEventListener('click', e => {
    const btn = e.target.closest('[data-add]');
    if (btn) addToCart(btn.dataset.add);
  });

  // Quantity and removal
  $('#cartItems').addEventListener('click', e => {
    const inc = e.target.closest('[data-inc]');
    const dec = e.target.closest('[data-dec]');
    const rm  = e.target.closest('[data-remove]');
    if (inc) setQty(inc.dataset.inc, (cart.find(l => l.id === inc.dataset.inc)?.qty || 0) + 1);
    if (dec) setQty(dec.dataset.dec, (cart.find(l => l.id === dec.dataset.dec)?.qty || 0) - 1);
    if (rm)  setQty(rm.dataset.remove, 0);
  });

  // Drawers
  cartBtn.addEventListener('click', () => openOverlay(cartPanel, cartBtn));
  $('#cartClose').addEventListener('click', () => closeOverlay(cartPanel, cartBtn));
  menuBtn.addEventListener('click', () => openOverlay(menuPanel, menuBtn));
  $('#menuClose').addEventListener('click', () => closeOverlay(menuPanel, menuBtn));
  $('#scrim').addEventListener('click', () => {
    if (cartPanel.classList.contains('is-open')) closeOverlay(cartPanel, cartBtn);
    if (menuPanel.classList.contains('is-open')) closeOverlay(menuPanel, menuBtn);
  });
  $$('.mobile-nav a').forEach(a => a.addEventListener('click', () => closeOverlay(menuPanel, menuBtn)));

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      if (cartPanel.classList.contains('is-open')) closeOverlay(cartPanel, cartBtn);
      else if (menuPanel.classList.contains('is-open')) closeOverlay(menuPanel, menuBtn);
    }
    trapFocus(e);
  });

  // Area field only matters for delivery
  const areaField = $('#areaField');
  $$('input[name="method"]').forEach(radio => radio.addEventListener('change', () => {
    areaField.hidden = radio.value !== 'delivery' || !radio.checked;
  }));

  // Checkout
  $('#checkoutForm').addEventListener('submit', e => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!validate(form)) return;
    const url = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(buildOrderMessage(form))}`;
    window.open(url, '_blank', 'noopener');
  });
}

document.addEventListener('DOMContentLoaded', init);
