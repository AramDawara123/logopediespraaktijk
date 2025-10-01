import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone } from "lucide-react";

export default function Team() {
  const teamMembers = [
    {
      name: "Ilse van der Wee",
      email: "ilse@spraaktijk.nl",
      phone: "073 6442 967",
      image: "https://www.logopediedenbosch.nl/wp-content/uploads/2020/03/ilsevanderwee.jpg"
    },
    {
      name: "Yvonne van Zoggel",
      email: "yvonne@spraaktijk.nl",
      phone: "06 3191 6494",
      image: "https://www.logopediedenbosch.nl/wp-content/uploads/2020/03/yvonnevanzoggel.jpg"
    },
    {
      name: "Anke de Boeije",
      email: "anke@spraaktijk.nl",
      phone: "06 2003 9726",
      image: "https://www.logopediedenbosch.nl/wp-content/uploads/2021/12/anke_squared.png"
    },
    {
      name: "Mandy Houben",
      email: "mandy@spraaktijk.nl",
      phone: "06 1086 2994",
      image: "https://www.logopediedenbosch.nl/wp-content/uploads/2023/05/Mandy-300x297.jpg"
    },
    {
      name: "Brettney Brekelmans",
      email: "brettney@spraaktijk.nl",
      phone: "06 8377 1992",
      image: "https://www.logopediedenbosch.nl/wp-content/uploads/2022/10/Brettney-300x300.jpg"
    },
    {
      name: "Lotte van Seters",
      email: "lotte@spraaktijk.nl",
      phone: "06 3191 6496",
      image: "https://www.logopediedenbosch.nl/wp-content/uploads/2025/09/Lotte-150x150.jpg"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Ons Behandelteam
              </h1>
              <p className="text-lg text-muted-foreground">
                Het team van Logopedie Spraaktijk bestaat uit zes enthousiaste logopedisten met ieder een eigen specialisatie. Wij stellen ons graag aan u voor!
              </p>
            </div>
          </div>
        </section>

        {/* Team Members Grid */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <Card 
                  key={index} 
                  className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4 text-foreground">
                      {member.name}
                    </h3>
                    <div className="space-y-3">
                      <a
                        href={`mailto:${member.email}`}
                        className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group/email"
                      >
                        <Mail className="h-4 w-4 group-hover/email:scale-110 transition-transform" />
                        <span className="text-sm">{member.email}</span>
                      </a>
                      <a
                        href={`tel:${member.phone.replace(/\s/g, '')}`}
                        className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group/phone"
                      >
                        <Phone className="h-4 w-4 group-hover/phone:scale-110 transition-transform" />
                        <span className="text-sm">{member.phone}</span>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
