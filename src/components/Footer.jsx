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
//

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
//       className="relative isolate overflow-hidden bg-gradient-to-b from-[#0F5743] via-[#0A4033] to-[#0A4033] text-white"
//     >
//       {/* Top thin green-and-orange decorative line */}
//       <div aria-hidden="true" className="flex h-[5px] w-full">
//         <div className="w-[36%] bg-[#ED6E21]" />
//         <div className="flex-1 bg-gradient-to-r from-[#0F5743] via-[#0F5743] to-[#0A4033]" />
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
//               className="group inline-flex flex-col items-start focus-visible:rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ED6E21]"
//             >
//               {/* Original Project Logo */}
//               <img
//                 src="/kalyan-logo.png"
//                 alt="Kalyan Urban Co-operative Credit Society Limited Logo"
//                 loading="lazy"
//                 decoding="async"
//                 className="h-auto max-h-24 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
//               />

//               <span className="mt-2.5 block max-w-[270px] text-xs font-extrabold uppercase leading-[1.35] tracking-[0.04em] text-white sm:text-[13px]">
//                 KALYAN URBAN CO-OPERATIVE CREDIT SOCIETY LIMITED
//               </span>
//             </a>

//             {/* Short orange accent line */}
//             <span
//               aria-hidden="true"
//               className="mt-3.5 h-[2.5px] w-11 rounded-full bg-[#ED6E21]"
//             />

//             {/* Tagline */}
//             <p className="m-0 mt-3.5 text-[13.5px] italic tracking-wide text-white/95">
//               Your Financial Goals. Our Commitment.
//             </p>

//             {/* Description */}
//             <p className="m-0 mt-3 max-w-sm text-[13.5px] leading-relaxed text-[#FFFFFF]">
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
//                     className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-[#0F5743]/80 text-white shadow-sm transition-[background-color,border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-[#ED6E21]/60 hover:bg-[#ED6E21] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ED6E21]"
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
//                     className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-[#0F5743]/80 text-white shadow-sm transition-[background-color,border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-[#ED6E21]/60 hover:bg-[#ED6E21] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ED6E21]"
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
//                     className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-[#0F5743]/80 text-white shadow-sm transition-[background-color,border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-[#ED6E21]/60 hover:bg-[#ED6E21] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ED6E21]"
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
//                 className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-[#0F5743]/80 text-white shadow-sm transition-[background-color,border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-[#ED6E21]/60 hover:bg-[#ED6E21] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ED6E21]"
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
//               className="mt-2.5 h-[3px] w-7 rounded-full bg-[#ED6E21]"
//             />

//             <ul className="m-0 mt-6 flex list-none flex-col gap-3.5 p-0">
//               {quickLinks.map((link) => (
//                 <li key={link.label}>
//                   <a
//                     href={link.href}
//                     onClick={(e) => scrollToSection(e, link.id)}
//                     className="group inline-flex items-center gap-2.5 text-[14.5px] font-medium text-white/90 transition-colors duration-200 hover:text-[#ED6E21] focus-visible:rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ED6E21]"
//                   >
//                     <ChevronRight
//                       aria-hidden="true"
//                       className="h-4 w-4 shrink-0 text-white/80 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-[#ED6E21]"
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
//               className="mt-2.5 h-[3px] w-7 rounded-full bg-[#ED6E21]"
//             />

//             <ul className="m-0 mt-6 flex list-none flex-col gap-3 p-0">
//               {services.map(({ label, icon: Icon, href, id }) => (
//                 <li key={label}>
//                   <a
//                     href={href}
//                     onClick={(e) => scrollToSection(e, id)}
//                     className="group inline-flex items-center gap-3 text-[14.5px] font-medium text-white/90 transition-colors duration-200 hover:text-white focus-visible:rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ED6E21]"
//                   >
//                     <span
//                       aria-hidden="true"
//                       className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/15 bg-[#0F5743]/90 text-white transition-[background-color,border-color,transform] duration-200 group-hover:scale-105 group-hover:border-[#ED6E21]/60 group-hover:bg-[#ED6E21]"
//                     >
//                       <Icon className="h-4 w-4 stroke-[2]" />
//                     </span>
//                     <span className="transition-colors duration-200 group-hover:text-[#ED6E21]">
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
//               className="mt-2.5 h-[3px] w-7 rounded-full bg-[#ED6E21]"
//             />

//             <ul className="m-0 mt-6 flex w-full list-none flex-col gap-4 p-0">
//               {/* Location */}
//               <li className="flex items-start gap-3.5">
//                 <span
//                   aria-hidden="true"
//                   className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/15 bg-[#0F5743]/90 text-white"
//                 >
//                   <MapPin className="h-4 w-4 stroke-[2]" />
//                 </span>
//                 <span className="pt-0.5 text-[14.5px] leading-snug text-white/90">
//                   Rawanwadi, Gondia,
//                   <span className="block">Maharashtra</span>
//                 </span>
//               </li>

//               {/* Phone */}
//               <li className="flex items-center gap-3.5">
//                 <span
//                   aria-hidden="true"
//                   className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/15 bg-[#0F5743]/90 text-white"
//                 >
//                   <Phone className="h-4 w-4 fill-current" />
//                 </span>
//                 <a
//                   href="tel:7776000664"
//                   className="text-[15px] font-semibold tracking-wide text-white transition-colors duration-200 hover:text-[#ED6E21] focus-visible:rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ED6E21]"
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
//                   className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/15 bg-[#0F5743]/90 text-white"
//                 >
//                   <Clock className="h-4 w-4 stroke-[2]" />
//                 </span>
//                 <div className="pt-0.5 text-[14px] leading-relaxed text-white/90">
//                   <p className="m-0">Mon - Sat: 9:00 AM - 6:00 PM</p>
//                   <p className="m-0 text-white/80">Sunday: By Appointment</p>
//                 </div>
//               </li>
//             </ul>

//             {/* Thin divider and required eligibility disclaimer */}
//             <div className="mt-5 w-full border-t border-white/10 pt-3.5">
//               <p className="m-0 text-xs leading-relaxed text-[#FFFFFF]">
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
//       className="border-t border-white/15 bg-[#0F5743]/50"
//       >
//         <div className="mx-auto flex w-full max-w-[1360px] flex-col gap-3 px-4 py-4 sm:px-8 md:flex-row md:items-start md:gap-6 lg:px-12 2xl:max-w-[1440px]">
//             <div className="flex shrink-0 items-start gap-3">
//             <span
//                 aria-hidden="true"
//                 className="mt-0.5 h-12 w-1.5 rounded-full bg-[#ED6E21]"
//             />
//             <h3 className="m-0 pt-0.5 text-sm font-bold text-white sm:text-base">
//                 Disclaimer:
//             </h3>
//             </div>

