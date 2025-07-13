import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, TrendingDown, Users, Leaf } from "lucide-react";

const Problems = () => {
  const problems = [
    {
      icon: TrendingDown,
      title: "Decreasing Productivity",
      description: "Yield per hectare and quality are decreasing despite rising costs due to climate, soil, and water issues"
    },
    {
      icon: Users,
      title: "Traditional Practices",
      description: "Growers still use traditional practices and outdated decision-making processes"
    },
    {
      icon: AlertTriangle,
      title: "Poor User Experience",
      description: "Existing tech is not farmer-first, low-trust, with weak UX and adoption barriers"
    },
    {
      icon: Leaf,
      title: "Sustainability Gap",
      description: "Sustainable/organic/regenerative farming needs convergence with productivity and economic gains"
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-brand-dark mb-6">
            Problems Today
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Agriculture faces critical challenges that demand innovative solutions
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {problems.map((problem, index) => (
            <Card key={index} className="shadow-card border-0 hover:shadow-elevated transition-all duration-300 bg-gradient-card">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-brand rounded-xl shadow-brand">
                    <problem.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl text-brand-dark font-semibold">{problem.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{problem.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <Card className="bg-brand-dark text-white shadow-elevated">
          <CardHeader>
            <CardTitle className="text-2xl text-center font-semibold">What keeps a farmer up at night:</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center">
              <p className="text-xl font-light mb-4 text-brand-secondary">Nature, Science, Resources</p>
              <p className="text-lg opacity-90">Weather • Soil • Water • Yield • Quality • Cost</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Problems;