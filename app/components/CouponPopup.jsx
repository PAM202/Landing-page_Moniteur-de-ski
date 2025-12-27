"use client";

import { useEffect, useRef, useState } from "react";

export default function CouponPopup() {
  const [open, setOpen] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");
  const emailRef = useRef(null);
  const closeTimerRef = useRef(null);

  useEffect(() => {
    if (hasTriggered) return;

    const priceCard = document.querySelector(".bootcamp__card--price");
    if (!priceCard) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setOpen(true);
        setHasTriggered(true);
      },
      { threshold: 0.5 }
    );

    observer.observe(priceCard);
    return () => observer.disconnect();
  }, [hasTriggered]);

  useEffect(() => {
    if (!open) return;

    document.body.classList.add("is-coupon-open");
    emailRef.current?.focus();

    const handleKey = (event) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };

    document.addEventListener("keydown", handleKey);

    return () => {
      document.body.classList.remove("is-coupon-open");
      document.removeEventListener("keydown", handleKey);
    };
  }, [open]);

  useEffect(() => {
    return () => {
      if (closeTimerRef.current) {
        clearTimeout(closeTimerRef.current);
      }
      document.body.classList.remove("is-coupon-open");
    };
  }, []);

  useEffect(() => {
    if (!open) return;

    let canceled = false;
    const fireConfetti = async () => {
      try {
        const confetti = (await import("canvas-confetti")).default;
        if (canceled) return;
        confetti({
          particleCount: 140,
          spread: 70,
          origin: { y: 0.3 },
          scalar: 0.9,
          zIndex: 9999,
        });
      } catch {
        // no-op if confetti fails to load
      }
    };

    fireConfetti();
    return () => {
      canceled = true;
    };
  }, [open]);

  const handleClose = () => {
    setOpen(false);
    setStatus("idle");
    setError("");
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");

    const form = event.currentTarget;
    const email = form.email.value.trim();

    if (!email) {
      setStatus("error");
      setError("Merci de renseigner votre email.");
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: "Lead coupon -10%",
          email,
          phone: "",
        }),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.error || "Impossible d'activer votre remise.");
      }

      setStatus("success");
      form.reset();
      closeTimerRef.current = setTimeout(() => setOpen(false), 1400);
    } catch (err) {
      setStatus("error");
      setError(err.message || "Impossible d'activer votre remise.");
    }
  };

  if (!open) {
    return null;
  }

  return (
    <div
      className="coupon"
      role="dialog"
      aria-modal="true"
      aria-labelledby="coupon-title"
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          handleClose();
        }
      }}
    >
      <div className="coupon__dialog">
        <div className="coupon__card">
          <button
            type="button"
            className="coupon__close"
            aria-label="Fermer la remise"
            onClick={handleClose}
          >
            ×
          </button>

          <div className="coupon__art" aria-hidden="true">
            <img src="/coupon.png" alt="" />
          </div>

          <form className="coupon__form" onSubmit={handleSubmit}>
            <label className="sr-only" htmlFor="coupon-email">
              Email
            </label>
            <input
              ref={emailRef}
              className="coupon__input"
              id="coupon-email"
              name="email"
              type="email"
              placeholder="Votre email"
              autoComplete="email"
              required
              disabled={status === "loading"}
            />

            <button
              className="coupon__button"
              type="submit"
              disabled={status === "loading"}
            >
              {status === "loading" ? "Activation..." : "Activer ma remise"}
            </button>

            <div className="coupon__status" aria-live="polite">
              {status === "success" && (
                <span className="coupon__status-text coupon__status-text--success">
                  Remise activée ! On vous envoie les détails.
                </span>
              )}
              {status === "error" && (
                <span className="coupon__status-text coupon__status-text--error">
                  {error || "Impossible d'activer la remise."}
                </span>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
