"use client";

import { useEffect, useState } from "react";

const SECONDS_IN_DAY = 24 * 60 * 60;

function getParisParts() {
  const now = new Date();
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/Paris",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false
  }).formatToParts(now);

  const lookup = (type) => Number(parts.find((p) => p.type === type)?.value || 0);

  return {
    year: lookup("year"),
    month: lookup("month"),
    day: lookup("day"),
    hour: lookup("hour"),
    minute: lookup("minute"),
    second: lookup("second")
  };
}

function computeRemainingToParisMidnight() {
  const { year, month, day, hour, minute, second } = getParisParts();
  const currentParisUtc = Date.UTC(year, month - 1, day, hour, minute, second);
  const nextMidnightParisUtc = Date.UTC(year, month - 1, day + 1, 0, 0, 0);
  const diffMs = nextMidnightParisUtc - currentParisUtc;
  const diffSeconds = diffMs > 0 ? Math.floor(diffMs / 1000) : 0;
  return diffSeconds === 0 ? SECONDS_IN_DAY : diffSeconds;
}

export default function CountdownTimer() {
  const [remaining, setRemaining] = useState(SECONDS_IN_DAY);

  useEffect(() => {
    setRemaining(computeRemainingToParisMidnight());

    const interval = window.setInterval(() => {
      setRemaining(computeRemainingToParisMidnight());
    }, 1000);

    return () => window.clearInterval(interval);
  }, []);

  const hours = String(Math.floor(remaining / 3600)).padStart(2, "0");
  const minutes = String(Math.floor((remaining % 3600) / 60)).padStart(2, "0");
  const seconds = String(remaining % 60).padStart(2, "0");

  return (
    <div className="bootcamp__timer" aria-label="Compte à rebours 24 heures">
      <span className="bootcamp__timer-label">Fin dans</span>
      <div className="bootcamp__timer-pills" role="presentation">
        <span className="bootcamp__pill">{hours}</span>
        <span className="bootcamp__timer-separator" aria-hidden="true">
          :
        </span>
        <span className="bootcamp__pill">{minutes}</span>
        <span className="bootcamp__timer-separator" aria-hidden="true">
          :
        </span>
        <span className="bootcamp__pill">{seconds}</span>
      </div>
    </div>
  );
}
