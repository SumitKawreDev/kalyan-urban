// import React, { useState, useEffect, useRef } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { ArrowRight, Menu, X, PhoneCall } from 'lucide-react';

// const NAV_ITEMS = [
//   { label: 'Home', href: '#home', id: 'home' },
//   { label: 'About Us', href: '#about', id: 'about' },
//   { label: 'Our Services', href: '#services', id: 'services' },
//   { label: 'Why Choose Us', href: '#why-us', id: 'why-us' },
//   { label: 'How to Get Started', href: '#process', id: 'process' },
//   { label: 'FAQs', href: '#faqs', id: 'faqs' },
// ];

// export default function Navbar() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [activeSection, setActiveSection] = useState('home');
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const observerRef = useRef(null);

//   // Detect scroll offset for sticky navbar elevation
//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20);
//     };
//     window.addEventListener('scroll', handleScroll, { passive: true });
//     handleScroll();
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // Track active section via IntersectionObserver
//   useEffect(() => {
//     const sectionIds = ['home', 'about', 'services', 'why-us', 'process', 'faqs', 'contact'];
//     const sections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);

//     if (sections.length === 0) return;

//     observerRef.current = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setActiveSection(entry.target.id);
//           }
//         });
//       },
//       {
//         root: null,
//         rootMargin: '-25% 0px -65% 0px',
//         threshold: 0,
//       }
//     );

//     sections.forEach((sec) => observerRef.current.observe(sec));
//     return () => {
//       if (observerRef.current) observerRef.current.disconnect();
//     };
//   }, []);

//   // Lock body scroll when mobile menu is open
//   useEffect(() => {
//     if (isMobileMenuOpen) {
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = '';
//     }
//     return () => {
//       document.body.style.overflow = '';
//     };
//   }, [isMobileMenuOpen]);

//   const handleNavClick = (e, targetId) => {
//     e.preventDefault();
//     const element = document.getElementById(targetId);
//     if (element) {
//       const yOffset = -76;
//       const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
//       window.scrollTo({ top: y, behavior: 'smooth' });
//     }
//     setIsMobileMenuOpen(false);
//   };

//   return (
//     <header
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//         isScrolled
//           ? 'bg-white/95 backdrop-blur-md shadow-sm py-2'
//           : 'bg-white py-2.5 border-b border-[#E3EBE6]'
//       }`}
//       role="banner"
//     >
//       <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between gap-4 h-14">
          
//           {/* Brand Left: Logo + Society Name */}
//           <a
//             href="#home"
//             onClick={(e) => handleNavClick(e, 'home')}
//             className="flex items-center gap-3 shrink-0 focus:outline-none"
//             aria-label="Kalyan Urban Co-operative Credit Society Limited"
//           >
//             <div className="navbar-logo-wrapper">
//               <img
//                 src="/kalyan-logo.png"
//                 alt="Kalyan Urban Logo"
//                 className="navbar-logo-img"
//               />
//             </div>
//           </a>

//           {/* Desktop Navigation Links */}
//           <nav
//             className="hidden lg:flex items-center gap-6 xl:gap-8"
//             aria-label="Primary Navigation"
//           >
//             {NAV_ITEMS.map((item) => (
//               <a
//                 key={item.id}
//                 href={item.href}
//                 onClick={(e) => handleNavClick(e, item.id)}
//                 className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
//                 aria-current={activeSection === item.id ? 'page' : undefined}
//               >
//                 {item.label}
//               </a>
//             ))}
//           </nav>

//           {/* Desktop CTA Button */}
//           <div className="hidden lg:flex items-center shrink-0">
//             <a
//               href="#contact"
//               onClick={(e) => handleNavClick(e, 'contact')}
//               className="cta-button"
//             >
//               <span>Contact Us</span>
//               <ArrowRight className="w-4 h-4 cta-arrow" />
//             </a>
//           </div>

//           {/* Mobile Hamburger Toggle Button */}
//           <div className="flex lg:hidden items-center shrink-0">
//             <button
//               type="button"
//               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//               className="p-2 rounded-md text-[#183D32] hover:text-[#ED6E21] hover:bg-[#F3F8F5] transition-colors focus:outline-none"
//               aria-expanded={isMobileMenuOpen}
//               aria-controls="mobile-navigation"
//               aria-label={isMobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
//             >
//               {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//             </button>
//           </div>

//         </div>
//       </div>

//       {/* Mobile Navigation Panel */}
//       <AnimatePresence>
//         {isMobileMenuOpen && (
//           <>
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.2 }}
//               onClick={() => setIsMobileMenuOpen(false)}
//               className="fixed inset-0 top-[76px] bg-black/40 backdrop-blur-sm z-40 lg:hidden"
//               aria-hidden="true"
//             />

