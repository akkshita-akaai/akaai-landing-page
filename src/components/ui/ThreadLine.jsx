"use client";

import { motion } from "framer-motion";

/**
 * ThreadLine - A reusable thread-like SVG line with knots and tangles
 * @param {object} lineHeight - Framer Motion transform value for path length
 * @param {string} variant - 'type1', 'type2', 'type3', 'type4', 'type5', 'type6' for different knot patterns
 * @param {string} className - Additional classes for positioning
 * @param {object} style - Additional inline styles
 */
export default function ThreadLine({
  lineHeight,
  variant = "type1",
  className = "",
  style = {}
}) {
  // Each section gets a unique wavy pattern - dramatic curves for visibility
  // Using a 100x1000 viewBox with horizontal range 0-100, center at 50
  const pathVariants = {
    // Type 1: Wide S-curve with prominent loop
    type1: `
      M 50 0
      C 50 30, 30 60, 20 100
      C 5 150, 10 200, 35 250
      C 60 300, 85 350, 80 420
      C 75 490, 55 550, 30 620
      C 5 690, 15 760, 40 830
      C 65 900, 55 950, 50 1000
    `,
    // Type 2: Double wave with knot
    type2: `
      M 50 0
      C 50 40, 75 80, 85 140
      C 95 200, 80 260, 55 320
      C 30 380, 10 440, 15 510
      C 20 580, 45 640, 70 700
      C 95 760, 85 840, 60 900
      C 45 940, 50 980, 50 1000
    `,
    // Type 3: Serpentine pattern
    type3: `
      M 50 0
      C 50 50, 25 100, 15 170
      C 5 240, 20 310, 50 380
      C 80 450, 90 520, 75 600
      C 60 680, 30 750, 25 830
      C 20 890, 40 960, 50 1000
    `,
    // Type 4: Wide figure-8
    type4: `
      M 50 0
      C 50 40, 20 90, 10 160
      C 0 230, 25 300, 60 370
      C 95 440, 90 510, 60 580
      C 30 650, 10 720, 20 800
      C 30 880, 45 950, 50 1000
    `,
    // Type 5: Gentle wave
    type5: `
      M 50 0
      C 50 60, 70 130, 80 210
      C 90 290, 75 370, 50 450
      C 25 530, 15 610, 25 700
      C 35 790, 45 890, 50 1000
    `,
    // Type 6: Organic curve
    type6: `
      M 50 0
      C 50 50, 30 110, 20 180
      C 10 250, 25 330, 50 410
      C 75 490, 85 570, 75 660
      C 65 750, 50 870, 50 1000
    `,
  };

  const pathD = pathVariants[variant] || pathVariants.type1;

  return (
    <motion.svg
      className={`absolute left-1/2 -translate-x-1/2 z-0 overflow-visible ${className}`}
      style={{
        width: '80px',
        height: '100%',
        top: 0,
        ...style
      }}
      viewBox="0 0 100 1000"
      fill="none"
      preserveAspectRatio="xMidYMin slice"
    >
      <motion.path
        d={pathD}
        stroke="#8B1E1E"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
        style={{
          pathLength: lineHeight,
        }}
        initial={{ pathLength: 0 }}
      />
    </motion.svg>
  );
}

