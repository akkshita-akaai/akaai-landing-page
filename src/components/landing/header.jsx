"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "About Us", href: "#about" },
  { name: "Process", href: "#services" },
  { name: "What we do", href: "#process" },
  { name: "Services", href: "#narrative-section" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="relative z-50 bg-[#F8F7F5] pt-[30px]">
      <div className="container mx-auto px-6 py-5 flex items-center justify-between relative">
        {/* Left: Navigation (Desktop) */}
        <nav className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-charcoal hover:text-cherry transition-colors text-sm"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Center: Logo (Absolute Centered) */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          <Link href="/" className="relative block w-[150px] md:w-[250px] h-[149px]">
            <Image
              src="/images/logo/The Akaai project-01.png"
              alt="The Akaai Project"
              fill
              className="object-cover"
              priority
            />
          </Link>
        </div>

        {/* Right: Contact Button (Desktop) */}
        <div className="hidden md:flex items-center">
          <Button
            variant="outline"
            className="rounded-md border border-charcoal text-charcoal hover:bg-[#8B1E1E] hover:border-[#8B1E1E] hover:text-beige transition-colors px-8 py-2.5 h-auto text-sm bg-transparent cursor-pointer"
            onClick={() => document.getElementById('formSection')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Contact Us
          </Button>
        </div>

        {/* Mobile Menu Toggle (Right on mobile) */}
        <div className="md:hidden flex items-center ml-auto">
          <button
            onClick={toggleMenu}
            className="text-charcoal focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#F8F7F5] border-t border-gray-200 shadow-lg py-4 px-6 flex flex-col space-y-4 animate-in slide-in-from-top-5">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-charcoal hover:text-cherry transition-colors text-lg font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Button
            variant="outline"
            className="w-full rounded-md border border-charcoal text-charcoal hover:bg-charcoal hover:text-beige transition-colors px-8 py-2.5 h-auto text-sm bg-transparent cursor-pointer"
            onClick={() => {
              setIsMenuOpen(false);
              document.getElementById("formSection")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Contact Us
          </Button>
        </div>
      )}
    </header>
  );
}
