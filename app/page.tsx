import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AttractionCard } from "@/components/attraction-card";
import { getFeaturedAttractions } from "@/lib/data";

export default function Home() {
  const featuredAttractions = getFeaturedAttractions();

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section 
        className="relative bg-gradient-to-b from-primary/10 to-background py-20 md:py-32"
        aria-label="Hero section"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Welcome to Heritage Museum
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Explore world-class exhibitions spanning art, history, and culture. 
              Discover ancient artifacts, contemporary masterpieces, and everything in between.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link href="/attractions">
                <Button size="lg">
                  Explore Attractions
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg">
                  Plan Your Visit
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Attractions */}
      <section 
        className="py-16 md:py-24"
        aria-labelledby="featured-heading"
      >
        <div className="container mx-auto px-4">
          <div className="space-y-8">
            <div className="text-center space-y-2">
              <h2 
                id="featured-heading" 
                className="text-3xl md:text-4xl font-bold tracking-tight"
              >
                Featured Attractions
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Don't miss these must-see exhibitions during your visit
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {featuredAttractions.map((attraction) => (
                <AttractionCard key={attraction.id} attraction={attraction} />
              ))}
            </div>

            <div className="text-center pt-8">
              <Link href="/attractions">
                <Button variant="outline" size="lg">
                  View All Attractions
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section 
        className="bg-muted/50 py-16 md:py-24"
        aria-labelledby="about-heading"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-6 text-center">
            <h2 
              id="about-heading" 
              className="text-3xl md:text-4xl font-bold tracking-tight"
            >
              A Museum For Everyone
            </h2>
            <div className="text-lg text-muted-foreground space-y-4">
              <p>
                Heritage Museum is committed to making culture accessible to all. 
                Our diverse collection spans thousands of years and cultures from around the globe.
              </p>
              <p>
                Whether you're interested in ancient civilizations, modern art, natural history, 
                or scientific discovery, you'll find something to inspire and educate.
              </p>
            </div>
            <div className="pt-4">
              <Link href="/contact">
                <Button>
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
