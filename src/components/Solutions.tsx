import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bot, Droplets, Shield, BarChart3, Activity, MapPin } from "lucide-react";

const Solutions = () => {
  const pillars = [
    {
      title: "Data",
      description: "Real-time collection",
      color: "bg-tech-blue"
    },
    {
      title: "Knowledge", 
      description: "Meaning from data",
      color: "bg-earth-green"
    },
    {
      title: "Wisdom",
      description: "Contextual intelligence", 
      color: "bg-forest-green"
    },
    {
      title: "Action",
      description: "Timely, optimized decisions",
      color: "bg-gradient-primary"
    }
  ];

  const modules = [
    {
      icon: Bot,
      name: "Bhoomi AI",
      description: "24x7 GenAI virtual agri-assistant",
      badge: "AI-Powered"
    },
    {
      icon: Droplets,
      name: "Bhoomi Optimize",
      description: "Water and fertilizer management",
      badge: "Resource Management"
    },
    {
      icon: Shield,
      name: "Bhoomi Protect",
      description: "AI-powered pest management",
      badge: "Crop Protection"
    },
    {
      icon: BarChart3,
      name: "Smart Manager (ERP)",
      description: "Agri-specific operations suite",
      badge: "Operations"
    },
    {
      icon: Activity,
      name: "Ground-0",
      description: "On-farm IoT monitoring",
      badge: "IoT Integration"
    },
    {
      icon: MapPin,
      name: "Local 2.0",
      description: "Micro-climate insights and actions",
      badge: "Climate Tech"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-deep-earth mb-6">
            Solution 2.0 – GenAI-powered Precision Farming
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            A SaaS platform + hardware stack enabling real-time insights, data ownership, automation, and economic & ecological harmony
          </p>
        </div>

        {/* 4 Pillars */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-deep-earth mb-8">4 Pillars of Our Platform</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {pillars.map((pillar, index) => (
              <Card key={index} className={`${pillar.color} text-white shadow-elegant border-0`}>
                <CardContent className="p-6 text-center">
                  <h4 className="text-2xl font-bold mb-2">{pillar.title}</h4>
                  <p className="text-sm opacity-90">{pillar.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Platform Modules */}
        <div>
          <h3 className="text-2xl font-bold text-center text-deep-earth mb-8">Platform Modules</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((module, index) => (
              <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-300 border-0">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="p-3 bg-gradient-primary rounded-lg">
                      <module.icon className="h-6 w-6 text-white" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {module.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl text-deep-earth">{module.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{module.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;