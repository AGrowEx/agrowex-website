import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-agriculture.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-white flex items-center justify-center overflow-hidden">
      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-6 py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="text-left">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              Let's change the way
              <span className="block text-brand-primary">of farming together</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-12 leading-relaxed max-w-lg">
              Democratizing precision farming for growers globally through AI-powered insights and automation
            </p>
            
            <Button size="lg" className="text-lg px-8 py-4 font-medium bg-brand-primary hover:bg-brand-primary/90 text-white shadow-lg hover:shadow-xl transition-all duration-300">
              Start now
            </Button>
          </div>
          
          {/* Right Content - Phone Mockup */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Phone Frame */}
              <div className="relative bg-black rounded-[3rem] p-3 shadow-2xl">
                <div className="bg-white rounded-[2.5rem] overflow-hidden w-80 h-[640px]">
                  <img 
                    src="/src/assets/bhoomi-app-mockup.jpg" 
                    alt="Bhoomi App Dashboard" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-8 -left-8 bg-white rounded-2xl p-6 shadow-lg border">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium text-gray-600">Real-time monitoring</span>
                </div>
              </div>
              
              <div className="absolute -bottom-8 -right-8 bg-white rounded-2xl p-6 shadow-lg border">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-sm font-medium text-gray-600">AI-powered insights</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-32 pt-16 border-t border-gray-200">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-brand-primary mb-2">25%</div>
            <div className="text-gray-600">Water saved</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-brand-primary mb-2">15%</div>
            <div className="text-gray-600">Yield increase</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-brand-primary mb-2">50+</div>
            <div className="text-gray-600">Countries</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-brand-primary mb-2">12K+</div>
            <div className="text-gray-600">Farmers</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;