"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/src/components/ui/card"
import { Badge } from "@/src/components/ui/badge"
import Image from "next/image"

interface AnimatedDemoCardProps {
  imageSrc: string
  imageAlt: string
  badgeText: string
  badgeColor: string
  title: string
  description: string
  index: number
}

export function AnimatedDemoCard({
  imageSrc,
  imageAlt,
  badgeText,
  badgeColor,
  title,
  description,
  index,
}: AnimatedDemoCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
    >
      <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
        <CardContent className="p-0">
          <div className="relative overflow-hidden">
            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
              <Image
                src={imageSrc || "/placeholder.svg"}
                alt={imageAlt}
                width={300}
                height={200}
                className="w-full object-cover"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
              viewport={{ once: true }}
            >
              <Badge className={`absolute top-3 left-3 ${badgeColor} text-white`}>{badgeText}</Badge>
            </motion.div>
          </div>
          <motion.div
            className="p-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: index * 0.2 + 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
            <p className="text-sm text-gray-600">{description}</p>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
