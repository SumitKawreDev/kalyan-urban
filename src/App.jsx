import React, { useEffect } from 'react';
import Lenis from 'lenis';
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
      </div>
    </LanguageProvider>
  );
}
