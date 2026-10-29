
// // border inhnce 

// // src/components/Hero.jsx
// import { useEffect, useState } from "react";
// import {
//   motion,
//   useReducedMotion,
//   useScroll,
//   useTransform,
// } from "framer-motion";
// import { ArrowRight, ShieldCheck, Users, TrendingUp } from "lucide-react";

// // ⚠️ Update this path to your actual background image asset.
// import heroImage from "../assets/images/hero-bg.png";

// // ⚠️ Attach these IDs to your existing sections (or change them here).
// const SERVICES_ID = "services";
// const CONTACT_ID = "contact";
// const NAVBAR_OFFSET = 80; // approx. navbar height in px; adjust if needed

// const trustItems = [
//   { icon: ShieldCheck, label: "Trusted Co-operative Society", tone: "red" },
//   { icon: Users, label: "Member-Focused Approach", tone: "navy" },
//   { icon: TrendingUp, label: "Savings-Oriented Solutions", tone: "red" },
// ];

// const container = {
//   hidden: {},
//   show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
// };

// const fadeUp = {
//   hidden: { opacity: 0, y: 16 },
//   show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
// };

// const fadeIn = {
//   hidden: { opacity: 0 },
//   show: { opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
// };

// function scrollToSection(e, id) {
//   const el = document.getElementById(id);
//   if (!el) return; // let the browser handle the hash if the section isn't present yet
//   e.preventDefault();

//   // Reuse the existing Lenis instance if it is exposed globally; otherwise native smooth scroll.
//   if (window.lenis?.scrollTo) {
//     window.lenis.scrollTo(el, { offset: -NAVBAR_OFFSET });
//   } else {
//     const top = el.getBoundingClientRect().top + window.scrollY - NAVBAR_OFFSET;
//     window.scrollTo({ top, behavior: "smooth" });
//   }
//   history.replaceState(null, "", `#${id}`);
// }

// export default function Hero() {
//   const reduceMotion = useReducedMotion();
//   const [allowParallax, setAllowParallax] = useState(false);

//   // Parallax: desktop with a fine pointer only
//   useEffect(() => {
//     const mq = window.matchMedia("(min-width: 1024px) and (pointer: fine)");
//     const update = () => setAllowParallax(mq.matches);
//     update();
//     mq.addEventListener("change", update);
//     return () => mq.removeEventListener("change", update);
//   }, []);

//   const { scrollY } = useScroll();
//   const parallaxY = useTransform(scrollY, [0, 600], [0, 40]);
//   const imageStyle =
//     allowParallax && !reduceMotion ? { y: parallaxY, scale: 1.04 } : undefined;

//   const initial = reduceMotion ? false : "hidden";

//   return (
//     <section
//       id="home"
//       aria-labelledby="hero-heading"
//       className="relative isolate overflow-hidden bg-[#F5F7FB]"
//     >
//       {/* Soft background glow */}
//       {/* <div
//         aria-hidden="true"
//         className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,#ffffff_0%,#F5F7FB_55%,#e6eef9_100%)]"
//       /> */}

//       <div className="mx-auto flex w-full max-w-[1600px] flex-col">
//         {/* Content */}
//         <motion.div
//           variants={container}
//           initial={initial}
//           animate="show"
//           className="relative z-10 flex flex-col justify-center px-5 pb-6 pt-10 sm:px-8 md:px-12 md:pt-14 lg:w-[56%] lg:py-16 xl:w-[52%] xl:px-16 2xl:px-20"
//         >
//           {/* Eyebrow */}
//           <motion.div variants={fadeIn} className="flex items-center gap-3">
//             <span aria-hidden="true" className="h-[2px] w-8 shrink-0 bg-[#EF303B] sm:w-12" />
//             <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#214779] sm:text-xs md:text-sm">
//               Your Financial Goals. Our Commitment.
//             </p>
//           </motion.div>

//           {/* Heading */}
//           <h1
//             id="hero-heading"
//             className="mt-5 text-[2.1rem] font-extrabold leading-[1.08] tracking-tight min-[375px]:text-[2.4rem] sm:text-5xl md:text-6xl lg:text-[3.25rem] xl:text-6xl 2xl:text-[4.25rem]"
//           >
//             <motion.span variants={fadeUp} className="block text-[#214779]">
//               Build Your Savings.
//             </motion.span>
//             <motion.span variants={fadeUp} className="block text-[#EF303B]">
//               Plan Your Future.
//             </motion.span>
//           </h1>

