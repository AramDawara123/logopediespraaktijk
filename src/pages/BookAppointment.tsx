import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const services = [
  "Individuele therapie voor volwassenen",
  "Kinder- en jeugdtherapie",
  "Relatietherapie",
  "Groepstherapie",
  "Online sessies"
];

const timeSlots = [
  "09:00", "10:00", "11:00", "12:00", 
  "13:00", "14:00", "15:00", "16:00", "17:00"
];

const BookAppointment = () => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [selectedService, setSelectedService] = useState<string>("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    notes: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedDate || !selectedTime || !selectedService) {
      toast.error("Vul alle verplichte velden in");
      return;
    }

    // Simuleer afspraak opslaan
    const appointment = {
      id: Date.now().toString(),
      ...formData,
      service: selectedService,
      date: selectedDate.toLocaleDateString('nl-NL'),
      time: selectedTime,
      status: "bevestigd"
    };

    // Bewaar in localStorage
    const existing = JSON.parse(localStorage.getItem('appointments') || '[]');
    localStorage.setItem('appointments', JSON.stringify([...existing, appointment]));

    toast.success("Afspraak succesvol geboekt!");
    navigate("/mijn-afspraken");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-12 px-4">
        <div className="container max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-2 text-foreground">Afspraak Boeken</h1>
          <p className="text-muted-foreground mb-8">Plan uw therapiesessie bij Psychologenpraktijk Weert</p>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Persoonlijke gegevens */}
            <div className="bg-card border rounded-lg p-6 space-y-4">
              <h2 className="text-xl font-semibold mb-4">Persoonlijke Gegevens</h2>
              
              <div className="space-y-2">
                <Label htmlFor="name">Naam *</Label>
                <Input
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="Uw volledige naam"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="uw@email.nl"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Telefoonnummer *</Label>
                <Input
                  id="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  placeholder="06-12345678"
                />
              </div>
            </div>

            {/* Service selectie */}
            <div className="bg-card border rounded-lg p-6 space-y-4">
              <h2 className="text-xl font-semibold mb-4">Type Behandeling</h2>
              <div className="space-y-2">
                <Label>Selecteer behandeling *</Label>
                <Select value={selectedService} onValueChange={setSelectedService}>
                  <SelectTrigger>
                    <SelectValue placeholder="Kies een behandeling" />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map((service) => (
                      <SelectItem key={service} value={service}>
                        {service}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Datum en tijd */}
            <div className="bg-card border rounded-lg p-6 space-y-4">
              <h2 className="text-xl font-semibold mb-4">Datum & Tijd</h2>
              
              <div className="space-y-2">
                <Label>Selecteer datum *</Label>
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  disabled={(date) => date < new Date() || date.getDay() === 0 || date.getDay() === 6}
                  className="rounded-md border w-fit"
                />
              </div>

              {selectedDate && (
                <div className="space-y-2">
                  <Label>Selecteer tijd *</Label>
                  <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                    {timeSlots.map((time) => (
                      <Button
                        key={time}
                        type="button"
                        variant={selectedTime === time ? "default" : "outline"}
                        onClick={() => setSelectedTime(time)}
                      >
                        {time}
                      </Button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Extra notities */}
            <div className="bg-card border rounded-lg p-6 space-y-4">
              <h2 className="text-xl font-semibold mb-4">Extra Informatie</h2>
              <div className="space-y-2">
                <Label htmlFor="notes">Opmerkingen (optioneel)</Label>
                <Textarea
                  id="notes"
                  value={formData.notes}
                  onChange={(e) => setFormData({...formData, notes: e.target.value})}
                  placeholder="Heeft u specifieke vragen of wensen?"
                  rows={4}
                />
              </div>
            </div>

            {/* Submit buttons */}
            <div className="flex gap-4">
              <Button type="submit" size="lg" className="flex-1">
                Afspraak Bevestigen
              </Button>
              <Button type="button" variant="outline" size="lg" onClick={() => navigate("/")}>
                Annuleren
              </Button>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BookAppointment;
