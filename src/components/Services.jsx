// // src/components/Services.jsx
// import { motion, useReducedMotion } from "framer-motion";
// import {
//   ArrowRight,
//   BarChart3,
//   Briefcase,
//   Car,
//   Coins,
//   Gem,
//   HandCoins,
//   Info,
//   Percent,
//   PiggyBank,
//   ShieldCheck,
//   Tractor,
//   UserCog,
//   Users,
//   Wallet,
//   CalendarDays,
//   TrendingUp,
//   Building2,
//   Sprout,
//   User,
//   Armchair,
// } from "lucide-react";

// // ⚠️ Update this path to your actual bank/coins/plant illustration in the project assets.
// import servicesIllustration from "../assets/images/services-illustration.png";

// const features = [
//   { icon: ShieldCheck, label: "Secure Transactions" },
//   { icon: Users, label: "Member Focused" },
//   { icon: BarChart3, label: "Financial Growth" },
// ];

// const depositSchemes = [
//   {
//     no: "01.",
//     title: "Fixed Deposit (FD)",
//     description:
//       "Plan your savings with a deposit for a specified period. Explore available tenures, applicable interest rates, and scheme conditions.",
//     icon: Percent,
//     deco: CalendarDays,
//   },
//   {
//     no: "02.",
//     title: "Recurring Deposit (RD)",
//     description:
//       "Develop a regular savings habit through periodic deposits and work towards your future financial goals.",
//     icon: PiggyBank,
//     deco: TrendingUp,
//   },
//   {
//     no: "03.",
//     title: "Savings Account",
//     description:
//       "Manage your savings through the available account facility, subject to applicable terms and conditions.",
//     icon: Wallet,
//     deco: User,
//   },
//   {
//     no: "04.",
//     title: "Daily Deposit Scheme",
//     description:
//       "Explore a regular savings option designed for individuals who prefer to deposit smaller amounts frequently.",
//     icon: HandCoins,
//     deco: CalendarDays,
//   },
//   {
//     no: "05.",
//     title: "Monthly Pension Scheme",
//     description:
//       "Learn about available monthly payout options for planned financial needs, subject to scheme terms and eligibility.",
//     icon: UserCog,
//     deco: Armchair,
//   },
// ];

// const loanFacilities = [
//   {
//     no: "06.",
//     title: "Gold Loan",
//     description:
//       "Explore financing options against eligible gold assets, subject to valuation and applicable conditions.",
//     icon: Gem,
//     deco: Coins,
//   },
//   {
//     no: "07.",
//     title: "Vehicle Loan",
//     description:
//       "Find out about available financing options for eligible personal or commercial vehicle purchases.",
//     icon: Car,
//     deco: Car,
//   },
//   {
//     no: "08.",
//     title: "Business Loan",
//     description:
//       "Explore financial assistance options for eligible business requirements and expansion plans.",
//     icon: Briefcase,
//     deco: Building2,
//   },
//   {
//     no: "09.",
//     title: "Agricultural Equipment Loan",
//     description:
//       "Learn about available financing facilities for eligible agricultural equipment and related needs.",
//     icon: Tractor,
//     deco: Sprout,
//   },
// ];

// const tones = {
//   red: {
//     panel:
//       "border-[#EF303B]/20 bg-gradient-to-br from-[#EF303B]/[0.06] via-[#EF303B]/[0.035] to-white shadow-[0_18px_44px_-28px_rgba(239,48,59,0.35)]",
//     headIcon: "bg-[#EF303B]/12 text-[#EF303B]",
//     underline: "bg-[#EF303B]",
//     explore:
//       "border-[#EF303B] text-[#EF303B] hover:bg-[#EF303B] hover:text-white focus-visible:ring-[#EF303B]/40 active:bg-[#d92730] active:text-white",
//     card: "border-[#EF303B]/15 hover:border-[#EF303B]/35 hover:shadow-[0_18px_36px_-20px_rgba(239,48,59,0.4)]",
//     icon: "bg-[#EF303B]/10 text-[#EF303B]",
//     arrow:
//       "border-[#EF303B]/40 text-[#EF303B] group-hover/card:border-[#EF303B] group-hover/card:bg-[#EF303B] group-hover/card:text-white",
//   },
//   blue: {
//     panel:
//       "border-[#214779]/20 bg-gradient-to-br from-[#214779]/[0.07] via-[#214779]/[0.035] to-white shadow-[0_18px_44px_-28px_rgba(16,44,77,0.4)]",
//     headIcon: "bg-[#214779]/12 text-[#214779]",
//     underline: "bg-[#214779]",
//     explore:
//       "border-[#214779] text-[#214779] hover:bg-[#214779] hover:text-white focus-visible:ring-[#214779]/40 active:bg-[#102C4D] active:text-white",
//     card: "border-[#214779]/15 hover:border-[#214779]/35 hover:shadow-[0_18px_36px_-20px_rgba(16,44,77,0.4)]",
//     icon: "bg-[#214779]/10 text-[#214779]",
//     arrow:
//       "border-[#214779]/40 text-[#214779] group-hover/card:border-[#214779] group-hover/card:bg-[#214779] group-hover/card:text-white",
//   },
// };