//           {/* Description */}
//           <motion.p
//             variants={fadeUp}
//             className="mt-5 max-w-xl text-[15px] leading-relaxed text-[#334155] sm:text-base md:text-lg lg:max-w-lg xl:max-w-xl"
//           >
//             Discover savings opportunities and financial solutions designed around your needs.
//             Kalyan Urban Co-operative Credit Society Limited aims to support its members through
//             accessible deposit schemes, loan facilities, and responsible financial services.
//           </motion.p>

//           {/* CTAs */}
//           <motion.div
//             variants={container}
//             className="mt-7 flex flex-col gap-3 min-[420px]:flex-row min-[420px]:flex-wrap"
//           >
//             <motion.a
//               variants={fadeUp}
//               href={`#${SERVICES_ID}`}
//               onClick={(e) => scrollToSection(e, SERVICES_ID)}
//               whileHover={reduceMotion ? undefined : { y: -3 }}
//               whileTap={reduceMotion ? undefined : { scale: 0.98 }}
//               className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-lg bg-[#EF303B] px-6 py-3 text-base font-semibold text-white shadow-[0_10px_24px_-8px_rgba(239,48,59,0.6)] transition-colors hover:bg-[#d92730] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#EF303B]/40"
//             >
//               Explore Our Services
//               <ArrowRight
//                 aria-hidden="true"
//                 className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
//               />
//             </motion.a>

//             <motion.a
//               variants={fadeUp}
//               href={`#${CONTACT_ID}`}
//               onClick={(e) => scrollToSection(e, CONTACT_ID)}
//               whileHover={reduceMotion ? undefined : { y: -3 }}
//               whileTap={reduceMotion ? undefined : { scale: 0.98 }}
//               className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-lg border border-[#214779]/65 bg-white/99 px-6 py-3 text-base font-semibold text-[#214779] shadow-[0_8px_20px_-10px_rgba(16,44,77,0.70)] backdrop-blur transition-colors hover:border-[#214779] hover:bg-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#214779]/80"
//             >
//               Contact Us
//               <ArrowRight
//                 aria-hidden="true"
//                 className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
//               />
//             </motion.a>
//           </motion.div>

//           {/* Trust indicators */}
//           <motion.ul
//             variants={container}
//             className="mt-9 grid grid-cols-1 gap-4 min-[480px]:grid-cols-3 min-[480px]:gap-3 lg:gap-4"
//           >
//             {trustItems.map(({ icon: Icon, label, tone }) => (
//               <motion.li
//                 key={label}
//                 variants={fadeUp}
//                 className="flex items-center gap-3 min-[480px]:items-start"
//               >
//                 <span
//                   className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${
//                     tone === "red"
//                       ? "bg-[#EF303B]/30 text-[#EF303B] ring-1 ring-[#EF303B]/60"
//                       : "bg-[#214779]/30 text-[#214779] ring-1 ring-[#214779]/60"
//                   }`}
//                 >
//                   <Icon aria-hidden="true" className="h-5 w-5" />
//                 </span>
//                 <span className="text-sm font-medium leading-snug text-[#102C4D]">
//                   {label}
//                 </span>
//               </motion.li>
//             ))}
//           </motion.ul>

//           {/* Divider + supporting line */}
//           <motion.div variants={fadeIn} className="mt-8">
//             <hr className="border-0 border-t border-[#214779]/70" />
//             <p className="mt-4 text-[10px] font-medium uppercase leading-relaxed tracking-[0.14em] text-[#334155] sm:text-xs">
//               Accessible Deposits
//               <span aria-hidden="true" className="mx-2 text-[#214779]/90">|</span>
//               Loan Facilities
//               <span aria-hidden="true" className="mx-2 text-[#214779]/90">|</span>
//               Responsible Financial Services
//             </p>
//           </motion.div>
//         </motion.div>

//         {/* Visual: below text on mobile/tablet, background on lg+ */}
//         <motion.div
//           initial={reduceMotion ? false : { opacity: 0, scale: 0.985 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
//           className="relative z-0 aspect-[4/3] w-full overflow-hidden sm:aspect-[16/10] lg:absolute lg:inset-y-0 lg:right-0 lg:aspect-auto lg:w-[72%]"
//         >
//           <motion.img
//             src={heroImage}
//             alt="A smiling family saving coins in a jar in front of a modern home, with a growth arrow rising behind them"
//             width={1672}
//             height={941}
//             loading="eager"
//             decoding="async"
//             fetchPriority="high"
//             style={imageStyle}
//             className="h-full w-full object-cover object-[78%_center] lg:object-[85%_center]"
//           />

