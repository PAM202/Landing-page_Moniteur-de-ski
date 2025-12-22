"use client";

import { useEffect, useRef, useState } from "react";

export default function ScrollControls() {
  const [visible, setVisible] = useState(false);
  const buttonRef = useRef(null);

  useEffect(() => {
    const themedSections = Array.from(
      document.querySelectorAll("[data-scroll-theme]")
    );

    const onScroll = () => {
      const scrolled = window.scrollY > 40;
      setVisible(scrolled);
      document.body.classList.toggle("is-scrolled", scrolled);

      const buttonRect = buttonRef.current?.getBoundingClientRect();
      const focusY = buttonRect
        ? buttonRect.top + buttonRect.height / 2
        : window.innerHeight * 0.8;
      let activeTheme = "dark";

      for (const section of themedSections) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= focusY && rect.bottom >= focusY) {
          activeTheme = section.dataset.scrollTheme || "dark";
          break;
        }
      }

      document.body.setAttribute("data-scroll-theme", activeTheme);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      document.body.classList.remove("is-scrolled");
      document.body.removeAttribute("data-scroll-theme");
    };
  }, []);

  return (
    <button
      ref={buttonRef}
      className={`scroll-top${visible ? " scroll-top--visible" : ""}`}
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Revenir en haut"
    >
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M12 18V6m0 0l-5 5m5-5l5 5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
