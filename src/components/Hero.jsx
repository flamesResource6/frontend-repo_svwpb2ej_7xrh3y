import React from "react";
import CTAButton from "./CTAButton";
import { ShieldCheck, ClipboardCheck, Building2 } from "lucide-react";

function NextAppointmentBadge() {
  const [text, setText] = React.useState("Checking availability...");

  React.useEffect(() => {
    // Mock next-availability within next 3 days
    const now = new Date();
    const day = new Date(now.getTime() + 2 * 24 * 60 * 60 * 1000);
    const options = { weekday: "short", month: "short", day: "numeric" };
    setText(`Next availability: ${day.toLocaleDateString(undefined, options)}`);

    try {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ event: "badge_render", label: "next_availability" });
    } catch {}
  }, []);

  return (
    <span className="inline-flex items-center rounded-full bg-white/15 text-white px-3 py-1 text-xs font-medium ring-1 ring-white/30">
      {text}
    </span>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28">
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(245,58%,72%)] to-[hsl(276,46%,55%)]" />
      <div className="relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
              Award-Winning ADHD Specialists Who Actually Listen
            </h1>
            <p className="mt-4 text-xl text-white/90">
              <span className="font-bold">60-90 Minute Evaluations</span>, Not <span className="font-bold">15-Minute</span> Rush Jobs. Comprehensive, compassionate, and science-backed care.
            </p>
            <p className="mt-4 text-white/90 leading-relaxed">
              We provide thorough adult ADHD evaluations, evidence-based treatment, and ongoing support from board-certified experts.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <NextAppointmentBadge />
              <div className="inline-flex items-center text-white/90 text-sm gap-3">
                <span className="inline-flex items-center gap-1"><ShieldCheck className="w-4 h-4" /> ADHD-CCSP Certified Specialists</span>
                <span className="inline-flex items-center gap-1"><ClipboardCheck className="w-4 h-4" /> Board-Certified Psychiatry</span>
                <span className="inline-flex items-center gap-1"><Building2 className="w-4 h-4" /> Beverly Hills Practice Since 2011</span>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <CTAButton
                label="Start Free Pre-Assessment"
                href="https://start.millenniummedicalassociates.com/assessment"
                size="lg"
                className="min-w-[220px]"
                eventName="preassessment_click"
                eventParams={{ section: "hero" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
