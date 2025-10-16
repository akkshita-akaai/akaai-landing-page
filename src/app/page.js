"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
// Optional: uncomment if you added Magic UI BlurFade
// import { BlurFade } from "@/components/ui/blur-fade";

const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
];

export default function Page() {
  const [open, setOpen] = useState(false);
  const headerRef = useRef(null);

  // Sticky header slight bg change on scroll
  useEffect(() => {
    const onScroll = () => {
      const el = headerRef.current;
      if (!el) return;
      if (window.scrollY > 100) {
        el.classList.add("bg-beige/98");
        el.classList.remove("bg-beige/95");
      } else {
        el.classList.add("bg-beige/95");
        el.classList.remove("bg-beige/98");
      }
    };
    onScroll();
    addEventListener("scroll", onScroll);
    return () => removeEventListener("scroll", onScroll);
  }, []);

  // Simple in-view reveal for .fade-in-up elements
  useEffect(() => {
    const els = document.querySelectorAll(".fade-in-up");
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (e) => e.isIntersecting && e.target.classList.add("is-visible")
        ),
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <>
      {/* Header */}
      <header
        ref={headerRef}
        className="fixed top-0 inset-x-0 z-50 bg-beige/95 header-blur transition-colors"
      >
        <nav className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-1">
            <img src="/images/logo.jpg" className="w-10" />
            <a href="#home" className="text-xl font-bold tracking-tight">
              The Akaai Project
            </a>
          </div>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="relative font-medium hover:text-cherry after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-cherry hover:after:w-full after:transition-all"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile toggle */}
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex flex-col gap-1.5 mr-2"
          >
            <span className="h-0.5 w-6 bg-charcoal"></span>
            <span className="h-0.5 w-6 bg-charcoal"></span>
            <span className="h-0.5 w-6 bg-charcoal"></span>
          </button>
        </nav>

        {/* Mobile menu */}
        {open && (
          <ul className="md:hidden container pb-4 pt-2 px-3 flex flex-col gap-3">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  onClick={closeMenu}
                  className="block py-2 font-medium"
                  href={l.href}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </header>

      {/* Hero */}
      <section
        id="home"
        className="min-h-screen grid place-items-center text-center px-6 pt-32"
      >
        <div className="max-w-3xl fade-in-up">
          <h1 className="font-sans text-4xl md:text-6xl font-bold leading-tight tracking-tight">
            The Akaai Project
          </h1>
          <p className="mt-4 text-lg opacity-80">
            We build brands from scratch; with stories that stick.
          </p>

          <div className="mt-8">
            <Button
              asChild
              className="bg-cherry text-offwhite hover:bg-[oklch(0.45_0.13_24.5)]"
            >
              <a href="#contact">Build your narrative</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Welcome */}
      <section id="about" className="section bg-offwhite">
        <div className="container">
          <h2 className="text-3xl md:text-5xl font-bold text-center tracking-tight">
            Welcome to The Akaai Project
          </h2>
          <p className="mt-6 font-accent text-xl italic text-center">
            "A Narrative Lab where ideas take shape, stories find voice, and
            brands become movements."
          </p>
          <p className="mt-6 text-center max-w-2xl mx-auto opacity-70">
            We don't chase trends. We trace roots. We design narratives, not
            templates. We build brand presence, not noise. Meaning is the new
            marketing.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { t: "Social Lab", s: "Where stories go Social" },
              { t: "Strategy Lab", s: "Where brands find purpose" },
              {
                t: "Visual Lab",
                s: "We visualize emotions, not just aesthetics",
              },
              {
                t: "Founder Lab",
                s: "Where thought leadership meets storytelling",
              },
            ].map((card) => (
              <div
                key={card.t}
                className="fade-in-up rounded-lg p-8 text-center shadow-[var(--shadow-subtle)] bg-taupe/60 hover:shadow-[var(--shadow-medium)] transition-transform hover:-translate-y-1"
              >
                <h3 className="text-lg font-bold">{card.t}</h3>
                <p className="mt-1 opacity-80">{card.s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="section">
        <div className="container">
          <h2 className="text-3xl md:text-5xl font-bold text-center tracking-tight">
            Our Services
          </h2>
          <p className="mt-6 text-center max-w-2xl mx-auto opacity-70">
            Every brand has a story waiting to be told. We help you find it,
            shape it, and share it.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                h: "Brand Strategy & Planning",
                b: "Deep-dive brand DNA discovery and narrative crafting. We uncover the essence of your brand and build strategic foundations that resonate.",
              },
              {
                h: "Content Marketing & Creative Design",
                b: "Story-based content and visual storytelling. We create content that connects, engages, and converts through powerful narratives.",
              },
              {
                h: "AI Integration & Digital Campaigns",
                b: "Narrative-led advertising and emotional funnels. We leverage technology to amplify your story across all digital touchpoints.",
              },
              {
                h: "Boutique Services",
                b: "Bespoke solutions designed around your brand. Custom narrative architecture tailored to your market and goals.",
              },
            ].map((s) => (
              <div
                key={s.h}
                className="fade-in-up rounded-lg border border-charcoal/10 bg-offwhite p-8 hover:-translate-y-0.5 transition"
              >
                <h3 className="text-lg font-bold">{s.h}</h3>
                <p className="mt-2 opacity-80">{s.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="section bg-taupe/60">
        <div className="container">
          <h2 className="text-3xl md:text-5xl font-bold text-center tracking-tight">
            We See What Others Feel
          </h2>
          <p className="mt-6 text-center max-w-2xl mx-auto opacity-70">
            Our proven methodology transforms brands through strategic narrative
            development.
          </p>
          <div className="mt-10 flex flex-wrap items-start justify-between gap-6">
            {[
              ["1", "Discover", "Uncover brand DNA"],
              ["2", "Define", "Articulate story & tone"],
              ["3", "Design", "Visualise emotion"],
              ["4", "Deploy", "Execute across channels"],
              ["5", "Distill", "Measure, refine, evolve"],
            ].map(([n, h, d], i) => (
              <div
                key={n}
                className="fade-in-up min-w-[180px] flex-1 text-center relative"
              >
                <div className="mx-auto mb-2 grid h-14 w-14 place-items-center rounded-full bg-cherry text-offwhite text-xl font-bold">
                  {n}
                </div>
                <h3 className="font-bold">{h}</h3>
                <p className="opacity-80">{d}</p>
                {i < 4 && (
                  <div className="hidden md:block absolute right-[-12px] top-6 text-cherry text-xl font-bold">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Numbers */}
      <section className="section bg-charcoal text-offwhite">
        <div className="container">
          <h2 className="text-3xl md:text-5xl font-bold text-center tracking-tight">
            Narrative Numbers
          </h2>
          <p className="mt-6 text-center max-w-2xl mx-auto opacity-90">
            Results that speak louder than words.
          </p>
          <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 text-center">
            {[
              ["130+", "Brands Served"],
              ["11+", "Industries"],
              ["500+", "Campaigns Delivered"],
              ["85%+", "Elevation in Digital Presence"],
            ].map(([n, l]) => (
              <div key={n} className="fade-in-up">
                <span className="block font-bold text-5xl text-cherry">
                  {n}
                </span>
                <span className="mt-1 block text-lg opacity-90">{l}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section bg-offwhite">
        <div className="container">
          <h2 className="text-3xl md:text-5xl font-bold text-center tracking-tight">
            Let's Begin Your Story
          </h2>
          <div className="mt-10 grid gap-10 md:grid-cols-2 items-start">
            <div>
              <h3 className="text-xl font-bold">
                Ready to transform your narrative?
              </h3>
              <p className="mt-4">
                Every great brand story starts with a conversation. Let's
                discover what makes your brand unique and craft a narrative that
                resonates.
              </p>

              <div className="mt-6 space-y-6">
                <div>
                  <h4 className="text-cherry font-semibold">Email</h4>
                  <p>hello@akaaiproject.com</p>
                </div>
                <div>
                  <h4 className="text-cherry font-semibold">Phone</h4>
                  <p>+1 (555) 123-4567</p>
                </div>
                <div>
                  <h4 className="text-cherry font-semibold">Office</h4>
                  <p>
                    Narrative Lab
                    <br />
                    123 Story Street
                    <br />
                    Creative District, CD 12345
                  </p>
                </div>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-charcoal text-offwhite text-center py-8">
        <div className="container">
          <p>
            &copy; {new Date().getFullYear()} The Akaai Project. All rights
            reserved. | Not an agency. A narrative lab.
          </p>
        </div>
      </footer>
    </>
  );
}

function ContactForm() {
  const [sending, setSending] = useState(false);

  async function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    if (
      !formData.get("name") ||
      !formData.get("email") ||
      !formData.get("message")
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    setSending(true);
    setTimeout(() => {
      alert(
        "Thank you for your message! We'll be in touch soon to begin crafting your narrative."
      );
      form.reset();
      setSending(false);
    }, 1200);
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-lg bg-beige p-8 shadow-[var(--shadow-subtle)]"
    >
      <div className="grid gap-6">
        <div className="grid gap-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" name="name" className="form-field" required />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            name="email"
            className="form-field"
            required
          />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="company">Company</Label>
          <Input id="company" name="company" className="form-field" />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="message">Your Story</Label>
          <Textarea
            id="message"
            name="message"
            className="form-field h-32"
            required
            placeholder="Tell us about your brand narrative needs..."
          />
        </div>

        <Button
          type="submit"
          disabled={sending}
          className="bg-cherry text-offwhite hover:bg-[oklch(0.45_0.13_24.5)]"
        >
          {sending ? "Sending..." : "Start Our Journey"}
        </Button>
      </div>
    </form>
  );
}
