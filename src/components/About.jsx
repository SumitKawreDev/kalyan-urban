
// //border inhance 


// // src/components/About.jsx
// import { motion, useReducedMotion } from "framer-motion";
// import { ArrowRight, Target, Eye, ZoomIn } from "lucide-react";

// // ⚠️ Update this path to your actual finance-themed image in the project assets.
// import aboutImage from "../assets/images/about-finance.png";

// const cards = [
//   {
//     icon: Target,
//     title: "Our Mission",
//     description:
//       "To encourage financial discipline, promote savings, and provide accessible information about financial services to our members.",
//     tone: "orange",
//   },
//   {
//     icon: Eye,
//     title: "Our Vision",
//     description:
//       "To build long-term relationships with our members through trust, transparency, and responsible service.",
//     tone: "green",
//   },
// ];

// const toneStyles = {
//   orange: {
//     card: "border-[#ED6E21]/65 bg-gradient-to-br from-[#ED6E21]/[0.13] to-[#ED6E21]/[0.04] shadow-[0_10px_28px_-18px_rgba(237,110,33,0.55)] group-hover/card:border-[#ED6E21]/100 group-hover/card:shadow-[0_20px_40px_-18px_rgba(237,110,33,0.70)]",
//     iconWrap: "bg-[#ED6E21]/20 text-[#ED6E21]",
//     underline: "bg-[#ED6E21]",
//     arrow: 
//       "border-[#ED6E21]/60 text-[#ED6E21] group-hover/card:border-[#ED6E21] group-hover/card:bg-[#ED6E21] group-hover/card:text-white",
//   },
//   green: {
//     card: "border-[#0F5743]/65 bg-gradient-to-br from-[#0F5743]/[0.13] to-[#0F5743]/[0.04] shadow-[0_10px_28px_-18px_rgba(10,64,51,0.55)] group-hover/card:border-[#0F5743]/99 group-hover/card:shadow-[0_20px_40px_-18px_rgba(10,64,51,0.70)]",
//     iconWrap: "bg-[#0F5743]/20 text-[#0F5743]",
//     underline: "bg-[#0F5743]",
//     arrow: 
//       "border-[#0F5743]/60 text-[#0F5743] group-hover/card:border-[#0F5743] group-hover/card:bg-[#0F5743] group-hover/card:text-white",
//   },
// };

// const container = {
//   hidden: {},
//   show: { transition: { staggerChildren: 0.12 } },
// };

// const fadeUp = {
//   hidden: { opacity: 0, y: 20 },
//   show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
// };

// export default function About() {
//   const reduceMotion = useReducedMotion();
//   const initial = reduceMotion ? false : "hidden";

//   return (
//     <section
//       id="about"
//       aria-labelledby="about-heading"
//       className="relative isolate overflow-hidden bg-[#F3F8F5]/60 bg-white py-5 sm:py-20 lg:py-20"
//     >
//       {/* Subtle decorative shapes */}
//       <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
//         <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-[#F3F8F5] blur-2xl sm:h-96 sm:w-96" />
//         <div className="absolute -right-16 -top-10 h-56 w-56 rounded-full bg-[#ED6E21]/[0.05] blur-2xl sm:h-72 sm:w-72" />
//         <div className="absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-[#0F5743]/[0.05] sm:h-80 sm:w-80" />
//       </div>

//       <div className="mx-auto w-full max-w-[1360px] px-4 sm:px-8 lg:px-10 2xl:max-w-[1440px]">
//         {/* Top row: intro (left) + image (right) */}
//         <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-20">
//           {/* Left: introduction */}
//           <motion.div
//             variants={container}
//             initial={initial}
//             whileInView="show"
//             viewport={{ once: true, amount: 0.2 }}
//             className="min-w-0 text-left"
//           >
//             <motion.div variants={fadeUp} className="flex items-center gap-3">
//               <span aria-hidden="true" className="h-[2px] w-10 bg-[#ED6E21] sm:w-12" />
//               <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#ED6E21] sm:text-sm">
//                 About Us
//               </p>
//             </motion.div>

