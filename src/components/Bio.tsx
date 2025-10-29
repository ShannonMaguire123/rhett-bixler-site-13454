import { Home, Clock, Disc3 } from "lucide-react";

const Bio = () => {
  return (
    <section id="bio" className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <h2 className="font-display text-3xl sm:text-4xl font-bold mb-8">Bio</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-b from-card to-background border border-border rounded-[1.125rem] p-6 shadow-lg card-glow">
            <p className="text-foreground/90 mb-6 leading-relaxed">
              Rhett Bixler is a crate-digging storyteller weaving classic house, left-field techno, and modern breaks into kinetic journeys. Recent highlights include <em>Warehouse X</em>, <em>Solaris</em>, and a monthly residency at <em>Pulse FM</em>.
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
