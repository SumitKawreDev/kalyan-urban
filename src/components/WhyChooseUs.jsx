// // src/components/WhyChooseUs.jsx
// import { motion, useReducedMotion } from "framer-motion";
// import {
//   ArrowRight,
//   Coins,
//   LayoutGrid,
//   MessageCircle,
//   ShieldCheck,
//   Users,
// } from "lucide-react";

// // ⚠️ Update this path to your actual family finance image in the project assets.
// import familyImage from "../assets/images/why-choose-us-family.png";

// const features = [
//   {
//     icon: Users,
//     title: "Member-Focused Approach",
//     description:
//       "We aim to understand our members' needs and provide relevant information about available financial services.",
//     tone: "red",
//   },
//   {
//     icon: MessageCircle,
//     title: "Transparent Communication",
//     description:
//       "We encourage informed decisions through clear information about scheme conditions and eligibility.",
//     tone: "blue",
//   },
//   {
//     icon: Coins,
//     title: "Savings-Oriented Solutions",
//     description: "Explore different savings options to support your financial planning.",
//     tone: "red",
//   },
//   {
//     icon: LayoutGrid,
//     title: "Multiple Financial Services",
//     description:
//       "Access information about available deposit schemes and credit facilities in one place.",
//     tone: "blue",
//   },
//   {
//     icon: ShieldCheck,
//     title: "Responsible Service",
//     description:
//       "Our services are provided in accordance with applicable policies, procedures, and requirements.",
//     tone: "red",
//   },
// ];

// const tones = {
//   red: {
//     card: "border-[#EF303B]/15 bg-gradient-to-br from-[#EF303B]/[0.07] to-[#EF303B]/[0.025] shadow-[0_10px_26px_-20px_rgba(239,48,59,0.4)] group-hover/card:border-[#EF303B]/35 group-hover/card:shadow-[0_18px_38px_-20px_rgba(239,48,59,0.4)]",
//     icon: "bg-[#EF303B]/12 text-[#EF303B]",
//     underline: "bg-[#EF303B]",
//     arrow:
//       "border-[#EF303B]/35 text-[#EF303B] group-hover/card:border-[#EF303B] group-hover/card:bg-[#EF303B] group-hover/card:text-white",
//   },
//   blue: {
//     card: "border-[#214779]/15 bg-gradient-to-br from-[#214779]/[0.07] to-[#214779]/[0.025] shadow-[0_10px_26px_-20px_rgba(16,44,77,0.4)] group-hover/card:border-[#214779]/35 group-hover/card:shadow-[0_18px_38px_-20px_rgba(16,44,77,0.4)]",
//     icon: "bg-[#214779]/12 text-[#214779]",
//     underline: "bg-[#214779]",
//     arrow:
//       "border-[#214779]/35 text-[#214779] group-hover/card:border-[#214779] group-hover/card:bg-[#214779] group-hover/card:text-white",
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

// export default function WhyChooseUs() {
//   const reduceMotion = useReducedMotion();
//   const initial = reduceMotion ? false : "hidden";

//   return (
//     <section
//       id="why-us"
//       aria-labelledby="why-heading"
//       className="relative isolate overflow-hidden bg-gradient-to-b from-white via-[#F5F7FB] to-white py-16 sm:py-20 lg:py-24"
//     >
//       {/* Decorative shapes */}
//       <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
//         <div className="absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-[#EF303B]/[0.05] blur-3xl" />
//         <div className="absolute -right-24 top-0 h-96 w-96 rounded-full bg-[#214779]/[0.05] blur-3xl" />
//         <div className="absolute -left-16 top-1/3 h-64 w-64 rounded-full border-[22px] border-[#EF303B]/[0.06]" />
//       </div>

//       <div className="mx-auto w-full max-w-[1360px] px-4 sm:px-8 lg:px-12 2xl:max-w-[1440px]">
//         <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
//           {/* Left: heading + image */}
//           <motion.div
//             variants={container}
//             initial={initial}
//             whileInView="show"
//             viewport={{ once: true, amount: 0.15 }}
//             className="flex min-w-0 flex-col items-start"
//           >
//             <motion.div variants={fadeUp} className="flex items-center gap-3">
//               <span aria-hidden="true" className="h-[2px] w-10 bg-[#EF303B]" />
//               <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#102C4D] sm:text-sm">
//                 Why Choose Us
//               </p>
//             </motion.div>

