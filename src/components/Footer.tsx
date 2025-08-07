import { Link } from "react-router-dom";
import { Smartphone, Mail, Phone, MapPin, Play, Apple, Globe, ExternalLink } from "lucide-react";

const handleSolutionClick = (solutionId: string) => {
  // Check if we're already on the solutions page
  if (window.location.pathname === '/solutions') {
    // Just update the hash
    window.location.hash = solutionId;
  } else {
    // Navigate to solutions page with hash
    window.location.href = `/solutions#${solutionId}`;
  }
};

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/logo.png" 
                alt="AGX Global Logo" 
                className="h-8 w-auto"
              />
            </div>
            <p className="text-gray-300 text-sm">
              Democratizing precision farming for growers globally through AI-powered insights and automation.
            </p>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>support@agxglobal.com</span>
              </div>
              <div className="flex items-start space-x-2">
                <Globe className="h-4 w-4 mt-0.5" />
                <span>Operating in 10+ countries and available worldwide</span>
              </div>
            </div>
          </div>

          {/* Solutions */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Solutions</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><button onClick={() => handleSolutionClick('bhoomi-ai')} className="hover:text-white transition-colors text-left">Bhoomi AI</button></li>
              <li><button onClick={() => handleSolutionClick('protect')} className="hover:text-white transition-colors text-left">Bhoomi Protect</button></li>
              <li><button onClick={() => handleSolutionClick('smart-manager')} className="hover:text-white transition-colors text-left">Smart Manager</button></li>
              <li><button onClick={() => handleSolutionClick('local')} className="hover:text-white transition-colors text-left">Bhoomi Local</button></li>
              <li><button onClick={() => handleSolutionClick('optimize')} className="hover:text-white transition-colors text-left">Bhoomi Optimize</button></li>
              <li><button onClick={() => handleSolutionClick('ground-d')} className="hover:text-white transition-colors text-left">Bhoomi Ground-0</button></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Company</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/careers" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">Press & Media</a></li>
            </ul>
          </div>

          {/* Download App */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Download Bhoomi App</h3>
            <div className="space-y-3">
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
            
            <div className="pt-4 space-y-2">
              <div className="text-sm text-gray-300">
                <Smartphone className="inline h-4 w-4 mr-1" />
                10K+ Downloads
              </div>
              <div className="text-sm text-gray-300">
                ⭐ 4.8 Average Rating
              </div>
            </div>
          </div>
        </div>


        {/* Social Media & Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.758-1.378l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.624 0 11.99-5.367 11.99-11.99C24.007 5.367 18.641.001 12.017.001z"/>
                </svg>
              </a>
            </div>
            
            <div className="text-center text-sm text-gray-400">
              <div>
                &copy; 2024 AGX Global. All rights reserved. | 
                <Link to="/privacy-policy" className="hover:text-white transition-colors ml-1">Privacy Policy</Link> | 
                <Link to="/terms-conditions" className="hover:text-white transition-colors ml-1">Terms & Conditions</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;