import { Button } from "@/components/ui/button";
import { MapPin, Shield, Menu, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AboutUs() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <header className="px-4 md:px-6 sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl">
            <MapPin className="h-8 w-8 text-primary" />
            <Link href="/">
                <span className="text-primary">Bipify</span>
              </Link>
          </div>

          <nav className="hidden md:flex gap-6">
            <Link href="/find-parts" className="text-sm font-medium hover:text-primary">
              Find Parts
            </Link>
            <Link href="/sell" className="text-sm font-medium hover:text-primary">
              Sell Parts
            </Link>
            <Link href="/about-us" className="text-sm font-medium hover:text-primary">
              About Us
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <Link href="/sign-in" className="hidden md:block text-sm font-medium hover:text-primary">
              Sign In
            </Link>
            <Button className="hidden md:inline-flex" asChild>
              <Link href="/sign-up">Get Started</Link>
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Contenido de About Us */}
      <main className="flex-1">
        <section className="w-full py-16 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
              <div className="flex flex-col justify-center space-y-6">
                <div className="space-y-4">
                  <div className="inline-block rounded-full bg-primary px-4 py-1 text-sm text-white font-medium tracking-wide shadow">
                    Our Mission
                  </div>
                  <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
                    Connecting Drivers with the Parts They Need
                  </h2>
                  <p className="max-w-[600px] text-muted-foreground text-lg leading-relaxed">
                    At <span className="font-semibold text-primary">Bipify</span>, we understand the frustration of searching for auto parts.
                    Our platform combines <span className="font-semibold">real-time inventory</span> with
                    <span className="font-semibold"> location-based search</span>, so you can find the right part at the nearest shop—
                    no more endless calls or wasted trips.
                  </p>
                </div>

                <ul className="grid gap-5">
                  <li className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 mt-1 text-primary" />
                    <div>
                      <h3 className="font-semibold text-lg">How It Works</h3>
                      <p className="text-muted-foreground text-base">
                        Log in, search for your part, and instantly see which local shops have it in stock.
                        Our interactive map guides you to the nearest options.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <Shield className="h-6 w-6 mt-1 text-primary" />
                    <div>
                      <h3 className="font-semibold text-lg">Trusted Network</h3>
                      <p className="text-muted-foreground text-base">
                        We partner with <span className="font-semibold">500+ certified vendors</span>,
                        so you get quality parts with verified warranties and reviews.
                      </p>
                    </div>
                  </li>
                </ul>

                <div className="flex flex-wrap gap-4 pt-2">
                  <Link href="/">
                    <Button variant="outline" className="px-6 py-2 text-sm">Back to Home</Button>
                  </Link>
                  <Button className="text-sm px-6 py-2.5" asChild>
                    <Link href="/sign-up">Get Started</Link>
                  </Button>
                </div>
              </div>

              <div className="relative">
                <Image
                  src="/images/HeaderMap.png"
                  width={600}
                  height={400}
                  alt="Mechanics using Bipify"
                  className="mx-auto rounded-2xl object-cover shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Sección adicional */}
        <section className="w-full py-16 md:py-24 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl space-y-8">
              <h2 className="text-3xl font-bold text-center">Why Choose Bipify?</h2>
              <ul className="space-y-5 text-base text-muted-foreground">
                {[
                  "Real-time inventory updates",
                  "Competitive pricing from local shops",
                  "Verified vendor ratings and reviews",
                  "Easy pickup or delivery options",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <ChevronRight className="h-5 w-5 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>

      {/* Footer - sin cambios, como en LandingPage */}
      <footer className="border-t py-4">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row px-4 md:px-6">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Bipify. All rights reserved.
          </p>
          <nav className="flex gap-4">
            <Link href="#" className="text-sm text-muted-foreground hover:underline">
              Terms
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:underline">
              Privacy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:underline">
              Contact
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}