import { Button } from "@/components/ui/button";
import { Play, Mail } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="py-12 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="grid md:grid-cols-[1.2fr,1fr] gap-8 items-center">
          <div className="space-y-6">
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Rhythm-driven sets for late nights & sunrise moments.
            </h1>
            <p className="text-muted-foreground text-lg max-w-[55ch]">
              Rhett blends deep grooves and euphoric tops with a selector's ear. Based in Berlin, available worldwide for clubs, festivals, and livestreams.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                variant="secondary"
                onClick={() => scrollToSection("mixes")}
                className="bg-secondary hover:bg-secondary/80 border border-border"
              >
                <Play className="w-4 h-4" />
                Listen to mixes
              </Button>
              <Button
                size="lg"
                variant="secondary"
                onClick={() => scrollToSection("contact")}
                className="bg-secondary hover:bg-secondary/80 border border-border"
              >
                <Mail className="w-4 h-4" />
                Bookings
              </Button>
            </div>
          </div>
          <div className="bg-gradient-to-b from-card to-background border border-border rounded-[1.125rem] overflow-hidden shadow-2xl card-glow">
            <iframe
              className="w-full aspect-video"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/rhettbixler/rhettbixlermix&color=%236cf0ff&auto_play=false&show_user=true"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
