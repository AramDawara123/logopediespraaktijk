import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Maria van den Berg",
      role: "Ouder van patiënt",
      text: "Onze dochter had moeite met articulatie en was erg onzeker. Na behandeling bij Spraaktijk is ze veel zelfverzekerder geworden en praat ze veel duidelijker. De logopedisten zijn echt geweldig!",
      rating: 5,
    },
    {
      name: "Jan Pietersen",
      role: "Patiënt",
      text: "Na mijn CVA had ik spraakproblemen. Het team van Spraaktijk heeft me enorm geholpen met professionele en persoonlijke begeleiding. Ik kan nu weer volwaardig communiceren.",
      rating: 5,
    },
    {
      name: "Sophie Dekkers",
      role: "Patiënt",
      text: "Ik had last van stemklachten door mijn werk als docent. De stemtherapie was precies wat ik nodig had. Nu kan ik weer zonder problemen lesgeven. Zeer aan te raden!",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Wat Cliënten Zeggen
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            De tevredenheid van onze cliënten staat voorop
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="border-primary/20 hover:border-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-8">
                <Quote className="w-10 h-10 text-primary/20 mb-4" />
                
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>

                <div className="border-t border-border pt-4">
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-60">
          <div className="text-center">
            <div className="text-2xl font-bold text-foreground mb-1">NVLF</div>
            <div className="text-xs text-muted-foreground">Geregistreerd</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-foreground mb-1">Kwaliteitsregister</div>
            <div className="text-xs text-muted-foreground">Paramedici</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-foreground mb-1">BIG</div>
            <div className="text-xs text-muted-foreground">Geregistreerd</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-foreground mb-1">ISO</div>
            <div className="text-xs text-muted-foreground">Gecertificeerd</div>
          </div>
        </div>
      </div>
    </section>
  );
};