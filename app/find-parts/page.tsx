import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
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
} from "lucide-react"
import { cn } from "@/lib/utils"

export default function PartsPage() {
  // Sample data for auto parts
  const parts = [
    {
      id: 1,
      name: "Premium Ceramic Brake Pads",
      category: "Brakes",
      price: 49.99,
      originalPrice: 69.99,
      rating: 4.8,
      reviews: 124,
      distance: 0.8,
      inStock: true,
      image: "/images/brakepad.png?height=200&width=200",
      brand: "StopTech",
      compatibility: ["Toyota Camry", "Honda Accord", "Nissan Altima"],
    },
    {
      id: 2,
      name: "High-Performance Air Filter",
      category: "Air Intake",
      price: 29.99,
      originalPrice: 39.99,
      rating: 4.5,
      reviews: 86,
      distance: 1.2,
      inStock: true,
      image: "/images/AirFilter.png?height=200&width=200",
      brand: "K&N",
      compatibility: ["Ford F-150", "Chevrolet Silverado", "RAM 1500"],
    },
    {
      id: 3,
      name: "Synthetic Motor Oil 5W-30",
      category: "Fluids",
      price: 32.99,
      originalPrice: 42.99,
      rating: 4.9,
      reviews: 210,
      distance: 0.5,
      inStock: true,
      image: "/images/SyntheticMotor.png?height=200&width=200",
      brand: "Mobil 1",
      compatibility: ["All Vehicles"],
    },
    {
      id: 4,
      name: "Alternator - Remanufactured",
      category: "Electrical",
      price: 129.99,
      originalPrice: 169.99,
      rating: 4.3,
      reviews: 58,
      distance: 2.1,
      inStock: true,
      image: "/images/Alternator.png?height=200&width=200",
      brand: "Bosch",
      compatibility: ["Honda Civic", "Toyota Corolla", "Nissan Sentra"],
    },
    {
      id: 5,
      name: "Spark Plugs - Iridium",
      category: "Ignition",
      price: 8.99,
      originalPrice: 12.99,
      rating: 4.7,
      reviews: 143,
      distance: 1.5,
      inStock: false,
      image: "/images/SparkPlug.png?height=200&width=200",
      brand: "Bosch",
      compatibility: ["Ford Mustang", "Chevrolet Camaro", "Dodge Challenger"],
    },
    {
      id: 6,
      name: "Shock Absorber - Front",
      category: "Suspension",
      price: 89.99,
      originalPrice: 109.99,
      rating: 4.6,
      reviews: 72,
      distance: 3.2,
      inStock: true,
      image: "/images/ShockAbs.png?height=200&width=200",
      brand: "Monroe",
      compatibility: ["Subaru Outback", "Toyota RAV4", "Honda CR-V"],
    },
    {
      id: 7,
      name: "Oxygen Sensor",
      category: "Sensors",
      price: 59.99,
      originalPrice: 79.99,
      rating: 4.4,
      reviews: 91,
      distance: 1.8,
      inStock: true,
      image: "/images/O2.png?height=200&width=200",
      brand: "Denso",
      compatibility: ["Mazda 3", "Hyundai Elantra", "Kia Forte"],
    },
    {
      id: 8,
      name: "Radiator - Aluminum",
      category: "Cooling",
      price: 119.99,
      originalPrice: 149.99,
      rating: 4.5,
      reviews: 67,
      distance: 2.5,
      inStock: true,
      image: "/images/Radiator.png?height=200&width=200",
      brand: "Mishimoto",
      compatibility: ["Jeep Wrangler", "Ford Bronco", "Toyota 4Runner"],
    },
  ]

  // Sample categories for filters
  const categories = ["Brakes", "Air Intake", "Fluids", "Electrical", "Ignition", "Suspension", "Sensors", "Cooling"]

  // Sample brands for filters
  const brands = ["StopTech", "K&N", "Mobil 1", "Bosch", "NGK", "Monroe", "Denso", "Mishimoto"]

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

                {/* Category Filter */}
                <div className="mb-6">
                  <h3 className="font-medium mb-2 flex items-center justify-between">
                    Categories
                    <ChevronDown className="h-4 w-4" />
                  </h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <div key={category} className="flex items-center space-x-2">
                        <Checkbox id={`category-${category}`} />
                        <Label htmlFor={`category-${category}`} className="text-sm font-normal">
                          {category}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Brand Filter */}
                <div className="mb-6">
                  <h3 className="font-medium mb-2 flex items-center justify-between">
                    Brands
                    <ChevronDown className="h-4 w-4" />
                  </h3>
                  <div className="space-y-2">
                    {brands.map((brand) => (
                      <div key={brand} className="flex items-center space-x-2">
                        <Checkbox id={`brand-${brand}`} />
                        <Label htmlFor={`brand-${brand}`} className="text-sm font-normal">
                          {brand}
                        </Label>
                      </div>
                    ))}
                  </div>
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
                      <p className="text-muted-foreground">Showing 8 results for "2023 Toyota Camry LE"</p>
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

                  {/* Active Filters */}
                  <div className="mb-4 flex flex-wrap gap-2">
                    <Badge variant="secondary" className="flex items-center gap-1">
                      Category: Brakes
                      <X className="h-3 w-3 cursor-pointer" />
                    </Badge>
                    <Badge variant="secondary" className="flex items-center gap-1">
                      In Stock Only
                      <X className="h-3 w-3 cursor-pointer" />
                    </Badge>
                    <Badge variant="secondary" className="flex items-center gap-1">
                      Within 5 miles
                      <X className="h-3 w-3 cursor-pointer" />
                    </Badge>
                  </div>

                  {/* Parts Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {parts.map((part) => (
                      <div
                        key={part.id}
                        className="group relative rounded-lg border bg-card overflow-hidden transition-all hover:shadow-md"
                      >
                        <div className="aspect-square relative overflow-hidden bg-muted">
                          <Image
                            src={part.image || "/placeholder.svg"}
                            alt={part.name}
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
                          <div className="mb-2 flex items-center justify-between">
                            <Badge variant="outline">{part.category}</Badge>
                            <div className="flex items-center gap-1 text-sm">
                              <MapPin className="h-3 w-3 text-primary" />
                              <span>{part.distance} miles</span>
                            </div>
                          </div>
                          <h3 className="font-medium line-clamp-2 mb-1 group-hover:text-primary">
                            <Link href={`/find-parts/${part.id}`}>{part.name}</Link>
                          </h3>
                          <p className="text-sm text-muted-foreground mb-2">{part.brand}</p>
                          <div className="flex items-center gap-1 mb-3">
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={cn(
                                    "h-3 w-3",
                                    i < Math.floor(part.rating) ? "fill-primary text-primary" : "text-muted-foreground",
                                  )}
                                />
                              ))}
                            </div>
                            <span className="text-xs text-muted-foreground">({part.reviews})</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <span className="font-bold text-lg">${part.price.toFixed(2)}</span>
                              {part.originalPrice > part.price && (
                                <span className="text-sm text-muted-foreground line-through">
                                  ${part.originalPrice.toFixed(2)}
                                </span>
                              )}
                            </div>
                            <div className="flex items-center gap-1">
                              <span
                                className={cn(
                                  "inline-flex h-2 w-2 rounded-full",
                                  part.inStock ? "bg-green-500" : "bg-red-500",
                                )}
                              ></span>
                              <span className="text-xs font-medium">{part.inStock ? "In Stock" : "Out of Stock"}</span>
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
  )
}