//             <p className="m-0 min-w-0 flex-1 text-xs leading-relaxed text-white/80 sm:text-sm">
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
//         <div className="border-t border-white/15 bg-[#0A4033]/60">
//             <div className="mx-auto flex w-full max-w-[1360px] flex-col items-center justify-between gap-4 px-4 py-4 text-xs text-white/80 sm:px-8 md:flex-row lg:px-12 2xl:max-w-[1440px]">
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
//                     className="transition-colors duration-200 hover:text-white focus-visible:rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ED6E21]"
//                 >
//                     Privacy Policy
//                 </a>

//                 <span aria-hidden="true" className="text-white/30">
//                     |
//                 </span>

//                 <a
//                     href="#contact"
//                     onClick={(e) => scrollToSection(e, "contact")}
//                     className="transition-colors duration-200 hover:text-white focus-visible:rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ED6E21]"
//                 >
//                     Terms &amp; Conditions
//                 </a>

//                 <span aria-hidden="true" className="text-white/30">
//                     |
//                 </span>

//                 <a
//                     href="#disclaimer"
//                     onClick={(e) => scrollToSection(e, "disclaimer")}
//                     className="transition-colors duration-200 hover:text-white focus-visible:rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ED6E21]"
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
// import { useLanguage } from "../context/LanguageContext";


// const NAVBAR_OFFSET = 84;

// const quickLinks = [
//   { en: "Home", hi: "होम", href: "#home", id: "home" },
//   { en: "About Us", hi: "हमारे बारे में", href: "#about", id: "about" },
//   { en: "Our Services", hi: "हमारी सेवाएँ", href: "#services", id: "services" },
//   { en: "FAQs", hi: "अक्सर पूछे जाने वाले प्रश्न", href: "#faq", id: "faqs" },
//   { en: "Contact Us", hi: "संपर्क करें", href: "#contact", id: "contact" },
// ];

// const services = [
//   { en: "Fixed Deposit", hi: "सावधि जमा", icon: Coins, href: "#services", id: "services" },
//   { en: "Recurring Deposit", hi: "आवर्ती जमा", icon: TrendingUp, href: "#services", id: "services" },
//   { en: "Savings Account", hi: "बचत खाता", icon: PiggyBank, href: "#services", id: "services" },
//   { en: "Gold Loan", hi: "स्वर्ण ऋण", icon: Gem, href: "#services", id: "services" },
//   { en: "Vehicle Loan", hi: "वाहन ऋण", icon: Car, href: "#services", id: "services" },
//   { en: "Business Loan", hi: "व्यवसाय ऋण", icon: Briefcase, href: "#services", id: "services" },
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
//   const { lang } = useLanguage();
//   const isHi = lang === "hi";

//   return (
//     <footer
//       aria-label={isHi ? "वेबसाइट का फ़ुटर" : "Site Footer"}
//       className="relative isolate overflow-hidden bg-gradient-to-b from-[#0F5743] via-[#0A4033] to-[#0A4033] text-white"
//     >
//       {/* Top green-and-orange accent line */}
//       <div aria-hidden="true" className="flex h-[5px] w-full">
//         <div className="w-[36%] bg-[#ED6E21]" />
//         <div className="flex-1 bg-gradient-to-r from-[#0F5743] via-[#0F5743] to-[#0A4033]" />
//       </div>

//       {/* Main 4-column footer */}
//       <div className="mx-auto w-full max-w-[1360px] px-4 pb-5 pt-10 sm:px-8 lg:px-12 lg:pb-5 lg:pt-10 2xl:max-w-[1440px]">
//         <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.35fr_0.85fr_1fr_1.15fr] lg:gap-8 xl:gap-12">
//           {/* Column 1 — Brand and Description */}
//           <div className="flex flex-col items-start text-left">
//             <a
//               href="#home"
//               onClick={(e) => scrollToSection(e, "home")}
//               aria-label={
//                 isHi
//                   ? "कल्याण अर्बन सहकारी क्रेडिट सोसाइटी लिमिटेड — होम"
//                   : "Kalyan Urban Co-operative Credit Society Limited — Home"
//               }
//               className="group inline-flex flex-col items-start focus-visible:rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ED6E21]"
//             >
//               <div className="w-full max-w-[100px] rounded-md bg-white p-2 sm:max-w-[100px] lg:max-w-[100px]">
//               <img
//                 src="/kalyan-logo-cropped.png"
//                 alt="Kalyan Urban Co-operative Credit Society Limited Logo"
//                 loading="lazy"
//                 decoding="async"
//                 className="block h-auto w-full object-contain transition-transform duration-300 group-hover:scale-[1.02]"
//               />
//               </div>

//               <span className="mt-2.5 block max-w-[270px] text-xs font-extrabold uppercase leading-[1.35] tracking-[0.04em] text-white sm:text-[13px]">
//                 {isHi
//                     ? "कल्याण अर्बन को-ऑपरेटिव क्रेडिट सोसाइटी लिमिटेड"
//                     : "KALYAN URBAN CO-OPERATIVE CREDIT SOCIETY LIMITED"}
//                 </span>
//             </a>

//             <span
//               aria-hidden="true"
//               className="mt-3.5 h-[2.5px] w-11 rounded-full bg-[#ED6E21]"
//             />

//             <p className="m-0 mt-3.5 text-[13.5px] italic tracking-wide text-white/95">
//               {isHi
//                 ? "आपके वित्तीय लक्ष्य, हमारी प्रतिबद्धता।"
//                 : "Your Financial Goals. Our Commitment."}
//             </p>

//             <p className="m-0 mt-3 max-w-sm text-[13.5px] leading-relaxed text-[#FFFFFF]">
//               {isHi
//                 ? "विश्वास, पारदर्शिता और जिम्मेदार सेवा के प्रति प्रतिबद्धता के साथ सदस्यों के लिए बचत योजनाएँ और ऋण सुविधाएँ उपलब्ध कराने का प्रयास।"
//                 : "Providing member-focused savings schemes and loan facilities with a commitment to trust, transparency, and responsible service."}
//             </p>

