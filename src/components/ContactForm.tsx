import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, Send } from "lucide-react";

const contactSchema = z.object({
  name: z.string().trim().min(1, { message: "Naam is verplicht" }).max(100, { message: "Naam moet korter zijn dan 100 karakters" }),
  email: z.string().trim().email({ message: "Ongeldig e-mailadres" }).max(255, { message: "E-mail moet korter zijn dan 255 karakters" }),
  phone: z.string().trim().min(1, { message: "Telefoonnummer is verplicht" }).max(20, { message: "Telefoonnummer moet korter zijn dan 20 karakters" }),
  message: z.string().trim().min(1, { message: "Bericht is verplicht" }).max(1000, { message: "Bericht moet korter zijn dan 1000 karakters" }),
});

type ContactFormData = z.infer<typeof contactSchema>;

export const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      toast({
        title: "Bericht verzonden!",
        description: "We nemen zo spoedig mogelijk contact met u op.",
      });
      reset();
    } catch (error) {
      toast({
        title: "Er is iets misgegaan",
        description: "Probeer het later opnieuw of neem telefonisch contact op.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Contact
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Heeft u een vraag of wilt u een afspraak maken? Vul het formulier in en we nemen zo spoedig mogelijk contact met u op.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle>Neem contact op</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Naam *</Label>
                  <Input
                    id="name"
                    {...register("name")}
                    placeholder="Uw naam"
                  />
                  {errors.name && (
                    <p className="text-sm text-destructive">{errors.name.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">E-mailadres *</Label>
                  <Input
                    id="email"
                    type="email"
                    {...register("email")}
                    placeholder="uw.email@voorbeeld.nl"
                  />
                  {errors.email && (
                    <p className="text-sm text-destructive">{errors.email.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Telefoonnummer *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    {...register("phone")}
                    placeholder="06 12345678"
                  />
                  {errors.phone && (
                    <p className="text-sm text-destructive">{errors.phone.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Bericht *</Label>
                  <Textarea
                    id="message"
                    {...register("message")}
                    placeholder="Uw bericht..."
                    rows={5}
                  />
                  {errors.message && (
                    <p className="text-sm text-destructive">{errors.message.message}</p>
                  )}
                </div>

                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  <Send className="w-4 h-4 mr-2" />
                  {isSubmitting ? "Verzenden..." : "Verstuur bericht"}
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="border-primary/20">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Bel ons</CardTitle>
              </CardHeader>
              <CardContent>
                <a href="tel:073-6433400" className="text-lg text-primary hover:underline">
                  073 - 643 34 00
                </a>
                <p className="text-sm text-muted-foreground mt-2">
                  Maandag t/m vrijdag: 8:30 - 17:00
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-lg">E-mail</CardTitle>
              </CardHeader>
              <CardContent>
                <a href="mailto:info@logopediedenbosch.nl" className="text-lg text-primary hover:underline break-all">
                  info@logopediedenbosch.nl
                </a>
                <p className="text-sm text-muted-foreground mt-2">
                  We reageren binnen 24 uur
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
