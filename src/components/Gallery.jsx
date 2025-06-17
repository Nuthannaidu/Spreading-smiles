import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import photo1 from "../assets/1.jpg";
import photo2 from "../assets/2.jpg";
import photo3 from "../assets/3.jpg";
import photo4 from "../assets/4.jpg";
import photo5 from "../assets/5.jpg";
import photo6 from "../assets/6.jpg";
import photo7 from "../assets/7.jpg";
import photo8 from "../assets/8.jpg";

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [startIndex, setStartIndex] = useState(0);
  const [hovered, setHovered] = useState(false);
  const galleryRef = useRef(null);

  const images = [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8];
  const visibleImages = images.slice(startIndex, startIndex + 6);

  const nextImage = () => {
    setSelectedIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setSelectedIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    if (startIndex + 6 < images.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const prevSlide = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <section 
      id="gallery" 
      className="py-20 bg-gray-100"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Our Adorable Gallery</h2>
        <div className="relative flex items-center overflow-hidden" ref={galleryRef}>
          {images.length > 6 && hovered && (
            <button className="absolute left-4 z-10 bg-gray-800 text-white p-3 rounded-full shadow-lg transition-transform transform hover:scale-110" onClick={prevSlide}>
              <ChevronLeft size={32} />
            </button>
          )}
          <div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 w-full overflow-x-hidden scroll-smooth"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            {visibleImages.map((image, index) => (
              <motion.div
                key={startIndex + index}
                className="cursor-pointer overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105"
                whileHover={{ scale: 1.05 }}
                onClick={() => setSelectedIndex(startIndex + index)}
              >
                <img
                  src={image}
                  alt={`Gallery image ${startIndex + index + 1}`}
                  className="w-full h-64 object-cover rounded-lg"
                />
              </motion.div>
            ))}
          </div>
          {images.length > 6 && hovered && (
            <button className="absolute right-4 z-10 bg-gray-800 text-white p-3 rounded-full shadow-lg transition-transform transform hover:scale-110" onClick={nextSlide}>
              <ChevronRight size={32} />
            </button>
          )}
        </div>
      </div>

      {/* Lightbox with Sliding */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <button
            className="absolute top-4 right-4 text-white text-2xl transition-transform transform hover:scale-110"
            onClick={() => setSelectedIndex(null)}
          >
            <X size={32} />
          </button>
          <button className="absolute left-4 text-white transition-transform transform hover:scale-110" onClick={prevImage}>
            <ChevronLeft size={40} />
          </button>
          <AnimatePresence>
            <motion.img
              key={images[selectedIndex]}
              src={images[selectedIndex]}
              alt="Selected gallery image"
              className="max-w-4xl w-full h-auto rounded-lg shadow-xl"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.4 }}
            />
          </AnimatePresence>
          <button className="absolute right-4 text-white transition-transform transform hover:scale-110" onClick={nextImage}>
            <ChevronRight size={40} />
          </button>
        </div>
      )}
    </section>
  );
}
