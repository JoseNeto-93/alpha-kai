import { Dumbbell, Instagram, Youtube, Facebook } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  const menuLinks = [
    { name: "Início", href: "#inicio" },
    { name: "Diferenciais", href: "#diferenciais" },
    { name: "Sobre", href: "#sobre" },
    { name: "Estrutura", href: "#estrutura" },
    { name: "Depoimentos", href: "#depoimentos" },
    { name: "Planos", href: "#planos" }
  ];

  return (
    <footer id="footer-container" className="bg-[#050505] text-gray-400 py-16 border-t border-alpha-gray/40 relative overflow-hidden">
      
      {/* Decorative vertical glowing red line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-[1px] bg-gradient-to-r from-transparent via-alpha-red to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 items-start mb-12">
          
          {/* Column 1: Logo and brand short summary */}
          <div className="md:col-span-2 space-y-4">
            <a href="#inicio" className="flex items-center gap-2 group w-fit">
              <div className="bg-alpha-red p-2 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-[0_0_10px_rgba(229,9,20,0.3)]">
                <Dumbbell className="h-5 w-5 text-white" />
              </div>
              <span className="font-display text-xl tracking-widest text-white font-extrabold">
                ALPHA <span className="text-alpha-red">KAI</span>
              </span>
            </a>
            <p className="font-sans text-sm text-gray-500 max-w-sm leading-relaxed">
              Inspirada nas maiores grifes de alta performance do mundo, oferecemos uma experiência de treino incomparável, 24 horas por dia em Itapetininga/SP.
            </p>
            {/* Social media handles */}
            <div className="flex items-center gap-3 pt-2">
              <a 
                href="https://www.instagram.com/academiaalphakai/?hl=pt" 
                target="_blank" 
                rel="noreferrer" 
                aria-label="Instagram"
                className="h-9 w-9 bg-alpha-gray hover:bg-alpha-red hover:text-white rounded-lg flex items-center justify-center text-gray-400 transition-colors"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noreferrer" 
                aria-label="Facebook"
                className="h-9 w-9 bg-alpha-gray hover:bg-alpha-red hover:text-white rounded-lg flex items-center justify-center text-gray-400 transition-colors"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noreferrer" 
                aria-label="Youtube"
                className="h-9 w-9 bg-alpha-gray hover:bg-alpha-red hover:text-white rounded-lg flex items-center justify-center text-gray-400 transition-colors"
              >
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick navigation links */}
          <div>
            <h4 className="font-display text-xs text-white uppercase tracking-widest font-black mb-4">RECURSOS</h4>
            <ul className="space-y-2.5 text-sm">
              {menuLinks.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="hover:text-alpha-red transition-colors font-sans">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact highlights on footer too */}
          <div>
            <h4 className="font-display text-xs text-white uppercase tracking-widest font-black mb-4">FALE COM O CLÃ</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li className="font-sans text-xs">
                <span className="text-white block font-medium">Recepção:</span>
                (15) 99827-5126
              </li>
              <li className="font-sans text-xs">
                <span className="text-white block font-medium">Onde estamos:</span>
                Av. Wenceslau Braz, 179 <br /> Itapetininga / SP
              </li>
              <li className="font-sans text-xs">
                <span className="text-white block font-medium">Funcionamento:</span>
                24 horas, todos os dias
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright details */}
        <div className="border-t border-alpha-gray/30 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-600">
          <p className="font-sans text-center md:text-left">
            ALPHA KAI © {year}. Todos os direitos reservados. CNPJ: 00.000.000/0001-00.
          </p>
          <p className="font-mono text-alpha-red font-medium uppercase tracking-widest">
            TREINE COM PROPÓSITO • SUPERE SEUS LIMITES
          </p>
        </div>

      </div>
    </footer>
  );
}
