"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { name: "About Us", href: "#about" },
  { name: "Process", href: "#services" },
  { name: "What we do", href: "#process" },
  { name: "Services", href: "#narrative-section" },
];

export function Header() {
  return (
    <header className="relative z-50 bg-[#F8F7F5] pt-[30px]">
      <div className="container mx-auto px-6 py-5 grid grid-cols-1 md:grid-cols-3 items-center">
        {/* Left: Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
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

        {/* Center: Logo */}
        <div className="relative flex justify-center">
          <Link href="/" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[221px] h-[229px]">
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
        <div className="hidden md:flex justify-end">
           <Button 
            variant="outline" 
            className="rounded-md border border-charcoal text-charcoal hover:bg-charcoal hover:text-beige transition-colors px-8 py-2.5 h-auto text-sm bg-transparent cursor-pointer"
            onClick={() => document.getElementById('formSection')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Contact Us
          </Button>
        </div>
      </div>
    </header>
  );
}
