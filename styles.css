/* =========================
   Your Kitchn — Premium UI (Brown/White)
   Calm, modern, commercial feel
========================= */
html { scroll-behavior: smooth; 

}

:root{
  --bg: #FDF8F1;
  --bg2:#F7EDE0;
  --card:#FFFFFF;

  --text:#2A1A12;
  --muted:#6B5349;

  --brown:#6A3F2B;
  --brown2:#3B2418;
  --accent:#C79B59;

  --line: rgba(59,36,24,.12);

  --r-xl: 26px;
  --r-lg: 20px;
  --r-md: 16px;
  --r-sm: 12px;

  --shadow: 0 18px 45px rgba(20, 10, 6, .10);
  --shadow2: 0 26px 70px rgba(20, 10, 6, .14);

  --focus: 0 0 0 3px rgba(199,155,89,.4);
}

*{box-sizing:border-box}
html{scroll-behavior:smooth}
body{
  margin:0;
  font-family: "Tajawal", "Inter", system-ui, Arial, sans-serif;
  background: var(--bg);
  color: var(--text);
  line-height: 1.65;
  overflow-x:hidden;
}

a{color:inherit; text-decoration:none}
.container{width:min(1180px, 92%); margin:0 auto}

.muted{color:var(--muted)}
.icon{width:20px; height:20px; display:block}

.bg{
  position:fixed;
  inset:0;
  z-index:-1;
  pointer-events:none;
}
.bg__grain{
  position:absolute; inset:0;
  opacity:.08;
  background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.7' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='180' height='180' filter='url(%23n)' opacity='.6'/%3E%3C/svg%3E");
}
.bg__glow{
  position:absolute;
  width:720px; height:520px;
  border-radius: 999px;
  filter: blur(40px);
  opacity:.55;
}
.bg__glow--a{
  top:-180px; left:-180px;
  background: radial-gradient(circle, rgba(199,155,89,.45), transparent 65%);
}
.bg__glow--b{
  bottom:-220px; right:-180px;
  background: radial-gradient(circle, rgba(106,63,43,.22), transparent 65%);
}
.bg__pattern{
  position:absolute; inset:0;
  opacity:.10;
  background-image:
    radial-gradient(circle at 1px 1px, rgba(59,36,24,.15) 1px, transparent 1px);
  background-size: 28px 28px;
}

/* Header */
.header{
  position:sticky;
  top:0;
  z-index:100;
  background: rgba(253,248,241,.80);
  backdrop-filter: blur(14px);
  border-bottom:1px solid var(--line);
  transition: padding .2s ease, background .2s ease;
}
.header--compact{
  padding: 4px 0;
  background: rgba(253,248,241,.92);
}
.header__inner{
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding:16px 0;
  gap:14px;
}
.header__actions{
  display:flex;
  align-items:center;
  gap:10px;
}

.logo{
  display:flex;
  align-items:center;
  gap:12px;
  text-decoration: none;
  transition: opacity .2s ease;
}
.logo:hover{
  opacity: .85;
}
.logo__img{
  width:48px; 
  height:48px;
  border-radius: 16px;
  object-fit: contain;
}
.logo__text{
  display:flex;
  flex-direction:column;
  gap:2px;
}
.logo__text strong{
  font-weight: 800;
  font-size: 1.15rem;
  letter-spacing:.3px;
  color: var(--brown2);
}
.logo__text span{
  font-size:.85rem;
  color: var(--muted);
  font-weight: 500;
}

/* Nav */
.nav{display:flex; align-items:center; gap:12px}
.nav__toggle{
  display:none;
  width:48px; height:48px;
  border-radius: 14px;
  border: 1px solid rgba(59,36,24,.18);
  background: rgba(255,255,255,.90);
  box-shadow: 0 10px 22px rgba(0,0,0,.06);
  cursor:pointer;
  transition: transform .2s ease, box-shadow .2s ease, background .2s ease;
}
.nav__toggle:hover{
  background: rgba(255,255,255,1);
  box-shadow: 0 12px 28px rgba(0,0,0,.08);
}
.nav__toggle:active{
  transform: scale(.96);
}
.nav__toggleIcon{
  display:block;
  width:18px; height:2px;
  background: var(--brown2);
  position:relative;
  margin:0 auto;
  border-radius:999px;
}
.nav__toggleIcon::before,
.nav__toggleIcon::after{
  content:"";
  position:absolute;
  left:0;
  width:18px; height:2px;
  background: var(--brown2);
  border-radius:999px;
}
.nav__toggleIcon::before{top:-6px}
.nav__toggleIcon::after{top:6px}

.nav__links{
  display:flex;
  align-items:center;
  gap:18px;
  padding:10px 12px;
  border-radius: 999px;
  background: rgba(255,255,255,.75);
  border:1px solid var(--line);
}
.nav__links a{
  font-weight:700;
  color: var(--brown2);
  padding:8px 12px;
  border-radius: 999px;
  transition: background .2s ease, transform .15s ease, color .2s ease;
  opacity:.85;
  position: relative;
}
.nav__links a:hover{
  background: rgba(199,155,89,.2);
  transform: translateY(-1px);
  opacity: 1;
}
.nav__links a.active{
  background: rgba(199,155,89,.25);
  opacity: 1;
  color: var(--brown2);
}

/* Buttons */
.btn{
  display:inline-flex;
  align-items:center;
  justify-content:center;
  gap:10px;
  border-radius: 999px;
  padding:12px 20px;
  border: 1px solid transparent;
  cursor:pointer;
  font-weight:700;
  transition: transform .2s ease, box-shadow .2s ease, background .2s ease, filter .2s ease;
  user-select:none;
}
.btn:focus-visible{outline:none; box-shadow: var(--focus)}

