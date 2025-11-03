"use client"

import Image from "next/image"
import { X } from "lucide-react"
import type { Attraction } from "@/lib/data"

interface AttractionModalProps {
  attraction: Attraction
  onClose: () => void
}

export function AttractionModal({ attraction, onClose }: AttractionModalProps) {
  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
      <div className="bg-card rounded-2xl shadow-2xl max-w-5xl w-full overflow-hidden relative animate-fade-in">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-muted-foreground hover:text-foreground transition"
          aria-label="Close modal"
        >
          <X size={22} />
        </button>

        {/* Layout */}
        <div className="flex flex-col md:flex-row">
          {/* Left: image */}
          <div className="relative w-full md:w-1/2 aspect-video md:aspect-auto">
            <Image
              src={attraction.imageUrl}
              alt={attraction.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>

          {/* Right: info */}
          <div className="p-6 md:p-8 space-y-4 md:w-1/2 overflow-y-auto max-h-[80vh]">
            <h2 className="text-3xl font-bold tracking-tight">{attraction.name}</h2>
            <p className="text-sm uppercase tracking-wide text-muted-foreground">
              {attraction.category}
            </p>

            {/* Full Description */}
            <p className="text-base leading-relaxed text-foreground">
              {attraction.fullDescription}
            </p>

            {/* Details */}
            <div className="pt-4 border-t space-y-2 text-sm">
              <p>
                <span className="font-medium text-foreground">Location:</span> {attraction.location}
              </p>
              <p>
                <span className="font-medium text-foreground">Opening Hours:</span> {attraction.openingHours}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
