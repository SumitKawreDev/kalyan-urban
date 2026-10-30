// //border new change 


// // src/components/GetStarted.jsx
// import { motion, useReducedMotion } from "framer-motion";
// import { FileCheck, FileSearch, PhoneCall } from "lucide-react";

// // ⚠️ Update this path to your actual finance illustration in the project assets.
// import journeyImage from "../assets/images/get-started-illustration.png";

// const steps = [
//   {
//     no: "01",
//     icon: PhoneCall,
//     title: "Connect With Us",
//     description: "Contact our office to learn about membership and available services.",
//     tone: "orange",
//   },
//   {
//     no: "02",
//     icon: FileSearch,
//     title: "Explore Your Options",
//     description:
//       "Understand the available deposit schemes, loan facilities, and applicable conditions.",
//     tone: "green",
//   },
//   {
//     no: "03",
//     icon: FileCheck,
//     title: "Submit Your Application",
//     description:
//       "Complete the relevant application process and provide the required documents.",
//     tone: "orange",
//   },
// ];

// const tones = {
//   orange: {
//     card: "border-[#ED6E21]/60 bg-gradient-to-b from-[#ED6E21]/[0.13] to-[#ED6E21]/[0.04] shadow-[0_12px_30px_-22px_rgba(237,110,33,0.55)] group-hover/card:border-[#ED6E21]/99 group-hover/card:shadow-[0_22px_44px_-22px_rgba(237,110,33,0.70)]",
//     icon: "bg-[#ED6E21]/20 text-[#ED6E21]",
//     badge: "text-[#ED6E21] ring-[#ED6E21]/60",
//   },
//   green: {
//     card: "border-[#0F5743]/60 bg-gradient-to-b from-[#0F5743]/[0.13] to-[#0F5743]/[0.04] shadow-[0_12px_30px_-22px_rgba(10,64,51,0.55)] group-hover/card:border-[#0F5743]/99 group-hover/card:shadow-[0_22px_44px_-22px_rgba(10,64,51,0.70)]",
// icon: "bg-[#0F5743]/20 text-[#0F5743]",
// badge: "text-[#0F5743] ring-[#0F5743]/60",
//   },
// };

// const container = {
//   hidden: {},
//   show: { transition: { staggerChildren: 0.12 } },
// };

// const fadeUp = {
//   hidden: { opacity: 0, y: 18 },
//   show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
// };

// // Dotted curved connector with an arrowhead, shown between steps on desktop only.
// function Connector() {
//   return (
//     <div
//       aria-hidden="true"
//       className="pointer-events-none absolute -top-10 left-[calc(50%+3.5rem)] z-0 hidden h-12 w-[calc(100%+2rem-7rem)] lg:block"
//     >
//       <svg
//         viewBox="0 0 100 48"
//         preserveAspectRatio="none"
//         className="h-full w-full overflow-visible"
//       >
//         <path
//           d="M0,40 Q50,-14 96,36"
//           fill="none"
//           stroke="#0A4033"
//           strokeWidth="1.5"
//           strokeDasharray="3 4"
//           strokeLinecap="round"
//           vectorEffect="non-scaling-stroke"
//           opacity="0.7"
//         />
//       </svg>
//       <svg
//         viewBox="0 0 12 12"
//         className="absolute bottom-1.5 right-0 h-3 w-3 rotate-[28deg] text-[#0A4033]"
//       >
//         <path d="M1 1 L11 6 L1 11 Z" fill="currentColor" />
//       </svg>
//     </div>
//   );
// }

// export default function GetStarted() {
//   const reduceMotion = useReducedMotion();
//   const initial = reduceMotion ? false : "hidden";

//   return (
//     <section
//       id="process"
//       aria-labelledby="get-started-heading"
//       className="relative isolate overflow-hidden bg-gradient-to-b from-white via-[#F3F8F5] to-white py-10 sm:py-20 md:-mt-20 lg:py-20"
//     >
//       {/* Decorative shapes */}
//       <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
//         <div className="absolute -left-28 top-1/3 h-80 w-80 rounded-full bg-[#0F5743]/[0.05] blur-3xl" />
//         <div className="absolute -right-24 -top-20 h-[26rem] w-[26rem] rounded-full border-[26px] border-[#ED6E21]/[0.10]" />
//         <div className="absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-[#ED6E21]/[0.04] blur-3xl" />
//       </div>