.btn--lg{padding:14px 24px; font-size: 1.05rem;}
.btn--primary{
  background: linear-gradient(135deg, #7D4A2E, #5C3622);
  color:#fff;
  box-shadow: 0 14px 28px rgba(59,36,24,.2);
}
.btn--primary:hover{
  transform: translateY(-2px); 
  box-shadow: 0 18px 36px rgba(59,36,24,.28);
  filter: brightness(1.08);
}
.btn--primary:active{
  transform: translateY(0);
}
.btn--ghost{
  background: rgba(255,255,255,.95);
  color: var(--brown2);
  border-color: rgba(59,36,24,.20);
}
.btn--ghost:hover{
  transform: translateY(-1px); 
  background: rgba(199,155,89,.12);
  border-color: rgba(199,155,89,.3);
}
.btn--soft{
  background: rgba(255,255,255,.85);
  color: var(--brown2);
  border-color: rgba(59,36,24,.15);
}
.btn--soft:hover{
  background: rgba(255,255,255,.95);
  border-color: rgba(59,36,24,.25);
}

/* Hero */
.hero{
  padding: 74px 0 40px;
  position:relative;
}
.hero__grid{
  display:grid;
  grid-template-columns: 1.15fr .85fr;
  gap: 34px;
  align-items:center;
}
.hero__kicker{
  display:inline-flex;
  align-items:center;
  gap:10px;
  padding:8px 12px;
  border-radius: 999px;
  background: rgba(255,255,255,.75);
  border: 1px solid var(--line);
  color: var(--muted);
  font-weight:800;
  margin-bottom: 16px;
}
.dot{
  width:9px; height:9px;
  border-radius:999px;
  background: var(--accent);
  box-shadow: 0 0 0 5px rgba(199,155,89,.18);
}

.hero__title{
  font-size: clamp(34px, 4.6vw, 58px);
  line-height: 1.06;
  margin: 0 0 14px;
  letter-spacing:.2px;
}
.hero__lead{
  font-size: 1.12rem;
  color: var(--muted);
  margin: 0;
  max-width: 56ch;
}

.hero__badges{
  display:flex;
  flex-wrap:wrap;
  gap:10px;
  margin: 18px 0 0;
}

.badge{
  display:inline-flex;
  align-items:center;
  gap:10px;
  padding:10px 12px;
  border-radius: 999px;
  background: rgba(255,255,255,.82);
  border: 1px solid var(--line);
  color: var(--brown2);
  font-weight: 900;
}
.badge .icon{color: var(--accent)}

.hero__actions{
  display:flex;
  gap:12px;
  flex-wrap:wrap;
  margin-top: 24px;
}

/* Trust row */
.hero__trust{
  display:grid;
  grid-template-columns: 1fr 1fr;
  gap:12px;
  margin-top: 22px;
}
.trustItem{
  display:flex;
  gap:12px;
  align-items:flex-start;
  padding:14px;
  border-radius: var(--r-lg);
  border:1px solid var(--line);
  background: rgba(255,255,255,.72);
}
.trustItem__icon{
  width:40px; height:40px;
  border-radius: 14px;
  display:grid;
  place-items:center;
  background: rgba(199,155,89,.14);
  color: var(--brown2);
}
.trustItem__title{font-weight: 900}
.trustItem__sub{font-size:.92rem; color: var(--muted)}

/* Hero card preview */
.hero__card{
  border-radius: var(--r-xl);
  background: rgba(255,255,255,.90);
  border: 1px solid var(--line);
  box-shadow: var(--shadow2);
  overflow:hidden;
}
.cardPreview{padding:18px}
.cardPreview__top{
  display:flex;
  justify-content:space-between;
  gap:10px;
  flex-wrap:wrap;
}
.chip{
  display:inline-flex;
  align-items:center;
  gap:10px;
  padding:10px 12px;
  border-radius:999px;
  background: rgba(59,36,24,.04);
  border:1px solid var(--line);
  font-weight:900;
  color: var(--brown2);
}
.chip__icon{display:grid; place-items:center; color: var(--accent)}
.chip--gold{background: rgba(199,155,89,.16)}

.platePhoto{
  height: 270px;
  border-radius: var(--r-lg);
  margin-top: 14px;
  background: radial-gradient(circle at 30% 30%, rgba(199,155,89,.35), transparent 60%),
              linear-gradient(135deg, rgba(247,237,224,.9), rgba(255,255,255,.95));
  border:1px solid rgba(199,155,89,.28);
  display:grid;
  place-items:center;
  position:relative;
  overflow:hidden;
}
.platePhoto__ring{
  position:absolute;
  width:220px; height:220px;
  border-radius:999px;
  border: 2px dashed rgba(106,63,43,.18);
  animation: spin 14s linear infinite;
}
@keyframes spin{to{transform:rotate(360deg)}}
.platePhoto__inner{
  width:170px; height:170px;
  border-radius:999px;
  background:
    radial-gradient(circle at 35% 35%, rgba(255,255,255,.85), transparent 55%),
    radial-gradient(circle at 70% 70%, rgba(106,63,43,.20), transparent 55%),
    rgba(255,255,255,.45);
  border: 1px solid rgba(59,36,24,.14);
  box-shadow: 0 18px 42px rgba(0,0,0,.10);
}

.cardPreview__stats{
  margin-top: 14px;
  display:grid;
  grid-template-columns: 1fr 1fr;
  gap:12px;
}
.miniStat{
  padding:14px;
  border-radius: var(--r-lg);
  border:1px solid var(--line);
  background: rgba(255,255,255,.80);
}
.miniStat__num{
  font-weight: 1000;
  font-size: 1.55rem;
  color: var(--brown);
}
.miniStat__label{color: var(--muted); font-weight: 800; font-size:.92rem}
.cardPreview__note{
  margin-top: 12px;
  color: var(--muted);
  font-weight: 700;
}

/* Scroll hint */
.scrollHint{
  margin-top: 22px;
  display:flex;
  flex-direction:column;
  align-items:center;
  gap:8px;
  color: var(--muted);
  font-weight: 900;
}
.scrollHint__chev{
  width:22px; height:22px;
  border-right: 3px solid rgba(59,36,24,.35);
  border-bottom: 3px solid rgba(59,36,24,.35);
  transform: rotate(45deg);
  animation: bob 1.2s ease-in-out infinite;
}
@keyframes bob{
  0%,100%{transform: translateY(0) rotate(45deg)}
  50%{transform: translateY(5px) rotate(45deg)}
}

/* Sections */
.section{padding: 78px 0}
.section--alt{
  background: linear-gradient(180deg, rgba(247,237,224,.72), rgba(253,248,241,.55));
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
}

.section__head{display:flex; flex-direction:column; gap:10px}
.section__head--row{
  display:flex; align-items:flex-end; justify-content:space-between;
  gap:16px; flex-wrap:wrap;
}
.section__head h2{
  margin:0;
  font-size: 2.1rem;
  letter-spacing:.2px;
}

/* About */
.about{
  display:grid;
  grid-template-columns: 1.05fr .95fr;
  gap: 18px;
  align-items:start;
}

.featureGrid{
  display:grid;
  grid-template-columns: repeat(3, 1fr);
  gap:12px;
  margin-top: 18px;
}
.feature{
  display:flex;
  gap:12px;
  align-items:flex-start;
  padding:14px;
  border-radius: var(--r-lg);
  border:1px solid var(--line);
  background: rgba(255,255,255,.75);
}
.feature__icon{
  width:42px; height:42px;
  border-radius: 14px;
  display:grid;
  place-items:center;
  background: rgba(199,155,89,.14);
  color: var(--brown2);
}
.feature__title{font-weight: 1000}
.feature__sub{color: var(--muted); font-weight: 700; font-size:.92rem}

.about__card{
  border-radius: var(--r-xl);
  border:1px solid rgba(199,155,89,.30);
  background: rgba(255,255,255,.85);
  box-shadow: var(--shadow);
  padding:18px;
  position:relative;
  overflow:hidden;
}
.about__card::before{
  content:"";
  position:absolute;
  width:240px; height:240px;
  border-radius:999px;
  background: radial-gradient(circle, rgba(199,155,89,.20), transparent 62%);
  top:-120px; right:-120px;
}
.ribbon{
  display:inline-flex;
  padding:8px 12px;
  border-radius:999px;
  background: rgba(199,155,89,.18);
  border:1px solid rgba(199,155,89,.32);
  font-weight: 1000;
}
.about__ctaRow{display:flex; gap:10px; flex-wrap:wrap; margin-top:14px}

/* Plans */
.miniLegend{
  display:flex;
  align-items:center;
  gap:14px;
  flex-wrap:wrap;
}
.miniLegend__item{
  display:inline-flex;
  align-items:center;
  gap:10px;
  padding:10px 12px;
  border-radius:999px;
  border:1px solid var(--line);
  background: rgba(255,255,255,.70);
  color: var(--brown2);
  font-weight: 900;
}
.miniLegend__item .icon{color: var(--accent)}

.pricing{
  display:grid;
  grid-template-columns: repeat(4, 1fr);
  gap:14px;
  margin-top: 20px;
}

.card{
  border-radius: var(--r-xl);
  background: rgba(255,255,255,.92);
  border:1px solid var(--line);
  box-shadow: var(--shadow);
  overflow:hidden;
  transition: transform .15s ease, box-shadow .15s ease;
}
.card:hover{transform: translateY(-6px); box-shadow: var(--shadow2)}

.plan{
  padding:18px;
}
.plan__top{
  display:flex;
  align-items:flex-start;
  justify-content:space-between;
  gap:10px;
}
.plan__title{
  font-weight: 1000;
  font-size: 1.15rem;
  margin:0;
}
.plan__ribbon{
  display:inline-flex;
  align-items:center;
  gap:8px;
  padding:8px 10px;
  border-radius:999px;
  background: rgba(199,155,89,.22);
  border:1px solid rgba(199,155,89,.38);
  font-weight: 1000;
  white-space:nowrap;
}
.plan__priceRow{
  margin-top: 10px;
  display:flex;
  align-items:baseline;
  gap:10px;
}
.plan__price{
  font-size: 1.9rem;
  font-weight: 1100;
  color: var(--brown);
}
.plan__per{
  color: var(--muted);
  font-weight: 900;
}
.plan__meta{
  display:flex;
  flex-wrap:wrap;
  gap:10px;
  margin-top: 12px;
}
.metaPill{
  display:inline-flex;
  align-items:center;
  gap:10px;
  padding:10px 12px;
  border-radius:999px;
  border:1px solid var(--line);
  background: rgba(59,36,24,.03);
  font-weight: 900;
  color: var(--brown2);
}
.metaPill .icon{color: var(--accent)}

.plan__list{
  margin: 14px 0 0;
  padding-inline-start: 18px;
  color: var(--muted);
  font-weight: 700;
}
.plan__list li{margin: 8px 0}

.plan__actions{
  display:flex;
  gap:10px;
  flex-wrap:wrap;
  margin-top: 16px;
}

/* FAQ */
.faq{
  display:grid;
  gap:12px;
  margin-top: 10px;
}
details{
  border-radius: var(--r-xl);
  border:1px solid var(--line);
  background: rgba(255,255,255,.85);
  padding:16px 18px;
  box-shadow: 0 14px 30px rgba(0,0,0,.06);
}
summary{
  cursor:pointer;
  font-weight: 1000;
  color: var(--brown2);
}
details p{margin: 10px 0 0}

/* Contact */
.contact{
  display:grid;
  grid-template-columns: 1fr 1fr;
  gap:14px;
  align-items:start;
}
.card--form{padding:18px}

.field{display:grid; gap:8px; margin-top: 10px}
.field__label{font-weight: 1000; color: var(--brown2)}
.input{
  width:100%;
  padding:12px 12px;
  border-radius: 16px;
  border:1px solid var(--line);
  background: rgba(255,255,255,.95);
  color: var(--text);
  transition: box-shadow .15s ease, border-color .15s ease;
}
.input:focus{outline:none; border-color: rgba(199,155,89,.55); box-shadow: var(--focus)}

.form__actions{display:flex; gap:10px; flex-wrap:wrap; margin-top: 12px}

.contact__card{
  border-radius: var(--r-xl);
  border:1px solid rgba(199,155,89,.28);
  background: rgba(255,255,255,.88);
  box-shadow: var(--shadow);
  padding:18px;
}
.contact__badge{
  display:inline-flex;
  padding:8px 12px;
  border-radius:999px;
  background: rgba(199,155,89,.18);
  border:1px solid rgba(199,155,89,.32);
  font-weight: 1000;
}
.contact__title{margin: 12px 0 0}
.contact__items{display:grid; gap:12px; margin-top: 14px}
.contactItem{
  display:flex;
  gap:12px;
  align-items:flex-start;
  padding:14px;
  border-radius: var(--r-lg);
  border:1px solid var(--line);
  background: rgba(255,255,255,.72);
}
.contactItem .icon{color: var(--accent); margin-top:2px}
.contactItem__title{font-weight: 1000}
.contactItem__sub{color: var(--muted); font-weight: 800}

/* Footer */
.footer{
  padding: 30px 0;
  border-top:1px solid var(--line);
  background: rgba(255,255,255,.60);
}
.footer__inner{
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap: 12px;
  flex-wrap:wrap;
}
.footer__brand{font-weight: 1000}

/* Floating WhatsApp */
.floatWA{
  position: fixed;
  left: 18px;
  bottom: 18px;
  width:56px; height:56px;
  border-radius: 18px;
  background: linear-gradient(135deg, rgba(199,155,89,.25), rgba(255,255,255,.95));
  border: 1px solid rgba(199,155,89,.35);
  box-shadow: var(--shadow);
  display:grid;
  place-items:center;
  color: var(--brown2);
  z-index: 120;
  transition: transform .15s ease;
}
.floatWA:hover{transform: translateY(-4px)}
.floatWA__icon .icon{width:22px; height:22px}

/* Back to top */
.toTop{
  position: fixed;
  right: 18px;
  bottom: 18px;
  width:56px; height:56px;
  border-radius: 18px;
  background: linear-gradient(135deg, var(--brown), var(--brown2));
  border: none;
  box-shadow: var(--shadow);
  cursor:pointer;
  display:none;
  z-index: 120;
}
.toTop::before{
  content:"";
  width:14px; height:14px;
  border-right: 3px solid #fff;
  border-top: 3px solid #fff;
  transform: rotate(-45deg);
  display:block;
  margin: 0 auto;
}

/* Responsive */
@media (max-width: 1050px){
  .pricing{grid-template-columns: repeat(2, 1fr)}
  .featureGrid{grid-template-columns: 1fr}
}

@media (max-width: 900px){
  .hero__grid{grid-template-columns: 1fr}
  .about{grid-template-columns: 1fr}
  .contact{grid-template-columns: 1fr}
  .hero__trust{grid-template-columns: 1fr}

  .nav__toggle{display:inline-flex; align-items:center; justify-content:center}
  .nav__links{
    display:none;
    position:absolute;
    top: 74px;
    inset-inline-start: 4%;
    inset-inline-end: 4%;
    border-radius: 18px;
    background: rgba(255,255,255,.92);
    border:1px solid var(--line);
    box-shadow: var(--shadow);
    padding:12px;
    flex-direction:column;
    align-items:stretch;
    gap:10px;
  }
  .nav{position:relative}
  .nav__links.show{display:flex}
}

@media (prefers-reduced-motion: reduce){
  *{scroll-behavior:auto !important}
  .brand__logo{animation:none !important}
  .platePhoto__ring{animation:none !important}
}
/* =========================
   FIX: Logo too big (force header logo size)
   Paste at the END of styles.css
========================= */

/* if logo uses class brand__logo */
.brand__logo,
.logo__img{
  width: 56px !important;
  height: 56px !important;
  object-fit: contain !important;
  display: block !important;
  flex: 0 0 auto !important;
  border-radius: 16px !important;
  background: #fff !important;
  padding: 6px !important;
}

/* prevent any global img rules from stretching the logo */
.brand__logo{
  max-width: none !important;
}

/* keep the logo aligned nicely in the header */
.logo{
  display: flex;
  align-items: center;
  gap: 12px;
}

/* Premium micro animation */
.brand__logo,
.logo__img{
  animation: logoFloat 4.5s ease-in-out infinite;
  box-shadow: 0 14px 30px rgba(0,0,0,.14);
  transition: transform .2s ease, box-shadow .2s ease, filter .2s ease;
}

.brand__logo:hover,
.logo__img:hover{
  transform: translateY(-2px) scale(1.02);
  filter: saturate(1.05);
  box-shadow: 0 18px 40px rgba(0,0,0,.18);
}

@keyframes logoFloat{
  0%,100%{ transform: translateY(0); }
  50%{ transform: translateY(-5px); }
}


/* =========================
   PREMIUM HEADER / NAVBAR
   Paste at END of styles.css
========================= */

/* Sticky header polish */
.header{
  background: rgba(253,250,246,.82);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border-bottom: 1px solid rgba(59,36,24,.10);
  transition: background .25s ease, box-shadow .25s ease, transform .25s ease;
}

.header.is-scrolled{
  background: rgba(253,250,246,.92);
  box-shadow: 0 12px 28px rgba(0,0,0,.08);
}

/* Layout tightening */
.header__inner{
  padding: 12px 0;
}

/* Nav capsule */
.nav__links{
  background: rgba(255,255,255,.70);
  border: 1px solid rgba(59,36,24,.12);
  box-shadow: 0 10px 26px rgba(0,0,0,.06);
  padding: 8px 10px;
}

.nav__links a{
  font-weight: 900;
  letter-spacing: .1px;
  transition: background .18s ease, transform .18s ease, color .18s ease;
}

.nav__links a:hover{
  transform: translateY(-1px);
}

.nav__links a.active{
  background: rgba(227,210,188,.55);
}

/* Language button premium */
.lang button{
  border: 1px solid rgba(59,36,24,.14);
  background: linear-gradient(180deg, #ffffff, rgba(255,255,255,.85));
  box-shadow: 0 12px 26px rgba(0,0,0,.08);
  font-weight: 1000;
  padding: 10px 14px;
  border-radius: 14px;
  transition: transform .18s ease, box-shadow .18s ease, background .18s ease;
}

.lang button:hover{
  transform: translateY(-1px);
  box-shadow: 0 16px 34px rgba(0,0,0,.10);
}

.lang button:active{
  transform: translateY(0px);
}

/* Mobile menu premium dropdown */
@media (max-width: 980px){
  .nav__toggle{
    background: linear-gradient(180deg, #fff, rgba(255,255,255,.85));
    box-shadow: 0 12px 26px rgba(0,0,0,.08);
  }

  .nav__links{
    background: rgba(255,255,255,.96);
    border: 1px solid rgba(59,36,24,.14);
    box-shadow: 0 25px 60px rgba(0,0,0,.14);
  }

  .nav__links a{
    padding: 12px 12px;
    border-radius: 14px;
  }

  .nav__links a:hover{
    background: rgba(227,210,188,.45);
    transform: none;
  }
}

/* Dark mode polish */
@media (prefers-color-scheme: dark){
  .header{
    background: rgba(18,11,8,.72);
    border-bottom-color: rgba(243,232,216,.12);
  }
  .header.is-scrolled{
    background: rgba(18,11,8,.84);
    box-shadow: 0 14px 34px rgba(0,0,0,.35);
  }
  .nav__links{
    background: rgba(30,20,16,.70);
    border-color: rgba(243,232,216,.12);
  }
  .lang button, .nav__toggle{
    background: rgba(30,20,16,.80);
    border-color: rgba(243,232,216,.14);
    box-shadow: 0 14px 32px rgba(0,0,0,.35);
  }
}

/* =========================
   HEADER – COLOR REFINEMENT
   Brown & White (Arabic Food Brand)
========================= */

.header{
  background: rgba(253,250,246,.92); /* off-white warm */
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border-bottom: 1px solid rgba(59,36,24,.12);
  transition: background .25s ease, box-shadow .25s ease;
}

.header.is-scrolled{
  background: rgba(253,250,246,.96);
  box-shadow: 0 14px 34px rgba(59,36,24,.12);
}

/* Logo text colors */
.logo__text strong{
  color: var(--brown900);
}

.logo__text span{
  color: var(--muted);
}

/* Navigation capsule */
.nav__links{
  background: rgba(255,255,255,.85);
  border: 1px solid rgba(59,36,24,.14);
  box-shadow: 0 10px 24px rgba(59,36,24,.08);
}

/* Nav links */
.nav__links a{
  color: var(--brown900);
  font-weight: 900;
}

.nav__links a:hover{
  background: rgba(227,210,188,.55); /* sand */
}

.nav__links a.active{
  background: rgba(199,155,89,.28); /* accent brown */
  color: var(--brown900);
}

/* Language button */
.lang button{
  background: linear-gradient(
    180deg,
    #ffffff,
    rgba(227,210,188,.55)
  );
  color: var(--brown900);
  border: 1px solid rgba(59,36,24,.18);
  box-shadow: 0 12px 26px rgba(59,36,24,.12);
}

.lang button:hover{
  background: linear-gradient(
    180deg,
    #ffffff,
    rgba(227,210,188,.75)
  );
}

/* Mobile toggle */
.nav__toggle{
  background: linear-gradient(
    180deg,
    #ffffff,
    rgba(227,210,188,.6)
  );
  border: 1px solid rgba(59,36,24,.18);
  box-shadow: 0 12px 26px rgba(59,36,24,.12);
}

/* Mobile menu */
@media (max-width: 980px){
  .nav__links{
    background: rgba(253,250,246,.98);
    box-shadow: 0 26px 60px rgba(59,36,24,.18);
  }

  .nav__links a{
    color: var(--brown900);
  }
}

/* Dark mode – still brown, not gray */
@media (prefers-color-scheme: dark){
  .header{
    background: rgba(26,17,13,.88);
    border-bottom-color: rgba(243,232,216,.12);
  }

  .header.is-scrolled{
    background: rgba(26,17,13,.95);
    box-shadow: 0 18px 40px rgba(0,0,0,.45);
  }

  .nav__links{
    background: rgba(30,20,16,.85);
    border-color: rgba(243,232,216,.14);
  }

  .nav__links a{
    color: #f3e8d8;
  }

  .nav__links a:hover{
    background: rgba(199,155,89,.22);
  }

  .lang button,
  .nav__toggle{
    background: rgba(30,20,16,.9);
    color: #f3e8d8;
    border-color: rgba(243,232,216,.14);
  }
}

.toTop{
  transition: opacity .25s ease, transform .25s ease, box-shadow .25s ease;
}

.toTop:hover{
  transform: translateY(-3px);
  box-shadow: 0 22px 40px rgba(107,63,40,.35);
}

/* =========================
   Scroll Reveal (subtle)
========================= */
.reveal {
  opacity: 0;
  transform: translateY(14px);
  transition: opacity .55s ease, transform .55s ease;
  will-change: opacity, transform;
}
.reveal.is-visible {
  opacity: 1;
  transform: translateY(0);
}

/* Respect accessibility */
@media (prefers-reduced-motion: reduce){
  .reveal { opacity: 1; transform: none; transition: none; }
}

body.lang-fade {
  opacity: 0;
  transition: opacity .2s ease;
}

body.lang-ready {
  opacity: 1;
}

/* =========================
   SECTION SEPARATORS
========================= */

.section{
  position: relative;
}

.section::before{
  content:"";
  position:absolute;
  top:0;
  left:0;
  right:0;
  height:1px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(59,36,24,.10),
    transparent
  );
}

.section--alt{
  background: linear-gradient(
    180deg,
    rgba(246,239,230,1),
    rgba(253,250,246,1)
  );
}

/* =========================
   MOBILE UX IMPROVEMENT
========================= */

@media (max-width: 980px){
  .hero{
    padding-top: 68px;
  }

  .hero__actions .btn{
    width: 100%;
  }

  .logo__text span{
    display: none; /* نظافة للجوال */
  }

  .header__inner{
    gap: 10px;
  }
}
/* ========= Meals panel (no layout shift) ========= */
.plan{ position:relative; overflow:hidden; }

.mealsPanel{
  position:absolute;
  inset:14px;
  top: 170px;              /* مكان اللوحة تحت السعر/الوسوم */
  background: rgba(255,255,255,.96);
  border: 1px solid var(--border);
  border-radius: 18px;
  box-shadow: var(--shadow2);
  padding: 14px 14px 12px;
  opacity: 0;
  transform: translateY(10px);
  pointer-events: none;
  transition: opacity .18s ease, transform .18s ease;
  z-index: 5;
}

.plan.is-meals-open .mealsPanel{
  opacity: 1;
  transform: translateY(0);
  pointer-events: auto;
}

/* List inside panel */
.mealsPanel .plan__list{
  margin: 8px 0 0;
  max-height: 220px;       /* ما يطوّل الصفحة */
  overflow:auto;
  padding: 0 18px;
}

/* small close hint */
.mealsPanel__head{
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:10px;
}

.mealsPanel__title{
  font-weight:1000;
  color: var(--brown900);
  font-size: .95rem;
}

/* Optional close button style (uses existing button look) */
.mealsClose{
  border:1px solid var(--border);
  background: rgba(227,210,188,.25);
  color: var(--brown900);
  border-radius: 999px;
  padding: 8px 10px;
  font-weight: 1000;
  cursor:pointer;
}
.mealsClose:hover{ background: rgba(227,210,188,.45); }


/* =========================
   FIX: meals panel should not push other cards
   ========================= */

/* Ensure grid items don't stretch weirdly */
.pricingGrid{
  align-items: start;
}

/* Plan card becomes positioning context */
.plan{
  position: relative;
  overflow: visible;
}

/* Meals list becomes an overlay panel */
.plan__list[data-meals]{
  position: absolute;
  inset-inline: 18px;
  top: 220px; /* ✅ adjusts where the panel starts inside the card */
  z-index: 20;

  display: none; /* stays hidden by default */
  background: rgba(255,255,255,.97);
  border: 1px solid var(--border);
  border-radius: 18px;
  box-shadow: var(--shadow2);
  padding: 14px 18px;
  margin: 0;

  max-height: 240px;        /* ✅ scroll inside */
  overflow: auto;
}

/* When open */
.plan.meals-open .plan__list[data-meals]{
  display: block;
}

/* Make sure buttons stay clickable above the panel */
.plan__actions{
  position: relative;
  z-index: 30;
}

/* ========= Meals panel (no layout shift) ========= */
.plan{ position:relative; overflow:hidden; }

.mealsPanel{
  position:absolute;
  inset:14px;
  top: 170px;              /* مكان اللوحة تحت السعر/الوسوم */
  background: rgba(255,255,255,.96);
  border: 1px solid var(--border);
  border-radius: 18px;
  box-shadow: var(--shadow2);
  padding: 14px 14px 12px;
  opacity: 0;
  transform: translateY(10px);
  pointer-events: none;
  transition: opacity .18s ease, transform .18s ease;
  z-index: 5;
}

.plan.is-meals-open .mealsPanel{
  opacity: 1;
  transform: translateY(0);
  pointer-events: auto;
}

/* List inside panel */
.mealsPanel .plan__list{
  margin: 8px 0 0;
  max-height: 220px;       /* ما يطوّل الصفحة */
  overflow:auto;
  padding: 0 18px;
}

/* small close hint */
.mealsPanel__head{
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:10px;
}

.mealsPanel__title{
  font-weight:1000;
  color: var(--brown900);
  font-size: .95rem;
}

/* Optional close button style (uses existing button look) */
.mealsClose{
  border:1px solid var(--border);
  background: rgba(227,210,188,.25);
  color: var(--brown900);
  border-radius: 999px;
  padding: 8px 10px;
  font-weight: 1000;
  cursor:pointer;
}
.mealsClose:hover{ background: rgba(227,210,188,.45); }

/* =========================
   FIX: Meals list scroll/clip inside plan card
   ========================= */

/* Let cards expand naturally (no internal scrolling) */
.card,
.plan {
  height: auto !important;
  max-height: none !important;
  overflow: visible !important;
}

/* Meals list should grow naturally (no scrollbar area) */
.plan__list[data-meals]{
  max-height: none !important;
  overflow: visible !important;
}

/* Make sure grid doesn't force equal-height stretching weirdly */
.pricingGrid{
  align-items: start;
}


/* =========================
   HEADER – COLOR REFINEMENT
   Brown & White (Arabic Food Brand)
========================= */

.header{
  background: rgba(253,250,246,.92); /* off-white warm */
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border-bottom: 1px solid rgba(59,36,24,.12);
  transition: background .25s ease, box-shadow .25s ease;
}

.header.is-scrolled{
  background: rgba(253,250,246,.96);
  box-shadow: 0 14px 34px rgba(59,36,24,.12);
}

/* Logo text colors */
.logo__text strong{
  color: var(--brown900);
}

.logo__text span{
  color: var(--muted);
}

/* Navigation capsule */
.nav__links{
  background: rgba(255,255,255,.85);
  border: 1px solid rgba(59,36,24,.14);
  box-shadow: 0 10px 24px rgba(59,36,24,.08);
}

/* Nav links */
.nav__links a{
  color: var(--brown900);
  font-weight: 900;
}

.nav__links a:hover{
  background: rgba(227,210,188,.55); /* sand */
}

.nav__links a.active{
  background: rgba(199,155,89,.28); /* accent brown */
  color: var(--brown900);
}

/* Language button */
.lang button{
  background: linear-gradient(
    180deg,
    #ffffff,
    rgba(227,210,188,.55)
  );
  color: var(--brown900);
  border: 1px solid rgba(59,36,24,.18);
  box-shadow: 0 12px 26px rgba(59,36,24,.12);
}

.lang button:hover{
  background: linear-gradient(
    180deg,
    #ffffff,
    rgba(227,210,188,.75)
  );
}

/* Mobile toggle */
.nav__toggle{
  background: linear-gradient(
    180deg,
    #ffffff,
    rgba(227,210,188,.6)
  );
  border: 1px solid rgba(59,36,24,.18);
  box-shadow: 0 12px 26px rgba(59,36,24,.12);
}

/* Mobile menu */
@media (max-width: 980px){
  .nav__links{
    background: rgba(253,250,246,.98);
    box-shadow: 0 26px 60px rgba(59,36,24,.18);
  }

  .nav__links a{
    color: var(--brown900);
  }
}

/* Dark mode – still brown, not gray */
@media (prefers-color-scheme: dark){
  .header{
    background: rgba(26,17,13,.88);
    border-bottom-color: rgba(243,232,216,.12);
  }

  .header.is-scrolled{
    background: rgba(26,17,13,.95);
    box-shadow: 0 18px 40px rgba(0,0,0,.45);
  }

  .nav__links{
    background: rgba(30,20,16,.85);
    border-color: rgba(243,232,216,.14);
  }

  .nav__links a{
    color: #f3e8d8;
  }

  .nav__links a:hover{
    background: rgba(199,155,89,.22);
  }

  .lang button,
  .nav__toggle{
    background: rgba(30,20,16,.9);
    color: #f3e8d8;
    border-color: rgba(243,232,216,.14);
  }
}

.btn--primary{
  transition: transform .15s ease, box-shadow .15s ease;
}
.btn--primary:hover{
  transform: translateY(-2px);
  box-shadow: 0 20px 40px rgba(0,0,0,.25);
}

.btn--primary{
  transition: transform .15s ease, box-shadow .15s ease;
}
.btn--primary:hover{
  transform: translateY(-2px);
  box-shadow: 0 20px 40px rgba(0,0,0,.25);
}

.plan__list{
  transition: max-height .25s ease, opacity .2s ease;
}

.hero h1{
  font-size: clamp(36px, 5vw, 56px);
  letter-spacing: -0.5px;
}

.hero .lead{
  font-size: 1.15rem;
  line-height: 1.8;
  max-width: 520px;
}

.hero__actions{
  margin-top: 28px;
}

.btn--primary{
  transition: transform .18s ease, box-shadow .18s ease, filter .18s ease;
}

.btn--primary:hover{
  transform: translateY(-3px);
  box-shadow: 0 20px 45px rgba(0,0,0,.25);
  filter: brightness(1.05);
}

.plan__ribbon{
  box-shadow: 0 10px 25px rgba(199,155,89,.35);
}

.plan[data-plan-id="p6"]{
  transform: scale(1.04);
  border-color: var(--accent);
}
.plan__list li{
  padding: 6px 0;
  border-bottom: 1px dashed rgba(0,0,0,.08);
}
.plan__list li:last-child{
  border-bottom: none;
}

h1,h2,h3{
  color: var(--brown900);
}

.muted{
  color: #8a7466;
}
.metaPill{
  font-size: .85rem;
  background: rgba(199,155,89,.15);
}
@media (max-width: 600px){
  .hero__actions .btn{
    width: 100%;
  }
}
/* =========================
   STEP 2: Hero – Premium First Impression
   ========================= */

.hero{
  padding-top: 110px;
}

.hero h1{
  font-size: clamp(38px, 5.5vw, 62px);
  line-height: 1.05;
  letter-spacing: -0.6px;
}

.hero .lead{
  font-size: 1.18rem;
  color: var(--muted);
  max-width: 560px;
}

.hero__actions{
  gap: 16px;
}

.hero__actions .btn--primary{
  padding: 16px 28px;
  font-size: 1.05rem;
}

.hero__kicker{
  font-size: .85rem;
  opacity: .9;
}
.hero__badges{
  margin-top: 22px;
}

.badge{
  font-size: .85rem;
  background: rgba(199,155,89,.14);
}

/* =========================
   STEP 2: Premium Pricing Cards
   ========================= */

/* ترتيب أفضل للكروت */
.pricingGrid{
  margin-top: 32px;
  gap: 22px;
}

/* الكرت الأساسي */
.plan{
  padding: 22px;
  background: linear-gradient(
    180deg,
    rgba(255,255,255,.96),
    rgba(255,255,255,.88)
  );
  transition: transform .22s ease, box-shadow .22s ease;
}

/* Hover احترافي */
.plan:hover{
  transform: translateY(-6px);
  box-shadow: 0 28px 60px rgba(0,0,0,.14);
}

/* عنوان الباقة */
.plan__title{
  font-size: 1.25rem;
  font-weight: 900;
}

/* السعر */
.plan__price{
  font-size: 2.2rem;
  font-weight: 1000;
  margin-top: 6px;
}

.plan__per{
  font-size: .85rem;
  opacity: .85;
}

/* الوسوم (عشاء فقط – توصيل شامل) */
.plan__meta{
  margin-top: 14px;
  gap: 10px;
}

.metaPill{
  font-size: .8rem;
  padding: 8px 12px;
}

/* زرار الباقة */
.plan__actions{
  margin-top: 18px;
  gap: 12px;
}

.plan__actions .btn{
  flex: 1;
}

/* إبراز الباقة الأكثر طلبًا */
.plan:has(.plan__ribbon){
  border: 2px solid var(--accent);
  background: linear-gradient(
    180deg,
    rgba(255,255,255,1),
    rgba(227,210,188,.25)
  );
  transform: scale(1.05);
  z-index: 2;
}

/* شريط الأكثر طلبًا */
.plan__ribbon{
  font-size: .75rem;
  letter-spacing: .4px;
  box-shadow: 0 12px 30px rgba(199,155,89,.35);
}

/* ترتيب أفضل لقائمة الوجبات */
.plan__list{
  margin-top: 14px;
}

.plan__list li{
  padding: 6px 0;
  font-size: .9rem;
  border-bottom: 1px dashed rgba(0,0,0,.08);
}

.plan__list li:last-child{
  border-bottom: none;
}

/* =========================
   STEP 2.1: Pricing Grid + Card Base
   ========================= */

.pricingGrid{
  margin-top: 32px;
  gap: 22px;
  align-items: start;
}

.plan{
  padding: 22px;
  border-radius: 26px;
  background: linear-gradient(180deg, rgba(255,255,255,.96), rgba(255,255,255,.88));
  border: 1px solid rgba(59,36,24,.14);
  box-shadow: 0 14px 35px rgba(0,0,0,.08);
  transition: transform .22s ease, box-shadow .22s ease;
}

.plan:hover{
  transform: translateY(-6px);
  box-shadow: 0 28px 60px rgba(0,0,0,.14);
}

/* =========================
   STEP 2.2: Plan Title + Price Hierarchy
   ========================= */

.plan__title{
  font-size: 1.25rem;
  font-weight: 900;
  margin: 0;
  letter-spacing: -0.2px;
}

.plan__priceRow{
  margin-top: 10px;
}

.plan__price{
  font-size: 2.25rem;
  font-weight: 1000;
  letter-spacing: -0.6px;
}

.plan__per{
  font-size: .85rem;
  font-weight: 900;
  opacity: .85;
}

/* =========================
   STEP 2.3: Meta Pills (Dinner + Delivery)
   ========================= */

.plan__meta{
  margin-top: 14px;
  gap: 10px;
}

.metaPill{
  font-size: .82rem;
  padding: 9px 12px;
  background: rgba(199,155,89,.14);
  border: 1px solid rgba(199,155,89,.25);
}

/* =========================
   STEP 2.5: Meals List Styling
   ========================= */

.plan__list{
  margin-top: 14px;
  padding: 12px 18px !important;
  border-radius: 18px;
  background: rgba(255,255,255,.85);
  border: 1px solid rgba(59,36,24,.12);
}

.plan__list li{
  padding: 6px 0;
  font-size: .92rem;
  border-bottom: 1px dashed rgba(0,0,0,.08);
}

.plan__list li:last-child{
  border-bottom: none;
}

/* =========================
   Interactive: Reveal on Scroll
   ========================= */
.reveal{
  opacity: 0;
  transform: translateY(18px);
  filter: blur(6px);
  transition: opacity .6s ease, transform .6s ease, filter .6s ease;
  will-change: opacity, transform;
}

.reveal.is-visible{
  opacity: 1;
  transform: translateY(0);
  filter: blur(0);
}

/* =========================
   Interactive: Nav Indicator
   ========================= */
.nav__links{
  position: relative;
}

.navIndicator{
  position: absolute;
  bottom: 6px;
  height: 3px;
  width: 24px;
  border-radius: 999px;
  background: var(--accent);
  transition: transform .25s ease, width .25s ease, opacity .2s ease;
  opacity: .9;
  pointer-events: none;
}

/* =========================
   INTERACTIVE PACK:
   1) Reveal on scroll
   2) Hero counters
   3) Nav indicator
   ========================= */

/* 1) Reveal on scroll */
.reveal{
  opacity: 0;
  transform: translateY(18px);
  filter: blur(6px);
  transition: opacity .6s ease, transform .6s ease, filter .6s ease;
  will-change: opacity, transform;
}
.reveal.is-visible{
  opacity: 1;
  transform: translateY(0);
  filter: blur(0);
}

/* 2) Counter emphasis (subtle) */
.miniStat__num{
  transition: transform .25s ease;
}
.hero__card:hover .miniStat__num{
  transform: translateY(-1px);
}

/* 3) Nav indicator */
.nav__links{
  position: relative;
}
.navIndicator{
  position: absolute;
  bottom: 6px;
  height: 3px;
  width: 24px;
  border-radius: 999px;
  background: var(--accent);
  transition: transform .25s ease, width .25s ease, opacity .2s ease;
  opacity: .95;
  pointer-events: none;
}

/* Mobile: hide indicator (optional, cleaner) */
@media (max-width: 980px){
  .navIndicator{ display:none; }
}


/* =========================
   NAV INDICATOR (Premium UI)
   ========================= */

.nav__links{
  position: relative;
}

.navIndicator{
  position: absolute;
  bottom: 6px;
  height: 3px;
  width: 24px;
  border-radius: 999px;
  background: var(--accent);
  transition: transform .25s ease, width .25s ease, opacity .2s ease;
  opacity: .95;
  pointer-events: none;
}

/* نخفيه في الجوال (اختياري وأنظف) */
@media (max-width: 980px){
  .navIndicator{
    display: none;
  }
}

/* =========================
   REVEAL ON SCROLL
   ========================= */
.reveal{
  opacity: 0;
  transform: translateY(18px);
  filter: blur(6px);
  transition: opacity .6s ease, transform .6s ease, filter .6s ease;
  will-change: opacity, transform;
}

.reveal.is-visible{
  opacity: 1;
  transform: translateY(0);
  filter: blur(0);
}

/* =========================
   MOBILE STEP 1: Hero + Buttons
   ========================= */
@media (max-width: 600px){

  /* Hero spacing */
  .hero{
    padding: 96px 0 44px;
  }

  .hero__grid{
    gap: 18px;
  }

  .hero h1{
    font-size: 2.1rem;
    line-height: 1.08;
  }

  .hero .lead{
    font-size: 1rem;
    line-height: 1.8;
  }

  /* Buttons full width (مريح جدًا للجوال) */
  .hero__actions{
    display: grid;
    gap: 12px;
  }

  .hero__actions .btn{
    width: 100%;
    justify-content: center;
  }

  /* Hero preview card height */
  .hero__preview{
    height: 240px;
  }

  /* mini stats spacing */
  .hero__previewBottom{
    grid-template-columns: 1fr 1fr;
    gap: 10px;
  }
}


/* =========================
   MOBILE STEP 2: Nav Menu
   ========================= */
@media (max-width: 980px){

  .nav__toggle{
    width: 44px;
    height: 44px;
    display: grid;
    place-items: center;
    border-radius: 14px;
    font-size: 18px;
  }

  .nav__links{
    gap: 10px;
  }

  .nav__links a{
    padding: 12px 14px;
    border-radius: 14px;
    background: rgba(255,255,255,.75);
    border: 1px solid rgba(59,36,24,.12);
  }

  .nav__links a.active{
    background: rgba(199,155,89,.18);
  }
}

/* =========================
   MOBILE STEP 3: Pricing Cards
   ========================= */
@media (max-width: 600px){

  .pricingGrid{
    gap: 16px;
  }

  .plan{
    padding: 18px;
  }

  .plan__price{
    font-size: 2rem;
  }

  .plan__meta{
    gap: 8px;
  }

  .plan__actions{
    display: grid;
    gap: 10px;
  }

  .plan__actions .btn{
    width: 100%;
  }

  /* Most popular scaling: خففها على الجوال عشان ما تكبر زيادة */
  .plan:has(.plan__ribbon){
    transform: none;
  }
}

/* =========================
   MOBILE UI UPGRADE (Paste at end of styles.css)
   ========================= */

/* Better tap targets + prevent accidental zoom */
html { -webkit-text-size-adjust: 100%; }
body { touch-action: manipulation; }

@media (max-width: 980px){
  /* Header: stable + compact */
  .header__inner{
    padding: 10px 0;
    gap: 10px;
  }

  .logo{ gap: 10px; }
  .logo__img{
    width: 44px;
    height: 44px;
    border-radius: 14px;
    padding: 5px;
    box-shadow: 0 10px 22px rgba(0,0,0,.14);
  }
  .logo__text strong{ font-size: 1.05rem; }
  .logo__text span{ font-size: .78rem; }

  /* Nav pills better fit */
  .nav__toggle{
    padding: 10px 12px;
    border-radius: 14px;
    min-width: 44px;
    min-height: 44px;
  }

  .nav__links{
    top: 58px;
    border-radius: 18px;
  }
  .nav__links a{
    padding: 12px 12px;
    border-radius: 14px;
    font-size: 1rem;
  }

  /* Hero: less height, stronger hierarchy */
  .hero{
    padding: 66px 0 36px;
  }
  .hero__grid{ gap: 18px; }
  .hero__kicker{ font-size: .9rem; padding: 8px 12px; }
  .hero h1{ font-size: clamp(28px, 7vw, 40px); }
  .lead{ font-size: 1rem; }

  .hero__preview{ height: 220px; border-radius: 18px; }
  .hero__card{ padding: 14px; border-radius: 22px; }
  .miniStat{ border-radius: 16px; padding: 10px; }
  .miniStat__num{ font-size: 1.3rem; }

  /* Buttons: full-width on mobile for better conversion */
  .hero__actions{ gap: 10px; }
  .hero__actions .btn{
    flex: 1 1 160px;
    min-height: 48px;
  }

  /* Sections: spacing rhythm */
  .section{ padding: 54px 0; }
  .section__head h2{ font-size: 1.6rem; }

  /* PRICING: turn grid into horizontal swipe carousel */
  .pricingGrid{
    grid-template-columns: unset !important;
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: min(86vw, 360px);
    gap: 14px;
    overflow-x: auto;
    padding: 6px 2px 18px;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
  }
  .pricingGrid::-webkit-scrollbar{ height: 8px; }
  .pricingGrid::-webkit-scrollbar-thumb{
    background: rgba(59,36,24,.18);
    border-radius: 999px;
  }

  .card{
    scroll-snap-align: start;
  }

  /* Plan card internal spacing */
  .plan{ padding: 16px; }
  .plan__title{ font-size: 1.1rem; }
  .plan__price{ font-size: 1.75rem; }
  .plan__actions .btn{
    min-height: 48px;
    width: 100%;
  }
  .plan__actions{
    gap: 10px;
  }

  /* Pills tidy */
  .metaPill, .legendPill, .badge, .chip{
    font-size: .92rem;
  }

  /* Contact form: bigger inputs */
  input, textarea{
    min-height: 48px;
    font-size: 16px; /* stops iOS zoom */
  }
  textarea{ min-height: 140px; }

  /* Back to top: not too big */
  .toTop{
    width: 48px;
    height: 48px;
    border-radius: 16px;
  }
}

/* =========================
   Mobile Meals Bottom Sheet
   (only affects elements with .mealsPanel + .is-open)
   ========================= */

.mealsPanel{
  display: none;
}

/* If your JS adds .is-open, this will show */
.mealsPanel.is-open{
  display: block;
}

@media (max-width: 980px){
  /* Make meals panel behave like bottom sheet */
  .mealsPanel{
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9999;
    max-height: 72vh;
    overflow: auto;
    background: rgba(255,255,255,.96);
    border-top: 1px solid var(--border);
    border-radius: 22px 22px 0 0;
    box-shadow: 0 -18px 40px rgba(0,0,0,.18);
    padding: 14px 16px 18px;
    transform: translateY(12px);
    opacity: 0;
    transition: transform .22s ease, opacity .22s ease;
  }

  .mealsPanel.is-open{
    transform: translateY(0);
    opacity: 1;
  }

  /* Header inside panel */
  .mealsPanel__head{
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    position: sticky;
    top: 0;
    background: rgba(255,255,255,.92);
    backdrop-filter: blur(10px);
    padding: 6px 0 10px;
    border-bottom: 1px solid rgba(0,0,0,.06);
    margin-bottom: 10px;
  }

  .mealsClose{
    border: 1px solid var(--border);
    background: #fff;
    border-radius: 14px;
    padding: 10px 12px;
    min-width: 44px;
    min-height: 44px;
    cursor: pointer;
    font-weight: 900;
  }
}

/* Optional: Dim background when sheet open (JS can toggle body class) */
body.sheetOpen::before{
  content:"";
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,.28);
  z-index: 9998;
}

@media (max-width: 980px){
  .mobileCtaBar{
    position: fixed;
    left: 12px;
    right: 12px;
    bottom: 12px;
    z-index: 9997;
    background: rgba(255,255,255,.92);
    border: 1px solid var(--border);
    border-radius: 18px;
    padding: 10px;
    box-shadow: 0 18px 40px rgba(0,0,0,.16);
    backdrop-filter: blur(12px);
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: space-between;
  }

  .mobileCtaBar .btn{
    width: 100%;
    min-height: 50px;
  }

  /* avoid hiding content behind CTA */
  body{ padding-bottom: 88px; }
}

/* =========================
   Mobile Bottom CTA Bar
========================= */
.mobileCta{
  display:none;
}

@media (max-width: 980px){
  /* اترك مساحة تحت عشان الشريط ما يغطي المحتوى */
  body{
    padding-bottom: 84px;
  }

  .mobileCta{
    display:flex;
    gap:10px;
    position:fixed;
    left:12px;
    right:12px;
    bottom:12px;
    z-index:999;
    padding:12px;
    border-radius:22px;
    border:1px solid var(--border);
    background:rgba(255,255,255,.82);
    backdrop-filter: blur(14px);
    box-shadow: 0 18px 45px rgba(0,0,0,.18);
  }

  .mobileCta__btn{
    flex:1;
    display:flex;
    align-items:center;
    justify-content:center;
    gap:10px;
    padding:14px 14px;
    border-radius:16px;
    font-weight:1000;
    border:1px solid transparent;
    transition: transform .15s ease, filter .15s ease, box-shadow .15s ease;
    white-space:nowrap;
  }

  .mobileCta__btn:active{
    transform: scale(.98);
  }

  .mobileCta__btn--primary{
    background: linear-gradient(135deg, var(--brown700), var(--brown900));
    color:#fff;
    box-shadow: 0 14px 28px rgba(107,63,40,.28);
  }

  .mobileCta__btn--primary:hover{
    filter: brightness(1.03);
  }

  .mobileCta__btn--wa{
    background:#fff;
    color:var(--brown900);
    border-color: var(--border);
  }

  .mobileCta__waIcon{
    width:26px;
    height:26px;
    display:grid;
    place-items:center;
    border-radius:10px;
    background: rgba(199,155,89,.18);
    color: var(--brown900);
    font-weight:1100;
  }
}

/* =========================
   FINAL DECISION: Meals UI
   Desktop = inside card
   Mobile = bottom sheet
========================= */

/* Desktop behavior */
@media (min-width: 981px){
  .mealsPanel{
    position: absolute;
    inset-inline: 18px;
    top: 220px;
    z-index: 20;
    display: none;
    background: rgba(255,255,255,.96);
    border-radius: 18px;
    box-shadow: 0 18px 45px rgba(0,0,0,.18);
    padding: 14px;
  }

  .plan.is-meals-open .mealsPanel{
    display: block;
  }
}

/* Mobile behavior = bottom sheet ONLY */
@media (max-width: 980px){
  .mealsPanel{
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    max-height: 75vh;
    z-index: 9999;
    display: none;
    background: #fff;
    border-radius: 22px 22px 0 0;
    box-shadow: 0 -18px 45px rgba(0,0,0,.25);
    padding: 16px;
    overflow-y: auto;
  }

  .mealsPanel.is-open{
    display: block;
  }

  body.sheetOpen{
    overflow: hidden;
  }
}

/* =========================
   Mobile UI Fix Pack
   ========================= */

.list--meals{
  transition: max-height .25s ease, margin-top .25s ease;
}

/* Better tap targets + layout on mobile */
@media (max-width: 720px){
  .header__inner{ padding: 10px 0; }
  .logo__img{ width:44px; height:44px; border-radius:14px; padding:5px; }
  .logo__text span{ display:none; } /* يخلي الهيدر أنظف على الجوال */

  .hero{ padding: 62px 0 44px; }
  .hero__grid{ gap: 22px; }
  .hero__preview{ height: 240px; }

  .pricingGrid{ grid-template-columns: 1fr; gap: 14px; }
  .plan{ padding: 16px; }
  .plan__price{ font-size: 1.7rem; }

  .plan__actions{
    flex-direction: column;
    gap: 10px;
  }
  .plan__actions .btn{
    width: 100%;
    padding: 14px 16px;
  }

  .plan__list{
    padding: 0 18px;
  }

  /* يقلل الظلال الثقيلة على الجوال (شكل أنعم) */
  .card, .cardLite, details{
    box-shadow: 0 14px 26px rgba(0,0,0,.10);
  }
}
/* =========================
   Mobile Fixes (Cook4U)
   Paste at END of styles.css
========================= */

:root{
  --safe-bottom: env(safe-area-inset-bottom, 0px);
}

/* Make header behave better on mobile */
@media (max-width: 768px){

  /* Header sizing */
  .header{
    padding: 10px 0;
    backdrop-filter: blur(10px);
  }

  .header__row{
    display: grid;
    grid-template-columns: auto 1fr auto auto;
    gap: 10px;
    align-items: center;
  }

  /* Brand area (logo + text) */
  .branding{
    min-width: 0;
    gap: 10px;
  }
  .brand__text{
    display: none; /* يخفي النص الطويل بالجوال عشان ما يزحم */
  }
  .logo{
    width: 42px;
    height: 42px;
    border-radius: 14px;
  }

  /* CTA button "اشترك الآن" */
  .btn--cta{
    padding: 10px 12px;
    border-radius: 16px;
    font-size: 14px;
    white-space: nowrap;
  }

  /* Language switch */
  .lang button{
    min-width: 52px;
    height: 44px;
    border-radius: 16px;
  }

  /* Nav menu button */
  .nav__toggle{
    width: 44px;
    height: 44px;
    border-radius: 16px;
  }

  /* Dropdown mobile nav */
  .nav{ position: relative; }

  .nav__links{
    position: absolute;
    top: calc(100% + 10px);
    left: 0;
    right: 0;

    display: none;
    padding: 12px;
    border-radius: 18px;

    background: rgba(20, 14, 10, 0.92);
    border: 1px solid rgba(255,255,255,.08);
    box-shadow: 0 18px 40px rgba(0,0,0,.35);

    gap: 10px;
    justify-content: center;
    flex-wrap: wrap;

    max-height: 70vh;
    overflow: auto;
    z-index: 9999;
  }

  .nav__links.is-open{
    display: flex;
  }

  .nav__links a{
    padding: 10px 14px;
    border-radius: 999px;
    white-space: nowrap;
  }

  /* Pricing grid -> 1 column on mobile (يحّل مشكلة عمودين في الآيفون) */
  .pricing{
    grid-template-columns: 1fr !important;
    gap: 14px;
  }

  .card{
    padding: 16px;
    border-radius: 22px;
  }

  .card__title{
    font-size: 18px;
  }

  .card__price{
    font-size: 36px;
    letter-spacing: 0;
  }

  .card__actions{
    flex-direction: column;
    align-items: stretch;
  }

  .card__actions .btn{
    width: 100%;
    justify-content: center;
    white-space: nowrap;
  }
}

/* Even smaller phones */
@media (max-width: 420px){
  .btn--cta{ font-size: 13px; }
  .logo{ width: 40px; height: 40px; }
}

/* Floating buttons (WhatsApp + toTop) */
.wa-float, .toTop{
  position: fixed;
  z-index: 9999;
  width: 54px;
  height: 54px;
  border-radius: 18px;
  display: grid;
  place-items: center;
  text-decoration: none;
  border: 1px solid rgba(0,0,0,.08);
  box-shadow: 0 18px 35px rgba(0,0,0,.18);
  background: rgba(255,255,255,.9);
  backdrop-filter: blur(10px);
}

/* WhatsApp bottom-left */
.wa-float{
  left: 16px;
  bottom: calc(16px + var(--safe-bottom));
}

/* Back-to-top bottom-right (ارفعه شوي عشان ما يغطي المحتوى/شريط السفاري) */
.toTop{
  right: 16px;
  bottom: calc(86px + var(--safe-bottom));
}

/* =========================================
   STEP 1 — Premium Header (Desktop + Mobile)
   Safe overrides (paste at END)
========================================= */

.header{
  transition: padding .22s var(--ease), background .22s var(--ease), box-shadow .22s var(--ease);
}

.header__inner{
  transition: padding .22s var(--ease);
}

/* حالة التصغير أثناء السكروول */
.header.header--compact{
  box-shadow: 0 10px 30px rgba(0,0,0,.08);
}

/* صغّر مساحة الهيدر */
.header.header--compact .header__inner{
  padding: 10px 0;
}

/* صغّر اللوقو */
.header.header--compact .logo img{
  transform: translateY(-1px);
  width: 52px;
  height: 52px;
}

/* لو عندك نص اللوقو */
.logo__name{
  font-weight: 900;
  letter-spacing: .2px;
}
.logo__sub{
  opacity: .82;
}

/* =========================
   Mobile menu smoother
========================= */
@media (max-width: 980px){
  .nav__links{
    transform-origin: top center;
  }
  .nav__links.show{
    animation: menuIn .18s var(--ease) both;
  }
  @keyframes menuIn{
    from{ opacity: 0; transform: translateY(-6px) scale(.98); }
    to{ opacity: 1; transform: translateY(0) scale(1); }
  }
}





/* ------------ تعديلات الجوال 2 ------------

/* =========================================
   STEP 2 — Cards Premium Polish
   Safe overrides (paste at END)
========================================= */

/* تحسين عام لكل الكروت */
.card,
.plan,
.cardLite,
details{
  transition:
    transform .25s var(--ease),
    box-shadow .25s var(--ease),
    border-color .25s var(--ease);
}

/* Hover أنيق (لابتوب فقط) */
@media (hover: hover){
  .card:hover,
  .plan:hover{
    transform: translateY(-6px);
    box-shadow: 0 22px 50px rgba(0,0,0,.14);
    border-color: rgba(199,155,89,.45);
  }
}

/* توازن داخلي للكرت */
.plan{
  display: flex;
  flex-direction: column;
  gap: 14px;
}

/* الأزرار دائمًا بأسفل الكرت */
.plan__actions{
  margin-top: auto;
}


/* =========================================
   Icons Unification (Clean & Modern)
========================================= */

.icon,
.featureCard__icon,
.metaPill svg,
.metaPill i{
  width: 18px;
  height: 18px;
  flex-shrink: 0;
}

/* خلفية ناعمة للأيقونات */
.featureCard__icon,
.metaPill{
  background: rgba(199,155,89,.16);
  border: 1px solid rgba(199,155,89,.35);
  border-radius: 999px;
}

/* الأيقونات الثانوية */
.metaPill{
  color: var(--brown900);
  font-weight: 900;
}

/* أيقونات CTA تبقى Accent */
.plan__actions .btn--primary .icon{
  filter: brightness(1.1);
}


/* =========================================
   Most Popular — Premium Badge
========================================= */

.plan__ribbon{
  box-shadow: 0 10px 24px rgba(199,155,89,.35);
  letter-spacing: .3px;
}

.plan:has(.plan__ribbon){
  border-color: rgba(199,155,89,.55);
  box-shadow: 0 18px 44px rgba(199,155,89,.22);
}

/* Mobile refinement for cards */
@media (max-width: 600px){
  .plan{
    border-radius: 26px;
  }

  .plan__price{
    font-size: 1.7rem;
  }

  .metaPill{
    font-size: 13px;
    padding: 8px 12px;
  }
}


/*--------- تعديلات الجوال 3 ---------*/

/* =========================================
   STEP 3 — Button Hierarchy (Premium UX)
========================================= */

/* Primary button = قائد */
.btn--primary{
  background: linear-gradient(135deg, var(--brown700), var(--brown900));
  color: #fff;
  box-shadow: 0 18px 36px rgba(107,63,40,.28);
}

.btn--primary:hover{
  transform: translateY(-2px);
  filter: brightness(1.05);
}

/* Secondary buttons */
.btn--soft,
.btn--ghost{
  background: #fff;
  color: var(--brown900);
  border: 1px solid var(--border);
  box-shadow: none;
}

/* لا تنافس مع الزر الأساسي */
.btn--soft:hover,
.btn--ghost:hover{
  background: rgba(227,210,188,.45);
  transform: translateY(-1px);
}


/* App-like tap feedback */
button,
a.btn{
  -webkit-tap-highlight-color: transparent;
}

button:active,
a.btn:active{
  transform: scale(.97);
}

/* WhatsApp CTA refinement */
.floatWA{
  transition: transform .25s var(--ease), box-shadow .25s var(--ease);
}

.floatWA:hover{
  transform: translateY(-3px) scale(1.03);
  box-shadow: 0 20px 40px rgba(0,0,0,.22);
}


/* Mobile CTA clarity */
@media (max-width: 600px){
  .mobileCta_btn{
    border-radius: 18px;
    font-size: 16px;
    font-weight: 900;
  }

  /* الزر الثانوي أخف */
  .mobileCta_btn--secondary{
    opacity: .85;
  }
}


/*--------- تعديلات الجوال 4 ---------*/


/* =========================================
   STEP 4 — Spacing & Calm UI
========================================= */

/* مسافات أنعم بين الأقسام */
.section{
  padding: 88px 0;
}

@media (max-width: 600px){
  .section{
    padding: 64px 0;
  }
}

/* عناوين أوضح بدون ضغط */
.section__head{
  margin-bottom: 28px;
}

.section__head h2{
  margin-bottom: 8px;
}


/* تهدئة الخلفيات */
.section--alt{
  background: linear-gradient(
    180deg,
    rgba(246,235,221,.85),
    rgba(246,235,221,.6)
  );
}

/* ظل أنعم للكروت */
.card,
.plan,
.cardLite,
details{
  box-shadow: 0 14px 32px rgba(0,0,0,.09);
}


/* تحسين القراءة */
p{
  max-width: 68ch;
}

.lead{
  max-width: 56ch;
}

/* Mobile calm finish */
@media (max-width: 600px){
  .card,
  .plan{
    margin-bottom: 6px;
  }

  .hero{
    padding-bottom: 48px;
  }
}
/*-------- تعديلات الجوال 5 --------*/

/* ================================
   Section separators polish (FIX)
   Paste at END of styles.css
================================ */

/* 1) خلّ padding الأقسام أنعم ومتناسق */
.section{
  padding: clamp(56px, 7vw, 96px) 0;
  position: relative;
}

/* 2) إلغاء الخط اللي يطلع فوق القسم (اللي معمول بـ ::before) */
.section::before{
  display: none !important;
}

/* 3) إلغاء حدود section--alt اللي تسوي فواصل واضحة */
.section--alt{
  border-top: 0 !important;
  border-bottom: 0 !important;
  background: var(--bg2); 
}

/* 4) (اختياري) فاصل أنعم جدًا بدل الخط القاسي */
.section + .section{
  box-shadow: 0 -1px 0 rgba(58,35,23,.06);
}

/* 5) عشان لما تضغط من القائمة يوقف عند المكان الصح تحت الهيدر */
#home, #about, #plans, #faq, #contact{
  scroll-margin-top: 110px;
}


