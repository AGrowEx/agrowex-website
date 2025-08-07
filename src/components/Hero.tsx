import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Droplets, TrendingUp, Globe, Leaf, Brain } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1] as const
      }
    }
  };

  return (
    <section className="relative min-h-screen pt-20">
      {/* Farmland Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/30 via-green-800/20 to-teal-900/30"></div>
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2232&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pt-20">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <motion.div variants={itemVariants}>
                <Badge className="bg-green-100 text-green-800 border-green-200 px-4 py-2">
                  <Leaf className="w-4 h-4 mr-2" />
                  Xcelerating Agriculture's Future
                </Badge>
              </motion.div>
              
              <motion.h1 
                variants={itemVariants}
                className="text-4xl md:text-6xl font-bold leading-tight"
              >
                <span className="text-gray-900">Democratizing</span>
                <br />
                <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
                  precision farming
                </span>
                <br />
                <span className="text-gray-900">for growers globally</span>
              </motion.h1>
              
              <motion.p 
                variants={itemVariants}
                className="text-lg md:text-xl text-gray-600 max-w-2xl"
              >
                Transform your agricultural operations with AI-powered solutions that combine 
                real-time insights, automated systems, and sustainable practices to maximize 
                yield while minimizing costs.
              </motion.p>
            </div>

            <motion.div 
              variants={itemVariants}
              className="flex flex-row gap-4 flex-wrap justify-start"
            >
                <a
                  href="https://play.google.com/store/apps/details?id=com.agrowex.bhoomi&hl=en_IN"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-36 sm:w-44 h-16 flex items-center justify-center hover:scale-105 transition-transform duration-300 flex-shrink-0"
                >
                  <img
                    src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                    alt="Get it on Google Play"
                    className="h-14 w-auto object-contain"
                  />
                </a>
                <a
                  href="https://apps.apple.com/in/app/bhoomi-earth/id6467924283"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-36 sm:w-44 h-16 flex items-center justify-center hover:scale-105 transition-transform duration-300 flex-shrink-0"
                >
                  <img
                    src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                    alt="Download on the App Store"
                    className="h-10 w-auto object-contain"
                  />
                </a>
            </motion.div>

          </div>

          {/* Right Content - App Showcase */}
          <motion.div 
            variants={itemVariants}
            className="relative flex justify-end -mt-8"
          >
            <div className="relative">
              {/* Dashboard Image */}
              <motion.div 
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="relative rounded-xl overflow-hidden max-w-md"
              >
                <img 
                  src="/bhoomi/bhoomi_dashboard_hero.png" 
                  alt="Bhoomi Dashboard" 
                  className="w-full h-auto object-cover"
                />
              </motion.div>

            </div>
          </motion.div>
        </motion.div>
      </div>

    </section>
  );
};

export default Hero;