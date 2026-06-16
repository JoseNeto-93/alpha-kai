import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { TESTIMONIALS } from "../data";
import { Star, MessageSquareQuote, Check } from "lucide-react";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 7000); // changes every 7 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section 
      id="depoimentos" 
      className="relative py-24 sm:py-32 bg-gradient-to-b from-alpha-black via-[#0E0E0E] to-[#080808] overflow-hidden"
    >
      {/* Decorative dark grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#151515_1px,transparent_1px),linear-gradient(to_bottom,#151515_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />

      {/* Floating red lights */}
      <div className="absolute top-[20%] right-[10%] w-72 h-72 bg-alpha-red/[0.04] rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[5%] w-80 h-80 bg-alpha-red-dark/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20">
          <span className="text-xs font-mono font-bold tracking-widest text-alpha-red uppercase mb-3 inline-block">MURU DE RESULTADOS</span>
          <h2 className="font-display text-2xl sm:text-4xl uppercase tracking-tight font-extrabold text-white">
            QUEM TREINA, <span className="text-alpha-red">RECOMENDA</span>
          </h2>
          {/* Subtle Google Rating Certification Badge */}
          <div className="flex items-center justify-center gap-2 mt-4 text-xs font-sans text-gray-400">
            <span className="font-bold flex items-center text-yellow-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-current" />
              ))}
            </span>
            <span className="ml-1 text-gray-200">
              <strong className="text-white font-semibold">4.8 / 5</strong> no Google Maps com base em mais de +250 avaliações
            </span>
          </div>
          <div className="h-1 w-16 bg-alpha-red mx-auto mt-4 rounded-full" />
        </div>

        {/* Testimonials Slider Area */}
        <div className="relative min-h-[300px] flex flex-col justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.96, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: -15 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="glass-card p-8 sm:p-12 rounded-2xl relative border-l-4 border-l-alpha-red relative"
            >
              <MessageSquareQuote className="absolute top-6 right-8 text-alpha-red/10 h-20 w-20 pointer-events-none" />

              {/* Gold stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: TESTIMONIALS[activeIndex].rating }).map((_, i) => (
                  <Star key={i} className="h-4 sm:h-5 w-4 sm:w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Comment text */}
              <blockquote className="text-lg sm:text-xl font-sans font-light italic leading-relaxed text-gray-100 mb-8">
                "{TESTIMONIALS[activeIndex].comment}"
              </blockquote>

              {/* Author Row */}
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full overflow-hidden border-2 border-alpha-red/35 shrink-0">
                  <img
                    src={TESTIMONIALS[activeIndex].imageUrl}
                    alt={TESTIMONIALS[activeIndex].name}
                    className="h-full w-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h4 className="font-display text-sm sm:text-base font-extrabold text-white uppercase tracking-wider flex items-center gap-1.5">
                    {TESTIMONIALS[activeIndex].name}
                    <span className="bg-green-600/20 text-green-400 p-0.5 rounded-full inline-flex items-center justify-center border border-green-500/10">
                      <Check className="h-3 w-3" />
                    </span>
                  </h4>
                  <p className="text-xs text-gray-400 font-mono tracking-wider">
                    {TESTIMONIALS[activeIndex].role}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel indicator buttons */}
        <div className="flex justify-center gap-2.5 mt-8 sm:mt-10">
          {TESTIMONIALS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              aria-label={`Show testimonial ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                activeIndex === idx ? "w-8 bg-alpha-red" : "w-2 bg-gray-600 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
