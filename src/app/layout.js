// app/layout.tsx
import { Inter, Playfair_Display } from "next/font/google";
import { neueHaasDisplay } from "./fonts/neue-haas-display";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});
const playfair = Playfair_Display({
  style: ["italic", "normal"],
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-accent",
  display: "swap",
});

export const metadata = {
  title: "The Akaai Project",
  description:
    "We build brands from scratch with stories that stick. A narrative lab where ideas take shape, stories find voice, and brands become movements.",
  icons : {
    icon : "/favicon.ico"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${neueHaasDisplay.variable} ${inter.variable} ${playfair.variable}`}>
      <body className="font-nhd bg-beige text-charcoal">{children}</body>
    </html>
  );
}
