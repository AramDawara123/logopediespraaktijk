import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Users, Clock, MapPin } from "lucide-react";

export const InfoSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="border-primary/20 hover:border-primary/40 transition-colors">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">Intake, onderzoek en behandeling</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
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
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">Behandelteam</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Het team van Logopedie Spraaktijk bestaat uit zes enthousiaste logopedisten met 
                ieder een eigen specialisatie.
              </p>
              <a 
                href="#team" 
                className="text-primary hover:text-primary/80 font-medium inline-flex items-center"
              >
                Wij stellen ons graag aan u voor! →
              </a>
            </CardContent>
          </Card>

          <Card className="border-primary/20 hover:border-primary/40 transition-colors">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">Openingstijden</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Logopedie Spraaktijk is van <strong>maandag tot en met vrijdag</strong> geopend van{" "}
                <strong>08.00 uur tot 18.00 uur</strong>. Op zaterdag en zondag is de praktijk gesloten. 
                Een avondconsult behoort tot de mogelijkheden.
              </p>
            </CardContent>
          </Card>

          <Card className="border-primary/20 hover:border-primary/40 transition-colors" id="contact">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">Contact</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Voor het maken en afzeggen van afspraken is Logopedie Spraaktijk bereikbaar op:
              </p>
              <div className="space-y-2">
                <p className="font-medium">
                  Telefoonnummer: <a href="tel:0736442967" className="text-primary hover:underline">073-6442967</a>
                </p>
                <p className="font-medium">
                  E-mailadres: <a href="mailto:info@spraaktijk.nl" className="text-primary hover:underline">info@spraaktijk.nl</a>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="border-primary/20">
          <CardHeader>
            <CardTitle className="text-2xl">Kwaliteit</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">
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
