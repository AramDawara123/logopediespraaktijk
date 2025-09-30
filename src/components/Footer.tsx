export const Footer = () => {
  return (
    <footer className="bg-card border-t py-8">
      <div className="container mx-auto px-4">
        <div className="text-center text-muted-foreground">
          <p className="mb-2">
            © {new Date().getFullYear()} Logopedie Spraaktijk. Alle rechten voorbehouden.
          </p>
          <p className="text-sm">
            Geregistreerd bij het Kwaliteitsregister voor Paramedici
          </p>
        </div>
      </div>
    </footer>
  );
};
