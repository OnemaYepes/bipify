import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MapPin, ArrowLeft, User, Building2, Car, Mail, Lock, Eye, PersonStanding } from "lucide-react"

export const metadata: Metadata = {
  title: "Sign Up | Bipify",
  description: "Create an account to find auto parts near you with our interactive map and marketplace.",
}

export default function SignUpPage() {
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
        </div>
      </header>

      <main className="flex-1">
        <div className="container flex items-center justify-center px-4 py-10 md:px-6 md:py-12">
          <div className="grid w-full max-w-6xl mx-auto gap-6 md:grid-cols-2 lg:gap-12">
            {/* Left side - Form */}
            <div className="flex flex-col justify-center space-y-6">
              <div className="space-y-2">
                <Link
                  href="/"
                  className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary"
                >
                  <ArrowLeft className="mr-1 h-4 w-4" />
                  Back to home
                </Link>
                <h1 className="text-3xl font-bold tracking-tight">Create your account</h1>
                <p className="text-muted-foreground">
                  Join thousands of users finding the right auto parts at the right price.
                </p>
              </div>

              <Tabs defaultValue="personal" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-6">
                  <TabsTrigger value="personal" className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span>Personal</span>
                  </TabsTrigger>
                  <TabsTrigger value="business" className="flex items-center gap-2">
                    <Building2 className="h-4 w-4" />
                    <span>Business</span>
                  </TabsTrigger>
                </TabsList>

                {/* Personal form */}
                <TabsContent value="personal" className="space-y-6">
                  <form className="space-y-6">
                    <div className="grid gap-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="first-name">First name</Label>
                          <Input id="first-name" name="firstName" placeholder="John" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="last-name">Last name</Label>
                          <Input id="last-name" name="lastName" placeholder="Doe" required />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="personal-email">Email</Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                          <Input
                            id="personal-email"
                            name="email"
                            type="email"
                            placeholder="you@example.com"
                            className="pl-9"
                            required
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="username">Username</Label>
                        <div className="relative">
                          <PersonStanding className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                          <Input
                            id="username"
                            name="username"
                            type="text"
                            placeholder="JohnDoe123"
                            className="pl-9"
                            required
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="personal-password">Password</Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                          <Input
                            id="personal-password"
                            name="password"
                            type="password"
                            className="pl-9"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox id="terms" name="terms" required />
                      <Label htmlFor="terms" className="text-sm font-normal">
                        I agree to the{" "}
                        <Link href="#" className="text-primary hover:underline">
                          Terms of Service
                        </Link>{" "}
                        and{" "}
                        <Link href="#" className="text-primary hover:underline">
                          Privacy Policy
                        </Link>
                      </Label>
                    </div>

                    <Button type="submit" className="w-full">
                      Create Account
                    </Button>

                    <div className="text-center text-sm">
                      Already have an account?{" "}
                      <Link href="/sign-in" className="text-primary hover:underline">
                        Sign in
                      </Link>
                    </div>
                  </form>
                </TabsContent>

                {/* Business form */}
                <TabsContent value="business" className="space-y-6">
                  <form className="space-y-6">
                    <div className="grid gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="business-name">Business name</Label>
                        <Input id="business-name" name="businessName" placeholder="Auto Parts Shop" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="business-nit">NIT</Label>
                        <Input id="business-nit" name="nit" placeholder="NIT code" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="business-email">Business email</Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                          <Input
                            id="business-email"
                            name="businessEmail"
                            type="email"
                            placeholder="business@example.com"
                            className="pl-9"
                            required
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="business-password">Password</Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                          <Input
                            id="business-password"
                            name="businessPassword"
                            type="password"
                            className="pl-9"
                            required
                          />
                          <Button
                            variant="ghost"
                            size="icon"
                            type="button"
                            className="absolute right-0 top-0 h-9 w-9"
                          >
                            <Eye className="h-4 w-4" />
                            <span className="sr-only">Toggle password visibility</span>
                          </Button>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox id="business-terms" name="businessTerms" required />
                      <Label htmlFor="business-terms" className="text-sm font-normal">
                        I agree to the{" "}
                        <Link href="#" className="text-primary hover:underline">
                          Terms of Service
                        </Link>{" "}
                        and{" "}
                        <Link href="#" className="text-primary hover:underline">
                          Privacy Policy
                        </Link>
                      </Label>
                    </div>

                    <Button type="submit" className="w-full">
                      Create Business Account
                    </Button>

                    <div className="text-center text-sm">
                      Already have an account?{" "}
                      <Link href="/sign-in" className="text-primary hover:underline">
                        Sign in
                      </Link>
                    </div>
                  </form>
                </TabsContent>
              </Tabs>
            </div>

            {/* Right side - Image and benefits */}
            <div className="hidden md:flex flex-col justify-between rounded-lg border bg-muted p-8">
              {/* (Beneficios - sin cambios) */}
              <div className="space-y-6">
                <div className="flex items-center gap-2 font-bold text-xl">
                  <MapPin className="h-6 w-6 text-primary" />
                  <span>Bipify</span>
                </div>
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold">Find the right parts, right now</h2>
                  <p className="text-muted-foreground">
                    Join thousands of users who find auto parts near them with our interactive map and marketplace.
                  </p>
                </div>
                {/* Right side - Image and benefits */}
                <div className="space-y-4">
                  <div className="flex items-start gap-2">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-3 w-3"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-medium">Find parts near you</h3>
                      <p className="text-sm text-muted-foreground">
                        Our interactive map shows you exactly where to find the parts you need.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-3 w-3"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-medium">Compare prices</h3>
                      <p className="text-sm text-muted-foreground">
                        Compare prices across multiple vendors to get the best deal on the parts you need.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-3 w-3"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-medium">Save your vehicles</h3>
                      <p className="text-sm text-muted-foreground">
                        Save your vehicles to quickly find compatible parts whenever you need them.
                      </p>
                    </div>
                  </div>
                </div>
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
