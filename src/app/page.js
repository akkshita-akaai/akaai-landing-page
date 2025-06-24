// app/page.tsx
"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import Footer from "@/app/footer";

export default function HomePage() {
  return (
    <div className="space-y-32">
      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center gap-12 py-28">
        <div className="md:w-1/2">
          <h1 className="text-5xl font-bold">Empower Your Trading Journey</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-lg">
            Access free, open financial education and market insights—no signup,
            no paywall.
          </p>
          <Button className="mt-8">Get Started</Button>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <Image
            src="/images/test.jpg"
            alt="Market chart illustration"
            width={600}
            height={400}
            className="w-full max-w-md"
          />
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10"
      >
        {[
          {
            title: "In-Depth Articles",
            description: "Comprehensive guides on stocks, options, and more.",
          },
          {
            title: "Real-Time Data",
            description: "Live market data and charts at your fingertips.",
          },
          {
            title: "Community Forum",
            description: "Discuss strategies with fellow traders.",
          },
        ].map((f) => (
          <Card key={f.title} className="p-6 text-center">
            <h3 className="text-2xl font-semibold">{f.title}</h3>
            <p className="mt-2 text-muted-foreground">{f.description}</p>
          </Card>
        ))}
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-28">
        <div className="container mx-auto space-y-12">
          <h2 className="text-3xl font-bold text-center">
            What Our Readers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { quote: "Transformed how I approach trading.", name: "Alex P." },
              { quote: "Clear, actionable tutorials.", name: "Maria G." },
              { quote: "I never miss a market move now.", name: "David L." },
            ].map((t) => (
              <Card key={t.name} className="p-6">
                <p className="italic">“{t.quote}”</p>
                <p className="mt-4 font-semibold text-right">— {t.name}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call-to-Action Banner */}
      <section className="py-20  text-center">
        <h3 className="text-3xl font-semibold">Ready to Level Up?</h3>
        <p className="mt-2 mb-6">
          Join qtTrading today and unlock premium content for free.
        </p>
        <Button variant="outline">Sign Up Now</Button>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="container mx-auto px-4 py-28">
        <h2 className="text-3xl font-bold text-center mb-8">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Is qtTrading really free?</AccordionTrigger>
            <AccordionContent>
              Yes, all core lessons and articles are completely free with no ads
              or paywalls.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Can I contribute content?</AccordionTrigger>
            <AccordionContent>
              We welcome guest posts—visit our community forum for guidelines.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
      <Footer />
    </div>
  );
}
