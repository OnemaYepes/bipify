import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import {
  MapPin,
  Star,
  ChevronRight,
  Truck,
  ShoppingCart,
  Heart,
  Share2,
  Check,
  Menu,
  ArrowLeft,
  Car,
  Info,
  AlertCircle,
  Shield,
} from "lucide-react"
import { cn } from "@/lib/utils"

export default function PartDetailPage({ params }: { params: { id: string } }) {
  // Sample part data - in a real app, this would come from an API or database
  const part = {
    id: Number.parseInt(params.id),
    name: "Premium Ceramic Brake Pads",
    category: "Brakes",
    price: 49.99,
    originalPrice: 69.99,
    rating: 4.8,
    reviews: 124,
    distance: 0.8,
    inStock: true,
    image: "/images/brakepad.png?height=500&width=500",
    brand: "StopTech",
    compatibility: ["Toyota Camry", "Honda Accord", "Nissan Altima"],
    description:
      "Premium ceramic brake pads designed for superior stopping power and reduced brake dust. These pads offer excellent performance in all weather conditions and come with a lifetime warranty.",
    features: [
      "Ceramic formula for quiet braking",
      "Reduced brake dust for cleaner wheels",
      "Superior stopping power",
      "Extended pad life",
      "Includes installation hardware",
    ],
    specifications: {
      "Part Number": "ST-7891",
      Position: "Front",
      Material: "Ceramic",
      "Pad Thickness": "15mm",
      "Includes Hardware": "Yes",
      Warranty: "Lifetime",
    },
    locations: [
      {
        name: "AutoZone",
        distance: 0.8,
        price: 49.99,
        inStock: true,
        address: "123 Main St, Anytown, USA",
        phone: "(555) 123-4567",
        hours: "8:00 AM - 9:00 PM",
      },
      {
        name: "O'Reilly Auto Parts",
        distance: 1.2,
        price: 52.99,
        inStock: true,
        address: "456 Oak Ave, Anytown, USA",
        phone: "(555) 987-6543",
        hours: "7:30 AM - 8:00 PM",
      },
      {
        name: "NAPA Auto Parts",
        distance: 2.5,
        price: 54.99,
        inStock: false,
        address: "789 Elm St, Anytown, USA",
        phone: "(555) 456-7890",
        hours: "8:00 AM - 7:00 PM",
      },
    ],
    relatedParts: [
      {
        id: 101,
        name: "Brake Rotors - Front Pair",
        price: 79.99,
        image: "/images/brakepad.png?height=100&width=100",
      },
      {
        id: 102,
        name: "Brake Caliper - Remanufactured",
        price: 64.99,
        image: "/images/Caliper.png?height=100&width=100",
      },
      {
        id: 103,
        name: "Brake Hardware Kit",
        price: 12.99,
        image: "/images/brakepad.png?height=100&width=100",
      },
      {
        id: 104,
        name: "Brake Fluid - DOT 3",
        price: 8.99,
        image: "/images/brakefluid.png?height=100&width=100",
      },
    ],
  }

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
            <Link href="/find-parts" className="flex items-center hover:text-foreground">
              <ArrowLeft className="mr-1 h-4 w-4" />
              Back to Parts
            </Link>
            <ChevronRight className="mx-2 h-4 w-4" />
            <Link href="#" className="hover:text-foreground">
              Brakes
            </Link>
            <ChevronRight className="mx-2 h-4 w-4" />
            <span className="text-foreground">{part.name}</span>
          </nav>

          {/* Vehicle Compatibility */}
          <div className="mb-6 rounded-lg border bg-muted/50 p-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <Car className="h-5 w-5 text-primary" />
                <span className="font-medium">Selected Vehicle:</span>
                <span>2023 Toyota Camry LE</span>
                <Badge variant="outline" className="ml-2 bg-green-50 text-green-700 border-green-200">
                  <Check className="mr-1 h-3 w-3" /> Compatible
                </Badge>
              </div>
              <Button variant="outline" size="sm">
                Change Vehicle
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Product Image */}
            <div className="rounded-lg border bg-background p-4">
              <div className="aspect-square relative overflow-hidden bg-muted rounded-md">
                <Image src={part.image || "/placeholder.svg"} alt={part.name} fill className="object-contain p-8" />
              </div>
              <div className="mt-4 flex justify-center gap-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className={cn(
                      "h-16 w-16 cursor-pointer rounded-md border-2 bg-muted",
                      i === 1 ? "border-primary" : "border-transparent",
                    )}
                  >
                    <div className="relative h-full w-full">
                      <Image
                        src={part.image || "/placeholder.svg"}
                        alt={`${part.name} view ${i}`}
                        fill
                        className="object-contain p-2"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <div className="mb-2 flex items-center gap-2">
                  <Badge variant="outline">{part.category}</Badge>
                  <span className="text-sm text-muted-foreground">Part #: ST-7891</span>
                </div>
                <h1 className="text-3xl font-bold">{part.name}</h1>
                <div className="mt-2 flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={cn(
                            "h-4 w-4",
                            i < Math.floor(part.rating) ? "fill-primary text-primary" : "text-muted-foreground",
                          )}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">({part.reviews})</span>
                  </div>
                  <span className="text-sm font-medium text-primary">By {part.brand}</span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-3xl font-bold">${part.price.toFixed(2)}</span>
                  {part.originalPrice > part.price && (
                    <span className="text-lg text-muted-foreground line-through">${part.originalPrice.toFixed(2)}</span>
                  )}
                </div>
                <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                  Save ${(part.originalPrice - part.price).toFixed(2)}
                </Badge>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-green-100">
                    <Check className="h-3 w-3 text-green-600" />
                  </div>
                  <span className="text-sm">In Stock at 2 locations near you</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-100">
                    <Truck className="h-3 w-3 text-blue-600" />
                  </div>
                  <span className="text-sm">Free shipping on orders over $35</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-amber-100">
                    <Shield className="h-3 w-3 text-amber-600" />
                  </div>
                  <span className="text-sm">Lifetime warranty</span>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">Quantity:</span>
                  <select className="rounded-md border border-input bg-background px-3 py-1 text-sm">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button size="lg" className="flex-1">
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Add to Cart
                  </Button>
                  <Button size="lg" variant="outline" className="flex-1">
                    Buy Now
                  </Button>
                </div>

                <div className="flex gap-3">
                  <Button variant="ghost" size="sm" className="flex-1">
                    <Heart className="mr-2 h-4 w-4" />
                    Save
                  </Button>
                  <Button variant="ghost" size="sm" className="flex-1">
                    <Share2 className="mr-2 h-4 w-4" />
                    Share
                  </Button>
                </div>
              </div>

              <div className="rounded-lg border p-4">
                <h3 className="font-medium mb-2">Available at these locations:</h3>
                <div className="space-y-3">
                  {part.locations.map((location, i) => (
                    <div key={i} className="flex items-center justify-between border-b last:border-0 pb-2 last:pb-0">
                      <div>
                        <p className="font-medium">{location.name}</p>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <MapPin className="h-3 w-3" />
                          <span>{location.distance} miles</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">${location.price.toFixed(2)}</p>
                        <p className={cn("text-sm", location.inStock ? "text-green-600" : "text-red-600")}>
                          {location.inStock ? "In Stock" : "Out of Stock"}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" size="sm" className="w-full mt-3">
                  <MapPin className="mr-2 h-4 w-4" />
                  View on Map
                </Button>
              </div>
            </div>
          </div>

          {/* Product Details Tabs */}
          <Tabs defaultValue="description" className="mb-8">
            <TabsList className="w-full justify-start border-b rounded-none bg-transparent h-auto p-0">
              <TabsTrigger
                value="description"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary bg-transparent px-4 py-2 data-[state=active]:bg-transparent data-[state=active]:shadow-none"
              >
                Description
              </TabsTrigger>
              <TabsTrigger
                value="specifications"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary bg-transparent px-4 py-2 data-[state=active]:bg-transparent data-[state=active]:shadow-none"
              >
                Specifications
              </TabsTrigger>
              <TabsTrigger
                value="compatibility"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary bg-transparent px-4 py-2 data-[state=active]:bg-transparent data-[state=active]:shadow-none"
              >
                Compatibility
              </TabsTrigger>
              <TabsTrigger
                value="reviews"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary bg-transparent px-4 py-2 data-[state=active]:bg-transparent data-[state=active]:shadow-none"
              >
                Reviews ({part.reviews})
              </TabsTrigger>
            </TabsList>
            <div className="mt-6 rounded-lg border p-6">
              <TabsContent value="description" className="mt-0">
                <h2 className="text-xl font-bold mb-4">Product Description</h2>
                <p className="mb-4">{part.description}</p>
                <h3 className="text-lg font-medium mb-2">Features</h3>
                <ul className="list-disc pl-5 space-y-1 mb-4">
                  {part.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
                <div className="rounded-lg bg-muted p-4 flex items-start gap-3">
                  <Info className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-medium">Professional Installation Recommended</h4>
                    <p className="text-sm text-muted-foreground">
                      For optimal performance and safety, we recommend professional installation of brake components.
                    </p>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="specifications" className="mt-0">
                <h2 className="text-xl font-bold mb-4">Technical Specifications</h2>
                <div className="rounded-lg border overflow-hidden">
                  <table className="w-full">
                    <tbody>
                      {Object.entries(part.specifications).map(([key, value], i) => (
                        <tr key={i} className={i % 2 === 0 ? "bg-muted/50" : ""}>
                          <td className="px-4 py-3 font-medium">{key}</td>
                          <td className="px-4 py-3">{value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </TabsContent>
              <TabsContent value="compatibility" className="mt-0">
                <h2 className="text-xl font-bold mb-4">Vehicle Compatibility</h2>
                <div className="mb-4 flex items-center gap-2">
                  <AlertCircle className="h-5 w-5 text-amber-500" />
                  <p className="text-sm">
                    Always verify compatibility with your specific vehicle before purchasing. Contact us if you're
                    unsure.
                  </p>
                </div>
                <div className="rounded-lg border overflow-hidden">
                  <table className="w-full">
                    <thead className="bg-muted">
                      <tr>
                        <th className="px-4 py-3 text-left">Make</th>
                        <th className="px-4 py-3 text-left">Model</th>
                        <th className="px-4 py-3 text-left">Years</th>
                        <th className="px-4 py-3 text-left">Trim</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-4 py-3">Toyota</td>
                        <td className="px-4 py-3">Camry</td>
                        <td className="px-4 py-3">2018-2023</td>
                        <td className="px-4 py-3">All</td>
                      </tr>
                      <tr className="bg-muted/50">
                        <td className="px-4 py-3">Honda</td>
                        <td className="px-4 py-3">Accord</td>
                        <td className="px-4 py-3">2018-2023</td>
                        <td className="px-4 py-3">All</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3">Nissan</td>
                        <td className="px-4 py-3">Altima</td>
                        <td className="px-4 py-3">2019-2023</td>
                        <td className="px-4 py-3">All</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </TabsContent>
              <TabsContent value="reviews" className="mt-0">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <h2 className="text-xl font-bold mb-4">Customer Reviews</h2>
                    <div className="flex flex-col items-center p-4 border rounded-lg">
                      <div className="text-4xl font-bold">{part.rating}</div>
                      <div className="flex my-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={cn(
                              "h-5 w-5",
                              i < Math.floor(part.rating) ? "fill-primary text-primary" : "text-muted-foreground",
                            )}
                          />
                        ))}
                      </div>
                      <div className="text-sm text-muted-foreground">Based on {part.reviews} reviews</div>
                      <Button className="mt-4 w-full">Write a Review</Button>
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-medium">Top Reviews</h3>
                      <select className="rounded-md border border-input bg-background px-3 py-1 text-sm">
                        <option>Most Recent</option>
                        <option>Highest Rated</option>
                        <option>Lowest Rated</option>
                      </select>
                    </div>
                    <div className="space-y-4">
                      {[...Array(3)].map((_, i) => (
                        <div key={i} className="border rounded-lg p-4">
                          <div className="flex justify-between mb-2">
                            <div className="font-medium">John D.</div>
                            <div className="text-sm text-muted-foreground">2 weeks ago</div>
                          </div>
                          <div className="flex mb-2">
                            {[...Array(5)].map((_, j) => (
                              <Star
                                key={j}
                                className={cn("h-4 w-4", j < 5 ? "fill-primary text-primary" : "text-muted-foreground")}
                              />
                            ))}
                          </div>
                          <h4 className="font-medium mb-1">Great brake pads, easy installation</h4>
                          <p className="text-sm text-muted-foreground mb-2">
                            These brake pads are excellent quality and were easy to install. They're much quieter than
                            my old ones and the stopping power is noticeably better. Highly recommend!
                          </p>
                          <div className="flex items-center gap-2 text-sm">
                            <Button variant="ghost" size="sm" className="h-7 px-2">
                              Helpful (12)
                            </Button>
                            <span className="text-muted-foreground">|</span>
                            <Button variant="ghost" size="sm" className="h-7 px-2">
                              Report
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                    <Button variant="outline" className="w-full mt-4">
                      Load More Reviews
                    </Button>
                  </div>
                </div>
              </TabsContent>
            </div>
          </Tabs>

          {/* Related Products */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Frequently Bought Together</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {part.relatedParts.map((relatedPart) => (
                <div key={relatedPart.id} className="rounded-lg border bg-card overflow-hidden">
                  <div className="aspect-square relative overflow-hidden bg-muted">
                    <Image
                      src={relatedPart.image || "/placeholder.svg"}
                      alt={relatedPart.name}
                      fill
                      className="object-contain p-4"
                    />
                  </div>
                  <div className="p-3">
                    <h3 className="font-medium text-sm line-clamp-2 hover:text-primary">
                      <Link href={`/find-parts/${relatedPart.id}`}>{relatedPart.name}</Link>
                    </h3>
                    <div className="mt-2 font-bold">${relatedPart.price.toFixed(2)}</div>
                    <Button size="sm" variant="outline" className="w-full mt-2">
                      Add to Cart
                    </Button>
                  </div>
                </div>
              ))}
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