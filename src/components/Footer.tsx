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
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo & Info */}
          <div className="space-y-4">
            <img src={logo} alt="Logopedie Spraaktijk" className="h-16" />
            <p className="text-sm text-muted-foreground">
              Logopedie Spraaktijk biedt professionele logopedische behandeling voor zowel kinderen als volwassenen op meerdere locaties in Brabant.
            </p>
          </div>

          {/* Locations */}
          {locations.map((location) => (
            <div key={location.name} className="space-y-3">
              <h3 className="font-semibold text-foreground">{location.name}</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 mt-1 flex-shrink-0 text-primary" />
                  <div>
                    <p>{location.address}</p>
                    <p>{location.postal}</p>
                  </div>
                </div>
                <a href={`tel:${location.phone}`} className="flex items-center gap-2 hover:text-primary transition-colors">
                  <Phone className="h-4 w-4 text-primary" />
                  {location.phone}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Contact & Opening Hours */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8 border-t border-border/50">
          <div className="space-y-3">
            <h3 className="font-semibold text-foreground flex items-center gap-2">
              <Mail className="h-5 w-5 text-primary" />
              Contact
            </h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Voor algemene vragen en aanmeldingen:</p>
              <a href="mailto:info@spraaktijk.nl" className="text-primary hover:underline">
                info@spraaktijk.nl
              </a>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="font-semibold text-foreground flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" />
              Openingstijden
            </h3>
            <div className="space-y-1 text-sm text-muted-foreground">
              <p>Maandag t/m vrijdag: 08:00 - 18:00</p>
              <p>Zaterdag en zondag: Gesloten</p>
              <p className="text-xs pt-2">*Afspraken op afspraak buiten deze tijden mogelijk</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>
              © {new Date().getFullYear()} Logopedie Spraaktijk. Alle rechten voorbehouden.
            </p>
            <div className="flex items-center gap-6">
              <a href="#privacy" className="hover:text-primary transition-colors">Privacy</a>
              <a href="#cookies" className="hover:text-primary transition-colors">Cookies</a>
              <span className="text-xs">
                Geregistreerd bij Kwaliteitsregister Paramedici
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
