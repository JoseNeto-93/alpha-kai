import { motion } from "motion/react";
import { MapPin, Phone, Clock, MessageSquare, Instagram, Compass } from "lucide-react";

export default function Contact() {
  const mapQuery = "Av. Wenceslau Braz, 179, Vila Popular, Itapetininga - SP, 18201-200";
  const mapIframeUrl = `https://www.google.com/maps/embed/v1/place?key=&q=${encodeURIComponent(mapQuery)}`;
  
  // Real embedded stylish locator coordinate map pointing directly to Av. Wenceslau Braz, 179 in Itapetininga
  // We will load a beautiful responsive embedding which displays clean satellite / structural mapping vector
  const mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.0528271109966!2d-48.064560424597406!3d-23.712128567520445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c5cae5cf10fdf9%3A0xe10adff80bb6e246!2sAv.%20Wenceslau%20Braz%20-%20Vila%20Popular%2C%20Itapetininga%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr";

  const contactOptions = [
    {
      id: "opt_1",
      icon: <MapPin className="h-5 w-5 text-alpha-red" />,
      label: "NOSSA LOCALIZAÇÃO",
      value: "Av. Wenceslau Braz, 179",
      subValue: "Vila Popular, Itapetininga/SP"
    },
    {
      id: "opt_2",
      icon: <Phone className="h-5 w-5 text-alpha-red" />,
      label: "WHATSAPP OFICIAL",
      value: "(15) 99827-5126",
      subValue: "Respostas imediatas"
    },
    {
      id: "opt_3",
      icon: <Clock className="h-5 w-5 text-alpha-red" />,
      label: "HORÁRIOS DE ATENDIMENTO",
      value: "Portas abertas 24h",
      subValue: "Administração comercial: 08h às 21h"
    }
  ];

  return (
    <section 
      id="contato" 
      className="relative py-24 sm:py-32 bg-alpha-black overflow-hidden border-t border-alpha-gray"
    >
      {/* Lights background */}
      <div className="absolute top-[50%] right-[5%] w-[40vw] h-[40vw] bg-alpha-red/[0.03] rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center mb-16 sm:mb-20">
          <span className="text-xs font-mono font-bold tracking-widest text-alpha-red uppercase mb-3 inline-block">FALE CONOSCO</span>
          <h2 className="font-display text-4xl sm:text-5xl uppercase tracking-tight font-extrabold text-white">
            QUER SABER <span className="text-alpha-red">COMO CHEGAR?</span>
          </h2>
          <div className="h-1 w-16 bg-alpha-red mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-stretch">
          
          {/* Lado Esquerdo: Cards de Informações e Botões */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col justify-between"
          >
            <div className="space-y-6">
              {contactOptions.map((opt) => (
                <div key={opt.id} className="glass-card p-6 rounded-xl flex gap-4">
                  <div className="p-3 rounded-lg bg-alpha-red/10 h-fit border border-alpha-red/15 shrink-0">
                    {opt.icon}
                  </div>
                  <div>
                    <h3 className="font-mono text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-1">
                      {opt.label}
                    </h3>
                    <p className="font-display text-base font-extrabold text-white uppercase tracking-wider">
                      {opt.value}
                    </p>
                    <p className="font-sans text-xs text-gray-300">
                      {opt.subValue}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Redes sociais buttons e rotas */}
            <div className="mt-10 space-y-4">
              <h4 className="font-display text-xs text-white uppercase tracking-widest font-black mb-3">CANAL DIRETOS</h4>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href="https://wa.me/5515998275126"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-[#25D366] hover:bg-[#20ba59] text-white py-3.5 px-6 rounded-xl font-display text-xs font-black tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <MessageSquare className="h-4 w-4" /> WHATSAPP
                </a>

                <a
                  href="https://www.instagram.com/academiaalphakai/?hl=pt"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] hover:opacity-90 text-white py-3.5 px-6 rounded-xl font-display text-xs font-black tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Instagram className="h-4 w-4" /> INSTAGRAM
                </a>
              </div>

              <a
                href="https://maps.google.com/?q=Av.+Wenceslau+Braz,+179,+Vila+Popular,+Itapetininga+-+SP"
                target="_blank"
                rel="noreferrer"
                className="w-full text-center bg-transparent border border-alpha-red hover:bg-alpha-red/10 text-white py-3.5 px-6 rounded-xl font-display text-xs font-black tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Compass className="h-4 w-4" /> ABRE NO GOOGLE MAPS
              </a>
            </div>
          </motion.div>

          {/* Lado Direito: Mapa Incorporado */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="relative w-full h-full min-h-[350px] rounded-2xl overflow-hidden border border-alpha-gray shadow-2xl">
              {/* Abs filter for dark theme look but beautiful layout */}
              <div className="absolute inset-0 bg-alpha-red/10 mix-blend-color pointer-events-none z-10" />
              
              <iframe
                title="Google Maps - Alpha Kai Location"
                src={mapSrc}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full min-h-[350px] filter grayscale invert brightness-[0.8] contrast-[1.2]"
              />
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
