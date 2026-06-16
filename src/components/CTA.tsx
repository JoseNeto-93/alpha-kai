import { motion } from "motion/react";
import { ArrowRight, Trophy, Sparkles } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative py-24 sm:py-28 overflow-hidden bg-alpha-black">
      {/* Curved or skewed boundaries for style */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#800] to-alpha-red opacity-95" />
        {/* Dynamic mesh lines */}
        <div className="absolute inset-0 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] opacity-10" />
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-white/10" />
      </div>

      {/* Scattered background accents */}
      <div className="absolute -top-12 -left-12 opacity-15 text-white pointer-events-none">
        <Trophy className="h-64 w-64 rotate-12" />
      </div>
      <div className="absolute -bottom-12 -right-12 opacity-15 text-white pointer-events-none">
        <Sparkles className="h-64 w-64 -rotate-12" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center">
        
        <motion.span
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-block px-4 py-1.5 rounded-full bg-black/30 border border-white/10 text-[10px] font-mono tracking-widest text-white uppercase mb-6"
        >
          ⏱️ ACADEMIA 24 HORAS POR DIA
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="font-display text-4xl sm:text-5xl md:text-6xl tracking-tight leading-none uppercase font-black text-white mb-6"
        >
          SUA TRANSFORMAÇÃO <br />
          <span className="text-black bg-white inline-block px-4 py-1 mt-2 transform -rotate-1 skew-x-1">
            COMEÇA HOJE
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-xl mx-auto text-white/95 font-sans font-light text-sm sm:text-base leading-relaxed mb-10"
        >
          Não espere a segunda-feira chegar. Faça parte do clã ALPHA KAI e ative a sua melhor versão física e mental na academia mais moderna de Itapetininga/SP.
        </motion.p>

        {/* Large pulsing button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center"
        >
          <motion.a
            href="https://wa.me/5515998275126?text=Quero%20treinar%20na%20Alpha%20Kai!%20Por%20favor,%20me%20passe%20os%20detalhes."
            target="_blank"
            rel="noreferrer"
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0 0 45px rgba(255,255,255,0.4)" 
            }}
            whileTap={{ scale: 0.98 }}
            className="group px-8 sm:px-12 py-5 sm:py-6 bg-white hover:bg-neutral-100 text-alpha-red rounded-full font-display font-black tracking-widest text-sm sm:text-base uppercase flex items-center gap-3 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.3)] cursor-pointer"
          >
            QUERO TREINAR NA ALPHA KAI
            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}
