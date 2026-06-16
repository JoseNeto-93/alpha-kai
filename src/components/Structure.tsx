import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { STRUCTURE_SLIDES } from "../data";
import { ChevronLeft, ChevronRight, Play, Pause, Compass } from "lucide-react";

export default function Structure() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const slideCount = STRUCTURE_SLIDES.length;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slideCount);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slideCount) % slideCount);
  };

  // Reset autoplay timer whenever current index or playing status changes
  useEffect(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    if (isPlaying) {
      timeoutRef.current = setTimeout(() => {
        nextSlide();
      }, 6000); // 6 seconds per slide for majestic cinematic immersion
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [currentIndex, isPlaying]);

  return (
    <section 
      id="estrutura" 
      className="relative bg-alpha-black py-24 sm:py-32 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-xs font-mono font-bold tracking-widest text-alpha-red uppercase mb-3 inline-block">COMPLEXO DE TREINAMENTO</span>
            <h2 className="font-display text-2xl sm:text-4xl tracking-tight uppercase font-extrabold text-white">
              ESTRUTURA <span className="text-alpha-red">DE PONTA</span>
            </h2>
            <div className="h-1 w-20 bg-alpha-red mt-3 rounded-full" />
          </div>
          <p className="max-w-md text-gray-400 text-sm font-sans font-light leading-relaxed">
            Navegue pelos nossos espaços planejados para otimizar ao máximo cada gota de suor e foco que você投入.
          </p>
        </div>
      </div>

      {/* Main Fullscreen-style Carousel Container */}
      <div 
        className="relative h-[480px] sm:h-[600px] w-full max-w-7xl mx-auto px-0 sm:px-4 lg:px-8"
        onMouseEnter={() => setIsPlaying(false)}
        onMouseLeave={() => setIsPlaying(true)}
      >
        <div className="relative w-full h-full overflow-hidden rounded-none sm:rounded-2xl border-y sm:border border-alpha-gray/60 bg-[#121212] flex items-center shadow-2xl">
          
          {/* Slides Images Presentation with AnimatePresence */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.9, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full"
            >
              <div className="absolute inset-0 bg-alpha-black/40 z-10" />
              <div className="absolute inset-y-0 left-0 w-full md:w-2/3 bg-gradient-to-r from-alpha-black via-alpha-black/80 to-transparent z-10 pointer-events-none" />
              <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-alpha-black/95 to-transparent z-10 pointer-events-none" />
              
              {/* Image with zoom element representing Ken Burns */}
              <motion.img
                src={STRUCTURE_SLIDES[currentIndex].imageUrl}
                alt={STRUCTURE_SLIDES[currentIndex].title}
                key={`img-${currentIndex}`}
                initial={{ scale: 1.05 }}
                animate={{ scale: 1.12 }}
                transition={{ duration: 10, ease: "linear" }}
                className="w-full h-full object-cover origin-center brightness-[0.7] md:brightness-95 select-none pointer-events-none"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </AnimatePresence>

          {/* Slide Description Content (Left Column overlap) */}
          <div className="relative z-20 w-full md:w-3/5 px-6 sm:px-12 md:px-16 pointer-events-none flex flex-col justify-end md:justify-center h-full pb-16 md:pb-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 30 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="flex flex-col gap-4"
              >
                {/* Accent mini indicator */}
                <span className="font-mono text-xs font-bold tracking-widest text-alpha-red uppercase inline-flex items-center gap-1.5 p-1 rounded">
                  <Compass className="h-3.5 w-3.5 animate-spin" style={{ animationDuration: '8s' }} /> ÁREA {currentIndex + 1} DE {slideCount}
                </span>

                <h3 className="font-display text-xl sm:text-3xl lg:text-4xl uppercase tracking-wider text-white font-black leading-tight">
                  {STRUCTURE_SLIDES[currentIndex].title}
                </h3>

                <p className="font-sans text-sm sm:text-base text-gray-300 font-light leading-relaxed max-w-xl">
                  {STRUCTURE_SLIDES[currentIndex].description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Overlay Buttons (Manual) */}
          <div className="absolute bottom-6 right-6 sm:bottom-12 sm:right-12 z-30 flex items-center gap-3">
            {/* Play/Pause control status */}
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              aria-label={isPlaying ? "Pause autoplay" : "Start autoplay"}
              className="bg-alpha-black/70 hover:bg-alpha-red border border-alpha-gray/80 hover:border-alpha-red p-2.5 rounded-full text-white transition-all duration-300 shadow-md flex items-center justify-center cursor-pointer"
            >
              {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
            </button>

            {/* Prev button */}
            <button
              onClick={prevSlide}
              aria-label="Anterior"
              className="bg-alpha-black/70 hover:bg-alpha-red border border-alpha-gray/80 hover:border-alpha-red p-2.5 rounded-full text-white transition-all duration-300 shadow-md flex items-center justify-center cursor-pointer"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>

            {/* Next button */}
            <button
              onClick={nextSlide}
              aria-label="Próximo"
              className="bg-alpha-black/70 hover:bg-alpha-red border border-alpha-gray/80 hover:border-alpha-red p-2.5 rounded-full text-white transition-all duration-300 shadow-md flex items-center justify-center cursor-pointer"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>

          {/* Slide indicators bullets (Left offset bottom) */}
          <div className="absolute bottom-6 left-6 sm:bottom-12 sm:left-12 z-30 flex gap-2">
            {STRUCTURE_SLIDES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Ir para slide ${idx + 1}`}
                className={`h-1.5 transition-all duration-500 rounded-full cursor-pointer ${
                  currentIndex === idx ? "w-8 bg-alpha-red shadow-[0_0_10px_rgba(229,9,20,0.8)]" : "w-2 bg-gray-600 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
