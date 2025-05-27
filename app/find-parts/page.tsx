"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  MapPin,
  Search,
  Filter,
  ChevronDown,
  Star,
  Grid,
  Map,
  SlidersHorizontal,
  X,
  Menu,
  Car,
  ShoppingCart,
  Heart,
  ArrowUpDown,
} from "lucide-react";
import { cn } from "@/lib/utils";
import useSWR from "swr";

const PRODUCTS_API_URL = "/api/products";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function PartsPage() {
  const { data, error, isLoading } = useSWR(PRODUCTS_API_URL, fetcher);

  if (error) return <div>Failed to load products: {error.message}</div>; // Muestra el mensaje de error
  if (isLoading) return <div>Loading products...</div>;

  const products = Object.values(data);

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

      <main className="flex-1">
        <div className="container px-4 py-6 md:px-6 md:py-8">
          {/* Vehicle Selection Bar */}
          <div className="mb-6 rounded-lg border bg-muted/50 p-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <Car className="h-5 w-5 text-primary" />
                <span className="font-medium">Selected Vehicle:</span>
                <span>2023 Toyota Camry LE</span>
                <Badge variant="outline" className="ml-2">
                  Compatible Parts Only
                </Badge>
              </div>
              <Button variant="outline" size="sm">
                Change Vehicle
              </Button>
            </div>
          </div>

          {/* Search and View Toggle */}
          <div className="mb-6 flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:max-w-md">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search for parts (e.g., brake pads, alternator)"
                className="pl-9 pr-12"
              />
              <Button size="sm" className="absolute right-1 top-1 h-7">
                Search
              </Button>
            </div>
            <div className="flex items-center gap-2 self-end">
              <Tabs defaultValue="grid" className="w-[200px]">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="grid" className="flex items-center gap-1">
                    <Grid className="h-4 w-4" />
                    <span>Grid</span>
                  </TabsTrigger>
                  <TabsTrigger value="map" className="flex items-center gap-1">
                    <Map className="h-4 w-4" />
                    <span>Map</span>
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Filters Sidebar */}
            <div className="md:col-span-1">
              <div className="sticky top-20 rounded-lg border bg-card p-4">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold flex items-center gap-2">
                    <Filter className="h-4 w-4" />
                    Filters
                  </h2>
                  <Button variant="ghost" size="sm" className="h-8 text-xs">
                    Clear All
                  </Button>
                </div>


                {/* Price Range Filter */}
                <div className="mb-6">
                  <h3 className="font-medium mb-4">Price Range</h3>
                  <Slider defaultValue={[0, 200]} max={200} step={1} className="mb-6" />
                  <div className="flex items-center justify-between">
                    <div className="w-20">
                      <Input type="number" placeholder="Min" className="h-8 text-xs" />
                    </div>
                    <span className="text-muted-foreground">to</span>
                    <div className="w-20">
                      <Input type="number" placeholder="Max" className="h-8 text-xs" />
                    </div>
                  </div>
                </div>

                {/* Distance Filter */}
                <div className="mb-6">
                  <h3 className="font-medium mb-2">Distance</h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="distance-5" defaultChecked />
                      <Label htmlFor="distance-5" className="text-sm font-normal">
                        Within 5 miles
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="distance-10" />
                      <Label htmlFor="distance-10" className="text-sm font-normal">
                        Within 10 miles
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="distance-25" />
                      <Label htmlFor="distance-25" className="text-sm font-normal">
                        Within 25 miles
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="distance-50" />
                      <Label htmlFor="distance-50" className="text-sm font-normal">
                        Within 50 miles
                      </Label>
                    </div>
                  </div>
                </div>

                {/* Availability Filter */}
                <div className="mb-6">
                  <h3 className="font-medium mb-2">Availability</h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="in-stock" defaultChecked />
                      <Label htmlFor="in-stock" className="text-sm font-normal">
                        In Stock Only
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="same-day" />
                      <Label htmlFor="same-day" className="text-sm font-normal">
                        Same Day Pickup
                      </Label>
                    </div>
                  </div>
                </div>

                <Button className="w-full">Apply Filters</Button>
              </div>
            </div>

            {/* Parts Grid */}
            <div className="md:col-span-3">
              <Tabs defaultValue="grid">
                <TabsContent value="grid" className="mt-0">
                  {/* Results Header */}
                  <div className="mb-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                    <div>
                      <h1 className="text-2xl font-bold">Auto Parts</h1>
                      {/* Mostrar el número de resultados dinámicamente */}
                      <p className="text-muted-foreground">
                        Showing {products.length} results for "2023 Toyota Camry LE"
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-muted-foreground">Sort by:</span>
                      <select className="rounded-md border border-input bg-background px-3 py-1 text-sm">
                        <option>Relevance</option>
                        <option>Price: Low to High</option>
                        <option>Price: High to Low</option>
                        <option>Distance</option>
                        <option>Rating</option>
                      </select>
                    </div>
                  </div>

                  {/* Parts Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {products.map((product) => (
                      <div
                        key={product.id || product.name} // Usar id si existe, de lo contrario name (para keys únicas)
                        className="group relative rounded-lg border bg-card overflow-hidden transition-all hover:shadow-md"
                      >
                        <div className="aspect-square relative overflow-hidden bg-muted">
                          {/* Placeholder image */}
                          <Image
                            src="../placeholder.svg"
                            alt={product.name || "Auto Part"} // Usa el nombre del producto o un default
                            fill
                            className="object-contain p-4 transition-transform group-hover:scale-105"
                          />
                          <Button
                            variant="ghost"
                            size="icon"
                            className="absolute right-2 top-2 h-8 w-8 rounded-full bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            <Heart className="h-4 w-4" />
                            <span className="sr-only">Add to wishlist</span>
                          </Button>
                        </div>
                        <div className="p-4">
                          <h3 className="font-medium line-clamp-2 mb-1 group-hover:text-primary">
                            <Link href={`/find-parts/${product.id}`}>{product.name}</Link>
                          </h3>
                          <div className="flex items-center gap-1 mb-3">
                            <div className="flex">
                              {/* Rating: Usar un valor por defecto si no existe */}
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={cn(
                                    "h-3 w-3",
                                    i < Math.floor(product.rating || 0) ? "fill-primary text-primary" : "text-muted-foreground"
                                  )}
                                />
                              ))}
                            </div>
                            {/* Reviews: Usar un valor por defecto si no existe */}
                            <span className="text-xs text-muted-foreground">({product.reviews || 0})</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              {/* Precio: Asegurarse de que sea un número y formatearlo */}
                              <span className="font-bold text-lg">${(product.price || 0).toFixed(2)}</span>
                            </div>
                            <div className="flex items-center gap-1">
                            </div>
                          </div>
                          <Button className="w-full mt-3">
                            <ShoppingCart className="mr-2 h-4 w-4" />
                            Add to Cart
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Pagination */}
                  <div className="mt-8 flex items-center justify-center gap-2">
                    <Button variant="outline" size="icon" disabled>
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
                        className="h-4 w-4"
                      >
                        <polyline points="15 18 9 12 15 6"></polyline>
                      </svg>
                    </Button>
                    <Button variant="outline" size="sm" className="h-8 w-8" disabled>
                      1
                    </Button>
                    <Button variant="outline" size="sm" className="h-8 w-8">
                      2
                    </Button>
                    <Button variant="outline" size="sm" className="h-8 w-8">
                      3
                    </Button>
                    <Button variant="outline" size="sm" className="h-8 w-8">
                      4
                    </Button>
                    <Button variant="outline" size="sm" className="h-8 w-8">
                      5
                    </Button>
                    <Button variant="outline" size="icon">
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
                        className="h-4 w-4"
                      >
                        <polyline points="9 18 15 12 9 6"></polyline>
                      </svg>
                    </Button>
                  </div>
                </TabsContent>

                <TabsContent value="map">
                  <div className="rounded-lg border overflow-hidden">
                    <div className="aspect-[16/9] md:aspect-[21/9] relative bg-muted">
                      <Image
                        src="/placeholder.svg?height=600&width=1200"
                        alt="Map view of auto parts"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-4 left-4 right-4 bg-background/90 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                        <div className="flex items-center gap-2">
                          <Search className="h-5 w-5 text-muted-foreground" />
                          <input
                            type="text"
                            placeholder="Search for parts on map"
                            className="flex-1 bg-transparent border-none outline-none"
                          />
                          <Button size="sm">Search</Button>
                        </div>
                      </div>
                      <div className="absolute bottom-4 left-4 flex flex-col gap-2">
                        <Button variant="default" className="shadow-lg flex items-center gap-2">
                          <SlidersHorizontal className="h-4 w-4" />
                          <span>Filters</span>
                        </Button>
                        <Button variant="outline" className="bg-background/90 shadow-lg">
                          <ArrowUpDown className="mr-2 h-4 w-4" />
                          <span>Sort By</span>
                        </Button>
                      </div>
                      <div className="absolute bottom-4 right-4">
                        <Button variant="outline" className="bg-background/90 shadow-lg">
                          <span>View as List</span>
                        </Button>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </main>

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