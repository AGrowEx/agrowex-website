import { motion } from "framer-motion";
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import ScrollReveal from "@/components/ScrollReveal";
import SplitScreenSolutions from "@/components/SplitScreenSolutions";
import DataDrivenFarming from "@/components/DataDrivenFarming";
import { Badge } from "@/components/ui/badge";

const Solutions = () => {
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1);
      if (hash) {
        // Scroll to the solutions section
        const solutionsSection = document.getElementById('solutions-section');
        if (solutionsSection) {
          solutionsSection.scrollIntoView({ behavior: 'smooth' });
          // Then trigger the specific solution selection
          const solutionEvent = new CustomEvent('selectSolution', { detail: hash });
          window.dispatchEvent(solutionEvent);
        }
      }
    };

    // Handle initial load
    const hash = window.location.hash.substring(1);
    if (hash) {
      const timer = setTimeout(() => {
        handleHashChange();
      }, 1000);
      
      // Listen for hash changes
      window.addEventListener('hashchange', handleHashChange);
      
      return () => {
        clearTimeout(timer);
        window.removeEventListener('hashchange', handleHashChange);
      };
    } else {
      // Just listen for hash changes even if there's no initial hash
      window.addEventListener('hashchange', handleHashChange);
      
      return () => {
        window.removeEventListener('hashchange', handleHashChange);
      };
    }
  }, []);

  return (
    <>
      <Navigation />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="min-h-screen bg-gradient-to-br from-white via-green-50/30 to-teal-50/20"
      >
      
      {/* Split Hero Section */}
      <motion.section 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="pt-24 pb-16 px-6"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[600px]">
            {/* Left Side - Farmer Background Image */}
            <div className="relative">
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl"
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: 'url(/bhoomi/bhoomi_farmer.png)',
                  }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                
                {/* Floating badges */}
                <div className="absolute top-6 left-6 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                  Empowering Farmers
                </div>
                <div className="absolute bottom-6 right-6 bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                  Globally Trusted
                </div>
              </motion.div>
            </div>

            {/* Right Side - Bhoomi Logo + Text */}
            <div className="space-y-8">
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col items-center text-center space-y-4"
              >
                <img 
                  src="/bhoomi.png" 
                  alt="Bhoomi Logo" 
                  className="h-24 w-auto object-contain"
                />
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
                  Solutions Ecosystem
                </h1>
              </motion.div>
              
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="space-y-4 text-center"
              >
                <Badge className="bg-green-100 text-green-800 border-green-200">
                  Complete Agricultural Platform
                </Badge>
                <p className="text-xl text-gray-600 leading-relaxed">
                  An integrated platform of AI-powered agricultural solutions designed to address every aspect of modern farming. 
                  From crop protection to resource management, Bhoomi provides comprehensive tools for sustainable precision agriculture.
                </p>
              </motion.div>

              <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex justify-center"
              >
                <button 
                  onClick={() => {
                    const solutionsSection = document.getElementById('solutions-section');
                    solutionsSection?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-gradient-to-r from-green-600 to-teal-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-green-700 hover:to-teal-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Show All Solutions →
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Data-driven Farming Section */}
      <DataDrivenFarming />

      {/* Solutions Section */}
      <section id="solutions-section" className="py-20 px-6 bg-gradient-to-br from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <Badge className="mb-6 bg-green-100 text-green-800 border-green-200">
                Explore Our Solutions
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-800">
                Comprehensive Agricultural Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Discover how each Bhoomi solution addresses specific farming challenges. 
                Click on any solution to learn more about its features and capabilities.
              </p>
            </div>
          </ScrollReveal>
          
          <SplitScreenSolutions />
        </div>
      </section>


      {/* App Download CTA Section */}
      <motion.section 
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="py-20 px-6"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
            Ready to Transform Your Farm?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Download the Bhoomi app and start your precision farming journey today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://play.google.com/store/apps/details?id=com.agrowex.bhoomi&hl=en_IN"
              target="_blank"
              rel="noopener noreferrer"
              className="w-48 h-16 flex items-center justify-center hover:scale-105 transition-transform duration-300"
            >
              <img
                src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                alt="Get it on Google Play"
                className="h-16 w-44 object-contain"
              />
            </a>
            <a
              href="https://apps.apple.com/in/app/bhoomi-earth/id6467924283"
              target="_blank"
              rel="noopener noreferrer"
              className="w-48 h-16 flex items-center justify-center hover:scale-105 transition-transform duration-300"
            >
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="Download on the App Store"
                className="h-12 w-44 object-contain"
              />
            </a>
          </div>
        </div>
      </motion.section>

      <Footer />
      <ScrollToTop />
      </motion.div>
    </>
  );
};

export default Solutions;