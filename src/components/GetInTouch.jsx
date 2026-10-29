//border changes

// src/components/GetInTouch.jsx
// import { motion, useReducedMotion } from "framer-motion";
// import { ArrowRight, MapPin, Phone } from "lucide-react";

// // ⚠️ Ensure this import matches the exact filename in your src/assets/images/ folder
// import getInTouchImage from "../assets/images/contact-image.png";

// const container = {
//   hidden: {},
//   show: { transition: { staggerChildren: 0.1 } },
// };

// const fadeUp = {
//   hidden: { opacity: 0, y: 18 },
//   show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
// };

// export default function GetInTouch() {
//   const reduceMotion = useReducedMotion();
//   const initial = reduceMotion ? false : "hidden";

//   return (
//     <section
//       id="contact"
//       aria-labelledby="get-in-touch-heading"
//       className="relative isolate overflow-hidden bg-gradient-to-b from-white via-[#F5F7FB]/60 to-white py-10 sm:py-20 md:-mt-20 lg:py-20"
//     >
//       {/* Subtle decorative ambient glows */}
//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute inset-0 -z-10"
//       >
//         <div className="absolute -left-24 top-10 h-80 w-80 rounded-full bg-[#214779]/[0.04] blur-3xl" />
//         <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-[#EF303B]/[0.04] blur-3xl" />
//       </div>

//       <div className="mx-auto w-full max-w-[1360px] px-4 sm:px-8 lg:px-12 2xl:max-w-[1440px]">
//         {/* Two-column equal-width and equal-height desktop grid */}
//         <div className="grid items-stretch gap-8 lg:grid-cols-2 lg:gap-10 xl:gap-12">
//           {/* Left Column: Heading, Description, Contact Cards, and CTA */}
//           <motion.div
//             variants={container}
//             initial={initial}
//             whileInView="show"
//             viewport={{ once: true, amount: 0.15 }}
//             className="flex min-w-0 flex-col justify-between text-left"
//           >
//             {/* Top Header Group */}
//             <div>
//               <motion.div variants={fadeUp} className="flex items-center gap-3">
//                 <span
//                   aria-hidden="true"
//                   className="h-[2px] w-9 bg-[#EF303B] sm:w-11"
//                 />
//                 <p className="m-0 text-xs font-semibold uppercase tracking-[0.18em] text-[#EF303B] sm:text-[13px]">
//                   GET IN TOUCH
//                 </p>
//               </motion.div>

//               <motion.h2
//                 id="get-in-touch-heading"
//                 variants={fadeUp}
//                 className="mt-4 text-[2rem] font-extrabold leading-[1.12] tracking-tight min-[400px]:text-4xl sm:text-[2.75rem] xl:text-[3rem]"
//               >
//                 <span className="block text-[#102C4D]">Let’s Take the Next</span>
//                 <span className="mt-1 block text-[#EF303B]">Step Together</span>
//               </motion.h2>

//               <motion.div
//                 variants={fadeUp}
//                 aria-hidden="true"
//                 className="mt-4 h-[3px] w-14 rounded-full bg-gradient-to-r from-[#EF303B] to-[#214779]"
//               />

//               <motion.p
//                 variants={fadeUp}
//                 className="mt-5 max-w-xl text-sm leading-relaxed text-[#334155] sm:text-[15px]"
//               >
//                 Have questions about our deposit schemes, loan facilities, or
//                 membership process? Our office can help you understand the
//                 available options and applicable requirements.
//               </motion.p>
//               {/* Mobile and tablet image: directly after the description */}
//             <motion.figure
//             variants={fadeUp}
//             className="group/img relative mt-6 mb-0 aspect-[4/3] w-full overflow-hidden rounded-3xl border border-[#214779]/50 bg-[#F5F7FB] shadow-[0_24px_50px_-24px_rgba(16,44,77,0.60)] transition-[border-color,box-shadow] duration-300 ease-in-out hover:border-[#214779]/90 hover:shadow-[0_28px_56px_-22px_rgba(16,44,77,0.80)] lg:hidden"
//             >
//             <img
//                 src={getInTouchImage}
//                 alt="Customer support representative assisting members at her desk"
//                 loading="lazy"
//                 decoding="async"
//                 className="block h-full w-full transform-gpu object-cover object-center transition-transform duration-500 ease-out group-hover/img:scale-105 motion-reduce:transition-none motion-reduce:group-hover/img:scale-100"
//             />
//             </motion.figure>
//             </div>