//             <motion.h2
//               id="about-heading"
//               variants={fadeUp}
//               className="mt-5 text-[1.9rem] font-extrabold leading-[1.12] tracking-tight min-[400px]:text-4xl sm:text-5xl xl:text-[3.25rem]"
//             >
//               <span className="block text-[#0A4033]">A Trusted Partner for</span>
//               <span className="block text-[#ED6E21]">Your Financial Journey</span>
//             </motion.h2>

//             <motion.div
//               variants={fadeUp}
//               aria-hidden="true"
//               className="mt-6 h-1 w-16 rounded-full bg-gradient-to-r from-[#0F5743] to-[#ED6E21]"
//             />

//             <motion.p
//               variants={fadeUp}
//               className="mt-7 max-w-xl text-base leading-relaxed text-[#26332E] sm:text-lg"
//             >
//               At Kalyan Urban Co-operative Credit Society Limited, we believe that
//               financial confidence begins with the right information and
//               responsible financial planning.
//             </motion.p>

//             <motion.p
//               variants={fadeUp}
//               className="mt-5 max-w-xl text-base leading-relaxed text-[#26332E] sm:text-lg"
//             >
//               Our aim is to encourage regular savings and provide our members with
//               information about available deposit schemes and credit facilities.
//               We strive to maintain a transparent, member-focused approach while
//               delivering services in accordance with applicable policies and
//               eligibility requirements.
//             </motion.p>
//           </motion.div>

//           {/* Right: image (stationary wrapper = hover trigger, only <img> scales) */}
//           <motion.figure
//             variants={fadeUp}
//             initial={initial}
//             whileInView="show"
//             viewport={{ once: true, amount: 0.2 }}
//             className="group/img relative m-0 w-full min-w-0 overflow-hidden rounded-2xl border border-[#0F5743]/60 bg-[#F3F8F5] shadow-[0_24px_50px_-24px_rgba(10,64,51,0.60)] transition-[border-color,box-shadow] duration-300 ease-in-out hover:border-[#0F5743]/99 hover:shadow-[0_28px_56px_-22px_rgba(10,64,51,0.80)] sm:rounded-3xl"
//           >
//             <img
//               src={aboutImage}
//               alt="Ascending stacks of coins beside a jar of coins with a green plant growing from it, and a small wooden house, symbolising savings and growth"
//               width={1634}
//               height={963}
//               loading="lazy"
//               decoding="async"
//               className="block aspect-[4/3] h-auto w-full transform-gpu object-cover object-[78%_center] transition-[scale] duration-500 ease-out will-change-transform group-hover/img:scale-[1.04] sm:aspect-[16/11] lg:aspect-[1.47/1] motion-reduce:transition-none motion-reduce:group-hover/img:scale-100"
//             />
//             {/* Decorative zoom badge (purely visual) */}
//             {/* <span
//               aria-hidden="true"
//               className="pointer-events-none absolute left-[62%] top-[34%] hidden h-11 w-11 items-center justify-center rounded-full bg-white text-[#0A4033] shadow-[0_8px_20px_-6px_rgba(10,64,51,0.4)] sm:flex"
//             >
//               <ZoomIn className="h-5 w-5" />
//             </span> */}
//           </motion.figure>
//         </div>

//         {/* Bottom row: Mission + Vision, full width, equal height */}
//         <motion.ul
//           variants={container}
//           initial={initial}
//           whileInView="show"
//           viewport={{ once: true, amount: 0.15 }}
//           className="m-0 mt-10 grid list-none grid-cols-1 gap-5 p-0 sm:mt-12 sm:gap-6 md:grid-cols-2 lg:mt-14 lg:gap-8"
//         >
//           {cards.map(({ icon: Icon, title, description, tone }) => {
//             const s = toneStyles[tone];
//             return (
//               // Stationary hover trigger so the lifted card can't cause flicker.
//               <motion.li key={title} variants={fadeUp} className="group/card flex">
//                 <article
//                   className={`flex w-full transform-gpu items-start gap-4 rounded-2xl border p-5 transition-[translate,box-shadow,border-color] duration-300 ease-in-out group-hover/card:-translate-y-[5px] motion-reduce:transition-none motion-reduce:group-hover/card:translate-y-0 sm:gap-5 sm:p-6 lg:p-7 ${s.card}`}
//                 >
//                   <span
//                     className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full sm:h-16 sm:w-16 lg:h-[72px] lg:w-[72px] ${s.iconWrap}`}
//                   >
//                     <Icon
//                       aria-hidden="true"
//                       strokeWidth={1.75}
//                       className="h-7 w-7 sm:h-8 sm:w-8 lg:h-9 lg:w-9"
//                     />
//                   </span>

