import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-agriculture.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/85 via-brand-primary/70 to-brand-primary/40"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center text-white">
        <div className="mb-8">
          <h1 className="text-6xl lg:text-8xl font-bold mb-6 leading-tight">
            AGX Global
          </h1>
          <div className="text-2xl lg:text-3xl font-light mb-4 opacity-90">
            Xcelerating to the future of Agriculture
          </div>
          <p className="text-xl lg:text-2xl font-light opacity-80 max-w-3xl mx-auto">
            Democratizing precision farming for growers globally
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button variant="brand" size="lg" className="text-lg px-10 py-4 font-semibold">
            Explore Solutions
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-10 py-4 border-white/80 text-white hover:bg-white hover:text-brand-dark font-medium">
            Learn More
          </Button>
        </div>
        
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white/15 backdrop-blur-md rounded-xl p-8 shadow-elevated">
            <div className="text-4xl font-bold text-brand-secondary mb-2">12,000</div>
            <div className="text-sm opacity-90 font-medium">Years of Agriculture History</div>
          </div>
          <div className="bg-white/15 backdrop-blur-md rounded-xl p-8 shadow-elevated">
            <div className="text-4xl font-bold text-brand-secondary mb-2">$4-8T</div>
            <div className="text-sm opacity-90 font-medium">Global Agriculture GDP</div>
          </div>
          <div className="bg-white/15 backdrop-blur-md rounded-xl p-8 shadow-elevated">
            <div className="text-4xl font-bold text-brand-secondary mb-2">12%</div>
            <div className="text-sm opacity-90 font-medium">Digital Transformation in Agri</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;