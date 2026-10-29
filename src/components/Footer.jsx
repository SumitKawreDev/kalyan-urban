// // src/components/Footer.jsx
// import {
//   Briefcase,
//   Car,
//   ChevronRight,
//   Clock,
//   Coins,
//   Gem,
//   MapPin,
//   Phone,
//   PiggyBank,
//   TrendingUp,
// } from "lucide-react";

// // ⚠️ Ensure this import matches the exact logo path in your project (e.g., same logo asset used in Navbar.jsx)
// import logo from "../assets/logo/kalyan-logo.png";

// const NAVBAR_OFFSET = 80;

// const quickLinks = [
//   { label: "Home", href: "#home", id: "home" },
//   { label: "About Us", href: "#about", id: "about" },
//   { label: "Our Services", href: "#services", id: "services" },
//   { label: "FAQs", href: "#faq", id: "faqs" },
//   { label: "Contact Us", href: "#contact", id: "contact" },
// ];

// const services = [
//   { label: "Fixed Deposit", icon: Coins, href: "#services", id: "services" },
//   {
//     label: "Recurring Deposit",
//     icon: TrendingUp,
//     href: "#services",
//     id: "services",
//   },
//   {
//     label: "Savings Account",
//     icon: PiggyBank,
//     href: "#services",
//     id: "services",
//   },
//   { label: "Gold Loan", icon: Gem, href: "#services", id: "services" },
//   { label: "Vehicle Loan", icon: Car, href: "#services", id: "services" },
//   {
//     label: "Business Loan",
//     icon: Briefcase,
//     href: "#services",
//     id: "services",
//   },
// ];

// function scrollToSection(e, id) {
//   const el = document.getElementById(id);
//   if (!el) return;
//   e.preventDefault();

//   if (window.lenis?.scrollTo) {
//     window.lenis.scrollTo(el, { offset: -NAVBAR_OFFSET });
//   } else {
//     const top = el.getBoundingClientRect().top + window.scrollY - NAVBAR_OFFSET;
//     window.scrollTo({ top, behavior: "smooth" });
//   }
//   history.replaceState(null, "", `#${id}`);
// }

// export default function Footer() {
//   return (
//     <footer
//       aria-label="Site Footer"
//       className="relative isolate overflow-hidden bg-gradient-to-b from-[#07264B] via-[#051F3E] to-[#041830] text-white"
//     >
//       {/* Top thin red-and-blue decorative line */}
//       <div aria-hidden="true" className="flex h-[5px] w-full">
//         <div className="w-[36%] bg-[#EF303B]" />
//         <div className="flex-1 bg-gradient-to-r from-[#38679E] via-[#214779] to-[#102C4D]" />
//       </div>

//       {/* Main 4-Column Footer Content */}
//       <div className="mx-auto w-full max-w-[1360px] px-4 pb-5 pt-10 sm:px-8 lg:px-12 lg:pb-5 lg:pt-10 2xl:max-w-[1440px]">
//         <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.35fr_0.85fr_1fr_1.15fr] lg:gap-8 xl:gap-12">
//           {/* Column 1 — Brand and Description */}
//           <div className="flex flex-col items-start text-left">
//             <a
//               href="#home"
//               onClick={(e) => scrollToSection(e, "home")}
//               aria-label="Kalyan Urban Co-operative Credit Society Limited — Home"
//               className="group inline-flex flex-col items-start focus-visible:rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EF303B]"
//             >
//               {/* Original Project Logo */}
//               <img
//                 src={logo}
//                 alt="Kalyan Urban Co-operative Credit Society Limited Logo"
//                 loading="lazy"
//                 decoding="async"
//                 className="h-auto max-h-24 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
//               />

//               <span className="mt-2.5 block max-w-[270px] text-xs font-extrabold uppercase leading-[1.35] tracking-[0.04em] text-white sm:text-[13px]">
//                 KALYAN URBAN CO-OPERATIVE CREDIT SOCIETY LIMITED
//               </span>
//             </a>

//             {/* Short red accent line */}
//             <span
//               aria-hidden="true"
//               className="mt-3.5 h-[2.5px] w-11 rounded-full bg-[#EF303B]"
//             />

