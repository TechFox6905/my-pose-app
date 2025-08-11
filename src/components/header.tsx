"use client"

import { Activity } from "lucide-react"
import Link from "next/link"
import { Button } from "@/src/components/ui/button"
import dynamic from "next/dynamic"
import React from "react"

// Dynamically import Clerk components to handle missing keys
const SignInButton = dynamic(() => import("@clerk/nextjs").then((mod) => ({ default: mod.SignInButton })), {
  ssr: false,
  loading: () => (
    <Button variant="ghost" size="sm" className="hidden md:inline-flex">
      Sign In
    </Button>
  ),
})

const SignUpButton = dynamic(() => import("@clerk/nextjs").then((mod) => ({ default: mod.SignUpButton })), { ssr: false })
const SignedIn = dynamic(() => import("@clerk/nextjs").then((mod) => ({ default: mod.SignedIn })), { ssr: false })
const SignedOut = dynamic(() => import("@clerk/nextjs").then((mod) => ({ default: mod.SignedOut })), { ssr: false })
const UserButton = dynamic(() => import("@clerk/nextjs").then((mod) => ({ default: mod.UserButton })), { ssr: false })



export function Header() {
  // Check if Clerk is configured - use a consistent approach
  const isClerkConfigured = !!process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
  return (
    
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center space-x-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-green-500">
            <Activity className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-bold text-gray-900">PoseAI</span>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="#features" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">
            Features
          </Link>
          <Link href="#use-cases" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">
            Use Cases
          </Link>
          <Link href="#demo" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">
            Demo
          </Link>
          <Link
            href="#testimonials"
            className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
          >
            Testimonials
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          {isClerkConfigured ? (
            <>
              <SignedOut>
                <SignInButton mode="redirect" forceRedirectUrl="/sign-in">
                  <Button variant="ghost" size="sm" className="hidden md:inline-flex">
                    Sign In
                  </Button>
                </SignInButton>
              </SignedOut>
              <SignedIn>
                <UserButton afterSignOutUrl="/" />
              </SignedIn>
              <SignedOut>
                <SignUpButton mode="redirect" forceRedirectUrl="/sign-up">
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600"
                  >
                    Get Started
                  </Button>
                </SignUpButton>
              </SignedOut>
              <SignedIn>
                <Button
                  size="sm"
                  className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600"
                >
                  Dashboard
                </Button>
              </SignedIn>
            </>
          ) : (
            <>
              <Link href="/sign-in">
                <Button variant="ghost" size="sm" className="hidden md:inline-flex">
                  Sign In
                </Button>
              </Link>
              <Link href="/sign-up">
                <Button
                  size="sm"
                  className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600"
                >
                  Get Started
                </Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  )
}
