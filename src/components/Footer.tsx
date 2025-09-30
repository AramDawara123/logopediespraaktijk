import { MapPin, Phone, Mail, Clock } from "lucide-react";
import logo from "@/assets/logo.png";

export const Footer = () => {
  const locations = [
    {
      name: "Den Bosch",
      address: "Helftheuvelpassage 4-6",
      postal: "5211 CJ 's-Hertogenbosch",
      phone: "073-6213377",
    },
    {
      name: "Rosmalen",
      address: "Korenmolenstraat 13",
      postal: "5246 AB Rosmalen",
      phone: "073-5216340",
    },
    {
      name: "Veghel",
      address: "Schepenstraat 2",
      postal: "5461 JH Veghel",
      phone: "0413-369585",
    },
  ];

  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 mb-10">
          {/* Brand Section */}
          <div className="space-y-4 lg:col-span-1">
            <img src={logo} alt="Logopedie Spraaktijk" className="h-14" />
            <p className="text-sm text-muted-foreground leading-relaxed">
              Professionele logopedische behandeling voor kinderen en volwassenen.
            </p>
            <div className="pt-2 space-y-2">
              <a href="mailto:info@spraaktijk.nl" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-4 w-4" />
                info@spraaktijk.nl
              </a>
              <div className="flex items-start gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <div>
                  <p>Ma - Vr: 08:00 - 18:00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Locations */}
          <div className="lg:col-span-3">
            <h3 className="font-semibold text-foreground mb-6">Onze Locaties</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {locations.map((location) => (
                <div key={location.name} className="space-y-2">
                  <h4 className="font-medium text-foreground">{location.name}</h4>
                  <div className="space-y-1.5 text-sm text-muted-foreground">
                    <div className="flex items-start gap-2">
                      <MapPin className="h-3.5 w-3.5 mt-1 flex-shrink-0 text-primary" />
                      <div className="leading-relaxed">
                        <p>{location.address}</p>
                        <p>{location.postal}</p>
                      </div>
                    </div>
                    <a 
                      href={`tel:${location.phone.replace(/\s/g, '')}`} 
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
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
            <p>
              © {new Date().getFullYear()} Logopedie Spraaktijk. Alle rechten voorbehouden.
            </p>
            <div className="flex items-center gap-6">
              <span>Geregistreerd bij Kwaliteitsregister Paramedici</span>
              <a href="#privacy" className="hover:text-primary transition-colors">Privacy</a>
              <a href="#cookies" className="hover:text-primary transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