//             {/* Bottom Contact Cards & CTA Group */}
//             <div className="mt-7 flex flex-col gap-4 sm:mt-8">
//               {/* 1. Location / Address Card (Stationary outer wrapper prevents hover flicker) */}
//               <motion.div variants={fadeUp} className="group/card">
//                 <div className="transform-gpu rounded-2xl border border-[#EF303B]/60 bg-gradient-to-br from-[#EF303B]/[0.10] to-[#EF303B]/[0.03] p-4 shadow-[0_10px_26px_-20px_rgba(239,48,59,0.55)] transition-[translate,box-shadow,border-color] duration-300 ease-in-out group-hover/card:-translate-y-[3px] group-hover/card:border-[#EF303B]/99 group-hover/card:shadow-[0_18px_38px_-20px_rgba(239,48,59,0.70)] motion-reduce:transition-none motion-reduce:group-hover/card:translate-y-0 sm:p-5">
//                   <div className="flex items-start gap-3.5 sm:gap-4">
//                     <span
//                       aria-hidden="true"
//                       className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#EF303B]/10 text-[#EF303B] transition-colors duration-300 group-hover/card:bg-[#EF303B]/15 sm:h-12 sm:w-12"
//                     >
//                       <MapPin className="h-5 w-5 stroke-[2.2]" />
//                     </span>

//                     <div className="min-w-0 flex-1">
//                       <h3 className="m-0 text-[15px] font-extrabold leading-snug text-[#102C4D] sm:text-base">
//                         Kalyan Urban Co-operative Credit Society Limited
//                       </h3>

//                       <div className="mt-1.5 flex items-center gap-1.5 text-xs font-bold text-[#102C4D]">
//                         <MapPin
//                           aria-hidden="true"
//                           className="h-3.5 w-3.5 shrink-0 text-[#214779]"
//                         />
//                         <span>Head Office Address:</span>
//                       </div>

//                       <p className="m-0 mt-1 text-xs leading-relaxed text-[#334155] sm:text-[13px]">
//                         Beside Sai Ashirwad Motors, Gondia–Balaghat Road,
//                         Rawanwadi, Gondia, Maharashtra.
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>

//               {/* 2. Phone Number Card (Stationary outer wrapper prevents hover flicker) */}
//               <motion.div variants={fadeUp} className="group/card">
//                 <div className="transform-gpu rounded-2xl border border-[#214779]/60 bg-gradient-to-br from-[#214779]/[0.10] to-[#214779]/[0.03] p-4 shadow-[0_10px_26px_-20px_rgba(16,44,77,0.35)] transition-[translate,box-shadow,border-color] duration-300 ease-in-out group-hover/card:-translate-y-[3px] group-hover/card:border-[#214779]/99 group-hover/card:shadow-[0_18px_38px_-20px_rgba(16,44,77,0.70)] motion-reduce:transition-none motion-reduce:group-hover/card:translate-y-0 sm:p-5">
//                   <div className="flex items-center gap-3.5 sm:gap-4">
//                     <span
//                       aria-hidden="true"
//                       className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#214779]/10 text-[#1D63B8] transition-colors duration-300 group-hover/card:bg-[#214779]/15 sm:h-12 sm:w-12"
//                     >
//                       <Phone className="h-5 w-5 fill-current" />
//                     </span>

