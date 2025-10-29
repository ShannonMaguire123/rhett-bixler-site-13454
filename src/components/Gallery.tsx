import { Card } from "@/components/ui/card";

const Gallery = () => {
  // Placeholder gallery images - replace with actual DJ photos
  const galleryItems = [
    {
      id: 1,
      title: "Live at Paul's Baby Grand",
      image: "https://images.unsplash.com/photo-1571266028243-d220c6e2e8e6?w=800&h=600&fit=crop",
    },
    {
      id: 2,
      title: "Casa Cipriani Residency",
      image: "https://images.unsplash.com/photo-1598387993441-a364f854c3e1?w=800&h=600&fit=crop",
    },
    {
      id: 3,
      title: "Joyface Sessions",
      image: "https://images.unsplash.com/photo-1574969893131-d5f5d0b5a7e1?w=800&h=600&fit=crop",
    },
    {
      id: 4,
      title: "Studio 54 Vibes",
      image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&h=600&fit=crop",
    },
    {
      id: 5,
      title: "Private Event NYC",
      image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&h=600&fit=crop",
    },
    {
      id: 6,
      title: "Sunset Set",
      image: "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=800&h=600&fit=crop",
    },
  ];

  return (
    <section id="gallery" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Gallery
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Moments from the booth – NYC nightlife at its finest
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <Card
              key={item.id}
              className="group overflow-hidden border-border bg-card hover:scale-105 transition-all duration-300 cursor-pointer card-glow"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-foreground font-bold text-lg">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
