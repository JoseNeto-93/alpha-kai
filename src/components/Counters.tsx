import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "motion/react";
import { COUNTERS } from "../data";

// Subcomponent to trigger smooth animation from 0 to target
function CountUpItem({ target, prefix = "", suffix = "" }: { target: number; prefix?: string; suffix?: string }) {
  const [currentValue, setCurrentValue] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px 0px" });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const duration = 2200; // 2.2 seconds animate time
    const isDecimal = target % 1 !== 0;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);

      // cubic out progress curve
      const easeProgress = 1 - Math.pow(1 - percentage, 3);
      const computed = easeProgress * target;

      if (isDecimal) {
        setCurrentValue(parseFloat(computed.toFixed(1)));
      } else {
        setCurrentValue(Math.floor(computed));
      }

      if (percentage < 1) {
        requestAnimationFrame(animate);
      } else {
        setCurrentValue(target);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, target]);

  return (
    <div ref={containerRef} className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-white select-none tracking-tight">
      <span className="text-alpha-red">{prefix}</span>
      {currentValue}
      <span className="text-alpha-red">{suffix}</span>
    </div>
  );
}

export default function Counters() {
  return (
    <section 
      id="conquistas" 
      className="relative py-20 bg-gradient-to-b from-[#0A0A0A] to-[#121212] overflow-hidden border-y border-alpha-gray/60"
    >
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-alpha-red/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {COUNTERS.map((item, idx) => {
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex flex-col items-center justify-center text-center p-6 rounded-2xl glass-card border-none bg-alpha-black/35 hover:bg-alpha-black/60 transition-colors"
              >
                {/* Visual line decoration */}
                <div className="h-1 w-8 bg-alpha-red rounded-full mb-4" />

                <CountUpItem 
                  target={item.target} 
                  prefix={item.prefix} 
                  suffix={item.suffix} 
                />

                <p className="mt-2 text-xs sm:text-sm text-gray-400 font-sans tracking-wide uppercase font-medium">
                  {item.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
