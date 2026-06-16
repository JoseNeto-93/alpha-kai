import React from "react";
import { motion } from "motion/react";
import { DIFFERENTIALS } from "../data";
import { Dumbbell, GraduationCap, Clock, Smartphone, Target, Flame } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  Dumbbell: <Dumbbell className="h-7 w-7 text-alpha-red" />,
  GraduationCap: <GraduationCap className="h-7 w-7 text-alpha-red" />,
  Clock: <Clock className="h-7 w-7 text-alpha-red" />,
  Smartphone: <Smartphone className="h-7 w-7 text-alpha-red" />,
  Target: <Target className="h-7 w-7 text-alpha-red" />,
  Flame: <Flame className="h-7 w-7 text-alpha-red" />,
};

export default function Differentials() {
  // Staggering parent
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6, 
        ease: [0.16, 1, 0.3, 1] 
      } 
    },
  };

  return (
    <section 
      id="diferenciais" 
      className="relative py-24 sm:py-32 bg-alpha-black overflow-hidden"
    >
      {/* Absolute glowing shapes behind differentials */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-alpha-red/[0.03] rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">
        
        {/* Section Title Header */}
        <div className="text-center mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-xs font-mono font-bold tracking-widest text-alpha-red uppercase mb-3 inline-block"
          >
            NOSSOS PILARES
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-2xl sm:text-4xl md:text-5xl tracking-tight uppercase font-extrabold text-white"
          >
            O PADRÃO <span className="text-alpha-red">ALPHA KAI</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-alpha-red mx-auto mt-4 rounded-full"
          />
        </div>

        {/* 3D Perspective Grid Column Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          style={{ perspective: 1200 }} /* Gives depth for Framer Motion 3D rotations */
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {DIFFERENTIALS.map((diff) => (
            <motion.div
              key={diff.id}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.04, 
                rotateX: 4, 
                rotateY: -4, 
                translateZ: 10,
                boxShadow: "0 15px 35px rgba(229, 9, 20, 0.18)"
              }}
              style={{ transformStyle: "preserve-3d" }}
              className="glass-card glass-card-hover group p-8 sm:p-10 rounded-2xl cursor-default"
            >
              <div 
                className="mb-6 bg-alpha-black/60 p-4 rounded-xl border border-alpha-red/10 group-hover:border-alpha-red/50 w-14 h-14 flex items-center justify-center transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(229,9,20,0.4)]"
                style={{ transform: "translateZ(30px)" }}
              >
                {iconMap[diff.iconName] || <Dumbbell className="h-7 w-7 text-alpha-red" />}
              </div>

              <h3 
                className="font-display text-lg uppercase tracking-wider text-white font-extrabold mb-3 group-hover:text-alpha-red transition-colors"
                style={{ transform: "translateZ(20px)" }}
              >
                {diff.title}
              </h3>

              <p 
                className="font-sans text-sm text-gray-400 font-light leading-relaxed group-hover:text-gray-300 transition-colors"
                style={{ transform: "translateZ(10px)" }}
              >
                {diff.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
