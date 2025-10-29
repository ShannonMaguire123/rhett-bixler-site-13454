import { Home, Clock, Disc3 } from "lucide-react";

const Bio = () => {
  return (
    <section id="bio" className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <h2 className="font-display text-3xl sm:text-4xl font-bold mb-8">Bio</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-b from-card to-background border border-border rounded-[1.125rem] p-6 shadow-lg card-glow">
            <p className="text-foreground/90 mb-6 leading-relaxed">
              DJ Rhett Bixler is a New York–based disco and open-format DJ known for his seamless blends of classic groove and contemporary dance energy. With over 15 years behind the decks, he's a fixture in the city's nightlife, holding residencies at Paul's Baby Grand, Paul's Casablanca, Joyface, Casa Cipriani, and Socialista. Rhett's sets channel the spirit of Studio 54 through a modern lens - vibrant, soulful, and irresistibly danceable - making him a favorite among discerning crowds and tastemakers alike
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-center gap-3">
                <Home className="w-5 h-5 text-primary" />
                <span>Home base: New York, NY</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-primary" />
                <span>Typical set: 90–180 minutes</span>
              </li>
              <li className="flex items-center gap-3">
                <Disc3 className="w-5 h-5 text-primary" />
                <span>Tech: USB/rekordbox, 2–3 CDJs + mixer</span>
              </li>
            </ul>
          </div>
          <div className="bg-gradient-to-b from-card to-background border border-border rounded-[1.125rem] p-6 shadow-lg card-glow">
            <h3 className="font-display text-xl font-semibold mb-4">Highlights</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-primary text-lg">•</span>
                <span>Support for Artist X (2024)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary text-lg">•</span>
                <span>Peak set @ Solaris (Main Room)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary text-lg">•</span>
                <span>Pulse FM monthly (since 2023)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bio;