.plan__list[data-meals]{
  overflow: hidden;
  transition: max-height .28s var(--ease);
  will-change: max-height;
}
/* =========================
   Meals list readability (Mobile & Desktop)
   ========================= */

.plan__list[data-meals]{
  /* already: overflow/transition from previous step */
  background: rgba(255,255,255,.92);
  border: 1px solid rgba(58,35,23,.18);
  box-shadow: 0 14px 35px rgba(0,0,0,.14);
  border-radius: 18px;

  padding: 14px 14px;
  margin-top: 12px;

  color: #2A1A12;          /* readable dark */
  line-height: 1.85;
  font-size: 15px;

  list-style: none;         /* we will draw bullets ourselves */
}

/* Each meal row */
.plan__list[data-meals] li{
  position: relative;
  padding: 10px 10px 10px 26px;
  border-bottom: 1px dashed rgba(58,35,23,.16);
  opacity: 1;
}

/* Last row no divider */
.plan__list[data-meals] li:last-child{
  border-bottom: 0;
}

/* Custom bullet */
.plan__list[data-meals] li::before{
  content: "•";
  position: absolute;
  left: 12px;
  top: 8px;
  font-size: 20px;
  opacity: .7;
}

/* Better wrapping for long Arabic text */
.plan__list[data-meals] li{
  white-space: normal;
  word-break: break-word;
}

