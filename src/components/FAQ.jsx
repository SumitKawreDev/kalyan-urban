// border and hover border change 

// // src/components/FAQ.jsx
// import { useEffect, useId, useRef, useState } from "react";
// import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
// import { ChevronDown } from "lucide-react";

// // ⚠️ Update this path to your actual FAQ illustration in the project assets.
// import faqImage from "../assets/images/faq-illustration.png";

// const faqs = [
//   {
//     no: "01",
//     question: "Which deposit schemes are available?",
//     answer:
//       "Available options may include Fixed Deposits, Recurring Deposits, savings accounts, daily deposit schemes, and other applicable plans. Contact our office to confirm current availability.",
//     tone: "orange",
//   },
//   {
//     no: "02",
//     question: "Who can apply for a loan?",
//     answer:
//       "Eligible members may apply for available loan facilities, subject to the society's policies, documentation, and approval process.",
//     tone: "green",
//   },
//   {
//     no: "03",
//     question: "How can I check current interest rates?",
//     answer:
//       "Please contact our office for the latest applicable interest rates, deposit tenures, loan terms, and charges.",
//     tone: "orange",
//   },
//   {
//     no: "04",
//     question: "How do I become a member?",
//     answer:
//       "Contact our office for membership eligibility, required documents, and the application procedure.",
//     tone: "green",
//   },
//   {
//     no: "05",
//     question: "Where can I get more information?",
//     answer:
//       "You can contact our office directly using the phone number and address provided below.",
//     tone: "orange",
//   },
// ];

// const tones = {
//   orange: {
//     card: "border-[#ED6E21]/50 bg-gradient-to-br from-[#ED6E21]/[0.13] to-[#ED6E21]/[0.05] shadow-[0_10px_26px_-20px_rgba(237,110,33,0.48)] group-hover/card:border-[#ED6E21]/99 group-hover/card:shadow-[0_18px_38px_-20px_rgba(237,110,33,0.48)]",
//     badge: "bg-[#ED6E21]/23 text-[#ED6E21]",
//     chevron:
//       "border-[#ED6E21]/60 text-[#ED6E21] group-hover/card:border-[#ED6E21]/99",
//     focus: "focus-visible:ring-[#ED6E21]/40",
//   },
//   green: {
//     card: "border-[#0F5743]/50 bg-gradient-to-br from-[#0F5743]/[0.13] to-[#0F5743]/[0.05] shadow-[0_10px_26px_-20px_rgba(10,64,51,0.4)] group-hover/card:border-[#0F5743]/99 group-hover/card:shadow-[0_18px_38px_-20px_rgba(10,64,51,0.48)]",
//     badge: "bg-[#0F5743]/23 text-[#0F5743]",
//     chevron:
//       "border-[#0F5743]/60 text-[#0F5743] group-hover/card:border-[#0F5743]/99",
//     focus: "focus-visible:ring-[#0F5743]/40",
//   },
// };

// const container = {
//   hidden: {},
//   show: { transition: { staggerChildren: 0.1 } },
// };

// const fadeUp = {
//   hidden: { opacity: 0, y: 18 },
//   show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
// };

// function FaqItem({ item, isOpen, onToggle, reduceMotion }) {
//   const uid = useId();
//   const buttonId = `${uid}-button`;
//   const panelId = `${uid}-panel`;
//   const t = tones[item.tone];

//   return (
//     // Stationary hover trigger so the lifted card can't cause flicker.
//     <motion.li variants={fadeUp} className="group/card">
//       <div
//         className={`transform-gpu rounded-2xl border transition-[translate,box-shadow,border-color] duration-300 ease-in-out group-hover/card:-translate-y-[3px] motion-reduce:transition-none motion-reduce:group-hover/card:translate-y-0 ${t.card}`}
//       >
//         <h3 className="m-0">
//           <button
//             type="button"
//             id={buttonId}
//             aria-expanded={isOpen}
//             aria-controls={panelId}
//             onClick={onToggle}
//             className={`flex w-full items-center gap-4 rounded-2xl p-4 text-left focus-visible:outline-none focus-visible:ring-4 sm:gap-5 sm:p-5 lg:px-6 ${t.focus}`}
//           >
//             <span
//               aria-hidden="true"
//               className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-lg font-extrabold sm:h-14 sm:w-14 sm:text-xl ${t.badge}`}
//             >
//               {item.no}
//             </span>

