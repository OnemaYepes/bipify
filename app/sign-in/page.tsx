import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { MapPin, ArrowLeft, Mail, Lock, Eye } from "lucide-react"

export const metadata: Metadata = {
  title: "Sign In | Bipify",
  description: "Sign in to your Bipify account to find auto parts near you.",
}

export default function SignInPage() {
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
                <h1 className="text-3xl font-bold tracking-tight">Welcome back</h1>
                <p className="text-muted-foreground">
                  Sign in to your account to continue finding auto parts near you.
                </p>
              </div>

              <div className="grid gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input id="email" type="email" placeholder="you@example.com" className="pl-9" />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password">Password</Label>
                    <Link href="#" className="text-xs text-muted-foreground hover:text-primary">
                      Forgot password?
                    </Link>
                  </div>
                  <div className="relative">
                    <Lock className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input id="password" type="password" className="pl-9" />
                    <Button variant="ghost" size="icon" className="absolute right-0 top-0 h-9 w-9">
                      <Eye className="h-4 w-4" />
                      <span className="sr-only">Toggle password visibility</span>
                    </Button>
                  </div>
                </div>
              </div>

              <Button className="w-full">Sign In</Button>


              <div className="text-center text-sm">
                Don't have an account?{" "}
                <Link href="/sign-up" className="text-primary hover:underline">
                  Sign up
                </Link>
              </div>
            </div>

            {/* Right side - Image and benefits */}
            <div className="hidden md:flex flex-col justify-between rounded-lg border bg-muted p-8">
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
              <div className="relative mt-6 aspect-video overflow-hidden rounded-lg">
                <Image
                  src="/images/HeaderMap.png?height=300&width=500"
                  width={500}
                  height={300}
                  alt="Bipify app interface"
                  className="object-cover"
                />
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
