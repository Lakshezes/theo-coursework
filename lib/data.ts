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
    description: "Explore artifacts from the time of pharaohs, including mummies, hieroglyphics, and royal treasures.",
    fullDescription: "Journey through 3,000 years of ancient Egyptian civilization. Our collection features authentic mummies, intricate hieroglyphic tablets, jewelry from royal tombs, and everyday objects that tell the story of life along the Nile. Highlights include a beautifully preserved sarcophagus from the 18th Dynasty and a collection of canopic jars used in mummification.",
    location: "Ground Floor, East Wing",
    openingHours: "9:00 AM - 6:00 PM",
    imageUrl: "https://images.unsplash.com/photo-1590579491624-f98f36d4c763?w=800&h=600&fit=crop",
    featured: true,
  },
  {
    id: "2",
    name: "Renaissance Art Collection",
    category: "Art",
    description: "Marvel at masterpieces from the Renaissance period, featuring works by renowned European artists.",
    fullDescription: "Immerse yourself in the golden age of art. This gallery showcases paintings, sculptures, and sketches from masters of the Renaissance era. Experience the evolution of artistic techniques, from early perspective experiments to the mastery of chiaroscuro. The collection includes works inspired by da Vinci, Michelangelo, and Raphael's styles.",
    location: "Second Floor, Main Gallery",
    openingHours: "9:00 AM - 6:00 PM",
    imageUrl: "https://images.unsplash.com/photo-1577083552431-6e5fd01988ec?w=800&h=600&fit=crop",
    featured: true,
  },
  {
    id: "3",
    name: "Natural History & Dinosaurs",
    category: "Natural History",
    description: "Discover prehistoric life with our extensive dinosaur fossil collection and interactive exhibits.",
    fullDescription: "Step back in time to when dinosaurs ruled the Earth. Our paleontology section features complete dinosaur skeletons, including a towering T-Rex replica and genuine fossils from the Mesozoic Era. Interactive displays explain continental drift, mass extinction events, and how paleontologists piece together ancient ecosystems from fossil evidence.",
    location: "Ground Floor, West Wing",
    openingHours: "9:00 AM - 6:00 PM",
    imageUrl: "https://images.unsplash.com/photo-1569163139394-de4798aa62b6?w=800&h=600&fit=crop",
    featured: true,
  },
  {
    id: "4",
    name: "Space & Astronomy Pavilion",
    category: "Science",
    description: "Explore the cosmos through telescopes, meteorites, and hands-on planetarium experiences.",
    fullDescription: "Journey beyond our planet and into the vastness of space. This interactive pavilion features real meteorite samples, scale models of the solar system, and a state-of-the-art digital planetarium. Learn about recent space missions, black holes, and the search for extraterrestrial life. Special exhibits include moon rock samples and satellite technology.",
    location: "Third Floor, North Wing",
    openingHours: "10:00 AM - 5:00 PM",
    imageUrl: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=800&h=600&fit=crop",
    featured: false,
  },
  {
    id: "5",
    name: "Medieval Arms & Armor",
    category: "History",
    description: "Witness authentic suits of armor, swords, and weapons from medieval Europe.",
    fullDescription: "Enter the age of knights and castles. This collection showcases genuine medieval armor, weaponry, and battle equipment from the 11th to 15th centuries. See how armor evolved from chainmail to full plate, examine swords and crossbows, and learn about medieval warfare tactics. The centerpiece is a complete jousting armor set from 14th century England.",
    location: "Second Floor, East Wing",
    openingHours: "9:00 AM - 6:00 PM",
    imageUrl: "https://images.unsplash.com/photo-1597008641621-cefdcf718025?w=800&h=600&fit=crop",
    featured: false,
  },
  {
    id: "6",
    name: "Asian Art & Culture",
    category: "Cultural Heritage",
    description: "Experience the rich artistic traditions of China, Japan, and Southeast Asia.",
    fullDescription: "Discover the diverse artistic heritage of Asia spanning thousands of years. This gallery features Chinese porcelain, Japanese woodblock prints, Buddhist sculptures, and intricate textiles from across the continent. Learn about calligraphy as an art form, the symbolism in Asian art, and the influence of philosophy and religion on creative expression.",
    location: "Third Floor, South Wing",
    openingHours: "9:00 AM - 6:00 PM",
    imageUrl: "https://images.unsplash.com/photo-1580662375615-2f5e2b5a0f4a?w=800&h=600&fit=crop",
    featured: true,
  },
  {
    id: "7",
    name: "Modern & Contemporary Art",
    category: "Modern Art",
    description: "Engage with thought-provoking works from 20th and 21st century artists.",
    fullDescription: "Challenge your perceptions with cutting-edge contemporary art. This dynamic space features paintings, sculptures, installations, and digital art from modern masters and emerging artists. Explore movements like Abstract Expressionism, Pop Art, Minimalism, and Conceptual Art. The gallery rotates exhibitions quarterly to showcase diverse voices and perspectives.",
    location: "Fourth Floor, West Wing",
    openingHours: "10:00 AM - 7:00 PM",
    imageUrl: "https://images.unsplash.com/photo-1536924940846-227afb31e2a5?w=800&h=600&fit=crop",
    featured: false,
  },
  {
    id: "8",
    name: "Indigenous Peoples Gallery",
    category: "Cultural Heritage",
    description: "Honor the heritage and artistry of indigenous cultures from around the world.",
    fullDescription: "This respectfully curated space celebrates the art, traditions, and resilience of indigenous peoples. The collection includes ceremonial objects, traditional clothing, pottery, and contemporary indigenous art. Educational displays provide context about cultural practices, the impact of colonization, and ongoing efforts to preserve indigenous knowledge and languages.",
    location: "Ground Floor, South Wing",
    openingHours: "9:00 AM - 6:00 PM",
    imageUrl: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=800&h=600&fit=crop",
    featured: false,
  },
  {
    id: "9",
    name: "Maritime History",
    category: "History",
    description: "Navigate through centuries of seafaring history, exploration, and naval warfare.",
    fullDescription: "Chart a course through maritime heritage. This exhibition features ship models, navigation instruments, maps, and artifacts recovered from shipwrecks. Learn about the Age of Exploration, the development of naval technology, famous voyages, and the crucial role of maritime trade in shaping civilizations. Interactive displays let visitors try their hand at celestial navigation.",
    location: "Ground Floor, North Wing",
    openingHours: "9:00 AM - 5:00 PM",
    imageUrl: "https://images.unsplash.com/photo-1547499417-ec0ce2dbd06c?w=800&h=600&fit=crop",
    featured: false,
  },
  {
    id: "10",
    name: "Photography Through the Ages",
    category: "Photography",
    description: "Trace the evolution of photography from daguerreotypes to digital imaging.",
    fullDescription: "Witness the incredible journey of photographic technology and artistry. This gallery showcases early cameras, vintage photographs, and contemporary photo art. Explore how photography has documented history, shaped public perception, and evolved as an artistic medium. The collection includes work from pioneering photographers and modern photojournalists who have captured defining moments.",
    location: "Second Floor, West Wing",
    openingHours: "10:00 AM - 6:00 PM",
    imageUrl: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&h=600&fit=crop",
    featured: false,
  },
];

export const getFeaturedAttractions = () => attractions.filter(a => a.featured);
export const getAttractionById = (id: string) => attractions.find(a => a.id === id);
export const getAttractionsByCategory = (category: string) => attractions.filter(a => a.category === category);

