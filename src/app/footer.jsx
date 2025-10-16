"use client";

import { FadeIn } from "@/components/magicui/fade-in";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-brand-charcoal text-brand-beige py-10 border-t border-brand-taupe">
      <FadeIn>
        <div className="container mx-auto max-w-5xl px-6 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 flex-1">
            <div className="font-accent text-lg tracking-wide">
              Not an agency.&nbsp;
              <span className="text-brand-cherry font-bold">
                A narrative lab.
              </span>
            </div>
            <div className="mt-2 text-sm opacity-70">
              &copy; {new Date().getFullYear()} The Akaai Project. All rights
              reserved.
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 flex-1 justify-end">
            <Link
              href="mailto:hello@akaaiproject.com"
              className="hover:text-brand-cherry transition"
            >
              hello@akaaiproject.com
            </Link>
            <a
              href="https://instagram.com/akaaiproject"
              className="hover:text-brand-cherry transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            <a
              href="https://linkedin.com/company/akaaiproject"
              className="hover:text-brand-cherry transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </FadeIn>
    </footer>
  );
}