// const container = {
//   hidden: {},
//   show: { transition: { staggerChildren: 0.08 } },
// };

// const fadeUp = {
//   hidden: { opacity: 0, y: 18 },
//   show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
// };

// function ServiceGroup({
//   tone,
//   headIcon: HeadIcon,
//   title,
//   subtitle,
//   items,
//   gridClass,
//   initial,
// }) {
//   const t = tones[tone];
//   return (
//     <motion.div
//       variants={container}
//       initial={initial}
//       whileInView="show"
//       viewport={{ once: true, amount: 0.1 }}
//       className={`rounded-3xl border p-4 sm:p-6 lg:p-7 ${t.panel}`}
//     >
//       {/* Heading row */}
//       <motion.div
//         variants={fadeUp}
//         className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between lg:gap-6"
//       >
//         <div className="flex min-w-0 flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
//           <span
//             className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full sm:h-16 sm:w-16 ${t.headIcon}`}
//           >
//             <HeadIcon aria-hidden="true" className="h-7 w-7 sm:h-8 sm:w-8" />
//           </span>
//           <div className="min-w-0 sm:flex sm:flex-wrap sm:items-center sm:gap-x-6 sm:gap-y-1">
//             <div>
//               <h3 className="text-2xl font-extrabold text-[#102C4D] sm:text-3xl">
//                 {title}
//               </h3>
//               <span
//                 aria-hidden="true"
//                 className={`mt-1.5 block h-[3px] w-8 rounded-full ${t.underline}`}
//               />
//             </div>
//             <p className="mt-2 max-w-xl text-sm leading-relaxed text-[#64748B] sm:mt-0 sm:text-[15px]">
//               {subtitle}
//             </p>
//           </div>
//         </div>

//         {/* No destination exists yet, so this is intentionally non-navigational. */}
//         {/* <button
//           type="button"
//           className={`group/btn inline-flex min-h-11 shrink-0 items-center justify-center gap-2 self-start rounded-full border bg-white/70 px-6 py-2 text-sm font-semibold transition-[background-color,color,translate,box-shadow] duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-4 active:translate-y-0 motion-reduce:transition-none motion-reduce:hover:translate-y-0 lg:self-center ${t.explore}`}
//         >
//           Explore All
//           <ArrowRight
//             aria-hidden="true"
//             className="h-4 w-4 transition-[translate] duration-300 ease-in-out group-hover/btn:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover/btn:translate-x-0"
//           />
//         </button> */}
//       </motion.div>

//       {/* Cards */}
//       <ul className={`m-0 mt-6 grid list-none gap-4 p-0 sm:gap-5 ${gridClass}`}>
//         {items.map(({ no, title: name, description, icon: Icon, deco: Deco }) => (
//           // Stationary hover trigger so the lifted card can't cause flicker.
//           <motion.li key={no} variants={fadeUp} className="group/card flex">
//             <article
//               className={`relative flex w-full transform-gpu flex-col overflow-hidden rounded-2xl border bg-white/85 p-5 shadow-[0_8px_22px_-16px_rgba(16,44,77,0.25)] transition-[translate,box-shadow,border-color] duration-300 ease-in-out group-hover/card:-translate-y-1 motion-reduce:transition-none motion-reduce:group-hover/card:translate-y-0 ${t.card}`}
//             >
//               <div className="flex items-start justify-between gap-3">
//                 <span className="text-base font-semibold text-[#EF303B]">{no}</span>
//                 <span
//                   className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${t.icon}`}
//                 >
//                   <Icon aria-hidden="true" className="h-5 w-5" />
//                 </span>
//               </div>

