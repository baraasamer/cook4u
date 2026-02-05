/* Cook4U app.js
   - UI logic only (no frameworks)
   - Fix: toggle meals per card ONLY (auto-close others)
   - Fix: AR/EN switching with proper dir
   - Fix: Active nav smooth + correct section detection
   - Fix: Mobile WhatsApp CTA works (no code outside scope)
*/

(() => {
  "use strict";

  // =========================
  // Settings (EDIT THESE)
  // =========================
  const SETTINGS = {
    storageKey: "cook4u_lang",
    defaultLang: "ar",
    whatsappNumber: "60192165794", // ✅ ضع رقمك هنا بدون +
  };

  // =========================
  // Inline SVG Icons (modern)
  // =========================
  const ICONS = {
    wa: `
      <svg class="icon" viewBox="0 0 24 24" aria-hidden="true">
        <path fill="currentColor" d="M20.5 3.5A11 11 0 0 0 2.7 17.2L2 22l4.9-1.3A11 11 0 0 0 20.5 3.5Zm-9.5 18a9 9 0 0 1-4.6-1.2l-.3-.2-2.9.8.8-2.8-.2-.3A9 9 0 1 1 11 21.5Zm5-6.4c-.3-.1-1.7-.8-2-.9s-.5-.1-.7.2-.8.9-1 1.1-.4.2-.7.1a7.3 7.3 0 0 1-2.2-1.4 8.2 8.2 0 0 1-1.5-1.9c-.2-.3 0-.5.1-.6l.5-.6c.1-.2.2-.3.3-.5s0-.3 0-.5-.7-1.8-.9-2.4-.5-.6-.7-.6H6c-.2 0-.5.1-.7.3s-1 1-1 2.4 1 2.8 1.2 3 2.6 4 6.2 5.5c.9.4 1.7.6 2.3.8 1 .3 1.9.2 2.6.1.8-.1 1.7-.7 2-1.3s.3-1.2.2-1.3-.3-.2-.6-.3Z"/>
      </svg>
    `,
    list: `
      <svg class="icon" viewBox="0 0 24 24" aria-hidden="true">
        <path fill="currentColor" d="M4 6h2v2H4V6Zm4 0h12v2H8V6ZM4 11h2v2H4v-2Zm4 0h12v2H8v-2ZM4 16h2v2H4v-2Zm4 0h12v2H8v-2Z"/>
      </svg>
    `,
    moon: `
      <svg class="icon" viewBox="0 0 24 24" aria-hidden="true">
        <path fill="currentColor" d="M12.8 2a9.5 9.5 0 1 0 9.2 12.2A8 8 0 0 1 12.8 2Z"/>
      </svg>
    `,
    truck: `
      <svg class="icon" viewBox="0 0 24 24" aria-hidden="true">
        <path fill="currentColor" d="M3 6h11v10H3V6Zm12 3h3.6L21 12v4h-2a2 2 0 1 1-4 0h-1V9Zm3.1 2H15v3h4.5l-1.4-3ZM6 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm11 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/>
      </svg>
    `,
    star: `
      <svg class="icon" viewBox="0 0 24 24" aria-hidden="true">
        <path fill="currentColor" d="m12 17.3-6.2 3.7 1.7-7.1L2 9.2l7.2-.6L12 2l2.8 6.6 7.2.6-5.5 4.7 1.7 7.1L12 17.3Z"/>
      </svg>
    `,
    check: `
      <svg class="icon" viewBox="0 0 24 24" aria-hidden="true">
        <path fill="currentColor" d="M9.2 16.2 4.9 12l1.4-1.4 2.9 2.9 8-8L18.6 7l-9.4 9.2Z"/>
      </svg>
    `,
  };

  // =========================
  // i18n (texts)
  // =========================
  const I18N = {
    ar: {
      "brand.tag": "اشتراك عشاء عربي • ماليزيا",
      "nav.home": "الرئيسية",
      "nav.about": "رؤيتنا",
      "nav.plans": "الباقات",
      "nav.faq": "الأسئلة",
      "nav.contact": "تواصل",

      "hero.kicker": "عشاء فقط • التوصيل شامل",
      "hero.title": "اشتراك وجبات عربية شهرية",
      "hero.subtitle": "وجبات عشاء عربية بجودة عالية وسعر مناسب في ماليزيا.",
      "hero.primary": "اشترك الآن",
      "hero.secondary": "تعرف علينا",
      "hero.dinnerOnly": "عشاء فقط",
      "hero.deliveryIncluded": "التوصيل شامل",
      "stats.meals": "وجبة مقدمة",
      "stats.students": "عملاء",
      "hero.note": "اشتراك عشاء عربي مميز بجودة ثابتة وتوصيل شامل.",
      "hero.scroll": "نزّل",

      "about.title": "رؤية Cook4U",
      "about.text": "مطبخ متخصص في تقديم وجبات عشاء عربية بجودة عالية وسعر مناسب مع توصيل شامل.",
      "about.f1Title": "طعم رائع مقابل السعر",
      "about.f1Sub": "قيمة ممتازة",
      "about.f2Title": "توصيل موثوق",
      "about.f2Sub": "مناسب لوقت العشاء",
      "about.f3Title": "أكل عربي أصيل",
      "about.f3Sub": "راحة وجودة",
      "about.ribbon": "الأكثر طلبًا",
      "about.cardTitle": "اشتراك عشاء… بكل بساطة",
      "about.cardText": "اختر الباقة، اشترك خلال ثوانٍ عبر واتساب، واستمتع بعشاء عربي ثابت الجودة.",

      "plans.title": "باقات الاشتراك",
      "plans.note": "جميع الباقات تشمل التوصيل – وجبات عشاء فقط",
      "plans.mealsTitle": "الوجبات الأسبوعية",

      "legend.dinner": "عشاء فقط",
      "legend.delivery": "التوصيل شامل",

      "faq.title": "الأسئلة الشائعة",
      "faq.q1": "هل الوجبات غداء أم عشاء؟",
      "faq.a1": "المطبخ يقدم وجبات العشاء فقط.",
      "faq.q2": "هل التوصيل شامل؟",
      "faq.a2": "نعم، جميع الباقات تشمل التوصيل.",
      "faq.q3": "كيف يتم الاشتراك؟",
      "faq.a3": "اضغط على اشترك الآن وسيتم فتح واتساب برسالة جاهزة.",

      "contact.title": "تواصل معنا",
      "contact.note": "نرد عليك سريعًا عبر واتساب.",
      "contact.name": "الاسم",
      "contact.contact": "رقمك / بريدك",
      "contact.subject": "الموضوع",
      "contact.message": "الرسالة",
      "contact.send": "إرسال",
      "contact.badge": "طلب سريع عبر واتساب",

      "contact.sideTitle": "اشتراك عشاء عربي",
      "contact.sideText": "توصيل شامل. طعم ثابت. تغليف نظيف. سعر مناسب.",
      "contact.locationTitle": "الموقع",
      "contact.phoneTitle": "الهاتف",
      "contact.emailTitle": "البريد",

      "footer.note": "اشتراك عشاء عربي • ماليزيا",
      "cta.subscribe": "اشترك الآن",
      "cta.contact": "تواصل",

      "plan.perWeek": "في الأسبوع",
      "plan.dinnerOnly": "عشاء فقط",
      "plan.delivery": "التوصيل شامل",
      "plan.cta": "اشترك عبر واتساب",
      "plan.ask": "استفسار",
      "plan.detailsShow": "عرض الوجبات",
      "plan.detailsHide": "إخفاء الوجبات",
      "plan.mostPopular": "الأكثر طلباً",
      "plan.menuTitle": "قائمة الوجبات",

      "cta.viewPlans": "عرض الباقات",
"trust.cleanTitle": "تغليف نظيف",
"trust.cleanSub": "جودة ونظافة",
"trust.onTimeTitle": "توصيل في الوقت",
"trust.onTimeSub": "التزام وسرعة",

"nav.menu": "المنيو",
"nav.how": "كيف يشتغل",

"menu.title": "اكتشف منيو Cook4U",
"menu.subtitle": "7 وجبات للأسبوع (مؤقتًا كبسة) — بنحدّث الصور والأصناف قريبًا.",
"menu.cta": "شوف المنيو",

"how.title": "كيف يشتغل",
"how.subtitle": "3 خطوات بسيطة وتبدأ 🤝",
"how.cta": "عرض الباقات",
"how.s1Title": "حصل على خطتك المثالية",
"how.s1Text": "اختر الباقة المناسبة لعدد وجباتك الأسبوعية.",
"how.s2Title": "أنت تختار، ونحن نطبخ",
"how.s2Text": "نجهّز الوجبات بجودة ثابتة وتغليف نظيف.",
"how.s3Title": "توصيل وجباتك",
"how.s3Text": "التوصيل شامل ومناسب لوقت العشاء.",


    },

    en: {
      "brand.tag": "Arabic Dinner Subscription • Malaysia",
      "nav.home": "Home",
      "nav.about": "Our Vision",
      "nav.plans": "Plans",
      "nav.faq": "FAQ",
      "nav.contact": "Contact",

      "hero.kicker": "Dinner Only • Delivery Included",
      "hero.title": "Monthly Arabic Dinner Subscription",
      "hero.subtitle": "Premium Arabic dinner meals with delivery included in Malaysia.",
      "hero.primary": "Subscribe Now",
      "hero.secondary": "Learn More",
      "hero.dinnerOnly": "Dinner Only",
      "hero.deliveryIncluded": "Delivery Included",
      "stats.meals": "Meals served",
      "stats.students": "Customers",
      "hero.note": "Reliable Arabic dinner subscription with consistent quality.",
      "hero.scroll": "Scroll",

      "about.title": "Cook4U Vision",
      "about.text": "A kitchen focused on Arabic dinner meals — great taste, fair price, delivery included.",
      "about.f1Title": "Great taste for the price",
      "about.f1Sub": "Excellent value",
      "about.f2Title": "Reliable delivery",
      "about.f2Sub": "Perfect for dinner time",
      "about.f3Title": "Authentic Arabic food",
      "about.f3Sub": "Comfort & quality",
      "about.ribbon": "Most Popular",
      "about.cardTitle": "Dinner subscription — made simple",
      "about.cardText": "Pick a plan, subscribe via WhatsApp in seconds, and enjoy consistent quality.",

      "plans.title": "Subscription Plans",
      "plans.note": "All plans include delivery — Dinner only",
      "plans.mealsTitle": "Weekly meals",

      "legend.dinner": "Dinner only",
      "legend.delivery": "Delivery included",

      "faq.title": "FAQ",
      "faq.q1": "Are meals for lunch or dinner?",
      "faq.a1": "We serve dinner only.",
      "faq.q2": "Is delivery included?",
      "faq.a2": "Yes — delivery is included in all plans.",
      "faq.q3": "How do I subscribe?",
      "faq.a3": "Tap Subscribe and WhatsApp will open with a ready message.",

      "contact.title": "Contact Us",
      "contact.note": "We reply fast on WhatsApp.",
      "contact.name": "Name",
      "contact.contact": "Phone / Email",
      "contact.subject": "Subject",
      "contact.message": "Message",
      "contact.send": "Send",
      "contact.badge": "Quick order on WhatsApp",

      "contact.sideTitle": "Arabic dinner subscription",
      "contact.sideText": "Delivery included. Clean packaging. Consistent taste. Fair price.",
      "contact.locationTitle": "Location",
      "contact.phoneTitle": "Phone",
      "contact.emailTitle": "Email",

      "footer.note": "Arabic Dinner Subscription • Malaysia",
      "cta.subscribe": "Subscribe Now",
      "cta.contact": "Contact",

      "plan.perWeek": "per week",
      "plan.dinnerOnly": "Dinner only",
      "plan.delivery": "Delivery included",
      "plan.cta": "Subscribe on WhatsApp",
      "plan.ask": "Inquiry",
      "plan.detailsShow": "Show meals",
      "plan.detailsHide": "Hide meals",
      "plan.mostPopular": "Most Popular",
      "plan.menuTitle": "Meals menu",

      "cta.viewPlans": "View plans",
"trust.cleanTitle": "Clean packaging",
"trust.cleanSub": "Hygienic & tidy",
"trust.onTimeTitle": "On-time delivery",
"trust.onTimeSub": "Fast & reliable",


"nav.menu": "Menu",
"nav.how": "How it works",

"menu.title": "Explore the Cook4U menu",
"menu.subtitle": "7 weekly meals (temporary Kabsa) — we’ll update items & images soon.",
"menu.cta": "View menu",

"how.title": "How it works",
"how.subtitle": "3 simple steps to start 🤝",
"how.cta": "View plans",
"how.s1Title": "Get your perfect plan",
"how.s1Text": "Pick the plan that matches your weekly meals.",
"how.s2Title": "You choose, we cook",
"how.s2Text": "Consistent quality and clean packaging.",
"how.s3Title": "We deliver your meals",
"how.s3Text": "Delivery included and timed for dinner.",

    },
  };

  // =========================
  // Plans data
  // =========================
  const PLANS = [
    {
      id: "p5",
      mealsPerWeek: 5,
      price: 525,
      currency: "RM",
      popular: false,
      meals: [
        { dayAr: "اليوم 1", dayEn: "Day 1", itemAr: "رز كبسه مع دجاج", itemEn: "Kabsa rice with chicken" },
        { dayAr: "اليوم 2", dayEn: "Day 2", itemAr: "رز كبسه مع دجاج", itemEn: "Kabsa rice with chicken" },
        { dayAr: "اليوم 3", dayEn: "Day 3", itemAr: "رز كبسه مع دجاج", itemEn: "Kabsa rice with chicken" },
        { dayAr: "اليوم 4", dayEn: "Day 4", itemAr: "رز كبسه مع دجاج", itemEn: "Kabsa rice with chicken" },
        { dayAr: "اليوم 5", dayEn: "Day 5", itemAr: "رز كبسه مع دجاج", itemEn: "Kabsa rice with chicken" },
      ],
    },
    {
      id: "p6",
      mealsPerWeek: 6,
      price: 625,
      currency: "RM",
      popular: true,
      meals: [
        { dayAr: "اليوم 1", dayEn: "Day 1", itemAr: "رز كبسه مع دجاج", itemEn: "Kabsa rice with chicken" },
        { dayAr: "اليوم 2", dayEn: "Day 2", itemAr: "رز كبسه مع دجاج", itemEn: "Kabsa rice with chicken" },
        { dayAr: "اليوم 3", dayEn: "Day 3", itemAr: "رز كبسه مع دجاج", itemEn: "Kabsa rice with chicken" },
        { dayAr: "اليوم 4", dayEn: "Day 4", itemAr: "رز كبسه مع دجاج", itemEn: "Kabsa rice with chicken" },
        { dayAr: "اليوم 5", dayEn: "Day 5", itemAr: "رز كبسه مع دجاج", itemEn: "Kabsa rice with chicken" },
        { dayAr: "اليوم 6", dayEn: "Day 6", itemAr: "رز كبسه مع دجاج", itemEn: "Kabsa rice with chicken" },
      ],
    },
    {
      id: "p7",
      mealsPerWeek: 7,
      price: 700,
      currency: "RM",
      popular: false,
      meals: [
        { dayAr: "اليوم 1", dayEn: "Day 1", itemAr: "رز كبسه مع دجاج", itemEn: "Kabsa rice with chicken" },
        { dayAr: "اليوم 2", dayEn: "Day 2", itemAr: "رز كبسه مع دجاج", itemEn: "Kabsa rice with chicken" },
        { dayAr: "اليوم 3", dayEn: "Day 3", itemAr: "رز كبسه مع دجاج", itemEn: "Kabsa rice with chicken" },
        { dayAr: "اليوم 4", dayEn: "Day 4", itemAr: "رز كبسه مع دجاج", itemEn: "Kabsa rice with chicken" },
        { dayAr: "اليوم 5", dayEn: "Day 5", itemAr: "رز كبسه مع دجاج", itemEn: "Kabsa rice with chicken" },
        { dayAr: "اليوم 6", dayEn: "Day 6", itemAr: "رز كبسه مع دجاج", itemEn: "Kabsa rice with chicken" },
        { dayAr: "اليوم 7", dayEn: "Day 7", itemAr: "رز كبسه مع دجاج", itemEn: "Kabsa rice with chicken" },
      ],
    },
    {
      id: "p7s",
      mealsPerWeek: 7,
      price: 800,
      currency: "RM",
      popular: false,
      meals: [
        { dayAr: "اليوم 1", dayEn: "Day 1", itemAr: "رز كبسه مع دجاج وسمبوسة", itemEn: "Kabsa rice with chicken + sambusa" },
        { dayAr: "اليوم 2", dayEn: "Day 2", itemAr: "رز كبسه مع دجاج وسمبوسة", itemEn: "Kabsa rice with chicken + sambusa" },
        { dayAr: "اليوم 3", dayEn: "Day 3", itemAr: "رز كبسه مع دجاج وسمبوسة", itemEn: "Kabsa rice with chicken + sambusa" },
        { dayAr: "اليوم 4", dayEn: "Day 4", itemAr: "رز كبسه مع دجاج وسمبوسة", itemEn: "Kabsa rice with chicken + sambusa" },
        { dayAr: "اليوم 5", dayEn: "Day 5", itemAr: "رز كبسه مع دجاج وسمبوسة", itemEn: "Kabsa rice with chicken + sambusa" },
        { dayAr: "اليوم 6", dayEn: "Day 6", itemAr: "رز كبسه مع دجاج وسمبوسة", itemEn: "Kabsa rice with chicken + sambusa" },
        { dayAr: "اليوم 7", dayEn: "Day 7", itemAr: "رز كبسه مع دجاج وسمبوسة", itemEn: "Kabsa rice with chicken + sambusa" },
      ],
    },
  ];

  // =========================
// Menu data (NEW) — 7 items temporary
// =========================
const MENU_ITEMS = [
  { id: "m1", kcal: 650, img: "assets/menu/kabsa-1.jpg", ar: "كبسة دجاج", en: "Chicken Kabsa", arDesc: "اليوم 1 • رز كبسة مع دجاج", enDesc: "Day 1 • Kabsa rice with chicken" },
  { id: "m2", kcal: 650, img: "assets/menu/kabsa-2.jpg", ar: "كبسة دجاج", en: "Chicken Kabsa", arDesc: "اليوم 2 • رز كبسة مع دجاج", enDesc: "Day 2 • Kabsa rice with chicken" },
  { id: "m3", kcal: 650, img: "assets/menu/kabsa-3.jpg", ar: "كبسة دجاج", en: "Chicken Kabsa", arDesc: "اليوم 3 • رز كبسة مع دجاج", enDesc: "Day 3 • Kabsa rice with chicken" },
  { id: "m4", kcal: 650, img: "assets/menu/kabsa-4.jpg", ar: "كبسة دجاج", en: "Chicken Kabsa", arDesc: "اليوم 4 • رز كبسة مع دجاج", enDesc: "Day 4 • Kabsa rice with chicken" },
  { id: "m5", kcal: 650, img: "assets/menu/kabsa-5.jpg", ar: "كبسة دجاج", en: "Chicken Kabsa", arDesc: "اليوم 5 • رز كبسة مع دجاج", enDesc: "Day 5 • Kabsa rice with chicken" },
  { id: "m6", kcal: 650, img: "assets/menu/kabsa-6.jpg", ar: "كبسة دجاج", en: "Chicken Kabsa", arDesc: "اليوم 6 • رز كبسة مع دجاج", enDesc: "Day 6 • Kabsa rice with chicken" },
  { id: "m7", kcal: 650, img: "assets/menu/kabsa-7.jpg", ar: "كبسة دجاج", en: "Chicken Kabsa", arDesc: "اليوم 7 • رز كبسة مع دجاج", enDesc: "Day 7 • Kabsa rice with chicken" },
];

// =========================
// Menu: render carousel (NEW)
// =========================
function renderMenu(lang) {
  const row = document.getElementById("menuRow");
  if (!row) return;

  row.innerHTML = MENU_ITEMS.map(item => {
    const title = (lang === "ar") ? item.ar : item.en;
    const desc  = (lang === "ar") ? item.arDesc : item.enDesc;
    const kcal  = (lang === "ar") ? `${item.kcal} سعرة` : `${item.kcal} kcal`;

    return `
      <article class="mealCard" data-id="${item.id}">
        <div class="mealMedia">
          <img src="${item.img}" alt="${title}" loading="lazy">
          <span class="mealKcal">${kcal}</span>
        </div>
        <div class="mealBody">
          <h3 class="mealTitle">${title}</h3>
          <p class="mealDesc">${desc}</p>
          <div class="mealMetaRow">
            <span class="mealDot">${lang === "ar" ? "عشاء" : "Dinner"}</span>
            <span class="mealDot">${lang === "ar" ? "توصيل شامل" : "Delivery included"}</span>
          </div>
        </div>
      </article>
    `;
  }).join("");
}


  // =========================
  // Helpers
  // =========================
  function getLang() {
    return localStorage.getItem(SETTINGS.storageKey) || SETTINGS.defaultLang;
  }
  function setLang(lang) {
    localStorage.setItem(SETTINGS.storageKey, lang);
  }
  function t(lang, key) {
    return (I18N[lang] && I18N[lang][key]) ? I18N[lang][key] : key;
  }
  function setDocumentDirection(lang) {
    const html = document.documentElement;
    html.setAttribute("lang", lang === "ar" ? "ar" : "en");
    html.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
  }
  function buildWhatsAppLink(message) {
    const num = SETTINGS.whatsappNumber.replace(/[^\d]/g, "");
    return `https://wa.me/${num}?text=${encodeURIComponent(message)}`;
  }

  // =========================
  // UI: Update i18n text
  // =========================
  function applyI18n(lang) {
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      el.textContent = t(lang, key);
    });

    const langBtn = document.getElementById("langBtn");
    if (langBtn) langBtn.textContent = (lang === "ar") ? "EN" : "AR";
  }

  // =========================
  // Hero badges
  // =========================
  function renderHeroBadges(lang) {
    const holder = document.getElementById("heroBadges");
    if (!holder) return;

    const badges = [
      { icon: ICONS.star, ar: "جودة وطعم ثابت", en: "Consistent quality & taste" },
      { icon: ICONS.truck, ar: "توصيل شامل وسريع", en: "Fast delivery included" },
      { icon: ICONS.check, ar: "أكل عربي أصيل", en: "Authentic Arabic food" },
    ];

    holder.innerHTML = badges.map(b => {
      const label = (lang === "ar") ? b.ar : b.en;
      return `<span class="badge">${b.icon}<span>${label}</span></span>`;
    }).join("");
  }

  // =========================
  // Plans: render cards
  // =========================
  function renderPlans(lang) {
    const grid = document.getElementById("plansGrid");
    if (!grid) return;

    grid.innerHTML = "";

    PLANS.forEach(plan => {
      const title = (lang === "ar")
        ? `${plan.mealsPerWeek} وجبات في الأسبوع`
        : `${plan.mealsPerWeek} meals / week`;

      const perWeekLabel = t(lang, "plan.perWeek");

      const mostPopular = plan.popular
        ? `<span class="plan__ribbon">${ICONS.check}<span>${t(lang, "plan.mostPopular")}</span></span>`
        : "";

      const mealsList = plan.meals.map(m => {
        const day = (lang === "ar") ? m.dayAr : m.dayEn;
        const item = (lang === "ar") ? m.itemAr : m.itemEn;
        return `<li>${day}: ${item}</li>`;
      }).join("");

      const card = document.createElement("div");
      card.className = "card plan";
      card.setAttribute("data-plan-id", plan.id);

      card.innerHTML = `
        <div class="plan__top">
          <h3 class="plan__title">${title}</h3>
          ${mostPopular}
        </div>

        <div class="plan__priceRow">
          <div class="plan__price">${plan.currency} ${plan.price}</div>
          <div class="plan__per">${perWeekLabel}</div>
        </div>

        <div class="plan__meta">
          <span class="metaPill">${ICONS.moon}<span>${t(lang, "plan.dinnerOnly")}</span></span>
          <span class="metaPill">${ICONS.truck}<span>${t(lang, "plan.delivery")}</span></span>
        </div>

        <ul class="plan__list" data-meals style="display:none" aria-label="${t(lang, "plan.menuTitle")}">
          ${mealsList}
        </ul>

        <div class="plan__actions">
          <button class="btn btn--primary" type="button" data-action="subscribe">
            ${ICONS.wa}<span>${t(lang, "plan.cta")}</span>
          </button>

          <button class="btn btn--soft" type="button" data-action="toggleMeals" aria-expanded="false">
            ${ICONS.list}<span>${t(lang, "plan.detailsShow")}</span>
          </button>
        </div>
      `;

      grid.appendChild(card);
    });
  }

  // =========================
  // Plans interactions
  // =========================
