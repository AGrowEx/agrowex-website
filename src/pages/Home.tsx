import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import ScrollReveal from "@/components/ScrollReveal";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Smartphone, 
  Star, 
  Shield, 
  Droplets, 
  Brain,
  BarChart3,
  CheckCircle,
  Quote
} from "lucide-react";

const Home = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Insights",
      description: "24/7 GenAI virtual assistant providing real-time recommendations and crop monitoring"
    },
    {
      icon: Droplets,
      title: "Smart Irrigation",
      description: "Automated water and fertilizer management with 25% water savings and 15% cost reduction"
    },
    {
      icon: Shield,
      title: "Pest Management",
      description: "Early detection and prevention with organic solutions and treatment recommendations"
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      description: "Comprehensive performance metrics, yield predictions, and ROI tracking"
    }
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Commercial Farmer",
      location: "Karnataka, India",
      content: "Bhoomi has transformed my farming operations. The AI recommendations helped me increase yield by 20% while reducing water usage.",
      rating: 5
    },
    {
      name: "Sarah Johnson",
      role: "Organic Farm Owner",
      location: "Queensland, Australia",
      content: "The pest management system is incredible. Early detection saved my entire crop from a potential disease outbreak.",
      rating: 5
    },
    {
      name: "David Mwangi",
      role: "Smallholder Farmer",
      location: "Nairobi, Kenya",
      content: "Simple to use, even for someone like me who's not tech-savvy. The results speak for themselves - better crops, less waste.",
      rating: 5
    }
  ];

  const appFeatures = [
    "Bhoomi ERP - Enterprise Resource Planning",
    "Bhoomi Smart Irrigation - Automated water management",
    "Bhoomi Microclimate Intelligence - Weather-based insights",
    "Bhoomi Smart Fertigation - Optimized nutrient delivery",
    "Bhoomi AI - Virtual farming assistant",
    "Bhoomi Pest Management - Comprehensive crop protection"
  ];

  return (
    <>
      <Navigation />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="min-h-screen bg-gradient-to-br from-white via-green-50/30 to-teal-50/20"
      >
        <Hero />
      
      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <Badge className="mb-6 bg-green-100 text-green-800 border-green-200">
                Our Solutions
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                Complete Precision Farming Platform
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                From AI-powered insights to automated irrigation, we provide everything you need 
                to optimize your agricultural operations.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <Card className="h-full border-2 border-gray-100 hover:border-green-200 transition-all duration-300 hover:shadow-lg">
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-4 w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center">
                      <feature.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-800">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-center">{feature.description}</p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 px-6 relative overflow-hidden min-h-screen flex items-center">
        {/* Earth Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/earth_frame.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        
        <div className="relative max-w-7xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white leading-tight">
              With a vision to make impact at scale
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              To empower every farmer, to leverage their own firm's data 
              to produce more and better from planet earth{' '}
              <span className="text-green-400 font-semibold">(Bhoomi)</span>{' '}
              while consuming less natural and man made resources.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Bhoomi App Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <div>
                <Badge className="mb-6 bg-blue-100 text-blue-800 border-blue-200">
                  <Smartphone className="w-4 h-4 mr-2" />
                  Mobile App
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                  Download Bhoomi App
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Get the power of precision farming in your pocket. Bhoomi app is now available 
                  on both Google Play Store and Apple App Store, bringing advanced agricultural 
                  technology to farmers worldwide.
                </p>

                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  {appFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-row gap-4 flex-wrap justify-start items-center">
                  <a
                    href="https://play.google.com/store/apps/details?id=com.agrowex.bhoomi&hl=en_IN"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-40 h-14 flex items-center justify-center hover:scale-105 transition-transform duration-300"
                  >
                    <img
                      src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                      alt="Get it on Google Play"
                      className="max-h-full max-w-full object-contain"
                    />
                  </a>
                  <a
                    href="https://apps.apple.com/in/app/bhoomi-earth/id6467924283"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-40 h-14 flex items-center justify-center hover:scale-105 transition-transform duration-300"
                  >
                    <img
                      src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                      alt="Download on the App Store"
                      className="max-h-full max-w-full object-contain"
                    />
                  </a>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="relative">
                <div className="relative mx-auto max-w-60">
                  <img 
                    src="/bhoomi/bhoomi_dashboard.png" 
                    alt="Bhoomi App Screenshots" 
                    className="w-full h-auto rounded-2xl shadow-2xl"
                  />
                  
                  {/* App Store Badges */}
                  <div className="absolute -top-3 -right-3 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                    4.8★ Rating
                  </div>
                  <div className="absolute -bottom-3 -left-3 bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                    10K+ Downloads
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <Badge className="mb-6 bg-yellow-100 text-yellow-800 border-yellow-200">
                Success Stories
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                Farmers Love Bhoomi
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Join thousands of farmers worldwide who are already transforming their operations with Bhoomi
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <Card className="h-full border-2 border-gray-100 hover:border-green-200 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                      ))}
                    </div>
                    <Quote className="h-8 w-8 text-green-500 mb-4" />
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                    <div className="border-t pt-4">
                      <div className="font-semibold text-gray-800">{testimonial.name}</div>
                      <div className="text-sm text-gray-500">{testimonial.role}</div>
                      <div className="text-sm text-green-600">{testimonial.location}</div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-green-600 to-teal-600">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <Badge className="mb-6 bg-white/20 text-white border-white/30">
              Ready to Transform Your Farm?
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Join the Precision Farming Revolution
            </h2>
            <p className="text-lg text-green-100 mb-8 max-w-2xl mx-auto">
              Start your journey with Bhoomi today and experience the future of agriculture. 
              Download the app or get in touch with our team for a personalized demo.
            </p>
            <div className="flex flex-row gap-4 flex-wrap justify-center items-center">
              <a
                href="https://play.google.com/store/apps/details?id=com.agrowex.bhoomi&hl=en_IN"
                target="_blank"
                rel="noopener noreferrer"
                className="w-40 h-14 flex items-center justify-center hover:scale-105 transition-transform duration-300"
              >
                <img
                  src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                  alt="Get it on Google Play"
                  className="max-h-full max-w-full object-contain"
                />
              </a>
              <a
                href="https://apps.apple.com/in/app/bhoomi-earth/id6467924283"
                target="_blank"
                rel="noopener noreferrer"
                className="w-40 h-14 flex items-center justify-center hover:scale-105 transition-transform duration-300"
              >
                <img
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                  alt="Download on the App Store"
                  className="max-h-full max-w-full object-contain"
                />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
      </motion.div>
    </>
  );
};

export default Home;