//               <h4 className="mt-3 text-lg font-bold leading-snug text-[#102C4D]">
//                 {name}
//               </h4>
//               <p className="mt-2 text-sm leading-relaxed text-[#64748B]">
//                 {description}
//               </p>

//               {/* Footer: faint line-art (left) and arrow badge (right); never overlaps text */}
//               <div className="mt-auto flex items-end justify-between pt-5">
//                 <Deco
//                   aria-hidden="true"
//                   strokeWidth={1.25}
//                   className={`h-10 w-10 opacity-[0.14] ${
//                     tone === "red" ? "text-[#EF303B]" : "text-[#214779]"
//                   }`}
//                 />
//                 <span
//                   aria-hidden="true"
//                   className={`flex h-9 w-9 items-center justify-center rounded-full border bg-white transition-[background-color,border-color,color] duration-300 ease-in-out motion-reduce:transition-none ${t.arrow}`}
//                 >
//                   <ArrowRight className="h-4 w-4 transition-[translate] duration-300 ease-in-out group-hover/card:translate-x-[3px] motion-reduce:transition-none motion-reduce:group-hover/card:translate-x-0" />
//                 </span>
//               </div>
//             </article>
//           </motion.li>
//         ))}
//       </ul>
//     </motion.div>
//   );
// }

// export default function Services() {
//   const reduceMotion = useReducedMotion();
//   const initial = reduceMotion ? false : "hidden";

//   return (
//     <section
//       id="services"
//       aria-labelledby="services-heading"
//       className="relative isolate overflow-hidden bg-gradient-to-b from-white via-[#F5F7FB] to-white py-16 sm:py-20 md:-mt-20 lg:py-20"
//     >
//       {/* Decorative shapes */}
//       <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
//         <div className="absolute -left-28 top-10 h-80 w-80 rounded-full bg-[#214779]/[0.05] blur-3xl" />
//         <div className="absolute -right-24 -top-16 h-96 w-96 rounded-full border-[28px] border-[#EF303B]/[0.07]" />
//         <div className="absolute -right-20 bottom-20 h-72 w-72 rounded-full bg-[#EF303B]/[0.04] blur-3xl" />
//       </div>

//       <div className="mx-auto w-full max-w-[1360px] px-4 sm:px-8 lg:px-10 2xl:max-w-[1440px]">
//         {/* Header */}
//         <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-8">
//           <motion.div
//             variants={container}
//             initial={initial}
//             whileInView="show"
//             viewport={{ once: true, amount: 0.3 }}
//             className="min-w-0 text-left"
//           >
//             <motion.div variants={fadeUp} className="flex items-center gap-3">
//               <span aria-hidden="true" className="h-[2px] w-10 bg-[#EF303B] sm:w-12" />
//               <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#EF303B] sm:text-sm">
//                 Our Services
//               </p>
//             </motion.div>

//             <motion.h2
//               id="services-heading"
//               variants={fadeUp}
//               className="mt-5 text-[2rem] font-extrabold leading-[1.1] tracking-tight min-[400px]:text-4xl sm:text-5xl xl:text-[3.4rem]"
//             >
//               <span className="block text-[#102C4D]">Financial Solutions</span>
//               <span className="block text-[#EF303B]">for Your Needs</span>
//             </motion.h2>

//             <motion.div
//               variants={fadeUp}
//               aria-hidden="true"
//               className="mt-6 h-1 w-16 rounded-full bg-gradient-to-r from-[#EF303B] to-[#214779]"
//             />

//             <motion.p
//               variants={fadeUp}
//               className="mt-6 max-w-xl text-base leading-relaxed text-[#64748B] sm:text-lg"
//             >
//               Explore our available savings schemes and loan facilities to find
//               options that align with your financial requirements.
//             </motion.p>
//           </motion.div>