//                     <div className="min-w-0 flex-1">
//                       <p className="m-0 text-xs font-bold text-[#102C4D]">
//                         Phone Number:
//                       </p>
//                       <a
//                         href="tel:7776000664"
//                         className="mt-0.5 inline-block text-lg font-extrabold tracking-tight text-[#102C4D] transition-colors duration-300 hover:text-[#EF303B] focus-visible:rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#214779]/40 sm:text-xl"
//                       >
//                         7776000664
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>

//               {/* 3. Call Us to Know More CTA Card (Stationary outer wrapper prevents hover flicker) */}
//               <motion.div variants={fadeUp} className="group/card">
//                 <a
//                   href="tel:7776000664"
//                   aria-label="Call Us to Know More at 7776000664"
//                   className="relative flex w-full transform-gpu items-center justify-between overflow-hidden rounded-2xl border border-[#EF303B]/20 bg-gradient-to-r from-[#EF303B] via-[#F23843] to-[#E02430] p-3.5 text-white shadow-[0_14px_28px_-14px_rgba(239,48,59,0.55)] transition-[translate,box-shadow,border-color,filter] duration-300 ease-in-out group-hover/card:-translate-y-[3px] group-hover/card:border-[#EF303B] group-hover/card:shadow-[0_20px_38px_-14px_rgba(239,48,59,0.7)] group-hover/card:brightness-[1.02] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#EF303B]/40 active:translate-y-0 motion-reduce:transition-none motion-reduce:group-hover/card:translate-y-0 sm:p-4"
//                 >
//                   {/* Diagonal sheen matching the screenshot */}
//                   {/* <span
//                     aria-hidden="true"
//                     className="pointer-events-none absolute inset-y-0 left-1/3 w-24 -skew-x-12 bg-white/10 transition-transform duration-500 ease-out group-hover/card:translate-x-10 motion-reduce:transition-none"
//                   /> */}

//                   <span className="relative z-10 flex items-center gap-3.5 sm:gap-4">
//                     <span
//                       aria-hidden="true"
//                       className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-[#EF303B] shadow-sm transition-transform duration-300 ease-in-out group-hover/card:scale-105 motion-reduce:transition-none sm:h-11 sm:w-11"
//                     >
//                       <Phone className="h-4 w-4 fill-current sm:h-5 sm:w-5" />
//                     </span>

//                     <span className="text-sm font-extrabold tracking-wide text-white sm:text-base">
//                       Call Us to Know More
//                     </span>
//                   </span>

//                   <span
//                     aria-hidden="true"
//                     className="relative z-10 mr-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/20 text-white transition-[transform,background-color] duration-300 ease-in-out group-hover/card:translate-x-1 group-hover/card:bg-white/30 motion-reduce:transition-none motion-reduce:group-hover/card:translate-x-0 sm:h-9 sm:w-9"
//                   >
//                     <ArrowRight className="h-4 w-4 stroke-[2.5]" />
//                   </span>
//                 </a>
//               </motion.div>
//             </div>
//           </motion.div>

//           {/* Right Column: Dedicated <img> matching Left Column width and height on desktop */}
//           <motion.div
//             variants={fadeUp}
//             initial={initial}
//             whileInView="show"
//             viewport={{ once: true, amount: 0.15 }}
//             className="hidden min-w-0 lg:flex lg:h-full"
//           >
//             {/* Stationary figure wrapper with relative + lg:h-full so desktop height adapts automatically to left column */}
//             <figure className="group/img relative m-0 aspect-[4/3] w-full overflow-hidden rounded-3xl border border-[#214779]/50 bg-[#F5F7FB] shadow-[0_24px_50px_-24px_rgba(16,44,77,0.60)] transition-[border-color,box-shadow] duration-300 ease-in-out hover:border-[#214779]/90 hover:shadow-[0_28px_56px_-22px_rgba(16,44,77,0.80)] sm:aspect-[16/11] lg:aspect-auto lg:h-full">
//               <img
//                 src={getInTouchImage}
//                 alt="Customer support representative at Kalyan Urban Co-operative Credit Society Limited assisting members on the phone at her desk with a laptop, plant, and contact icons"
//                 loading="lazy"
//                 decoding="async"
//                 className="block h-full w-full transform-gpu object-cover object-center transition-transform duration-500 ease-out will-change-transform group-hover/img:scale-105 motion-reduce:transition-none motion-reduce:group-hover/img:scale-100 lg:absolute lg:inset-0"
//               />
//             </figure>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }



