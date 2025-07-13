import { Leaf, Mail, Globe, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-deep-earth text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-gradient-primary rounded-lg">
                <Leaf className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="font-bold text-xl">AGX Global</div>
                <div className="text-sm opacity-80">Xcelerating Agriculture</div>
              </div>
            </div>
            <p className="text-white/80 leading-relaxed mb-6">
              Democratizing precision farming for growers globally through GenAI-powered solutions 
              that enable real-time insights, data ownership, and economic & ecological harmony.
            </p>
            <div className="flex items-center gap-2 text-primary-glow">
              <Globe className="h-4 w-4" />
              <span className="text-sm">www.agxglobal.earth</span>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-primary-glow">Solutions</h3>
            <div className="space-y-3">
              {[
                "Bhoomi AI - GenAI Assistant",
                "Bhoomi Optimize - Resource Management", 
                "Bhoomi Protect - Pest Management",
                "Smart Manager ERP",
                "Ground-0 IoT Monitoring",
                "Local 2.0 Climate Insights"
              ].map((solution, index) => (
                <div key={index} className="text-white/80 hover:text-primary-glow transition-colors cursor-pointer">
                  {solution}
                </div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-primary-glow">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary-glow" />
                <span className="text-white/80">contact@agxglobal.earth</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary-glow mt-1" />
                <div className="text-white/80">
                  <div>Global Operations:</div>
                  <div className="text-sm mt-1">India • Kenya • Uganda • Australia</div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-white/10 backdrop-blur-sm rounded-lg">
              <h4 className="font-bold text-primary-glow mb-2">Why Now?</h4>
              <div className="text-sm text-white/80">
                Climate urgency + AI/ML talent surge + growing government interest = 
                Perfect timing for AgriTech innovation
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-white/60 text-sm">
              © 2024 AGX Global. All rights reserved. Xcelerating the future of Agriculture.
            </div>
            <div className="text-sm text-primary-glow">
              Revenue Potential by 2030: $175M+
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;