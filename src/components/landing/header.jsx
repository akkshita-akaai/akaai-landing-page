"use client";

import { Button } from "@/components/ui/button";
import { TextReveal } from "@/components/magicui/text-reveal";
import Link from "next/link";
import { useEffect } from "react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Labs", href: "#labs" },
  { name: "Services", href: "#services" },
  { name: "Process", href: "#process" },
  { name: "Numbers", href: "#numbers" },
  { name: "Contact", href: "#contact" },
];

export function Header() {
  // Optional: Smooth scroll behavior on navigation
  useEffect(() => {
    const handleNavClick = (e) => {
      if (e.target.matches("a[href^='#']")) {
        const id = e.target.getAttribute("href").replace("#", "");
        const el = document.getElementById(id);
        if (el) {
          e.preventDefault();
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    };
    document.addEventListener("click", handleNavClick);
    return () => document.removeEventListener("click", handleNavClick);
  }, []);

  return (
    <header className="sticky top-0 z-30 bg-brand-beige/90 backdrop-blur border-b border-brand-taupe">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          href="/"
          className="font-accent text-2xl font-bold text-brand-cherry tracking-wide"
        >
          <TextReveal>Akaai Project</TextReveal>
        </Link>
        <nav className="space-x-6 hidden md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-brand-charcoal font-medium hover:text-brand-cherry transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <div className="md:hidden">{/* Mobile menu logic is optional */}</div>
        <Button className="bg-brand-cherry text-white px-4 py-2 rounded-none border-none shadow-md hover:bg-brand-cherry/90 transition">
          Start Your Story
        </Button>
      </div>
    </header>
  );
}