//             <motion.div
//               id="mobile-navigation"
//               initial={{ y: -10, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               exit={{ y: -10, opacity: 0 }}
//               transition={{ duration: 0.2, ease: 'easeOut' }}
//               className="absolute top-full left-0 right-0 bg-white shadow-xl border-b border-[#E3EBE6] z-50 lg:hidden px-6 py-5 max-h-[calc(100vh-80px)] overflow-y-auto"
//             >
//               <div className="flex flex-col space-y-3">
//                 <span className="text-[11px] font-bold uppercase tracking-wider text-[#64756D]">
//                   Navigation
//                 </span>
//                 {NAV_ITEMS.map((item, idx) => {
//                   const isActive = activeSection === item.id;
//                   return (
//                     <motion.a
//                       key={item.id}
//                       href={item.href}
//                       initial={{ opacity: 0, x: -8 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       transition={{ delay: idx * 0.03 }}
//                       onClick={(e) => handleNavClick(e, item.id)}
//                       className={`text-base font-medium py-2 px-3 rounded transition-colors flex items-center justify-between ${
//                         isActive
//                           ? 'bg-[#0F5743]/10 text-[#0F5743] font-semibold border-l-4 border-[#ED6E21]'
//                           : 'text-[#183D32] hover:bg-[#F3F8F5] hover:text-[#ED6E21]'
//                       }`}
//                     >
//                       <span>{item.label}</span>
//                       {isActive && <span className="w-2 h-2 rounded-full bg-[#ED6E21]" />}
//                     </motion.a>
//                   );
//                 })}

//                 <div className="pt-4 border-t border-[#E3EBE6] flex flex-col gap-3">
//                   <a
//                     href="#contact"
//                     onClick={(e) => handleNavClick(e, 'contact')}
//                     className="cta-button w-full justify-center py-2.5"
//                   >
//                     <PhoneCall className="w-4 h-4" />
//                     <span>Contact Us</span>
//                   </a>
//                   {/* <p className="text-center text-xs text-[#64756D]">
//                     “Your Financial Goals. Our Commitment.”
//                   </p> */}
//                 </div>
//               </div>
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>
//     </header>
//   );
// }




//english-hindi swicher 

