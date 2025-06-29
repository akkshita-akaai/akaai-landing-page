// app/page.tsx
"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import Footer from "@/app/footer";
import MarqueeBlog from "@/components/landing/marqueeBlog";
import { Particles } from "@/components/magicui/particles";
import { AuroraText } from "@/components/magicui/aurora-text";
import { MagicCard } from "@/components/magicui/magic-card";
import { Globe } from "lucide-react";
import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input";

export default function HomePage() {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center gap-12 py-28">
        <div className="md:w-1/2">
          <h1 className="text-5xl font-bold">
            Empower Your <AuroraText>Trading Journey</AuroraText> 🚀
          </h1>
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
        <Particles
          className="absolute inset-0 z-0"
          quantity={200}
          ease={50}
          refresh
        />
      </section>
      {/* Testimonials Section */}
      <section id="testimonials" className="py-8">
        <div className="container mx-auto space-y-12">
          <MarqueeBlog />
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

      {/* Call-to-Action Banner */}
      <section className="py-20 text-center">
        <div className="flex gap-10">
          <div className="w-full">
            <p className="flex items-center gap-2">
              Newsletter <Globe />
            </p>
            <p>
              Our news letter is the best way to keep up to date, with latest
              trading tips and news.
            </p>
          </div>
          <div className="w-full">
            <Card className="p-0 max-w-sm w-full shadow-none border-none">
              <MagicCard gradientColor={"#262626"} className="p-0">
                <CardHeader className="border-b border-border p-4 [.border-b]:pb-4">
                  <CardTitle>Login</CardTitle>
                  <CardDescription>
                    Enter your credentials to access your account
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-4">
                  <form>
                    <div className="grid gap-4">
                      <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="name@example.com"
                        />
                      </div>
                    </div>
                  </form>
                </CardContent>
                <CardFooter className="p-4 border-t border-border [.border-t]:pt-4">
                  <Button className="w-full">Sign In</Button>
                </CardFooter>
              </MagicCard>
            </Card>
          </div>
        </div>
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
