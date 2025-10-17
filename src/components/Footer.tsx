const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 text-center text-muted-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <p>© {currentYear} Rhett Bixler — All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
