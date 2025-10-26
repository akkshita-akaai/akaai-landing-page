// app/components/HeroSection.jsx
"use client";

import { Lightbulb } from "lucide-react";
import { useEffect, useState } from "react";

const rippleCSS = `
  :root { --start-scale: .35; --end-scale: 6; }

  @keyframes ripple-ring {
    0%   { transform: translate(-50%,-50%) scale(var(--start-scale)); opacity: 1; }
    100% { transform: translate(-50%,-50%) scale(var(--end-scale)); opacity: 0; }
  }

  .ripple-ring {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 160px;
    height: 160px;
    border-radius: 9999px;
    border-style: solid;
    border-width: 50px; /* your thickness */
    pointer-events: none;
    background: transparent;

    opacity: 0;
    animation-name: ripple-ring;
    animation-duration: 1.8s;
    animation-timing-function: ease-out;
    animation-fill-mode: both;
    will-change: transform, opacity;
  }

  .ripple-surface { transform: translateZ(0); backface-visibility: hidden; }

  @keyframes headline-in {
    0%   { opacity: 0; transform: translateY(8px) scale(.98); }
    100% { opacity: 1; transform: translateY(0) scale(1); }
  }
  .headline-appear { animation: headline-in .5s ease-out both; animation-delay: .05s; }

  @media (prefers-reduced-motion: reduce) {
    .ripple-ring { animation: none; opacity: 0; }
    .headline-appear { animation: none; opacity: 1; }
  }
`;

export default function HeroSection() {
  const [showRipples, setShowRipples] = useState(true);

  // Grow rings past the farthest corner
  useEffect(() => {
    const setEndScale = () => {
      const base = 160;
      const diag = Math.hypot(window.innerWidth, window.innerHeight);
      document.documentElement.style.setProperty(
        "--end-scale",
        String(diag / base)
      );
    };
    setEndScale();
    window.addEventListener("resize", setEndScale);
    return () => window.removeEventListener("resize", setEndScale);
  }, []);

  // Hide ripples after animation
  useEffect(() => {
    const t = setTimeout(() => setShowRipples(false), 1900);
    return () => clearTimeout(t);
  }, []);

  return (
    <section id="home" className="relative w-full min-h-[100svh]">
      <style dangerouslySetInnerHTML={{ __html: rippleCSS }} />
      <div
        className="absolute inset-0 will-change-transform"
        style={{ transform: "translate3d(0, var(--hero-parallax, 0px), 0)" }}
      >
        {/* Full-bleed hero video */}
        <video
          className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-500 ${showRipples ? "opacity-0" : "opacity-100"
            }`}
          autoPlay
          muted
          playsInline
          preload="auto"
          disablePictureInPicture
        >
          <source src="/images/heroSection.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Ripple intro overlay */}
      {showRipples && (
        <div
          aria-hidden="true"
          className="ripple-surface absolute inset-0 z-20 flex items-center justify-center"
        >
          <span
            className="ripple-ring"
            style={{ borderColor: "#1C1C1C", animationDelay: "0s" }}
          />
          <span
            className="ripple-ring"
            style={{ borderColor: "#8B1E1E", animationDelay: ".12s" }}
          />
          <span
            className="ripple-ring"
            style={{ borderColor: "#D6CCC2", animationDelay: ".24s" }}
          />
        </div>
      )}

      {/* Top-right sticky label with icon, visible during ripple and video */}
      {/* <div className="pointer-events-auto absolute top-4 right-4 z-40 flex items-center gap-2 rounded-full px-4 py-2 cursor-pointer">
        <div className="border-2 rounded-full p-2">
          <Lightbulb />
        </div>
        <span className="text-sm md:text-base tracking-tight">
          Build your narrative
        </span>
      </div> */}

      {/* Center tagline appears after ripple */}
      {/* {
        !showRipples && (
          <div className="absolute inset-0 z-30 flex items-center justify-center pt-52">
            <div className="headline-appear text-center  drop-shadow">
              <p className="px-4 text-2xl font-medium  text-[#1C1C1C] opacity-75">
                Not an agency. A narrative lab.
              </p>
            </div>
          </div>
        )
      } */}
    </section >
  );
}