/* Mobile: keep it neat, scroll if long */
@media (max-width: 640px){
  .plan__list[data-meals]{
    max-height: 240px;      /* change if you want taller */
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  /* smoother scrollbar on iOS (optional) */
  .plan__list[data-meals]::-webkit-scrollbar{
    width: 8px;
  }
  .plan__list[data-meals]::-webkit-scrollbar-thumb{
    background: rgba(58,35,23,.22);
    border-radius: 999px;
  }
}


/* =========================
   Fix: Subscribe button overlaying meals list
   ========================= */

/* make sure the plan card doesn't clip / overlap */
.plan{
  position: relative;
  overflow: visible;
}

/* force meals list to be in normal flow (not absolute) */
.plan__list[data-meals]{
  position: relative !important;
  inset: auto !important;     /* cancels top/left/right/bottom if set */
  z-index: 1;
  margin-bottom: 12px;        /* space before buttons */
}

/* keep action buttons below everything */
.plan__actions{
  position: relative !important;
  z-index: 2;
  margin-top: 10px;
}

.plan__list[data-meals]{
  overflow: hidden;
  transition: max-height .25s ease;
}


/* =========================
   FIX: Buttons contrast
========================= */

.btn--primary {
  background: linear-gradient(135deg, #7a3516, #a34c24);
  color: #fff;
  box-shadow: 0 10px 25px rgba(0,0,0,.25);
}

.btn--primary:hover {
  filter: brightness(1.05);
}

.btn--soft {
  background: rgba(255,255,255,0.08);
  color: #fff;
  border: 1px solid rgba(255,255,255,0.18);
}

.btn--soft:hover {
  background: rgba(255,255,255,0.15);
}


@media (max-width: 768px) {
  .plan__list {
    font-size: 15px;
  }

  .plan__actions {
    flex-direction: column;
  }
}

.plan__actions button[data-action="toggleMeals"][disabled] {
  opacity: 1 !important;
}


/* FIX FINAL: Show meals button visibility */
.plan__actions button[data-action="toggleMeals"] {
  background: linear-gradient(
    180deg,
    rgba(255,255,255,0.95),
    rgba(245,235,220,0.95)
  ) !important;

  color: #2A1A12 !important;
  border: 1.5px solid rgba(180,140,90,.45) !important;

  opacity: 1 !important;
  filter: none !important;

  box-shadow:
    0 8px 20px rgba(0,0,0,.12),
    inset 0 0 0 1px rgba(255,255,255,.6);

  font-weight: 600;
}

/* Hover / Active */
.plan__actions button[data-action="toggleMeals"]:hover {
  background: linear-gradient(
    180deg,
    #ffffff,
    #f1e4cf
  ) !important;

  box-shadow:
    0 12px 28px rgba(0,0,0,.18);
}

/* When meals are open */
.plan__actions button[data-action="toggleMeals"][aria-expanded="true"] {
  background: linear-gradient(
    180deg,
    #2A1A12,
    #3a2317
  ) !important;

  color: #ffffff !important;
  border-color: transparent !important;
}
/* FINAL OVERRIDE — خلي زر "عرض الوجبات" واضح وممتاز */
#plansGrid button[data-action="toggleMeals"]{
  opacity: 1 !important;
  background: linear-gradient(180deg, rgba(255,255,255,.98), rgba(248,238,225,.96)) !important;
  color: var(--ink) !important;
  border: 1.5px solid rgba(120, 80, 40, .25) !important;
  box-shadow: 0 10px 24px rgba(0,0,0,.08) !important;
}

#plansGrid button[data-action="toggleMeals"]:hover{
  transform: translateY(-1px);
}

