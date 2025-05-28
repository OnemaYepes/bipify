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
              <Button type="submit" className="w-full">Sign In</Button> {/* Cambia el tipo a submit */}
            </form>

            {error && <p className="text-red-500 text-sm">{error}</p>}
              

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t"></span>
                </div>
              </div>
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
