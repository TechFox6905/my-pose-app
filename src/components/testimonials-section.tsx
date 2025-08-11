"use client"

import { motion } from "framer-motion"
import { AnimatedTestimonialCard } from "@/src/components/ui/animated-testimonial-card"

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container px-4 md:px-6">
        <motion.div
          className="text-center space-y-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">Trusted by Industry Leaders</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">See what our customers are saying about PoseAI</p>
        </motion.div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <AnimatedTestimonialCard
            quote="PoseAI transformed our fitness app. The real-time feedback has increased user engagement by 300% and our retention rates have never been better."
            name="Sarah Mitchell"
            title="CTO, FitTech Solutions"
            initials="SM"
            index={0}
          />
          <AnimatedTestimonialCard
            quote="The accuracy and speed of pose detection is incredible. We've integrated it into our sports training platform and coaches love the detailed analytics."
            name="Michael Johnson"
            title="Founder, SportsTech Pro"
            initials="MJ"
            index={1}
          />
          <AnimatedTestimonialCard
            quote="Our patients can now do physical therapy from home with confidence. The pose tracking ensures they're doing exercises correctly and safely."
            name="Dr. Rachel Chen"
            title="Director, RehabTech Clinic"
            initials="DR"
            index={2}
          />
        </div>
      </div>
    </section>
  )
}
