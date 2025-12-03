"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { name: "About Us", href: "#about" },
  { name: "Process", href: "#process" },
  { name: "What we do", href: "#services" },
  { name: "Services", href: "#numbers" },
];

export function Header() {
  return (
    <header className="relative z-50 bg-beige/90 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-4 grid grid-cols-3 items-center">
        {/* Left: Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-charcoal font-medium hover:text-cherry transition-colors text-sm lg:text-base"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Center: Logo */}
        <div className="flex justify-center">
          <Link href="/" className="relative w-32 h-16 md:w-40 md:h-20">
             <Image
              src="/images/logo/The Akaai project-01.png"
              alt="The Akaai Project"
              fill
              className="object-contain"
              priority
            />
          </Link>
        </div>

        {/* Right: Contact Button */}
        <div className="flex justify-end">
           <Button variant="outline" className="rounded-md border-charcoal text-charcoal hover:bg-charcoal hover:text-beige transition-colors px-6 py-2 h-auto text-sm md:text-base bg-transparent">
            Contact Us
          </Button>
        </div>
      </div>
    </header>
  );
}
