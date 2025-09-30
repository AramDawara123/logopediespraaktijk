import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Heart, TrendingUp } from "lucide-react";
import groupTherapy from "@/assets/group-therapy.jpg";

export const About = () => {
  const stats = [
    {
      icon: Users,
      number: "6",
      label: "Logopedisten",
      description: "Ervaren specialisten",
    },
    {
      icon: Award,
      number: "20+",
      label: "Jaar ervaring",
      description: "Bewezen expertise",
    },
    {
      icon: Heart,
      number: "1000+",
      label: "Tevreden cliënten",
      description: "Per jaar geholpen",
    },
    {
      icon: TrendingUp,
      number: "95%",
      label: "Succesvol",
      description: "Behandelresultaten",
    },
  ];

  return (
    <section className="py-20 bg-muted/30" id="over-ons">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative animate-fade-in-left">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src={groupTherapy} 
                alt="Over Logopedie Spraaktijk" 
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent" />
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-8 -right-8 bg-card p-6 rounded-xl shadow-xl border border-primary/20 animate-float">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-1">95%</div>
                <div className="text-sm text-muted-foreground">Tevredenheid</div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-8 animate-fade-in-right">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Over Logopedie Spraaktijk
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Al meer dan 20 jaar zijn wij hét vertrouwde adres voor logopedische zorg in 
                's-Hertogenbosch en omgeving. Ons team van zes gespecialiseerde logopedisten 
                biedt hoogwaardige zorg voor mensen van alle leeftijden.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We werken volgens de nieuwste wetenschappelijke inzichten en evidence-based 
                methoden. Of het nu gaat om een kind met spraakproblemen, een volwassene met 
                stemklachten of iemand die revalidatie nodig heeft na een CVA - bij ons staat 
                u centraal.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Alle logopedisten zijn geregistreerd bij het Kwaliteitsregister voor Paramedici 
                en volgen regelmatig bij- en nascholing om hun kennis up-to-date te houden.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <Card 
                    key={index}
                    className="border-primary/20 hover:border-primary transition-all duration-300 hover:shadow-lg"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <div className="text-3xl font-bold text-primary mb-1">{stat.number}</div>
                          <div className="font-semibold text-foreground">{stat.label}</div>
                          <div className="text-xs text-muted-foreground">{stat.description}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};