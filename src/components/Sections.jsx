import React, { useEffect } from "react";
import CTAButton from "./CTAButton";
import { BadgeCheck, ClipboardList, HeartPulse, Check, X, Star, Trophy, Users, Clock4 } from "lucide-react";
import { motion } from "framer-motion";

function useVisibilityEvent(id) {
  useEffect(() => {
    const el = document.getElementById(id);
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            try {
              window.dataLayer = window.dataLayer || [];
              window.dataLayer.push({ event: "section_visible", section: id });
            } catch {}
          }
        });
      },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [id]);
}

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function UnderstandingChallenge() {
  useVisibilityEvent("challenge");
  return (
    <section id="challenge" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-3xl md:text-4xl font-extrabold text-slate-900">Your Struggles Are Real - And Treatable</motion.h2>
        <motion.p variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="mt-4 text-slate-700 leading-relaxed max-w-3xl">
          Getting proper ADHD care can be frustrating: rushed visits, unclear answers, and feeling unheard. We believe in care that respects your time and your story.
        </motion.p>
        <motion.p variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="mt-3 text-slate-700 max-w-3xl">
          Our mission is simple: thorough evaluations, clear diagnoses, and practical treatment plans that help you function and thrive.
        </motion.p>
      </div>
    </section>
  );
}

export function OurApproach() {
  useVisibilityEvent("approach");
  const features = [
    { icon: BadgeCheck, title: "Specialized Expertise", desc: "ADHD-focused clinicians with advanced certification.", key: "expertise" },
    { icon: ClipboardList, title: "Comprehensive Evaluation", desc: "60–90 minute assessments with validated tools.", key: "evaluation" },
    { icon: HeartPulse, title: "Treatment & Support", desc: "Medication, coaching, and follow-ups tailored to you.", key: "support" },
  ];

  return (
    <section id="why" className="py-20 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-3xl md:text-4xl font-extrabold text-slate-900">Our Approach</motion.h2>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc, key }) => (
            <motion.div
              key={key}
              className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <Icon className="w-6 h-6 text-[hsl(276,46%,55%)]" />
              <h3 className="mt-3 font-bold text-slate-900">{title}</h3>
              <p className="mt-2 text-slate-600 text-sm">{desc}</p>
            </motion.div>
          ))}
        </div>
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="mt-8">
          <CTAButton label="Check If You Qualify" href="https://start.millenniummedicalassociates.com/assessment" eventParams={{ section: "approach" }} />
        </motion.div>
      </div>
    </section>
  );
}