//             <span className="min-w-0 flex-1 text-base font-extrabold leading-snug text-[#0A4033] sm:text-lg">
//               {item.question}
//             </span>

//             <span
//               aria-hidden="true"
//               className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border bg-white transition-[border-color] duration-300 ease-in-out motion-reduce:transition-none sm:h-10 sm:w-10 ${t.chevron}`}
//             >
//               <ChevronDown
//                 className={`h-5 w-5 transition-[rotate] duration-300 ease-in-out motion-reduce:transition-none ${
//                   isOpen ? "rotate-180" : "rotate-0"
//                 }`}
//               />
//             </span>
//           </button>
//         </h3>

//         <AnimatePresence initial={false}>
//           {isOpen && (
//             <motion.div
//               key="panel"
//               id={panelId}
//               role="region"
//               aria-labelledby={buttonId}
//               initial={{ height: 0, opacity: 0 }}
//               animate={{ height: "auto", opacity: 1 }}
//               exit={{ height: 0, opacity: 0 }}
//               transition={{
//                 duration: reduceMotion ? 0 : 0.3,
//                 ease: "easeInOut",
//               }}
//               className="overflow-hidden"
//             >
//               {/* Padding lives on an inner div so the height animation never clips it. */}
//               <div className="px-4 pb-5 pl-[4.5rem] pr-5 sm:pl-[5.75rem] sm:pr-16 lg:pl-[6.25rem]">
//                 <p className="m-0 text-sm leading-relaxed text-[#26332E] sm:text-[15px]">
//                   {item.answer}
//                 </p>
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </motion.li>
//   );
// }

// export default function FAQ() {
//   const reduceMotion = useReducedMotion();
//   const initial = reduceMotion ? false : "hidden";
//   // Single-open accordion; the first item starts open, as in the reference.
//   const [openIndex, setOpenIndex] = useState(0);

//   const headerRef = useRef(null);
//   const figureRef = useRef(null);
//   const rightColRef = useRef(null);
//   const [figureHeight, setFigureHeight] = useState(null);

//   useEffect(() => {
//     const mql = window.matchMedia("(min-width: 1024px)");
//     let rafId = null;

//     const syncHeights = () => {
//       if (!mql.matches) {
//         setFigureHeight(null);
//         return;
//       }

//       const rightEl = rightColRef.current;
//       const headerEl = headerRef.current;
//       const figureEl = figureRef.current;

//       if (!rightEl || !headerEl || !figureEl) return;

//       const rightHeight = rightEl.getBoundingClientRect().height;
//       const headerHeight = headerEl.getBoundingClientRect().height;
//       const marginTop =
//         parseFloat(window.getComputedStyle(figureEl).marginTop) || 0;

//       // Exact height needed for the bottom of the figure to match the bottom of the right FAQ column
//       const targetHeight = Math.max(180, rightHeight - headerHeight - marginTop);
//       setFigureHeight(targetHeight);
//     };

//     const scheduleSync = () => {
//       if (rafId !== null) cancelAnimationFrame(rafId);
//       rafId = requestAnimationFrame(syncHeights);
//     };

//     syncHeights();

//     const ro = new ResizeObserver(scheduleSync);
//     if (rightColRef.current) ro.observe(rightColRef.current);
//     if (headerRef.current) ro.observe(headerRef.current);

//     mql.addEventListener("change", scheduleSync);
//     window.addEventListener("resize", scheduleSync);

//     return () => {
//       if (rafId !== null) cancelAnimationFrame(rafId);
//       ro.disconnect();
//       mql.removeEventListener("change", scheduleSync);
//       window.removeEventListener("resize", scheduleSync);
//     };
//   }, []);

//   return (
//     <section
//       id="faqs"
//       aria-labelledby="faq-heading"
//       className="relative isolate overflow-hidden bg-gradient-to-b from-white via-[#F3F8F5] to-white py-5 sm:py-20 md:-mt-20 lg:py-23"
//     >
//       {/* Decorative shapes */}
//       <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
//         <div className="absolute -left-24 bottom-10 h-80 w-80 rounded-full bg-[#0F5743]/[0.05] blur-3xl" />
//         <div className="absolute -right-24 -top-24 h-[26rem] w-[26rem] rounded-full border-[26px] border-[#ED6E21]/[0.10]" />
//         <div className="absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-[#ED6E21]/[0.04] blur-3xl" />
//       </div>

