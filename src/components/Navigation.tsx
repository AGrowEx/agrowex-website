import { Button } from "@/components/ui/button";

const Navigation = () => {
  const navItems = [
    { label: "Solutions", href: "#solutions" },
    { label: "Journey", href: "#journey" },
    { label: "Team", href: "#team" },
    { label: "Business", href: "#business" }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/98 backdrop-blur-md border-b border-border shadow-card">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img 
              src="/lovable-uploads/ac71843d-6b3e-45d1-bd24-263272620930.png" 
              alt="AGX Global Logo" 
              className="h-10 w-auto"
            />
            <div>
              <div className="font-bold text-brand-dark text-xl tracking-tight">AGX Global</div>
              <div className="text-xs text-muted-foreground font-medium">Xcelerating Agriculture</div>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a 
                key={item.label}
                href={item.href}
                className="text-brand-dark hover:text-brand-primary transition-colors font-medium"
              >
                {item.label}
              </a>
            ))}
          </div>
          
          <Button variant="professional" size="sm" className="font-medium">
            Contact Us
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;