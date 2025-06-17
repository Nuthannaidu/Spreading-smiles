import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight, X, Heart, Download, Share2, ZoomIn } from "lucide-react";
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
  const [likedImages, setLikedImages] = useState(new Set());
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

  const toggleLike = (index) => {
    const newLiked = new Set(likedImages);
    if (newLiked.has(index)) {
      newLiked.delete(index);
    } else {
      newLiked.add(index);
    }
    setLikedImages(newLiked);
  };

  return (
    <section 
      id="gallery" 
      className="py-20 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full opacity-20 blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-pink-100 to-orange-100 rounded-full opacity-20 blur-xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-800 via-slate-600 to-slate-800 bg-clip-text text-transparent mb-4">
            Our Adorable Gallery
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Capturing precious moments and spreading joy through every photograph
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Gallery Container */}
        <div className="relative group">
          {/* Navigation Buttons */}
          {images.length > 6 && (
            <>
              <button 
                className={`absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 backdrop-blur-md text-slate-700 p-4 rounded-full shadow-2xl transition-all duration-300 hover:bg-white hover:scale-110 hover:shadow-xl border border-white/50 ${
                  hovered || startIndex === 0 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                } ${startIndex === 0 ? 'cursor-not-allowed opacity-50' : ''}`}
                onClick={prevSlide}
                disabled={startIndex === 0}
              >
                <ChevronLeft size={24} />
              </button>
              
              <button 
                className={`absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 backdrop-blur-md text-slate-700 p-4 rounded-full shadow-2xl transition-all duration-300 hover:bg-white hover:scale-110 hover:shadow-xl border border-white/50 ${
                  hovered || startIndex + 6 >= images.length ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                } ${startIndex + 6 >= images.length ? 'cursor-not-allowed opacity-50' : ''}`}
                onClick={nextSlide}
                disabled={startIndex + 6 >= images.length}
              >
                <ChevronRight size={24} />
              </button>
            </>
          )}

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-8">
            {visibleImages.map((image, index) => (
              <div
                key={startIndex + index}
                className="group relative cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white p-2"
              >
                {/* Image Container */}
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src={image}
                    alt={`Gallery image ${startIndex + index + 1}`}
                    className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-white/20 backdrop-blur-md rounded-full p-4 transform scale-0 group-hover:scale-100 transition-transform duration-300">
                        <ZoomIn className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleLike(startIndex + index);
                      }}
                      className={`p-2 rounded-full backdrop-blur-md transition-all duration-300 hover:scale-110 ${
                        likedImages.has(startIndex + index) 
                          ? 'bg-red-500 text-white shadow-lg shadow-red-500/25' 
                          : 'bg-white/20 text-white hover:bg-white/30'
                      }`}
                    >
                      <Heart size={16} fill={likedImages.has(startIndex + index) ? 'currentColor' : 'none'} />
                    </button>
                  </div>
                </div>

                {/* Image Info */}
                <div className="p-4">
                  <h3 className="font-semibold text-slate-800 mb-1">Memory #{startIndex + index + 1}</h3>
                  <p className="text-sm text-slate-500">A beautiful moment captured</p>
                </div>

                {/* Click handler for lightbox */}
                <div 
                  className="absolute inset-0 cursor-pointer"
                  onClick={() => setSelectedIndex(startIndex + index)}
                ></div>
              </div>
            ))}
          </div>

          {/* Progress Indicators */}
          {images.length > 6 && (
            <div className="flex justify-center mt-12 space-x-2">
              {Array.from({ length: Math.ceil(images.length / 6) }).map((_, i) => (
                <button
                  key={i}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    Math.floor(startIndex / 6) === i ? 'bg-blue-500 w-8' : 'bg-slate-300'
                  }`}
                  onClick={() => setStartIndex(i * 6)}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Enhanced Lightbox */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          {/* Background overlay */}
          <div 
            className="absolute inset-0 cursor-pointer"
            onClick={() => setSelectedIndex(null)}
          ></div>

          {/* Close button */}
          <button
            className="absolute top-6 right-6 text-white/80 hover:text-white text-2xl transition-all duration-300 hover:scale-110 z-10 bg-black/20 backdrop-blur-sm rounded-full p-3 hover:bg-black/40"
            onClick={() => setSelectedIndex(null)}
          >
            <X size={24} />
          </button>

          {/* Image counter */}
          <div className="absolute top-6 left-6 text-white/80 bg-black/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">
            {selectedIndex + 1} / {images.length}
          </div>

          {/* Action buttons */}
          <div className="absolute top-6 left-1/2 -translate-x-1/2 flex gap-3">
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleLike(selectedIndex);
              }}
              className={`p-3 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110 ${
                likedImages.has(selectedIndex) 
                  ? 'bg-red-500 text-white shadow-lg shadow-red-500/25' 
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              <Heart size={20} fill={likedImages.has(selectedIndex) ? 'currentColor' : 'none'} />
            </button>
            <button className="p-3 rounded-full bg-white/10 text-white backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-white/20">
              <Download size={20} />
            </button>
            <button className="p-3 rounded-full bg-white/10 text-white backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-white/20">
              <Share2 size={20} />
            </button>
          </div>

          {/* Navigation buttons */}
          <button 
            className="absolute left-6 top-1/2 -translate-y-1/2 text-white/80 hover:text-white transition-all duration-300 hover:scale-110 bg-black/20 backdrop-blur-sm rounded-full p-4 hover:bg-black/40" 
            onClick={prevImage}
          >
            <ChevronLeft size={32} />
          </button>
          
          <button 
            className="absolute right-6 top-1/2 -translate-y-1/2 text-white/80 hover:text-white transition-all duration-300 hover:scale-110 bg-black/20 backdrop-blur-sm rounded-full p-4 hover:bg-black/40" 
            onClick={nextImage}
          >
            <ChevronRight size={32} />
          </button>

          {/* Main image */}
          <div className="relative max-w-5xl w-full h-auto">
            <img
              src={images[selectedIndex]}
              alt="Selected gallery image"
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg shadow-2xl transition-opacity duration-300"
            />
          </div>

          {/* Image navigation dots */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
            {images.map((_, i) => (
              <button
                key={i}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  selectedIndex === i ? 'bg-white w-6' : 'bg-white/40'
                }`}
                onClick={() => setSelectedIndex(i)}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}