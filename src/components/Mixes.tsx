const Mixes = () => {
  return (
    <section id="mixes" className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <h2 className="font-display text-3xl sm:text-4xl font-bold mb-8">Featured Mixes</h2>
        <div className="bg-gradient-to-b from-card to-background border border-border rounded-[1.125rem] overflow-hidden shadow-lg card-glow max-w-2xl mx-auto">
          <iframe
            className="w-full"
            height="300"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/rhettbixler/rhettbixlermix&color=%236cf0ff&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&visual=true"
          />
          <div className="p-4">
            <p className="text-muted-foreground">Featured mix — deep grooves and euphoric energy.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mixes;
