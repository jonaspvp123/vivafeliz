import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useRef } from "react";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[100svh] pt-20 flex items-center overflow-hidden bg-brand-cream"
    >
      {/* Background Orbs & Gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-brand-yellow to-brand-orange blur-[120px] opacity-40 mix-blend-multiply" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] rounded-full bg-brand-yellow blur-[100px] opacity-30 mix-blend-multiply" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid lg:grid-cols-2 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* Left Content */}
        <motion.div 
          style={{ opacity, y: y1 }}
          className="flex flex-col items-start pt-12 lg:pt-0"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-2"
          >
            <span className="text-brand-orange font-bold uppercase tracking-[0.3em] text-xs">Qualidade Premium</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-5xl md:text-6xl lg:text-[64px] font-black leading-[0.9] tracking-tighter uppercase text-brand-dark mb-6"
          >
            Distribuindo <br/>
            <span className="text-brand-orange">Sabor</span> <br className="md:hidden"/>e Praticidade
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-lg md:text-xl text-brand-dark max-w-md leading-relaxed mb-10"
          >
            Sucos naturais, água de coco e alimentos selecionados para impulsionar o seu negócio com frescor e qualidade.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="flex flex-wrap gap-4"
          >
            <a 
              href="#catalogo"
              className="group flex items-center gap-3 px-8 py-4 bg-brand-orange text-white rounded-full font-bold shadow-lg shadow-brand-orange/30 hover:bg-orange-600 transition-all hover:scale-105 active:scale-95 text-sm uppercase tracking-widest"
            >
              Solicitar Catálogo
              <div className="w-6 h-6 flex items-center justify-center bg-white/20 rounded-full group-hover:bg-white/30 transition-colors">
                <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
              </div>
            </a>
            <a 
              href="#produtos"
              className="flex items-center gap-2 px-8 py-4 border-2 border-brand-dark text-brand-dark rounded-full font-bold uppercase tracking-widest text-sm hover:bg-gray-50 transition-all"
            >
              Ver Produtos
            </a>
          </motion.div>

          {/* Mini Stats */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-16 grid grid-cols-2 lg:grid-cols-3 gap-8 pt-8 border-t border-black/5 w-full"
          >
            <div>
              <p className="text-3xl font-black text-brand-orange">1.2k+</p>
              <p className="text-[10px] uppercase font-bold tracking-widest text-brand-dark/60 mt-1">Clientes Ativos</p>
            </div>
            <div>
              <p className="text-3xl font-black text-brand-orange">50k</p>
              <p className="text-[10px] uppercase font-bold tracking-widest text-brand-dark/60 mt-1">Entregas/Mês</p>
            </div>
            <div className="hidden lg:block">
              <p className="text-3xl font-black text-brand-orange">100%</p>
              <p className="text-[10px] uppercase font-bold tracking-widest text-brand-dark/60 mt-1">Qualidade</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Composition - 3D/Cinematic Feel */}
        <motion.div 
          style={{ y: y2 }}
          className="relative h-[500px] lg:h-[700px] w-full flex items-center justify-center"
        >
          {/* Main floating image */}
          <motion.div
            animate={{ y: [-15, 15, -15], rotate: [-2, 2, -2] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-20 w-[80%] max-w-[400px]"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-orange to-brand-yellow blur-3xl opacity-40 -z-10 rounded-full" />
             {/* Using an Unsplash image of splashing liquid/drink for that fresh vibe */}
            <img 
              src="https://images.unsplash.com/photo-1600271886742-f049cd451bba?q=80&w=1000&auto=format&fit=crop" 
              alt="Suco Natural Premium" 
              className="w-full h-auto object-cover rounded-3xl shadow-2xl rotate-3"
            />
            {/* Glass overlay effect to make it look premium */}
            <div className="absolute inset-0 rounded-3xl shadow-[inset_0_0_20px_rgba(255,255,255,0.4)] pointer-events-none border border-white/20" />
          </motion.div>

          {/* Floating elements */}
          <motion.img
            src="https://images.unsplash.com/photo-1557800636-894a64c1696f?q=80&w=300&auto=format&fit=crop"
            alt="Orange slice"
            animate={{ y: [0, -30, 0], rotate: [0, 45, 0], x: [0, 20, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-[10%] right-[10%] w-24 h-24 object-cover rounded-full shadow-lg z-30"
          />
          
          <motion.img
            src="https://images.unsplash.com/photo-1628189689670-34d618d39f75?q=80&w=300&auto=format&fit=crop"
            alt="Splash"
            animate={{ y: [0, 40, 0], rotate: [0, -20, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute bottom-[20%] left-[5%] w-32 h-32 object-cover rounded-full shadow-xl z-10"
          />
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-brand-dark/40"
      >
        <span className="text-xs font-medium uppercase tracking-widest">Role para explorar</span>
        <ChevronDown size={16} className="animate-bounce" />
      </motion.div>
    </section>
  );
}
