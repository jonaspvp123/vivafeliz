import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";

export function Catalog() {
  return (
    <section id="catalogo" className="py-24 md:py-32 bg-brand-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="relative rounded-[3rem] overflow-hidden bg-gradient-to-br from-brand-orange to-amber-500 py-20 px-8 md:px-16 text-center"
        >
          {/* Inner glowing effects */}
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-20" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-white blur-[120px] opacity-20 rounded-full" />
          
          <div className="relative z-10 flex flex-col items-center">
            <motion.h2 
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-[64px] font-black uppercase tracking-tighter leading-[0.9] text-white mb-8 drop-shadow-lg text-balance"
            >
              Seu próximo produto <br className="hidden md:block" />campeão de vendas está aqui.
            </motion.h2>
            
            <motion.a 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              href="https://wa.me/5511999999999" // Dummy WhatsApp link
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-8 py-5 bg-white text-brand-orange rounded-full text-sm uppercase tracking-widest font-bold shadow-2xl hover:scale-105 active:scale-95 transition-all"
            >
              <MessageCircle className="w-5 h-5 group-hover:animate-ping" />
              Receber Catálogo no WhatsApp
            </motion.a>
          </div>

          {/* Floating fruits / abstract elements */}
          <motion.img
            src="https://images.unsplash.com/photo-1611077544837-14815a0c10a4?auto=format&fit=crop&w=150&q=80"
            alt="Fruit"
            animate={{ 
              y: [-20, 20, -20],
              rotate: [0, 90, 0]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[10%] left-[10%] w-24 h-24 object-cover rounded-full mix-blend-luminosity opacity-40 blur-[1px]"
          />
          <motion.img
            src="https://images.unsplash.com/photo-1582281298055-e25b84a30b0b?auto=format&fit=crop&w=150&q=80"
            alt="Fruit"
            animate={{ 
              y: [20, -20, 20],
              rotate: [0, -90, 0]
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-[10%] right-[10%] w-32 h-32 object-cover rounded-full mix-blend-luminosity opacity-40 blur-[2px]"
          />
        </motion.div>
      </div>
    </section>
  );
}
