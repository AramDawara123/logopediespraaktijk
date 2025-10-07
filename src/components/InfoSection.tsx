import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Users, Clock, MapPin } from "lucide-react";

export const InfoSection = () => {
  return (
    <section className="py-12 sm:py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-10 md:mb-12">
          <Card className="border-primary/20 hover:border-primary/40 transition-colors">
            <CardHeader>
              <div className="flex items-center gap-2 sm:gap-3 mb-2">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <CardTitle className="text-lg sm:text-xl md:text-2xl">Intake, onderzoek en behandeling</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Logopedische zorg is direct toegankelijk (DTL). Dit betekent dat u in veel gevallen 
                zonder verwijsbrief van uw arts of medisch specialist bij de logopedist terecht kunt. 
                Tijdens de eerste afspraak voert de logopedist dan een korte DTL-screening uit voorafgaand 
                aan het intakegesprek, waarna vastgesteld wordt of logopedisch onderzoek en/of behandeling 
                noodzakelijk is.
              </p>
            </CardContent>
          </Card>

          <Card className="border-primary/20 hover:border-primary/40 transition-colors">
            <CardHeader>
              <div className="flex items-center gap-2 sm:gap-3 mb-2">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <CardTitle className="text-lg sm:text-xl md:text-2xl">Behandelteam</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4">
                Het team van Logopedie Spraaktijk bestaat uit zes enthousiaste logopedisten met 
                ieder een eigen specialisatie.
              </p>
              <a 
                href="#team" 
                className="text-sm sm:text-base text-primary hover:text-primary/80 font-medium inline-flex items-center"
              >
                Wij stellen ons graag aan u voor! →
              </a>
            </CardContent>
          </Card>

          <Card className="border-primary/20 hover:border-primary/40 transition-colors">
            <CardHeader>
              <div className="flex items-center gap-2 sm:gap-3 mb-2">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <CardTitle className="text-lg sm:text-xl md:text-2xl">Openingstijden</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Logopedie Spraaktijk is van <strong>maandag tot en met vrijdag</strong> geopend van{" "}
                <strong>08.00 uur tot 18.00 uur</strong>. Op zaterdag en zondag is de praktijk gesloten. 
                Een avondconsult behoort tot de mogelijkheden.
              </p>
            </CardContent>
          </Card>

          <Card className="border-primary/20 hover:border-primary/40 transition-colors" id="contact">
            <CardHeader>
              <div className="flex items-center gap-2 sm:gap-3 mb-2">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <CardTitle className="text-lg sm:text-xl md:text-2xl">Contact</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4">
                Voor het maken en afzeggen van afspraken is Logopedie Spraaktijk bereikbaar op:
              </p>
              <div className="space-y-2">
                <p className="text-sm sm:text-base font-medium">
                  Telefoonnummer: <a href="tel:0736442967" className="text-primary hover:underline">073-6442967</a>
                </p>
                <p className="text-sm sm:text-base font-medium">
                  E-mailadres: <a href="mailto:info@spraaktijk.nl" className="text-primary hover:underline">info@spraaktijk.nl</a>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="border-primary/20">
          <CardHeader>
            <CardTitle className="text-lg sm:text-xl md:text-2xl">Kwaliteit</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              De logopedisten van Spraaktijk Logopedie werken volgens de richtlijnen van de Nederlandse 
              Vereniging voor Logopedie en Foniatrie (NVLF). Daarbij staan alle logopedisten ingeschreven 
              in het Kwaliteitsregister voor Paramedici, een register waarin geregistreerd wordt of voldaan 
              wordt aan de opleidingseisen van de Wet BIG (Beroepen in de Individuele Gezondheidszorg) én 
              waarin elke vijf jaar wordt getoetst of de logopedist beschikt over voldoende werkervaring en 
              actuele kennis.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
