import localFont from "next/font/local";

export const neueHaasDisplay = localFont({
  src: [
    // Ultra light
    { path: "./NeueHaasDisplayXXThin.ttf", weight: "100", style: "normal" },
    {
      path: "./NeueHaasDisplayXXThinItalic.ttf",
      weight: "100",
      style: "italic",
    },

    // Extra light
    { path: "./NeueHaasDisplayXThin.ttf", weight: "200", style: "normal" },
    {
      path: "./NeueHaasDisplayXThinItalic.ttf",
      weight: "200",
      style: "italic",
    },

    // Light
    { path: "./NeueHaasDisplayLight.ttf", weight: "300", style: "normal" },
    {
      path: "./NeueHaasDisplayLightItalic.ttf",
      weight: "300",
      style: "italic",
    },

    // Regular
    { path: "./NeueHaasDisplayRoman.ttf", weight: "400", style: "normal" },
    {
      path: "./NeueHaasDisplayRomanItalic.ttf",
      weight: "400",
      style: "italic",
    },

    // Medium
    { path: "./NeueHaasDisplayMediu.ttf", weight: "500", style: "normal" }, // filename as provided
    {
      path: "./NeueHaasDisplayMediumItalic.ttf",
      weight: "500",
      style: "italic",
    },

    // Bold
    { path: "./NeueHaasDisplayBold.ttf", weight: "700", style: "normal" },
    { path: "./NeueHaasDisplayBoldItalic.ttf", weight: "700", style: "italic" },

    // Black
    { path: "./NeueHaasDisplayBlack.ttf", weight: "900", style: "normal" },
    {
      path: "./NeueHaasDisplayBlackItalic.ttf",
      weight: "900",
      style: "italic",
    },
  ],
  variable: "--font-nhd",
  display: "swap",
  preload: true,
  fallback: [
    "system-ui",
    "Segoe UI",
    "Roboto",
    "Helvetica",
    "Arial",
    "sans-serif",
  ],
});