//       <div className="mx-auto w-full max-w-[1360px] px-4 sm:px-8 lg:px-12 2xl:max-w-[1440px]">
//         <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-10 xl:gap-16">
//           {/* Left: heading, description, illustration */}
//           <motion.div
//             variants={container}
//             initial={initial}
//             whileInView="show"
//             viewport={{ once: true, amount: 0.15 }}
//             className="flex min-w-0 flex-col text-left"
//           >
//             <div ref={headerRef}>
//               <motion.div variants={fadeUp} className="flex items-center gap-3">
//                 <span aria-hidden="true" className="h-[2px] w-10 bg-[#ED6E21] sm:w-12" />
//                 <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#ED6E21] sm:text-sm">
//                   Frequently Asked Questions
//                 </p>
//               </motion.div>

//               <motion.h2
//                 id="faq-heading"
//                 variants={fadeUp}
//                 className="mt-5 text-[2rem] font-extrabold leading-[1.1] tracking-tight min-[400px]:text-4xl sm:text-5xl xl:text-[3.4rem]"
//               >
//                 <span className="block text-[#0A4033]">Frequently Asked</span>
//                 <span className="block text-[#ED6E21]">Questions</span>
//               </motion.h2>

//               <motion.div
//                 variants={fadeUp}
//                 aria-hidden="true"
//                 className="mt-6 h-1 w-16 rounded-full bg-gradient-to-r from-[#ED6E21] to-[#0F5743]"
//               />

//               <motion.p
//                 variants={fadeUp}
//                 className="mt-6 max-w-xl text-base leading-relaxed text-[#26332E] sm:text-lg"
//               >
//                 Find answers to common questions about our membership, deposit
//                 schemes, loan facilities, and other services.
//               </motion.p>
//             </div>

//             {/* Illustration: separate <img>; stationary wrapper is the hover trigger */}
//             <motion.figure
//               ref={figureRef}
//               variants={fadeUp}
//               style={figureHeight !== null ? { height: `${figureHeight}px` } : undefined}
//               className="group/img m-0 mt-8 flex w-full items-center justify-center overflow-hidden rounded-3xl border border-[#0F5743]/50 bg-[#F3F8F5] shadow-[0_24px_50px_-24px_rgba(10,64,51,0.60)] transition-[border-color,box-shadow] duration-300 ease-in-out hover:border-[#0F5743]/90 hover:shadow-[0_28px_56px_-22px_rgba(10,64,51,0.80)] sm:mt-10"
//             >
//               <img
//                 src={faqImage}
//                 alt="A large navy question mark with chat bubbles, a plant, FAQ letter blocks, stacked books, a checklist, gold coins and a pen, representing frequently asked questions about deposits, loans and membership"
//                 loading="lazy"
//                 decoding="async"
//                 className="block aspect-[4/3] h-auto w-full transform-gpu object-cover object-center transition-transform duration-500 ease-out will-change-transform group-hover/img:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover/img:scale-100 lg:aspect-auto lg:h-full"
//               />
//             </motion.figure>
//           </motion.div>

//           {/* Right: five stacked accordion cards */}
//           <motion.ul
//             ref={rightColRef}
//             variants={container}
//             initial={initial}
//             whileInView="show"
//             viewport={{ once: true, amount: 0.1 }}
//             className="m-0 flex min-w-0 list-none flex-col gap-4 p-0 sm:gap-5"
//           >
//             {faqs.map((item, i) => (
//               <FaqItem
//                 key={item.no}
//                 item={item}
//                 isOpen={openIndex === i}
//                 onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
//                 reduceMotion={reduceMotion}
//               />
//             ))}
//           </motion.ul>
//         </div>
//       </div>
//     </section>
//   );
// }



//enlish hindi swicher 


// src/components/FAQ.jsx
import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

// ⚠️ Update this path to your actual FAQ illustration in the project assets.
import faqImage from "../assets/images/faq-illustration.png";

