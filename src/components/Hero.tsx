import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { IMAGES } from "../data";
import { Star, MapPin, Clock, Award, ShieldCheck } from "lucide-react";

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Anim split words helper
  const titleText = "SEJA SUA MELHOR VERSÃO";
  const words = titleText.split(" ");

  return (
    <section
      id="inicio"
      className="relative min-h-screen text-white flex items-center justify-center overflow-hidden bg-alpha-black"
    >
      {/* Parallax Image Background container */}
      <div 
        className="absolute inset-0 w-full h-full z-0 transition-transform duration-75 ease-out scale-105"
        style={{
          transform: `translateY(${scrollY * 0.15}px)`,
        }}
      >
        <img
          src={IMAGES.heroBg}
          alt="ALPHA KAI Gym Interior"
          className="w-full h-full object-cover brightness-[0.25]"
          priority="high"
          referrerPolicy="no-referrer"
        />
        {/* Soft Red Spotlights and overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-alpha-black via-transparent to-alpha-black/70 mix-blend-multiply" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0A0A0A] to-transparent" />
        <div className="absolute top-1/4 left-1/4 w-[35vw] h-[35vw] bg-alpha-red/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[25vw] h-[25vw] bg-alpha-red-dark/15 rounded-full blur-[100px] pointer-events-none" />
      </div>

      {/* Floating Sparkles effect */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-alpha-red/40 animate-blink"
            style={{
              top: `${15 + Math.random() * 70}%`,
              left: `${10 + Math.random() * 80}%`,
              width: `${2 + Math.random() * 3}px`,
              height: `${2 + Math.random() * 3}px`,
              animationDelay: `${i * 0.4}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20 pt-24 pb-16 text-center">
        {/* Upper badge tag: Sparkle or Location */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-alpha-red/10 border border-alpha-red/35 backdrop-blur-sm text-xs font-mono font-bold tracking-widest text-alpha-red uppercase mb-8"
        >
          <Award className="h-3.5 w-3.5 animate-pulse" /> A ACADEMIA DE ELITE
        </motion.div>

        {/* Word-by-word Reveal Headline */}
        <h1 className="font-display text-4xl sm:text-6xl md:text-8xl tracking-tighter leading-none uppercase font-extrabold flex flex-wrap justify-center gap-x-2 sm:gap-x-4 mb-6">
          {words.map((word, wordIdx) => (
            <span key={wordIdx} className="overflow-hidden inline-block py-2">
              <motion.span
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.35 + wordIdx * 0.15,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={
                  word === "MELHOR" || word === "VERSÃO"
                    ? "text-alpha-red glow-text-red inline-block"
                    : "text-white inline-block"
                }
              >
                {word}
              </motion.span>
            </span>
          ))}
        </h1>

        {/* Subheadline Fade Up */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-gray-300 font-sans font-light leading-relaxed mb-10 px-4"
        >
          Academia 24 horas com equipamentos modernos, profissionais qualificados e uma estrutura completa para transformar seus resultados.
        </motion.p>

        {/* Action Buttons with subtle glows and bounce */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 mb-20"
        >
          <a
            href="https://wa.me/5515998275126?text=Olá,%20gostaria%20de%20começar%20a%20treinar%20na%20Alpha%20Kai!"
            target="_blank"
            rel="noreferrer"
            className="group relative w-full sm:w-auto px-8 py-4 bg-alpha-red hover:bg-alpha-red-dark text-white rounded-full font-display font-black text-sm tracking-widest uppercase transition-all duration-300 shadow-[0_0_25px_rgba(229,9,20,0.45)] hover:shadow-[0_0_40px_rgba(229,9,20,0.7)] flex items-center justify-center gap-2 overflow-hidden"
          >
            {/* Shimmer sheen */}
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none" />
            COMEÇAR AGORA
          </a>
          <a
            href="https://wa.me/5515998275126?text=Olá,%20gostaria%20de%20agendar%20uma%20visita%20de%20experiência%20na%20Alpha%20Kai!"
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto px-8 py-4 bg-transparent border border-gray-400 hover:border-alpha-red hover:bg-alpha-red/10 text-white rounded-full font-display font-extrabold text-sm tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-2"
          >
            AGENDAR VISITA
          </a>
        </motion.div>

        {/* Quick Location & Rating Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto border-t border-alpha-gray/80 pt-10"
        >
          <div className="flex flex-col items-center justify-center p-3 rounded-lg glass-card border-none">
            <div className="flex items-center gap-1 text-yellow-400 mb-1">
              <Star className="h-4 w-4 fill-current" />
              <span className="font-display font-extrabold text-white text-base">4.8</span>
            </div>
            <p className="text-[11px] uppercase tracking-widest text-gray-400 font-medium">Nota no Google</p>
          </div>

          <div className="flex flex-col items-center justify-center p-3 rounded-lg glass-card border-none">
            <span className="font-display font-extrabold text-white text-base mb-1">💪 +250</span>
            <p className="text-[11px] uppercase tracking-widest text-gray-400 font-medium">Avaliações Reais</p>
          </div>

          <div className="flex flex-col items-center justify-center p-3 rounded-lg glass-card border-none">
            <div className="flex items-center gap-1.5 text-alpha-red mb-1">
              <Clock className="h-4 w-4" />
              <span className="font-display font-extrabold text-white text-base">24H</span>
            </div>
            <p className="text-[11px] uppercase tracking-widest text-gray-400 font-medium">Sempre Aberta</p>
          </div>

          <div className="flex flex-col items-center justify-center p-3 rounded-lg glass-card border-none">
            <div className="flex items-center gap-2 text-alpha-red mb-1">
              <MapPin className="h-5 w-5" />
              <span className="font-display font-extrabold text-white text-[10px] md:text-[12px] lg:text-sm max-w-[220px] whitespace-normal text-center leading-tight">ITAPETININGA/SP</span>
            </div>
            <p className="text-sm uppercase tracking-widest text-gray-300 font-medium font-sans">Av. Wenceslau Braz</p>
          </div>
        </motion.div>
      </div>

      {/* Decorative linear bottom divider (Red pulse) */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-alpha-red to-transparent opacity-80" />
    </section>
  );
}
