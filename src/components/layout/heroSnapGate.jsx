"use client";

import { useEffect, useRef } from "react";

export default function HeroSnapGate({
  hero = "#home",
  next = "#about",
  snapThreshold = 0.9, // hero must occupy 90% of viewport to arm the gate
  duration = 1.0,
}) {
  const armedRef = useRef(false);
  const lockingRef = useRef(false);

  useEffect(() => {
    const heroEl = document.querySelector(hero);
    const nextEl = document.querySelector(next);

    let cleanup = () => {};

    const setup = () => {
      const lenis = window.lenis;
      if (!heroEl || !nextEl || !lenis) return;

      // Arm when hero fills the screen
      const io = new IntersectionObserver(
        ([entry]) => {
          armedRef.current = entry.intersectionRatio >= snapThreshold;
        },
        { threshold: Array.from({ length: 20 }, (_, i) => (i + 1) / 20) }
      );
      io.observe(heroEl);

      const lock = (ms = 900) => {
        lockingRef.current = true;
        setTimeout(() => (lockingRef.current = false), ms);
      };

      const onLenisScroll = ({ direction, scroll }) => {
        if (!armedRef.current || lockingRef.current) return;
        if (direction > 0) {
          lock();
          lenis.scrollTo(nextEl, { duration, force: true });
        }
        if (direction < 0 && scroll < 40) {
          lock();
          lenis.scrollTo(heroEl, { duration, force: true });
        }
      };
      lenis.on("scroll", onLenisScroll);

      const onWheel = (e) => {
        if (!armedRef.current || lockingRef.current) return;
        if (Math.abs(e.deltaY) < 1) return;
        lock();
        lenis.scrollTo(e.deltaY > 0 ? nextEl : heroEl, {
          duration,
          force: true,
        });
        e.preventDefault();
      };
      window.addEventListener("wheel", onWheel, {
        passive: false,
        capture: true,
      });

      let touchStartY = 0;
      const onTouchStart = (e) => {
        touchStartY = e.touches?.[0]?.clientY ?? 0;
      };
      const onTouchMove = (e) => {
        if (!armedRef.current || lockingRef.current) return;
        const dy = (e.touches?.[0]?.clientY ?? 0) - touchStartY;
        if (Math.abs(dy) < 8) return;
        lock();
        lenis.scrollTo(dy < 0 ? nextEl : heroEl, { duration, force: true });
        e.preventDefault();
      };
      window.addEventListener("touchstart", onTouchStart, { passive: true });
      window.addEventListener("touchmove", onTouchMove, { passive: false });

      // single cleanup for all hooks we added
      cleanup = () => {
        io.disconnect();
        lenis.off("scroll", onLenisScroll);
        window.removeEventListener("wheel", onWheel, { capture: true });
        window.removeEventListener("touchstart", onTouchStart);
        window.removeEventListener("touchmove", onTouchMove);
      };
    };

    if (window.lenis) setup();
    else window.addEventListener("lenisReady", setup, { once: true });

    return () => {
      cleanup();
      window.removeEventListener("lenisReady", setup);
    };
  }, [hero, next, snapThreshold, duration]);

  return null;
}
