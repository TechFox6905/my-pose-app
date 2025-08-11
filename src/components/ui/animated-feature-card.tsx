"use client"

import { motion } from "framer-motion"
import { Card, CardHeader, CardTitle, CardDescription } from "@/src/components/ui/card"
import type { LucideIcon } from "lucide-react"

interface AnimatedFeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
  iconColor: string
  bgColor: string
  index: number
}

export function AnimatedFeatureCard({
  icon: Icon,
  title,
  description,
  iconColor,
  bgColor,
  index,
}: AnimatedFeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      <Card className="border-0 shadow-sm hover:shadow-md transition-shadow h-full">
        <CardHeader>
          <motion.div
            className={`w-12 h-12 rounded-lg ${bgColor} flex items-center justify-center mb-4`}
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Icon className={`h-6 w-6 ${iconColor}`} />
          </motion.div>
          <CardTitle className="text-xl">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
      </Card>
    </motion.div>
  )
}
