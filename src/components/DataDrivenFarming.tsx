import { motion } from "framer-motion";
import { Database, Lightbulb, Brain, Zap, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { Badge } from "@/components/ui/badge";

const DataDrivenFarming = () => {
  const stages = [
    {
      icon: Database,
      title: "Data",
      subtitle: "Collect & store data in real time",
      description: "IoT sensors and monitoring systems gather continuous farm data",
      color: "bg-gradient-to-br from-green-500 to-green-600"
    },
    {
      icon: Lightbulb,
      title: "Knowledge",
      subtitle: "Making sense of the available data",
      description: "AI algorithms analyze patterns and trends from collected information",
      color: "bg-gradient-to-br from-green-600 to-teal-500"
    },
    {
      icon: Brain,
      title: "Wisdom",
      subtitle: "Convert the knowledge into wisdom",
      description: "Machine learning models provide intelligent insights and predictions",
      color: "bg-gradient-to-br from-teal-500 to-teal-600"
    },
    {
      icon: Zap,
      title: "Action",
      subtitle: "Use the wisdom to act, react & interact",
      description: "Automated systems and recommendations drive farming decisions",
      color: "bg-gradient-to-br from-teal-600 to-emerald-600"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-blue-100 text-blue-800 border-blue-200">
              Our Approach
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
              Data-driven Farming
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Transform your farm with our four-stage approach that converts raw data into actionable farming insights
            </p>
          </div>
        </ScrollReveal>

        <div className="relative">
          {/* Desktop Layout */}
          <div className="hidden lg:grid lg:grid-cols-4 gap-12 relative">
            {stages.map((stage, index) => (
              <ScrollReveal key={index} delay={index * 0.15}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 group"
                >
                  {/* Step Number */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-gray-800 to-gray-600 text-white rounded-full flex items-center justify-center text-lg font-bold shadow-lg">
                    {index + 1}
                  </div>
                  
                  <div className={`w-20 h-20 ${stage.color} rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                    <stage.icon className="h-10 w-10 text-white" />
                  </div>
                  
                  <div className="text-center space-y-4">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      {stage.title}
                    </h3>
                    <p className="text-green-600 font-semibold text-base mb-4">
                      {stage.subtitle}
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      {stage.description}
                    </p>
                  </div>

                  {/* Connecting Arrow */}
                  {index < stages.length - 1 && (
                    <div className="absolute top-1/2 -right-6 transform -translate-y-1/2 z-10">
                      <motion.div
                        initial={{ x: -10, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.15 + 0.5, duration: 0.5 }}
                        className="bg-white rounded-full p-3 shadow-lg border-2 border-gray-200"
                      >
                        <ArrowRight className="h-6 w-6 text-gray-400" />
                      </motion.div>
                    </div>
                  )}
                </motion.div>
              </ScrollReveal>
            ))}
          </div>

          {/* Mobile/Tablet Layout */}
          <div className="lg:hidden space-y-8">
            {stages.map((stage, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative bg-white rounded-3xl p-8 shadow-xl border border-gray-100"
                >
                  <div className="flex items-start space-x-6">
                    {/* Step Number */}
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-gray-800 to-gray-600 text-white rounded-full flex items-center justify-center text-lg font-bold shadow-lg">
                      {index + 1}
                    </div>
                    
                    <div className="flex-1 space-y-4">
                      <div className={`w-16 h-16 ${stage.color} rounded-xl flex items-center justify-center`}>
                        <stage.icon className="h-8 w-8 text-white" />
                      </div>
                      
                      <div className="space-y-3">
                        <h3 className="text-xl font-bold text-gray-800">
                          {stage.title}
                        </h3>
                        <p className="text-green-600 font-semibold">
                          {stage.subtitle}
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                          {stage.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Connecting Arrow for Mobile */}
                  {index < stages.length - 1 && (
                    <div className="flex justify-center mt-6">
                      <div className="bg-gray-100 rounded-full p-2">
                        <ArrowRight className="h-5 w-5 text-gray-400 rotate-90" />
                      </div>
                    </div>
                  )}
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default DataDrivenFarming;