const faqContent = {
  en: {
    eyebrow: "Frequently Asked Questions",
    headingLine1: "Frequently Asked",
    headingLine2: "Questions",
    para: "Find answers to common questions about our membership, deposit schemes, loan facilities, and other services.",
    imageAlt:
      "A large navy question mark with chat bubbles, a plant, FAQ letter blocks, stacked books, a checklist, gold coins and a pen, representing frequently asked questions about deposits, loans and membership",
    faqs: [
      {
        no: "01",
        question: "Which deposit schemes are available?",
        answer:
          "Available options may include Fixed Deposits, Recurring Deposits, savings accounts, daily deposit schemes, and other applicable plans. Contact our office to confirm current availability.",
        tone: "orange",
      },
      {
        no: "02",
        question: "Who can apply for a loan?",
        answer:
          "Eligible members may apply for available loan facilities, subject to the society's policies, documentation, and approval process.",
        tone: "green",
      },
      {
        no: "03",
        question: "How can I check current interest rates?",
        answer:
          "Please contact our office for the latest applicable interest rates, deposit tenures, loan terms, and charges.",
        tone: "orange",
      },
      {
        no: "04",
        question: "How do I become a member?",
        answer:
          "Contact our office for membership eligibility, required documents, and the application procedure.",
        tone: "green",
      },
      {
        no: "05",
        question: "Where can I get more information?",
        answer:
          "You can contact our office directly using the phone number and address provided below.",
        tone: "orange",
      },
    ],
  },
  hi: {
    eyebrow: "अक्सर पूछे जाने वाले प्रश्न",
    headingLine1: "अक्सर पूछे जाने वाले",
    headingLine2: "प्रश्न",
    para: "हमारी सदस्यता, जमा योजनाओं, ऋण सुविधाओं और अन्य सेवाओं के बारे में सामान्य प्रश्नों के उत्तर यहाँ पाएँ।",
    imageAlt:
      "चैट बबल, पौधा, FAQ ब्लॉक, किताबें, चेकलिस्ट और सोने के सिक्कों के साथ एक बड़ा प्रश्न चिह्न, जो जमा, ऋण और सदस्यता से जुड़े प्रश्नों को दर्शाता है",
    faqs: [
      {
        no: "01",
        question: "कौन-सी जमा योजनाएँ उपलब्ध हैं?",
        answer:
          "उपलब्ध विकल्पों में सावधि जमा (Fixed Deposits), आवर्ती जमा (Recurring Deposits), बचत खाते, दैनिक जमा योजनाएँ और अन्य लागू योजनाएँ शामिल हो सकती हैं। वर्तमान उपलब्धता की पुष्टि के लिए हमारे कार्यालय से संपर्क करें।",
        tone: "orange",
      },
      {
        no: "02",
        question: "ऋण के लिए कौन आवेदन कर सकता है?",
        answer:
          "पात्र सदस्य सोसायटी की नीतियों, दस्तावेज़ीकरण और स्वीकृति प्रक्रिया के अधीन उपलब्ध ऋण सुविधाओं के लिए आवेदन कर सकते हैं।",
        tone: "green",
      },
      {
        no: "03",
        question: "मैं वर्तमान ब्याज दरों की जानकारी कैसे प्राप्त कर सकता हूँ?",
        answer:
          "नवीनतम लागू ब्याज दरों, जमा अवधि, ऋण शर्तों और शुल्कों की जानकारी के लिए कृपया हमारे कार्यालय से संपर्क करें।",
        tone: "orange",
      },
      {
        no: "04",
        question: "मैं सदस्य कैसे बन सकता हूँ?",
        answer:
          "सदस्यता पात्रता, आवश्यक दस्तावेज़ों और आवेदन प्रक्रिया की जानकारी के लिए हमारे कार्यालय से संपर्क करें।",
        tone: "green",
      },
      {
        no: "05",
        question: "मुझे अधिक जानकारी कहाँ से मिल सकती है?",
        answer:
          "आप नीचे दिए गए फ़ोन नंबर और पते के माध्यम से सीधे हमारे कार्यालय से संपर्क कर सकते हैं।",
        tone: "orange",
      },
    ],
  },
};