function setupPlanActions() {
  const grid = document.getElementById("plansGrid");
  if (!grid) return;

  grid.addEventListener("click", (e) => {
    const btn = e.target.closest("button[data-action]");
    if (!btn) return;

    const action = btn.getAttribute("data-action");
    const planCard = btn.closest(".plan");
    if (!planCard) return;

    const lang = getLang();
    const planId = planCard.getAttribute("data-plan-id");
    const plan = PLANS.find((p) => p.id === planId);
    if (!plan) return;

    // =========================
    // Subscribe
    // =========================
    if (action === "subscribe") {
      const planTitle =
        lang === "ar"
          ? `${plan.mealsPerWeek} وجبات في الأسبوع`
          : `${plan.mealsPerWeek} meals/week`;

      const msg =
        lang === "ar"
          ? `السلام عليكم، أبغى اشترك في باقة ${planTitle} بسعر ${plan.currency} ${plan.price}. (عشاء فقط + التوصيل شامل)`
          : `Hi, I want to subscribe to the ${planTitle} plan for ${plan.currency} ${plan.price}. (Dinner only + delivery included)`;

      window.open(buildWhatsAppLink(msg), "_blank", "noopener,noreferrer");
      return;
    }

    // =========================
    // Toggle meals
    // =========================
  if (action === "toggleMeals") {
  const thisMeals = planCard.querySelector('[data-meals]');
  if (!thisMeals) return;

  const isOpenNow = thisMeals.style.display !== "none";

  // 1) اقفل أي قائمة مفتوحة (غير الحالية)
  document.querySelectorAll("#plansGrid .plan").forEach(otherCard => {
    const meals = otherCard.querySelector('[data-meals]');
    const otherBtn = otherCard.querySelector('button[data-action="toggleMeals"]');
    if (!meals) return;

    // لو هذا هو نفس الكارد، تجاهله هنا (نعالجه تحت)
    if (otherCard === planCard) return;

    // اقفلها فورًا وبسلاسة
    meals.style.maxHeight = "0px";
    setTimeout(() => {
      meals.style.display = "none";
    }, 250);

    // رجّع نص الزر + aria
    if (otherBtn) {
      otherBtn.setAttribute("aria-expanded", "false");
      const label = otherBtn.querySelector("span:last-child");
      if (label) label.textContent = t(lang, "plan.detailsShow");
    }
  });

  // 2) Toggle للقائمة الحالية
  if (!isOpenNow) {
    // افتح الحالية
    thisMeals.style.display = "block";
    thisMeals.style.maxHeight = "0px";
    requestAnimationFrame(() => {
      thisMeals.style.maxHeight = thisMeals.scrollHeight + "px";
    });

    btn.setAttribute("aria-expanded", "true");
    const label = btn.querySelector("span:last-child");
    if (label) label.textContent = t(lang, "plan.detailsHide");
  } else {
    // اقفل الحالية
    thisMeals.style.maxHeight = "0px";
    setTimeout(() => {
      thisMeals.style.display = "none";
    }, 250);

    btn.setAttribute("aria-expanded", "false");
    const label = btn.querySelector("span:last-child");
    if (label) label.textContent = t(lang, "plan.detailsShow");
  }

  return;
}
  });
}




  // =========================
  // Contact form -> WhatsApp + floating WA
  // =========================
  function setupContactForm() {
    const form = document.getElementById("contactForm");
    const note = document.getElementById("formNote");
    const waFloat = document.getElementById("waFloat");

    if (waFloat) {
      const lang = getLang();
      waFloat.href = buildWhatsAppLink(
        lang === "ar"
          ? "السلام عليكم، أبغى استفسار عن الاشتراك."
          : "Hi, I have a question about the subscription."
      );
    }

    if (!form) return;

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const lang = getLang();

      const name = document.getElementById("cName")?.value?.trim() || "";
      const contact = document.getElementById("cEmail")?.value?.trim() || "";
      const subject = document.getElementById("cSubject")?.value?.trim() || "";
      const msg = document.getElementById("cMsg")?.value?.trim() || "";

      const text = (lang === "ar")
        ? `السلام عليكم،\n\nالاسم: ${name}\nالتواصل: ${contact}\nالموضوع: ${subject}\n\nالرسالة:\n${msg}`
        : `Hello,\n\nName: ${name}\nContact: ${contact}\nSubject: ${subject}\n\nMessage:\n${msg}`;

      window.open(buildWhatsAppLink(text), "_blank", "noopener,noreferrer");

      if (note) note.textContent = (lang === "ar")
        ? "تم فتح واتساب برسالة جاهزة ✅"
        : "WhatsApp opened with a ready message ✅";

      form.reset();
    });
  }

  // =========================
  // Mobile menu
  // =========================
  function setupMobileMenu() {
    const toggle = document.getElementById("navToggle");
    const links = document.getElementById("navLinks");
    if (!toggle || !links) return;

    toggle.addEventListener("click", () => {
      const isActive = links.classList.toggle("active");
      toggle.setAttribute("aria-expanded", isActive);
    });
    
    links.addEventListener("click", (e) => {
      const a = e.target.closest("a");
      if (!a) return;
      links.classList.remove("active");
      toggle.setAttribute("aria-expanded", "false");
    });
  }

  // =========================
  // Smooth scroll
  // =========================
  function setupSmoothScroll() {
    document.addEventListener("click", (e) => {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;

      const id = a.getAttribute("href");
      const target = document.querySelector(id);
      if (!target) return;

      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      history.pushState(null, "", id);
    });
  }

  // =========================
  // Active nav (smooth + correct)
  // =========================
  function setActiveNav() {
    const links = Array.from(document.querySelectorAll(".nav__links a[href^='#']"));
    if (!links.length) return;

    const sections = links
      .map(a => document.querySelector(a.getAttribute("href")))
      .filter(Boolean);

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (!visible || !visible.target?.id) return;

        const id = "#" + visible.target.id;
        links.forEach(a => a.classList.toggle("active", a.getAttribute("href") === id));
      },
      {
        root: null,
        rootMargin: "-120px 0px -55% 0px",
        threshold: [0.15, 0.25, 0.35, 0.5, 0.65],
      }
    );

    sections.forEach(sec => obs.observe(sec));
  }

  // =========================
  // Nav indicator bubble
  // =========================
  function setupNavIndicator() {
    const wrap = document.getElementById("navLinks");
    const indicator = document.getElementById("navIndicator");
    if (!wrap || !indicator) return;

    const links = Array.from(wrap.querySelectorAll("a"));
    if (!links.length) return;

    const moveTo = (a) => {
      const r = a.getBoundingClientRect();
      const wr = wrap.getBoundingClientRect();
      const x = (r.left - wr.left) + (r.width / 2) - 12;
      indicator.style.transform = `translateX(${x}px)`;
      indicator.style.width = Math.max(24, r.width * 0.45) + "px";
    };

    const update = () => {
      const active = wrap.querySelector("a.active") || links[0];
      if (active) moveTo(active);
    };

    links.forEach(a => a.addEventListener("mouseenter", () => moveTo(a)));
    wrap.addEventListener("mouseleave", update);
    window.addEventListener("resize", update);

    // Update when active changes due to scroll
    const mo = new MutationObserver(update);
    mo.observe(wrap, { subtree: true, attributes: true, attributeFilter: ["class"] });

    setTimeout(update, 120);
  }

  // =========================
  // Reveal on scroll
  // =========================
  function setupRevealOnScroll() {
    const items = document.querySelectorAll(
      "section, .hero, .card, .cardLite, details, .featureCard, .about__box"
    );

    items.forEach(el => el.classList.add("reveal"));

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    items.forEach(el => observer.observe(el));
  }

  // =========================
  // Back to top
  // =========================
  function setupToTop() {
    const btn = document.getElementById("toTop");
    if (!btn) return;

    window.addEventListener("scroll", () => {
      btn.style.display = window.scrollY > 700 ? "grid" : "none";
    });

    btn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // =========================
  // Counters (if you use data-count)
  // =========================
  function setupCounters() {
    const nums = document.querySelectorAll("[data-count]");
    if (!nums.length) return;

    const animate = (el) => {
      const target = parseInt(el.getAttribute("data-count"), 10) || 0;
      const duration = 900;
      const start = performance.now();

      const step = (t) => {
        const p = Math.min(1, (t - start) / duration);
        const val = Math.floor(target * (1 - Math.pow(1 - p, 3)));
        el.textContent = `+${val}`;
        if (p < 1) requestAnimationFrame(step);
      };

      requestAnimationFrame(step);
    };

    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          animate(e.target);
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.6 });

    nums.forEach(el => obs.observe(el));
  }

  // =========================
  // Mobile WhatsApp CTA button (id="mobileCtaWA")
  // =========================
  function setupMobileCtaWA() {
    const waBtn = document.getElementById("mobileCtaWA");
    if (!waBtn) return;

    const lang = getLang();
    const message =
      lang === "ar"
        ? "مرحبا، أبغى طلب سريع للأكل العربي. ممكن ترسلوا التفاصيل؟"
        : "Hi, I want a quick order for Arabic food. Can you send details?";

    waBtn.setAttribute("href", buildWhatsAppLink(message));
  }

  // =========================
  // Language switch
  // =========================
  function setupLangSwitch() {
    const btn = document.getElementById("langBtn");
    if (!btn) return;

    btn.addEventListener("click", () => {
      const current = getLang();
      const next = (current === "ar") ? "en" : "ar";
      setLang(next);

      setDocumentDirection(next);
      applyI18n(next);
      renderHeroBadges(next);
      renderPlans(next);
      renderMenu(next);


      setupMobileCtaWA();

      const waFloat = document.getElementById("waFloat");
      if (waFloat) {
        waFloat.href = buildWhatsAppLink(
          next === "ar"
            ? "السلام عليكم، أبغى استفسار عن الاشتراك."
            : "Hi, I have a question about the subscription."
        );
      }
    });
  }
  function setupHeaderCompact() {
  const header = document.querySelector(".header");
  if (!header) return;

  const onScroll = () => {
    header.classList.toggle("header--compact", window.scrollY > 12);
  };

  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

  // =========================
  // Init
  // =========================
  document.addEventListener("DOMContentLoaded", () => {
    const year = document.getElementById("year");
    if (year) year.textContent = String(new Date().getFullYear());

    const lang = getLang();
    setDocumentDirection(lang);
    applyI18n(lang);

    renderHeroBadges(lang);
    renderPlans(lang);
    renderMenu(lang);


    setupPlanActions();
    setupContactForm();
    setupMobileMenu();
    setupSmoothScroll();
    setActiveNav();
    setupNavIndicator();
    setupToTop();
    setupLangSwitch();
    setupRevealOnScroll();
    setupCounters();
    setupMobileCtaWA();
    setupHeaderCompact();

  });

})();