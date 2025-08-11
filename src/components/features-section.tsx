"use client"

import { motion } from "framer-motion"
import { Zap, Shield, Smartphone, Users, Activity } from "lucide-react"
import { AnimatedFeatureCard } from "@/src/components/ui/animated-feature-card"

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container px-4 md:px-6">
        <motion.div
          className="text-center space-y-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">Powerful Features</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to integrate pose estimation into your applications
          </p>
        </motion.div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <AnimatedFeatureCard
            icon={Zap}
            title="Real-time Processing"
            description="Process video streams at 60+ FPS with minimal latency for smooth, responsive applications."
            iconColor="text-blue-600"
            bgColor="bg-blue-100"
            index={0}
          />
          <AnimatedFeatureCard
            icon={Shield}
            title="High Accuracy"
            description="State-of-the-art AI models delivering 95%+ accuracy across diverse lighting and background conditions."
            iconColor="text-green-600"
            bgColor="bg-green-100"
            index={1}
          />
          <AnimatedFeatureCard
            icon={Smartphone}
            title="Cross-Platform"
            description="Works seamlessly on web browsers, mobile devices, and desktop applications with our unified API."
            iconColor="text-purple-600"
            bgColor="bg-purple-100"
            index={2}
          />
          <AnimatedFeatureCard
            icon={Users}
            title="Multi-Person Detection"
            description="Simultaneously track multiple people in the same frame with individual pose data for each person."
            iconColor="text-orange-600"
            bgColor="bg-orange-100"
            index={3}
          />
          <AnimatedFeatureCard
            icon={Activity}
            title="Custom Gestures"
            description="Train custom gesture recognition models for specific use cases and industry requirements."
            iconColor="text-red-600"
            bgColor="bg-red-100"
            index={4}
          />
          <AnimatedFeatureCard
            icon={Zap}
            title="Easy Integration"
            description="Simple REST API and SDKs for popular frameworks. Get started in minutes with comprehensive documentation."
            iconColor="text-teal-600"
            bgColor="bg-teal-100"
            index={5}
          />
        </div>
      </div>
    </section>
  )
}
