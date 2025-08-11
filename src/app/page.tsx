"use client"
import { Button } from "@/src/components/ui/button"
import { Header } from "@/src/components/header"
import { HeroSection } from "@/src/components/hero-section"
import { DemoSection } from "@/src/components/demo-section"
import { FeaturesSection } from "@/src/components/features-section"
import { UseCasesSection } from "@/src/components/use-cases-section"
import { TestimonialsSection } from "@/src/components/testimonials-section"
import { CTASection } from "@/src/components/cta-section"
import { Footer } from "@/src/components/footer"

// Dynamically import Clerk components to handle missing keys
import dynamic from "next/dynamic"

const SignInButton = dynamic(() => import("@clerk/nextjs").then((mod) => ({ default: mod.SignInButton })), {
  ssr: false,
  loading: () => (
    <Button variant="ghost" size="sm" className="hidden md:inline-flex">
      Sign In
    </Button>
  ),
})

const SignedIn = dynamic(() => import("@clerk/nextjs").then((mod) => ({ default: mod.SignedIn })), { ssr: false })

const SignedOut = dynamic(() => import("@clerk/nextjs").then((mod) => ({ default: mod.SignedOut })), { ssr: false })

const UserButton = dynamic(() => import("@clerk/nextjs").then((mod) => ({ default: mod.UserButton })), { ssr: false })

// Check if Clerk is configured
const isClerkConfigured = typeof window !== "undefined" && process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <DemoSection />
        <FeaturesSection />
        <UseCasesSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
