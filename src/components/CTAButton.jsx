import React from "react";
import { motion } from "framer-motion";

// Utility to preserve source parameter in outbound links
function buildUrl(baseUrl) {
  try {
    const params = new URLSearchParams(window.location.search);
    const source = params.get("source");
    if (source) {
      const url = new URL(baseUrl);
      url.searchParams.set("source", source);
      return url.toString();
    }
    return baseUrl;
  } catch {
    return baseUrl;
  }
}

export default function CTAButton({ label = "Get Started", href, onClick, size = "lg", className = "", eventName = "cta_click", eventParams = {} }) {
  const sizes = {
    lg: "px-6 py-4 text-base",
    md: "px-5 py-3 text-sm",
    sm: "px-4 py-2 text-sm",
  };

  const finalHref = href ? buildUrl(href) : undefined;

  const handleClick = (e) => {
    if (onClick) onClick(e);
    try {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: eventName,
        label,
        ...eventParams,
      });
    } catch {}
  };

  const classes = `relative inline-flex items-center justify-center rounded-xl bg-[#FF6B35] text-white font-semibold shadow-lg shadow-black/10 hover:shadow-black/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#FF6B35] transition will-change-transform min-h-[44px] ${sizes[size]} ${className}`;

  const motionProps = {
    whileHover: { y: -2, scale: 1.02 },
    whileTap: { scale: 0.98 },
    transition: { type: "spring", stiffness: 300, damping: 20, mass: 0.3 },
  };

  if (finalHref) {
    return (
      <motion.a
        href={finalHref}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        className={classes}
        {...motionProps}
      >
        <span className="pointer-events-none">{label}</span>
      </motion.a>
    );
  }

  return (
    <motion.button onClick={handleClick} className={classes} {...motionProps}>
      <span className="pointer-events-none">{label}</span>
    </motion.button>
  );
}
