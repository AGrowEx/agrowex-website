import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Bot, Droplets, Shield, BarChart3, Activity, MapPin } from "lucide-react";

const Solutions = () => {
  const pillars = [
    {
      title: "Data",
      description: "Real-time collection",
      color: "bg-brand-accent"
    },
    {
      title: "Knowledge", 
      description: "Meaning from data",
      color: "bg-brand-primary"
    },
    {
      title: "Wisdom",
      description: "Contextual intelligence", 
      color: "bg-brand-secondary"
    },
    {
      title: "Action",
      description: "Timely, optimized decisions",
      color: "bg-gradient-brand"
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

  const solutions = [
    {
      icon: Droplets,
      title: "Save resources",
      description: "Using sensors and satellites xFarm advises you how to optimize irrigation, defense and fertilization."
    },
    {
      icon: Activity,
      title: "Monitoring field information", 
      description: "Optimize your irrigation strategy, protect your crops and manage your farm machinery with a simple tap on the screen."
    },
    {
      icon: BarChart3,
      title: "Organize your work",
      description: "Invite your employees to xFarm to plan and monitor activities easily and efficiently."
    },
    {
      icon: Shield,
      title: "Increase sustainability",
      description: "With xFarm it will be easy to monitor and improve the sustainability of your farm."
    }
  ];

  return (
    <section className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            A platform you can trust
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Everything you need to optimize your farm operations in one powerful platform
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((solution, index) => (
            <div key={index} className="text-center group">
              <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300">
                <solution.icon className="w-10 h-10 text-brand-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{solution.title}</h3>
              <p className="text-gray-600 leading-relaxed">{solution.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <Button size="lg" className="bg-brand-primary hover:bg-brand-primary/90 text-white px-8 py-4 text-lg font-medium">
            Discover the offerings
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Solutions;