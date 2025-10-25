"use client";

import { useEffect, useState } from "react";

/**
 * Custom hook to access the Lenis instance
 * @returns {Object|null} Lenis instance or null if not available
 */
export function useLenis() {
  const [lenis, setLenis] = useState(null);

  useEffect(() => {
    // Check if Lenis is already available
    if (typeof window !== "undefined" && window.lenis) {
      setLenis(window.lenis);
      return;
    }

    // Wait for Lenis to be initialized
    const checkLenis = () => {
      if (typeof window !== "undefined" && window.lenis) {
        setLenis(window.lenis);
      }
    };

    // Check periodically until Lenis is available
    const interval = setInterval(checkLenis, 100);

    // Cleanup
    return () => {
      clearInterval(interval);
    };
  }, []);

  return lenis;
}

/**
 * Hook to scroll to a specific element or position
 * @returns {Function} scrollTo function
 */
export function useLenisScroll() {
  const lenis = useLenis();

  const scrollTo = (target, options = {}) => {
    if (lenis) {
      lenis.scrollTo(target, {
        duration: 1.2,
        ...options,
      });
    }
  };

  return scrollTo;
}