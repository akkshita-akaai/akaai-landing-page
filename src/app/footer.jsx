"use client";

import { Instagram, Linkedin, Youtube } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="min-h-screen bg-[#E8E3D8] flex items-center justify-center p-8">
      <div className="w-full max-w-6xl">
        {/* Main Content */}
        <div className="text-center mb-32">
          <h1 className="text-4xl md:text-5xl lg:text-6xl mb-16 text-[#2C2416] tracking-tight">
            Let's weave the next story
            <br />
            together.
          </h1>

          {/* Knot Logo and Brand Name */}
          <div className="flex flex-col items-center gap-6 mb-4">
            {/* <div className="w-32 h-24 relative">

            </div> */}
            <Image src="/images/logo/The Akaai project-03.png" width={200} height={30} alt="logo" className="object-fill" />
            {/* <h2 className="text-5xl tracking-[0.2em] text-[#2C2416]">AKAAI</h2> */}
          </div>
        </div>

        {/* Footer Section */}
        <div className="flex flex-col md:flex-row md:justify-between items-start gap-8 md:gap-16">
          {/* Contact Details */}
          <div>
            <h3 className="text-xl md:text-2xl mb-6 text-[#2C2416]">Contact Details</h3>
            <div className="space-y-2 text-[#2C2416]">
              <div>

                <a href="mailto:collab@theakaaiproject.com" className="text-base md:text-lg">Email: collab@theakaaiproject.com</a>
              </div>
              <a href="tel:9910176157" className="text-base md:text-lg">Phone: (+91) 99101 76157 </a>
            </div>
          </div>

          {/* Social Icons */}
          <div>
            <h3 className="text-xl md:text-2xl mb-6 text-[#2C2416]">Social</h3>
            <div className="flex gap-4 md:gap-6">
              <a
                href="https://www.instagram.com/theakaaiproject?igsh=YjlyaDFhMGxlanFq"
                className="w-12 h-12 rounded-full bg-[#C74940] flex items-center justify-center text-white hover:opacity-80 transition-opacity"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/company/the-akaai-project/"
                className="w-12 h-12 rounded-full bg-[#2C2416] flex items-center justify-center text-white hover:opacity-80 transition-opacity"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              {/* <a
                href="#"
                className="w-12 h-12 rounded-full bg-[#2C2416] flex items-center justify-center text-white hover:opacity-80 transition-opacity"
                aria-label="YouTube"
              >
                <Youtube className="w-6 h-6" />
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
