import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";
export const Hero = () => {
  const benefits = ["Direct toegankelijk zonder verwijzing", "6 gespecialiseerde logopedisten", "Voor kinderen én volwassenen", "Geregistreerd bij Kwaliteitsregister"];
  return <section className="relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center" style={{
      backgroundImage: `url(${heroBackground})`
    }}>
        <div className="absolute inset-0 bg-background/40" />
      </div>

      {/* Animated Pattern Overlay */}
      <div className="absolute inset-0 opacity-5" style={{
      backgroundImage: `repeating-linear-gradient(
            45deg,
            hsl(var(--primary)) 0px,
            hsl(var(--primary)) 2px,
            transparent 2px,
            transparent 12px
          )`
    }} />
      
      <div className="container mx-auto px-4 py-12 sm:py-16 md:py-24 lg:py-32 relative z-10">
        <div className="max-w-4xl animate-fade-in">
          
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-4 sm:mb-6 leading-tight">
            Professionele Logopedie in{" "}
            <span className="text-primary">'s-Hertogenbosch</span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 leading-relaxed text-black">
            Hoogwaardige logopedische zorg voor mensen van alle leeftijden. Van spraak- en 
            taalproblemen tot stem- en slikstoornissen.
          </p>

          {/* Benefits List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-8 sm:mb-10">
            {benefits.map((benefit, index) => <div key={index} className="flex items-center gap-2 sm:gap-3 animate-fade-in-left" style={{
            animationDelay: `${index * 100}ms`
          }}>
                <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
                <span className="text-foreground font-medium text-sm sm:text-base">{benefit}</span>
              </div>)}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 shadow-lg hover:shadow-xl transition-all group">
              <a href="#contact" className="flex items-center gap-2">
                Maak een afspraak
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            
            <Button asChild size="lg" variant="outline" className="border-2 font-semibold text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 hover:bg-primary/5">
              <a href="#diensten">Bekijk diensten</a>
            </Button>
          </div>

          <div className="flex gap-3">
            <a href="https://www.linkedin.com/company/logopedie-spraaktijk" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center bg-primary/10 hover:bg-primary/20 rounded-full transition-colors" aria-label="LinkedIn">
              <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a href="https://www.facebook.com/Spraaktijk" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center bg-primary/10 hover:bg-primary/20 rounded-full transition-colors" aria-label="Facebook">
              <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </a>
            <a href="https://twitter.com/spraaktijk" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center bg-primary/10 hover:bg-primary/20 rounded-full transition-colors" aria-label="Twitter">
              <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>;
};