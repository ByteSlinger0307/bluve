import React from "react";

const Footer = () => {
  return (
    <footer className="relative w-full py-20 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/hero-background.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900/80 to-pulse-900/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 section-container">
        <div className="max-w-6xl mx-auto">
          {/* Brand Section */}
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-display font-bold text-white mb-4 tracking-wider">
              BLUVÉ
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Where elegance meets essence. Crafting experiences, not commodities.
            </p>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 text-center md:text-left">
            {/* Product */}
            <div>
              <h3 className="text-white font-semibold mb-4 text-lg">Product</h3>
              <ul className="space-y-2">
                <li><a href="#features" className="text-white/70 hover:text-white transition-colors">Features</a></li>
                <li><a href="#specifications" className="text-white/70 hover:text-white transition-colors">Specifications</a></li>
                <li><a href="#testimonials" className="text-white/70 hover:text-white transition-colors">Testimonials</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-white font-semibold mb-4 text-lg">Company</h3>
              <ul className="space-y-2">
                <li><a href="#why-humanoid" className="text-white/70 hover:text-white transition-colors">About</a></li>
                <li><a href="#details" className="text-white/70 hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="text-white/70 hover:text-white transition-colors">Partnerships</a></li>
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h3 className="text-white font-semibold mb-4 text-lg">Connect</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-white/70 hover:text-white transition-colors">Instagram</a></li>
                <li><a href="#" className="text-white/70 hover:text-white transition-colors">LinkedIn</a></li>
                <li><a href="#" className="text-white/70 hover:text-white transition-colors">Twitter</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-white/20">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-white/60 text-sm">
                © 2025 Bluvé. All rights reserved.
              </p>
              <div className="flex gap-6 text-sm">
                <a href="#" className="text-white/60 hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="text-white/60 hover:text-white transition-colors">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