//             {/* Tagline */}
//             <p className="m-0 mt-3.5 text-[13.5px] italic tracking-wide text-slate-200/95">
//               Your Financial Goals. Our Commitment.
//             </p>

//             {/* Description */}
//             <p className="m-0 mt-3 max-w-sm text-[13.5px] leading-relaxed text-[#9EB3CC]">
//               Providing member-focused savings schemes and loan facilities with
//               a commitment to trust, transparency, and responsible service.
//             </p>

//             {/* Social Media Icons (Facebook, Instagram, YouTube, WhatsApp) */}
//             <div className="mt-6 flex items-center gap-3">
//                 {/* Facebook */}
//                 <a
//                     href="https://www.facebook.com/"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     aria-label="Facebook"
//                     className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-[#163A66]/80 text-white shadow-sm transition-[background-color,border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-[#EF303B]/60 hover:bg-[#EF303B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EF303B]"
//                 >
//                     <svg
//                     aria-hidden="true"
//                     viewBox="0 0 24 24"
//                     className="h-4 w-4 fill-current"
//                     >
//                     <path d="M13.5 22v-8.2h2.8l.4-3.2h-3.2V8.5c0-.9.3-1.6 1.6-1.6h1.7V4.1c-.3 0-1.3-.1-2.5-.1-2.5 0-4.1 1.5-4.1 4.2v2.4H7.5v3.2h2.7V22h3.3Z" />
//                     </svg>
//                 </a>

//                 {/* Instagram */}
//                 <a
//                     href="https://www.instagram.com/"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     aria-label="Instagram"
//                     className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-[#163A66]/80 text-white shadow-sm transition-[background-color,border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-[#EF303B]/60 hover:bg-[#EF303B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EF303B]"
//                 >
//                     <svg
//                     aria-hidden="true"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     className="h-4 w-4"
//                     >
//                     <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
//                     <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
//                     <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
//                     </svg>
//                 </a>

//                 {/* YouTube */}
//                 <a
//                     href="https://www.youtube.com/"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     aria-label="YouTube"
//                     className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-[#163A66]/80 text-white shadow-sm transition-[background-color,border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-[#EF303B]/60 hover:bg-[#EF303B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EF303B]"
//                 >
//                     <svg
//                     aria-hidden="true"
//                     viewBox="0 0 24 24"
//                     className="h-4 w-4 fill-current"
//                     >
//                     <path d="M21.6 7.2a2.7 2.7 0 0 0-1.9-1.9C18 4.8 12 4.8 12 4.8s-6 0-7.7.5a2.7 2.7 0 0 0-1.9 1.9C2 8.9 2 12 2 12s0 3.1.4 4.8a2.7 2.7 0 0 0 1.9 1.9c1.7.5 7.7.5 7.7.5s6 0 7.7-.5a2.7 2.7 0 0 0 1.9-1.9c.4-1.7.4-4.8.4-4.8s0-3.1-.4-4.8ZM10 15.2V8.8l5.5 3.2-5.5 3.2Z" />
//                     </svg>
//                 </a>

//               {/* WhatsApp (Official verified society phone number 7776000664) */}
//               <a
//                 href="https://wa.me/917776000664"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 aria-label="Chat with us on WhatsApp at 7776000664"
//                 className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-[#163A66]/80 text-white shadow-sm transition-[background-color,border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-[#EF303B]/60 hover:bg-[#EF303B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EF303B]"
//               >
//                 <svg
//                   aria-hidden="true"
//                   viewBox="0 0 24 24"
//                   className="h-4 w-4 fill-current"
//                 >
//                   <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2Zm5.82 14.12c-.24.68-1.41 1.3-1.95 1.38-.5.08-1.13.11-1.83-.11-.42-.13-.97-.31-1.66-.61-2.92-1.26-4.83-4.21-4.97-4.4-.15-.2-1.19-1.58-1.19-3.01 0-1.43.75-2.13 1.02-2.42.27-.29.59-.36.78-.36.2 0 .39 0 .56.01.18.01.42-.07.66.5.24.59.83 2.03.9 2.18.07.15.12.32.02.51-.1.2-.15.32-.29.49-.15.17-.31.38-.44.51-.15.15-.3.31-.13.6.17.29.76 1.25 1.63 2.02 1.12.99 2.06 1.3 2.35 1.45.29.15.46.12.63-.07.17-.2.73-.85.93-1.14.2-.29.39-.24.66-.15.27.1 1.71.81 2 .95.29.15.49.22.56.34.07.12.07.7-.17 1.38Z" />
//                 </svg>
//               </a>
//             </div>
//           </div>