//             <motion.h2
//               id="why-heading"
//               variants={fadeUp}
//               className="mt-5 max-w-[520px] text-[2rem] font-extrabold leading-[1.1] tracking-tight min-[400px]:text-4xl sm:text-5xl xl:text-[3.25rem]"
//             >
//               <span className="block text-[#102C4D]">Banking on Trust.</span>
//               <span className="block text-[#EF303B]">Building Financial Confidence.</span>
//             </motion.h2>

//             <motion.div
//               variants={fadeUp}
//               aria-hidden="true"
//               className="mt-5 h-1 w-10 rounded-full bg-gradient-to-r from-[#EF303B] to-[#214779]"
//             />

//             {/* Image: stationary wrapper is the hover trigger; only the img scales */}
//             <motion.figure
//               variants={fadeUp}
//               className="group/img relative m-0 mt-8 w-full overflow-hidden rounded-3xl rounded-tl-[3.5rem] border border-white bg-[#F5F7FB] shadow-[0_24px_50px_-24px_rgba(16,44,77,0.45)] sm:mt-5 sm:rounded-tl-[5rem]"
//             >
//               <img
//                 src={familyImage}
//                 alt="A happy family smiling together beside a piggy bank, coin stacks and a small wooden house, with a shield and growth arrow symbolising financial security"
//                 loading="lazy"
//                 decoding="async"
//                 className="block h-auto max-h-[420px] w-full object-contain object-center transition-transform duration-500 ease-out group-hover/img:scale-[1.02] motion-reduce:transition-none lg:h-full lg:max-h-none lg:object-cover lg:object-[center_45%]"
//               />
//             </motion.figure>
//           </motion.div>

//           {/* Right: five stacked feature cards */}
//           <motion.ul
//             variants={container}
//             initial={initial}
//             whileInView="show"
//             viewport={{ once: true, amount: 0.1 }}
//             className="m-0 flex min-w-0 list-none flex-col gap-3 p-0 sm:gap-4"
//           >
//             {features.map(({ icon: Icon, title, description, tone }) => {
//               const t = tones[tone];
//               return (
//                 // Stationary hover trigger so the lifted card can't cause flicker.
//                 <motion.li key={title} variants={fadeUp} className="group/card flex flex-1">
//                   <article
//                     className={`flex w-full items-center gap-3 rounded-2xl border p-3.5 transition-[transform,box-shadow,border-color] duration-300 ease-in-out group-hover/card:-translate-y-1 motion-reduce:transition-none sm:gap-4 sm:p-4 lg:p-4 xl:gap-5 xl:p-5 ${t.card}`}
//                   >
//                     <span
//                       className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full sm:h-12 sm:w-12 xl:h-14 xl:w-14 ${t.icon}`}
//                     >
//                       <Icon
//                         aria-hidden="true"
//                         strokeWidth={1.75}
//                         className="h-6 w-6 sm:h-8 sm:w-8"
//                       />
//                     </span>

//                     <div className="min-w-0 flex-1">
//                       <h3 className="text-sm font-extrabold leading-snug text-[#102C4D] sm:text-base xl:text-lg">
//                         {title}
//                       </h3>
//                       <span
//                         aria-hidden="true"
//                         className={`mt-2 block h-[3px] w-8 rounded-full ${t.underline}`}
//                       />
//                       <p className="mt-1.5 text-xs leading-relaxed text-[#64748B] sm:text-[13px] xl:text-sm">
//                         {description}
//                       </p>
//                     </div>

//                     <span
//                       aria-hidden="true"
//                       className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border bg-white/80 transition-colors duration-300 sm:h-9 sm:w-9 ${t.arrow}`}
//                     >
//                       <ArrowRight className="h-4 w-4 transition-[translate] duration-300 ease-in-out group-hover/card:translate-x-[3px] motion-reduce:transition-none motion-reduce:group-hover/card:translate-x-0 sm:h-5 sm:w-5" />
//                     </span>
//                   </article>
//                 </motion.li>
//               );
//             })}
//           </motion.ul>
//         </div>
//       </div>
//     </section>
//   );
// }





