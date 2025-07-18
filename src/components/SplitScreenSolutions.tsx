import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Shield, Users, MapPin, Droplets, Cpu, MessageCircle, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const SplitScreenSolutions = () => {
  const [selectedSolution, setSelectedSolution] = useState(0);

  const solutions = [
    {
      id: "bhoomi-ai",
      icon: MessageCircle,
      title: "Bhoomi AI",
      subtitle: "GenAI Virtual Assistant",
      description: "24/7 GenAI powered virtual assistant that helps growers on all agriculture dimensions with real-time insights and recommendations.",
      features: ["Natural language queries", "Real-time crop monitoring", "Predictive analytics", "Voice-activated commands", "Personalized recommendations"],
      color: "bg-gradient-to-br from-gray-500 to-gray-600",
      badge: "GenAI-Powered",
      mockup: "/bhoomi/bhoomi_AI.png",
      detailedDescription: "Our flagship GenAI assistant combines decades of agricultural expertise with cutting-edge artificial intelligence. Ask questions in natural language, get instant insights, and receive personalized recommendations based on your specific farm conditions and historical data.",
      isMobileFrame: true
    },
    {
      id: "protect",
      icon: Shield,
      title: "Bhoomi Protect",
      subtitle: "AI Pest Management",
      description: "AI-augmented Integrated Pest Management (IPM) system that provides early detection, organic treatment recommendations, and preventive care strategies.",
      features: ["Computer vision for pest detection", "Organic treatment recommendations", "Disease prediction models", "Preventive care scheduling"],
      color: "bg-gradient-to-br from-gray-600 to-gray-700",
      badge: "AI-Powered",
      mockup: "/bhoomi/bhoomi_pest_management.png",
      detailedDescription: "Our AI-powered pest management system uses computer vision and machine learning to identify threats before they become problems. The system analyzes crop images, weather patterns, and historical data to predict pest outbreaks with 95% accuracy.",
      isMobileFrame: true
    },
    {
      id: "smart-manager",
      icon: Users,
      title: "Smart Manager",
      subtitle: "Agriculture ERP Suite",
      description: "Comprehensive Enterprise Resource Planning suite tailored specifically for agricultural operations, managing everything from inventory to labor.",
      features: ["Farm inventory management", "Labor scheduling & payroll", "Financial tracking & reporting", "Supply chain optimization"],
      color: "bg-gradient-to-br from-slate-500 to-slate-600",
      badge: "ERP Solution",
      mockup: "/bhoomi/bhoomi_erp.png",
      detailedDescription: "A complete ERP solution designed specifically for agricultural businesses. Manage your entire operation from seed procurement to harvest sales, with integrated financial tracking, inventory management, and workforce optimization.",
      isMobileFrame: true
    },
    {
      id: "local",
      icon: MapPin,
      title: "Bhoomi Local",
      subtitle: "Microclimate Intelligence",
      description: "Hyperlocal weather monitoring and microclimate-based insights that provide precise environmental data for farm-specific decision making.",
      features: ["Hyperlocal weather forecasting", "Microclimate monitoring", "Environmental stress alerts", "Localized crop recommendations"],
      color: "bg-gradient-to-br from-zinc-500 to-zinc-600",
      badge: "Weather-AI",
      mockup: "/bhoomi/bhoomi_weather.png",
      detailedDescription: "Get hyperlocal weather insights with precision down to individual fields. Our network of sensors and AI models provide microclimate data that's 10x more accurate than traditional weather services for agricultural planning.",
      isMobileFrame: true
    },
    {
      id: "optimize",
      icon: Droplets,
      title: "Bhoomi Optimize",
      subtitle: "Resource Management",
      description: "Advanced water and fertilizer management system that optimizes resource usage through precision application and automated scheduling.",
      features: ["Precision irrigation control", "Fertilizer optimization", "Resource usage analytics", "Automated scheduling"],
      color: "bg-gradient-to-br from-neutral-500 to-neutral-600",
      badge: "Resource-AI",
      mockup: "/bhoomi/bhoomi_nre.png",
      detailedDescription: "Maximize efficiency and minimize waste with our intelligent resource management system. AI algorithms analyze soil conditions, weather patterns, and crop needs to optimize water and fertilizer usage, reducing costs by up to 30%.",
      isMobileFrame: true
    },
    {
      id: "ground-d",
      icon: Cpu,
      title: "Bhoomi Ground-D",
      subtitle: "IoT Monitoring",
      description: "Comprehensive on-farm monitoring through IoT-powered sensors that collect real-time data on soil, water, and environmental conditions.",
      features: ["IoT sensor networks", "Real-time data collection", "Automated alerts", "Historical trend analysis"],
      color: "bg-gradient-to-br from-stone-500 to-stone-600",
      badge: "IoT-Enabled",
      mockup: "",
      detailedDescription: "Deploy a comprehensive IoT sensor network across your farm to monitor soil moisture, temperature, humidity, and nutrient levels in real-time. Get instant alerts and make data-driven decisions with our advanced analytics dashboard."
    }
  ];

  useEffect(() => {
    const handleSolutionSelection = (event: CustomEvent) => {
      const solutionId = event.detail;
      const solutionIndex = solutions.findIndex(solution => solution.id === solutionId);
      if (solutionIndex !== -1) {
        setSelectedSolution(solutionIndex);
      }
    };

    window.addEventListener('selectSolution', handleSolutionSelection as EventListener);
    
    return () => {
      window.removeEventListener('selectSolution', handleSolutionSelection as EventListener);
    };
  }, [solutions]);

  const currentSolution = solutions[selectedSolution];

  return (
    <div className="max-w-6xl mx-auto">
      {/* Split Screen Layout */}
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
        <div className="grid lg:grid-cols-2 min-h-[600px]">
          {/* Left Side - Solution List */}
          <div className="border-r border-gray-200 bg-gradient-to-br from-gray-50 to-gray-100">
            <div className="p-6 border-b border-gray-200 bg-white">
              <h3 className="text-xl font-bold text-gray-800">Select a Solution</h3>
              <p className="text-sm text-gray-600 mt-1">Click to explore each module in detail</p>
            </div>
            
            <div className="space-y-2 p-4">
              {solutions.map((solution, index) => (
                <motion.div
                  key={solution.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedSolution(index)}
                  className={`cursor-pointer p-4 rounded-xl transition-all duration-200 ${
                    selectedSolution === index 
                      ? 'bg-white shadow-lg border-2 border-green-300 transform scale-102' 
                      : 'bg-white/80 hover:bg-white hover:shadow-md'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-lg ${solution.color} flex-shrink-0`}>
                      <solution.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-gray-800 truncate">{solution.title}</h4>
                      <p className="text-sm text-gray-600 truncate">{solution.subtitle}</p>
                    </div>
                    <ChevronRight className={`h-5 w-5 transition-transform ${
                      selectedSolution === index ? 'text-green-600 transform rotate-90' : 'text-gray-400'
                    }`} />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Side - Detailed View */}
          <div className="bg-gradient-to-br from-white to-gray-50">
            <motion.div
              key={selectedSolution}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="p-8 h-full"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-lg ${currentSolution.color}`}>
                    <currentSolution.icon className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">{currentSolution.title}</h3>
                    <p className="text-green-600 font-medium">{currentSolution.subtitle}</p>
                  </div>
                </div>
                <Badge className="bg-green-100 text-green-800 border-green-200">
                  {currentSolution.badge}
                </Badge>
              </div>

              {/* Dashboard Preview */}
              {currentSolution.mockup && (
                <div className="mb-8">
                  {currentSolution.isMobileFrame ? (
                    <div className="flex justify-center">
                      <div className="max-w-48 mx-auto">
                        <img 
                          src={currentSolution.mockup} 
                          alt={`${currentSolution.title} Mobile App`}
                          className="w-full h-auto object-contain drop-shadow-2xl"
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="relative h-52 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl overflow-hidden shadow-lg">
                      <img 
                        src={currentSolution.mockup} 
                        alt={`${currentSolution.title} Dashboard`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                        Interactive Dashboard
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Description */}
              <div className="mb-6">
                <p className="text-gray-700 leading-relaxed mb-4">
                  {currentSolution.detailedDescription}
                </p>
                <p className="text-sm text-gray-600">
                  {currentSolution.description}
                </p>
              </div>

              {/* Features */}
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">Key Features</h4>
                <ul className="space-y-2">
                  {currentSolution.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SplitScreenSolutions;