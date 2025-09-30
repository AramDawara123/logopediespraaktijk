import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Calendar, Clock, FileText, Trash2, Edit } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface Appointment {
  id: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  date: string;
  time: string;
  notes?: string;
  status: string;
}

const timeSlots = [
  "09:00", "10:00", "11:00", "12:00", 
  "13:00", "14:00", "15:00", "16:00", "17:00"
];

const MyAppointments = () => {
  const navigate = useNavigate();
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [rescheduleAppointment, setRescheduleAppointment] = useState<Appointment | null>(null);
  const [newTime, setNewTime] = useState<string>("");

  useEffect(() => {
    const stored = localStorage.getItem('appointments');
    if (stored) {
      setAppointments(JSON.parse(stored));
    }
  }, []);

  const handleDelete = (id: string) => {
    const updated = appointments.filter(apt => apt.id !== id);
    setAppointments(updated);
    localStorage.setItem('appointments', JSON.stringify(updated));
    toast.success("Afspraak geannuleerd");
    setDeleteId(null);
  };

  const handleReschedule = () => {
    if (!rescheduleAppointment || !newTime) {
      toast.error("Selecteer een nieuwe tijd");
      return;
    }

    const updated = appointments.map(apt => 
      apt.id === rescheduleAppointment.id 
        ? { ...apt, time: newTime }
        : apt
    );
    
    setAppointments(updated);
    localStorage.setItem('appointments', JSON.stringify(updated));
    toast.success("Afspraak verzet naar " + newTime);
    setRescheduleAppointment(null);
    setNewTime("");
  };

  if (appointments.length === 0) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 py-12 px-4">
          <div className="container max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Mijn Afspraken</h1>
            <p className="text-muted-foreground mb-8">U heeft nog geen afspraken geboekt</p>
            <Button onClick={() => navigate("/afspraken-boeken")}>
              Nieuwe Afspraak Boeken
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-12 px-4">
        <div className="container max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-4xl font-bold mb-2">Mijn Afspraken</h1>
              <p className="text-muted-foreground">Beheer uw geplande therapiesessies</p>
            </div>
            <Button onClick={() => navigate("/afspraken-boeken")}>
              Nieuwe Afspraak
            </Button>
          </div>

          <div className="space-y-4">
            {appointments.map((appointment) => (
              <Card key={appointment.id}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>{appointment.service}</CardTitle>
                      <CardDescription>{appointment.name}</CardDescription>
                    </div>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                      {appointment.status}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{appointment.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>{appointment.time}</span>
                    </div>
                    {appointment.notes && (
                      <div className="flex items-start gap-2 text-muted-foreground">
                        <FileText className="h-4 w-4 mt-1" />
                        <span className="text-sm">{appointment.notes}</span>
                      </div>
                    )}
                    
                    <div className="flex gap-2 pt-4 border-t">
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => setRescheduleAppointment(appointment)}
                      >
                        <Edit className="h-4 w-4 mr-2" />
                        Verzetten
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => setDeleteId(appointment.id)}
                      >
                        <Trash2 className="h-4 w-4 mr-2" />
                        Annuleren
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />

      {/* Delete confirmation dialog */}
      <AlertDialog open={!!deleteId} onOpenChange={() => setDeleteId(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Afspraak annuleren?</AlertDialogTitle>
            <AlertDialogDescription>
              Weet u zeker dat u deze afspraak wilt annuleren? Deze actie kan niet ongedaan worden gemaakt.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Terug</AlertDialogCancel>
            <AlertDialogAction onClick={() => deleteId && handleDelete(deleteId)}>
              Ja, annuleer afspraak
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Reschedule dialog */}
      <Dialog open={!!rescheduleAppointment} onOpenChange={() => setRescheduleAppointment(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Afspraak verzetten</DialogTitle>
            <DialogDescription>
              Kies een nieuwe tijd voor uw afspraak op {rescheduleAppointment?.date}
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label>Huidige tijd</Label>
              <div className="px-3 py-2 bg-muted rounded-md">
                {rescheduleAppointment?.time}
              </div>
            </div>

            <div className="space-y-2">
              <Label>Nieuwe tijd *</Label>
              <Select value={newTime} onValueChange={setNewTime}>
                <SelectTrigger>
                  <SelectValue placeholder="Kies een nieuwe tijd" />
                </SelectTrigger>
                <SelectContent>
                  {timeSlots.map((time) => (
                    <SelectItem key={time} value={time}>
                      {time}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setRescheduleAppointment(null)}>
              Annuleren
            </Button>
            <Button onClick={handleReschedule}>
              Afspraak verzetten
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default MyAppointments;