//                   <div className="min-w-0 flex-1">
//                     <h3 className="text-xl font-extrabold text-[#0A4033] sm:text-2xl">
//                       {title}
//                     </h3>
//                     <span
//                       aria-hidden="true"
//                       className={`mt-2 block h-[3px] w-8 rounded-full ${s.underline}`}
//                     />
//                     <p className="mt-3 text-sm leading-relaxed text-[#26332E] sm:text-base">
//                       {description}
//                     </p>
//                   </div>

//                   <span
//                     aria-hidden="true"
//                     className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border bg-white/70 transition-[background-color,border-color,color] duration-300 ease-in-out motion-reduce:transition-none sm:h-11 sm:w-11 ${s.arrow}`}
//                   >
//                     <ArrowRight className="h-4 w-4 transition-[translate] duration-300 ease-in-out group-hover/card:translate-x-[3px] motion-reduce:transition-none motion-reduce:group-hover/card:translate-x-0 sm:h-5 sm:w-5" />
//                   </span>
//                 </article>
//               </motion.li>
//             );
//           })}
//         </motion.ul>
//       </div>
//     </section>
//   );
// }




// english hindi swicher 

// src/components/About.jsx
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Target, Eye } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

// ⚠️ Update this path to your actual finance-themed image in the project assets.
import aboutImage from "../assets/images/about-finance.png";

const aboutContent = {
  en: {
    eyebrow: "About Us",
    headingLine1: "A Trusted Partner for",
    headingLine2: "Your Financial Journey",
    para1:
      "At Kalyan Urban Co-operative Credit Society Limited, we believe that financial confidence begins with the right information and responsible financial planning.",
    para2:
      "Our aim is to encourage regular savings and provide our members with information about available deposit schemes and credit facilities. We strive to maintain a transparent, member-focused approach while delivering services in accordance with applicable policies and eligibility requirements.",
    imageAlt:
      "Ascending stacks of coins beside a jar of coins with a green plant growing from it, and a small wooden house, symbolising savings and growth",
    cards: [
      {
        icon: Target,
        title: "Our Mission",
        description:
          "To encourage financial discipline, promote savings, and provide accessible information about financial services to our members.",
        tone: "orange",
      },
      {
        icon: Eye,
        title: "Our Vision",
        description:
          "To build long-term relationships with our members through trust, transparency, and responsible service.",
        tone: "green",
      },
    ],
  },
  hi: {
    eyebrow: "हमारे बारे में",
    headingLine1: "आपकी वित्तीय यात्रा के लिए",
    headingLine2: "एक विश्वसनीय साथी",
    para1:
      "कल्याण अर्बन को-ऑपरेटिव क्रेडिट सोसायटी लिमिटेड में, हमारा मानना है कि वित्तीय आत्मविश्वास सही जानकारी और जिम्मेदार वित्तीय योजना से शुरू होता है।",
    para2:
      "हमारा उद्देश्य नियमित बचत को प्रोत्साहित करना और अपने सदस्यों को उपलब्ध जमा योजनाओं तथा ऋण सुविधाओं के बारे में सटीक जानकारी प्रदान करना है। हम लागू नीतियों और पात्रता आवश्यकताओं के अनुसार सेवाएँ प्रदान करते हुए एक पारदर्शी और सदस्य-केंद्रित दृष्टिकोण बनाए रखने का प्रयास करते हैं।",
    imageAlt:
      "सिक्कों के बढ़ते ढेर, पौधे के साथ सिक्कों का जार और एक छोटा घर, जो बचत और विकास का प्रतीक है",
    cards: [
      {
        icon: Target,
        title: "हमारा उद्देश्य",
        description:
          "वित्तीय अनुशासन को प्रोत्साहित करना, बचत को बढ़ावा देना और अपने सदस्यों को वित्तीय सेवाओं के बारे में सुलभ जानकारी प्रदान करना।",
        tone: "orange",
      },
      {
        icon: Eye,
        title: "हमारी दृष्टि",
        description:
          "विश्वास, पारदर्शिता और जिम्मेदार सेवा के माध्यम से अपने सदस्यों के साथ दीर्घकालिक संबंध बनाना।",
        tone: "green",
      },
    ],
  },
};