import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Coins,
  LayoutGrid,
  MessageCircle,
  ShieldCheck,
  Users,
} from "lucide-react";
import familyImage from "../assets/images/why-choose-us-family.png";

const features = [
  {
    icon: Users,
    title: "Member-Focused Approach",
    description:
      "We aim to understand our members' needs and provide relevant information about available financial services.",
    tone: "red",
  },
  {
    icon: MessageCircle,
    title: "Transparent Communication",
    description:
      "We encourage informed decisions through clear information about scheme conditions and eligibility.",
    tone: "blue",
  },
  {
    icon: Coins,
    title: "Savings-Oriented Solutions",
    description:
      "Explore different savings options to support your financial planning.",
    tone: "red",
  },
  {
    icon: LayoutGrid,
    title: "Multiple Financial Services",
    description:
      "Access information about available deposit schemes and credit facilities in one place.",
    tone: "blue",
  },
  {
    icon: ShieldCheck,
    title: "Responsible Service",
    description:
      "Our services are provided in accordance with applicable policies, procedures, and requirements.",
    tone: "red",
  },
];

const tones = {
  red: {
    card: "border-[#EF303B]/60 bg-gradient-to-br from-[#EF303B]/[0.13] to-[#EF303B]/[0.05] shadow-[0_10px_26px_-20px_rgba(239,48,59,0.55)] group-hover/card:border-[#EF303B]/99 group-hover/card:shadow-[0_18px_38px_-20px_rgba(239,48,59,0.70)]",
    icon: "bg-[#EF303B]/20 text-[#EF303B]",
    arrow:
      "border-[#EF303B]/60 text-[#EF303B] group-hover/card:border-[#EF303B] group-hover/card:bg-[#EF303B] group-hover/card:text-white",
  },
  blue: {
    card: "border-[#214779]/60 bg-gradient-to-br from-[#214779]/[0.13] to-[#214779]/[0.05] shadow-[0_10px_26px_-20px_rgba(16,44,77,0.55)] group-hover/card:border-[#214779]/99 group-hover/card:shadow-[0_18px_38px_-20px_rgba(16,44,77,0.70)]",
    icon: "bg-[#214779]/20 text-[#214779]",
    underline: "bg-[#214779]",
    arrow:
      "border-[#214779]/60 text-[#214779] group-hover/card:border-[#214779] group-hover/card:bg-[#214779] group-hover/card:text-white",
  },
};

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: "easeOut",
    },
  },
};

