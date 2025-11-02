"use client"

import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { useViewMode } from '@/lib/view-mode-context'
import type { Attraction } from '@/lib/data'

interface AttractionCardProps {
  attraction: Attraction
  onClick?: () => void
}

export function AttractionCard({ attraction, onClick }: AttractionCardProps) {
  const { viewMode } = useViewMode()

  if (viewMode === 'text') {
    return (
      <div
        onClick={onClick} // added
        className="border-b pb-4 last:border-b-0 cursor-pointer hover:bg-muted/30 transition"
        role="article"
        aria-label={`Attraction: ${attraction.name}`}
      >
        <div className="space-y-2">
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-lg font-semibold">{attraction.name}</h3>
            <Badge variant="outline" className="shrink-0">
              {attraction.category}
            </Badge>
          </div>
          <p className="text-sm text-muted-foreground">{attraction.description}</p>
          <div className="text-xs text-muted-foreground space-y-1">
            <p>
              <span className="font-medium">Location:</span> {attraction.location}
            </p>
            <p>
              <span className="font-medium">Hours:</span> {attraction.openingHours}
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <Card
      onClick={onClick}
      className="cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
      role="article"
      aria-label={`Attraction: ${attraction.name}`}
    >
      <div className="relative aspect-video overflow-hidden bg-muted">
        <Image
          src={attraction.imageUrl}
          alt={`${attraction.name} exhibition`}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
