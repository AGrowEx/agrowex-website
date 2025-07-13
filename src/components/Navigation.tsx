import { Button } from "@/components/ui/button";
import { Leaf } from "lucide-react";

const Navigation = () => {
  const navItems = [
    { label: "Solutions", href: "#solutions" },
    { label: "Journey", href: "#journey" },
    { label: "Team", href: "#team" },
    { label: "Business", href: "#business" }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-primary rounded-lg">
              <Leaf className="h-6 w-6 text-white" />
            </div>
            <div>
              <div className="font-bold text-deep-earth text-xl">AGX Global</div>
              <div className="text-xs text-muted-foreground">Xcelerating Agriculture</div>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a 
                key={item.label}
                href={item.href}
                className="text-deep-earth hover:text-earth-green transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
          
          <Button variant="earth" size="sm">
            Contact Us
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;