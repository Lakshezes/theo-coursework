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
    <div className="fixed inset-0 z-9999 bg-black/70 flex items-center justify-center p-4">
      <div className="bg-card rounded-2xl shadow-2xl max-w-5xl w-full overflow-hidden relative scale-105 md:scale-100 duration-300">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-muted-foreground hover:text-foreground z-10"
          aria-label="Close modal"
        >
          <X size={24} />
        </button>

        {/* Content layout */}
        <div className="flex flex-col md:flex-row">
          {/* Bigger image area */}
          <div className="relative w-full md:w-2/3 aspect-4/3">
            <Image
              src={attraction.imageUrl}
              alt={attraction.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 60vw"
            />
          </div>

          {/* Text section */}
          <div className="p-8 space-y-4 md:w-1/3 overflow-y-auto">
            <h2 className="text-3xl font-bold">{attraction.name}</h2>
            <p className="text-muted-foreground text-base">{attraction.description}</p>
            <div className="space-y-2 text-sm">
              <p><span className="font-medium">Location:</span> {attraction.location}</p>
              <p><span className="font-medium">Hours:</span> {attraction.openingHours}</p>
              <p><span className="font-medium">Category:</span> {attraction.category}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