export default function WhyChooseUs() {
  const reduceMotion = useReducedMotion();
  const initial = reduceMotion ? false : "hidden";

  return (
    <section
      id="why-us"
      aria-labelledby="why-heading"
      className="relative isolate overflow-hidden bg-gradient-to-b from-white via-[#F5F7FB] to-white py-5 sm:py-20 md:-mt-20 lg:py-24"
    >
      {/* Decorative background shapes */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-[#EF303B]/[0.05] blur-3xl" />
        <div className="absolute -right-24 top-0 h-96 w-96 rounded-full bg-[#214779]/[0.05] blur-3xl" />
        <div className="absolute -left-16 top-1/3 h-64 w-64 rounded-full border-[22px] border-[#EF303B]/[0.06]" />
      </div>

      <div className="mx-auto w-full max-w-[1360px] px-4 sm:px-8 lg:px-12 2xl:max-w-[1440px]">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          {/* Left: Heading and image */}
          <motion.div
            variants={container}
            initial={initial}
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="flex min-w-0 flex-col items-start"
          >
            <motion.div
              variants={fadeUp}
              className="flex items-center gap-3"
            >
              <span
                aria-hidden="true"
                className="h-[2px] w-10 bg-[#EF303B]"
              />
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#102C4D] sm:text-sm">
                Why Choose Us
              </p>
            </motion.div>

            <motion.h2
              id="why-heading"
              variants={fadeUp}
              className="mt-5 max-w-[520px] text-[2rem] font-extrabold leading-[1.1] tracking-tight min-[400px]:text-4xl sm:text-5xl xl:text-[3.25rem]"
            >
              <span className="block text-[#102C4D]">
                Banking on Trust.
              </span>
              <span className="block text-[#EF303B]">
                Building Financial Confidence.
              </span>
            </motion.h2>

            <motion.div
              variants={fadeUp}
              aria-hidden="true"
              className="mt-5 h-1 w-10 rounded-full bg-gradient-to-r from-[#EF303B] to-[#214779]"
            />

            {/* Family image */}
            <motion.figure
              variants={fadeUp}
              className="group/img relative m-0 mt-8 w-full overflow-hidden rounded-3xl rounded-tl-[3.5rem] border border-[#214779]/50 bg-[#F5F7FB] shadow-[0_24px_50px_-24px_rgba(16,44,77,0.60)] transition-[border-color,box-shadow] duration-300 ease-in-out hover:border-[#214779]/90 hover:shadow-[0_28px_56px_-22px_rgba(16,44,77,0.80)] sm:mt-5 sm:rounded-tl-[5rem]"
            >
              <img
                src={familyImage}
                alt="A happy family smiling together beside a piggy bank, coin stacks and a small wooden house, with a shield and growth arrow symbolising financial security"
                loading="lazy"
                decoding="async"
                className="block h-auto max-h-[720px] w-full object-contain object-center transition-transform duration-500 ease-out group-hover/img:scale-[1.02] motion-reduce:transition-none motion-reduce:group-hover/img:scale-100 lg:h-full lg:max-h-none lg:object-cover lg:object-[center_45%]"
              />
            </motion.figure>
          </motion.div>

          {/* Right: Feature cards */}
          <motion.ul
            variants={container}
            initial={initial}
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="m-0 flex min-w-0 list-none flex-col gap-3 p-0 sm:gap-4"
          >
            {features.map(({ icon: Icon, title, description, tone }) => {
              const t = tones[tone];

              return (
                <motion.li
                  key={title}
                  variants={fadeUp}
                  className="group/card flex flex-1"
                >
                  <article
                    className={`flex w-full items-center gap-3 rounded-2xl border p-3.5 transition-[translate,box-shadow,border-color] duration-300 ease-in-out group-hover/card:-translate-y-1 motion-reduce:transition-none motion-reduce:group-hover/card:translate-y-0 sm:gap-4 sm:p-4 lg:p-4 xl:gap-5 xl:p-5 ${t.card}`}
                  >
                    {/* Feature icon */}
                    <span
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full sm:h-12 sm:w-12 xl:h-14 xl:w-14 ${t.icon}`}
                    >
                      <Icon
                        aria-hidden="true"
                        strokeWidth={1.75}
                        className="h-6 w-6 sm:h-8 sm:w-8"
                      />
                    </span>

                    {/* Feature content */}
                    <div className="min-w-0 flex-1">
                      <h3 className="text-sm font-extrabold leading-snug text-[#102C4D] sm:text-base xl:text-lg">
                        {title}
                      </h3>

                      <span
                        aria-hidden="true"
                        className={`mt-2 block h-[3px] w-8 rounded-full ${t.underline}`}
                      />

                      <p className="mt-1.5 text-xs leading-relaxed text-[#334155] sm:text-[13px] xl:text-sm">
                        {description}
                      </p>
                    </div>

                    {/* Animated arrow */}
                    <span
                      aria-hidden="true"
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border bg-white/80 transition-[background-color,border-color,color] duration-300 ease-in-out motion-reduce:transition-none sm:h-9 sm:w-9 ${t.arrow}`}
                    >
                      <ArrowRight className="h-4 w-4 transition-[translate] duration-300 ease-in-out group-hover/card:translate-x-[3px] motion-reduce:transition-none motion-reduce:group-hover/card:translate-x-0 sm:h-5 sm:w-5" />
                    </span>
                  </article>
                </motion.li>
              );
            })}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
