"use client"

import { useState } from "react"
import { Header } from "@/src/components/header"
import { Footer } from "@/src/components/footer"
import VideoUpload from "@/src/components/VideoUpload"
import { Button } from "@/src/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/src/components/ui/card"
import { Badge } from "@/src/components/ui/badge"
import { ArrowLeft, Upload, Zap, Shield, Clock } from "lucide-react"
import Link from "next/link"

export default function UploadPage() {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null)
  const [isProcessing, setIsProcessing] = useState(false)

  const handleFileSelect = async (file: File) => {
    console.log("Selected file:", file)
    setUploadedFile(file)
    setIsProcessing(true)

    // Simulate processing time
    setTimeout(() => {
      setIsProcessing(false)
    }, 3000)

    // TODO: Implement actual pose estimation processing
    // const formData = new FormData()
    // formData.append("video", file)
    // const response = await fetch("/api/upload", { method: "POST", body: formData })
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-8">
        {/* Back Navigation */}
        <div className="mb-6">
          <Link href="/">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>

        {/* Page Header */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            <Upload className="h-3 w-3 mr-1" />
            Upload & Analyze
          </Badge>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Upload Video for Pose Estimation</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Upload your video and get real-time pose analysis with detailed insights and recommendations.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Upload Section */}
          <div className="lg:col-span-2">
            <Card className="border-2 border-dashed border-blue-200 bg-blue-50/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Upload className="h-5 w-5 text-blue-600" />
                  Video Upload
                </CardTitle>
                <CardDescription>
                  Drag and drop your video file or click to browse. Supports MP4, MOV, AVI formats.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <VideoUpload onFileSelect={handleFileSelect} isProcessing={isProcessing} uploadedFile={uploadedFile} />
              </CardContent>
            </Card>
          </div>

          {/* Info Sidebar */}
          <div className="space-y-6">
            {/* Processing Info */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Zap className="h-5 w-5 text-green-600" />
                  Fast Processing
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Clock className="h-4 w-4" />
                  Average processing: 30-60 seconds
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Shield className="h-4 w-4" />
                  Your data is secure and private
                </div>
              </CardContent>
            </Card>

            {/* Supported Formats */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Supported Formats</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-2">
                  <Badge variant="outline">MP4</Badge>
                  <Badge variant="outline">MOV</Badge>
                  <Badge variant="outline">AVI</Badge>
                  <Badge variant="outline">WebM</Badge>
                </div>
                <p className="text-sm text-gray-600 mt-3">Maximum file size: 100MB</p>
              </CardContent>
            </Card>

            {/* What You'll Get */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Analysis Results</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="text-sm text-gray-600">✓ Joint position tracking</div>
                <div className="text-sm text-gray-600">✓ Movement analysis</div>
                <div className="text-sm text-gray-600">✓ Posture recommendations</div>
                <div className="text-sm text-gray-600">✓ Performance metrics</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
