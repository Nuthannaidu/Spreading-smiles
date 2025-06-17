import { useEffect, useState } from "react";

// Sample background image - replace with your actual image
const bg = "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80";

export default function Home() {
  const [animate, setAnimate] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAnimate(true);
    }, 300);
    
    setTimeout(() => {
      setContentVisible(true);
    }, 800);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden pt-16"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4)), url(${bg})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {/* Left Banner - Hidden on small screens */}
      <div
        className={`absolute top-0 left-0 w-20 md:w-28 h-full bg-gradient-to-b from-sky-800 to-sky-900 backdrop-blur-sm md:flex hidden items-center justify-center text-white text-3xl md:text-5xl font-bold transition-all duration-1000 ease-out shadow-2xl ${
          animate ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
        style={{ 
          writingMode: "vertical-rl", 
          textOrientation: "upright", 
          padding: "4rem 0", 
          marginTop: "4rem",
          letterSpacing: "0.1em"
        }}
      >
        <span className="tracking-wider">Spreading</span>
      </div>

      {/* Right Banner - Hidden on small screens */}
      <div
        className={`absolute top-0 right-0 w-20 md:w-28 h-full bg-gradient-to-b from-sky-800 to-sky-900 backdrop-blur-sm md:flex hidden items-center justify-center text-white text-3xl md:text-5xl font-bold transition-all duration-1000 ease-out shadow-2xl ${
          animate ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
        }`}
        style={{ 
          writingMode: "vertical-rl", 
          textOrientation: "upright", 
          padding: "4rem 0",
          letterSpacing: "0.1em"
        }}
      >
        <span className="tracking-wider">Smiles</span>
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-2 h-2 bg-white/30 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-1/3 w-1 h-1 bg-sky-200/40 rounded-full animate-ping"></div>
        <div className="absolute bottom-32 left-1/3 w-3 h-3 bg-white/20 rounded-full animate-pulse"></div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-8 md:px-16 text-center relative z-10 max-w-4xl">
        <div
          className={`transition-all duration-1000 ease-out ${
            contentVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-sky-200 via-white to-sky-100 bg-clip-text text-transparent drop-shadow-2xl">
              Spreading
            </span>
            <br />
            <span className="bg-gradient-to-r from-sky-100 via-white to-sky-200 bg-clip-text text-transparent drop-shadow-2xl">
              Smiles
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-sky-100 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
            Creating moments of joy and bringing happiness to communities worldwide
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 text-white px-12 py-4 rounded-full text-xl font-semibold transition-all duration-300 shadow-2xl hover:shadow-sky-500/25 transform hover:-translate-y-1 hover:scale-105 border border-sky-400/30 backdrop-blur-sm">
              <span className="flex items-center gap-2">
                Learn More
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </button>
            
            <button className="group border-2 border-white/30 text-white px-12 py-4 rounded-full text-xl font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm hover:border-white/50 transform hover:-translate-y-1">
              <span className="flex items-center gap-2">
                Get Involved
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom decorative gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-sky-900/30 to-transparent pointer-events-none"></div>
    </section>
  );
}