#plansGrid button[data-action="toggleMeals"] .icon{
  opacity: .9;
}


/* =========================
   NEW: MENU + HOW (style like “second design”)
   (isolated classes — no conflicts)
========================= */

.menuRow{
  margin-top: 18px;
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: minmax(240px, 280px);
  gap: 18px;
  overflow-x: auto;
  padding: 6px 4px 14px;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
}

.menuRow::-webkit-scrollbar{ height: 10px; }
.menuRow::-webkit-scrollbar-thumb{
  background: rgba(106,63,43,0.18);
  border-radius: 999px;
}
.menuRow::-webkit-scrollbar-track{ background: transparent; }

.mealCard{
  scroll-snap-align: start;
  background: var(--card);
  border: 1px solid rgba(106,63,43,0.14);
  border-radius: 22px;
  overflow: hidden;
  box-shadow: 0 18px 45px rgba(0,0,0,0.06);
  display: flex;
  flex-direction: column;
  min-height: 320px;
}

.mealMedia{
  position: relative;
  width: 100%;
  aspect-ratio: 4 / 3;
  background: radial-gradient(circle at 30% 30%, rgba(199,155,89,0.22), transparent 55%),
              linear-gradient(180deg, rgba(106,63,43,0.10), rgba(0,0,0,0.00));
}

