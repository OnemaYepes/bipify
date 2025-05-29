"use client"

import { useState, useRef, ChangeEvent } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  MapPin,
  Menu,
  Upload,
  Camera,
  ChevronRight,
  ChevronLeft,
  DollarSign,
  Car,
  Package,
  Info,
  AlertCircle,
  Check,
  X,
  Trash2,
  MapPinned,
  Eye,
  Truck,
  ShoppingCart,
  Star,
  Plus, // This is the correct import from lucide-react
  User, // This is the correct import from lucide-react
} from "lucide-react"

export default function SellPartPage() {
  const [step, setStep] = useState(1)
  const [images, setImages] = useState<string[]>([])
  const [previewMode, setPreviewMode] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const totalSteps = 5

  const nextStep = () => {
    if (step < totalSteps) {
      setStep(step + 1)
      window.scrollTo(0, 0)
    }
  }

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1)
      window.scrollTo(0, 0)
    }
  }

  const handlePreview = () => {
    setPreviewMode(!previewMode)
    window.scrollTo(0, 0)
  }

  const addImage = () => {
    if (images.length < 5 && fileInputRef.current) {
      fileInputRef.current.click()
    }
  }

  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files
    if (files && files.length > 0) {
      const file = files[0]
      if (file.type.startsWith("image/") && images.length < 5) {
        const reader = new FileReader()
        reader.onloadend = () => {
          setImages((prevImages) => [...prevImages, reader.result as string])
        }
        reader.readAsDataURL(file)
      } else if (!file.type.startsWith("image/")) {
        alert("Please upload an image file (e.g., JPG, PNG, GIF).")
      } else if (images.length >= 5) {
        alert("You can only upload a maximum of 5 images.")
      }
      event.target.value = '';
    }
  }

  const removeImage = (index: number) => {
    const newImages = [...images]
    newImages.splice(index, 1)
    setImages(newImages)
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
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Sell Your Auto Parts</h1>
            <p className="text-muted-foreground">List your auto parts for sale and connect with buyers in your area.</p>
          </div>

          {previewMode ? (
            <PreviewListing onBack={handlePreview} images={images} />
          ) : (
            <>
              {/* Progress Steps */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className="flex flex-col items-center"
                      onClick={() => i < step && setStep(i)}
                      style={{ cursor: i < step ? "pointer" : "default" }}
                    >
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          i === step
                            ? "bg-primary text-primary-foreground"
                            : i < step
                              ? "bg-primary/20 text-primary"
                              : "bg-muted text-muted-foreground"
                        }`}
                      >
                        {i < step ? <Check className="h-5 w-5" /> : i}
                      </div>
                      <span
                        className={`text-xs mt-1 hidden sm:block ${
                          i === step ? "text-primary font-medium" : "text-muted-foreground"
                        }`}
                      >
                        {i === 1
                          ? "Images"
                          : i === 2
                            ? "Details"
                            : i === 3
                              ? "Compatibility"
                            : i === 4
                                ? "Pricing"
                                : "Location"}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="w-full bg-muted h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-primary h-full transition-all duration-300"
                    style={{ width: `${((step - 1) / (totalSteps - 1)) * 100}%` }}
                  ></div>
                </div>
              </div>

              {/* Step Content */}
              <div className="max-w-3xl mx-auto">
                {step === 1 && (
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-xl font-bold mb-4">Upload Images</h2>
                      <p className="text-muted-foreground mb-6">
                        Add up to 5 clear photos of your part. Good photos increase your chances of selling quickly.
                      </p>

                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                        {images.map((image, index) => (
                          <div key={index} className="relative aspect-square rounded-lg border bg-muted">
                            <Image
                              src={image}
                              alt={`Part image ${index + 1}`}
                              fill
                              className="object-cover rounded-lg"
                            />
                            <Button
                              variant="destructive"
                              size="icon"
                              className="absolute top-2 right-2 h-8 w-8 rounded-full"
                              onClick={() => removeImage(index)}
                            >
                              <Trash2 className="h-4 w-4" />
                              <span className="sr-only">Remove image</span>
                            </Button>
                            {index === 0 && <Badge className="absolute bottom-2 left-2">Primary Photo</Badge>}
                          </div>
                        ))}
                        {images.length < 5 && (
                          <>
                            <input
                              type="file"
                              ref={fileInputRef}
                              onChange={handleImageUpload}
                              accept="image/*"
                              className="hidden"
                            />
                            <button
                              onClick={addImage}
                              className="aspect-square rounded-lg border-2 border-dashed flex flex-col items-center justify-center gap-2 hover:bg-muted/50 transition-colors"
                            >
                              <Upload className="h-8 w-8 text-muted-foreground" />
                              <span className="text-sm font-medium">Add Photo</span>
                            </button>
                          </>
                        )}
                      </div>

                      <div className="rounded-lg bg-muted p-4 flex items-start gap-3">
                        <Camera className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <h4 className="font-medium">Photo Tips</h4>
                          <ul className="text-sm text-muted-foreground list-disc pl-5 mt-1 space-y-1">
                            <li>Use good lighting to show the part clearly</li>
                            <li>Include multiple angles of the part</li>
                            <li>Show any damage or wear</li>
                            <li>Include packaging if available</li>
                            <li>Avoid cluttered backgrounds</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-xl font-bold mb-4">Part Details</h2>
                      <p className="text-muted-foreground mb-6">
                        Provide accurate details about your part to help buyers find it.
                      </p>

                      <div className="space-y-4">
                        <div className="grid grid-cols-1 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="title">Listing Title</Label>
                            <Input
                              id="title"
                              placeholder="e.g., 2018 Toyota Camry Brake Pads - New"
                              defaultValue="Premium Ceramic Brake Pads for Toyota Camry"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="category">Category</Label>
                            <Select defaultValue="brakes">
                              <SelectTrigger>
                                <SelectValue placeholder="Select category" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="brakes">Brakes</SelectItem>
                                <SelectItem value="engine">Engine Parts</SelectItem>
                                <SelectItem value="suspension">Suspension</SelectItem>
                                <SelectItem value="electrical">Electrical</SelectItem>
                                <SelectItem value="body">Body Parts</SelectItem>
                                <SelectItem value="interior">Interior</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="subcategory">Subcategory</Label>
                            <Select defaultValue="brake_pads">
                              <SelectTrigger>
                                <SelectValue placeholder="Select subcategory" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="brake_pads">Brake Pads</SelectItem>
                                <SelectItem value="brake_rotors">Brake Rotors</SelectItem>
                                <SelectItem value="brake_calipers">Brake Calipers</SelectItem>
                                <SelectItem value="brake_lines">Brake Lines</SelectItem>
                                <SelectItem value="brake_fluid">Brake Fluid</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="brand">Brand</Label>
                            <Input id="brand" placeholder="e.g., Bosch, ACDelco" defaultValue="StopTech" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="part-number">Part Number (Optional)</Label>
                            <Input id="part-number" placeholder="e.g., BP-7891" defaultValue="ST-7891" />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="condition">Condition</Label>
                          <RadioGroup defaultValue="new" className="flex flex-wrap gap-4">
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="new" id="new" />
                              <Label htmlFor="new" className="font-normal">
                                New
                              </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="like-new" id="like-new" />
                              <Label htmlFor="like-new" className="font-normal">
                                Like New
                              </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="good" id="good" />
                              <Label htmlFor="good" className="font-normal">
                                Good
                              </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="fair" id="fair" />
                              <Label htmlFor="fair" className="font-normal">
                                Fair
                              </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="poor" id="poor" />
                              <Label htmlFor="poor" className="font-normal">
                                Poor
                              </Label>
                            </div>
                          </RadioGroup>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="description">Description</Label>
                          <Textarea
                            id="description"
                            placeholder="Describe your part in detail, including any features, specifications, and condition notes."
                            className="min-h-[150px]"
                            defaultValue="Premium ceramic brake pads designed for superior stopping power and reduced brake dust. These pads offer excellent performance in all weather conditions and come with a lifetime warranty. Includes all necessary hardware for installation."
                          />
                        </div>

                        <div className="space-y-2">
                          <Label>Features</Label>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            <div className="flex items-center space-x-2">
                              <Checkbox id="feature-1" defaultChecked />
                              <Label htmlFor="feature-1" className="font-normal">
                                Includes Hardware
                              </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Checkbox id="feature-2" defaultChecked />
                              <Label htmlFor="feature-2" className="font-normal">
                                Warranty Included
                              </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Checkbox id="feature-3" defaultChecked />
                              <Label htmlFor="feature-3" className="font-normal">
                                OEM Replacement
                              </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Checkbox id="feature-4" />
                              <Label htmlFor="feature-4" className="font-normal">
                                Performance Upgrade
                              </Label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-xl font-bold mb-4">Vehicle Compatibility</h2>
                      <p className="text-muted-foreground mb-6">
                        Specify which vehicles your part is compatible with to help buyers find it.
                      </p>

                      <Tabs defaultValue="specific" className="mb-6">
                        <TabsList className="grid w-full grid-cols-2">
                          <TabsTrigger value="specific" className="flex items-center gap-1">
                            <Car className="h-4 w-4" />
                            <span>Specific Vehicles</span>
                          </TabsTrigger>
                          <TabsTrigger value="universal" className="flex items-center gap-1">
                            <Package className="h-4 w-4" />
                            <span>Universal Part</span>
                          </TabsTrigger>
                        </TabsList>
                        <TabsContent value="specific" className="mt-4 space-y-4">
                          <div className="rounded-lg border p-4 space-y-4">
                            <h3 className="font-medium">Compatible Vehicle #1</h3>
                            <div className="grid grid-cols-2 gap-4">
                              <div className="space-y-2">
                                <Label htmlFor="make-1">Make</Label>
                                <Select defaultValue="toyota">
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select make" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="toyota">Toyota</SelectItem>
                                    <SelectItem value="honda">Honda</SelectItem>
                                    <SelectItem value="ford">Ford</SelectItem>
                                    <SelectItem value="chevrolet">Chevrolet</SelectItem>
                                    <SelectItem value="nissan">Nissan</SelectItem>
                                  </SelectContent>
                                </Select>
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="model-1">Model</Label>
                                <Select defaultValue="camry">
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select model" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="camry">Camry</SelectItem>
                                    <SelectItem value="corolla">Corolla</SelectItem>
                                    <SelectItem value="rav4">RAV4</SelectItem>
                                    <SelectItem value="highlander">Highlander</SelectItem>
                                  </SelectContent>
                                </Select>
                              </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                              <div className="space-y-2">
                                <Label htmlFor="year-from-1">Year From</Label>
                                <Select defaultValue="2018">
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select year" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="2023">2023</SelectItem>
                                    <SelectItem value="2022">2022</SelectItem>
                                    <SelectItem value="2021">2021</SelectItem>
                                    <SelectItem value="2020">2020</SelectItem>
                                    <SelectItem value="2019">2019</SelectItem>
                                    <SelectItem value="2018">2018</SelectItem>
                                  </SelectContent>
                                </Select>
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="year-to-1">Year To</Label>
                                <Select defaultValue="2023">
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select year" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="2023">2023</SelectItem>
                                    <SelectItem value="2022">2022</SelectItem>
                                    <SelectItem value="2021">2021</SelectItem>
                                    <SelectItem value="2020">2020</SelectItem>
                                    <SelectItem value="2019">2019</SelectItem>
                                    <SelectItem value="2018">2018</SelectItem>
                                  </SelectContent>
                                </Select>
                              </div>
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="trim-1">Trim (Optional)</Label>
                              <Input id="trim-1" placeholder="e.g., LE, SE, XLE" defaultValue="All" />
                            </div>
                            <div className="flex justify-end">
                              <Button variant="ghost" size="sm" className="text-destructive">
                                <Trash2 className="h-4 w-4 mr-1" /> Remove
                              </Button>
                            </div>
                          </div>

                          <div className="rounded-lg border p-4 space-y-4">
                            <h3 className="font-medium">Compatible Vehicle #2</h3>
                            <div className="grid grid-cols-2 gap-4">
                              <div className="space-y-2">
                                <Label htmlFor="make-2">Make</Label>
                                <Select defaultValue="honda">
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select make" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="toyota">Toyota</SelectItem>
                                    <SelectItem value="honda">Honda</SelectItem>
                                    <SelectItem value="ford">Ford</SelectItem>
                                    <SelectItem value="chevrolet">Chevrolet</SelectItem>
                                    <SelectItem value="nissan">Nissan</SelectItem>
                                  </SelectContent>
                                </Select>
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="model-2">Model</Label>
                                <Select defaultValue="accord">
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select model" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="accord">Accord</SelectItem>
                                    <SelectItem value="civic">Civic</SelectItem>
                                    <SelectItem value="cr-v">CR-V</SelectItem>
                                    <SelectItem value="pilot">Pilot</SelectItem>
                                  </SelectContent>
                                </Select>
                              </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                              <div className="space-y-2">
                                <Label htmlFor="year-from-2">Year From</Label>
                                <Select defaultValue="2018">
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select year" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="2023">2023</SelectItem>
                                    <SelectItem value="2022">2022</SelectItem>
                                    <SelectItem value="2021">2021</SelectItem>
                                    <SelectItem value="2020">2020</SelectItem>
                                    <SelectItem value="2019">2019</SelectItem>
                                    <SelectItem value="2018">2018</SelectItem>
                                  </SelectContent>
                                </Select>
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="year-to-2">Year To</Label>
                                <Select defaultValue="2023">
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select year" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="2023">2023</SelectItem>
                                    <SelectItem value="2022">2022</SelectItem>
                                    <SelectItem value="2021">2021</SelectItem>
                                    <SelectItem value="2020">2020</SelectItem>
                                    <SelectItem value="2019">2019</SelectItem>
                                    <SelectItem value="2018">2018</SelectItem>
                                  </SelectContent>
                                </Select>
                              </div>
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="trim-2">Trim (Optional)</Label>
                              <Input id="trim-2" placeholder="e.g., LX, EX, Touring" defaultValue="All" />
                            </div>
                            <div className="flex justify-end">
                              <Button variant="ghost" size="sm" className="text-destructive">
                                <Trash2 className="h-4 w-4 mr-1" /> Remove
                              </Button>
                            </div>
                          </div>

                          <Button variant="outline" className="w-full">
                            <Plus className="h-4 w-4 mr-2" /> Add Another Vehicle
                          </Button>
                        </TabsContent>
                        <TabsContent value="universal" className="mt-4 space-y-4">
                          <div className="rounded-lg bg-muted p-4 flex items-start gap-3">
                            <Info className="h-5 w-5 text-primary mt-0.5" />
                            <div>
                              <h4 className="font-medium">Universal Part</h4>
                              <p className="text-sm text-muted-foreground">
                                Select this option if your part fits multiple vehicles or is a universal accessory.
                              </p>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="compatibility-notes">Compatibility Notes</Label>
                            <Textarea
                              id="compatibility-notes"
                              placeholder="Describe which vehicles or systems this part is compatible with..."
                              className="min-h-[100px]"
                            />
                          </div>
                        </TabsContent>
                      </Tabs>

                      <div className="rounded-lg bg-amber-50 border border-amber-200 p-4 flex items-start gap-3">
                        <AlertCircle className="h-5 w-5 text-amber-500 mt-0.5" />
                        <div>
                          <h4 className="font-medium text-amber-800">Compatibility Disclaimer</h4>
                          <p className="text-sm text-amber-700">
                            You are responsible for ensuring the accuracy of compatibility information. Incorrect
                            information may result in returns or negative reviews.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {step === 4 && (
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-xl font-bold mb-4">Pricing & Availability</h2>
                      <p className="text-muted-foreground mb-6">
                        Set your price and specify availability details for your listing.
                      </p>

                      <div className="space-y-6">
                        <div className="space-y-2">
                          <Label htmlFor="price">Price</Label>
                          <div className="relative">
                            <DollarSign className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input id="price" type="number" placeholder="0.00" className="pl-9" defaultValue="49.99" />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="original-price">Original Price (Optional)</Label>
                          <div className="relative">
                            <DollarSign className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input
                              id="original-price"
                              type="number"
                              placeholder="0.00"
                              className="pl-9"
                              defaultValue="69.99"
                            />
                          </div>
                          <p className="text-xs text-muted-foreground">
                            If you're offering a discount, enter the original price here.
                          </p>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="quantity">Quantity Available</Label>
                          <Input id="quantity" type="number" min="1" defaultValue="3" />
                        </div>

                        <div className="space-y-2">
                          <Label>Listing Duration</Label>
                          <RadioGroup defaultValue="30" className="flex flex-wrap gap-4">
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="7" id="7-days" />
                              <Label htmlFor="7-days" className="font-normal">
                                7 days
                              </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="14" id="14-days" />
                              <Label htmlFor="14-days" className="font-normal">
                                14 days
                              </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="30" id="30-days" />
                              <Label htmlFor="30-days" className="font-normal">
                                30 days
                              </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="60" id="60-days" />
                              <Label htmlFor="60-days" className="font-normal">
                                60 days
                              </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="90" id="90-days" />
                              <Label htmlFor="90-days" className="font-normal">
                                90 days
                              </Label>
                            </div>
                          </RadioGroup>
                        </div>

                        <div className="space-y-2">
                          <Label>Shipping Options</Label>
                          <div className="space-y-2">
                            <div className="flex items-center space-x-2">
                              <Checkbox id="local-pickup" defaultChecked />
                              <Label htmlFor="local-pickup" className="font-normal">
                                Local Pickup
                              </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Checkbox id="shipping" defaultChecked />
                              <Label htmlFor="shipping" className="font-normal">
                                Shipping
                              </Label>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="shipping-cost">Shipping Cost (Optional)</Label>
                          <div className="relative">
                            <DollarSign className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input
                              id="shipping-cost"
                              type="number"
                              placeholder="0.00"
                              className="pl-9"
                              defaultValue="5.99"
                            />
                          </div>
                          <p className="text-xs text-muted-foreground">
                            Leave blank if shipping cost varies or is calculated at checkout.
                          </p>
                        </div>

                        <div className="space-y-2">
                          <Label>Return Policy</Label>
                          <RadioGroup defaultValue="14" className="flex flex-col space-y-2">
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="no-returns" id="no-returns" />
                              <Label htmlFor="no-returns" className="font-normal">
                                No Returns
                              </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="7" id="7-day-returns" />
                              <Label htmlFor="7-day-returns" className="font-normal">
                                7-Day Returns
                              </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="14" id="14-day-returns" />
                              <Label htmlFor="14-day-returns" className="font-normal">
                                14-Day Returns
                              </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="30" id="30-day-returns" />
                              <Label htmlFor="30-day-returns" className="font-normal">
                                30-Day Returns
                              </Label>
                            </div>
                          </RadioGroup>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {step === 5 && (
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-xl font-bold mb-4">Location & Contact</h2>
                      <p className="text-muted-foreground mb-6">
                        Specify your location and contact preferences for potential buyers.
                      </p>

                      <div className="space-y-6">
                        <div className="space-y-2">
                          <Label htmlFor="location">Your Location</Label>
                          <div className="relative">
                            <MapPin className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input
                              id="location"
                              placeholder="Enter your city, state, or ZIP code"
                              className="pl-9"
                              defaultValue="Anytown, CA 90210"
                            />
                          </div>
                        </div>

                        <div className="rounded-lg border overflow-hidden">
                          <div className="aspect-[16/9] relative bg-muted">
                            <Image
                              src="/images/LandingMap.png?height=300&width=600"
                              alt="Map location"
                              fill
                              className="object-cover"
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="bg-background/80 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                                <Button>
                                  <MapPinned className="mr-2 h-4 w-4" />
                                  Set Exact Location
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <Label htmlFor="contact-preference">Contact Preference</Label>
                          </div>
                          <RadioGroup defaultValue="app" className="flex flex-col space-y-2">
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="app" id="app-messages" />
                              <Label htmlFor="app-messages" className="font-normal">
                                App Messages Only
                              </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="email" id="email" />
                              <Label htmlFor="email" className="font-normal">
                                Email
                              </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="phone" id="phone" />
                              <Label htmlFor="phone" className="font-normal">
                                Phone
                              </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="all" id="all" />
                              <Label htmlFor="all" className="font-normal">
                                All Contact Methods
                              </Label>
                            </div>
                          </RadioGroup>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number (Optional)</Label>
                          <Input id="phone" type="tel" placeholder="(555) 123-4567" />
                        </div>

                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <Checkbox id="hide-location" />
                            <Label htmlFor="hide-location" className="font-normal">
                              Hide exact location on map (show approximate area only)
                            </Label>
                          </div>
                        </div>

                        <div className="rounded-lg bg-muted p-4 flex items-start gap-3">
                          <Info className="h-5 w-5 text-primary mt-0.5" />
                          <div>
                            <h4 className="font-medium">Safety Tips</h4>
                            <ul className="text-sm text-muted-foreground list-disc pl-5 mt-1 space-y-1">
                              <li>Meet in public, well-lit places for transactions</li>
                              <li>Don't share personal financial information</li>
                              <li>Be cautious when sharing your phone number or address</li>
                              <li>Consider using the app's messaging system for communication</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-8">
                  <Button variant="outline" onClick={prevStep} disabled={step === 1}>
                    <ChevronLeft className="mr-2 h-4 w-4" />
                    Back
                  </Button>
                  <div className="space-x-2">
                    {step === totalSteps ? (
                      <>
                        <Button variant="outline" onClick={handlePreview}>
                          <Eye className="mr-2 h-4 w-4" />
                          Preview
                        </Button>
                        <Button>
                          <Check className="mr-2 h-4 w-4" />
                          Publish Listing
                        </Button>
                      </>
                    ) : (
                      <Button onClick={nextStep}>
                        Continue
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </>
          )}
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

function PreviewListing({ onBack, images }: { onBack: () => void; images: string[] }) {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Preview Listing</h2>
        <Button variant="outline" onClick={onBack}>
          <X className="mr-2 h-4 w-4" />
          Exit Preview
        </Button>
      </div>

      <div className="rounded-lg border bg-card overflow-hidden mb-8">
        <div className="p-6">
          <div className="mb-2 flex items-center gap-2">
            <Badge variant="outline">Brakes</Badge>
            <span className="text-sm text-muted-foreground">Part #: ST-7891</span>
          </div>
          <h1 className="text-3xl font-bold">Premium Ceramic Brake Pads for Toyota Camry</h1>
          <div className="mt-2 flex items-center gap-4">
            <span className="text-sm font-medium text-primary">By StopTech</span>
            <div className="flex items-center gap-1 text-sm">
              <MapPin className="h-3 w-3 text-muted-foreground" />
              <span className="text-muted-foreground">Anytown, CA</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 border-t">
          <div>
            <div className="aspect-square relative overflow-hidden bg-muted rounded-md">
              <Image src={images[0] || "/placeholder.svg"} alt="Part image" fill className="object-cover" />
            </div>
            <div className="mt-4 flex gap-2">
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`h-16 w-16 cursor-pointer rounded-md border-2 ${
                    index === 0 ? "border-primary" : "border-transparent"
                  } bg-muted`}
                >
                  <div className="relative h-full w-full">
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`Thumbnail ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="text-3xl font-bold">$49.99</span>
                <span className="text-lg text-muted-foreground line-through">$69.99</span>
              </div>
              <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Save $20.00</Badge>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-green-100">
                  <Check className="h-3 w-3 text-green-600" />
                </div>
                <span className="text-sm">In Stock - 3 available</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-100">
                  <MapPin className="h-3 w-3 text-blue-600" />
                </div>
                <span className="text-sm">Local Pickup Available</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-100">
                  <Truck className="h-3 w-3 text-blue-600" />
                </div>
                <span className="text-sm">Shipping Available ($5.99)</span>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <Button size="lg">
                <ShoppingCart className="mr-2 h-4 w-4" />
                Add to Cart
              </Button>
              <Button size="lg" variant="outline">
                Contact Seller
              </Button>
            </div>

            <div className="rounded-lg border p-4">
              <h3 className="font-medium mb-2">Seller Information</h3>
              <div className="flex items-center gap-3 mb-3">
                <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center">
                  <User className="h-6 w-6 text-muted-foreground" />
                </div>
                <div>
                  <p className="font-medium">John Doe</p>
                  <p className="text-sm text-muted-foreground">Member since Jan 2023</p>
                </div>
              </div>
              <div className="flex items-center gap-1 mb-3">
                <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                <span className="text-sm ml-1">(24 reviews)</span>
              </div>
              <Button variant="outline" size="sm" className="w-full">
                View Seller Profile
              </Button>
            </div>
          </div>
        </div>

        <div className="p-6 border-t">
          <h2 className="text-xl font-bold mb-4">Description</h2>
          <p className="mb-4">
            Premium ceramic brake pads designed for superior stopping power and reduced brake dust. These pads offer
            excellent performance in all weather conditions and come with a lifetime warranty. Includes all necessary
            hardware for installation.
          </p>
          <h3 className="text-lg font-medium mb-2">Features</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>Includes Hardware</li>
            <li>Warranty Included</li>
            <li>OEM Replacement</li>
          </ul>
        </div>

        <div className="p-6 border-t">
          <h2 className="text-xl font-bold mb-4">Vehicle Compatibility</h2>
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
              </tbody>
            </table>
          </div>
        </div>

        <div className="p-6 border-t">
          <h2 className="text-xl font-bold mb-4">Return Policy</h2>
          <p>14-Day Returns</p>
        </div>
      </div>

      <div className="flex justify-between mb-8">
        <Button variant="outline" onClick={onBack}>
          <ChevronLeft className="mr-2 h-4 w-4" />
          Edit Listing
        </Button>
        <Button>
          <Check className="mr-2 h-4 w-4" />
          Publish Listing
        </Button>
      </div>
    </div>
  )
}