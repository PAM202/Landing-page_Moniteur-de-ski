"use client";

import { useEffect, useRef } from "react";

export default function AnnotatedCircle({
  children,
  className = "",
  color = "#ffbd00",
  padding = 6,
  strokeWidth = 2,
  animationDuration = 900,
  delay = 400
}) {
  const markRef = useRef(null);

  useEffect(() => {
    let annotation;
    let observer;
    let hasShown = false;
    let timeoutId;
    let cancelled = false;

    const run = async () => {
      const { annotate } = await import("rough-notation");
      if (cancelled || !markRef.current) return;

      annotation = annotate(markRef.current, {
        type: "highlight",
        color,
        padding,
        strokeWidth,
        animationDuration
      });

      const triggerShow = () => {
        if (hasShown || cancelled) return;
        hasShown = true;
        timeoutId = window.setTimeout(() => {
          requestAnimationFrame(() => {
            if (!cancelled) annotation.show();
          });
        }, delay);
      };

      if ("IntersectionObserver" in window) {
        observer = new IntersectionObserver(
          (entries) => {
            for (const entry of entries) {
              if (entry.isIntersecting) {
                triggerShow();
                observer.disconnect();
                break;
              }
            }
          },
          { threshold: 0.4 }
        );
        observer.observe(markRef.current);
      } else {
        triggerShow();
      }
    };

    run();

    return () => {
      cancelled = true;
      if (observer) observer.disconnect();
      if (timeoutId) window.clearTimeout(timeoutId);
      if (annotation) annotation.remove();
    };
  }, [color, padding, strokeWidth, animationDuration, delay]);

  return (
    <span ref={markRef} className={`human__title-mark ${className}`.trim()}>
      {children}
    </span>
  );
}
