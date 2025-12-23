"use client";

import { useRef } from "react";

const panels = [
  {
    icon: "speech",
    title: "Donner un cours en anglais, avec aisance",
    text:
      "Les consignes clés, le bon rythme, les tournures naturelles. Des phrases prêtes à dire pour rester fluide sur la neige."
  },
  {
    icon: "technique",
    title: "Expliquer la technique avec précision",
    text:
      "Appuis, équilibre, posture : le vocabulaire technique du ski et des phrases courtes pour faire progresser le client sur les pistes."
  },
  {
    icon: "territory",
    title: "Valoriser et promouvoir le territoire",
    text:
      "Présenter une activité, un lieu ou un service avec aisance : raconter, recommander, donner envie, et transformer l’expérience en opportunité."
  },
  {
    icon: "terrain",
    title: "Une méthode terrain, compatible saison",
    text:
      "Micro-leçons + mises en situation + répétition : vous progressez vite, même avec un planning chargé. Accès 24/7 + parcours guidé."
  },
  {
    icon: "certificate",
    title: "Un parcours certifiant et finançable",
    text:
      "Plateforme 24/7 + pédagogie active (mises en situation, jeux de rôle, cas réels). Formation finançable."
  }
];

const renderIcon = (type) => {
  switch (type) {
    case "speech":
      return (
        <svg viewBox="0 0 48 48" role="presentation">
          <path
            d="M10 14h28v16H20l-6 6v-6H10z"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinejoin="round"
          />
          <path
            d="M18 22h12M18 27h8"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
        </svg>
      );
    case "technique":
      return (
        <svg viewBox="0 0 48 48" role="presentation">
          <circle
            cx="24"
            cy="24"
            r="11"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
          />
          <path
            d="M24 11v6M24 31v6M11 24h6M31 24h6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
        </svg>
      );
    case "territory":
      return (
        <svg viewBox="0 0 48 48" role="presentation">
          <path
            d="M24 10c-5 0-9 4-9 9 0 6.5 9 17 9 17s9-10.5 9-17c0-5-4-9-9-9z"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
          />
          <circle cx="24" cy="19" r="3.5" fill="none" stroke="currentColor" strokeWidth="2.2" />
        </svg>
      );
    case "certificate":
      return (
        <svg viewBox="0 0 48 48" role="presentation">
          <rect
            x="12"
            y="10"
            width="24"
            height="28"
            rx="2"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
          />
          <path
            d="M17 20h14M17 26h10M19 32l3 3 6-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "terrain":
      return (
        <svg viewBox="0 0 48 48" role="presentation">
          <path
            d="M8 34l10-16 8 12 6-8 8 12H8z"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinejoin="round"
          />
          <circle cx="34" cy="14" r="3" fill="none" stroke="currentColor" strokeWidth="2.2" />
        </svg>
      );
    default:
      return null;
  }
};

export default function PanelSlider() {
  const trackRef = useRef(null);

  const handleScroll = (direction) => {
    const track = trackRef.current;
    if (!track) return;
    const amount = track.clientWidth * 0.85;
    track.scrollBy({ left: direction * amount, behavior: "smooth" });
  };

  return (
    <section className="panels" id="resultats" data-scroll-theme="dark">
      <div className="panels__inner">
        <h2 className="panels__title">
          Ce que fait un moniteur
          <br className="panels__title-break--desktop" />
          <span className="panels__title-space" aria-hidden="true"> </span>
          bilingue sur les pistes
        </h2>

        <div className="panels__carousel" aria-label="Programme de formation">
          <div className="panels__track" ref={trackRef}>
            {panels.map((panel) => (
              <article className="panel-card" key={panel.title}>
                {panel.icon ? (
                  <div className="panel-card__icon" aria-hidden="true">
                    {renderIcon(panel.icon)}
                  </div>
                ) : null}
                <h3 className="panel-card__title">{panel.title}</h3>
                <p className="panel-card__text">{panel.text}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="panels__controls">
          <button
            className="panels__arrow"
            type="button"
            aria-label="Panneau précédent"
            onClick={() => handleScroll(-1)}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M15 6l-6 6 6 6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            className="panels__arrow"
            type="button"
            aria-label="Panneau suivant"
            onClick={() => handleScroll(1)}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M9 6l6 6-6 6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
