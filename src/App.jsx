import React, { useEffect } from 'react';
import Lenis from 'lenis';
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { LanguageProvider } from "./context/LanguageContext";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import GetStarted from './components/GetStarted';
import FAQ from './components/FAQ';
import GetInTouch from './components/GetInTouch';
import './App.css';

export default function App() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[#F3F8F5] flex flex-col selection:bg-[#ED6E21] selection:text-white">
        {/* Sticky Fixed Navbar */}
        <Navbar />
        {/* Main Content Area - padded to clear the navbar cleanly */}
        <main className="flex-1 pt-[var(--navbar-height)]">
          <Hero/>
          <About/>
          <Services/>
          <WhyChooseUs/>
          <GetStarted/>
          <FAQ/>
          <GetInTouch/>
        </main>
        {/* Sticky Fixed Navbar */}
        <Footer/>

            {/* Floating WhatsApp Button */}
            <motion.a
            href="https://wa.me/917776000664"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            whileHover={{ y: -4, scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-6 right-6 z-[9999] flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_rgba(37,211,102,0.4)] sm:bottom-7 sm:right-7 sm:h-[70px] sm:w-[70px]"
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-8 w-8 sm:h-9 sm:w-9"
              aria-hidden="true"
            >
              <path d="M20.52 3.48A11.87 11.87 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.9c0 2.1.55 4.15 1.6 5.96L0 24l6.3-1.65a11.9 11.9 0 0 0 5.74 1.46h.01c6.56 0 11.9-5.34 11.9-11.9 0-3.18-1.24-6.17-3.43-8.43zM12.05 21.8h-.01A9.9 9.9 0 0 1 7 20.43l-.36-.21-3.74.98 1-3.65-.24-.38a9.86 9.86 0 0 1-1.52-5.27c0-5.47 4.45-9.92 9.92-9.92 2.65 0 5.14 1.03 7.01 2.91a9.87 9.87 0 0 1 2.91 7.01c0 5.47-4.45 9.9-9.93 9.9zm5.45-7.42c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.78-1.67-2.08-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37s-1.04 1.02-1.04 2.48 1.07 2.87 1.22 3.07c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.41.25-.7.25-1.29.17-1.42-.07-.12-.27-.2-.57-.35z" />
            </svg>
          </motion.a>
      </div>
    </LanguageProvider>
  );
}
