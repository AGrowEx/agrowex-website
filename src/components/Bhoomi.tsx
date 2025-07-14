import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Smartphone, Tablet, Monitor, Brain, Droplets, Shield, BarChart3, Zap, TrendingUp } from "lucide-react";
import bhoomieLogoImage from "@/assets/bhoomi-logo.png";
import appMockupImage from "@/assets/bhoomi-app-mockup.jpg";
import dashboardImage from "@/assets/bhoomi-dashboard.jpg";

const Bhoomi = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Insights",
      description: "Advanced machine learning algorithms analyze crop health, weather patterns, and soil conditions to provide actionable recommendations."
    },
    {
      icon: Droplets,
      title: "Smart Irrigation",
      description: "Automated water management system that optimizes irrigation schedules based on real-time soil moisture and weather data."
    },
    {
      icon: Shield,
      title: "Pest Management",
      description: "Early detection and prevention of pest infestations using computer vision and predictive analytics."
    },
    {
      icon: BarChart3,
      title: "Farm Analytics",
      description: "Comprehensive dashboard with yield predictions, cost analysis, and performance metrics for data-driven decisions."
    },
    {
      icon: Zap,
      title: "IoT Integration",
      description: "Seamless connectivity with sensors, drones, and farm equipment for complete farm automation."
    },
    {
      icon: TrendingUp,
      title: "Yield Optimization",
      description: "Maximize crop yield while minimizing resource usage through precision farming techniques."
    }
  ];

  const appScreens = [
    {
      name: "Mobile App",
      icon: Smartphone,
      description: "Field-ready mobile application for farmers to monitor and control their operations on-the-go.",
      image: appMockupImage
    },
    {
      name: "Dashboard",
      icon: Tablet,
      description: "Comprehensive web dashboard for detailed analytics and farm management.",
      image: dashboardImage
    },
    {
      name: "Control Center",
      icon: Monitor,
      description: "Central command interface for large-scale agricultural operations.",
      image: appMockupImage
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-8">
            <img 
              src={bhoomieLogoImage} 
              alt="Bhoomi Logo" 
              className="h-16 w-16"
            />
            <h2 className="text-5xl lg:text-6xl font-bold text-brand-dark">
              Bhoomi
            </h2>
          </div>
          <p className="text-2xl text-brand-primary font-medium mb-4">
            The Future of Precision Agriculture
          </p>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Bhoomi combines cutting-edge AI, IoT sensors, and agricultural expertise to revolutionize 
            farming operations. From seed to harvest, our platform provides intelligent insights 
            and automated solutions for modern farmers.
          </p>
        </div>

        {/* App Showcase */}
        <div className="mb-20">
          <Tabs defaultValue="mobile" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-12 bg-white/70 backdrop-blur-sm shadow-card">
              {appScreens.map((screen, index) => (
                <TabsTrigger 
                  key={index} 
                  value={screen.name.toLowerCase().replace(' ', '')}
                  className="flex items-center gap-2 data-[state=active]:bg-brand-primary data-[state=active]:text-white"
                >
                  <screen.icon className="h-4 w-4" />
                  {screen.name}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {appScreens.map((screen, index) => (
              <TabsContent 
                key={index} 
                value={screen.name.toLowerCase().replace(' ', '')}
                className="mt-0"
              >
                <Card className="border-0 shadow-elevated bg-gradient-card overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
                    <div className="p-12">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="p-3 bg-gradient-brand rounded-xl shadow-brand">
                          <screen.icon className="h-6 w-6 text-white" />
                        </div>
                        <h3 className="text-3xl font-bold text-brand-dark">{screen.name}</h3>
                      </div>
                      <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                        {screen.description}
                      </p>
                      <div className="flex gap-4">
                        <Button variant="brand" size="lg" className="shadow-brand">
                          Try Demo
                        </Button>
                        <Button variant="outline" size="lg">
                          Learn More
                        </Button>
                      </div>
                    </div>
                    <div className="p-8">
                      <div className="rounded-2xl overflow-hidden shadow-elevated">
                        <img 
                          src={screen.image} 
                          alt={`${screen.name} Interface`}
                          className="w-full h-auto object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        {/* Features Grid */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-brand-dark mb-12">
            Powerful Features for Modern Farming
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-card hover:shadow-elevated transition-all duration-300 bg-gradient-card group">
                <CardHeader>
                  <div className="p-4 bg-gradient-brand rounded-xl shadow-brand w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-brand-dark font-semibold">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <Card className="border-0 shadow-elevated bg-gradient-brand text-white overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/20 to-brand-secondary/20"></div>
          <CardContent className="relative z-10 p-12 text-center">
            <h3 className="text-3xl font-bold mb-8">Proven Results with Bhoomi</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div className="text-4xl font-bold mb-2">15%</div>
                <div className="text-sm opacity-90 font-medium">Water Savings</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">25%</div>
                <div className="text-sm opacity-90 font-medium">Fertilizer Reduction</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">15+</div>
                <div className="text-sm opacity-90 font-medium">Crops Tested</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">12K+</div>
                <div className="text-sm opacity-90 font-medium">Man-days Digitized</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Bhoomi;