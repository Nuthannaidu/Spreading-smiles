import { useEffect, useState } from "react";

export default function Footer() {
  const [animate, setAnimate] = useState(false);
  const [hoveredSection, setHoveredSection] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
        }
      },
      { threshold: 0.1 }
    );

    const footerElement = document.getElementById('footer');
    if (footerElement) {
      observer.observe(footerElement);
    }

    return () => observer.disconnect();
  }, []);

  const socialLinks = [
    { name: 'Facebook', icon: '📘', url: '#' },
    { name: 'Twitter', icon: '🐦', url: '#' },
    { name: 'Instagram', icon: '📷', url: '#' },
    { name: 'LinkedIn', icon: '💼', url: '#' }
  ];

  const quickLinks = [
    'About Us', 'Our Mission', 'Programs', 'Volunteer', 'Donate', 'Contact'
  ];

  const programs = [
    'Community Outreach', 'Youth Development', 'Senior Care', 'Educational Support'
  ];

  return (
    <footer
      id="footer"
      className="relative bg-gradient-to-br from-sky-900 via-sky-800 to-sky-900 text-white overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-1/4 w-2 h-2 bg-sky-300/30 rounded-full animate-pulse delay-300"></div>
        <div className="absolute top-20 right-1/3 w-3 h-3 bg-sky-400/20 rounded-full animate-ping delay-700"></div>
        <div className="absolute bottom-20 left-1/3 w-2 h-2 bg-sky-200/40 rounded-full animate-bounce delay-500"></div>
        <div className="absolute top-1/3 right-1/4 w-4 h-4 bg-sky-300/15 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 right-1/5 w-2 h-2 bg-sky-400/25 rounded-full animate-ping delay-200"></div>
      </div>

      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-400 via-sky-300 to-sky-400"></div>

      {/* Main footer content */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 py-8">
        {/* Top section with logo and main content */}
        <div className={`transition-all duration-1000 ease-out ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Logo and tagline section */}
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-2 relative">
              <span className="bg-gradient-to-r from-sky-200 via-white to-sky-200 bg-clip-text text-transparent drop-shadow-lg">
                Spreading Smiles
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-sky-400/20 via-sky-300/20 to-sky-400/20 blur-xl -z-10 scale-110">
                Spreading Smiles
              </div>
            </h2>
            <p className="text-sky-200/80 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Together, we create lasting impact through compassion, community, and care
            </p>
          </div>

          {/* Main footer grid */}
          <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mb-8">
            {/* Contact Info */}
            <div 
              className={`transition-all duration-500 delay-200 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              onMouseEnter={() => setHoveredSection('contact')}
              onMouseLeave={() => setHoveredSection(null)}
            >
              <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-6 text-sky-200 relative">
                Get In Touch
                <div className={`absolute bottom-0 left-0 h-0.5 bg-sky-400 transition-all duration-300 ${hoveredSection === 'contact' ? 'w-full' : 'w-8'}`}></div>
              </h3>
              <div className="space-y-2 md:space-y-4 text-sky-100/80 text-sm md:text-base">
                <div className="flex items-center gap-2 md:gap-3 group hover:text-white transition-colors duration-300">
                  <span className="text-sm md:text-lg">📧</span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300 truncate">hello@spreadingsmiles.org</span>
                </div>
                <div className="flex items-center gap-2 md:gap-3 group hover:text-white transition-colors duration-300">
                  <span className="text-sm md:text-lg">📞</span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">+1 (555) 123-SMILE</span>
                </div>
                <div className="flex items-start gap-2 md:gap-3 group hover:text-white transition-colors duration-300">
                  <span className="text-sm md:text-lg">📍</span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300 text-xs md:text-sm leading-tight">123 Hope Street<br />Community Center, CA 90210</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div 
              className={`transition-all duration-500 delay-400 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              onMouseEnter={() => setHoveredSection('links')}
              onMouseLeave={() => setHoveredSection(null)}
            >
              <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-6 text-sky-200 relative">
                Quick Links
                <div className={`absolute bottom-0 left-0 h-0.5 bg-sky-400 transition-all duration-300 ${hoveredSection === 'links' ? 'w-full' : 'w-8'}`}></div>
              </h3>
              <ul className="space-y-1 md:space-y-3">
                {quickLinks.slice(0, 4).map((link, index) => (
                  <li key={index}>
                    <a 
                      href="#" 
                      className="text-sky-100/80 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block group text-sm md:text-base"
                    >
                      <span className="group-hover:bg-sky-700/30 group-hover:px-2 group-hover:py-1 group-hover:rounded transition-all duration-300">
                        {link}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Programs */}
            <div 
              className={`transition-all duration-500 delay-600 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              onMouseEnter={() => setHoveredSection('programs')}
              onMouseLeave={() => setHoveredSection(null)}
            >
              <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-6 text-sky-200 relative">
                Our Programs
                <div className={`absolute bottom-0 left-0 h-0.5 bg-sky-400 transition-all duration-300 ${hoveredSection === 'programs' ? 'w-full' : 'w-8'}`}></div>
              </h3>
              <ul className="space-y-1 md:space-y-3">
                {programs.map((program, index) => (
                  <li key={index}>
                    <a 
                      href="#" 
                      className="text-sky-100/80 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block group text-sm md:text-base"
                    >
                      <span className="group-hover:bg-sky-700/30 group-hover:px-2 group-hover:py-1 group-hover:rounded transition-all duration-300">
                        {program}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter Signup - Hidden on mobile, shown on larger screens */}
            <div 
              className={`hidden lg:block transition-all duration-500 delay-800 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              onMouseEnter={() => setHoveredSection('newsletter')}
              onMouseLeave={() => setHoveredSection(null)}
            >
              <h3 className="text-xl font-semibold mb-6 text-sky-200 relative">
                Stay Connected
                <div className={`absolute bottom-0 left-0 h-0.5 bg-sky-400 transition-all duration-300 ${hoveredSection === 'newsletter' ? 'w-full' : 'w-8'}`}></div>
              </h3>
              <p className="text-sky-100/80 mb-4 text-sm">
                Join our newsletter for updates on our latest initiatives and volunteer opportunities.
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-lg bg-sky-800/50 border border-sky-600/30 text-white placeholder-sky-300/60 focus:outline-none focus:border-sky-400 focus:bg-sky-800/70 transition-all duration-300 backdrop-blur-sm"
                />
                <button className="group w-full bg-gradient-to-r from-sky-600 to-sky-700 hover:from-sky-500 hover:to-sky-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg relative overflow-hidden">
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                  <span className="relative">Subscribe</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Social media and bottom section */}
        <div className={`transition-all duration-1000 delay-1000 ease-out ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Social Media Links */}
          <div className="text-center mb-6">
            <h4 className="text-sky-200 mb-4 text-base md:text-lg font-medium">Follow Our Journey</h4>
            <div className="flex justify-center gap-4 md:gap-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="group relative w-10 h-10 md:w-12 md:h-12 bg-sky-800/50 rounded-full flex items-center justify-center border border-sky-600/30 hover:border-sky-400 transition-all duration-300 hover:bg-sky-700/70 hover:-translate-y-2 hover:shadow-lg backdrop-blur-sm"
                  title={social.name}
                >
                  <span className="text-lg md:text-xl group-hover:scale-110 transition-transform duration-300">
                    {social.icon}
                  </span>
                  
                  {/* Hover effect */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-sky-400/20 to-sky-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
              ))}
            </div>
          </div>

          {/* Bottom border */}
          <div className="border-t border-sky-700/50 pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-sky-300/80 text-xs md:text-sm text-center md:text-left">
                © 2025 Spreading Smiles. All rights reserved. • Made with ❤️ for our community
              </div>
              <div className="flex gap-4 md:gap-6 text-xs md:text-sm text-sky-300/80">
                <a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors duration-300">Terms of Service</a>
                <a href="#" className="hover:text-white transition-colors duration-300">Accessibility</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom decorative wave */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-sky-400 via-sky-300 to-sky-400 opacity-50"></div>
      
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
        backgroundSize: '20px 20px'
      }}></div>
    </footer>
  );
}