//           <motion.div
//             variants={fadeUp}
//             initial={initial}
//             whileInView="show"
//             viewport={{ once: true, amount: 0.2 }}
//             className="flex min-w-0 flex-col items-center gap-6 sm:flex-row sm:items-center sm:justify-between lg:gap-4"
//           >
//             {/* Illustration: stationary wrapper is the hover trigger; only the img scales */}
//             <div className="group/img w-full max-w-md overflow-hidden rounded-3xl sm:max-w-none sm:flex-1">
//               <img
//                 src={servicesIllustration}
//                 alt="A classical bank building with stacks of gold coins, a green plant and a rupee coin, symbolising secure savings and growth"
//                 loading="lazy"
//                 decoding="async"
//                 className="block h-auto w-full transform-gpu object-contain transition-[scale] duration-500 ease-out group-hover/img:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover/img:scale-100"
//               />
//             </div>

//             <ul className="m-0 grid w-full max-w-md list-none grid-cols-1 gap-3 p-0 min-[480px]:grid-cols-3 sm:w-auto sm:max-w-none sm:shrink-0 sm:grid-cols-1 sm:gap-4">
//               {features.map(({ icon: Icon, label }) => (
//                 <li key={label} className="flex items-center gap-3">
//                   <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-[#EF303B] shadow-[0_8px_20px_-10px_rgba(239,48,59,0.45)] ring-1 ring-[#EF303B]/15">
//                     <Icon aria-hidden="true" className="h-5 w-5" />
//                   </span>
//                   <span className="max-w-[7.5rem] text-sm font-medium leading-snug text-[#102C4D]">
//                     {label}
//                   </span>
//                 </li>
//               ))}
//             </ul>
//           </motion.div>
//         </div>

//         {/* Groups */}
//         <div className="mt-12 space-y-6 sm:mt-14 lg:space-y-8">
//           <ServiceGroup
//             tone="red"
//             headIcon={Coins}
//             title="Deposit Schemes"
//             subtitle="Build a better tomorrow with our savings schemes designed for your financial goals."
//             items={depositSchemes}
//             initial={initial}
//             gridClass="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 sm:max-lg:[&>li:last-child]:col-span-2"
//           />
//           <ServiceGroup
//             tone="blue"
//             headIcon={HandCoins}
//             title="Loan Facilities"
//             subtitle="Access financial support for your personal, business, and agricultural needs."
//             items={loanFacilities}
//             initial={initial}
//             gridClass="grid-cols-1 sm:grid-cols-2 xl:grid-cols-4"
//           />

//           {/* Disclaimer */}
//           <motion.div
//             variants={fadeUp}
//             initial={initial}
//             whileInView="show"
//             viewport={{ once: true, amount: 0.5 }}
//             role="note"
//             className="flex items-start gap-3 rounded-2xl border border-[#214779]/10 bg-white/80 px-4 py-3 shadow-[0_8px_22px_-18px_rgba(16,44,77,0.3)] sm:items-center sm:px-6"
//           >
//             <Info
//               aria-hidden="true"
//               className="mt-0.5 h-5 w-5 shrink-0 text-[#214779] sm:mt-0"
//             />
//             <p className="text-xs leading-relaxed text-[#64748B] sm:text-sm">
//               All services are subject to availability, eligibility, documentation,
//               applicable policies, and approval requirements.
//             </p>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }






//border new changes 


// src/components/Services.jsx
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Briefcase,
  Car,
  Coins,
  Gem,
  HandCoins,
  Info,
  Percent,
  PiggyBank,
  ShieldCheck,
  Tractor,
  UserCog,
  Users,
  Wallet,
  CalendarDays,
  TrendingUp,
  Building2,
  Sprout,
  User,
  Armchair,
} from "lucide-react";

// ⚠️ Update this path to your actual bank/coins/plant illustration in the project assets.
import servicesIllustration from "../assets/images/services-illustration.png";

const features = [
  { icon: ShieldCheck, label: "Secure Transactions" },
  { icon: Users, label: "Member Focused" },
  { icon: BarChart3, label: "Financial Growth" },
];

