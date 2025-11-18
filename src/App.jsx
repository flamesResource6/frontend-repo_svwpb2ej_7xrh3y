import React, { useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import { UnderstandingChallenge, OurApproach, Differentiation, Testimonials, Pricing, UnderstandingCost, FAQ, FinalCTA, Footer } from "./components/Sections";

function useScrollDepth() {
  useEffect(() => {
    let max = 0;
    const onScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const pct = Math.round((scrollTop / docHeight) * 100);
      if (pct > max) {
        max = pct;
        try {
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({ event: "scroll_depth", value: pct });
        } catch {}
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
}

export default function App() {
  useScrollDepth();
  return (
    <div className="font-[Inter] text-slate-800">
      <Header />
      <main>
        <Hero />
        <UnderstandingChallenge />
        <OurApproach />
        <Differentiation />
        <Testimonials />
        <Pricing />
        <UnderstandingCost />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
