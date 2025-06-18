import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
<div className="py-28 bg-background text-foreground">
  <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
    
    {/* Left: Text */}
    <div>
      <h1 className="text-5xl font-bold leading-tight">
        Free and open
      </h1>
      <h2 className="text-xl font-semibold text-primary mt-2">
        stock market and financial education
      </h2>
      <p className="mt-6 text-muted-foreground max-w-xl">
        Varsity is an extensive and in-depth collection of stock market and financial lessons created by Karthik Rangappa at <span className="font-semibold text-foreground">Zerodha</span>. It is free and openly accessible to everyone and is one of the largest financial education resources on the web. No signup, no pay-wall, no ads.
      </p>
    </div>

    {/* Right: Image */}
    <div className="flex justify-center">
      <img
        src="/images/test.jpg"
        alt="Illustration"
        className="w-full max-w-md md:max-w-lg lg:max-w-xl"
      />
    </div>
  </div>
</div>

  );
}