//             {/* Social Media Icons */}
//             <div className="mt-6 flex items-center gap-3">
//               {/* Facebook */}
//               <a
//                 href="https://www.facebook.com/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 aria-label="Facebook"
//                 className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-[#0F5743]/80 text-white shadow-sm transition-[background-color,border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-[#ED6E21]/60 hover:bg-[#ED6E21] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ED6E21]"
//               >
//                 <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-current">
//                   <path d="M13.5 22v-8.2h2.8l.4-3.2h-3.2V8.5c0-.9.3-1.6 1.6-1.6h1.7V4.1c-.3 0-1.3-.1-2.5-.1-2.5 0-4.1 1.5-4.1 4.2v2.4H7.5v3.2h2.7V22h3.3Z" />
//                 </svg>
//               </a>

//               {/* Instagram */}
//               <a
//                 href="https://www.instagram.com/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 aria-label="Instagram"
//                 className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-[#0F5743]/80 text-white shadow-sm transition-[background-color,border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-[#ED6E21]/60 hover:bg-[#ED6E21] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ED6E21]"
//               >
//                 <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
//                   <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
//                   <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
//                   <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
//                 </svg>
//               </a>

//               {/* YouTube */}
//               <a
//                 href="https://www.youtube.com/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 aria-label="YouTube"
//                 className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-[#0F5743]/80 text-white shadow-sm transition-[background-color,border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-[#ED6E21]/60 hover:bg-[#ED6E21] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ED6E21]"
//               >
//                 <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-current">
//                   <path d="M21.6 7.2a2.7 2.7 0 0 0-1.9-1.9C18 4.8 12 4.8 12 4.8s-6 0-7.7.5a2.7 2.7 0 0 0-1.9 1.9C2 8.9 2 12 2 12s0 3.1.4 4.8a2.7 2.7 0 0 0 1.9 1.9c1.7.5 7.7.5 7.7.5s6 0 7.7-.5a2.7 2.7 0 0 0 1.9-1.9c.4-1.7.4-4.8.4-4.8s0-3.1-.4-4.8ZM10 15.2V8.8l5.5 3.2-5.5 3.2Z" />
//                 </svg>
//               </a>

//               {/* WhatsApp */}
//               <a
//                 href="https://wa.me/917776000664"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 aria-label={isHi ? "WhatsApp पर संपर्क करें" : "Contact us on WhatsApp"}
//                 className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-[#0F5743]/80 text-white shadow-sm transition-[background-color,border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-[#ED6E21]/60 hover:bg-[#ED6E21] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ED6E21]"
//               >
//                 <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-current">
//                   <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2Zm5.82 14.12c-.24.68-1.41 1.3-1.95 1.38-.5.08-1.13.11-1.83-.11-.42-.13-.97-.31-1.66-.61-2.92-1.26-4.83-4.21-4.97-4.4-.15-.2-1.19-1.58-1.19-3.01 0-1.43.75-2.13 1.02-2.42.27-.29.59-.36.78-.36.2 0 .39-.07.66.5.24.59.83 2.03.9 2.18.07.15.12.32.02.51-.1.2-.15.32-.29.49-.15.17-.31.38-.13.6.17.29.76 1.25 1.63 2.02 1.12.99 2.06 1.3 2.35 1.45.29.29.46.12.63-.07.17-.2.73-.85.93-1.14.2-.29.39-.24.66-.15.27.1 1.71.81 2 .95.15.12.49.22.56.34.03.68-.17 1.38-.17 1.38Z" />
//                 </svg>
//               </a>
//             </div>
//           </div>

//           {/* Column 2 — Quick Links */}
//           <div className="flex flex-col items-start text-left">
//             <h2 className="m-0 text-lg font-extrabold tracking-wide text-white sm:text-[19px]">
//               {isHi ? "त्वरित लिंक" : "Quick Links"}
//             </h2>

//             <span aria-hidden="true" className="mt-2.5 h-[3px] w-7 rounded-full bg-[#ED6E21]" />

//             <ul className="m-0 mt-6 flex list-none flex-col gap-3.5 p-0">
//               {quickLinks.map((link) => (
//                 <li key={link.id}>
//                   <a
//                     href={link.href}
//                     onClick={(e) => scrollToSection(e, link.id)}
//                     className="group inline-flex items-center gap-2.5 text-[14.5px] font-medium text-white/90 transition-colors duration-200 hover:text-[#ED6E21] focus-visible:rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ED6E21]"
//                   >
//                     <ChevronRight
//                       aria-hidden="true"
//                       className="h-4 w-4 shrink-0 text-white/80 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-[#ED6E21]"
//                     />
//                     <span>{isHi ? link.hi : link.en}</span>
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Column 3 — Our Services */}
//           <div className="flex flex-col items-start text-left">
//             <h2 className="m-0 text-lg font-extrabold tracking-wide text-white sm:text-[19px]">
//               {isHi ? "हमारी सेवाएँ" : "Our Services"}
//             </h2>

//             <span aria-hidden="true" className="mt-2.5 h-[3px] w-7 rounded-full bg-[#ED6E21]" />

//             <ul className="m-0 mt-6 flex list-none flex-col gap-3 p-0">
//               {services.map(({ en, hi, icon: Icon, href, id }) => (
//                 <li key={en}>
//                   <a
//                     href={href}
//                     onClick={(e) => scrollToSection(e, id)}
//                     className="group inline-flex items-center gap-3 text-[14.5px] font-medium text-white/90 transition-colors duration-200 hover:text-white focus-visible:rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ED6E21]"
//                   >
//                     <span
//                       aria-hidden="true"
//                       className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/15 bg-[#0F5743]/90 text-white transition-[background-color,border-color,transform] duration-200 group-hover:scale-105 group-hover:border-[#ED6E21]/60 group-hover:bg-[#ED6E21]"
//                     >
//                       <Icon className="h-4 w-4 stroke-[2]" />
//                     </span>
//                     <span className="transition-colors duration-200 group-hover:text-[#ED6E21]">
//                       {isHi ? hi : en}
//                     </span>
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Column 4 — Contact Us */}
//           <div className="flex flex-col items-start text-left">
//             <h2 className="m-0 text-lg font-extrabold tracking-wide text-white sm:text-[19px]">
//               {isHi ? "संपर्क करें" : "Contact Us"}
//             </h2>