//           {/* Column 2 — Quick Links */}
//           <div className="flex flex-col items-start text-left">
//             <h2 className="m-0 text-lg font-extrabold tracking-wide text-white sm:text-[19px]">
//               Quick Links
//             </h2>
//             <span
//               aria-hidden="true"
//               className="mt-2.5 h-[3px] w-7 rounded-full bg-[#EF303B]"
//             />

//             <ul className="m-0 mt-6 flex list-none flex-col gap-3.5 p-0">
//               {quickLinks.map((link) => (
//                 <li key={link.label}>
//                   <a
//                     href={link.href}
//                     onClick={(e) => scrollToSection(e, link.id)}
//                     className="group inline-flex items-center gap-2.5 text-[14.5px] font-medium text-slate-200 transition-colors duration-200 hover:text-[#EF303B] focus-visible:rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EF303B]"
//                   >
//                     <ChevronRight
//                       aria-hidden="true"
//                       className="h-4 w-4 shrink-0 text-slate-300 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-[#EF303B]"
//                     />
//                     <span>{link.label}</span>
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Column 3 — Our Services */}
//           <div className="flex flex-col items-start text-left">
//             <h2 className="m-0 text-lg font-extrabold tracking-wide text-white sm:text-[19px]">
//               Our Services
//             </h2>
//             <span
//               aria-hidden="true"
//               className="mt-2.5 h-[3px] w-7 rounded-full bg-[#EF303B]"
//             />

//             <ul className="m-0 mt-6 flex list-none flex-col gap-3 p-0">
//               {services.map(({ label, icon: Icon, href, id }) => (
//                 <li key={label}>
//                   <a
//                     href={href}
//                     onClick={(e) => scrollToSection(e, id)}
//                     className="group inline-flex items-center gap-3 text-[14.5px] font-medium text-slate-200 transition-colors duration-200 hover:text-white focus-visible:rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EF303B]"
//                   >
//                     <span
//                       aria-hidden="true"
//                       className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/15 bg-[#163A66]/90 text-white transition-[background-color,border-color,transform] duration-200 group-hover:scale-105 group-hover:border-[#EF303B]/60 group-hover:bg-[#EF303B]"
//                     >
//                       <Icon className="h-4 w-4 stroke-[2]" />
//                     </span>
//                     <span className="transition-colors duration-200 group-hover:text-[#EF303B]">
//                       {label}
//                     </span>
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Column 4 — Contact Us */}
//           <div className="flex flex-col items-start text-left">
//             <h2 className="m-0 text-lg font-extrabold tracking-wide text-white sm:text-[19px]">
//               Contact Us
//             </h2>
//             <span
//               aria-hidden="true"
//               className="mt-2.5 h-[3px] w-7 rounded-full bg-[#EF303B]"
//             />

//             <ul className="m-0 mt-6 flex w-full list-none flex-col gap-4 p-0">
//               {/* Location */}
//               <li className="flex items-start gap-3.5">
//                 <span
//                   aria-hidden="true"
//                   className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/15 bg-[#163A66]/90 text-white"
//                 >
//                   <MapPin className="h-4 w-4 stroke-[2]" />
//                 </span>
//                 <span className="pt-0.5 text-[14.5px] leading-snug text-slate-200">
//                   Rawanwadi, Gondia,
//                   <span className="block">Maharashtra</span>
//                 </span>
//               </li>

//               {/* Phone */}
//               <li className="flex items-center gap-3.5">
//                 <span
//                   aria-hidden="true"
//                   className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/15 bg-[#163A66]/90 text-white"
//                 >
//                   <Phone className="h-4 w-4 fill-current" />
//                 </span>
//                 <a
//                   href="tel:7776000664"
//                   className="text-[15px] font-semibold tracking-wide text-white transition-colors duration-200 hover:text-[#EF303B] focus-visible:rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EF303B]"
//                 >
//                   7776000664
//                 </a>
//               </li>

