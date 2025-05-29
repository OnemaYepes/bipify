"use client"

import { useState, use } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  MapPin,
  Phone,
  Navigation,
  Search,
  Grid,
  List,
  Heart,
  ShoppingCart,
  Menu,
  ChevronRight,
  ArrowLeft,
  MessageCircle,
} from "lucide-react"
import { cn } from "@/lib/utils"
import useSWR from "swr";

const WORKSHOP_API_URL = '/api/workshops';
const PRODUCTS_API_URL = "/api/products";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function BusinessPage({ params }: { params: { id: string } }) {
  // Unwrap the params promise
  const unwrappedParams = use(params)
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const { data, error, isLoading } = useSWR(WORKSHOP_API_URL, fetcher);

  if (error) return <div>Failed to load workshop: {error.message}</div>;
  if (isLoading) return <div>Loading workshop and products...</div>;

  // Sample business data
  const business = {
    id: data.id, // Fixed line
    name: data.name,
    address: data.address,
    email: "store123@autozone.com",
    logo: "/images/autozone.png?height=100&width=100",
  }

  // Sample products from this business
  const products = [
    {
      id: 1,
      name: "Premium Ceramic Brake Pads",
      category: "Brakes",
      price: 49.99,
      originalPrice: 69.99,
      rating: 4.8,
      reviews: 124,
      inStock: true,
      image: "/images/brakepad.png?height=200&width=200",
      brand: "StopTech",
      condition: "New",
    },
    {
      id: 2,
      name: "High-Performance Air Filter",
      category: "Air Intake",
      price: 29.99,
      originalPrice: 39.99,
      rating: 4.5,
      reviews: 86,
      inStock: true,
      image: "/images/AirFilter.png?height=200&width=200",
      brand: "K&N",
      condition: "New",
    },
    {
      id: 3,
      name: "Synthetic Motor Oil 5W-30",
      category: "Fluids",
      price: 32.99,
      originalPrice: 42.99,
      rating: 4.9,
      reviews: 210,
      inStock: true,
      image: "/images/SyntheticMotor.png?height=200&width=200",
      brand: "Mobil 1",
      condition: "New",
    },
    {
      id: 4,
      name: "Alternator - Remanufactured",
      category: "Electrical",
      price: 129.99,
      originalPrice: 169.99,
      rating: 4.3,
      reviews: 58,
      inStock: true,
      image: "/images/Alternator.png?height=200&width=200",
      brand: "Bosch",
      condition: "Remanufactured",
    },
    {
      id: 5,
      name: "Spark Plugs - Iridium",
      category: "Ignition",
      price: 8.99,
      originalPrice: 12.99,
      rating: 4.7,
      reviews: 143,
      inStock: false,
      image: "/images/SparkPlug.png?height=200&width=200",
      brand: "NGK",
      condition: "New",
    },
    {
      id: 6,
      name: "Shock Absorber - Front",
      category: "Suspension",
      price: 89.99,
      originalPrice: 109.99,
      rating: 4.6,
      reviews: 72,
      inStock: true,
      image: "/images/ShockAbs.png?height=200&width=200",
      brand: "Monroe",
      condition: "New",
    },
  ]


  const categories = ["all", "Brakes", "Air Intake", "Fluids", "Electrical", "Ignition", "Suspension"]

  const filteredProducts =
    selectedCategory === "all" ? products : products.filter((p) => p.category === selectedCategory)

  const getCurrentStatus = () => {
    const now = new Date()
    const currentHour = now.getHours()

    // Simplified logic - in real app, you'd parse the hours properly
    if (currentHour >= 8 && currentHour < 21) {
      return { isOpen: true, text: "Open now" }
    } else {
      return { isOpen: false, text: "Closed" }
    }
  }

  const status = getCurrentStatus()

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
          {/* Breadcrumb */}
          <nav className="mb-4 flex items-center text-sm text-muted-foreground">
            <Link href="/parts" className="flex items-center hover:text-foreground">
              <ArrowLeft className="mr-1 h-4 w-4" />
              Back to Search
            </Link>
            <ChevronRight className="mx-2 h-4 w-4" />
            <Link href="#" className="hover:text-foreground">
              Businesses
            </Link>
            <ChevronRight className="mx-2 h-4 w-4" />
            <span className="text-foreground">{business.name}</span>
          </nav>

          {/* Business Header */}
          <div className="mb-8 rounded-lg border bg-card overflow-hidden">
            {/* Business Info */}
            <div className="p-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="h-20 w-20 rounded-lg border bg-background overflow-hidden">
                    <Image
                      src={business.logo || "/placeholder.svg"}
                      alt={`${business.name} logo`}
                      width={80}
                      height={80}
                      className="object-contain p-2"
                    />
                  </div>
                </div>

                <div className="flex-1 space-y-4">
                  <div>
                    <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
                      <h1 className="text-3xl font-bold">{business.name}</h1>
                    </div>
                    <div className="flex items-center gap-4 mb-2">
                      <div className="flex items-center gap-1">
                        <div
                          className={cn(
                            "inline-flex h-2 w-2 rounded-full",
                            status.isOpen ? "bg-green-500" : "bg-red-500",
                          )}
                        ></div>
                        <span className={cn("text-sm font-medium", status.isOpen ? "text-green-600" : "text-red-600")}>
                          {status.text}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-muted-foreground mb-4">
                      <MapPin className="h-4 w-4" />
                      <span>{business.address}</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button className="flex-1">
                      <MessageCircle className="mr-2 h-4 w-4" />
                      Contact Business
                    </Button>
                    <Button variant="outline" className="flex-1">
                      <Navigation className="mr-2 h-4 w-4" />
                      Get Directions
                    </Button>
                    <Button variant="outline" className="flex-1">
                      <Phone className="mr-2 h-4 w-4" />
                      Call Now
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Products Section */}
              <div>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                  <div>
                    <h2 className="text-2xl font-bold">Available Parts</h2>
                    <p className="text-muted-foreground">
                      Showing {filteredProducts.length} of {products.length} parts
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="relative">
                      <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input placeholder="Search parts..." className="pl-9 w-64" />
                    </div>
                    <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                      <SelectTrigger className="w-40">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map((category) => (
                          <SelectItem key={category} value={category}>
                            {category === "all" ? "All Categories" : category}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <div className="flex border rounded-md">
                      <Button
                        variant={viewMode === "grid" ? "default" : "ghost"}
                        size="sm"
                        onClick={() => setViewMode("grid")}
                        className="rounded-r-none"
                      >
                        <Grid className="h-4 w-4" />
                      </Button>
                      <Button
                        variant={viewMode === "list" ? "default" : "ghost"}
                        size="sm"
                        onClick={() => setViewMode("list")}
                        className="rounded-l-none"
                      >
                        <List className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Products Grid/List */}
                {viewMode === "grid" ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {filteredProducts.map((product) => (
                      <div
                        key={product.id}
                        className="group relative rounded-lg border bg-card overflow-hidden transition-all hover:shadow-md"
                      >
                        <div className="aspect-square relative overflow-hidden bg-muted">
                          <Image
                            src={product.image || "/placeholder.svg"}
                            alt={product.name}
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
                            <Badge variant="outline">{product.category}</Badge>
                            <Badge variant={product.condition === "New" ? "default" : "secondary"}>
                              {product.condition}
                            </Badge>
                          </div>
                          <h3 className="font-medium line-clamp-2 mb-1 group-hover:text-primary">
                            <Link href={`/parts/${product.id}`}>{product.name}</Link>
                          </h3>
                          <p className="text-sm text-muted-foreground mb-2">{product.brand}</p>

                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-2">
                              <span className="font-bold text-lg">${product.price.toFixed(2)}</span>
                              {product.originalPrice > product.price && (
                                <span className="text-sm text-muted-foreground line-through">
                                  ${product.originalPrice.toFixed(2)}
                                </span>
                              )}
                            </div>
                            <div className="flex items-center gap-1">
                              <span
                                className={cn(
                                  "inline-flex h-2 w-2 rounded-full",
                                  product.inStock ? "bg-green-500" : "bg-red-500",
                                )}
                              ></span>
                              <span className="text-xs font-medium">
                                {product.inStock ? "In Stock" : "Out of Stock"}
                              </span>
                            </div>
                          </div>
                          <Button className="w-full" disabled={!product.inStock}>
                            <ShoppingCart className="mr-2 h-4 w-4" />
                            {product.inStock ? "Add to Cart" : "Out of Stock"}
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="space-y-4">
                    {filteredProducts.map((product) => (
                      <div key={product.id} className="rounded-lg border bg-card p-4">
                        <div className="flex gap-4">
                          <div className="w-24 h-24 rounded-md bg-muted overflow-hidden flex-shrink-0">
                            <Image
                              src={product.image || "/placeholder.svg"}
                              alt={product.name}
                              width={96}
                              height={96}
                              className="object-contain p-2"
                            />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-start justify-between mb-2">
                              <div>
                                <div className="flex items-center gap-2 mb-1">
                                  <Badge variant="outline">{product.category}</Badge>
                                  <Badge variant={product.condition === "New" ? "default" : "secondary"}>
                                    {product.condition}
                                  </Badge>
                                </div>
                                <h3 className="font-medium hover:text-primary">
                                  <Link href={`/parts/${product.id}`}>{product.name}</Link>
                                </h3>
                                <p className="text-sm text-muted-foreground">{product.brand}</p>
                              </div>
                              <Button variant="ghost" size="icon">
                                <Heart className="h-4 w-4" />
                                <span className="sr-only">Add to wishlist</span>
                              </Button>
                            </div>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <span className="font-bold text-lg">${product.price.toFixed(2)}</span>
                                {product.originalPrice > product.price && (
                                  <span className="text-sm text-muted-foreground line-through">
                                    ${product.originalPrice.toFixed(2)}
                                  </span>
                                )}
                                <div className="flex items-center gap-1">
                                  <span
                                    className={cn(
                                      "inline-flex h-2 w-2 rounded-full",
                                      product.inStock ? "bg-green-500" : "bg-red-500",
                                    )}
                                  ></span>
                                  <span className="text-xs font-medium">
                                    {product.inStock ? "In Stock" : "Out of Stock"}
                                  </span>
                                </div>
                              </div>
                              <Button disabled={!product.inStock}>
                                <ShoppingCart className="mr-2 h-4 w-4" />
                                {product.inStock ? "Add to Cart" : "Out of Stock"}
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
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