//enlish hindi swicher 

// src/components/GetInTouch.jsx
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, MapPin, Phone } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import getInTouchImage from "../assets/images/contact-image.png";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
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

export default function GetInTouch() {
  const { lang } = useLanguage();
  const isHi = lang === "hi";

  const reduceMotion = useReducedMotion();
  const initial = reduceMotion ? false : "hidden";

  return (
    <section
      id="contact"
      aria-labelledby="get-in-touch-heading"
      className="relative isolate overflow-hidden bg-gradient-to-b from-white via-[#F5F7FB]/60 to-white py-10 sm:py-20 md:-mt-20 lg:py-20"
    >
      {/* Subtle decorative ambient glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute -left-24 top-10 h-80 w-80 rounded-full bg-[#214779]/[0.04] blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-[#EF303B]/[0.04] blur-3xl" />
      </div>

      <div className="mx-auto w-full max-w-[1360px] px-4 sm:px-8 lg:px-12 2xl:max-w-[1440px]">
        {/* Two-column contact layout */}
        <div className="grid items-stretch gap-8 lg:grid-cols-2 lg:gap-10 xl:gap-12">
          {/* Left Column: Heading, Description, Contact Cards, and CTA */}
          <motion.div
            variants={container}
            initial={initial}
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="flex min-w-0 flex-col justify-between text-left"
          >
            {/* Header Group */}
            <div>
              <motion.div
                variants={fadeUp}
                className="flex items-center gap-3"
              >
                <span
                  aria-hidden="true"
                  className="h-[2px] w-9 bg-[#EF303B] sm:w-11"
                />
                <p className="m-0 text-xs font-semibold uppercase tracking-[0.18em] text-[#EF303B] sm:text-[13px]">
                  {isHi ? "संपर्क करें" : "GET IN TOUCH"}
                </p>
              </motion.div>

              <motion.h2
                id="get-in-touch-heading"
                variants={fadeUp}
                className="mt-4 text-[2rem] font-extrabold leading-[1.12] tracking-tight min-[400px]:text-4xl sm:text-[2.75rem] xl:text-[3rem]"
              >
                <span className="block text-[#102C4D]">
                  {isHi ? "आइए, अगला कदम" : "Let’s Take the Next"}
                </span>
                <span className="mt-1 block text-[#EF303B]">
                  {isHi ? "साथ मिलकर बढ़ाएँ" : "Step Together"}
                </span>
              </motion.h2>

              <motion.div
                variants={fadeUp}
                aria-hidden="true"
                className="mt-4 h-[3px] w-14 rounded-full bg-gradient-to-r from-[#EF303B] to-[#214779]"
              />

              <motion.p
                variants={fadeUp}
                className="mt-5 max-w-xl text-sm leading-relaxed text-[#334155] sm:text-[15px]"
              >
                {isHi
                  ? "क्या आपको हमारी जमा योजनाओं, ऋण सुविधाओं या सदस्यता प्रक्रिया के बारे में जानकारी चाहिए? हमारा कार्यालय आपको उपलब्ध विकल्पों और लागू आवश्यकताओं को समझने में सहायता कर सकता है।"
                  : "Have questions about our deposit schemes, loan facilities, or membership process? Our office can help you understand the available options and applicable requirements."}
              </motion.p>

              {/* Mobile and tablet image */}
              <motion.figure
                variants={fadeUp}
                className="group/img relative mt-6 mb-0 aspect-[4/3] w-full overflow-hidden rounded-3xl border border-[#214779]/50 bg-[#F5F7FB] shadow-[0_24px_50px_-24px_rgba(16,44,77,0.60)] transition-[border-color,box-shadow] duration-300 ease-in-out hover:border-[#214779]/90 hover:shadow-[0_28px_56px_-22px_rgba(16,44,77,0.80)] lg:hidden"
              >
                <img
                  src={getInTouchImage}
                  alt={
                    isHi
                      ? "कल्याण अर्बन कार्यालय में सदस्यों की सहायता करती ग्राहक सेवा प्रतिनिधि"
                      : "Customer support representative assisting members at her desk"
                  }
                  loading="lazy"
                  decoding="async"
                  className="block h-full w-full transform-gpu object-cover object-center transition-transform duration-500 ease-out group-hover/img:scale-105 motion-reduce:transition-none motion-reduce:group-hover/img:scale-100"
                />
              </motion.figure>
            </div>

            {/* Contact Cards and CTA */}
            <div className="mt-7 flex flex-col gap-4 sm:mt-8">
              {/* Address Card */}
              <motion.div variants={fadeUp} className="group/card">
                <div className="transform-gpu rounded-2xl border border-[#EF303B]/60 bg-gradient-to-br from-[#EF303B]/[0.10] to-[#EF303B]/[0.03] p-4 shadow-[0_10px_26px_-20px_rgba(239,48,59,0.55)] transition-[translate,box-shadow,border-color] duration-300 ease-in-out group-hover/card:-translate-y-[3px] group-hover/card:border-[#EF303B]/99 group-hover/card:shadow-[0_18px_38px_-20px_rgba(239,48,59,0.70)] motion-reduce:transition-none motion-reduce:group-hover/card:translate-y-0 sm:p-5">
                  <div className="flex items-start gap-3.5 sm:gap-4">
                    <span
                      aria-hidden="true"
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#EF303B]/10 text-[#EF303B] transition-colors duration-300 group-hover/card:bg-[#EF303B]/15 sm:h-12 sm:w-12"
                    >
                      <MapPin className="h-5 w-5 stroke-[2.2]" />
                    </span>

                    <div className="min-w-0 flex-1">
                      <h3 className="m-0 text-[15px] font-extrabold leading-snug text-[#102C4D] sm:text-base">
                        Kalyan Urban Co-operative Credit Society Limited
                      </h3>

                      <div className="mt-1.5 flex items-center gap-1.5 text-xs font-bold text-[#102C4D]">
                        <MapPin
                          aria-hidden="true"
                          className="h-3.5 w-3.5 shrink-0 text-[#214779]"
                        />
                        <span>
                          {isHi ? "मुख्य कार्यालय का पता:" : "Head Office Address:"}
                        </span>
                      </div>

                      <p className="m-0 mt-1 text-xs leading-relaxed text-[#334155] sm:text-[13px]">
                        {isHi
                          ? "साई आशीर्वाद मोटर्स के पास, गोंदिया–बालाघाट रोड, रावनवाड़ी, गोंदिया, महाराष्ट्र।"
                          : "Beside Sai Ashirwad Motors, Gondia–Balaghat Road, Rawanwadi, Gondia, Maharashtra."}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Phone Number Card */}
              <motion.div variants={fadeUp} className="group/card">
                <div className="transform-gpu rounded-2xl border border-[#214779]/60 bg-gradient-to-br from-[#214779]/[0.10] to-[#214779]/[0.03] p-4 shadow-[0_10px_26px_-20px_rgba(16,44,77,0.35)] transition-[translate,box-shadow,border-color] duration-300 ease-in-out group-hover/card:-translate-y-[3px] group-hover/card:border-[#214779]/99 group-hover/card:shadow-[0_18px_38px_-20px_rgba(16,44,77,0.70)] motion-reduce:transition-none motion-reduce:group-hover/card:translate-y-0 sm:p-5">
                  <div className="flex items-center gap-3.5 sm:gap-4">
                    <span
                      aria-hidden="true"
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#214779]/10 text-[#1D63B8] transition-colors duration-300 group-hover/card:bg-[#214779]/15 sm:h-12 sm:w-12"
                    >
                      <Phone className="h-5 w-5 fill-current" />
                    </span>

                    <div className="min-w-0 flex-1">
                      <p className="m-0 text-xs font-bold text-[#102C4D]">
                        {isHi ? "फ़ोन नंबर:" : "Phone Number:"}
                      </p>
                      <a
                        href="tel:7776000664"
                        className="mt-0.5 inline-block text-lg font-extrabold tracking-tight text-[#102C4D] transition-colors duration-300 hover:text-[#EF303B] focus-visible:rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#214779]/40 sm:text-xl"
                      >
                        7776000664
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Call to Action */}
              <motion.div variants={fadeUp} className="group/card">
                <a
                  href="tel:7776000664"
                  aria-label={
                    isHi
                      ? "अधिक जानकारी के लिए 7776000664 पर कॉल करें"
                      : "Call Us to Know More at 7776000664"
                  }
                  className="relative flex w-full transform-gpu items-center justify-between overflow-hidden rounded-2xl border border-[#EF303B]/20 bg-gradient-to-r from-[#EF303B] via-[#F23843] to-[#E02430] p-3.5 text-white shadow-[0_14px_28px_-14px_rgba(239,48,59,0.55)] transition-[translate,box-shadow,border-color,filter] duration-300 ease-in-out group-hover/card:-translate-y-[3px] group-hover/card:border-[#EF303B] group-hover/card:shadow-[0_20px_38px_-14px_rgba(239,48,59,0.7)] group-hover/card:brightness-[1.02] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#EF303B]/40 active:translate-y-0 motion-reduce:transition-none motion-reduce:group-hover/card:translate-y-0 sm:p-4"
                >
                  <span className="relative z-10 flex items-center gap-3.5 sm:gap-4">
                    <span
                      aria-hidden="true"
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-[#EF303B] shadow-sm transition-transform duration-300 ease-in-out group-hover/card:scale-105 motion-reduce:transition-none sm:h-11 sm:w-11"
                    >
                      <Phone className="h-4 w-4 fill-current sm:h-5 sm:w-5" />
                    </span>

                    <span className="text-sm font-extrabold tracking-wide text-white sm:text-base">
                      {isHi ? "अधिक जानकारी के लिए कॉल करें" : "Call Us to Know More"}
                    </span>
                  </span>

                  <span
                    aria-hidden="true"
                    className="relative z-10 mr-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/20 text-white transition-[transform,background-color] duration-300 ease-in-out group-hover/card:translate-x-1 group-hover/card:bg-white/30 motion-reduce:transition-none motion-reduce:group-hover/card:translate-x-0 sm:h-9 sm:w-9"
                  >
                    <ArrowRight className="h-4 w-4 stroke-[2.5]" />
                  </span>
                </a>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column: Dedicated Image — desktop only */}
          <motion.div
            variants={fadeUp}
            initial={initial}
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="hidden min-w-0 lg:flex lg:h-full"
          >
            <figure className="group/img relative m-0 aspect-[4/3] w-full overflow-hidden rounded-3xl border border-[#214779]/50 bg-[#F5F7FB] shadow-[0_24px_50px_-24px_rgba(16,44,77,0.60)] transition-[border-color,box-shadow] duration-300 ease-in-out hover:border-[#214779]/90 hover:shadow-[0_28px_56px_-22px_rgba(16,44,77,0.80)] sm:aspect-[16/11] lg:aspect-auto lg:h-full">
              <img
                src={getInTouchImage}
                alt={
                  isHi
                    ? "कल्याण अर्बन में सदस्यों की सहायता करती ग्राहक सेवा प्रतिनिधि"
                    : "Customer support representative at Kalyan Urban assisting members on the phone at her desk"
                }
                loading="lazy"
                decoding="async"
                className="block h-full w-full transform-gpu object-cover object-center transition-transform duration-500 ease-out will-change-transform group-hover/img:scale-105 motion-reduce:transition-none motion-reduce:group-hover/img:scale-100 lg:absolute lg:inset-0"
              />
            </figure>
          </motion.div>
        </div>
      </div>
    </section>
  );
}