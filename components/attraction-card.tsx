"use client"

import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useViewMode } from "@/lib/view-mode-context"
import type { Attraction } from "@/lib/data"

interface AttractionCardProps {
  attraction: Attraction
  onClick?: () => void
}

export function AttractionCard({ attraction, onClick }: AttractionCardProps) {
  const { viewMode } = useViewMode()

  // TEXT MODE — now clickable and opens modal
  if (viewMode === "text") {
    return (
      <div
        onClick={onClick} // key line — triggers modal
        className="border rounded-md p-4 cursor-pointer hover:bg-muted/30 transition shadow-sm hover:shadow-md"
        role="button"
        aria-label={`View details for ${attraction.name}`}
      >
        <div className="flex items-start justify-between">
          <h3 className="text-lg font-semibold text-foreground">{attraction.name}</h3>
          <Badge variant="outline">{attraction.category}</Badge>
        </div>
        <p className="text-sm text-muted-foreground mt-1">{attraction.description}</p>
        <div className="mt-2 text-xs text-muted-foreground space-y-1">
          <p>
            <span className="font-medium text-foreground">Location:</span> {attraction.location}
          </p>
          <p>
            <span className="font-medium text-foreground">Hours:</span> {attraction.openingHours}
          </p>
        </div>
      </div>
    )
  }

  // VISUAL MODE (unchanged)
  return (
    <Card
      onClick={onClick} // same behavior
      className="cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
      role="button"
      aria-label={`View details for ${attraction.name}`}
    >
      <div className="relative aspect-video overflow-hidden bg-muted">
        <Image
          src={attraction.imageUrl}
          alt={`${attraction.name} exhibition`}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      <CardHeader>
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="text-xl">{attraction.name}</CardTitle>
          <Badge variant="secondary" className="shrink-0">
            {attraction.category}
          </Badge>
        </div>
        <CardDescription>{attraction.description}</CardDescription>
      </CardHeader>

      <CardContent className="space-y-2 text-sm text-muted-foreground">
        <p>
          <span className="font-medium text-foreground">Location:</span> {attraction.location}
        </p>
        <p>
          <span className="font-medium text-foreground">Hours:</span> {attraction.openingHours}
        </p>
      </CardContent>
    </Card>
  )
}
