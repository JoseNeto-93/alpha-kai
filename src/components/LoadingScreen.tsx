import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Dumbbell } from "lucide-react";

export default function LoadingScreen({ onFinish }: { onFinish: () => void }) {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Compile progress bar from 0% to 100% slowly
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // randomized progressive leaps
        const leap = Math.floor(Math.random() * 15) + 5;
        return Math.min(prev + leap, 100);
      });
    }, 150);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      // Small timeout for user satisfaction
      const delay = setTimeout(() => {
        setIsVisible(false);
        onFinish();
      }, 700);
      return () => clearTimeout(delay);
    }
  }, [progress, onFinish]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          id="cinematic-loader"
          initial={{ opacity: 1 }}
          exit={{ 
            y: "-100vh",
            opacity: 0,
            transition: { duration: 0.85, ease: [0.76, 0, 0.24, 1] } 
          }}
          className="fixed inset-0 bg-[#060606] z-[9999] flex flex-col items-center justify-center text-white select-none"
        >
          {/* Pulsing Backlight glow sphere */}
          <div className="absolute w-[40vw] h-[40vw] bg-alpha-red/10 rounded-full blur-[100px] pointer-events-none" />

          {/* Central Animated Content */}
          <div className="text-center relative z-10 flex flex-col items-center max-w-sm px-4">
            {/* Logo Icon with double scale pulse */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: [1, 1.15, 1], opacity: 1 }}
              transition={{
                delay: 0.1,
                scale: { repeat: Infinity, duration: 1.8, ease: "easeInOut" },
                opacity: { duration: 0.5 }
              }}
              className="bg-alpha-red p-5 rounded-full flex items-center justify-center mb-8 shadow-[0_0_35px_rgba(229,9,20,0.6)]"
            >
              <Dumbbell className="h-8 w-8 text-white" />
            </motion.div>

            {/* Brand Title Letter Stagger */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-2"
            >
              <h1 className="font-display text-4xl font-extrabold tracking-widest text-white leading-none">
                ALPHA <span className="text-alpha-red">KAI</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-[10px] font-mono tracking-widest text-gray-400 uppercase mb-10"
            >
              ACADEMIA 24H PREMIUM
            </motion.p>

            {/* Circular progress bar and text percentage */}
            <div className="relative w-16 h-16 mb-4 flex items-center justify-center">
              <svg className="w-full h-full transform -rotate-90">
                {/* Background track circle */}
                <circle
                  cx="32"
                  cy="32"
                  r="28"
                  className="stroke-alpha-gray/30"
                  strokeWidth="2.5"
                  fill="transparent"
                />
                {/* Animated active circle path */}
                <motion.circle
                  cx="32"
                  cy="32"
                  r="28"
                  className="stroke-alpha-red"
                  strokeWidth="3"
                  fill="transparent"
                  strokeDasharray={2 * Math.PI * 28}
                  strokeDashoffset={((100 - progress) / 100) * (2 * Math.PI * 28)}
                  transition={{ ease: "easeInOut" }}
                />
              </svg>
              <span className="absolute font-mono text-xs font-semibold text-white">
                {progress}%
              </span>
            </div>

            {/* Loading Action Label */}
            <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-gray-500 animate-pulse h-4">
              {progress < 40 && "Iniciando biomecânica..."}
              {progress >= 40 && progress < 80 && "Sincronizando sistemas de elite..."}
              {progress >= 80 && progress < 100 && "Liberando área de força..."}
              {progress === 100 && "PRONTO PARA TREINAR"}
            </p>
          </div>

          {/* Lower layout tagline */}
          <div className="absolute bottom-10 font-mono text-[8px] text-gray-600 tracking-widest uppercase">
            ITAPETININGA / SP • PATROCINADORA DA SUA EVOLUÇÃO
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