//       <div className="mx-auto w-full max-w-[1360px] px-4 sm:px-8 lg:px-12 2xl:max-w-[1440px]">
//         {/* Header: heading (left) + illustration (right) */}
//         {/* <div className="grid items-center gap-8 lg:grid-cols-[1fr_1.1fr] lg:gap-10"> */}
//         <div className="grid items-stretch gap-8 lg:grid-cols-[1fr_1.1fr] lg:gap-10">
//           <motion.div
//             variants={container}
//             initial={initial}
//             whileInView="show"
//             viewport={{ once: true, amount: 0.3 }}
//             className="min-w-0 text-left"
//           >
//             <motion.div variants={fadeUp} className="flex items-center gap-3">
//               <span aria-hidden="true" className="h-[2px] w-10 bg-[#ED6E21] sm:w-12" />
//               <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#ED6E21] sm:text-sm">
//                 How to Get Started
//               </p>
//             </motion.div>

//             <motion.h2
//               id="get-started-heading"
//               variants={fadeUp}
//               className="mt-5 text-[2.1rem] font-extrabold leading-[1.1] tracking-tight min-[1000px]:text-4xl sm:text-5xl xl:text-[3.4rem]"
//             >
//               <span className="block text-[#0A4033]">Your Journey</span>
//               <span className="block text-[#ED6E21]">Starts Here</span>
//             </motion.h2>

//             <motion.div
//               variants={fadeUp}
//               aria-hidden="true"
//               className="mt-6 h-1 w-16 rounded-full bg-gradient-to-r from-[#ED6E21] to-[#0F5743]"
//             />
//           </motion.div>

//           {/* Illustration: stationary wrapper is the hover trigger; only the img scales */}
//           <motion.div
//             variants={fadeUp}
//             initial={initial}
//             whileInView="show"
//             viewport={{ once: true, amount: 0.2 }}
//             className="group/img mx-auto w-full max-w-md min-w-0 overflow-hidden rounded-3xl border border-[#0F5743]/50 bg-white shadow-[0_24px_50px_-24px_rgba(10,64,51,0.60)] transition-[border-color,box-shadow] duration-300 ease-in-out hover:border-[#0F5743]/90 hover:shadow-[0_28px_56px_-22px_rgba(10,64,51,0.80)] sm:max-w-[1000px] lg:ml-auto lg:mr-0 lg:max-w-none"
//           >
//             <img
//               src={journeyImage}
//               alt="Finance illustration with stacks of gold coins, a growing plant and a small house, symbolising savings and growth"
//               loading="lazy"
//               decoding="async"
//               className="block h-auto w-full transform-gpu object-contain transition-[scale] duration-500 ease-out group-hover/img:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover/img:scale-100"
//             />
//           </motion.div>
//         </div>

//         {/* Steps */}
//         <motion.ol
//           variants={container}
//           initial={initial}
//           whileInView="show"
//           viewport={{ once: true, amount: 0.1 }}
//           className="m-0 mx-auto mt-16 grid w-full max-w-none list-none grid-cols-1 gap-x-8 gap-y-16 p-0 sm:mt-20 md:max-w-[720px] lg:mt-14 lg:max-w-none lg:grid-cols-3"
//         >
//           {steps.map(({ no, icon: Icon, title, description, tone }, i) => {
//             const t = tones[tone];
//             return (
//               // Stationary hover trigger so the lifted card can't cause flicker.
//               <motion.li
//                 key={no}
//                 variants={fadeUp}
//                 className="group/card relative flex"
//               >
//                 {i < steps.length - 1 && <Connector />}

//                 <article
//                   className={`relative z-0 flex w-full transform-gpu flex-col items-center rounded-3xl border px-6 pb-8 pt-14 text-center transition-[translate,box-shadow,border-color] duration-300 ease-in-out group-hover/card:-translate-y-1 motion-reduce:transition-none motion-reduce:group-hover/card:translate-y-0 sm:px-8 ${t.card}`}
//                 >
//                   <span
//                     className={`flex h-20 w-20 items-center justify-center rounded-full sm:h-24 sm:w-24 ${t.icon}`}
//                   >
//                     <Icon aria-hidden="true" strokeWidth={1.75} className="h-9 w-9 sm:h-11 sm:w-11" />
//                   </span>

//                   <h3 className="mt-6 text-xl font-extrabold text-[#0A4033] sm:text-2xl">
//                     {title}
//                   </h3>
//                   <span
//                     aria-hidden="true"
//                     className={`mt-3 block h-[3px] w-10 rounded-full ${t.underline}`}
//                   />
//                   <p className="mt-4 max-w-xs text-sm leading-relaxed text-[#26332E] sm:text-base">
//                     {description}
//                   </p>
//                 </article>

//                 {/* Number badge: sits above the card's top edge, in front of connectors */}
//                 <span
//                   className={`absolute -top-10 left-1/2 z-10 flex h-16 w-16 -translate-x-1/2 items-center justify-center rounded-full bg-white text-xl font-extrabold shadow-[0_10px_24px_-10px_rgba(10,64,51,0.35)] ring-1 ${t.badge}`}
//                 >
//                   <span className="sr-only">Step </span>
//                   {no}
//                 </span>
//               </motion.li>
//             );
//           })}
//         </motion.ol>
//       </div>
//     </section>
//   );
// }



