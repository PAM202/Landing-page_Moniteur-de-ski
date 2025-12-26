"use client";

import { useEffect, useRef, useState } from "react";

export default function LeadCaptureModal() {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");
  const firstInputRef = useRef(null);

  useEffect(() => {
    const handleClick = (event) => {
      if (!(event.target instanceof Element)) return;
      const trigger = event.target.closest("[data-open-modal]");
      if (!trigger) return;
      event.preventDefault();
      setOpen(true);
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  useEffect(() => {
    if (!open) return;

    const handleKey = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.body.classList.add("is-modal-open");
    document.addEventListener("keydown", handleKey);

    return () => {
      document.body.classList.remove("is-modal-open");
      document.removeEventListener("keydown", handleKey);
    };
  }, [open]);

  useEffect(() => {
    if (open && firstInputRef.current) {
      firstInputRef.current.focus();
    }
  }, [open]);

  useEffect(() => {
    if (open) {
      setStatus("idle");
      setError("");
    }
  }, [open]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: formData.get("name")?.toString().trim(),
      email: formData.get("email")?.toString().trim(),
      phone: formData.get("phone")?.toString().trim(),
    };

    if (!payload.name || !payload.email) {
      setStatus("error");
      setError("Merci de renseigner votre nom et votre email.");
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.error || "Une erreur est survenue.");
      }

      setStatus("success");
      form.reset();
      firstInputRef.current?.focus();
    } catch (err) {
      setStatus("error");
      setError(err.message);
    }
  };

  if (!open) {
    return null;
  }

  return (
    <div
      className="modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="lead-modal-title"
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          setOpen(false);
        }
      }}
    >
      <div className="modal__dialog">
        <button
          className="modal__close"
          type="button"
          aria-label="Fermer"
          onClick={() => setOpen(false)}
        >
          ×
        </button>
        <h3 className="modal__title" id="lead-modal-title">
          Merci pour votre intérêt.
        </h3>
        <p className="modal__intro">
          Laissez-nous vos coordonnées et notre équipe vous recontactera pour en
          savoir plus sur votre projet.
        </p>
        <div className="modal__divider" aria-hidden="true" />
        <form
          className="modal__form"
          onSubmit={handleSubmit}
        >
          <label className="modal__label" htmlFor="lead-name">
            Prénom et Nom
          </label>
          <input
            ref={firstInputRef}
            className="modal__input"
            id="lead-name"
            name="name"
            type="text"
            placeholder="Xavier Dupont"
            autoComplete="name"
            required
          />

          <label className="modal__label" htmlFor="lead-email">
            Email
          </label>
          <input
            className="modal__input"
            id="lead-email"
            name="email"
            type="email"
            placeholder="xavier@gmail.com"
            autoComplete="email"
            required
          />

          <label className="modal__label" htmlFor="lead-phone">
            Téléphone
          </label>
          <input
            className="modal__input"
            id="lead-phone"
            name="phone"
            type="tel"
            placeholder="0681339583"
            autoComplete="tel"
          />

          <button className="modal__submit" type="submit" disabled={status === "loading"}>
            {status === "loading" ? "Envoi..." : "Envoyer"}
          </button>
          {status === "success" && (
            <p className="modal__status modal__status--success">
              Merci ! Votre demande a bien été envoyée.
            </p>
          )}
          {status === "error" && (
            <p className="modal__status modal__status--error">
              {error || "Impossible d'envoyer votre demande."}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
