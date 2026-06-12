import { motion, useScroll, useTransform } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/src/lib/utils";

export function Navbar() {
  const { scrollY } = useScroll();
  const [isOpen, setIsOpen] = useState(false);
  
  const backgroundColor = useTransform(
    scrollY,
    [0, 50],
    ["rgba(255, 247, 232, 0)", "rgba(255, 247, 232, 0.9)"]
  );
  
  const backdropFilter = useTransform(
    scrollY,
    [0, 50],
    ["blur(0px)", "blur(12px)"]
  );

  const shadow = useTransform(
    scrollY,
    [0, 50],
    ["none", "0 4px 30px rgba(0, 0, 0, 0.05)"]
  );

  const navLinks = [
    { name: "Início", href: "#" },
    { name: "Produtos", href: "#produtos" },
    { name: "Diferenciais", href: "#diferenciais" },
    { name: "Para Quem", href: "#para-quem" },
  ];

  return (
    <>
      <motion.header
        style={{ backgroundColor, backdropFilter, boxShadow: shadow }}
        className="fixed top-0 left-0 right-0 z-50 py-4 px-6 md:px-12 transition-colors duration-300"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-black tracking-tighter text-brand-orange flex items-center gap-2"
          >
            {/* Minimalist Logo Mark */}
            <div className="w-8 h-8 bg-brand-orange rounded-lg shadow-lg"></div>
            VIVA FELIZ
          </motion.div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link, i) => (
              <motion.a
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.1 }}
                key={link.name}
                href={link.href}
                className={cn(
                  "text-sm font-bold uppercase tracking-widest transition-opacity hover:opacity-100",
                  i === 0 ? "border-b-2 border-brand-orange opacity-100" : "opacity-50 text-brand-dark"
                )}
              >
                {link.name}
              </motion.a>
            ))}
            <motion.a
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              href="#catalogo"
              className="px-6 py-3 bg-brand-dark text-white text-xs font-bold uppercase tracking-widest rounded-full hover:bg-brand-orange transition-colors"
            >
              Catálogo WhatsApp
            </motion.a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-brand-dark"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Nav Overlay */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed inset-0 z-40 bg-brand-cream/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-2xl font-display font-medium text-brand-dark"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#catalogo"
            onClick={() => setIsOpen(false)}
            className="px-8 py-4 mt-4 bg-brand-orange text-white rounded-full text-lg font-medium shadow-lg shadow-brand-orange/30"
          >
            Solicitar Catálogo
          </a>
        </motion.div>
      )}
    </>
  );
}