//enlish hindi swicher

// src/components/GetStarted.jsx
import { motion, useReducedMotion } from "framer-motion";
import { FileCheck, FileSearch, PhoneCall } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import journeyImage from "../assets/images/get-started-illustration.png";

const tones = {
  orange: {
    card: "border-[#ED6E21]/60 bg-gradient-to-b from-[#ED6E21]/[0.13] to-[#ED6E21]/[0.04] shadow-[0_12px_30px_-22px_rgba(237,110,33,0.55)] group-hover/card:border-[#ED6E21]/99 group-hover/card:shadow-[0_22px_44px_-22px_rgba(237,110,33,0.70)]",
    icon: "bg-[#ED6E21]/20 text-[#ED6E21]",
    badge: "text-[#ED6E21] ring-[#ED6E21]/60",
    underline: "bg-[#ED6E21]",
  },
  green: {
    card: "border-[#0F5743]/60 bg-gradient-to-b from-[#0F5743]/[0.13] to-[#0F5743]/[0.04] shadow-[0_12px_30px_-22px_rgba(10,64,51,0.55)] group-hover/card:border-[#0F5743]/99 group-hover/card:shadow-[0_22px_44px_-22px_rgba(10,64,51,0.70)]",
    icon: "bg-[#0F5743]/20 text-[#0F5743]",
    badge: "text-[#0F5743] ring-[#0F5743]/60",
    underline: "bg-[#0F5743]",
  },
};

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: "easeOut",
    },
  },
};

// Dotted curved connector with an arrowhead, shown between steps on desktop only.
function Connector() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute -top-10 left-[calc(50%+3.5rem)] z-0 hidden h-12 w-[calc(100%+2rem-7rem)] lg:block"
    >
      <svg
        viewBox="0 0 100 48"
        preserveAspectRatio="none"
        className="h-full w-full overflow-visible"
      >
        <path
          d="M0,40 Q50,-14 96,36"
          fill="none"
          stroke="#0A4033"
          strokeWidth="1.5"
          strokeDasharray="3 4"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          opacity="0.7"
        />
      </svg>

      <svg
        viewBox="0 0 12 12"
        className="absolute bottom-1.5 right-0 h-3 w-3 rotate-[28deg] text-[#0A4033]"
      >
        <path d="M1 1 L11 6 L1 11 Z" fill="currentColor" />
      </svg>
    </div>
  );
}

