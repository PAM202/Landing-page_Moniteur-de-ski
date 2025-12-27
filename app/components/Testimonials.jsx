"use client";

import { useEffect, useRef } from "react";

const testimonials = [
  {
    quote:
      "En deux semaines j’étais capable d’accueillir et briefer mes groupes en anglais sans chercher mes mots.",
    avatar: "C",
    name: "Claire, ESF Les Arcs",
    role: "Monitrice depuis 6 ans"
  },
  {
    quote:
      "Les scripts terrain sont prêts à l’emploi : check matériel, sécurité, corrections. Ça m’a fait gagner en confiance directe.",
    avatar: "J",
    name: "Julien, Chamrousse",
    role: "Coach freeride"
  },
  {
    quote:
      "Je vends plus de cours privés grâce à l’anglais. Les parents me demandent spontanément d’accompagner leurs enfants toute la semaine.",
    avatar: "S",
    name: "Sophie, Serre Che",
    role: "Spécialiste enfants"
  }
];

export default function Testimonials() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const section = sectionRef.current;
    const cards = cardsRef.current.filter(Boolean);

    if (section) {
      section.classList.add("testimonials--animated");
    }

    if (!cards.length) return;

    if (!("IntersectionObserver" in window)) {
      cards.forEach((card) => card.classList.add("testimonial--visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("testimonial--visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.35 }
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="testimonials" id="temoignages" data-scroll-theme="light">
      <div className="testimonials__inner">
        <h2 className="testimonials__title">Ils ont suivi la formation, ils racontent</h2>
        <div className="testimonials__grid">
          {testimonials.map((testimonial, index) => (
            <figure
              key={testimonial.name}
              className="testimonial"
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              style={{ "--testimonial-delay": `${index * 90}ms` }}
            >
              <div className="testimonial__bubble">
                <p className="testimonial__quote">{testimonial.quote}</p>
              </div>
              <figcaption className="testimonial__meta">
                <span className="testimonial__avatar" aria-hidden="true">
                  {testimonial.avatar}
                </span>
                <div className="testimonial__person">
                  <span className="testimonial__name">{testimonial.name}</span>
                  <span className="testimonial__role">{testimonial.role}</span>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
