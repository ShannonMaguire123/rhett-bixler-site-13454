import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Bio from "@/components/Bio";
import Quote from "@/components/Quote";
import Mixes from "@/components/Mixes";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Bio />
        <Quote />
        <Mixes />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
