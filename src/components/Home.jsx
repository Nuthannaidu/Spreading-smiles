import bg from '../assets/bg logo.jpg'
import { useEffect, useState } from "react";

export default function Home() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAnimate(true);
    }, 500); // Delay to make the animation look smooth
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
      {/* Left Banner - Hidden on small screens */}
      <div
        className={`absolute top-0 left-0 w-24 md:w-28 h-full bg-sky-900/90 md:flex hidden items-center justify-center text-white text-4xl md:text-5xl font-bold transition-transform duration-1000 ${animate ? "translate-y-0" : "-translate-y-full"}`}
        style={{ writingMode: "vertical-rl", textOrientation: "upright", padding: "5.5rem", marginTop: "18px" }}
      >
        Spreading
      </div>

      {/* Right Banner - Hidden on small screens */}
      <div
        className={`absolute top-0 right-0 w-24 md:w-28 h-full bg-sky-900/90 md:flex hidden items-center justify-center text-white text-4xl md:text-5xl font-bold transition-transform duration-1000 ${animate ? "translate-y-0" : "translate-y-full"}`}
        style={{ writingMode: "vertical-rl", textOrientation: "upright", padding: "5.5rem" }}
      >
        Smiles
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-8 md:px-16 text-center relative z-10">
        <h1 className="text-6xl md:text-7xl font-bold text-sky-900 mb-8 animate-fade-in">
          Spreading Smiles
        </h1>

        <button className="bg-sky-600 text-white px-10 py-4 rounded-full text-xl font-medium hover:bg-sky-700 transition-colors animate-fade-in shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200">
          Learn More
        </button>
      </div>
    </section>
  );
}