const toneStyles = {
  orange: {
    card: "border-[#ED6E21]/65 bg-gradient-to-br from-[#ED6E21]/[0.13] to-[#ED6E21]/[0.04] shadow-[0_10px_28px_-18px_rgba(237,110,33,0.55)] group-hover/card:border-[#ED6E21]/100 group-hover/card:shadow-[0_20px_40px_-18px_rgba(237,110,33,0.70)]",
    iconWrap: "bg-[#ED6E21]/20 text-[#ED6E21]",
    underline: "bg-[#ED6E21]",
    arrow:
      "border-[#ED6E21]/60 text-[#ED6E21] group-hover/card:border-[#ED6E21] group-hover/card:bg-[#ED6E21] group-hover/card:text-white",
  },
  green: {
    card: "border-[#0F5743]/65 bg-gradient-to-br from-[#0F5743]/[0.13] to-[#0F5743]/[0.04] shadow-[0_10px_28px_-18px_rgba(10,64,51,0.55)] group-hover/card:border-[#0F5743]/99 group-hover/card:shadow-[0_20px_40px_-18px_rgba(10,64,51,0.70)]",
    iconWrap: "bg-[#0F5743]/20 text-[#0F5743]",
    underline: "bg-[#0F5743]",
    arrow:
      "border-[#0F5743]/60 text-[#0F5743] group-hover/card:border-[#0F5743] group-hover/card:bg-[#0F5743] group-hover/card:text-white",
  },
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function About() {
  const { lang } = useLanguage();
  const reduceMotion = useReducedMotion();
  const initial = reduceMotion ? false : "hidden";

  const copy = aboutContent[lang] || aboutContent.en;

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative isolate overflow-hidden bg-[#F3F8F5]/60 bg-white py-5 sm:py-20 lg:py-20"
    >
      {/* Subtle decorative shapes */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-[#F3F8F5] blur-2xl sm:h-96 sm:w-96" />
        <div className="absolute -right-16 -top-10 h-56 w-56 rounded-full bg-[#ED6E21]/[0.05] blur-2xl sm:h-72 sm:w-72" />
        <div className="absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-[#0F5743]/[0.05] sm:h-80 sm:w-80" />
      </div>

      <div className="mx-auto w-full max-w-[1360px] px-4 sm:px-8 lg:px-10 2xl:max-w-[1440px]">
        {/* Top row: intro (left) + image (right) */}
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-20">
          {/* Left: introduction */}
          <motion.div
            variants={container}
            initial={initial}
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="min-w-0 text-left"
          >
            <motion.div variants={fadeUp} className="flex items-center gap-3">
              <span aria-hidden="true" className="h-[2px] w-10 bg-[#ED6E21] sm:w-12" />
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#ED6E21] sm:text-sm">
                {copy.eyebrow}
              </p>
            </motion.div>

            <motion.h2
              id="about-heading"
              variants={fadeUp}
              className="mt-5 text-[1.9rem] font-extrabold leading-[1.12] tracking-tight min-[400px]:text-4xl sm:text-5xl xl:text-[3.25rem]"
            >
              <span className="block text-[#0A4033]">{copy.headingLine1}</span>
              <span className="block text-[#ED6E21]">{copy.headingLine2}</span>
            </motion.h2>

            <motion.div
              variants={fadeUp}
              aria-hidden="true"
              className="mt-6 h-1 w-16 rounded-full bg-gradient-to-r from-[#0F5743] to-[#ED6E21]"
            />

            <motion.p
              variants={fadeUp}
              className="mt-7 max-w-xl text-base leading-relaxed text-[#26332E] sm:text-lg"
            >
              {copy.para1}
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="mt-5 max-w-xl text-base leading-relaxed text-[#26332E] sm:text-lg"
            >
              {copy.para2}
            </motion.p>
          </motion.div>

          {/* Right: image (stationary wrapper = hover trigger, only <img> scales) */}
          <motion.figure
            variants={fadeUp}
            initial={initial}
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="group/img relative m-0 w-full min-w-0 overflow-hidden rounded-2xl border border-[#0F5743]/60 bg-[#F3F8F5] shadow-[0_24px_50px_-24px_rgba(10,64,51,0.60)] transition-[border-color,box-shadow] duration-300 ease-in-out hover:border-[#0F5743]/99 hover:shadow-[0_28px_56px_-22px_rgba(10,64,51,0.80)] sm:rounded-3xl"
          >
            <img
              src={aboutImage}
              alt={copy.imageAlt}
              width={1634}
              height={963}
              loading="lazy"
              decoding="async"
              className="block aspect-[4/3] h-auto w-full transform-gpu object-cover object-[78%_center] transition-[scale] duration-500 ease-out will-change-transform group-hover/img:scale-[1.04] sm:aspect-[16/11] lg:aspect-[1.47/1] motion-reduce:transition-none motion-reduce:group-hover/img:scale-100"
            />
          </motion.figure>
        </div>

        {/* Bottom row: Mission + Vision, full width, equal height */}
        <motion.ul
          variants={container}
          initial={initial}
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="m-0 mt-10 grid list-none grid-cols-1 gap-5 p-0 sm:mt-12 sm:gap-6 md:grid-cols-2 lg:mt-14 lg:gap-8"
        >
          {copy.cards.map(({ icon: Icon, title, description, tone }) => {
            const s = toneStyles[tone];
            return (
              // Stationary hover trigger so the lifted card can't cause flicker.
              <motion.li key={tone} variants={fadeUp} className="group/card flex">
                <article
                  className={`flex w-full transform-gpu items-start gap-4 rounded-2xl border p-5 transition-[translate,box-shadow,border-color] duration-300 ease-in-out group-hover/card:-translate-y-[5px] motion-reduce:transition-none motion-reduce:group-hover/card:translate-y-0 sm:gap-5 sm:p-6 lg:p-7 ${s.card}`}
                >
                  <span
                    className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full sm:h-16 sm:w-16 lg:h-[72px] lg:w-[72px] ${s.iconWrap}`}
                  >
                    <Icon
                      aria-hidden="true"
                      strokeWidth={1.75}
                      className="h-7 w-7 sm:h-8 sm:w-8 lg:h-9 lg:w-9"
                    />
                  </span>

                  <div className="min-w-0 flex-1">
                    <h3 className="text-xl font-extrabold text-[#0A4033] sm:text-2xl">
                      {title}
                    </h3>
                    <span
                      aria-hidden="true"
                      className={`mt-2 block h-[3px] w-8 rounded-full ${s.underline}`}
                    />
                    <p className="mt-3 text-sm leading-relaxed text-[#26332E] sm:text-base">
                      {description}
                    </p>
                  </div>

                  <span
                    aria-hidden="true"
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border bg-white/70 transition-[background-color,border-color,color] duration-300 ease-in-out motion-reduce:transition-none sm:h-11 sm:w-11 ${s.arrow}`}
                  >
                    <ArrowRight className="h-4 w-4 transition-[translate] duration-300 ease-in-out group-hover/card:translate-x-[3px] motion-reduce:transition-none motion-reduce:group-hover/card:translate-x-0 sm:h-5 sm:w-5" />
                  </span>
                </article>
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
    </section>
  );
}