const depositSchemes = [
  {
    no: "01.",
    title: "Fixed Deposit (FD)",
    description:
      "Plan your savings with a deposit for a specified period. Explore available tenures, applicable interest rates, and scheme conditions.",
    icon: Percent,
    deco: CalendarDays,
  },
  {
    no: "02.",
    title: "Recurring Deposit (RD)",
    description:
      "Develop a regular savings habit through periodic deposits and work towards your future financial goals.",
    icon: PiggyBank,
    deco: TrendingUp,
  },
  {
    no: "03.",
    title: "Savings Account",
    description:
      "Manage your savings through the available account facility, subject to applicable terms and conditions.",
    icon: Wallet,
    deco: User,
  },
  {
    no: "04.",
    title: "Daily Deposit Scheme",
    description:
      "Explore a regular savings option designed for individuals who prefer to deposit smaller amounts frequently.",
    icon: HandCoins,
    deco: CalendarDays,
  },
  {
    no: "05.",
    title: "Monthly Pension Scheme",
    description:
      "Learn about available monthly payout options for planned financial needs, subject to scheme terms and eligibility.",
    icon: UserCog,
    deco: Armchair,
  },
];

const loanFacilities = [
  {
    no: "06.",
    title: "Gold Loan",
    description:
      "Explore financing options against eligible gold assets, subject to valuation and applicable conditions.",
    icon: Gem,
    deco: Coins,
  },
  {
    no: "07.",
    title: "Vehicle Loan",
    description:
      "Find out about available financing options for eligible personal or commercial vehicle purchases.",
    icon: Car,
    deco: Car,
  },
  {
    no: "08.",
    title: "Business Loan",
    description:
      "Explore financial assistance options for eligible business requirements and expansion plans.",
    icon: Briefcase,
    deco: Building2,
  },
  {
    no: "09.",
    title: "Agricultural Equipment Loan",
    description:
      "Learn about available financing facilities for eligible agricultural equipment and related needs.",
    icon: Tractor,
    deco: Sprout,
  },
];