export function Differentiation() {
  useVisibilityEvent("diff");
  const rows = [
    ["Specialized ADHD clinicians", true, false],
    ["60–90 min initial evaluation", true, false],
    ["In-person Beverly Hills presence", true, false],
    ["Board-certified oversight", true, false],
    ["Personalized treatment plan", true, true],
    ["Quick 2–3 day availability", true, true],
    ["Ongoing support & refills", true, true],
    ["Insurance-friendly receipts", true, true],
    ["Transparent pricing", true, true],
  ];

  return (
    <section id="diff" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-3xl md:text-4xl font-extrabold text-slate-900">How We Compare</motion.h2>
        <div className="mt-8 grid lg:grid-cols-3 gap-8 items-start">
          <motion.div className="lg:col-span-2 overflow-hidden rounded-2xl ring-1 ring-slate-200" variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <div className="grid grid-cols-3 bg-slate-50 text-slate-900 font-semibold">
              <div className="p-4">Feature</div>
              <div className="p-4">Millennium Medical Associates</div>
              <div className="p-4">Online-Only ADHD Services</div>
            </div>
            <div>
              {rows.map(([label, a, b], i) => (
                <div key={i} className="grid grid-cols-3 items-center border-t border-slate-200">
                  <div className="p-4 text-slate-700 text-sm">{label}</div>
                  <div className="p-4 flex items-center">{a ? <Check className="text-green-600" /> : <X className="text-red-500" />}</div>
                  <div className="p-4 flex items-center">{b ? <Check className="text-green-600" /> : <X className="text-red-500" />}</div>
                </div>
              ))}
            </div>
            <div className="p-4 bg-slate-50 text-sm text-slate-700">“They finally took the time to understand me. Life-changing.” — Patient</div>
          </motion.div>
          <motion.div className="space-y-4" variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <div className="aspect-video w-full bg-slate-100 rounded-2xl ring-1 ring-slate-200 flex items-center justify-center text-slate-500">Office Photo</div>
            <div>
              <CTAButton label="Start Free Screening" href="https://start.millenniummedicalassociates.com/assessment" className="w-full" eventParams={{ section: "compare" }} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function Testimonials() {
  useVisibilityEvent("testimonials");
  const testimonials = [
    { quote: "I felt heard for the first time.", name: "A.M." },
    { quote: "Thorough and compassionate.", name: "J.S." },
    { quote: "My focus and organization improved within weeks.", name: "R.K." },
  ];
  const stats = [
    { icon: Users, label: "15,000+ Patients" },
    { icon: Trophy, label: "13 Years Trusted" },
    { icon: Star, label: "9.7/10 Rating" },
    { icon: Clock4, label: "60-90 Min Evaluations" },
  ];

  return (
    <section id="testimonials" className="py-20 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-3xl md:text-4xl font-extrabold text-slate-900">What Patients Say</motion.h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div key={i} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200" variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <div className="flex items-center gap-1 text-amber-500">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-amber-500 text-amber-500" />
                ))}
              </div>
              <p className="mt-4 text-slate-700">“{t.quote}”</p>
              <p className="mt-2 text-sm text-slate-500">— {t.name}</p>
            </motion.div>
          ))}
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map(({ icon: Icon, label }, i) => (
            <motion.div key={i} className="rounded-xl bg-white p-4 text-center ring-1 ring-slate-200" variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <Icon className="mx-auto w-6 h-6 text-[hsl(276,46%,55%)]" />
              <div className="mt-2 font-semibold text-slate-900">{label}</div>
            </motion.div>
          ))}
        </div>
        <div className="mt-10 flex items-center gap-4">
          <img src="/award1.webp" alt="Award" className="w-24 h-24 object-contain" loading="lazy" />
          <img src="/award2.webp" alt="Award" className="w-24 h-24 object-contain" loading="lazy" />
        </div>
      </div>
    </section>
  );
}

