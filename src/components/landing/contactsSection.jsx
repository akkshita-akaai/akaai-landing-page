"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function ContactSection() {
  return (
    <section id="contact" className="section bg-offwhite">
      <div className="container">
        <h2 className="text-3xl md:text-5xl font-bold text-center tracking-tight">
          Let us Begin Your Story
        </h2>
        <div className="mt-10 grid gap-10 md:grid-cols-2 items-start">
          <div>
            <h3 className="text-xl font-bold">
              Ready to transform your narrative?
            </h3>
            <p className="mt-4">
              Every great brand story starts with a conversation. Let us
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
      alert("Thank you for your message! We will be in touch soon.");
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