.mealMedia img{
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.mealKcal{
  position: absolute;
  top: 12px;
  inset-inline-end: 12px;
  font-size: 12px;
  color: var(--text);
  background: rgba(255,255,255,0.88);
  border: 1px solid rgba(106,63,43,0.14);
  padding: 6px 10px;
  border-radius: 999px;
  backdrop-filter: blur(10px);
}

.mealBody{
  padding: 14px 14px 16px;
  display: grid;
  gap: 8px;
}

.mealTitle{
  font-size: 16px;
  font-weight: 800;
  margin: 0;
  color: var(--text);
}

.mealDesc{
  margin: 0;
  color: var(--muted);
  font-size: 13px;
  line-height: 1.5;
}

.mealMetaRow{
  margin-top: 4px;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.mealDot{
  font-size: 12px;
  color: var(--muted);
  background: rgba(199,155,89,0.16);
  border: 1px solid rgba(106,63,43,0.12);
  padding: 6px 10px;
  border-radius: 999px;
}

/* HOW it works */
.howGrid{
  margin-top: 18px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
}

.howCard{
  position: relative;
  background: var(--card);
  border: 1px solid rgba(106,63,43,0.14);
  border-radius: 24px;
  padding: 14px;
  box-shadow: 0 18px 45px rgba(0,0,0,0.06);
}

.howNum{
  position: absolute;
  top: 12px;
  inset-inline-end: 12px;
  width: 44px;
  height: 44px;
  border-radius: 999px;
  display: grid;
  place-items: center;
  background: #164B2D;
  color: #fff;
  font-weight: 900;
  box-shadow: 0 14px 30px rgba(0,0,0,0.14);
}

.howMedia{
  border-radius: 20px;
  overflow: hidden;
  aspect-ratio: 4 / 3;
  background: radial-gradient(circle at 30% 30%, rgba(199,155,89,0.22), transparent 55%),
              linear-gradient(180deg, rgba(106,63,43,0.10), rgba(0,0,0,0.00));
}

.howMedia img{
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.howTitle{
  margin: 12px 0 6px;
  font-size: 18px;
  font-weight: 900;
  color: var(--text);
}

/* Responsive */
@media (max-width: 980px){
  .howGrid{ grid-template-columns: 1fr; }
  .menuRow{ grid-auto-columns: minmax(78vw, 420px); }
}

.menuRow{
  scroll-padding: 12px;
  padding-inline: 12px;
}
.mealCard{
  scroll-snap-stop: always;
}

.mealTitle{
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.mealDesc{
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* =========================
   UI/UX ENHANCEMENTS - Feb 2026
   Premium upgrades while maintaining functionality
========================= */

/* Better line height for readability */
body{
  line-height: 1.7;
}

/* Improved input and textarea styling */
.input{
  line-height: 1.6;
  padding: 14px 16px;
  transition: border-color .2s ease, box-shadow .2s ease;
}
.input:focus{
  border-color: rgba(199,155,89,.5);
  box-shadow: 0 0 0 3px rgba(199,155,89,.15);
}

/* Better details/summary hover states */
details summary{
  transition: background .2s ease, color .2s ease;
}
details summary:hover{
  background: rgba(199,155,89,.08);
}

/* Enhance plan card meals list readability */
.plan__list[data-meals] li{
  padding: 12px 12px 12px 30px;
  line-height: 1.7;
  transition: background .2s ease;
}
.plan__list[data-meals] li:hover{
  background: rgba(199,155,89,.04);
}

/* Clean up "Show meals" button - consolidate all styles */
.plan__actions button[data-action="toggleMeals"],
#plansGrid button[data-action="toggleMeals"]{
  background: linear-gradient(180deg, rgba(255,255,255,.98), rgba(250,242,232,.96)) !important;
  color: var(--brown2) !important;
  border: 1.5px solid rgba(106,63,43,.25) !important;
  box-shadow: 0 8px 18px rgba(0,0,0,.08) !important;
  opacity: 1 !important;
  font-weight: 600 !important;
  transition: all .2s ease !important;
}

.plan__actions button[data-action="toggleMeals"]:hover,
#plansGrid button[data-action="toggleMeals"]:hover{
  background: linear-gradient(180deg, #ffffff, #f5ead4) !important;
  box-shadow: 0 10px 24px rgba(0,0,0,.12) !important;
  transform: translateY(-1px);
  border-color: rgba(106,63,43,.35) !important;
}

.plan__actions button[data-action="toggleMeals"][aria-expanded="true"]{
  background: linear-gradient(180deg, var(--brown2), var(--brown)) !important;
  color: #ffffff !important;
  border-color: transparent !important;
  box-shadow: 0 10px 24px rgba(59,36,24,.25) !important;
}

/* Better trust items */
.trustItem{
  transition: transform .2s ease, box-shadow .2s ease;
}
.trustItem:hover{
  transform: translateY(-2px);
  box-shadow: 0 12px 28px rgba(0,0,0,.08);
}

/* Enhance feature cards */
.feature{
  transition: transform .2s ease;
}
.feature:hover{
  transform: translateY(-2px);
}

/* Menu scroll hint - subtle fade on edges */
.menuRow{
  position: relative;
}
.menuRow::after{
  content: '';
  position: absolute;
  top: 0;
  inset-inline-end: 0;
  width: 60px;
  height: 100%;
  background: linear-gradient(to left, var(--bg), transparent);
  pointer-events: none;
  opacity: .7;
}

/* Better meal card hover */
.mealCard{
  transition: transform .3s ease, box-shadow .3s ease;
}
.mealCard:hover{
  transform: translateY(-4px);
  box-shadow: 0 20px 50px rgba(0,0,0,.10);
}

/* How it works cards enhancement */
.howCard{
  transition: transform .3s ease, box-shadow .3s ease;
}
.howCard:hover{
  transform: translateY(-3px);
  box-shadow: 0 20px 48px rgba(0,0,0,.09);
}

/* Better FAQ spacing */
.faq details{
  margin-bottom: 14px;
}
.faq details p{
  line-height: 1.75;
  padding-top: 8px;
}

/* Contact items hover */
.contactItem{
  transition: transform .2s ease;
}
.contactItem:hover{
  transform: translateX(-3px);
}
[dir="ltr"] .contactItem:hover{
  transform: translateX(3px);
}

/* Floating WhatsApp enhancement */
.floatWA{
  transition: transform .2s ease, box-shadow .2s ease;
}
.floatWA:hover{
  transform: translateY(-3px);
  box-shadow: 0 16px 40px rgba(37, 211, 102, .35);
}

/* Mobile CTA enhancement */
.mobileCta__btn{
  transition: transform .2s ease, box-shadow .2s ease;
}
.mobileCta__btn:active{
  transform: scale(.97);
}

/* Back to top button enhancement */
.toTop{
  transition: transform .2s ease, opacity .2s ease, background .2s ease;
}
.toTop:hover{
  transform: translateY(-2px);
  background: var(--brown2);
}

/* Improve section reveal animation */
.reveal{
  opacity: 0;
  transform: translateY(20px);
  transition: opacity .5s ease, transform .5s ease;
}
.reveal.is-visible{
  opacity: 1;
  transform: translateY(0);
}

/* Better nav indicator positioning */
.navIndicator{
  transition: transform .3s cubic-bezier(.4,0,.2,1), width .3s ease, opacity .3s ease;
}

/* Enhanced responsive mobile menu */
@media (max-width: 850px){
  .nav__toggle{
    display:grid;
    place-items:center;
  }
  
  .nav__links{
    position:fixed;
    top:0;
    inset-inline-end:-100%;
    width:min(320px, 85vw);
    height:100vh;
    background: rgba(255,255,255,.98);
    backdrop-filter: blur(20px);
    flex-direction:column;
    align-items:flex-start;
    gap:8px;
    padding:90px 24px 24px;
    box-shadow: -8px 0 24px rgba(0,0,0,.10);
    transition: inset-inline-end .3s cubic-bezier(.4,0,.2,1);
    z-index:999;
  }
  
  .nav__links.active{
    inset-inline-end:0;
  }
  
  .nav__links a{
    width: 100%;
    padding: 14px 16px;
    border-radius: 12px;
    font-size: 1.05rem;
  }
  
  .navIndicator{
    display: none;
  }
}

/* Better hero responsive */
@media (max-width: 980px){
  .hero__grid{
    grid-template-columns: 1fr;
    gap: 28px;
  }
  
  .hero__title{
    font-size: clamp(28px, 7vw, 42px);
  }
  
  .hero__card{
    max-width: 520px;
    margin: 0 auto;
  }
}

/* Improved mobile spacing */
@media (max-width: 640px){
  .hero{
    padding: 50px 0 30px;
  }
  
  .section{
    padding: 50px 0;
  }
  
  .hero__actions{
    flex-direction: column;
    width: 100%;
  }
  
  .hero__actions .btn{
    width: 100%;
    justify-content: center;
  }
  
  .hero__trust{
    grid-template-columns: 1fr;
    gap: 10px;
  }
  
  .plan__actions{
    flex-direction: column;
    gap: 10px;
  }
  
  .plan__actions .btn{
    width: 100%;
  }
}

/* Touch device improvements */
@media (hover: none) and (pointer: coarse){
  .btn:hover{
    transform: none;
  }
  
  .btn:active{
    transform: scale(.97);
  }
  
  .nav__links a:hover{
    background: rgba(199,155,89,.18);
    transform: none;
  }
  
  .trustItem:hover,
  .feature:hover,
  .mealCard:hover,
  .howCard:hover{
    transform: none;
  }
}

/* Accessibility: Reduce motion for users who prefer it */
@media (prefers-reduced-motion: reduce){
  *,
  *::before,
  *::after{
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
  
  .reveal{
    opacity: 1;
    transform: none;
  }
}

/* Print styles */
@media print{
  .header,
  .floatWA,
  .toTop,
  .mobileCta,
  .nav__toggle,
  .bg{
    display: none !important;
  }
  
  body{
    background: white;
    color: black;
  }
}
