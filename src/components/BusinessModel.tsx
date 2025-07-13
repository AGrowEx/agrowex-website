import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Users, DollarSign, Target } from "lucide-react";

const BusinessModel = () => {
  const marketSegments = [
    "Medium to large farms (5+ acres)",
    "Aggregators, B2B players",
    "Horticulture sector",
    "Focus: Global South (India, Kenya, Uganda, Australia)"
  ];

  const gtmStrategies = [
    { icon: Users, title: "Gig economy onboarding", description: "Leveraging local talent networks" },
    { icon: Target, title: "Peer-to-peer multi-level marketing", description: "Community-driven growth" },
    { icon: Building2, title: "FPO/distributor partnerships", description: "Strategic channel partnerships" },
    { icon: DollarSign, title: "B2B sales", description: "Direct enterprise sales" }
  ];

  const revenueStreams = [
    {
      model: "SaaS-based usage fee",
      amount: "$2–$10 per Ha",
      description: "Scalable subscription model"
    },
    {
      model: "Gain share models",
      amount: "Variable %",
      description: "Performance-based B2B pricing"
    },
    {
      model: "HW+SW upsell",
      amount: "Premium",
      description: "Integrated hardware solutions"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-deep-earth mb-6">
            Business Model
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Scalable, sustainable approach to global market penetration
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Market */}
          <Card className="shadow-card border-0">
            <CardHeader>
              <CardTitle className="text-2xl text-deep-earth flex items-center gap-3">
                <Target className="h-6 w-6 text-earth-green" />
                Market
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {marketSegments.map((segment, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-earth-green rounded-full"></div>
                    <span className="text-muted-foreground">{segment}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* GTM */}
          <Card className="shadow-card border-0">
            <CardHeader>
              <CardTitle className="text-2xl text-deep-earth flex items-center gap-3">
                <Users className="h-6 w-6 text-tech-blue" />
                Go-to-Market
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {gtmStrategies.map((strategy, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="p-2 bg-gradient-primary rounded-lg mt-1">
                      <strategy.icon className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <div className="font-medium text-deep-earth text-sm">{strategy.title}</div>
                      <div className="text-xs text-muted-foreground">{strategy.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Revenue */}
          <Card className="shadow-card border-0">
            <CardHeader>
              <CardTitle className="text-2xl text-deep-earth flex items-center gap-3">
                <DollarSign className="h-6 w-6 text-forest-green" />
                Revenue
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {revenueStreams.map((stream, index) => (
                  <div key={index} className="border-l-4 border-earth-green pl-4">
                    <div className="font-medium text-deep-earth">{stream.model}</div>
                    <div className="text-lg font-bold text-earth-green">{stream.amount}</div>
                    <div className="text-xs text-muted-foreground">{stream.description}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Market Opportunity */}
        <Card className="bg-gradient-hero text-white shadow-glow">
          <CardHeader>
            <CardTitle className="text-3xl text-center">Market Opportunity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">$45B+</div>
                <div className="opacity-90">Global AgriTech market</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">$20B+</div>
                <div className="opacity-90">Global Precision Ag market</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2 text-primary-glow">$175M+</div>
                <div className="opacity-90">AGX Revenue Potential by 2030</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default BusinessModel;