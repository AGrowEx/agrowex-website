import { motion } from "framer-motion";
import { Shield, Users, MapPin, TrendingUp, Database } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const DashboardPreviewSolutions = () => {
  const solutions = [
    {
      id: "protect",
      icon: Shield,
      title: "Bhoomi Protect",
      subtitle: "AI Pest Management",
      description: "AI-augmented Integrated Pest Management (IPM) system that provides early detection, organic treatment recommendations, and preventive care strategies.",
      features: ["Computer vision for pest detection", "Organic treatment recommendations", "Disease prediction models", "Preventive care scheduling"],
      color: "bg-gradient-to-br from-green-500 to-green-600",
      badge: "AI-Powered",
      mockup: "/bhoomi/bhoomi_dashboard.png"
    },
    {
      id: "smart-manager",
      icon: Users,
      title: "Smart Manager",
      subtitle: "Agriculture ERP Suite",
      description: "Comprehensive Enterprise Resource Planning suite tailored specifically for agricultural operations, managing everything from inventory to labor.",
      features: ["Farm inventory management", "Labor scheduling & payroll", "Financial tracking & reporting", "Supply chain optimization"],
      color: "bg-gradient-to-br from-blue-500 to-blue-600",
      badge: "ERP Solution",
      mockup: "/bhoomi/bhoomi_dashboard.png"
    },
    {
      id: "local",
      icon: MapPin,
      title: "Bhoomi Local",
      subtitle: "Microclimate Intelligence",
      description: "Hyperlocal weather monitoring and microclimate-based insights that provide precise environmental data for farm-specific decision making.",
      features: ["Hyperlocal weather forecasting", "Microclimate monitoring", "Environmental stress alerts", "Localized crop recommendations"],
      color: "bg-gradient-to-br from-purple-500 to-purple-600",
      badge: "Weather-AI",
      mockup: "/bhoomi/bhoomi_dashboard.png"
    },
    {
      id: "optimize",
      icon: TrendingUp,
      title: "Bhoomi Optimize",
      subtitle: "Resource Management",
      description: "Advanced water and fertilizer management system that optimizes resource usage through precision application and automated scheduling.",
      features: ["Precision irrigation control", "Fertilizer optimization", "Resource usage analytics", "Automated scheduling"],
      color: "bg-gradient-to-br from-orange-500 to-orange-600",
      badge: "Resource-AI",
      mockup: "/bhoomi/bhoomi_dashboard.png"
    },
    {
      id: "ground-d",
      icon: Database,
      title: "Bhoomi Ground-0",
      subtitle: "IoT Monitoring",
      description: "Comprehensive on-farm monitoring through IoT-powered sensors that collect real-time data on soil, water, and environmental conditions.",
      features: ["IoT sensor networks", "Real-time data collection", "Automated alerts", "Historical trend analysis"],
      color: "bg-gradient-to-br from-teal-500 to-teal-600",
      badge: "IoT-Enabled",
      mockup: "/bhoomi/bhoomi_dashboard.png"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-green-100 text-green-800 border-green-200">
              Complete Solutions Suite
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
              Bhoomi Solutions Ecosystem
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              An integrated platform of AI-powered agricultural solutions designed to address every aspect of modern farming - from crop protection to resource management.
            </p>
          </div>
        </ScrollReveal>

        {/* Dashboard Preview Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {solutions.map((solution, index) => (
            <ScrollReveal key={solution.id} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
                className="group"
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden bg-white">
                  {/* Dashboard Mockup */}
                  <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-black/10"></div>
                    <img 
                      src={solution.mockup} 
                      alt={`${solution.title} Dashboard`}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                    />
                    {/* Overlay with solution icon */}
                    <div className="absolute top-4 left-4">
                      <div className={`p-3 rounded-lg ${solution.color} shadow-lg`}>
                        <solution.icon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    {/* Badge */}
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-white/90 text-gray-800 border-0">
                        {solution.badge}
                      </Badge>
                    </div>
                  </div>

                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-green-600 transition-colors">
                      {solution.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 text-sm">
                      {solution.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    <ul className="space-y-2">
                      {solution.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    {/* Hover overlay */}
                    <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="text-green-600 text-sm font-medium">
                        → View {solution.title} Dashboard
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Central Integration Message */}
        <ScrollReveal>
          <div className="text-center bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold mb-4">Unified Platform Experience</h3>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              All solutions seamlessly integrate into one comprehensive dashboard, giving you complete control over your agricultural operations.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default DashboardPreviewSolutions;