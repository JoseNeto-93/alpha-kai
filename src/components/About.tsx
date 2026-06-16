import { motion } from "motion/react";
import { IMAGES } from "../data";
import { CheckCircle2, Award, Users, Trophy } from "lucide-react";

export default function About() {
  const points = [
    "Mais de 1.200m² de área climatizada premium",
    "Estacionamento privativo vigiado para alunos",
    "Fácil acesso no coração de Itapetininga/SP",
    "Metodologias exclusivas de altíssima eficácia"
  ];

  return (
    <section 
      id="sobre" 
      className="relative py-24 sm:py-32 bg-gradient-to-b from-alpha-black via-[#0E0E0E] to-alpha-black overflow-hidden"
    >
      {/* Visual neon outline line */}
      <div className="absolute top-0 right-1/4 w-[1px] h-32 bg-gradient-to-b from-alpha-red/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-center">
          
          {/* Lado Esquerdo: Imagem Moderna com Molduras e Animações */}
          <motion.div
            initial={{ opacity: 0, x: -60, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            {/* Background glowing layer */}
            <div className="absolute -inset-2 bg-gradient-to-r from-alpha-red to-alpha-red-dark rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-all duration-500" />
            
            {/* Moldura diagonal neon */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-alpha-red rounded-tl-xl pointer-events-none" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-alpha-red rounded-br-xl pointer-events-none" />

            <div className="overflow-hidden rounded-xl border border-alpha-gray shadow-2xl relative group aspect-[4/3]">
              <img
                src={IMAGES.aboutBg}
                alt="ALPHA KAI Bodybuilding Zone"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              {/* Inner glowing vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-alpha-black/80 via-transparent to-transparent opacity-60 pointer-events-none" />
              
              {/* Small floating badge */}
              <div className="absolute bottom-4 left-4 bg-alpha-black/90 border border-alpha-red/30 px-4 py-2.5 rounded-lg flex items-center gap-2 backdrop-blur-md">
                <Trophy className="h-4 w-4 text-alpha-red" />
                <span className="text-[10px] font-mono font-bold tracking-widest text-white uppercase">PADRÃO INTERNACIONAL</span>
              </div>
            </div>

            {/* Micro stats element floating on top of image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute -bottom-6 right-6 bg-alpha-black/90 p-4 rounded-xl border border-alpha-red/25 backdrop-blur-lg hidden sm:flex items-center gap-4 shadow-xl pointer-events-none"
            >
              <div className="bg-alpha-red/20 p-2.5 rounded-lg">
                <Users className="h-5 w-5 text-alpha-red" />
              </div>
              <div>
                <p className="text-xl font-display font-extrabold text-white leading-none">+1.500</p>
                <p className="text-[9px] uppercase tracking-widest text-gray-400 font-medium">Vidas Transformadas</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Lado Direito: História e Corpo de Texto */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <span className="text-xs font-mono font-bold tracking-widest text-alpha-red uppercase mb-4 inline-block">QUEM SOMOS</span>
            
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight font-extrabold text-white leading-tight mb-6">
              A ACADEMIA QUE ESTÁ <span className="text-alpha-red text-glow-red">TRANSFORMANDO ITAPETININGA</span>
            </h2>

            <p className="font-sans text-gray-300 text-base sm:text-lg font-light leading-relaxed mb-8">
              A <strong className="text-white font-semibold">ALPHA KAI</strong> oferece uma experiência completa para quem busca saúde, performance e qualidade de vida. Com estrutura moderna, equipamentos de última geração e profissionais altamente capacitados, você encontra tudo o que precisa para alcançar e superar os seus objetivos com excelência.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {points.map((point, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-5 w-5 text-alpha-red shrink-0 mt-0.5" />
                  <span className="font-sans text-sm text-gray-200">{point}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-start gap-4">
              <a
                href="https://wa.me/5515998275126"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto text-center bg-alpha-red hover:bg-alpha-red-dark text-white shadow-[0_0_20px_rgba(229,9,20,0.3)] hover:shadow-[0_0_30px_rgba(229,9,20,0.6)] px-8 py-3.5 rounded-full font-display font-medium tracking-wide text-xs transition-all duration-300"
              >
                AGENDE SUA VISITA COMERCIAL
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
