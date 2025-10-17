const Mixes = () => {
  return (
    <section id="mixes" className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <h2 className="font-display text-3xl sm:text-4xl font-bold mb-8">Featured Mixes</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-b from-card to-background border border-border rounded-[1.125rem] overflow-hidden shadow-lg card-glow">
            <iframe
              className="w-full aspect-video"
              src="https://player.mixcloud.com/widget/iframe/?feed=%2Fmixcloud%2Fmix-name%2F"
              allow="autoplay"
              frameBorder="0"
            />
            <div className="p-4">
              <p className="text-muted-foreground">Sunrise Session — deep, rolling, melodic.</p>
            </div>
          </div>
          <div className="bg-gradient-to-b from-card to-background border border-border rounded-[1.125rem] p-6 shadow-lg card-glow flex flex-col justify-center">
            <audio controls className="w-full mb-4">
              <source src="/set-live.mp3" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
            <p className="text-muted-foreground">Live @ Warehouse X — peak-time energy.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mixes;
