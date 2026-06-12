import { motion } from "motion/react";

const segments = [
  { name: "Padarias", image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=800&auto=format&fit=crop" },
  { name: "Mercados", image: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800&auto=format&fit=crop" },
  { name: "Restaurantes", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop" },
  { name: "Bares", image: "https://images.unsplash.com/photo-1572116469696-ed7fbc841cb6?q=80&w=800&auto=format&fit=crop" },
  { name: "Lanchonetes", image: "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=800&auto=format&fit=crop" },
  { name: "Conveniências", image: "https://images.unsplash.com/photo-1601599561096-f87c95fff1e9?q=80&w=800&auto=format&fit=crop" },
];

export function TargetAudience() {
  return (
    <section id="para-quem" className="py-24 md:py-40 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl lg:text-[64px] font-black uppercase tracking-tighter leading-[0.9] text-brand-dark mb-6">
              O parceiro ideal para <span className="text-brand-orange">o seu segmento</span>
            </h2>
            <p className="text-xl text-brand-dark/70">
              Adaptação perfeita ao modelo do seu negócio, garantindo rentabilidade e satisfação do seu cliente.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {segments.map((segment, index) => (
            <motion.div
              key={segment.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative aspect-[4/5] md:aspect-[3/4] overflow-hidden rounded-3xl md:rounded-[2.5rem] cursor-pointer"
            >
              {/* Image with zoom on hover */}
              <div className="absolute inset-0">
                <img 
                  src={segment.image} 
                  alt={segment.name} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
              </div>

              {/* Sophisticated dark gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />
              
              {/* Luminous overlay on hover */}
              <div className="absolute inset-0 bg-brand-orange/20 mix-blend-color opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-brand-orange/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Content */}
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                {/* Luminous line that expands on hover */}
                <span className="w-8 h-1 bg-brand-yellow mb-4 rounded-full transition-all duration-500 group-hover:w-16 shadow-[0_0_10px_rgba(255,193,7,0.8)]" />
                
                <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-white group-hover:translate-y-0 transition-transform duration-500">
                  {segment.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
