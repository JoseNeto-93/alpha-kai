import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Instagram, Phone } from "lucide-react";
import logoAp8 from "../imagens/ap8.png";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Início", href: "#inicio" },
    { name: "Diferenciais", href: "#diferenciais" },
    { name: "Sobre", href: "#sobre" },
    { name: "Estrutura", href: "#estrutura" },
    { name: "Depoimentos", href: "#depoimentos" },
    { name: "Planos", href: "#planos" },
    { name: "Contato", href: "#contato" },
  ];

  return (
    <>
      <motion.nav
        id="navbar-container"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-alpha-black/80 backdrop-blur-md border-b border-alpha-red/25 py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#inicio" className="flex items-center gap-2 group">
              <div className="bg-alpha-red p-2 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-alpha-red-dark shadow-[0_0_15px_rgba(229,9,20,0.5)]">
                <img src={logoAp8} alt="Alpha Kai" className="h-6 w-6 object-contain" />
              </div>
              <span className="font-display text-xl sm:text-2xl tracking-widest text-white font-extrabold flex items-center">
                ALPHA <span className="text-alpha-red ml-1.5 transition-colors group-hover:text-white">KAI</span>
              </span>
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="font-sans text-sm font-medium tracking-wide text-gray-300 hover:text-alpha-red transition-all duration-200 uppercase relative py-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-alpha-red after:transition-all after:duration-300 hover:after:w-full"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* CTA & Social on Header */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="https://www.instagram.com/academiaalphakai/?hl=pt"
                target="_blank"
                rel="noreferrer"
                className="text-gray-300 hover:text-alpha-red p-2 transition-colors"
                aria-label="Instagram Alpha Kai"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://wa.me/5515998275126"
                target="_blank"
                rel="noreferrer"
                className="bg-transparent border border-alpha-red text-white hover:bg-alpha-red hover:shadow-[0_0_20px_rgba(229,9,20,0.4)] px-5 py-2 rounded-full font-sans text-xs font-semibold tracking-wider transition-all duration-300"
              >
                MATRICULE-SE
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-white hover:text-alpha-red p-2 transition-colors"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Slide Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-alpha-black/95 backdrop-blur-lg z-40 md:hidden flex flex-col justify-center"
          >
            <div className="flex flex-col items-center gap-6 py-8">
              {navLinks.map((link, idx) => (
                <motion.a
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 20, opacity: 0 }}
                  transition={{ delay: idx * 0.05, ease: "easeOut" }}
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-display text-2xl tracking-wide text-white hover:text-alpha-red transition-colors uppercase font-bold"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ delay: 0.35 }}
                className="mt-8 flex flex-col items-center gap-4 w-full px-8"
              >
                <a
                  href="https://wa.me/5515998275126"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full text-center bg-alpha-red hover:bg-alpha-red-dark text-white py-3.5 rounded-full font-display tracking-widest text-sm font-bold shadow-[0_0_20px_rgba(229,9,20,0.5)] transition-all flex items-center justify-center gap-2"
                >
                  <Phone className="h-4 w-4" /> COMEÇAR AGORA
                </a>
                <p className="text-xs text-gray-500 tracking-widest">A ACADEMIA DE ELITE DE ITAPETININGA</p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
