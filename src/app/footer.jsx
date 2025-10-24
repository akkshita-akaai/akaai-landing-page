"use client";

import { Instagram, Linkedin, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <div className="min-h-screen bg-[#E8E3D8] flex items-center justify-center p-8">
      <div className="w-full max-w-6xl">
        {/* Main Content */}
        <div className="text-center mb-32">
          <h1 className="text-7xl mb-16 text-[#2C2416] tracking-tight">
            Let's weave the next story
            <br />
            together.
          </h1>

          {/* Knot Logo and Brand Name */}
          <div className="flex flex-col items-center gap-6 mb-4">
            <div className="w-32 h-24 relative">
              <svg viewBox="0 0 100 80" className="w-full h-full">
                {/* Decorative knot */}
                <path
                  d="M 50 10 Q 35 15, 35 25 Q 35 35, 45 35 Q 40 35, 40 40 Q 40 50, 50 50 Q 60 50, 60 40 Q 60 35, 55 35 Q 65 35, 65 25 Q 65 15, 50 10"
                  fill="none"
                  stroke="#C74940"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle
                  cx="50"
                  cy="27"
                  r="8"
                  fill="none"
                  stroke="#C74940"
                  strokeWidth="3"
                />
                <path
                  d="M 45 35 Q 42 45, 42 55 Q 42 65, 50 70"
                  fill="none"
                  stroke="#C74940"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <path
                  d="M 55 35 Q 58 45, 58 55 Q 58 65, 50 70"
                  fill="none"
                  stroke="#C74940"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <h2 className="text-5xl tracking-[0.2em] text-[#2C2416]">AKAAI</h2>
          </div>
        </div>

        {/* Footer Section */}
        <div className="flex justify-between items-start gap-16">
          {/* Contact Details */}
          <div>
            <h3 className="text-2xl mb-6 text-[#2C2416]">Contact Details</h3>
            <div className="space-y-2 text-[#2C2416]">
              <p className="text-lg">Email: hello@akaai.com</p>
              <p className="text-lg">Phone: +1 (555) 123-4667</p>
            </div>
          </div>

          {/* Social Icons */}
          <div>
            <h3 className="text-2xl mb-6 text-[#2C2416]">Social</h3>
            <div className="flex gap-6">
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-[#C74940] flex items-center justify-center text-white hover:opacity-80 transition-opacity"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-[#2C2416] flex items-center justify-center text-white hover:opacity-80 transition-opacity"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-[#2C2416] flex items-center justify-center text-white hover:opacity-80 transition-opacity"
                aria-label="YouTube"
              >
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
