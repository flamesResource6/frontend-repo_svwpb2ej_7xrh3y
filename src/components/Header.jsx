import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import CTAButton from "./CTAButton";
import { motion, useScroll, useSpring } from "framer-motion";

function useSourceParam() {
  const [source, setSource] = useState("");
  useEffect(() => {
    try {
      const s = new URLSearchParams(window.location.search).get("source") || "";
      setSource(s);
    } catch {}
  }, []);
  return source;
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const source = useSourceParam();
  const { scrollYProgress } = useScroll();
  const width = useSpring(scrollYProgress, { stiffness: 120, damping: 20, mass: 0.2 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItem = (label, href, event) => (
    <a
      key={label}
      href={href}
      onClick={() => {
        try {
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({ event: "nav_click", label });
        } catch {}
      }}
      className="text-sm font-medium text-slate-200 hover:text-white transition"
    >
      {label}
    </a>
  );

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-950/60 ${scrolled ? "bg-slate-950/80 border-b border-white/10" : "bg-slate-950/40"}`}>
      <motion.div
        className="absolute top-0 left-0 h-[3px] bg-[#FF6B35] origin-left"
        style={{ scaleX: width }}
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="text-white font-extrabold tracking-tight text-lg">Millennium Medical Associates</div>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <div className="inline-flex items-center text-xs text-slate-300/80">
              <span role="img" aria-label="trophy" className="mr-2">🏆</span>
              Beverly Hills Small Business Award-Winner for Best Mental Health Clinic • Established 2011
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navItem("HOME", "#home")}
            {navItem("ADHD PRE-ASSESSMENT", "#pre")}
            {navItem("WHY US", "#why")}
            {navItem("FAQS", "#faq")}
            <CTAButton
              label="SCHEDULE APPOINTMENT"
              href={`https://www.millenniummedicalassociates.com/schedule-an-appointment${source ? `?source=${source}` : ""}`}
              size="md"
              eventName="schedule_click"
            />
          </div>

          <button
            className="md:hidden text-white p-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-slate-900/95">
          <div className="px-4 py-3 space-y-3">
            <a href="#home" className="block text-slate-200" onClick={() => setOpen(false)}>HOME</a>
            <a href="#pre" className="block text-slate-200" onClick={() => setOpen(false)}>ADHD PRE-ASSESSMENT</a>
            <a href="#why" className="block text-slate-200" onClick={() => setOpen(false)}>WHY US</a>
            <a href="#faq" className="block text-slate-200" onClick={() => setOpen(false)}>FAQS</a>
            <div className="pt-2">
              <CTAButton
                label="SCHEDULE APPOINTMENT"
                href={`https://www.millenniummedicalassociates.com/schedule-an-appointment${source ? `?source=${source}` : ""}`}
                size="md"
                className="w-full"
                eventName="schedule_click"
              />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
