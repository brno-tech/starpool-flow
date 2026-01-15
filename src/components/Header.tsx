import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";
import { trackWhatsAppClick } from "@/hooks/useTracking";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Início", href: "#hero" },
    { label: "Serviços", href: "#servicos" },
    { label: "Galeria", href: "#galeria" },
    { label: "Depoimentos", href: "#depoimentos" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "glass shadow-md" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <a href="#hero" className="flex items-center">
          <img src={logo} alt="Piscinas Exclusivas" className="h-12 w-auto" />
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="text-foreground hover:text-secondary transition-colors font-medium relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-secondary after:transition-all hover:after:w-full"
              >
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <Button
              onClick={() => {
                trackWhatsAppClick("home");
                window.open("https://wa.me/5531920021799", "_blank");
              }}
              className="bg-primary hover:bg-primary-glow text-primary-foreground pulse-glow"
            >
              Solicitar Orçamento
            </Button>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-primary"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-dark animate-slide-in-right">
          <ul className="flex flex-col gap-4 p-6">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-white hover:text-secondary transition-colors block py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <Button
                onClick={() => {
                  trackWhatsAppClick("home");
                  window.open("https://wa.me/5531920021799", "_blank");
                  setIsMobileMenuOpen(false);
                }}
                className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground"
              >
                Solicitar Orçamento
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
