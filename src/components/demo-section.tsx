"use client"

import { motion } from "framer-motion"
import { AnimatedDemoCard } from "@/src/components/ui/animated-demo-card"

export function DemoSection() {
  return (
    <section id="demo" className="py-20 bg-gray-50">
      <div className="container px-4 md:px-6">
        <motion.div
          className="text-center space-y-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">See It In Action</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience the power of real-time pose estimation across different scenarios
          </p>
        </motion.div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <AnimatedDemoCard
            imageSrc="/fitness-pose-detection.png"
            imageAlt="Fitness tracking demo"
            badgeText="Fitness"
            badgeColor="bg-blue-500"
            title="Workout Form Analysis"
            description="Real-time feedback on exercise form and rep counting"
            index={0}
          />
          <AnimatedDemoCard
            imageSrc="/running-pose-analysis.png"
            imageAlt="Sports analysis demo"
            badgeText="Sports"
            badgeColor="bg-green-500"
            title="Athletic Performance"
            description="Analyze running gait, jumping technique, and movement patterns"
            index={1}
          />
          <AnimatedDemoCard
            imageSrc="/physical-therapy-pose-tracking.png"
            imageAlt="Rehabilitation demo"
            badgeText="Rehab"
            badgeColor="bg-purple-500"
            title="Physical Therapy"
            description="Monitor recovery progress and ensure proper movement execution"
            index={2}
          />
        </div>
      </div>
    </section>
  )
}
