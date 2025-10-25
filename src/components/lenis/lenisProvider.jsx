"use client";

import Lenis from "lenis";
import { useEffect, useRef } from "react";

// Import Lenis CSS for proper styling
import "lenis/dist/lenis.css";

export default function LenisProvider({ children }) {
  const lenisRef = useRef(null);

  useEffect(() => {
    // Initialize Lenis with modern configuration
    const lenis = new Lenis({
      // Use autoRaf for automatic requestAnimationFrame handling
      autoRaf: true,
      // Smooth wheel scrolling
      smoothWheel: true,
      // Disable smooth touch for better mobile performance
      smoothTouch: false,
      // Linear interpolation intensity (0-1)
      lerp: 0.1,
      // Duration for programmatic scrolls
      duration: 1.2,
      // Custom easing function (optional)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      // Scroll orientation
      orientation: "vertical",
      // Gesture orientation
      gestureOrientation: "vertical",
      // Sync touch events
      syncTouch: false,
      // Touch multiplier for mobile
      touchMultiplier: 2,
      // Infinite scroll
      infinite: false,
    });

    // Store reference for cleanup
    lenisRef.current = lenis;

    // Optional: expose lenis globally for debugging or external access
    if (typeof window !== "undefined") {
      window.lenis = lenis;
    }

    // Listen for scroll events (optional - for debugging)
    lenis.on("scroll", (e) => {
      // You can add scroll event handlers here if needed
      // console.log('Lenis scroll:', e);
    });

    // Cleanup function
    return () => {
      if (lenisRef.current) {
        lenisRef.current.destroy();
        lenisRef.current = null;
      }
      if (typeof window !== "undefined") {
        delete window.lenis;
      }
    };
  }, []);

  return <>{children}</>;
}