export function Pricing() {
  useVisibilityEvent("pricing");
  const tiers = [
    {
      title: "Pre-Assessment",
      price: "FREE",
      features: ["2-minute screening", "Private & secure", "No commitment"],
      cta: { label: "Start Free Screening", href: "https://start.millenniummedicalassociates.com/assessment" },
      featured: true,
    },
    {
      title: "Initial Evaluation",
      price: "$389",
      features: ["60–90 minute session", "Board-certified clinician", "Diagnosis & plan"],
    },
    {
      title: "Prescription Refills",
      price: "$149/visit",
      features: ["Follow-up visit", "Medication management", "Ongoing support"],
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-3xl md:text-4xl font-extrabold text-slate-900">Transparent, Affordable Pricing</motion.h2>
        <p className="mt-2 text-slate-700">Most patients see improvement within 30 days.</p>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <motion.div key={t.title} className={`rounded-2xl p-6 ring-1 ring-slate-200 bg-white ${t.featured ? "shadow-xl border-2 border-[#FF6B35]" : "shadow-sm"}`} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <h3 className="font-bold text-slate-900">{t.title}</h3>
              <div className="mt-3 text-3xl font-extrabold text-slate-900">{t.price}</div>
              <ul className="mt-4 space-y-2 text-slate-700 text-sm">
                {t.features.map((f) => (
                  <li key={f} className="flex items-center gap-2"><Check className="w-4 h-4 text-green-600" /> {f}</li>
                ))}
              </ul>
              {t.cta && (
                <div className="mt-6">
                  <CTAButton label={t.cta.label} href={t.cta.href} className="w-full" eventParams={{ section: "pricing" }} />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function UnderstandingCost() {
  useVisibilityEvent("value");
  return (
    <section id="value" className="py-20 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-3xl md:text-4xl font-extrabold text-slate-900">What To Expect: Pricing & Value</motion.h2>
        <motion.p variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="mt-4 text-slate-700 max-w-3xl">Your evaluation includes an in-depth clinical interview, validated screening tools, medication assessment, and a personalized plan. Clear next steps, no hidden fees.</motion.p>
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="mt-6">
          <CTAButton label="Start Your Free Pre-Assessment" href="https://start.millenniummedicalassociates.com/assessment" eventParams={{ section: "value" }} />
        </motion.div>
      </div>
    </section>
  );
}

export function FAQ() {
  useVisibilityEvent("faq");
  const faqs = [
    { q: "Do you accept insurance?", a: "We are out-of-network but provide superbills for reimbursement. HSA/FSA accepted." },
    { q: "How long are visits?", a: "Initial evaluations are 60–90 minutes. Follow-ups are typically 20–30 minutes." },
    { q: "What makes you different?", a: "Depth of evaluation, specialized expertise, and ongoing support." },
    { q: "Do you prescribe medication?", a: "Yes, when clinically appropriate and safe." },
    { q: "Who is a good fit?", a: "Adults seeking thorough evaluation and personalized treatment." },
    { q: "How soon can I be seen?", a: "Often within 2–3 days." },
    { q: "Is the pre-assessment free?", a: "Yes, takes about 2 minutes and is completely free." },
    { q: "Is my information private?", a: "Yes. We adhere to HIPAA standards and best practices." },
    { q: "Can I do telehealth?", a: "Yes, telehealth is available for evaluations and follow-ups." },
    { q: "Do you treat anxiety or depression too?", a: "Yes, when related to or co-occurring with ADHD." },
    { q: "Where are you located?", a: "8641 Wilshire Blvd #100, Beverly Hills, CA 90211." },
  ];

  const [open, setOpen] = React.useState(null);
  return (
    <section id="faq" className="py-20 bg-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.h2 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-3xl md:text-4xl font-extrabold text-slate-900">Frequently Asked Questions</motion.h2>
        <div className="mt-8 divide-y divide-slate-200 rounded-2xl ring-1 ring-slate-200 bg-white">
          {faqs.map((item, i) => (
            <div key={i} className="p-5">
              <button className="w-full flex justify-between items-center text-left" onClick={() => setOpen(open === i ? null : i)}>
                <span className="font-semibold text-slate-900">{item.q}</span>
                <span className="text-slate-500">{open === i ? "–" : "+"}</span>
              </button>
              {open === i && <motion.p variants={fadeUp} initial="hidden" animate="show" className="mt-3 text-slate-700 text-sm">{item.a}</motion.p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FinalCTA() {
  useVisibilityEvent("finalcta");
  const now = new Date();
  const soon = new Date(now.getTime() + 2 * 24 * 60 * 60 * 1000);
  const options = { weekday: "short", month: "short", day: "numeric" };
  const dateText = `Next availability: ${soon.toLocaleDateString(undefined, options)}`;
  return (
    <section id="pre" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(245,58%,72%)] to-[hsl(276,46%,55%)]" />
      <motion.div aria-hidden className="pointer-events-none absolute -bottom-24 right-1/4 h-[500px] w-[500px] rounded-full bg-white/10 blur-3xl" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }} />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl">
          <motion.h2 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-3xl md:text-5xl font-extrabold text-white">Ready to Get Real Answers About Your Focus?</motion.h2>
          <p className="mt-3 inline-flex items-center rounded-full bg-white/15 text-white px-3 py-1 text-xs font-medium ring-1 ring-white/30">{dateText}</p>
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="mt-6">
            <CTAButton label="Begin Pre-Assessment" href="https://start.millenniummedicalassociates.com/assessment" eventParams={{ section: "final_cta" }} />
          </motion.div>
          <div className="mt-6 flex flex-wrap items-center gap-3 text-white/90 text-sm">
            <span>HIPAA Compliant</span>•<span>Award-Winning Care</span>•<span>Beverly Hills Location</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <div className="text-white font-extrabold">Millennium Medical Associates</div>
            <div className="text-sm">Specializing in Adult ADHD Since 2011</div>
          </div>
          <div>
            <div className="text-sm">8641 Wilshire Blvd #100, Beverly Hills, CA 90211</div>
          </div>
          <div className="text-sm">© {new Date().getFullYear()} Millennium Medical Associates. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}
