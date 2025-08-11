"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/src/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/src/components/ui/avatar"
import { Star } from "lucide-react"

interface AnimatedTestimonialCardProps {
  quote: string
  name: string
  title: string
  initials: string
  index: number
}

export function AnimatedTestimonialCard({ quote, name, title, initials, index }: AnimatedTestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      <Card className="border-0 shadow-sm hover:shadow-md transition-all duration-300 h-full">
        <CardContent className="p-6">
          <motion.div
            className="flex items-center space-x-1 mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
            viewport={{ once: true }}
          >
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2, delay: index * 0.1 + 0.3 + i * 0.05 }}
                viewport={{ once: true }}
              >
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              </motion.div>
            ))}
          </motion.div>
          <motion.p
            className="text-gray-700 mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
            viewport={{ once: true }}
          >
            {quote}
          </motion.p>
          <motion.div
            className="flex items-center space-x-3"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 + 0.5 }}
            viewport={{ once: true }}
          >
            <Avatar>
              <AvatarImage src="/placeholder-user.jpg" />
              <AvatarFallback>{initials}</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-semibold text-gray-900">{name}</p>
              <p className="text-sm text-gray-600">{title}</p>
            </div>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
