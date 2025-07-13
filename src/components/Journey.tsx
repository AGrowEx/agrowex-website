import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, TrendingUp, Globe, Beaker } from "lucide-react";

const Journey = () => {
  const timeline = [
    {
      period: "2019–Present",
      title: "8-hectare pilot farm, tech-automated",
      icon: Beaker,
      status: "completed"
    },
    {
      period: "2022–23",
      title: "MVP launch (Bhoomi 1.0) in 3 Indian states",
      icon: TrendingUp,
      status: "completed"
    },
    {
      period: "2024",
      title: "Expansion to India, Africa & Australia (Bhoomi 2.0)",
      icon: Globe,
      status: "current"
    }
  ];

  const outcomes = [
    { metric: "15", label: "Crops tested", color: "text-brand-primary" },
    { metric: "12,000+", label: "Man-days digitized", color: "text-brand-accent" },
    { metric: "15%", label: "Water usage reduction", color: "text-brand-secondary" },
    { metric: "25%", label: "Fertilizer usage drop", color: "text-brand-primary" },
    { metric: "Higher", label: "Per hectare yield", color: "text-brand-secondary" }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-brand-dark mb-6">
            Our Journey
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From pilot farm to global expansion - delivering measurable results
          </p>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div key={index} className="flex items-center gap-6">
                <div className="flex-shrink-0">
                  <div className={`p-4 rounded-full shadow-brand ${
                    item.status === 'current' ? 'bg-gradient-brand' : 'bg-brand-primary'
                  }`}>
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <Card className="flex-1 shadow-card border-0 bg-gradient-card hover:shadow-elevated transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl text-brand-dark font-semibold">{item.period}</CardTitle>
                      <Badge variant={item.status === 'current' ? 'default' : 'secondary'} className="font-medium">
                        {item.status === 'current' ? 'Current' : 'Completed'}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-lg">{item.title}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Pilot Outcomes */}
        <Card className="bg-white shadow-elevated border-0">
          <CardHeader>
            <CardTitle className="text-3xl text-center text-brand-dark mb-8 font-bold">
              Pilot Outcomes
            </CardTitle>
          </CardHeader>
          <CardContent className="pb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {outcomes.map((outcome, index) => (
                <div key={index} className="text-center p-6 rounded-xl bg-gradient-card">
                  <div className={`text-4xl font-bold mb-3 ${outcome.color}`}>
                    {outcome.metric}
                  </div>
                  <div className="text-muted-foreground font-medium">
                    {outcome.label}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Journey;