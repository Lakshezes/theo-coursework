export interface Attraction {
  id: string;
  name: string;
  category: string;
  description: string;
  fullDescription: string;
  location: string;
  openingHours: string;
  imageUrl: string;
  featured: boolean;
}

export const attractions: Attraction[] = [
  {
    id: "1",
    name: "Ancient Egyptian Gallery",
    category: "Ancient History",
    description:
      "Explore artifacts from the time of pharaohs, including mummies, hieroglyphics, and royal treasures.",
    fullDescription:
      "Journey through over 3,000 years of ancient Egyptian civilization. This gallery highlights daily life along the Nile and the grand beliefs of the afterlife. View intricately painted sarcophagi, preserved mummies from the 18th Dynasty, and rare papyrus manuscripts. Interactive stations let visitors translate hieroglyphics and digitally 'unwrap' a mummy using CT scan data. Temporary exhibit: *Queens of the Nile*, running until June 2026.",
    location: "Ground Floor, East Wing",
    openingHours: "Mon-Fri: 9:30 AM - 6 PM | Sat-Sun: 10 AM - 7 PM",
    imageUrl:
      "https://images.unsplash.com/photo-1599656531273-70bbbe4272ff?auto=format&fit=crop&q=80&w=870",
    featured: true,
  },
  {
    id: "2",
    name: "Renaissance Art Collection",
    category: "Art",
    description:
      "Marvel at masterpieces from the Renaissance period, featuring works by renowned European artists.",
    fullDescription:
      "Step into the rebirth of art and humanism. This gallery showcases works from 14th to 16th century Europe — sculptures, oil paintings, and sketches inspired by masters like Leonardo da Vinci, Michelangelo, and Raphael. Learn how innovations in anatomy, perspective, and light transformed visual storytelling. A guided talk on *The Science of Beauty* runs daily at 2 PM.",
    location: "Second Floor, Main Gallery",
    openingHours: "Daily: 9 AM - 8 PM",
    imageUrl:
      "https://images.unsplash.com/photo-1583748969877-76af108e461d?auto=format&fit=crop&q=80&w=1668",
    featured: true,
  },
  {
    id: "3",
    name: "Natural History & Dinosaurs",
    category: "Natural History",
    description:
      "Discover prehistoric life with our extensive dinosaur fossil collection and interactive exhibits.",
    fullDescription:
      "Travel back over 200 million years to an era when dinosaurs ruled the planet. Highlights include a life-size Tyrannosaurus rex skeleton, a complete Triceratops skull, and genuine amber fossils. Kids can become paleontologists in the hands-on fossil excavation zone. The exhibit also explores Earth's major extinction events and how scientists reconstruct ancient climates.",
    location: "Ground Floor, West Wing",
    openingHours: "Mon-Fri: 9 AM - 5:30 PM | Sat-Sun: 9 AM - 6 PM",
    imageUrl:
      "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&q=80&w=704",
    featured: true,
  },
  {
    id: "4",
    name: "Space & Astronomy Pavilion",
    category: "Science",
    description:
      "Explore the cosmos through telescopes, meteorites, and hands-on planetarium experiences.",
    fullDescription:
      "Journey beyond Earth in this immersive space pavilion. Witness real meteorite fragments, a scale solar system, and interactive simulations of lunar landings. The planetarium offers 30-minute cosmic shows every hour. Special event: *Mars 2040: Colonizing the Red Planet* — Saturdays at 5 PM.",
    location: "Third Floor, North Wing",
    openingHours: "Tue-Sun: 10 AM - 5 PM | Closed Mondays",
    imageUrl:
      "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=800&h=600&fit=crop",
    featured: false,
  },
  {
    id: "5",
    name: "Medieval Arms & Armor",
    category: "History",
    description:
      "Witness authentic suits of armor, swords, and weapons from medieval Europe.",
    fullDescription:
      "Step into the Middle Ages and explore the artistry and warfare of knights. See chainmail suits, full plate armor, crossbows, and siege weapon replicas. A restored 14th-century jousting armor is displayed alongside interactive demos on blacksmithing and medieval combat techniques. Guided tours depart hourly between 11 AM - 3 PM.",
    location: "Second Floor, East Wing",
    openingHours: "Daily: 9:30 AM - 6 PM",
    imageUrl:
      "https://images.unsplash.com/photo-1560339795-43309a7a8e30?auto=format&fit=crop&q=60&w=700",
    featured: false,
  },
  {
    id: "6",
    name: "Asian Art & Culture",
    category: "Cultural Heritage",
    description:
      "Experience the rich artistic traditions of China, Japan, and Southeast Asia.",
    fullDescription:
      "Celebrate the beauty and diversity of Asian artistry. Discover Buddhist sculptures, Japanese ukiyo-e woodblock prints, Chinese porcelain, and embroidered silk garments from Southeast Asia. The exhibit explores symbolism, calligraphy, and the link between spirituality and art. Don’t miss the *Tea Ceremony Experience* offered daily at 1 PM and 4 PM.",
    location: "Third Floor, South Wing",
    openingHours: "Mon-Thu: 9 AM - 6 PM | Fri-Sun: 9 AM - 7 PM",
    imageUrl:
      "https://images.unsplash.com/photo-1687382130081-ebd36ecd38a9?auto=format&fit=crop&q=80&w=1728",
    featured: true,
  },
  {
    id: "7",
    name: "Modern & Contemporary Art",
    category: "Modern Art",
    description:
      "Engage with thought-provoking works from 20th and 21st century artists.",
    fullDescription:
      "Challenge convention with avant-garde art that redefines creativity. From Abstract Expressionism to modern digital installations, this gallery showcases the evolution of art through technology and emotion. Rotating exhibits feature global artists, and the *Art After Dark* event runs every Friday evening with live performances and curator talks.",
    location: "Fourth Floor, West Wing",
    openingHours: "Wed-Sun: 10 AM - 8 PM | Closed Mon-Tue",
    imageUrl:
      "https://images.unsplash.com/photo-1536924940846-227afb31e2a5?w=800&h=600&fit=crop",
    featured: false,
  },
  {
    id: "8",
    name: "Indigenous Peoples Gallery",
    category: "Cultural Heritage",
    description:
      "Honor the heritage and artistry of indigenous cultures from around the world.",
    fullDescription:
      "A tribute to indigenous voices and traditions. This gallery presents ceremonial masks, woven textiles, and carvings from First Nations, Aboriginal, and Pacific Islander cultures. Audio recordings share stories from indigenous curators. New exhibit: *Guardians of the Land* (March - September 2026) focuses on ecological stewardship.",
    location: "Ground Floor, South Wing",
    openingHours: "Daily: 9:30 AM - 7 PM",
    imageUrl:
      "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=800&h=600&fit=crop",
    featured: false,
  },
  {
    id: "9",
    name: "Maritime History",
    category: "History",
    description:
      "Navigate through centuries of seafaring history, exploration, and naval warfare.",
    fullDescription:
      "Sail through 500 years of maritime exploration and adventure. Explore ship models, compasses, maps, and navigation tools. Artifacts from shipwrecks reveal the dangers of the high seas, while multimedia stations recreate legendary voyages. Don't miss the *Pirates & Privateers* interactive corner for kids open on weekends 11 AM - 4 PM.",
    location: "Ground Floor, North Wing",
    openingHours: "Mon-Fri: 9 AM - 5 PM | Sat-Sun: 10 AM - 6 PM",
    imageUrl:
      "https://images.unsplash.com/photo-1741623675303-2d63cd2769b1?auto=format&fit=crop&q=60&w=700",
    featured: false,
  },
  {
    id: "10",
    name: "Photography Through the Ages",
    category: "Photography",
    description:
      "Trace the evolution of photography from daguerreotypes to digital imaging.",
    fullDescription:
      "Follow the fascinating story of photography — from 19th-century daguerreotypes to modern digital art. Early cameras and darkroom equipment demonstrate how technology shaped visual storytelling. Exhibits explore documentary, portrait, and experimental photography. The *History Through the Lens* workshop runs every Sunday at 2 PM.",
    location: "Second Floor, West Wing",
    openingHours: "Tue-Sun: 10 AM - 7 PM | Closed Mondays",
    imageUrl:
      "https://images.unsplash.com/photo-1692153142567-4443bee183d2?auto=format&fit=crop&q=80&w=1740",
    featured: false,
  },
];

export const getFeaturedAttractions = () =>
  attractions.filter((a) => a.featured);

export const getAttractionById = (id: string) =>
  attractions.find((a) => a.id === id);

export const getAttractionsByCategory = (category: string) =>
  attractions.filter((a) => a.category === category);