const tones = {
  red: {
  panel: "border-[#EF303B]/60 bg-gradient-to-br from-[#EF303B]/[0.13] via-[#EF303B]/[0.06] to-white shadow-[0_18px_44px_-28px_rgba(239,48,59,0.55)]",
  headIcon: "bg-[#EF303B]/20 text-[#EF303B]",
  underline: "bg-[#EF303B]",
  explore: "border-[#EF303B] text-[#EF303B] hover:bg-[#EF303B] hover:text-white focus-visible:ring-[#EF303B]/60 active:bg-[#d92730] active:text-white",
  card: "border-[#EF303B]/60 hover:border-[#EF303B]/80 hover:shadow-[0_18px_36px_-20px_rgba(239,48,59,0.70)]",
  icon: "bg-[#EF303B]/20 text-[#EF303B]",
  arrow: "border-[#EF303B]/60 text-[#EF303B] group-hover/card:border-[#EF303B] group-hover/card:bg-[#EF303B] group-hover/card:text-white",
},
  blue: {
  panel: "border-[#214779]/60 bg-gradient-to-br from-[#214779]/[0.13] via-[#214779]/[0.06] to-white shadow-[0_18px_44px_-28px_rgba(16,44,77,0.55)]",
  headIcon: "bg-[#214779]/20 text-[#214779]",
  underline: "bg-[#214779]",
  explore: "border-[#214779] text-[#214779] hover:bg-[#214779] hover:text-white focus-visible:ring-[#214779]/60 active:bg-[#102C4D] active:text-white",
  card: "border-[#214779]/60 hover:border-[#214779]/80 hover:shadow-[0_18px_36px_-20px_rgba(16,44,77,0.70)]",
  icon: "bg-[#214779]/20 text-[#214779]",
  arrow: "border-[#214779]/60 text-[#214779] group-hover/card:border-[#214779] group-hover/card:bg-[#214779] group-hover/card:text-white",
},
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

function ServiceGroup({
  tone,
  headIcon: HeadIcon,
  title,
  subtitle,
  items,
  gridClass,
  initial,
}) {
  const t = tones[tone];
  return (
    <motion.div
      variants={container}
      initial={initial}
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      className={`rounded-3xl border p-4 sm:p-6 lg:p-7 ${t.panel}`}
    >
      {/* Heading row */}
      <motion.div
        variants={fadeUp}
        className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between lg:gap-6"
      >
        <div className="flex min-w-0 flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
          <span
            className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full sm:h-16 sm:w-16 ${t.headIcon}`}
          >
            <HeadIcon aria-hidden="true" className="h-7 w-7 sm:h-8 sm:w-8" />
          </span>
          <div className="min-w-0 sm:flex sm:flex-wrap sm:items-center sm:gap-x-6 sm:gap-y-1">
            <div>
              <h3 className="text-2xl font-extrabold text-[#102C4D] sm:text-3xl">
                {title}
              </h3>
              <span
                aria-hidden="true"
                className={`mt-1.5 block h-[3px] w-8 rounded-full ${t.underline}`}
              />
            </div>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-[#334155] sm:mt-0 sm:text-[15px]">
              {subtitle}
            </p>
          </div>
        </div>

        {/* No destination exists yet, so this is intentionally non-navigational. */}
        {/* <button
          type="button"
          className={`group/btn inline-flex min-h-11 shrink-0 items-center justify-center gap-2 self-start rounded-full border bg-white/70 px-6 py-2 text-sm font-semibold transition-[background-color,color,translate,box-shadow] duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-4 active:translate-y-0 motion-reduce:transition-none motion-reduce:hover:translate-y-0 lg:self-center ${t.explore}`}
        >
          Explore All
          <ArrowRight
            aria-hidden="true"
            className="h-4 w-4 transition-[translate] duration-300 ease-in-out group-hover/btn:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover/btn:translate-x-0"
          />
        </button> */}
      </motion.div>

      {/* Cards */}
      <ul className={`m-0 mt-6 grid list-none gap-4 p-0 sm:gap-5 ${gridClass}`}>
        {items.map(({ no, title: name, description, icon: Icon, deco: Deco }) => (
          // Stationary hover trigger so the lifted card can't cause flicker.
          <motion.li key={no} variants={fadeUp} className="group/card flex">
            <article
              className={`relative flex w-full transform-gpu flex-col overflow-hidden rounded-2xl border bg-white/85 p-5 shadow-[0_8px_22px_-16px_rgba(16,44,77,0.25)] transition-[translate,box-shadow,border-color] duration-300 ease-in-out group-hover/card:-translate-y-1 motion-reduce:transition-none motion-reduce:group-hover/card:translate-y-0 ${t.card}`}
            >
              <div className="flex items-start justify-between gap-3">
                <span className="text-base font-semibold text-[#EF303B]">{no}</span>
                <span
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${t.icon}`}
                >
                  <Icon aria-hidden="true" className="h-5 w-5" />
                </span>
              </div>

              <h4 className="mt-3 text-lg font-bold leading-snug text-[#102C4D]">
                {name}
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-[#334155]">
                {description}
              </p>

              {/* Footer: faint line-art (left) and arrow badge (right); never overlaps text */}
              <div className="mt-auto flex items-end justify-between pt-5">
                <Deco
                  aria-hidden="true"
                  strokeWidth={1.25}
                  className={`h-10 w-10 opacity-60 ${
                  tone === "red" ? "text-[#EF303B]" : "text-[#214779]"
                }`}
                />
                <span
                  aria-hidden="true"
                  className={`flex h-9 w-9 items-center justify-center rounded-full border bg-white transition-[background-color,border-color,color] duration-300 ease-in-out motion-reduce:transition-none ${t.arrow}`}
                >
                  <ArrowRight className="h-4 w-4 transition-[translate] duration-300 ease-in-out group-hover/card:translate-x-[3px] motion-reduce:transition-none motion-reduce:group-hover/card:translate-x-0" />
                </span>
              </div>
            </article>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}

export default function Services() {
  const reduceMotion = useReducedMotion();
  const initial = reduceMotion ? false : "hidden";

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="relative isolate overflow-hidden bg-gradient-to-b from-white via-[#F5F7FB] to-white py-10 sm:py-20 md:-mt-20 lg:py-20"
    >
      {/* Decorative shapes */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-28 top-10 h-80 w-80 rounded-full bg-[#214779]/[0.05] blur-3xl" />
        <div className="absolute -right-24 -top-16 h-96 w-96 rounded-full border-[28px] border-[#EF303B]/[0.07]" />
        <div className="absolute -right-20 bottom-20 h-72 w-72 rounded-full bg-[#EF303B]/[0.04] blur-3xl" />
      </div>

      <div className="mx-auto w-full max-w-[1360px] px-4 sm:px-8 lg:px-10 2xl:max-w-[1440px]">
        {/* Header */}
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-8">
          <motion.div
            variants={container}
            initial={initial}
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="min-w-0 text-left"
          >
            <motion.div variants={fadeUp} className="flex items-center gap-3">
              <span aria-hidden="true" className="h-[2px] w-10 bg-[#EF303B] sm:w-12" />
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#EF303B] sm:text-sm">
                Our Services
              </p>
            </motion.div>

            <motion.h2
              id="services-heading"
              variants={fadeUp}
              className="mt-5 text-[2rem] font-extrabold leading-[1.1] tracking-tight min-[400px]:text-4xl sm:text-5xl xl:text-[3.4rem]"
            >
              <span className="block text-[#102C4D]">Financial Solutions</span>
              <span className="block text-[#EF303B]">for Your Needs</span>
            </motion.h2>

            <motion.div
              variants={fadeUp}
              aria-hidden="true"
              className="mt-6 h-1 w-16 rounded-full bg-gradient-to-r from-[#EF303B] to-[#214779]"
            />

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-xl text-base leading-relaxed text-[#334155] sm:text-lg"
            >
              Explore our available savings schemes and loan facilities to find
              options that align with your financial requirements.
            </motion.p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial={initial}
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="flex min-w-0 flex-col items-center gap-6 sm:flex-row sm:items-center sm:justify-between lg:gap-4"
          >
            {/* Illustration: stationary wrapper is the hover trigger; only the img scales */}
            <div className="group/img w-full max-w-md overflow-hidden rounded-3xl border border-[#214779]/50 bg-white shadow-[0_24px_50px_-24px_rgba(16,44,77,0.60)] transition-[border-color,box-shadow] duration-300 ease-in-out hover:border-[#214779]/99 hover:shadow-[0_28px_56px_-22px_rgba(16,44,77,0.80)] sm:max-w-none sm:flex-1">
              <img
                src={servicesIllustration}
                alt="A classical bank building with stacks of gold coins, a green plant and a rupee coin, symbolising secure savings and growth"
                loading="lazy"
                decoding="async"
                className="block h-auto w-full transform-gpu object-contain transition-[scale] duration-500 ease-out group-hover/img:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover/img:scale-100"
              />
            </div>

            <ul className="m-0 grid w-full max-w-md list-none grid-cols-1 gap-3 p-0 min-[480px]:grid-cols-3 sm:w-auto sm:max-w-none sm:shrink-0 sm:grid-cols-1 sm:gap-4">
              {features.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-3">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#EF303B]/[0.08] text-[#EF303B] shadow-[0_8px_20px_-10px_rgba(239,48,59,0.60)] ring-1 ring-[#EF303B]/60">
                    <Icon aria-hidden="true" className="h-5 w-5" />
                  </span>
                  <span className="max-w-[7.5rem] text-sm font-medium leading-snug text-[#102C4D]">
                    {label}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Groups */}
        <div className="mt-12 space-y-6 sm:mt-14 lg:space-y-8">
          <ServiceGroup
            tone="red"
            headIcon={Coins}
            title="Deposit Schemes"
            subtitle="Build a better tomorrow with our savings schemes designed for your financial goals."
            items={depositSchemes}
            initial={initial}
            gridClass="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 sm:max-lg:[&>li:last-child]:col-span-2"
          />
          <ServiceGroup
            tone="blue"
            headIcon={HandCoins}
            title="Loan Facilities"
            subtitle="Access financial support for your personal, business, and agricultural needs."
            items={loanFacilities}
            initial={initial}
            gridClass="grid-cols-1 sm:grid-cols-2 xl:grid-cols-4"
          />

          {/* Disclaimer */}
          <motion.div
            variants={fadeUp}
            initial={initial}
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            role="note"
            className="flex items-start gap-3 rounded-2xl border border-[#214779]/60 bg-gradient-to-br from-[#214779]/[0.06] to-white px-4 py-3 shadow-[0_8px_22px_-18px_rgba(16,44,77,0.45)] sm:items-center sm:px-6"
          >
            <Info
              aria-hidden="true"
              className="mt-0.5 h-5 w-5 shrink-0 text-[#214779] sm:mt-0"
            />
            <p className="text-xs leading-relaxed text-[#334155] sm:text-sm">
              All services are subject to availability, eligibility, documentation,
              applicable policies, and approval requirements.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}