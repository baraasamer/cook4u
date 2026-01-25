/* Cook4U app.js
   - UI logic only (no frameworks)
   - Fix: toggle meals per card ONLY (auto-close others)
   - Fix: AR/EN switching with proper dir
*/

(() => {
  "use strict";

  // =========================
  // Settings (EDIT THESE)
  // =========================
  const SETTINGS = {
    storageKey: "cook4u_lang",
    defaultLang: "ar",
    whatsappNumber: "602165794", // ✅ change to your real number (example: "60123456789")
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
      "hero.subtitle": "وجبات عشاء عربية بجودة عالية وسعر مناسب للطلاب العرب في ماليزيا.",
      "hero.primary": "اشترك الآن",
      "hero.secondary": "تعرف علينا",
      "hero.dinnerOnly": "عشاء فقط",
      "hero.deliveryIncluded": "التوصيل شامل",
      "stats.meals": "وجبة مقدمة",
      "stats.students": "طالب/ة",
      "hero.note": "اشتراك عشاء عربي مميز للطلاب العرب في ماليزيا.",
      "hero.scroll": "نزّل",

      "about.title": "رؤية Cook4U",
      "about.text": "مطبخ متخصص في تقديم وجبات عشاء عربية للطلاب العرب في ماليزيا بجودة عالية وسعر مناسب مع توصيل شامل.",
      "about.f1Title": "طعم رائع مقابل السعر",
      "about.f1Sub": "مناسب لميزانية الطلاب",
      "about.f2Title": "توصيل موثوق",
      "about.f2Sub": "مناسب لوقت العشاء",
      "about.f3Title": "مصمم للطلاب العرب",
      "about.f3Sub": "عشاء عربي مريح",
      "about.ribbon": "اختيار الطلاب",
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

      "contact.sideTitle": "مناسب للطلاب في ماليزيا",
      "contact.sideText": "اشتراك عشاء مع توصيل شامل. طعم ثابت، تغليف نظيف، وسعر مناسب.",
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
    },

    en: {
      "brand.tag": "Arabic Dinner Subscription • Malaysia",
      "nav.home": "Home",
      "nav.about": "About",
      "nav.plans": "Plans",
      "nav.faq": "FAQ",
      "nav.contact": "Contact",

      "hero.kicker": "Dinner Only • Delivery Included",
      "hero.title": "Monthly Arabic Dinner Subscription",
      "hero.subtitle": "Premium Arabic dinner meals at student-friendly prices in Malaysia.",
      "hero.primary": "Subscribe Now",
      "hero.secondary": "Learn More",
      "hero.dinnerOnly": "Dinner Only",
      "hero.deliveryIncluded": "Delivery Included",
      "stats.meals": "Meals served",
      "stats.students": "Students",
      "hero.note": "A reliable Arabic dinner subscription for Arab students in Malaysia.",
      "hero.scroll": "Scroll",

      "about.title": "About Cook4U",
      "about.text": "A kitchen focused on Arabic dinner meals for Arab students in Malaysia — great taste, fair price, delivery included.",
      "about.f1Title": "Great taste for the price",
      "about.f1Sub": "Student-friendly budget",
      "about.f2Title": "Reliable delivery",
      "about.f2Sub": "Perfect for dinner time",
      "about.f3Title": "Made for Arab students",
      "about.f3Sub": "Comfort food, done right",
      "about.ribbon": "Student Choice",
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

      "contact.sideTitle": "Perfect for students in Malaysia",
      "contact.sideText": "Dinner subscription with delivery included. Clean packaging, consistent taste, fair price.",
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
    },
  };

  // =========================
  // Plans data (same meaning)
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
      popular: true, // ✅ Most popular
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
    if (lang === "ar") {
      html.setAttribute("lang", "ar");
      html.setAttribute("dir", "rtl");
    } else {
      html.setAttribute("lang", "en");
      html.setAttribute("dir", "ltr");
    }
  }

  function buildWhatsAppLink(message) {
    const num = SETTINGS.whatsappNumber.replace(/[^\d]/g, "");
    const encoded = encodeURIComponent(message);
    return `https://wa.me/${num}?text=${encoded}`;
  }

  // =========================
  // UI: Update i18n text
  // =========================
  function applyI18n(lang) {
    // update all data-i18n nodes
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      el.textContent = t(lang, key);
    });

    // language button label
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
      { icon: ICONS.check, ar: "أفضل خيار للطلاب العرب", en: "Best fit for Arab students" },
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

        <!-- ✅ meals hidden by default -->
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

      // Find current plan data
      const planId = planCard.getAttribute("data-plan-id");
      const plan = PLANS.find(p => p.id === planId);
      if (!plan) return;

      if (action === "subscribe") {
        const planTitle = (lang === "ar")
          ? `${plan.mealsPerWeek} وجبات في الأسبوع`
          : `${plan.mealsPerWeek} meals/week`;

        const msg = (lang === "ar")
          ? `السلام عليكم، أبغى اشترك في باقة ${planTitle} بسعر ${plan.currency} ${plan.price}. (عشاء فقط + التوصيل شامل)`
          : `Hi, I want to subscribe to the ${planTitle} plan for ${plan.currency} ${plan.price}. (Dinner only + delivery included)`;

        window.open(buildWhatsAppLink(msg), "_blank", "noopener,noreferrer");
        return;
      }

      if (action === "toggleMeals") {
        // ✅ ONLY toggle this card, and close others
        const thisMeals = planCard.querySelector("[data-meals]");
        if (!thisMeals) return;

        const isOpen = thisMeals.style.display !== "none";

        // Close ALL other meals first
        document.querySelectorAll("#plansGrid .plan").forEach(otherCard => {
          const meals = otherCard.querySelector("[data-meals]");
          const otherBtn = otherCard.querySelector('button[data-action="toggleMeals"]');
          if (meals) meals.style.display = "none";
          if (otherBtn) {
            otherBtn.setAttribute("aria-expanded", "false");
            const label = otherBtn.querySelector("span:last-child");
            if (label) label.textContent = t(lang, "plan.detailsShow");
          }
        });

        // Toggle current one
        if (!isOpen) {
          thisMeals.style.display = "block";
          btn.setAttribute("aria-expanded", "true");
          const label = btn.querySelector("span:last-child");
          if (label) label.textContent = t(lang, "plan.detailsHide");
        } else {
          thisMeals.style.display = "none";
          btn.setAttribute("aria-expanded", "false");
          const label = btn.querySelector("span:last-child");
          if (label) label.textContent = t(lang, "plan.detailsShow");
        }

        return;
      }
    });
  }

  // =========================
  // Contact form -> WhatsApp
  // =========================
  function setupContactForm() {
    const form = document.getElementById("contactForm");
    const note = document.getElementById("formNote");
    const waFloat = document.getElementById("waFloat");

    if (waFloat) {
      const lang = getLang();
      const msg = (lang === "ar")
        ? "السلام عليكم، أبغى استفسار عن الاشتراك."
        : "Hi, I have a question about the subscription.";
      waFloat.href = buildWhatsAppLink(msg);
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

      if (note) {
        note.textContent = (lang === "ar")
          ? "تم فتح واتساب برسالة جاهزة ✅"
          : "WhatsApp opened with a ready message ✅";
      }

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
      links.classList.toggle("show");
    });

    // close menu on link click (mobile)
    links.addEventListener("click", (e) => {
      const a = e.target.closest("a");
      if (!a) return;
      links.classList.remove("show");
    });
  }

  // =========================
  // Smooth scroll + active nav
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

  function setActiveNav() {
    const links = Array.from(document.querySelectorAll(".nav__links a[href^='#']"));
    if (!links.length) return;

    const sections = links
      .map(a => document.querySelector(a.getAttribute("href")))
      .filter(Boolean);

    const obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const id = "#" + entry.target.id;
        links.forEach(a => a.classList.toggle("active", a.getAttribute("href") === id));
      });
    }, { threshold: 0.45 });

    sections.forEach(sec => obs.observe(sec));
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

      // re-link WhatsApp quick badge (language sensitive)
      const waFloat = document.getElementById("waFloat");
      if (waFloat) {
        const msg = (next === "ar")
          ? "السلام عليكم، أبغى استفسار عن الاشتراك."
          : "Hi, I have a question about the subscription.";
        waFloat.href = buildWhatsAppLink(msg);
      }
    });
  }

  // =========================
  // Init
  // =========================
  function setupRevealOnScroll() {
  const items = document.querySelectorAll("section, .hero, .card, .cardLite, details, .featureCard");

  items.forEach(el => el.classList.add("reveal"));

  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add("is-visible");
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });

  items.forEach(el => obs.observe(el));
}

