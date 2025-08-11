"use client"

import { Heart, Trophy, Activity, CheckCircle } from "lucide-react"
import Image from "next/image"

export function UseCasesSection() {
  return (
    <section id="use-cases" className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">Transform Your Industry</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover how pose estimation is revolutionizing different sectors
          </p>
        </div>
        <div className="grid gap-12 lg:gap-16">
          {/* Fitness Use Case */}
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                  <Heart className="h-5 w-5 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Fitness & Wellness</h3>
              </div>
              <p className="text-gray-600 text-lg">
                Create intelligent fitness apps that provide real-time form correction, rep counting, and personalized
                workout recommendations.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Automatic rep counting and form analysis</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Virtual personal trainer experiences</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Progress tracking and analytics</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <Image
                src="/fitness-app-pose-detection.png"
                alt="Fitness use case"
                width={500}
                height={400}
                className="rounded-2xl shadow-lg object-cover w-full"
              />
            </div>
          </div>

          {/* Sports Use Case */}
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <div className="relative lg:order-first">
              <Image
                src="/placeholder-6ez0a.png"
                alt="Sports use case"
                width={500}
                height={400}
                className="rounded-2xl shadow-lg object-cover w-full"
              />
            </div>
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
                  <Trophy className="h-5 w-5 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Sports Performance</h3>
              </div>
              <p className="text-gray-600 text-lg">
                Enhance athletic performance with detailed biomechanical analysis, technique optimization, and injury
                prevention insights.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Biomechanical movement analysis</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Technique comparison and improvement</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Performance metrics and trends</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Rehabilitation Use Case */}
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center">
                  <Activity className="h-5 w-5 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Healthcare & Rehabilitation</h3>
              </div>
              <p className="text-gray-600 text-lg">
                Support patient recovery with precise movement tracking, progress monitoring, and remote therapy
                capabilities.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Remote physical therapy sessions</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Recovery progress tracking</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Movement quality assessment</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <Image
                src="/healthcare-rehab-app.png"
                alt="Healthcare use case"
                width={500}
                height={400}
                className="rounded-2xl shadow-lg object-cover w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