//           {/* Fade into the content on mobile (top edge) */}
//           <div
//             aria-hidden="true"
//             className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-[#F5F7FB] to-transparent lg:hidden"
//           />
//           {/* Fade into the text on desktop (left edge) */}
//           <div
//             aria-hidden="true"
//             className="pointer-events-none absolute inset-y-0 left-0 hidden w-2/5 bg-gradient-to-r from-[#F5F7FB] via-[#F5F7FB]/60 to-transparent lg:block"
//           />
//         </motion.div>
//       </div>
//     </section>
//   );
// }



//english hindi swicher 

// src/components/Hero.jsx
import { useEffect, useState } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { ArrowRight, ShieldCheck, Users, TrendingUp } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

// ⚠️ Update this path to your actual background image asset.
import heroImage from "../assets/images/hero-bg.png";

// ⚠️ Attach these IDs to your existing sections (or change them here).
const SERVICES_ID = "services";
const CONTACT_ID = "contact";
const NAVBAR_OFFSET = 80; // approx. navbar height in px; adjust if needed

const trustItems = [
  { icon: ShieldCheck, label: "Trusted Co-operative Society", tone: "red" },
  { icon: Users, label: "Member-Focused Approach", tone: "navy" },
  { icon: TrendingUp, label: "Savings-Oriented Solutions", tone: "red" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

function scrollToSection(e, id) {
  const el = document.getElementById(id);
  if (!el) return; // let the browser handle the hash if the section isn't present yet
  e.preventDefault();

  // Reuse the existing Lenis instance if it is exposed globally; otherwise native smooth scroll.
  if (window.lenis?.scrollTo) {
    window.lenis.scrollTo(el, { offset: -NAVBAR_OFFSET });
  } else {
    const top = el.getBoundingClientRect().top + window.scrollY - NAVBAR_OFFSET;
    window.scrollTo({ top, behavior: "smooth" });
  }
  history.replaceState(null, "", `#${id}`);
}

export default function Hero() {
  const { t } = useLanguage();
  const reduceMotion = useReducedMotion();
  const [allowParallax, setAllowParallax] = useState(false);

  // Parallax: desktop with a fine pointer only
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px) and (pointer: fine)");
    const update = () => setAllowParallax(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const { scrollY } = useScroll();
  const parallaxY = useTransform(scrollY, [0, 600], [0, 40]);
  const imageStyle =
    allowParallax && !reduceMotion ? { y: parallaxY, scale: 1.04 } : undefined;

  const initial = reduceMotion ? false : "hidden";

  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative isolate overflow-hidden bg-[#F5F7FB]"
    >
      {/* Soft background glow */}
      {/* <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,#ffffff_0%,#F5F7FB_55%,#e6eef9_100%)]"
      /> */}

      <div className="mx-auto flex w-full max-w-[1600px] flex-col">
        {/* Content */}
        <motion.div
          variants={container}
          initial={initial}
          animate="show"
          className="relative z-10 flex flex-col justify-center px-5 pb-6 pt-10 sm:px-8 md:px-12 md:pt-14 lg:w-[56%] lg:py-16 xl:w-[52%] xl:px-16 2xl:px-20"
        >
          {/* Eyebrow */}
          <motion.div variants={fadeIn} className="flex items-center gap-3">
            <span aria-hidden="true" className="h-[2px] w-8 shrink-0 bg-[#EF303B] sm:w-12" />
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#214779] sm:text-xs md:text-sm">
              {t.hero.eyebrow}
            </p>
          </motion.div>

          {/* Heading */}
          <h1
            id="hero-heading"
            className="mt-5 text-[2.1rem] font-extrabold leading-[1.08] tracking-tight min-[375px]:text-[2.4rem] sm:text-5xl md:text-6xl lg:text-[3.25rem] xl:text-6xl 2xl:text-[4.25rem]"
          >
            <motion.span variants={fadeUp} className="block text-[#214779]">
              {t.hero.headingLine1}
            </motion.span>
            <motion.span variants={fadeUp} className="block text-[#EF303B]">
              {t.hero.headingLine2}
            </motion.span>
          </h1>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            className="mt-5 max-w-xl text-[15px] leading-relaxed text-[#334155] sm:text-base md:text-lg lg:max-w-lg xl:max-w-xl"
          >
            {t.hero.description}
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={container}
            className="mt-7 flex flex-col gap-3 min-[420px]:flex-row min-[420px]:flex-wrap"
          >
            <motion.a
              variants={fadeUp}
              href={`#${SERVICES_ID}`}
              onClick={(e) => scrollToSection(e, SERVICES_ID)}
              whileHover={reduceMotion ? undefined : { y: -3 }}
              whileTap={reduceMotion ? undefined : { scale: 0.98 }}
              className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-lg bg-[#EF303B] px-6 py-3 text-base font-semibold text-white shadow-[0_10px_24px_-8px_rgba(239,48,59,0.6)] transition-colors hover:bg-[#d92730] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#EF303B]/40"
            >
              {t.hero.exploreServices}
              <ArrowRight
                aria-hidden="true"
                className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
              />
            </motion.a>

            <motion.a
              variants={fadeUp}
              href={`#${CONTACT_ID}`}
              onClick={(e) => scrollToSection(e, CONTACT_ID)}
              whileHover={reduceMotion ? undefined : { y: -3 }}
              whileTap={reduceMotion ? undefined : { scale: 0.98 }}
              className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-lg border border-[#214779]/65 bg-white/99 px-6 py-3 text-base font-semibold text-[#214779] shadow-[0_8px_20px_-10px_rgba(16,44,77,0.70)] backdrop-blur transition-colors hover:border-[#214779] hover:bg-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#214779]/80"
            >
              {t.hero.contactUs}
              <ArrowRight
                aria-hidden="true"
                className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
              />
            </motion.a>
          </motion.div>

          {/* Trust indicators */}
          <motion.ul
            variants={container}
            className="mt-9 grid grid-cols-1 gap-4 min-[480px]:grid-cols-3 min-[480px]:gap-3 lg:gap-4"
          >
            {trustItems.map(({ icon: Icon, label, tone }, index) => (
              <motion.li
                key={label}
                variants={fadeUp}
                className="flex items-center gap-3 min-[480px]:items-start"
              >
                <span
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${
                    tone === "red"
                      ? "bg-[#EF303B]/30 text-[#EF303B] ring-1 ring-[#EF303B]/60"
                      : "bg-[#214779]/30 text-[#214779] ring-1 ring-[#214779]/60"
                  }`}
                >
                  <Icon aria-hidden="true" className="h-5 w-5" />
                </span>
                <span className="text-sm font-medium leading-snug text-[#102C4D]">
                  {t.hero.trustItems[index] || label}
                </span>
              </motion.li>
            ))}
          </motion.ul>

          {/* Divider + supporting line */}
          <motion.div variants={fadeIn} className="mt-8">
            <hr className="border-0 border-t border-[#214779]/70" />
            <p className="mt-4 text-[10px] font-medium uppercase leading-relaxed tracking-[0.14em] text-[#334155] sm:text-xs">
              {t.hero.pills[0]}
              <span aria-hidden="true" className="mx-2 text-[#214779]/90">|</span>
              {t.hero.pills[1]}
              <span aria-hidden="true" className="mx-2 text-[#214779]/90">|</span>
              {t.hero.pills[2]}
            </p>
          </motion.div>
        </motion.div>

        {/* Visual: below text on mobile/tablet, background on lg+ */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, scale: 0.985 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
          className="relative z-0 aspect-[4/3] w-full overflow-hidden sm:aspect-[16/10] lg:absolute lg:inset-y-0 lg:right-0 lg:aspect-auto lg:w-[72%]"
        >
          <motion.img
            src={heroImage}
            alt={t.hero.imageAlt}
            width={1672}
            height={941}
            loading="eager"
            decoding="async"
            fetchPriority="high"
            style={imageStyle}
            className="h-full w-full object-cover object-[78%_center] lg:object-[85%_center]"
          />

          {/* Fade into the content on mobile (top edge) */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-[#F5F7FB] to-transparent lg:hidden"
          />
          {/* Fade into the text on desktop (left edge) */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-0 hidden w-2/5 bg-gradient-to-r from-[#F5F7FB] via-[#F5F7FB]/60 to-transparent lg:block"
          />
        </motion.div>
      </div>
    </section>
  );
}