// ===============================
// Nav Indicator (Active menu bar)
// ===============================
function setupNavIndicator(){
  const wrap = document.getElementById("navLinks");
  const indicator = document.getElementById("navIndicator");
  if (!wrap || !indicator) return;

  const links = Array.from(wrap.querySelectorAll("a"));
  if (!links.length) return;

  const moveTo = (a) => {
    const r = a.getBoundingClientRect();
    const wr = wrap.getBoundingClientRect();

    // RTL-safe positioning
    const x = (r.left - wr.left) + (r.width / 2) - 12;
    indicator.style.transform = `translateX(${x}px)`;
    indicator.style.width = Math.max(24, r.width * 0.45) + "px";
  };

  const update = () => {
    const active = wrap.querySelector("a.active") || links[0];
    if (active) moveTo(active);
  };

  // hover
  links.forEach(a => {
    a.addEventListener("mouseenter", () => moveTo(a));
  });

  wrap.addEventListener("mouseleave", update);
  window.addEventListener("resize", update);

  // لو تغير active بسبب السكرول
  const observer = new MutationObserver(update);
  observer.observe(wrap, { subtree: true, attributes: true, attributeFilter: ["class"] });

  setTimeout(update, 100);
}
// ===============================
// Reveal elements on scroll
// ===============================
function setupRevealOnScroll(){
  const items = document.querySelectorAll(
    "section, .hero, .card, .cardLite, details, .featureCard, .about__box"
  );

  items.forEach(el => el.classList.add("reveal"));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  items.forEach(el => observer.observe(el));
}
// =========================

  document.addEventListener("DOMContentLoaded", () => {
    // year
    const year = document.getElementById("year");
    if (year) year.textContent = String(new Date().getFullYear());

    setupRevealOnScroll();

    const lang = getLang();
    setDocumentDirection(lang);
    applyI18n(lang);

    renderHeroBadges(lang);
    renderPlans(lang);

    setupPlanActions();
    setupContactForm();
    setupMobileMenu();
    setupSmoothScroll();
    setActiveNav();
    setupToTop();
    setupLangSwitch();
    setupCounters();
    setupNavIndicator();
    setupRevealOnScroll();



  });