export default function GetStarted() {
  const { lang } = useLanguage();
  const isHi = lang === "hi";

  const reduceMotion = useReducedMotion();
  const initial = reduceMotion ? false : "hidden";

  const steps = [
    {
      no: "01",
      icon: PhoneCall,
      title: isHi ? "हमसे संपर्क करें" : "Connect With Us",
      description: isHi
        ? "सदस्यता और उपलब्ध सेवाओं के बारे में जानकारी प्राप्त करने के लिए हमारे कार्यालय से संपर्क करें।"
        : "Contact our office to learn about membership and available services.",
      tone: "orange",
    },
    {
      no: "02",
      icon: FileSearch,
      title: isHi ? "अपने विकल्प जानें" : "Explore Your Options",
      description: isHi
        ? "उपलब्ध जमा योजनाओं, ऋण सुविधाओं और लागू शर्तों को समझें।"
        : "Understand the available deposit schemes, loan facilities, and applicable conditions.",
      tone: "green",
    },
    {
      no: "03",
      icon: FileCheck,
      title: isHi ? "अपना आवेदन जमा करें" : "Submit Your Application",
      description: isHi
        ? "संबंधित आवेदन प्रक्रिया पूरी करें और आवश्यक दस्तावेज़ जमा करें।"
        : "Complete the relevant application process and provide the required documents.",
      tone: "orange",
    },
  ];

  return (
    <section
      id="process"
      aria-labelledby="get-started-heading"
      className="relative isolate overflow-hidden bg-gradient-to-b from-white via-[#F3F8F5] to-white py-10 sm:py-20 md:-mt-20 lg:py-20"
    >
      {/* Decorative shapes */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute -left-28 top-1/3 h-80 w-80 rounded-full bg-[#0F5743]/[0.05] blur-3xl" />
        <div className="absolute -right-24 -top-20 h-[26rem] w-[26rem] rounded-full border-[26px] border-[#ED6E21]/[0.10]" />
        <div className="absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-[#ED6E21]/[0.04] blur-3xl" />
      </div>

      <div className="mx-auto w-full max-w-[1360px] px-4 sm:px-8 lg:px-12 2xl:max-w-[1440px]">
        {/* Header: heading (left) + illustration (right) */}
        <div className="grid items-stretch gap-8 lg:grid-cols-[1fr_1.1fr] lg:gap-10">
          <motion.div
            variants={container}
            initial={initial}
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="min-w-0 text-left"
          >
            <motion.div
              variants={fadeUp}
              className="flex items-center gap-3"
            >
              <span
                aria-hidden="true"
                className="h-[2px] w-10 bg-[#ED6E21] sm:w-12"
              />
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#ED6E21] sm:text-sm">
                {isHi ? "शुरुआत कैसे करें" : "How to Get Started"}
              </p>
            </motion.div>

            <motion.h2
              id="get-started-heading"
              variants={fadeUp}
              className="mt-5 text-[2.1rem] font-extrabold leading-[1.1] tracking-tight min-[1000px]:text-4xl sm:text-5xl xl:text-[3.4rem]"
            >
              <span className="block text-[#0A4033]">
                {isHi ? "आपकी यात्रा" : "Your Journey"}
              </span>
              <span className="block text-[#ED6E21]">
                {isHi ? "यहाँ से शुरू होती है" : "Starts Here"}
              </span>
            </motion.h2>

            <motion.div
              variants={fadeUp}
              aria-hidden="true"
              className="mt-6 h-1 w-16 rounded-full bg-gradient-to-r from-[#ED6E21] to-[#0F5743]"
            />
          </motion.div>

          {/* Illustration with smooth hover zoom */}
          <motion.div
            variants={fadeUp}
            initial={initial}
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="group/img mx-auto w-full max-w-md min-w-0 overflow-hidden rounded-3xl border border-[#0F5743]/50 bg-white shadow-[0_24px_50px_-24px_rgba(10,64,51,0.60)] transition-[border-color,box-shadow] duration-300 ease-in-out hover:border-[#0F5743]/90 hover:shadow-[0_28px_56px_-22px_rgba(10,64,51,0.80)] sm:max-w-[1000px] lg:ml-auto lg:mr-0 lg:max-w-none"
          >
            <img
              src={journeyImage}
              alt={
                isHi
                  ? "बचत और वित्तीय विकास का प्रतीक सिक्कों, पौधे और घर का चित्रण"
                  : "Finance illustration with stacks of gold coins, a growing plant and a small house, symbolising savings and growth"
              }
              loading="lazy"
              decoding="async"
              className="block h-auto w-full transform-gpu object-contain transition-[scale] duration-500 ease-out group-hover/img:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover/img:scale-100"
            />
          </motion.div>
        </div>

        {/* Three Getting Started Steps */}
        <motion.ol
          variants={container}
          initial={initial}
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="m-0 mx-auto mt-16 grid w-full max-w-none list-none grid-cols-1 gap-x-8 gap-y-16 p-0 sm:mt-20 md:max-w-[720px] lg:mt-14 lg:max-w-none lg:grid-cols-3"
        >
          {steps.map(({ no, icon: Icon, title, description, tone }, i) => {
            const t = tones[tone];

            return (
              <motion.li
                key={no}
                variants={fadeUp}
                className="group/card relative flex"
              >
                {i < steps.length - 1 && <Connector />}

                <article
                  className={`relative z-0 flex w-full transform-gpu flex-col items-center rounded-3xl border px-6 pb-8 pt-14 text-center transition-[translate,box-shadow,border-color] duration-300 ease-in-out group-hover/card:-translate-y-1 motion-reduce:transition-none motion-reduce:group-hover/card:translate-y-0 sm:px-8 ${t.card}`}
                >
                  <span
                    className={`flex h-20 w-20 items-center justify-center rounded-full sm:h-24 sm:w-24 ${t.icon}`}
                  >
                    <Icon
                      aria-hidden="true"
                      strokeWidth={1.75}
                      className="h-9 w-9 sm:h-11 sm:w-11"
                    />
                  </span>

                  <h3 className="mt-6 text-xl font-extrabold text-[#0A4033] sm:text-2xl">
                    {title}
                  </h3>

                  <span
                    aria-hidden="true"
                    className={`mt-3 block h-[3px] w-10 rounded-full ${t.underline}`}
                  />

                  <p className="mt-4 max-w-xs text-sm leading-relaxed text-[#26332E] sm:text-base">
                    {description}
                  </p>
                </article>

                {/* Number badge */}
                <span
                  className={`absolute -top-10 left-1/2 z-10 flex h-16 w-16 -translate-x-1/2 items-center justify-center rounded-full bg-white text-xl font-extrabold shadow-[0_10px_24px_-10px_rgba(10,64,51,0.35)] ring-1 ${t.badge}`}
                >
                  <span className="sr-only">
                    {isHi ? "चरण " : "Step "}
                  </span>
                  {no}
                </span>
              </motion.li>
            );
          })}
        </motion.ol>
      </div>
    </section>
  );
}