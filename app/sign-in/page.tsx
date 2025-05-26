"use client";

import Link from "next/link";
import Image from "next/image";
// import type { Metadata } from "next"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { MapPin, ArrowLeft, Lock, Eye } from "lucide-react";
import { useState } from "react";
import { useRouter } from 'next/navigation'; // Import useRouter for redirection

//  Doesn't work with use-client annotation
//export const metadata: Metadata = {
//  title: "Sign In | AutoFinder",
//  description: "Sign in to your AutoFinder account to find auto parts near you.",
//}

const LOGIN_URL = '/api/login/'

export default function SignInPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter(); // Initialize useRouter

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault(); // Avoids page restart

    try {
      const response = await fetch(LOGIN_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        router.replace('/')
      } else {
        setError(data.message || 'Error logging in');
      }
    } catch (error) {
      setError('Server connection error');
    }
  };
  
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <header className="w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <MapPin className="h-6 w-6 text-primary" />
            <span>AutoFinder</span>
          </Link>
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
              <form onSubmit={handleSubmit} className="grid gap-4">
                <div className="space-y-2">
                  <Label htmlFor="username">Username</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                        id="username" // Changed id to username
                        type="text" // Changed type to text as usernames can contain letters, numbers, etc...
                        placeholder="Your username"
                        className="pl-9"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                      />
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
                    <Input
                      id="password"
                      type="password"
                      className="pl-9"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button variant="ghost" size="icon" className="absolute right-0 top-0 h-9 w-9">
                      <Eye className="h-4 w-4" />
                      <span className="sr-only">Toggle password visibility</span>
                    </Button>
                  </div>
                </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="remember" />
                <Label htmlFor="remember" className="text-sm font-normal">
                  Remember me for 30 days
                </Label>
              </div>

              <Button type="submit" className="w-full">Sign In</Button> {/* Cambia el tipo a submit */}
            </form>

            {error && <p className="text-red-500 text-sm">{error}</p>}
              

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t"></span>
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
                </div>
              </div>
            </div>
              <div className="grid grid-cols-2 gap-4">
                <Button variant="outline" className="w-full">
                  <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                    <path
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      fill="#EA4335"
                    />
                    <path d="M1 1h22v22H1z" fill="none" />
                  </svg>
                  Google
                </Button>
                <Button variant="outline" className="w-full">
                  <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16.365 1.43c0 1.14-.493 2.27-1.177 3.08-.744.9-1.99 1.57-2.987 1.57-.12 0-.23-.02-.3-.03-.01-.06-.04-.22-.04-.39 0-1.15.572-2.27 1.206-2.98.804-.94 2.142-1.64 3.248-1.68.03.13.05.28.05.43zm4.565 15.71c-.03.07-.463 1.58-1.518 3.12-.945 1.34-1.94 2.71-3.43 2.71-1.517 0-1.9-.88-3.63-.88-1.698 0-2.302.91-3.67.91-1.377 0-2.332-1.26-3.428-2.8-1.287-1.82-2.323-4.63-2.323-7.28 0-4.28 2.797-6.55 5.552-6.55 1.448 0 2.675.95 3.6.95.865 0 2.222-1.01 3.902-1.01.613 0 2.886.06 4.374 2.19-.13.09-2.383 1.37-2.383 4.19 0 3.26 2.854 4.42 2.955 4.45z" />
                  </svg>
                  Apple
                </Button>
              </div>

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
                  <span>AutoFinder</span>
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
                </div>
              </div>
              <div className="relative mt-6 aspect-video overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  width={500}
                  height={300}
                  alt="AutoFinder app interface"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t py-4">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} AutoFinder. All rights reserved.
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
