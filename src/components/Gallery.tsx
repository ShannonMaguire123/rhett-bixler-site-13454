import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import rhettGreenBackdrop from "@/assets/rhett-green-backdrop.jpeg";
import rhettWeddingEvent from "@/assets/rhett-wedding-event.jpg";
import rhettPortrait from "@/assets/rhett-portrait.png";
import rhettJoyface from "@/assets/rhett-joyface.jpg";
import rhettRooftop from "@/assets/rhett-rooftop.jpg";

const Gallery = () => {
  const galleryItems = [
    {
      id: 1,
      title: "Martha Hunt event NYFW",
      image: rhettGreenBackdrop,
    },
    {
      id: 2,
      title: "Wedding Event",
      image: rhettWeddingEvent,
    },
    {
      id: 3,
      title: "Professional Portrait",
      image: rhettPortrait,
    },
    {
      id: 4,
      title: "Joyface Sessions",
      image: rhettJoyface,
    },
    {
      id: 5,
      title: "Massara NY Flatiron Opening",
      image: rhettRooftop,
    },
  ];

  return (
    <section id="gallery" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Gallery
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Moments from the booth – NYC nightlife at its finest
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {galleryItems.map((item) => (
              <CarouselItem key={item.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="group overflow-hidden border-border bg-card cursor-pointer card-glow">
                  <div className="relative aspect-[4/3] overflow-hidden bg-muted/20">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
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
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default Gallery;
