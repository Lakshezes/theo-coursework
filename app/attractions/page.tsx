"use client"

import { useState, useMemo } from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { attractions } from '@/lib/data'
import { useViewMode } from '@/lib/view-mode-context'
import { AttractionsSection } from './AttractionsSection'

export default function AttractionsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const { viewMode } = useViewMode()

  const categories = useMemo(() => {
    const cats = Array.from(new Set(attractions.map(a => a.category)))
    return ['all', ...cats]
  }, [])

  const filteredAttractions = useMemo(() => {
    if (selectedCategory === 'all') return attractions
    return attractions.filter(a => a.category === selectedCategory)
  }, [selectedCategory])

  return (
    <div className="container mx-auto px-4 py-12">
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

      <div className="mb-8" role="group" aria-label="Filter attractions by category">
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

      <div className="mb-6 flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          Showing {filteredAttractions.length} {filteredAttractions.length === 1 ? 'attraction' : 'attractions'}
          {selectedCategory !== 'all' && ` in ${selectedCategory}`}
        </p>
        <Badge variant="secondary">
          {viewMode === 'visual' ? 'Visual Mode' : 'Text Mode'}
        </Badge>
      </div>

      {/*Use modal-enabled AttractionsSection */}
      <AttractionsSection attractions={filteredAttractions} />

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
