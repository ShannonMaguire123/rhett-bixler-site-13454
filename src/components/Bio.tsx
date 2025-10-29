import { Home, Clock, Disc3 } from "lucide-react";

const Bio = () => {
  return (
    <section id="bio" className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <h2 className="font-display text-3xl sm:text-4xl font-bold mb-8">Bio</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-b from-card to-background border border-border rounded-[1.125rem] p-6 shadow-lg card-glow">
            <p className="text-foreground/90 mb-6 leading-relaxed">
              DJ Rhett Bixler is a New York–based disco and open-format DJ known for his seamless blends of classic groove and contemporary dance energy. Rhett is a fixture in the city's nightlife, holding residencies at Paul's Baby Grand, Paul's Casablanca, Joyface, Casa Cipriani, and Socialista. Rhett's sets channel the spirit of Studio 54 through a modern lens - vibrant, soulful, and irresistibly danceable - making him a favorite among discerning crowds and tastemakers alike
            </p>
            <p className="text-foreground/80 leading-relaxed">
              Featured in NYLON's, "10 New York City Clubs To Know Right Now"
            </p>
          </div>
          <div className="bg-gradient-to-b from-card to-background border border-border rounded-[1.125rem] p-6 shadow-lg card-glow">
            <h3 className="font-display text-xl font-semibold mb-4">Highlights</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-primary text-lg">•</span>
                <span>Weekly residencies: Paul's Baby Grand, Paul's Casablanca</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary text-lg">•</span>
                <span>Notable events: Piaget, Louis Vuitton, Harper's BAZAAR</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary text-lg">•</span>
                <span>Notable clients: The Weekend, Gigi Hadid, Kendall & Kylie Jenner</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary text-lg">•</span>
                <span>Shared the stage with: Calvin Harris, KAYTRANADA, Chris Lake & Alesso</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bio;
