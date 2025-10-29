import { useState, useEffect } from "react";
import logo from "@/assets/rhett-bixler-logo.png";

const Header = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "bio", "mixes", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-background/55 border-b border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="flex items-center justify-between h-16">
          <div className="logo">
            <img src={logo} alt="Rhett Bixler" className="h-8 md:h-10 w-auto" />
          </div>
          <nav className="hidden md:flex items-center gap-6">
            {[
              { id: "bio", label: "Bio" },
              { id: "mixes", label: "Mixes" },
              { id: "contact", label: "Contact" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-colors ${
                  activeSection === item.id
                    ? "text-primary"
                    : "text-foreground/85 hover:text-primary"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
