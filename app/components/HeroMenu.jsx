"use client";

import { useEffect, useState } from "react";

const menuLinks = [
  { label: "Formation", href: "#programme" },
  { label: "Résultats", href: "#resultats" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" }
];

export default function HeroMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const handleKey = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.body.classList.add("is-menu-open");
    document.addEventListener("keydown", handleKey);

    return () => {
      document.body.classList.remove("is-menu-open");
      document.removeEventListener("keydown", handleKey);
    };
  }, [open]);

  return (
    <>
      <header className="hero__header">
        <div className="hero__logo">
          <img src="/Logo_white.svg" alt="EducAltitudes" />
        </div>
        <button
          className="hero__menu"
          type="button"
          aria-label="Ouvrir le menu"
          aria-expanded={open}
          aria-controls="site-menu"
          onClick={() => setOpen(true)}
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      {open ? (
        <div
          className="menu"
          id="site-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              setOpen(false);
            }
          }}
        >
          <div className="menu__panel">
            <button
              className="menu__close"
              type="button"
              aria-label="Fermer le menu"
              onClick={() => setOpen(false)}
            >
              ×
            </button>
            <nav className="menu__nav" aria-label="Navigation principale">
              {menuLinks.map((link) => (
                <a
                  key={link.href}
                  className="menu__link"
                  href={link.href}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                className="menu__cta"
                href="#"
                data-open-modal
                onClick={() => setOpen(false)}
              >
                Rejoindre la formation
              </a>
            </nav>
          </div>
        </div>
      ) : null}
    </>
  );
}
