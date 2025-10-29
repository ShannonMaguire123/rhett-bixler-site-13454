const Quote = () => {
  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center">
          <blockquote className="relative">
            <div className="text-5xl md:text-6xl text-primary/30 mb-4 font-serif">"</div>
            <p className="text-xl md:text-2xl lg:text-3xl text-foreground italic font-light leading-relaxed mb-6">
              It's also brought in DJs from Rhett Bixler to Ty Sunderland.
            </p>
            <footer className="text-sm md:text-base text-muted-foreground uppercase tracking-wider">
              — NYLON, "10 New York City Clubs To Know Right Now"
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default Quote;
