import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
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
      title: "Private Wedding Event, New Orleans",
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
          plugins={[
            Autoplay({
              delay: 3000,
              stopOnInteraction: true,
            }),
          ]}
          opts={{
            align: "center",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {galleryItems.map((item) => (
              <CarouselItem key={item.id} className="pl-2 md:pl-4 basis-[85%] sm:basis-1/2 lg:basis-1/3">
                <Card className="group overflow-hidden border-border bg-card cursor-pointer card-glow h-full">
                  <div className="relative aspect-[3/4] sm:aspect-[4/3] overflow-hidden bg-muted/20">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h3 className="text-foreground font-bold text-base sm:text-lg">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-4 gap-1">
            {galleryItems.map((_, index) => (
              <div
                key={index}
                className="h-1.5 w-1.5 rounded-full bg-muted/50"
              />
            ))}
          </div>
          <CarouselPrevious className="hidden sm:flex -left-12" />
          <CarouselNext className="hidden sm:flex -right-12" />
        </Carousel>
        
        <p className="text-center text-sm text-muted-foreground mt-6 sm:hidden">
          Swipe to explore more
        </p>
      </div>
    </section>
  );
};

export default Gallery;