function setActiveNav() {
  const links = Array.from(document.querySelectorAll(".nav__links a[href^='#']"));
  if (!links.length) return;

  const sections = links
    .map(a => document.querySelector(a.getAttribute("href")))
    .filter(Boolean);

  // important: account for sticky header height
  const obs = new IntersectionObserver(
    (entries) => {
      // pick the most visible section
      const visible = entries
        .filter(e => e.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (!visible || !visible.target?.id) return;

      const id = "#" + visible.target.id;
      links.forEach(a => a.classList.toggle("active", a.getAttribute("href") === id));
    },
    {
      root: null,
      // top negative = ignore area hidden under sticky header
      // bottom negative = avoid jumping too early
      rootMargin: "-120px 0px -55% 0px",
      threshold: [0.15, 0.25, 0.35, 0.5, 0.65],
    }
  );

  sections.forEach(sec => obs.observe(sec));
}

})();
function setupCounters() {
  const nums = document.querySelectorAll("[data-count]");
  if (!nums.length) return;

  const animate = (el) => {
    const target = parseInt(el.getAttribute("data-count"), 10) || 0;
    const duration = 900;
    const start = performance.now();
    const from = 0;

    const step = (t) => {
      const p = Math.min(1, (t - start) / duration);
      const val = Math.floor(from + (target - from) * (1 - Math.pow(1 - p, 3)));
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