//               {/* Divider between Phone and Hours matching screenshot */}
//               <li aria-hidden="true" className="my-0.5">
//                 <hr className="border-0 border-t border-white/10" />
//               </li>

//               {/* Office Hours */}
//               <li className="flex items-start gap-3.5">
//                 <span
//                   aria-hidden="true"
//                   className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/15 bg-[#163A66]/90 text-white"
//                 >
//                   <Clock className="h-4 w-4 stroke-[2]" />
//                 </span>
//                 <div className="pt-0.5 text-[14px] leading-relaxed text-slate-200">
//                   <p className="m-0">Mon - Sat: 9:00 AM - 6:00 PM</p>
//                   <p className="m-0 text-slate-300">Sunday: By Appointment</p>
//                 </div>
//               </li>
//             </ul>

//             {/* Thin divider and required eligibility disclaimer */}
//             <div className="mt-5 w-full border-t border-white/10 pt-3.5">
//               <p className="m-0 text-xs leading-relaxed text-[#9EB3CC]">
//                 All services are subject to eligibility, applicable terms, and
//                 approval.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Disclaimer Section */}
//       <div
//       id="disclaimer"
//       className="border-t border-white/15 bg-[#082544]/50"
//       >
//         <div className="mx-auto flex w-full max-w-[1360px] flex-col gap-3 px-4 py-4 sm:px-8 md:flex-row md:items-start md:gap-6 lg:px-12 2xl:max-w-[1440px]">
//             <div className="flex shrink-0 items-start gap-3">
//             <span
//                 aria-hidden="true"
//                 className="mt-0.5 h-12 w-1.5 rounded-full bg-[#EF303B]"
//             />
//             <h3 className="m-0 pt-0.5 text-sm font-bold text-white sm:text-base">
//                 Disclaimer:
//             </h3>
//             </div>

//             <p className="m-0 min-w-0 flex-1 text-xs leading-relaxed text-slate-300 sm:text-sm">
//             <em>
//                 This website provides general information about the society and its
//                 services. Scheme availability, interest rates, returns, eligibility,
//                 fees, and other conditions must be confirmed with the society.
//                 References to deposits and loans do not imply that the society is a
//                 licensed bank or that its deposits are insured by DICGC. Any regulatory
//                 status or insurance coverage should be verified before publication.
//             </em>
//             </p>
//         </div>
//         </div>

//         {/* Bottom Copyright Bar */}
//         <div className="border-t border-white/15 bg-[#04152B]/60">
//             <div className="mx-auto flex w-full max-w-[1360px] flex-col items-center justify-between gap-4 px-4 py-4 text-xs text-slate-300 sm:px-8 md:flex-row lg:px-12 2xl:max-w-[1440px]">
//                 <p className="m-0 text-center md:text-left">
//                 © 2026 Kalyan Urban Co-operative Credit Society Limited. All Rights
//                 Reserved.
//                 </p>

//                 {/* <div className="flex flex-wrap items-center justify-center gap-3 md:justify-end">
//                 <span
//                     aria-hidden="true"
//                     className="mr-3 hidden h-6 w-px bg-white/20 md:inline-block"
//                 />

//                 <a
//                     href="#contact"
//                     onClick={(e) => scrollToSection(e, "contact")}
//                     className="transition-colors duration-200 hover:text-white focus-visible:rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EF303B]"
//                 >
//                     Privacy Policy
//                 </a>

//                 <span aria-hidden="true" className="text-white/30">
//                     |
//                 </span>

//                 <a
//                     href="#contact"
//                     onClick={(e) => scrollToSection(e, "contact")}
//                     className="transition-colors duration-200 hover:text-white focus-visible:rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EF303B]"
//                 >
//                     Terms &amp; Conditions
//                 </a>

//                 <span aria-hidden="true" className="text-white/30">
//                     |
//                 </span>