const tones = {
  orange: {
    card: "border-[#ED6E21]/65 bg-gradient-to-br from-[#ED6E21]/[0.13] to-[#ED6E21]/[0.04] shadow-[0_10px_28px_-18px_rgba(237,110,33,0.55)] group-hover/card:border-[#ED6E21]/100 group-hover/card:shadow-[0_20px_40px_-18px_rgba(237,110,33,0.70)]",
    badge: "bg-[#ED6E21]/20 text-[#ED6E21]",
    chevron:
      "border-[#ED6E21]/60 text-[#ED6E21] group-hover/card:border-[#ED6E21] group-hover/card:bg-[#ED6E21] group-hover/card:text-white",
    focus: "focus-visible:ring-[#ED6E21]/40",
  },
  green: {
    card: "border-[#0F5743]/65 bg-gradient-to-br from-[#0F5743]/[0.13] to-[#0F5743]/[0.04] shadow-[0_10px_28px_-18px_rgba(10,64,51,0.55)] group-hover/card:border-[#0F5743]/99 group-hover/card:shadow-[0_20px_40px_-18px_rgba(10,64,51,0.70)]",
    badge: "bg-[#0F5743]/20 text-[#0F5743]",
    chevron:
      "border-[#0F5743]/60 text-[#0F5743] group-hover/card:border-[#0F5743] group-hover/card:bg-[#0F5743] group-hover/card:text-white",
    focus: "focus-visible:ring-[#0F5743]/40",
  },
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

function FaqItem({ item, isOpen, onToggle, reduceMotion }) {
  const uid = useId();
  const buttonId = `${uid}-button`;
  const panelId = `${uid}-panel`;
  const t = tones[item.tone];

  return (
    // Stationary hover trigger so the lifted card can't cause flicker.
    <motion.li variants={fadeUp} className="group/card">
      <div
        className={`transform-gpu rounded-2xl border transition-[translate,box-shadow,border-color] duration-300 ease-in-out group-hover/card:-translate-y-[3px] motion-reduce:transition-none motion-reduce:group-hover/card:translate-y-0 ${t.card}`}
      >
        <h3 className="m-0">
          <button
            type="button"
            id={buttonId}
            aria-expanded={isOpen}
            aria-controls={panelId}
            onClick={onToggle}
            className={`flex w-full items-center gap-4 rounded-2xl p-4 text-left focus-visible:outline-none focus-visible:ring-4 sm:gap-5 sm:p-5 lg:px-6 ${t.focus}`}
          >
            <span
              aria-hidden="true"
              className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-lg font-extrabold sm:h-14 sm:w-14 sm:text-xl ${t.badge}`}
            >
              {item.no}
            </span>

            <span className="min-w-0 flex-1 text-base font-extrabold leading-snug text-[#0A4033] sm:text-lg">
              {item.question}
            </span>

            <span
              aria-hidden="true"
              className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border bg-white/70 transition-[background-color,border-color,color] duration-300 ease-in-out motion-reduce:transition-none sm:h-10 sm:w-10 ${t.chevron}`}
            >
              <ChevronDown
                className={`h-5 w-5 transition-[rotate] duration-300 ease-in-out motion-reduce:transition-none ${
                  isOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </span>
          </button>
        </h3>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              key="panel"
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{
                duration: reduceMotion ? 0 : 0.3,
                ease: "easeInOut",
              }}
              className="overflow-hidden"
            >
              {/* Padding lives on an inner div so the height animation never clips it. */}
              <div className="px-4 pb-5 pl-[4.5rem] pr-5 sm:pl-[5.75rem] sm:pr-16 lg:pl-[6.25rem]">
                <p className="m-0 text-sm leading-relaxed text-[#26332E] sm:text-[15px]">
                  {item.answer}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.li>
  );
}

export default function FAQ() {
  const { lang } = useLanguage();
  const reduceMotion = useReducedMotion();
  const initial = reduceMotion ? false : "hidden";
  // Single-open accordion; the first item starts open, as in the reference.
  const [openIndex, setOpenIndex] = useState(0);

  const copy = faqContent[lang] || faqContent.en;
  const isHi = lang === "hi";

  const headerRef = useRef(null);
  const figureRef = useRef(null);
  const rightColRef = useRef(null);
  const [figureHeight, setFigureHeight] = useState(null);

  useEffect(() => {
    const mql = window.matchMedia("(min-width: 1024px)");
    let rafId = null;

    const syncHeights = () => {
      if (!mql.matches) {
        setFigureHeight(null);
        return;
      }

      const rightEl = rightColRef.current;
      const headerEl = headerRef.current;
      const figureEl = figureRef.current;

      if (!rightEl || !headerEl || !figureEl) return;

      const rightHeight = rightEl.getBoundingClientRect().height;
      const headerHeight = headerEl.getBoundingClientRect().height;
      const marginTop =
        parseFloat(window.getComputedStyle(figureEl).marginTop) || 0;

      // Exact height needed for the bottom of the figure to match the bottom of the right FAQ column
      const targetHeight = Math.max(180, rightHeight - headerHeight - marginTop);
      setFigureHeight(targetHeight);
    };

    const scheduleSync = () => {
      if (rafId !== null) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(syncHeights);
    };

    syncHeights();

    const ro = new ResizeObserver(scheduleSync);
    if (rightColRef.current) ro.observe(rightColRef.current);
    if (headerRef.current) ro.observe(headerRef.current);

    mql.addEventListener("change", scheduleSync);
    window.addEventListener("resize", scheduleSync);

    return () => {
      if (rafId !== null) cancelAnimationFrame(rafId);
      ro.disconnect();
      mql.removeEventListener("change", scheduleSync);
      window.removeEventListener("resize", scheduleSync);
    };
  }, [lang]);

  return (
    <section
      id="faqs"
      aria-labelledby="faq-heading"
      className="relative isolate overflow-hidden bg-gradient-to-b from-white via-[#F3F8F5] to-white py-5 sm:py-20 md:-mt-20 lg:py-23"
    >
      {/* Decorative shapes */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-24 bottom-10 h-80 w-80 rounded-full bg-[#0F5743]/[0.05] blur-3xl" />
        <div className="absolute -right-24 -top-24 h-[26rem] w-[26rem] rounded-full border-[26px] border-[#ED6E21]/[0.10]" />
        <div className="absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-[#ED6E21]/[0.04] blur-3xl" />
      </div>

      <div className="mx-auto w-full max-w-[1360px] px-4 sm:px-8 lg:px-12 2xl:max-w-[1440px]">
        <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-10 xl:gap-16">
          {/* Left: heading, description, illustration */}
          <motion.div
            variants={container}
            initial={initial}
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="flex min-w-0 flex-col text-left"
          >
            <div ref={headerRef}>
              <motion.div variants={fadeUp} className="flex items-center gap-3">
                <span aria-hidden="true" className="h-[2px] w-10 bg-[#ED6E21] sm:w-12" />
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#ED6E21] sm:text-sm">
                  {copy.eyebrow}
                </p>
              </motion.div>

              <motion.h2
                id="faq-heading"
                variants={fadeUp}
                className={`mt-5 font-extrabold tracking-tight ${
                  isHi
                    ? "text-[1.85rem] leading-[1.28] min-[400px]:text-3xl sm:text-4xl lg:text-[2.5rem] xl:text-[2.85rem]"
                    : "text-[2rem] leading-[1.1] min-[400px]:text-4xl sm:text-5xl xl:text-[3.4rem]"
                }`}
              >
                <span className="block text-[#0A4033]">{copy.headingLine1}</span>
                <span className="block text-[#ED6E21]">{copy.headingLine2}</span>
              </motion.h2>

              <motion.div
                variants={fadeUp}
                aria-hidden="true"
                className="mt-6 h-1 w-16 rounded-full bg-gradient-to-r from-[#ED6E21] to-[#0F5743]"
              />

              <motion.p
                variants={fadeUp}
                className="mt-6 max-w-xl text-base leading-relaxed text-[#26332E] sm:text-lg"
              >
                {copy.para}
              </motion.p>
            </div>

            {/* Illustration: separate <img>; stationary wrapper is the hover trigger */}
            <motion.figure
              ref={figureRef}
              variants={fadeUp}
              style={figureHeight !== null ? { height: `${figureHeight}px` } : undefined}
              className="group/img m-0 mt-8 flex w-full items-center justify-center overflow-hidden rounded-3xl border border-[#0F5743]/60 bg-[#F3F8F5] shadow-[0_24px_50px_-24px_rgba(10,64,51,0.60)] transition-[border-color,box-shadow] duration-300 ease-in-out hover:border-[#0F5743]/99 hover:shadow-[0_28px_56px_-22px_rgba(10,64,51,0.80)] sm:mt-10"
            >
              <img
                src={faqImage}
                alt={copy.imageAlt}
                loading="lazy"
                decoding="async"
                className="block aspect-[4/3] h-auto w-full transform-gpu object-cover object-center transition-transform duration-500 ease-out will-change-transform group-hover/img:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover/img:scale-100 lg:aspect-auto lg:h-full"
              />
            </motion.figure>
          </motion.div>

          {/* Right: five stacked accordion cards */}
          <motion.ul
            ref={rightColRef}
            variants={container}
            initial={initial}
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="m-0 flex min-w-0 list-none flex-col gap-4 p-0 sm:gap-5"
          >
            {copy.faqs.map((item, i) => (
              <FaqItem
                key={item.no}
                item={item}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
                reduceMotion={reduceMotion}
              />
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}