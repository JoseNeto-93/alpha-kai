import { motion } from "motion/react";
import { PLANS } from "../data";
import { Check, ShieldCheck, Flame, Zap } from "lucide-react";

export default function Plans() {
  return (
    <section 
      id="planos" 
      className="relative py-24 sm:py-32 bg-alpha-black overflow-hidden"
    >
      {/* Background spotlights */}
      <div className="absolute top-[30%] left-1/2 -translate-x-1/2 w-[55vw] h-[55vw] bg-alpha-red/[0.04] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-[-10vw] w-[35vw] h-[35vw] bg-alpha-red-dark/[0.05] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Heading */}
        <div className="text-center mb-16 sm:mb-24">
          <span className="text-xs font-mono font-bold tracking-widest text-alpha-red uppercase mb-3 inline-block">MENSALIDADES PLANOS</span>
          <h2 className="font-display text-2xl sm:text-4xl uppercase tracking-tight font-extrabold text-white">
            ESCOLHA SEU <span className="text-alpha-red">DESTINO</span>
          </h2>
          <p className="max-w-md mx-auto text-gray-400 text-sm font-sans font-light leading-relaxed mt-3">
            Planos sob medida desenvolvidos para se adaptarem aos seus objetivos. Sem taxas ocultas, transparência total.
          </p>
          <div className="h-1 w-20 bg-alpha-red mx-auto mt-4 rounded-full" />
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-6 lg:gap-8 items-stretch max-w-6xl mx-auto">
          {PLANS.map((plan) => {
            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                whileHover={{ y: -8, transition: { duration: 0.25 } }}
                className={`rounded-2xl transition-all duration-300 flex flex-col justify-between relative cursor-default ${
                  plan.isHighlighted
                    ? "bg-[#141414]/90 border-2 border-alpha-red shadow-[0_0_40px_rgba(229,9,20,0.25)] p-8 sm:p-10 z-20"
                    : "glass-card border border-alpha-gray/80 hover:border-alpha-red/40 p-8 sm:p-10 z-10"
                }`}
              >
                {/* Popularity Badge */}
                {plan.isHighlighted && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-alpha-red text-white font-mono text-[9px] font-black tracking-widest uppercase px-4 py-1.5 rounded-full inline-flex items-center gap-1.5 shadow-[0_4px_15px_rgba(229,9,20,0.5)]">
                    <Zap className="h-3 w-3 fill-current" /> MAIS PROCURADO
                  </span>
                )}

                {/* Plan Header */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    {plan.isHighlighted ? (
                      <Flame className="h-5 w-5 text-alpha-red animate-pulse" />
                    ) : (
                      <ShieldCheck className="h-5 w-5 text-gray-500" />
                    )}
                    <h3 className="font-display text-xl sm:text-2xl uppercase tracking-wide font-black text-white">
                      {plan.name}
                    </h3>
                  </div>

                  <p className="text-gray-400 text-xs font-sans font-light leading-relaxed mb-6">
                    {plan.tagline}
                  </p>

                  <div className="flex items-baseline mb-8">
                    <span className="text-gray-400 font-mono text-sm mr-1">R$</span>
                    <span className="text-4xl sm:text-5xl font-display font-black tracking-tight text-white">
                      {plan.price}
                    </span>
                    <span className="text-gray-500 font-sans text-xs ml-2">
                      / {plan.period}
                    </span>
                  </div>

                  {/* Divider line */}
                  <div className="h-[1px] bg-gradient-to-r from-transparent via-alpha-gray to-transparent mb-8" />

                  {/* Plan Features */}
                  <ul className="space-y-4 mb-10">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className={`rounded-full p-0.5 mt-0.5 shrink-0 ${
                          plan.isHighlighted ? "bg-alpha-red/10 text-alpha-red" : "bg-alpha-gray text-gray-300"
                        }`}>
                          <Check className="h-3.5 w-3.5" />
                        </div>
                        <span className="font-sans text-sm text-gray-300 font-medium">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Call-to-action button */}
                <a
                  href={`https://wa.me/5515998275126?text=Olá!%20Gostaria%20de%20saber%20mais%20e%20me%20inscrever%20no%20${encodeURIComponent(plan.name)}!`}
                  target="_blank"
                  rel="noreferrer"
                  className={`w-full text-center py-4 rounded-full font-display font-black text-xs tracking-widest uppercase transition-all duration-300 block ${
                    plan.isHighlighted
                      ? "bg-alpha-red hover:bg-alpha-red-dark text-white shadow-[0_6px_20px_rgba(229,9,20,0.4)] hover:shadow-[0_8px_25px_rgba(229,9,20,0.6)]"
                      : "bg-[#1C1C1C] border border-alpha-gray hover:border-alpha-red hover:text-white hover:bg-alpha-red/15 text-gray-300"
                  }`}
                >
                  ESCOLHER PLANO
                </a>
              </motion.div>
            );
          })}
        </div>

        {/* Gympass/Totalpass Footer notice */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 font-sans text-xs tracking-wide">
            📱 Também aceitamos check-in corporativo <strong className="text-white font-semibold">Gympass / Wellhub</strong> & <strong className="text-white font-semibold">TotalPass</strong>. Consulte recepção para validações.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
