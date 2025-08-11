"use client";

import { useState, useRef } from "react";

interface VideoUploadProps {
  onFileSelect?: (file: File) => void;
  isProcessing?: boolean;
  uploadedFile?: File | null;
}

export default function VideoUpload({ onFileSelect, isProcessing, uploadedFile }: VideoUploadProps) {
  const [videoSrc, setVideoSrc] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // ✅ Single function to handle both upload & drag-drop
  const processFile = (file: File) => {
    const allowedTypes = ["video/mp4", "video/webm", "video/avi"];
    if (!allowedTypes.includes(file.type)) {
      alert("Only MP4, WebM, and AVI files are allowed.");
      return;
    }

    // Preview video
    const url = URL.createObjectURL(file);
    setVideoSrc(url);

    // Pass file to parent if needed
    if (onFileSelect) onFileSelect(file);
  };

  // Handle file input change
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) processFile(file);
  };

  // Handle drag-over
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  // Handle drop
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file) processFile(file);
  };

  return (
    <div
      className="border-2 border-dashed border-gray-400 rounded-xl p-6 text-center cursor-pointer hover:bg-gray-50 transition"
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      onClick={() => fileInputRef.current?.click()}
    >
      {!videoSrc ? (
        <p className="text-gray-500">Drag & drop a video here, or click to select</p>
      ) : (
        <video src={videoSrc} controls className="w-full rounded-lg" />
      )}

      <input
        ref={fileInputRef}
        type="file"
        accept=".mp4,.webm,.avi"
        className="hidden"
        onChange={handleFileChange}
      />
    </div>
  );
}
