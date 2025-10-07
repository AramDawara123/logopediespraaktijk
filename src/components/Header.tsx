import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.jpg";
import teamPhoto from "@/assets/team-photo.jpg";
export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = [{
    label: "Over Ons",
    href: "#over-ons"
  }, {
    label: "Behandelteam",
    href: "/behandelteam",
    isRoute: true
  }, {
    label: "Kinderen",
    href: "#kinderen"
  }, {
    label: "Volwassenen",
    href: "#volwassenen"
  }, {
    label: "Training",
    href: "#training"
  }, {
    label: "Afspraak Boeken",
    href: "/afspraken-boeken",
    isRoute: true
  }, {
    label: "Mijn Afspraken",
    href: "/mijn-afspraken",
    isRoute: true
  }, {
    label: "Contact",
    href: "#contact"
  }];
  return <header className="bg-card border-b sticky top-0 z-50 shadow-lg backdrop-blur-sm bg-card/95">
      {/* Top Bar */}
      <div className="border-b border-border/50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-2 text-xs sm:text-sm">
            <div className="flex items-center gap-2 sm:gap-4">
              <a href="tel:073-6213377" className="flex items-center gap-1 sm:gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Phone className="h-3 w-3 sm:h-4 sm:w-4" />
                <span className="hidden xs:inline">073-6213377</span>
              </a>
              <a href="mailto:info@spraaktijk.nl" className="flex items-center gap-1 sm:gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-3 w-3 sm:h-4 sm:w-4" />
                <span className="hidden xs:inline">info@spraaktijk.nl</span>
              </a>
            </div>
            <div className="text-muted-foreground text-[10px] xs:text-xs hidden sm:block">
              Geregistreerd bij Kwaliteitsregister Paramedici
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center transition-transform hover:scale-105 duration-300">
            <img src={logo} alt="Logopedie Spraaktijk" className="h-12 sm:h-16 md:h-20" />
          </Link>

          {/* Team Photo - Hidden on mobile */}
          

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map(item => item.isRoute ? (
              <Link key={item.label} to={item.href} className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-primary/5 rounded-md transition-all duration-200">
                {item.label}
              </Link>
            ) : (
              <a key={item.label} href={item.href} className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-primary/5 rounded-md transition-all duration-200">
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2 hover:bg-primary/10 rounded-md transition-colors" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && <nav className="lg:hidden pb-4 space-y-2 animate-fade-in">
            {navItems.map(item => item.isRoute ? (
              <Link key={item.label} to={item.href} className="block text-sm font-medium text-foreground hover:text-primary hover:bg-primary/5 rounded-md transition-all py-3 px-3" onClick={() => setIsMenuOpen(false)}>
                {item.label}
              </Link>
            ) : (
              <a key={item.label} href={item.href} className="block text-sm font-medium text-foreground hover:text-primary hover:bg-primary/5 rounded-md transition-all py-3 px-3" onClick={() => setIsMenuOpen(false)}>
                {item.label}
              </a>
            ))}
          </nav>}
      </div>
    </header>;
};