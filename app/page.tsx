"use client";

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { redirect } from "next/navigation";
import {
  Search,
  MapPin,
  ShoppingCart,
  Star,
  Settings,
  Truck,
  Shield,
  CreditCard,
  Menu,
  ChevronRight,
} from "lucide-react"
import dynamic from 'next/dynamic';

const WorkshopMap = dynamic(() => import('./map/page'), {
  ssr: false
});

function App() {
  return (
    <div className="App">
      <WorkshopMap />
    </div>
  );
}

const MAP_URL = "/api/map";

export default function LandingPage() {
  return (
    <div className="flex min-h-[100dvh] flex-col ">
      <header className="px-4 md:px-6 sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl">
            <MapPin className="h-8 w-8 text-primary" />
            <span className="text-primary">Bipify</span>
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

      <main className="flex-1">
        <div className="relative" style={{ height: 'calc(100vh - 64px)' }}>
          <App />
        </div>
        <section className="w-full py-10 md:py-20 lg:py-32 xl:py-40 bg-gradient-to-b from-background to-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_600px] lg:gap-12 xl:grid-cols-[1fr_700px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Find Auto Parts Near You in Seconds
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    The first marketplace that combines location-based search with a comprehensive auto parts inventory.
                    Find what you need, where you need it.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <div className="relative w-full max-w-sm">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="search"
                      placeholder="Search for parts (e.g., brake pads, alternator)"
                      className="w-full bg-background pl-8 pr-20"
                    />
                    <Button className="absolute right-0 top-0 h-9 rounded-l-none">Search</Button>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <ShoppingCart className="h-3 w-3" />
                    <span>10,000+ Parts</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    <span>500+ Locations</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-3 w-3" />
                    <span>4.8/5 Rating</span>
                  </div>
                </div>
              </div>
              <div className="relative hidden lg:block">
                <Image
                  src="/images/HeaderMap.png?height=550&width=700"
                  width={700}
                  height={550}
                  alt="Map interface showing auto parts locations"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
                />
                <div className="absolute inset-0 rounded-xl border border-foreground/10 shadow-xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">How Bipify Works</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Find the right parts at the right price, all in your neighborhood.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Search className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Search Parts</h3>
                <p className="text-center text-muted-foreground">
                  Enter your vehicle details or part number to find exactly what you need.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <MapPin className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Locate Nearby</h3>
                <p className="text-center text-muted-foreground">
                  Our map shows you where to find parts near you with real-time availability.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <ShoppingCart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Buy or Reserve</h3>
                <p className="text-center text-muted-foreground">
                  Purchase online for pickup or delivery, or reserve for in-store purchase.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Map Interface Preview */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                    Interactive Map
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Find Parts on an Interactive Map
                  </h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Our map interface shows you exactly where to find the parts you need. Filter by price, distance, and
                    availability.
                  </p>
                </div>
                <ul className="grid gap-2">
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-primary" />
                    <span>See real-time inventory at local shops</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-primary" />
                    <span>Compare prices across multiple vendors</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-primary" />
                    <span>Get directions to the nearest location</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-primary" />
                    <span>Read vendor reviews and ratings</span>
                  </li>
                </ul>
                <div>
                  <Button size="lg" className="mt-4">
                    Try the Map
                  </Button>
                </div>
              </div>
              <div className="relative lg:order-last">
                <Image
                  src="/images/LandingMap.png?height=500&width=600"
                  width={600}
                  height={500}
                  alt="Interactive map interface"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Features You'll Love</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Everything you need to find and purchase auto parts with confidence.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col gap-2">
                <Settings className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-bold">Part Compatibility</h3>
                <p className="text-muted-foreground">
                  Our system ensures you only see parts that fit your specific vehicle make and model.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <CreditCard className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-bold">Price Comparison</h3>
                <p className="text-muted-foreground">
                  Compare prices across multiple vendors to get the best deal on the parts you need.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <Star className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-bold">Vendor Ratings</h3>
                <p className="text-muted-foreground">
                  Read reviews from other customers to find trusted sellers in your area.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <Truck className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-bold">Delivery Options</h3>
                <p className="text-muted-foreground">
                  Choose between pickup and delivery options based on your schedule and needs.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <Shield className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-bold">Warranty Information</h3>
                <p className="text-muted-foreground">
                  See warranty details for each part before you buy to ensure peace of mind.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <MapPin className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-bold">Location Filters</h3>
                <p className="text-muted-foreground">
                  Filter results by distance to find parts that are convenient for you to access.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Our Users Say</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join thousands of satisfied customers who found the right parts at the right price.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col justify-between gap-4 rounded-lg border bg-background p-6 shadow-sm">
                <div className="space-y-2">
                  <div className="flex items-center gap-0.5">
                    <Star className="h-4 w-4 fill-primary text-primary" />
                    <Star className="h-4 w-4 fill-primary text-primary" />
                    <Star className="h-4 w-4 fill-primary text-primary" />
                    <Star className="h-4 w-4 fill-primary text-primary" />
                    <Star className="h-4 w-4 fill-primary text-primary" />
                  </div>
                  <p className="text-muted-foreground">
                    "Found a replacement alternator for my truck in minutes. Saved me hours of calling around to
                    different shops."
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <Image
                    src="/placeholder.svg?height=40&width=40"
                    width={40}
                    height={40}
                    alt="User"
                    className="rounded-full"
                  />
                  <div>
                    <p className="font-medium">Michael T.</p>
                    <p className="text-sm text-muted-foreground">Ford F-150 Owner</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-between gap-4 rounded-lg border bg-background p-6 shadow-sm">
                <div className="space-y-2">
                  <div className="flex items-center gap-0.5">
                    <Star className="h-4 w-4 fill-primary text-primary" />
                    <Star className="h-4 w-4 fill-primary text-primary" />
                    <Star className="h-4 w-4 fill-primary text-primary" />
                    <Star className="h-4 w-4 fill-primary text-primary" />
                    <Star className="h-4 w-4 fill-primary text-primary" />
                  </div>
                  <p className="text-muted-foreground">
                    "The map feature is a game-changer. I could see exactly which stores had the brake pads I needed in
                    stock."
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <Image
                    src="/placeholder.svg?height=40&width=40"
                    width={40}
                    height={40}
                    alt="User"
                    className="rounded-full"
                  />
                  <div>
                    <p className="font-medium">Sarah K.</p>
                    <p className="text-sm text-muted-foreground">Honda Civic Owner</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-between gap-4 rounded-lg border bg-background p-6 shadow-sm">
                <div className="space-y-2">
                  <div className="flex items-center gap-0.5">
                    <Star className="h-4 w-4 fill-primary text-primary" />
                    <Star className="h-4 w-4 fill-primary text-primary" />
                    <Star className="h-4 w-4 fill-primary text-primary" />
                    <Star className="h-4 w-4 fill-primary text-primary" />
                    <Star className="h-4 w-4 fill-primary text-primary" />
                  </div>
                  <p className="text-muted-foreground">
                    "As a mechanic, this app has streamlined how I source parts for my customers. Highly recommended!"
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <Image
                    src="/placeholder.svg?height=40&width=40"
                    width={40}
                    height={40}
                    alt="User"
                    className="rounded-full"
                  />
                  <div>
                    <p className="font-medium">David R.</p>
                    <p className="text-sm text-muted-foreground">Auto Shop Owner</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Find Your Parts?
                </h2>
                <p className="mx-auto max-w-[700px] md:text-xl">
                  Join thousands of drivers who find the right parts at the right price with Bipify.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                >
                  <Link href="/sign-up">Sign Up for Free</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full border-t bg-background py-6 md:py-12">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2 font-bold text-xl">
                <MapPin className="h-6 w-6 text-primary" />
                <span>Bipify</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Find auto parts near you with our interactive map and marketplace.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="font-medium">Product</h3>
              <nav className="flex flex-col gap-2">
                <Link href="#" className="text-sm hover:underline">
                  Features
                </Link>
                <Link href="#" className="text-sm hover:underline">
                  How It Works
                </Link>
                <Link href="#" className="text-sm hover:underline">
                  Pricing
                </Link>
                <Link href="#" className="text-sm hover:underline">
                  FAQ
                </Link>
              </nav>
            </div>
            <div className="space-y-4">
              <h3 className="font-medium">Company</h3>
              <nav className="flex flex-col gap-2">
                <Link href="#" className="text-sm hover:underline">
                  About Us
                </Link>
                <Link href="#" className="text-sm hover:underline">
                  Careers
                </Link>
                <Link href="#" className="text-sm hover:underline">
                  Blog
                </Link>
                <Link href="#" className="text-sm hover:underline">
                  Press
                </Link>
              </nav>
            </div>
            <div className="space-y-4">
              <h3 className="font-medium">Legal</h3>
              <nav className="flex flex-col gap-2">
                <Link href="#" className="text-sm hover:underline">
                  Terms of Service
                </Link>
                <Link href="#" className="text-sm hover:underline">
                  Privacy Policy
                </Link>
                <Link href="#" className="text-sm hover:underline">
                  Cookie Policy
                </Link>
              </nav>
            </div>
          </div>
          <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t pt-8 md:flex-row">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Bipify. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <span className="sr-only">Twitter</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <span className="sr-only">Facebook</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <span className="sr-only">Instagram</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
