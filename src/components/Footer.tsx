import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

export const Footer = () => {
  const locations = [
    {
      name: "Medisch Centrum De Rompertsebaan",
      address: "Frans Fransenstraat 1",
      postal: "5231 MG 's-Hertogenbosch",
      phone: "073-643 34 00",
    },
    {
      name: "Gezondheidscentrum San Salvator",
      address: "Schaarhuisstraat 14",
      postal: "5231 PV 's-Hertogenbosch",
      phone: "073-643 34 00",
    },
    {
      name: "Medisch Centrum Boschveld",
      address: "Copernicuslaan 301",
      postal: "5223 EH 's-Hertogenbosch",
      phone: "073-643 34 00",
    },
    {
      name: "Kindertherapeuten 's-Hertogenbosch",
      address: "Churchill-laan 84",
      postal: "5224 BW 's-Hertogenbosch",
      phone: "073-643 34 00",
    },
  ];

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Diensten", path: "/#services" },
    { name: "Over Ons", path: "/#about" },
    { name: "Behandelteam", path: "/behandelteam" },
    { name: "Afspraak Maken", path: "/book-appointment" },
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-4 space-y-6">
            <img src={logo} alt="Logopedie Spraaktijk" className="h-16 bg-white rounded-lg p-2" />
            <p className="text-sm text-secondary-foreground/80 leading-relaxed">
              Professionele logopedische behandeling voor kinderen en volwassenen in 's-Hertogenbosch. 
              Geregistreerd bij het Kwaliteitsregister Paramedici.
            </p>
            <div className="space-y-3">
              <a 
                href="mailto:info@logopediedenbosch.nl" 
                className="flex items-center gap-3 text-sm text-secondary-foreground/90 hover:text-primary transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="h-4 w-4 text-primary" />
                </div>
                <span>info@logopediedenbosch.nl</span>
              </a>
              <a 
                href="tel:073-6433400" 
                className="flex items-center gap-3 text-sm text-secondary-foreground/90 hover:text-primary transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone className="h-4 w-4 text-primary" />
                </div>
                <span>073 - 643 34 00</span>
              </a>
              <div className="flex items-start gap-3 text-sm text-secondary-foreground/80">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Clock className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-secondary-foreground/90">Openingstijden</p>
                  <p>Maandag t/m vrijdag</p>
                  <p>08:30 - 17:00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="font-semibold text-secondary-foreground mb-6 text-lg">Navigatie</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div className="lg:col-span-6">
            <h3 className="font-semibold text-secondary-foreground mb-6 text-lg">Onze Locaties</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {locations.map((location, index) => (
                <div 
                  key={index} 
                  className="space-y-2 p-4 rounded-lg bg-secondary-foreground/5 hover:bg-secondary-foreground/10 transition-colors"
                >
                  <h4 className="font-medium text-secondary-foreground text-sm">{location.name}</h4>
                  <div className="space-y-1.5 text-xs text-secondary-foreground/70">
                    <div className="flex items-start gap-2">
                      <MapPin className="h-3.5 w-3.5 mt-0.5 flex-shrink-0 text-primary" />
                      <div className="leading-relaxed">
                        <p>{location.address}</p>
                        <p>{location.postal}</p>
                      </div>
                    </div>
                    <a 
                      href={`tel:${location.phone.replace(/[\s-]/g, '')}`} 
                      className="flex items-center gap-2 hover:text-primary transition-colors"
                    >
                      <Phone className="h-3.5 w-3.5 text-primary" />
                      {location.phone}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-secondary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-secondary-foreground/60">
            <p>
              © {new Date().getFullYear()} Logopedie Spraaktijk. Alle rechten voorbehouden.
            </p>
            <div className="flex items-center gap-6">
              <span>KvK: 12345678</span>
              <a href="#privacy" className="hover:text-primary transition-colors">Privacy</a>
              <a href="#cookies" className="hover:text-primary transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