//             <span aria-hidden="true" className="mt-2.5 h-[3px] w-7 rounded-full bg-[#ED6E21]" />

//             <ul className="m-0 mt-6 flex w-full list-none flex-col gap-4 p-0">
//               {/* Location */}
//               <li className="flex items-start gap-3.5">
//                 <span
//                   aria-hidden="true"
//                   className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/15 bg-[#0F5743]/90 text-white"
//                 >
//                   <MapPin className="h-4 w-4 stroke-[2]" />
//                 </span>

//                 <span className="pt-0.5 text-[14.5px] leading-snug text-white/90">
//                   {isHi ? "रावनवाड़ी, गोंदिया," : "Rawanwadi, Gondia,"}
//                   <span className="block">
//                     {isHi ? "महाराष्ट्र" : "Maharashtra"}
//                   </span>
//                 </span>
//               </li>

//               {/* Phone */}
//               <li className="flex items-center gap-3.5">
//                 <span
//                   aria-hidden="true"
//                   className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/15 bg-[#0F5743]/90 text-white"
//                 >
//                   <Phone className="h-4 w-4 fill-current" />
//                 </span>

//                 <a
//                   href="tel:7776000664"
//                   className="text-[15px] font-semibold tracking-wide text-white transition-colors duration-200 hover:text-[#ED6E21] focus-visible:rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ED6E21]"
//                 >
//                   7776000664
//                 </a>
//               </li>

//               {/* Divider */}
//               <li aria-hidden="true" className="my-0.5">
//                 <hr className="border-0 border-t border-white/10" />
//               </li>

//               {/* Office Hours */}
//               <li className="flex items-start gap-3.5">
//                 <span
//                   aria-hidden="true"
//                   className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/15 bg-[#0F5743]/90 text-white"
//                 >
//                   <Clock className="h-4 w-4 stroke-[2]" />
//                 </span>

//                 <div className="pt-0.5 text-[14px] leading-relaxed text-white/90">
//                   <p className="m-0">
//                     {isHi ? "सोम–शनि: सुबह 9:00 – शाम 6:00 बजे" : "Mon - Sat: 9:00 AM - 6:00 PM"}
//                   </p>
//                   <p className="m-0 text-white/80">
//                     {isHi ? "रविवार: पूर्व नियुक्ति पर" : "Sunday: By Appointment"}
//                   </p>
//                 </div>
//               </li>
//             </ul>

//             {/* Service disclaimer */}
//             <div className="mt-5 w-full border-t border-white/10 pt-3.5">
//               <p className="m-0 text-xs leading-relaxed text-[#FFFFFF]">
//                 {isHi
//                   ? "सभी सेवाएँ पात्रता, लागू शर्तों और स्वीकृति के अधीन हैं।"
//                   : "All services are subject to eligibility, applicable terms, and approval."}
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Full-width Disclaimer Section */}
//       <div
//         id="disclaimer"
//         className="border-t border-white/15 bg-[#0F5743]/50"
//       >
//         <div className="mx-auto flex w-full max-w-[1360px] flex-col gap-3 px-4 py-4 sm:px-8 md:flex-row md:items-start md:gap-6 lg:px-12 2xl:max-w-[1440px]">
//           <div className="flex shrink-0 items-start gap-3">
//             <span
//               aria-hidden="true"
//               className="mt-0.5 h-12 w-1.5 rounded-full bg-[#ED6E21]"
//             />

//             <h3 className="m-0 pt-0.5 text-sm font-bold text-white sm:text-base">
//               {isHi ? "अस्वीकरण:" : "Disclaimer:"}
//             </h3>
//           </div>

//           <p className="m-0 min-w-0 flex-1 text-xs leading-relaxed text-white/80 sm:text-sm">
//             <em>
//               {isHi
//                 ? "यह वेबसाइट सोसाइटी और उसकी सेवाओं के बारे में सामान्य जानकारी प्रदान करती है। योजनाओं की उपलब्धता, ब्याज दरों, रिटर्न, पात्रता, शुल्क और अन्य शर्तों की पुष्टि सोसाइटी से की जानी चाहिए। जमा और ऋण संबंधी जानकारी का अर्थ यह नहीं है कि सोसाइटी एक लाइसेंस प्राप्त बैंक है या उसकी जमाएँ DICGC द्वारा बीमित हैं। प्रकाशन से पहले नियामकीय स्थिति या बीमा कवरेज की पुष्टि की जानी चाहिए।"
//                 : "This website provides general information about the society and its services. Scheme availability, interest rates, returns, eligibility, fees, and other conditions must be confirmed with the society. References to deposits and loans do not imply that the society is a licensed bank or that its deposits are insured by DICGC. Any regulatory status or insurance coverage should be verified before publication."}
//             </em>
//           </p>
//         </div>
//       </div>

//       {/* Bottom Copyright Bar */}
//       <div className="border-t border-white/15 bg-[#0A4033]/60">
//         <div className="mx-auto flex w-full max-w-[1360px] flex-col items-center justify-between gap-4 px-4 py-4 text-xs text-white/80 sm:px-8 md:flex-row lg:px-12 2xl:max-w-[1440px]">
//           <p className="m-0 text-center md:text-left">
//             {isHi
//               ? "© 2026 कल्याण अर्बन को-ऑपरेटिव क्रेडिट सोसाइटी लिमिटेड। सर्वाधिकार सुरक्षित।"
//               : "© 2026 Kalyan Urban Co-operative Credit Society Limited. All Rights Reserved."}
//           </p>

//           <div className="flex flex-wrap items-center justify-center gap-3 md:justify-end">
//             {/* <span
//               aria-hidden="true"
//               className="mr-3 hidden h-6 w-px bg-white/20 md:inline-block"
//             />

//             <a
//               href="#contact"
//               onClick={(e) => scrollToSection(e, "contact")}
//               className="transition-colors duration-200 hover:text-white focus-visible:rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ED6E21]"
//             >
//               {isHi ? "गोपनीयता नीति" : "Privacy Policy"}
//             </a>

//             <span aria-hidden="true" className="text-white/30">
//               |
//             </span>

//             <a
//               href="#contact"
//               onClick={(e) => scrollToSection(e, "contact")}
//               className="transition-colors duration-200 hover:text-white focus-visible:rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ED6E21]"
//             >
//               {isHi ? "नियम एवं शर्तें" : "Terms & Conditions"}
//             </a>

