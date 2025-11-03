"use client";

import { useState } from "react";
import { AttractionCard } from "@/components/attraction-card";
import { AttractionModal } from "@/components/attraction-modal";
import type { Attraction } from "@/lib/data";
import { useViewMode } from "@/lib/view-mode-context";

interface AttractionsSectionProps {
  attractions: Attraction[];
}

export function AttractionsSection({ attractions }: AttractionsSectionProps) {
  const [selectedAttraction, setSelectedAttraction] = useState<Attraction | null>(null);
  const { viewMode } = useViewMode();

  return (
    <>
      {/* Attraction grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {attractions.map((attraction) => (
          <AttractionCard
            key={attraction.name}
            attraction={attraction}
            onClick={() => {
              console.log("Clicked:", attraction.name);
              // always open modal, regardless of viewMode
              setSelectedAttraction(attraction);
            }}
          />
        ))}
      </div>

      {/* Show modal for both visual + text */}
      {selectedAttraction && (
        <AttractionModal
          attraction={selectedAttraction}
          onClose={() => setSelectedAttraction(null)}
        />
      )}
    </>
  );
}
