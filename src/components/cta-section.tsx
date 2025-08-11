"use client"

import { Button } from "@/src/components/ui/button"
import { ArrowRight } from "lucide-react"
import dynamic from "next/dynamic"

// Dynamically import Clerk components
const SignInButton = dynamic(() => import("@clerk/nextjs").then((mod) => ({ default: mod.SignInButton })), {
  ssr: false,
})
const SignedIn = dynamic(() => import("@clerk/nextjs").then((mod) => ({ default: mod.SignedIn })), { ssr: false })
const SignedOut = dynamic(() => import("@clerk/nextjs").then((mod) => ({ default: mod.SignedOut })), { ssr: false })

const isClerkConfigured = typeof window !== "undefined" && process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-white md:text-4xl">Ready to Get Started?</h2>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto">
              Join thousands of developers building the future of human-computer interaction
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {isClerkConfigured ? (
              <>
                <SignedOut>
                  <SignInButton mode="modal">
                    <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8">
                      Start Free Trial
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </SignInButton>
                </SignedOut>
                <SignedIn>
                  <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8">
                    Go to Dashboard
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </SignedIn>
              </>
            ) : (
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8">
                Start Free Trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            )}
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 px-8 bg-transparent"
            >
              Schedule Demo
            </Button>
          </div>
          <p className="text-sm text-blue-100">No credit card required • 14-day free trial • Cancel anytime</p>
        </div>
      </div>
    </section>
  )
}
