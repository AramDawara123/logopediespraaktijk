import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Baby, Users2, GraduationCap, Mic2, Brain, HeartPulse } from "lucide-react";
import childTherapy from "@/assets/child-therapy.jpg";
import adultTherapy from "@/assets/adult-therapy.jpg";

export const Services = () => {
  const services = [
    {
      icon: Baby,
      title: "Kinderen",
      description: "Spraak- en taalontwikkeling, articulatie, stotteren, stampen en dyslexie",
    },
    {
      icon: Users2,
      title: "Volwassenen",
      description: "Stemklachten, afasie, dysartrie en slikstoornissen",
    },
    {
      icon: Brain,
      title: "Cognitieve problemen",
      description: "Geheugen, concentratie en taalverwerking",
    },
    {
      icon: Mic2,
      title: "Stemtherapie",
      description: "Stemproblemen door overbelasting of spanningen",
    },
    {
      icon: HeartPulse,
      title: "Sliktherapie",
      description: "Behandeling van eet- en drinkproblemen",
    },
    {
      icon: GraduationCap,
      title: "Training & Advies",
      description: "Workshops en voorlichting voor scholen en bedrijven",
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-background" id="diensten">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 sm:mb-12 md:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 sm:mb-4">
            Onze Diensten
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Professionele logopedische zorg voor alle leeftijden en stoornissen
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-10 sm:mb-12 md:mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index}
                className="border-primary/20 hover:border-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate-fade-in group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Image Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mt-10 sm:mt-12 md:mt-16">
          <div className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-2xl group animate-fade-in-left">
            <img 
              src={childTherapy} 
              alt="Logopedie voor kinderen" 
              className="w-full h-[250px] sm:h-[300px] md:h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-4 sm:p-6 md:p-8">
              <div className="text-white">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2">Logopedie voor Kinderen</h3>
                <p className="text-white/90 text-sm sm:text-base">Speelse en effectieve behandeling in een veilige omgeving</p>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-2xl group animate-fade-in-right">
            <img 
              src={adultTherapy} 
              alt="Logopedie voor volwassenen" 
              className="w-full h-[250px] sm:h-[300px] md:h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent flex items-end p-4 sm:p-6 md:p-8">
              <div className="text-white">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2">Logopedie voor Volwassenen</h3>
                <p className="text-white/90 text-sm sm:text-base">Professionele begeleiding bij stem-, spraak- en taalklachten</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};