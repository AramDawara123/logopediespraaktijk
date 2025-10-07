import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin } from "lucide-react";

const locations = [
  {
    name: "Medisch Centrum De Rompertsebaan",
    address: "Frans Fransenstraat 1",
    zip: "5231 MG",
    city: "'s-Hertogenbosch",
  },
  {
    name: "Gezondheidscentrum San Salvator",
    address: "Schaarhuisstraat 14",
    zip: "5231 PV",
    city: "'s-Hertogenbosch",
  },
  {
    name: "Medisch Centrum Boschveld",
    address: "Copernicuslaan 301",
    zip: "5223 EH",
    city: "'s-Hertogenbosch",
  },
  {
    name: "Kindertherapeuten 's-Hertogenbosch",
    address: "Churchill-laan 84",
    zip: "5224 BW",
    city: "'s-Hertogenbosch",
  },
];

export const Locations = () => {
  return (
    <section className="py-12 sm:py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
            Onze Locaties
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Logopedie Spraaktijk is op vier locaties in 's-Hertogenbosch gevestigd
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {locations.map((location, index) => (
            <Card 
              key={index}
              className="border-primary/20 hover:border-primary/40 transition-all hover:shadow-lg"
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-lg">{location.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <address className="not-italic text-muted-foreground space-y-1">
                  <p>{location.address}</p>
                  <p>{location.zip} {location.city}</p>
                </address>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