//                 <a
//                     href="#disclaimer"
//                     onClick={(e) => scrollToSection(e, "disclaimer")}
//                     className="transition-colors duration-200 hover:text-white focus-visible:rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EF303B]"
//                 >
//                     Disclaimer
//                 </a>
//                 </div> */}
//             </div>
//         </div>
//     </footer>
//   );
// }



//english hindi swicher 


// src/components/Footer.jsx
import {
  Briefcase,
  Car,
  ChevronRight,
  Clock,
  Coins,
  Gem,
  MapPin,
  Phone,
  PiggyBank,
  TrendingUp,
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import logo from "../assets/logo/kalyan-logo.png";

const NAVBAR_OFFSET = 80;

const quickLinks = [
  { en: "Home", hi: "होम", href: "#home", id: "home" },
  { en: "About Us", hi: "हमारे बारे में", href: "#about", id: "about" },
  { en: "Our Services", hi: "हमारी सेवाएँ", href: "#services", id: "services" },
  { en: "FAQs", hi: "अक्सर पूछे जाने वाले प्रश्न", href: "#faq", id: "faqs" },
  { en: "Contact Us", hi: "संपर्क करें", href: "#contact", id: "contact" },
];

const services = [
  { en: "Fixed Deposit", hi: "सावधि जमा", icon: Coins, href: "#services", id: "services" },
  { en: "Recurring Deposit", hi: "आवर्ती जमा", icon: TrendingUp, href: "#services", id: "services" },
  { en: "Savings Account", hi: "बचत खाता", icon: PiggyBank, href: "#services", id: "services" },
  { en: "Gold Loan", hi: "स्वर्ण ऋण", icon: Gem, href: "#services", id: "services" },
  { en: "Vehicle Loan", hi: "वाहन ऋण", icon: Car, href: "#services", id: "services" },
  { en: "Business Loan", hi: "व्यवसाय ऋण", icon: Briefcase, href: "#services", id: "services" },
];

function scrollToSection(e, id) {
  const el = document.getElementById(id);
  if (!el) return;

  e.preventDefault();

  if (window.lenis?.scrollTo) {
    window.lenis.scrollTo(el, { offset: -NAVBAR_OFFSET });
  } else {
    const top = el.getBoundingClientRect().top + window.scrollY - NAVBAR_OFFSET;
    window.scrollTo({ top, behavior: "smooth" });
  }

  history.replaceState(null, "", `#${id}`);
}

export default function Footer() {
  const { lang } = useLanguage();
  const isHi = lang === "hi";

  return (
    <footer
      aria-label={isHi ? "वेबसाइट का फ़ुटर" : "Site Footer"}
      className="relative isolate overflow-hidden bg-gradient-to-b from-[#07264B] via-[#051F3E] to-[#041830] text-white"
    >
      {/* Top red-and-blue accent line */}
      <div aria-hidden="true" className="flex h-[5px] w-full">
        <div className="w-[36%] bg-[#EF303B]" />
        <div className="flex-1 bg-gradient-to-r from-[#38679E] via-[#214779] to-[#102C4D]" />
      </div>

      {/* Main 4-column footer */}
      <div className="mx-auto w-full max-w-[1360px] px-4 pb-5 pt-10 sm:px-8 lg:px-12 lg:pb-5 lg:pt-10 2xl:max-w-[1440px]">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.35fr_0.85fr_1fr_1.15fr] lg:gap-8 xl:gap-12">
          {/* Column 1 — Brand and Description */}
          <div className="flex flex-col items-start text-left">
            <a
              href="#home"
              onClick={(e) => scrollToSection(e, "home")}
              aria-label={
                isHi
                  ? "कल्याण अर्बन सहकारी क्रेडिट सोसाइटी लिमिटेड — होम"
                  : "Kalyan Urban Co-operative Credit Society Limited — Home"
              }
              className="group inline-flex flex-col items-start focus-visible:rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EF303B]"
            >
              <img
                src={logo}
                alt="Kalyan Urban Co-operative Credit Society Limited Logo"
                loading="lazy"
                decoding="async"
                className="h-auto max-h-24 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
              />

              <span className="mt-2.5 block max-w-[270px] text-xs font-extrabold uppercase leading-[1.35] tracking-[0.04em] text-white sm:text-[13px]">
                {isHi
                    ? "कल्याण अर्बन को-ऑपरेटिव क्रेडिट सोसाइटी लिमिटेड"
                    : "KALYAN URBAN CO-OPERATIVE CREDIT SOCIETY LIMITED"}
                </span>
            </a>

            <span
              aria-hidden="true"
              className="mt-3.5 h-[2.5px] w-11 rounded-full bg-[#EF303B]"
            />

            <p className="m-0 mt-3.5 text-[13.5px] italic tracking-wide text-slate-200/95">
              {isHi
                ? "आपके वित्तीय लक्ष्य, हमारी प्रतिबद्धता।"
                : "Your Financial Goals. Our Commitment."}
            </p>

            <p className="m-0 mt-3 max-w-sm text-[13.5px] leading-relaxed text-[#9EB3CC]">
              {isHi
                ? "विश्वास, पारदर्शिता और जिम्मेदार सेवा के प्रति प्रतिबद्धता के साथ सदस्यों के लिए बचत योजनाएँ और ऋण सुविधाएँ उपलब्ध कराने का प्रयास।"
                : "Providing member-focused savings schemes and loan facilities with a commitment to trust, transparency, and responsible service."}
            </p>

            {/* Social Media Icons */}
            <div className="mt-6 flex items-center gap-3">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-[#163A66]/80 text-white shadow-sm transition-[background-color,border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-[#EF303B]/60 hover:bg-[#EF303B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EF303B]"
              >
                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                  <path d="M13.5 22v-8.2h2.8l.4-3.2h-3.2V8.5c0-.9.3-1.6 1.6-1.6h1.7V4.1c-.3 0-1.3-.1-2.5-.1-2.5 0-4.1 1.5-4.1 4.2v2.4H7.5v3.2h2.7V22h3.3Z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-[#163A66]/80 text-white shadow-sm transition-[background-color,border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-[#EF303B]/60 hover:bg-[#EF303B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EF303B]"
              >
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-[#163A66]/80 text-white shadow-sm transition-[background-color,border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-[#EF303B]/60 hover:bg-[#EF303B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EF303B]"
              >
                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                  <path d="M21.6 7.2a2.7 2.7 0 0 0-1.9-1.9C18 4.8 12 4.8 12 4.8s-6 0-7.7.5a2.7 2.7 0 0 0-1.9 1.9C2 8.9 2 12 2 12s0 3.1.4 4.8a2.7 2.7 0 0 0 1.9 1.9c1.7.5 7.7.5 7.7.5s6 0 7.7-.5a2.7 2.7 0 0 0 1.9-1.9c.4-1.7.4-4.8.4-4.8s0-3.1-.4-4.8ZM10 15.2V8.8l5.5 3.2-5.5 3.2Z" />
                </svg>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/917776000664"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={isHi ? "WhatsApp पर संपर्क करें" : "Contact us on WhatsApp"}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-[#163A66]/80 text-white shadow-sm transition-[background-color,border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-[#EF303B]/60 hover:bg-[#EF303B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EF303B]"
              >
                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2Zm5.82 14.12c-.24.68-1.41 1.3-1.95 1.38-.5.08-1.13.11-1.83-.11-.42-.13-.97-.31-1.66-.61-2.92-1.26-4.83-4.21-4.97-4.4-.15-.2-1.19-1.58-1.19-3.01 0-1.43.75-2.13 1.02-2.42.27-.29.59-.36.78-.36.2 0 .39-.07.66.5.24.59.83 2.03.9 2.18.07.15.12.32.02.51-.1.2-.15.32-.29.49-.15.17-.31.38-.13.6.17.29.76 1.25 1.63 2.02 1.12.99 2.06 1.3 2.35 1.45.29.29.46.12.63-.07.17-.2.73-.85.93-1.14.2-.29.39-.24.66-.15.27.1 1.71.81 2 .95.15.12.49.22.56.34.03.68-.17 1.38-.17 1.38Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2 — Quick Links */}
          <div className="flex flex-col items-start text-left">
            <h2 className="m-0 text-lg font-extrabold tracking-wide text-white sm:text-[19px]">
              {isHi ? "त्वरित लिंक" : "Quick Links"}
            </h2>

            <span aria-hidden="true" className="mt-2.5 h-[3px] w-7 rounded-full bg-[#EF303B]" />

            <ul className="m-0 mt-6 flex list-none flex-col gap-3.5 p-0">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.id)}
                    className="group inline-flex items-center gap-2.5 text-[14.5px] font-medium text-slate-200 transition-colors duration-200 hover:text-[#EF303B] focus-visible:rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EF303B]"
                  >
                    <ChevronRight
                      aria-hidden="true"
                      className="h-4 w-4 shrink-0 text-slate-300 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-[#EF303B]"
                    />
                    <span>{isHi ? link.hi : link.en}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Our Services */}
          <div className="flex flex-col items-start text-left">
            <h2 className="m-0 text-lg font-extrabold tracking-wide text-white sm:text-[19px]">
              {isHi ? "हमारी सेवाएँ" : "Our Services"}
            </h2>

            <span aria-hidden="true" className="mt-2.5 h-[3px] w-7 rounded-full bg-[#EF303B]" />

            <ul className="m-0 mt-6 flex list-none flex-col gap-3 p-0">
              {services.map(({ en, hi, icon: Icon, href, id }) => (
                <li key={en}>
                  <a
                    href={href}
                    onClick={(e) => scrollToSection(e, id)}
                    className="group inline-flex items-center gap-3 text-[14.5px] font-medium text-slate-200 transition-colors duration-200 hover:text-white focus-visible:rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EF303B]"
                  >
                    <span
                      aria-hidden="true"
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/15 bg-[#163A66]/90 text-white transition-[background-color,border-color,transform] duration-200 group-hover:scale-105 group-hover:border-[#EF303B]/60 group-hover:bg-[#EF303B]"
                    >
                      <Icon className="h-4 w-4 stroke-[2]" />
                    </span>
                    <span className="transition-colors duration-200 group-hover:text-[#EF303B]">
                      {isHi ? hi : en}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Contact Us */}
          <div className="flex flex-col items-start text-left">
            <h2 className="m-0 text-lg font-extrabold tracking-wide text-white sm:text-[19px]">
              {isHi ? "संपर्क करें" : "Contact Us"}
            </h2>

            <span aria-hidden="true" className="mt-2.5 h-[3px] w-7 rounded-full bg-[#EF303B]" />

            <ul className="m-0 mt-6 flex w-full list-none flex-col gap-4 p-0">
              {/* Location */}
              <li className="flex items-start gap-3.5">
                <span
                  aria-hidden="true"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/15 bg-[#163A66]/90 text-white"
                >
                  <MapPin className="h-4 w-4 stroke-[2]" />
                </span>

                <span className="pt-0.5 text-[14.5px] leading-snug text-slate-200">
                  {isHi ? "रावनवाड़ी, गोंदिया," : "Rawanwadi, Gondia,"}
                  <span className="block">
                    {isHi ? "महाराष्ट्र" : "Maharashtra"}
                  </span>
                </span>
              </li>

              {/* Phone */}
              <li className="flex items-center gap-3.5">
                <span
                  aria-hidden="true"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/15 bg-[#163A66]/90 text-white"
                >
                  <Phone className="h-4 w-4 fill-current" />
                </span>

                <a
                  href="tel:7776000664"
                  className="text-[15px] font-semibold tracking-wide text-white transition-colors duration-200 hover:text-[#EF303B] focus-visible:rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EF303B]"
                >
                  7776000664
                </a>
              </li>

              {/* Divider */}
              <li aria-hidden="true" className="my-0.5">
                <hr className="border-0 border-t border-white/10" />
              </li>

              {/* Office Hours */}
              <li className="flex items-start gap-3.5">
                <span
                  aria-hidden="true"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/15 bg-[#163A66]/90 text-white"
                >
                  <Clock className="h-4 w-4 stroke-[2]" />
                </span>

                <div className="pt-0.5 text-[14px] leading-relaxed text-slate-200">
                  <p className="m-0">
                    {isHi ? "सोम–शनि: सुबह 9:00 – शाम 6:00 बजे" : "Mon - Sat: 9:00 AM - 6:00 PM"}
                  </p>
                  <p className="m-0 text-slate-300">
                    {isHi ? "रविवार: पूर्व नियुक्ति पर" : "Sunday: By Appointment"}
                  </p>
                </div>
              </li>
            </ul>

            {/* Service disclaimer */}
            <div className="mt-5 w-full border-t border-white/10 pt-3.5">
              <p className="m-0 text-xs leading-relaxed text-[#9EB3CC]">
                {isHi
                  ? "सभी सेवाएँ पात्रता, लागू शर्तों और स्वीकृति के अधीन हैं।"
                  : "All services are subject to eligibility, applicable terms, and approval."}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Full-width Disclaimer Section */}
      <div
        id="disclaimer"
        className="border-t border-white/15 bg-[#082544]/50"
      >
        <div className="mx-auto flex w-full max-w-[1360px] flex-col gap-3 px-4 py-4 sm:px-8 md:flex-row md:items-start md:gap-6 lg:px-12 2xl:max-w-[1440px]">
          <div className="flex shrink-0 items-start gap-3">
            <span
              aria-hidden="true"
              className="mt-0.5 h-12 w-1.5 rounded-full bg-[#EF303B]"
            />

            <h3 className="m-0 pt-0.5 text-sm font-bold text-white sm:text-base">
              {isHi ? "अस्वीकरण:" : "Disclaimer:"}
            </h3>
          </div>

          <p className="m-0 min-w-0 flex-1 text-xs leading-relaxed text-slate-300 sm:text-sm">
            <em>
              {isHi
                ? "यह वेबसाइट सोसाइटी और उसकी सेवाओं के बारे में सामान्य जानकारी प्रदान करती है। योजनाओं की उपलब्धता, ब्याज दरों, रिटर्न, पात्रता, शुल्क और अन्य शर्तों की पुष्टि सोसाइटी से की जानी चाहिए। जमा और ऋण संबंधी जानकारी का अर्थ यह नहीं है कि सोसाइटी एक लाइसेंस प्राप्त बैंक है या उसकी जमाएँ DICGC द्वारा बीमित हैं। प्रकाशन से पहले नियामकीय स्थिति या बीमा कवरेज की पुष्टि की जानी चाहिए।"
                : "This website provides general information about the society and its services. Scheme availability, interest rates, returns, eligibility, fees, and other conditions must be confirmed with the society. References to deposits and loans do not imply that the society is a licensed bank or that its deposits are insured by DICGC. Any regulatory status or insurance coverage should be verified before publication."}
            </em>
          </p>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="border-t border-white/15 bg-[#04152B]/60">
        <div className="mx-auto flex w-full max-w-[1360px] flex-col items-center justify-between gap-4 px-4 py-4 text-xs text-slate-300 sm:px-8 md:flex-row lg:px-12 2xl:max-w-[1440px]">
          <p className="m-0 text-center md:text-left">
            {isHi
              ? "© 2026 कल्याण अर्बन को-ऑपरेटिव क्रेडिट सोसाइटी लिमिटेड। सर्वाधिकार सुरक्षित।"
              : "© 2026 Kalyan Urban Co-operative Credit Society Limited. All Rights Reserved."}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 md:justify-end">
            {/* <span
              aria-hidden="true"
              className="mr-3 hidden h-6 w-px bg-white/20 md:inline-block"
            />

            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, "contact")}
              className="transition-colors duration-200 hover:text-white focus-visible:rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EF303B]"
            >
              {isHi ? "गोपनीयता नीति" : "Privacy Policy"}
            </a>

            <span aria-hidden="true" className="text-white/30">
              |
            </span>

            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, "contact")}
              className="transition-colors duration-200 hover:text-white focus-visible:rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EF303B]"
            >
              {isHi ? "नियम एवं शर्तें" : "Terms & Conditions"}
            </a>

            <span aria-hidden="true" className="text-white/30">
              |
            </span>

            <a
              href="#disclaimer"
              onClick={(e) => scrollToSection(e, "disclaimer")}
              className="transition-colors duration-200 hover:text-white focus-visible:rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EF303B]"
            >
              {isHi ? "अस्वीकरण" : "Disclaimer"}
            </a> */}
          </div>
        </div>
      </div>
    </footer>
  );
}