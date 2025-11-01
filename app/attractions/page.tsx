"use client"

import { useState, useMemo } from 'react'
import { AttractionCard } from '@/components/attraction-card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { attractions } from '@/lib/data'
import { useViewMode } from '@/lib/view-mode-context'

export default function AttractionsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const { viewMode } = useViewMode()

  // Get unique categories
  const categories = useMemo(() => {
    const cats = Array.from(new Set(attractions.map(a => a.category)))
    return ['all', ...cats]
  }, [])

  // Filter attractions by category
  const filteredAttractions = useMemo(() => {
    if (selectedCategory === 'all') return attractions
    return attractions.filter(a => a.category === selectedCategory)
  }, [selectedCategory])

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Page Header */}
      <div className="space-y-4 mb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Museum Attractions
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Explore our diverse collection of exhibitions and galleries. 
          {viewMode === 'visual' 
            ? ' Browse through beautiful imagery and detailed descriptions.'
            : ' View concise information in an easy-to-read format.'}
        </p>
      </div>

      {/* Category Filter */}
      <div 
        className="mb-8"
        role="group"
        aria-label="Filter attractions by category"
      >
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              aria-pressed={selectedCategory === category}
              className="capitalize"
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      {/* Results Count */}
      <div className="mb-6 flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          Showing {filteredAttractions.length} {filteredAttractions.length === 1 ? 'attraction' : 'attractions'}
          {selectedCategory !== 'all' && ` in ${selectedCategory}`}
        </p>
        <Badge variant="secondary">
          {viewMode === 'visual' ? 'Visual Mode' : 'Text Mode'}
        </Badge>
      </div>

      {/* Attractions Display */}
      {viewMode === 'visual' ? (
        <div 
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          role="list"
          aria-label="Attractions grid"
        >
          {filteredAttractions.map((attraction) => (
            <div key={attraction.id} role="listitem">
              <AttractionCard attraction={attraction} />
            </div>
          ))}
        </div>
      ) : (
        <div 
          className="space-y-4 max-w-4xl"
          role="list"
          aria-label="Attractions list"
        >
          {filteredAttractions.map((attraction) => (
            <div key={attraction.id} role="listitem">
              <AttractionCard attraction={attraction} />
            </div>
          ))}
        </div>
      )}

      {/* No Results */}
      {filteredAttractions.length === 0 && (
        <div className="text-center py-12">
          <p className="text-lg text-muted-foreground">
            No attractions found in this category.
          </p>
        </div>
      )}
    </div>
  )
}

