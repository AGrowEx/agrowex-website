import { Button } from "@/components/ui/button";

const Navigation = () => {
  const navItems = [
    { label: "Solutions", href: "#solutions" },
    { label: "Bhoomi", href: "#bhoomi" },
    { label: "Journey", href: "#journey" },
    { label: "Team", href: "#team" },
    { label: "Business", href: "#business" }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src="/lovable-uploads/ac71843d-6b3e-45d1-bd24-263272620930.png" 
              alt="AGX Global Logo" 
              className="h-8 w-auto"
            />
            <span className="text-2xl font-bold text-gray-800">AGX Global</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a 
                key={item.label}
                href={item.href}
                className="text-gray-600 hover:text-brand-primary transition-colors font-medium text-sm"
              >
                {item.label}
              </a>
            ))}
          </div>
          
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-500">EN</span>
            <Button className="bg-brand-primary hover:bg-brand-primary/90 text-white font-medium px-6">
              Sign in
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;