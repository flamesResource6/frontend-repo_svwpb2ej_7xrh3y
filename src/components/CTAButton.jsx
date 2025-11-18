import React from "react";

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

  const classes = `inline-flex items-center justify-center rounded-xl bg-[#FF6B35] text-white font-semibold shadow hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#FF6B35] transition min-h-[44px] ${sizes[size]} ${className}`;

  if (finalHref) {
    return (
      <a
        href={finalHref}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        className={classes}
      >
        {label}
      </a>
    );
  }

  return (
    <button onClick={handleClick} className={classes}>
      {label}
    </button>
  );
}