// src/components/Navbar.jsx
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Menu, X, PhoneCall } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function Navbar() {
  const { lang, setLanguage, t } = useLanguage();
  const navItems = t.navbar.items;

  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const observerRef = useRef(null);

  // Detect scroll offset for sticky navbar elevation
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track active section via IntersectionObserver
  useEffect(() => {
    const sectionIds = [
      "home",
      "about",
      "services",
      "why-us",
      "process",
      "faq",
      "faqs",
      "contact",
    ];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (sections.length === 0) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const matchedId =
              entry.target.id === "faqs" ? "faq" : entry.target.id;
            setActiveSection(matchedId);
          }
        });
      },
      {
        root: null,
        rootMargin: "-25% 0px -65% 0px",
        threshold: 0,
      }
    );

    sections.forEach((sec) => observerRef.current.observe(sec));
    return () => {
      if (observerRef.current) observerRef.current.disconnect();
    };
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const element =
      document.getElementById(targetId) ||
      (targetId === "faq" ? document.getElementById("faqs") : null);
    if (element) {
      const yOffset = -84;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm"
          : "bg-white border-b border-[#E3EBE6]"
      }`}
      role="banner"
    >
      <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-[var(--navbar-height)] items-center justify-between gap-3 xl:gap-4">
          {/* Brand Left: Logo + Society Name */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "home")}
            className="flex items-center gap-3 shrink-0 focus:outline-none"
            aria-label={t.navbar.brandAria}
          >
            <div className="navbar-logo-wrapper">
              <img
                src="/kalyan-logo.png"
                alt={t.navbar.logoAlt}
                className="navbar-logo-img"
              />
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav
            className="hidden lg:flex items-center gap-5 xl:gap-7"
            aria-label={t.navbar.navAria}
          >
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`nav-link whitespace-nowrap ${
                  activeSection === item.id ? "active" : ""
                }`}
                aria-current={activeSection === item.id ? "page" : undefined}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop Language Switcher + CTA Button */}
          <div className="hidden lg:flex items-center gap-3 xl:gap-4 shrink-0">
            {/* Compact EN | हिंदी Rounded Pill Switcher */}
            <div
              role="group"
              aria-label={t.navbar.languageLabel}
              className="inline-flex items-center rounded-full border border-[#0F5743]/80 bg-white p-1 shadow-[0_2px_10px_-4px_rgba(10,64,51,0.70)] transition-colors duration-200 hover:border-[#0F5743]/99"
            >
              <button
                type="button"
                onClick={() => setLanguage("en")}
                aria-pressed={lang === "en"}
                className={`rounded-full px-3 py-1 text-xs font-extrabold tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ED6E21]/50 ${
                  lang === "en"
                    ? "bg-[#ED6E21] text-white shadow-sm"
                    : "bg-transparent text-[#0A4033] hover:text-[#ED6E21]"
                }`}
              >
                EN
              </button>

              <span
                aria-hidden="true"
                className="mx-0.5 select-none text-xs font-normal text-[#0F5743]/99"
              >
                |
              </span>

              <button
                type="button"
                onClick={() => setLanguage("hi")}
                aria-pressed={lang === "hi"}
                className={`rounded-full px-3 py-1 text-xs font-bold tracking-normal transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ED6E21]/50 ${
                  lang === "hi"
                    ? "bg-[#ED6E21] text-white shadow-sm"
                    : "bg-transparent text-[#0A4033] hover:text-[#ED6E21]"
                }`}
              >
                हिंदी
              </button>
            </div>

            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "contact")}
              className="cta-button whitespace-nowrap"
            >
              <span>{t.navbar.contactUs}</span>
              <ArrowRight className="w-4 h-4 cta-arrow" />
            </a>
          </div>

          {/* Mobile/Tablet Quick Switcher + Hamburger Toggle Button */}
          <div className="flex lg:hidden items-center gap-2.5 shrink-0">
            <div
              role="group"
              aria-label={t.navbar.languageLabel}
              className="inline-flex items-center rounded-full border border-[#0F5743]/80 bg-white p-0.5 shadow-xs"
            >
              <button
                type="button"
                onClick={() => setLanguage("en")}
                aria-pressed={lang === "en"}
                className={`rounded-full px-2.5 py-1 text-[11px] font-extrabold transition-all duration-200 ${
                  lang === "en"
                    ? "bg-[#ED6E21] text-white"
                    : "bg-transparent text-[#0A4033]"
                }`}
              >
                EN
              </button>
              <span
                aria-hidden="true"
                className="select-none text-[11px] text-[#0F5743]/99"
              >
                |
              </span>
              <button
                type="button"
                onClick={() => setLanguage("hi")}
                aria-pressed={lang === "hi"}
                className={`rounded-full px-2.5 py-1 text-[11px] font-bold transition-all duration-200 ${
                  lang === "hi"
                    ? "bg-[#ED6E21] text-white"
                    : "bg-transparent text-[#0A4033]"
                }`}
              >
                हिंदी
              </button>
            </div>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md text-[#183D32] hover:text-[#ED6E21] hover:bg-[#F3F8F5] transition-colors focus:outline-none"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation"
              aria-label={
                isMobileMenuOpen ? t.navbar.closeMenu : t.navbar.openMenu
              }
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 top-[var(--navbar-height)] bg-black/40 backdrop-blur-sm z-40 lg:hidden"
              aria-hidden="true"
            />

            <motion.div
              id="mobile-navigation"
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute top-full left-0 right-0 bg-white shadow-xl border-b border-[#E3EBE6] z-50 lg:hidden px-6 py-5 max-h-[calc(100vh_-_var(--navbar-height))] overflow-y-auto"
            >
              <div className="flex flex-col space-y-3">
                <div className="flex items-center justify-between pb-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#64756D]">
                    {t.navbar.mobileTitle}
                  </span>

                  {/* Mobile Menu Language Switcher Pill */}
                  {/* <div
                    role="group"
                    aria-label={t.navbar.languageLabel}
                    className="inline-flex items-center rounded-full border border-[#0F5743]/25 bg-white p-1"
                  >
                    <button
                      type="button"
                      onClick={() => setLanguage("en")}
                      aria-pressed={lang === "en"}
                      className={`rounded-full px-3 py-1 text-xs font-extrabold transition-all duration-200 ${
                        lang === "en"
                          ? "bg-[#ED6E21] text-white shadow-xs"
                          : "bg-transparent text-[#0A4033]"
                      }`}
                    >
                      EN
                    </button>
                    <span
                      aria-hidden="true"
                      className="mx-0.5 select-none text-xs text-[#0F5743]/30"
                    >
                      |
                    </span>
                    <button
                      type="button"
                      onClick={() => setLanguage("hi")}
                      aria-pressed={lang === "hi"}
                      className={`rounded-full px-3 py-1 text-xs font-bold transition-all duration-200 ${
                        lang === "hi"
                          ? "bg-[#ED6E21] text-white shadow-xs"
                          : "bg-transparent text-[#0A4033]"
                      }`}
                    >
                      हिंदी
                    </button>
                  </div> */}
                </div>

                {navItems.map((item, idx) => {
                  const isActive = activeSection === item.id;
                  return (
                    <motion.a
                      key={item.id}
                      href={item.href}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.03 }}
                      onClick={(e) => handleNavClick(e, item.id)}
                      className={`text-base font-medium py-2 px-3 rounded transition-colors flex items-center justify-between ${
                        isActive
                          ? "bg-[#0F5743]/10 text-[#0F5743] font-semibold border-l-4 border-[#ED6E21]"
                          : "text-[#183D32] hover:bg-[#F3F8F5] hover:text-[#ED6E21]"
                      }`}
                    >
                      <span>{item.label}</span>
                      {isActive && (
                        <span className="w-2 h-2 rounded-full bg-[#ED6E21]" />
                      )}
                    </motion.a>
                  );
                })}

                <div className="pt-4 border-t border-[#E3EBE6] flex flex-col gap-3">
                  <a
                    href="#contact"
                    onClick={(e) => handleNavClick(e, "contact")}
                    className="cta-button w-full justify-center py-2.5"
                  >
                    <PhoneCall className="w-4 h-4" />
                    <span>{t.navbar.contactUs}</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
