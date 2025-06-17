import bg from '../assets/bg logo.jpg'
import { useEffect, useState } from "react";

export default function Home() {
  const [animate, setAnimate] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAnimate(true);
    }, 500);
    
    setTimeout(() => {
      setContentVisible(true);
    }, 800);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden pt-16"
      style={{
        backgroundImage: `linear-gradient(rgba(235, 232, 232, 0.5), rgba(236, 234, 234, 0.5)),url(${bg})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "auto",
      }}
    >
      {/* Floating decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-1/4 w-3 h-3 bg-sky-400/30 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-1/3 w-2 h-2 bg-sky-500/40 rounded-full animate-ping"></div>
        <div className="absolute bottom-40 left-1/3 w-4 h-4 bg-sky-300/20 rounded-full animate-bounce"></div>
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-sky-600/30 rounded-full animate-pulse"></div>
      </div>

      {/* Left Banner - Enhanced with better styling */}
      <div
        className={`absolute top-0 left-0 w-24 md:w-28 h-full bg-gradient-to-b from-sky-800/95 via-sky-900/95 to-sky-800/95 md:flex hidden items-center justify-center text-white text-4xl md:text-5xl font-bold transition-all duration-1000 ease-out shadow-2xl border-r border-sky-700/50 ${
          animate ? "translate-y-0 opacity-100" : "-translate-y-full opacity-80"
        }`}
        style={{ 
          writingMode: "vertical-rl", 
          textOrientation: "mixed", 
          padding: "5.5rem", 
          marginTop: "18px",
          backdropFilter: "blur(8px)",
          borderRadius: "0 8px 8px 0"
        }}
      >
        <span className="tracking-wider drop-shadow-lg text-white font-extrabold">
          Spreading
        </span>
        
        {/* Decorative elements on banner */}
        <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-1 h-8 bg-gradient-to-b from-transparent via-sky-300 to-transparent"></div>
      </div>

      {/* Right Banner - Enhanced with better styling */}
      <div
        className={`absolute top-0 right-0 w-24 md:w-28 h-full bg-gradient-to-b from-sky-800/95 via-sky-900/95 to-sky-800/95 md:flex hidden items-center justify-center text-white text-4xl md:text-5xl font-bold transition-all duration-1000 ease-out shadow-2xl border-l border-sky-700/50 ${
          animate ? "translate-y-0 opacity-100" : "translate-y-full opacity-80"
        }`}
        style={{ 
          writingMode: "vertical-rl", 
          textOrientation: "mixed", 
          padding: "5.5rem",
          backdropFilter: "blur(8px)",
          borderRadius: "8px 0 0 8px"
        }}
      >
        <span className="tracking-wider drop-shadow-lg text-white font-extrabold">
          Smiles
        </span>
        
        {/* Decorative elements on banner */}
        <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-1 h-8 bg-gradient-to-b from-transparent via-sky-300 to-transparent"></div>
      </div>

      {/* Main Content - Enhanced with better animations and styling */}
      <div className="container mx-auto px-8 md:px-16 text-center relative z-10 max-w-5xl">
        <div
          className={`transition-all duration-1000 ease-out ${
            contentVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Enhanced title with multiple effects */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-sky-900 mb-8 leading-tight relative">
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-sky-800 via-sky-900 to-sky-800 bg-clip-text text-transparent drop-shadow-2xl">
                Spreading Smiles
              </span>
              
              {/* Subtle glow effect behind text */}
              <span className="absolute inset-0 bg-gradient-to-r from-sky-400/20 via-sky-500/20 to-sky-400/20 blur-xl -z-10 scale-110">
                Spreading Smiles
              </span>
            </span>
          </h1>

          {/* Subtitle - newly added */}
          <p className="text-xl md:text-2xl text-sky-700/80 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            Creating moments of joy and bringing happiness to communities around the world
          </p>

          {/* Enhanced button with more interactive effects */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group relative bg-gradient-to-r from-sky-600 via-sky-600 to-sky-700 hover:from-sky-700 hover:via-sky-700 hover:to-sky-800 text-white px-12 py-4 rounded-full text-xl font-semibold transition-all duration-300 shadow-2xl hover:shadow-sky-500/30 transform hover:-translate-y-1 hover:scale-105 border border-sky-500/30 backdrop-blur-sm overflow-hidden">
              {/* Button shine effect */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
              
              <span className="relative flex items-center gap-3">
                Learn More
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </button>

            {/* Secondary button - newly added */}
            <button className="group relative border-2 border-sky-600/50 text-sky-800 hover:text-white px-12 py-4 rounded-full text-xl font-semibold hover:bg-sky-600 transition-all duration-300 backdrop-blur-sm hover:border-sky-600 transform hover:-translate-y-1 hover:shadow-lg overflow-hidden">
              {/* Button background effect */}
              <span className="absolute inset-0 bg-sky-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              
              <span className="relative flex items-center gap-3">
                Get Involved
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </span>
            </button>
          </div>
        </div>

        {/* Scroll indicator - newly added */}
        <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1000 ${contentVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          <div className="flex flex-col items-center text-sky-600/60">
            <span className="text-sm font-medium mb-2">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-sky-400/40 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-sky-500/60 rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient overlay for better text readability */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-sky-50/30 to-transparent pointer-events-none"></div>
    </section>
  );
}