//             <span aria-hidden="true" className="text-white/30">
//               |
//             </span>

//             <a
//               href="#disclaimer"
//               onClick={(e) => scrollToSection(e, "disclaimer")}
//               className="transition-colors duration-200 hover:text-white focus-visible:rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ED6E21]"
//             >
//               {isHi ? "अस्वीकरण" : "Disclaimer"}
//             </a> */}
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }





// src/components/Footer.jsx
import { Fragment } from "react";
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

// Optional visual side assets if already in your project; safe fallback graphics are rendered automatically
import aboutImage from "../assets/images/about-finance.png";
import servicesIllustration from "../assets/images/services-illustration.png";

const NAVBAR_OFFSET = 84;

const quickLinks = [
  { en: "Home", hi: "होम", href: "#home", id: "home" },
  { en: "About Us", hi: "हमारे बारे में", href: "#about", id: "about" },
  { en: "Our Services", hi: "हमारी सेवाएँ", href: "#services", id: "services" },
  { en: "FAQs", hi: "अक्सर पूछे जाने वाले प्रश्न", href: "#faq", id: "faq" },
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

const bannerDepositSchemes = [
  {
    hiTitle: "दाम दुप्पट",
    hiRate: "6 वर्ष में डबल",
    enTitle: "Dam Duppat",
    enRate: "Doubles in 6 Years",
  },
  {
    hiTitle: "सावधि जमा (FD)",
    hiRate: "11 % ब्याज दर",
    enTitle: "Fixed Deposit (FD)",
    enRate: "11% Interest Rate",
  },
  {
    hiTitle: "मासिक जमा (RD)",
    hiRate: "8 % ब्याज दर",
    enTitle: "Monthly Deposit (RD)",
    enRate: "8% Interest Rate",
  },
  {
    hiTitle: "बचत खाता",
    hiRate: "6 % ब्याज दर",
    enTitle: "Savings Account",
    enRate: "6% Interest Rate",
  },
  {
    hiTitle: "दैनिक जमा",
    hiRate: "6 % ब्याज दर",
    enTitle: "Daily Deposit",
    enRate: "6% Interest Rate",
  },
  {
    hiTitle: "मासिक पेंशन",
    hiRate: "1 % प्रति माह",
    enTitle: "Monthly Pension",
    enRate: "1% Per Month",
  },
];

const bannerLoanCategories = [
  { hi: "सोने तारण कर्ज", en: "Gold Mortgage Loan" },
  { hi: "वाहन कर्ज", en: "Vehicle Loan" },
  { hi: "व्यवसाय कर्ज", en: "Business Loan" },
  { hi: "कृषि उपकरण कर्ज", en: "Agricultural Equipment Loan" },
];

function scrollToSection(e, id) {
  const el =
    document.getElementById(id) ||
    (id === "faq" ? document.getElementById("faqs") : null) ||
    (id === "faqs" ? document.getElementById("faq") : null);
  if (!el) return;

  e.preventDefault();

  if (window.lenis?.scrollTo) {
    window.lenis.scrollTo(el, { offset: -NAVBAR_OFFSET });
  } else {
    const top = el.getBoundingClientRect().top + window.scrollY - NAVBAR_OFFSET;
    window.scrollTo({ top, behavior: "smooth" });
  }

  history.replaceState(null, "", `#${el.id}`);
}

export default function Footer() {
  const { lang } = useLanguage();
  const isHi = lang === "hi";

  return (
    <footer
      aria-label={isHi ? "वेबसाइट का फ़ुटर" : "Site Footer"}
      className="relative isolate overflow-hidden bg-gradient-to-b from-[#074232] via-[#053528] to-[#04281E] text-white"
    >
      {/* Top orange-and-green accent bar */}
      <div aria-hidden="true" className="flex h-[5px] w-full">
        <div className="w-[33%] bg-[#ED6E21]" />
        <div className="flex-1 bg-gradient-to-r from-[#0F5743] via-[#0A4033] to-[#052E22]" />
      </div>

      {/* Main 4-Column Footer Section */}
      <div className="mx-auto w-full max-w-[1360px] px-4 pb-6 pt-10 sm:px-8 lg:px-12 lg:pt-12 2xl:max-w-[1440px]">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.35fr_0.9fr_1fr_1.15fr] lg:gap-0">
          {/* Column 1 — Brand and Description */}
          <div className="flex flex-col items-start text-left lg:pr-8 xl:pr-10">
            <a
              href="#home"
              onClick={(e) => scrollToSection(e, "home")}
              aria-label={
                isHi
                  ? "कल्याण अर्बन को-ऑपरेटिव्ह क्रेडिट सोसायटी लिमिटेड — होम"
                  : "Kalyan Urban Co-operative Credit Society Limited — Home"
              }
              className="group inline-flex flex-col items-start focus-visible:rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ED6E21]"
            >
              <div className="w-full max-w-[125px] rounded-xl bg-white p-2.5 shadow-md">
                <img
                  src="/kalyan-logo-cropped.png"
                  alt="Kalyan Urban Co-operative Credit Society Limited Logo"
                  loading="lazy"
                  decoding="async"
                  className="block h-auto w-full object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </div>

              <span className="mt-3.5 block max-w-[290px] text-sm font-extrabold uppercase leading-[1.35] tracking-[0.02em] text-white sm:text-[15px]">
                {isHi
                  ? "कल्याण अर्बन को-ऑपरेटिव्ह क्रेडिट सोसायटी लिमिटेड"
                  : "KALYAN URBAN CO-OPERATIVE CREDIT SOCIETY LIMITED"}
              </span>
            </a>

            <span
              aria-hidden="true"
              className="mt-3 h-[3px] w-11 rounded-full bg-[#ED6E21]"
            />

            <p className="m-0 mt-3 text-[13.5px] italic tracking-wide text-white/95">
              {isHi
                ? "आपके वित्तीय लक्ष्य, हमारी प्रतिबद्धता।"
                : "Your Financial Goals. Our Commitment."}
            </p>

            <p className="m-0 mt-2.5 max-w-sm text-[13.5px] leading-relaxed text-white/85">
              {isHi
                ? "विश्वास, पारदर्शिता और जिम्मेदार सेवा के प्रति प्रतिबद्धता के साथ सदस्यों के लिए बचत योजनाएँ और ऋण सुविधाएँ उपलब्ध कराने का प्रयास।"
                : "Providing member-focused savings schemes and loan facilities with a commitment to trust, transparency, and responsible service."}
            </p>

            {/* Social Media Icons */}
            <div className="mt-5 flex items-center gap-3">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-[#0F5743]/80 text-white shadow-sm transition-[background-color,border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-[#ED6E21] hover:bg-[#ED6E21] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ED6E21]"
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
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-[#0F5743]/80 text-white shadow-sm transition-[background-color,border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-[#ED6E21] hover:bg-[#ED6E21] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ED6E21]"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
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
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-[#0F5743]/80 text-white shadow-sm transition-[background-color,border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-[#ED6E21] hover:bg-[#ED6E21] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ED6E21]"
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
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-[#0F5743]/80 text-white shadow-sm transition-[background-color,border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-[#ED6E21] hover:bg-[#ED6E21] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ED6E21]"
              >
                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2Zm5.82 14.12c-.24.68-1.41 1.3-1.95 1.38-.5.08-1.13.11-1.83-.11-.42-.13-.97-.31-1.66-.61-2.92-1.26-4.83-4.21-4.97-4.4-.15-.2-1.19-1.58-1.19-3.01 0-1.43.75-2.13 1.02-2.42.27-.29.59-.36.78-.36.2 0 .39-.07.66.5.24.59.83 2.03.9 2.18.07.15.12.32.02.51-.1.2-.15.32-.29.49-.15.17-.31.38-.13.6.17.29.76 1.25 1.63 2.02 1.12.99 2.06 1.3 2.35 1.45.29.29.46.12.63-.07.17-.2.73-.85.93-1.14.2-.29.39-.24.66-.15.27.1 1.71.81 2 .95.15.12.49.22.56.34.03.68-.17 1.38-.17 1.38Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2 — Quick Links */}
          <div className="flex flex-col items-start text-left lg:border-l lg:border-white/10 lg:px-7 xl:px-9">
            <h2 className="m-0 text-lg font-extrabold tracking-wide text-white sm:text-[19px]">
              {isHi ? "त्वरित लिंक" : "Quick Links"}
            </h2>

            <span aria-hidden="true" className="mt-2.5 h-[3px] w-7 rounded-full bg-[#ED6E21]" />

            <ul className="m-0 mt-5 flex list-none flex-col gap-3.5 p-0">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.id)}
                    className="group inline-flex items-center gap-2.5 text-[14.5px] font-medium text-white/90 transition-colors duration-200 hover:text-[#ED6E21] focus-visible:rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ED6E21]"
                  >
                    <ChevronRight
                      aria-hidden="true"
                      className="h-4 w-4 shrink-0 text-white/80 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-[#ED6E21]"
                    />
                    <span>{isHi ? link.hi : link.en}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Our Services */}
          <div className="flex flex-col items-start text-left lg:border-l lg:border-white/10 lg:px-7 xl:px-9">
            <h2 className="m-0 text-lg font-extrabold tracking-wide text-white sm:text-[19px]">
              {isHi ? "हमारी सेवाएँ" : "Our Services"}
            </h2>

            <span aria-hidden="true" className="mt-2.5 h-[3px] w-7 rounded-full bg-[#ED6E21]" />

            <ul className="m-0 mt-5 flex list-none flex-col gap-3 p-0">
              {services.map(({ en, hi, icon: Icon, href, id }) => (
                <li key={en}>
                  <a
                    href={href}
                    onClick={(e) => scrollToSection(e, id)}
                    className="group inline-flex items-center gap-3 text-[14.5px] font-medium text-white/90 transition-colors duration-200 hover:text-white focus-visible:rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ED6E21]"
                  >
                    <span
                      aria-hidden="true"
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/25 bg-[#0F5743]/90 text-white transition-[background-color,border-color,transform] duration-200 group-hover:scale-105 group-hover:border-[#ED6E21] group-hover:bg-[#ED6E21]"
                    >
                      <Icon className="h-4 w-4 stroke-[2]" />
                    </span>
                    <span className="transition-colors duration-200 group-hover:text-[#ED6E21]">
                      {isHi ? hi : en}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Contact Us */}
          <div className="flex flex-col items-start text-left lg:border-l lg:border-white/10 lg:pl-7 xl:pl-9">
            <h2 className="m-0 text-lg font-extrabold tracking-wide text-white sm:text-[19px]">
              {isHi ? "संपर्क करें" : "Contact Us"}
            </h2>

            <span aria-hidden="true" className="mt-2.5 h-[3px] w-7 rounded-full bg-[#ED6E21]" />

            <ul className="m-0 mt-5 flex w-full list-none flex-col gap-4 p-0">
              {/* Location */}
              <li className="flex items-start gap-3.5">
                <span
                  aria-hidden="true"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/25 bg-[#0F5743]/90 text-white"
                >
                  <MapPin className="h-4 w-4 stroke-[2]" />
                </span>

                <span className="pt-0.5 text-[14.5px] leading-snug text-white/90">
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
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/25 bg-[#0F5743]/90 text-white"
                >
                  <Phone className="h-4 w-4 fill-current" />
                </span>

                <a
                  href="tel:7776000664"
                  className="text-[15px] font-bold tracking-wide text-white transition-colors duration-200 hover:text-[#ED6E21] focus-visible:rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ED6E21]"
                >
                  7776000664
                </a>
              </li>

              {/* Divider */}
              <li aria-hidden="true" className="my-0.5">
                <hr className="border-0 border-t border-white/15" />
              </li>

              {/* Office Hours */}
              <li className="flex items-start gap-3.5">
                <span
                  aria-hidden="true"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/25 bg-[#0F5743]/90 text-white"
                >
                  <Clock className="h-4 w-4 stroke-[2]" />
                </span>

                <div className="pt-0.5 text-[14px] leading-relaxed text-white/90">
                  <p className="m-0">
                    {isHi
                      ? "सोम–शनि: सुबह 9:00 – शाम 6:00 बजे"
                      : "Mon - Sat: 9:00 AM - 6:00 PM"}
                  </p>
                  <p className="m-0 text-white/80">
                    {isHi
                      ? "रविवार: पूर्व नियुक्ति पर"
                      : "Sunday: By Appointment"}
                  </p>
                </div>
              </li>
            </ul>

            {/* Service disclaimer */}
            <div className="mt-4 w-full border-t border-white/15 pt-3.5">
              <p className="m-0 text-xs leading-relaxed text-white/90">
                {isHi
                  ? "सभी सेवाएँ पात्रता, लागू शर्तों और स्वीकृति के अधीन हैं।"
                  : "All services are subject to eligibility, applicable terms, and approval."}
              </p>
            </div>
          </div>
        </div>

        {/* Official Society Promotional Banner (Dynamic Hindi / English) */}
{/* Official Society Promotional Banner */}
        <div className="mt-8 sm:mt-10">
          <div
            role="region"
            aria-label={
              isHi
                ? "कल्याण अर्बन आधिकारिक प्रचार बैनर"
                : "Kalyan Urban Official Promotional Banner"
            }
            className="relative isolate overflow-hidden rounded-[22px] border-[3.5px] border-[#ED6E21] bg-gradient-to-b from-white via-[#FBFDFB] to-[#F4F5EE] text-[#111827] shadow-[0_20px_50px_-20px_rgba(0,0,0,0.55)]"
          >
            {/* Subtle diagonal halftone dot texture in upper corners */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 -z-10 opacity-20"
              style={{
                backgroundImage:
                  "radial-gradient(#0F5743 1.1px, transparent 1.1px)",
                backgroundSize: "11px 11px",
              }}
            />

            {/* Left Visual: Full-bleed Coin Jar & Sprout from public folder + Corner Swooshes */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 left-0 z-0 hidden w-[215px] select-none lg:block xl:w-[245px]"
            >
              {/* ⚠️ Uses your public folder left side image. Update filename if named differently in /public */}
              <img
                src="/banner-left.png"
                onError={(e) => {
                  const fallbacks = [
                    "/coin-jar.png",
                    "/left-jar.png",
                    "/jar-plant.png",
                  ];
                  const idx = Number(e.currentTarget.dataset.fb || 0);
                  if (idx < fallbacks.length) {
                    e.currentTarget.dataset.fb = idx + 1;
                    e.currentTarget.src = fallbacks[idx];
                  }
                }}
                alt=""
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover object-left-bottom"
                style={{
                  WebkitMaskImage:
                    "linear-gradient(to right, black 72%, transparent 100%)",
                  maskImage:
                    "linear-gradient(to right, black 72%, transparent 100%)",
                }}
              />

              {/* Bottom-left green & orange curved swooshes overlapping the jar base */}
              <svg
                viewBox="0 0 230 190"
                className="absolute bottom-0 left-0 z-10 h-40 w-52 xl:h-44 xl:w-56"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,45 Q75,115 185,190 L0,190 Z"
                  fill="#0F764A"
                  opacity="0.95"
                />
                <path d="M0,72 Q70,132 165,190 L0,190 Z" fill="#ED6E21" />
                <path d="M0,98 Q65,148 150,190 L0,190 Z" fill="#064E35" />
              </svg>
            </div>

            {/* Right Visual: Full-bleed Coins & House from public folder + Top-right Corner Swooshes */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 right-0 z-0 hidden w-[225px] select-none lg:block xl:w-[260px]"
            >
              {/* ⚠️ Uses your public folder right side image. Update filename if named differently in /public */}
              <img
                src="/banner-right.png"
                onError={(e) => {
                  const fallbacks = [
                    "/coins-house.png",
                    "/right-house.png",
                    "/about-finance.png",
                  ];
                  const idx = Number(e.currentTarget.dataset.fb || 0);
                  if (idx < fallbacks.length) {
                    e.currentTarget.dataset.fb = idx + 1;
                    e.currentTarget.src = fallbacks[idx];
                  }
                }}
                alt=""
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover object-right-bottom"
                style={{
                  WebkitMaskImage:
                    "linear-gradient(to left, black 74%, transparent 100%)",
                  maskImage:
                    "linear-gradient(to left, black 74%, transparent 100%)",
                }}
              />

              {/* Top-right layered green curved swooshes */}
              <svg
                viewBox="0 0 220 185"
                className="absolute right-0 top-0 z-10 h-40 w-48 xl:h-44 xl:w-52"
                preserveAspectRatio="none"
              >
                <path
                  d="M145,0 Q190,65 220,160 L220,0 Z"
                  fill="#15803D"
                  opacity="0.88"
                />
                <path d="M168,0 Q200,55 220,130 L220,0 Z" fill="#064E35" />
              </svg>
            </div>

            {/* Center Banner Content: Logo + Headings + Schemes + Loans + Address */}
            <div className="relative z-10 mx-auto flex min-w-0 flex-col items-center px-4 py-4 text-center sm:px-6 lg:px-[195px] lg:py-3.5 xl:px-[230px]">
              {/* Top Header: Emblem (Left) + Title Block (Right) */}
              <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:items-center sm:gap-5 md:gap-7">
                <div className="flex shrink-0 flex-col items-center">
                <div className="w-full max-w-[125px]   ">
                  <img
                    src="/kalyan-logo-crop.png"
                    alt="Kalyan Urban Emblem"
                    loading="lazy"
                    decoding="async"
                    className="block h-auto w-full object-contain"
                  />
                </div>

                <span className="mt-1 text-[10px] font-bold tracking-tight text-[#111827] sm:text-[11px]">
                  {isHi
                    ? "॥ सर्वेषां कल्याणम्, सर्वेषां समृद्धिः ॥"
                    : "|| Sarvesham Kalyanam, Sarvesham Samriddhih ||"}
                </span>
              </div>

                <div className="flex flex-col items-center text-center">
                  <p className="m-0 text-xs font-extrabold tracking-wide text-[#111827] sm:text-[15px] xl:text-base">
                    {isHi
                      ? "महाराष्ट्र सरकार मान्यता प्राप्त"
                      : "Recognized by Government of Maharashtra"}
                  </p>

                  <h3 className="m-0 mt-0.5 text-3xl font-black leading-[1.02] tracking-tight text-[#065A3F] drop-shadow-[0_1px_1px_rgba(0,0,0,0.08)] sm:text-5xl xl:text-[3.85rem]">
                    {isHi ? "कल्याण अर्बन" : "KALYAN URBAN"}
                  </h3>

                  <p className="m-0 mt-1 text-base font-extrabold tracking-wide text-[#ED6E21] sm:text-2xl xl:text-[1.85rem]">
                    {isHi
                      ? "क्रेडिट को - ऑपरेटिव सोसायटी लिमिटेड"
                      : "Credit Co-operative Society Limited"}
                  </p>
                </div>
              </div>

              {/* Middle Row: 6 Deposit Schemes with Interest Rates & Vertical Dividers */}
              <div className="mt-3 w-full border-y border-[#111827]/20 py-2">
                <div className="grid grid-cols-2 gap-y-2.5 divide-x-0 sm:grid-cols-3 md:grid-cols-6 md:divide-x md:divide-[#111827]/35">
                  {bannerDepositSchemes.map((scheme) => (
                    <div
                      key={scheme.enTitle}
                      className="flex flex-col items-center justify-center px-1.5 text-center"
                    >
                      <span className="text-xs font-extrabold leading-tight text-[#065A3F] sm:text-[14.5px] xl:text-[16.5px]">
                        {isHi ? scheme.hiTitle : scheme.enTitle}
                      </span>
                      <span className="mt-0.5 text-[11px] font-extrabold text-[#111827] sm:text-xs xl:text-[13.5px]">
                        {isHi ? scheme.hiRate : scheme.enRate}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Loan Categories Row */}
              <div className="mt-2 flex w-full flex-wrap items-center justify-center gap-x-3 gap-y-1 border-b border-[#111827]/20 pb-2 text-sm font-extrabold text-[#ED6E21] sm:gap-x-6 sm:text-base xl:text-[19px]">
                {bannerLoanCategories.map((loan, idx) => (
                  <Fragment key={loan.en}>
                    <span>{isHi ? loan.hi : loan.en}</span>
                    {idx < bannerLoanCategories.length - 1 && (
                      <span
                        aria-hidden="true"
                        className="font-normal text-[#111827]/45"
                      >
                        |
                      </span>
                    )}
                  </Fragment>
                ))}
              </div>

              {/* Head Office Address & Contact Bar */}
              <p className="m-0 mt-2 text-xs font-extrabold leading-snug text-[#111827] sm:text-sm xl:text-[16px]">
                {isHi ? (
                  <>
                    मुख्य कार्यालय : साईआशिर्वाद मोटर्स के बाजू, गोंदिया बालाघाट
                    रोड, रावनवाड़ी, गोंदिया. संपर्क :{" "}
                    <a
                      href="tel:7776000664"
                      className="font-black text-[#111827] underline-offset-2 hover:text-[#ED6E21] hover:underline"
                    >
                      7776000664
                    </a>
                  </>
                ) : (
                  <>
                    Head Office : Beside Sai Ashirwad Motors, Gondia Balaghat
                    Road, Rawanwadi, Gondia. Contact :{" "}
                    <a
                      href="tel:7776000664"
                      className="font-black text-[#111827] underline-offset-2 hover:text-[#ED6E21] hover:underline"
                    >
                      7776000664
                    </a>
                  </>
                )}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Full-width Disclaimer Section */}
      <div
        id="disclaimer"
        className="mt-2 border-t border-white/15 bg-[#083A2C]/80"
      >
        <div className="mx-auto flex w-full max-w-[1360px] flex-col gap-3 px-4 py-4 sm:px-8 md:flex-row md:items-center md:gap-5 lg:px-12 2xl:max-w-[1440px]">
          <div className="flex shrink-0 items-center gap-3">
            <span
              aria-hidden="true"
              className="h-9 w-1 rounded-full bg-[#ED6E21]"
            />

            <h3 className="m-0 text-sm font-extrabold text-white sm:text-base">
              {isHi ? "अस्वीकरण:" : "Disclaimer:"}
            </h3>
          </div>

          <p className="m-0 min-w-0 flex-1 text-xs leading-relaxed text-white/90 sm:text-[13px]">
            <em>
              {isHi
                ? "यह वेबसाइट सोसायटी और उसकी सेवाओं के बारे में सामान्य जानकारी प्रदान करती है। योजनाओं की उपलब्धता, ब्याज दरों, रिटर्न, पात्रता, शुल्क और अन्य शर्तों की पुष्टि सोसायटी से की जानी चाहिए। जमा और ऋण संबंधी जानकारी का अर्थ यह नहीं है कि सोसायटी एक लाइसेंस प्राप्त बैंक है या उसकी जमाएँ DICGC द्वारा बीमित हैं। प्रकाशन से पहले नियामकीय स्थिति या बीमा कवरेज की पुष्टि की जानी चाहिए।"
                : "This website provides general information about the society and its services. Scheme availability, interest rates, returns, eligibility, fees, and other conditions must be confirmed with the society. References to deposits and loans do not imply that the society is a licensed bank or that its deposits are insured by DICGC. Any regulatory status or insurance coverage should be verified before publication."}
            </em>
          </p>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="border-t border-white/15 bg-[#04241B]">
        <div className="mx-auto flex w-full max-w-[1360px] flex-col items-center justify-between gap-3 px-4 py-3.5 text-xs text-white/85 sm:px-8 md:flex-row lg:px-12 2xl:max-w-[1440px]">
          <p className="m-0 text-center md:text-left">
            {isHi
              ? "© 2026 कल्याण अर्बन को-ऑपरेटिव्ह क्रेडिट सोसायटी लिमिटेड. सर्वाधिकार सुरक्षित।"
              : "© 2026 Kalyan Urban Co-operative Credit Society Limited. All Rights Reserved."}
          </p>

          {/* <div className="flex flex-wrap items-center justify-center gap-3 md:justify-end">
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, "contact")}
              className="transition-colors duration-200 hover:text-[#ED6E21] focus-visible:rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ED6E21]"
            >
              {isHi ? "गोपनीयता नीति" : "Privacy Policy"}
            </a>

            <span aria-hidden="true" className="text-white/35">
              |
            </span>

            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, "contact")}
              className="transition-colors duration-200 hover:text-[#ED6E21] focus-visible:rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ED6E21]"
            >
              {isHi ? "उपयोग की शर्तें" : "Terms of Use"}
            </a>

            <span aria-hidden="true" className="text-white/35">
              |
            </span>

            <a
              href="#home"
              onClick={(e) => scrollToSection(e, "home")}
              className="transition-colors duration-200 hover:text-[#ED6E21] focus-visible:rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ED6E21]"
            >
              {isHi ? "साइट मैप" : "Sitemap"}
            </a>
          </div> */}
        </div>
      </div>
    </footer>
  );
}
