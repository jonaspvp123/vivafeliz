import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/src/lib/utils";

const products = [
  {
    id: "sucos",
    title: "Sucos Naturais",
    badge: "100% Fruta",
    description: "Extraídos a frio para manter todos os nutrientes e o sabor autêntico da fruta. Ideal para o seu estabelecimento.",
    color: "from-brand-yellow/80 to-brand-orange/80",
    bgLight: "bg-brand-yellow/10",
    image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?q=80&w=1000&auto=format&fit=crop",
    reverse: false,
  },
  {
    id: "coco",
    title: "Água de Coco",
    badge: "Refrescante",
    description: "Água de coco verde, natural e sem conservantes. A hidratação perfeita que seus clientes procuram.",
    color: "from-emerald-400/80 to-teal-500/80",
    bgLight: "bg-emerald-500/10",
    image: "https://images.unsplash.com/photo-1524317424687-3475d9e5f5da?q=80&w=1000&auto=format&fit=crop",
    reverse: true,
  },
  {
    id: "polenta",
    title: "Polenta Congelada",
    badge: "Food Service",
    description: "Crocante por fora e macia por dentro. Praticidade extrema sem abrir mão da qualidade artesanal.",
    color: "from-amber-500/80 to-brand-orange/80",
    bgLight: "bg-amber-500/10",
    image: "https://images.unsplash.com/photo-1623595119708-26b1f7300075?q=80&w=1000&auto=format&fit=crop",
    reverse: false,
  }
];

function ProductShowcase({ product, index }: { product: typeof products[0], index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0.2 1", "0.8 0"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.95]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.8, 1], [0, 1, 1, 0]);

  return (
    <motion.div 
      ref={ref}
      style={{ opacity }}
      className={cn(
        "relative rounded-[2.5rem] overflow-hidden flex flex-col lg:flex-row group",
        product.bgLight,
        product.reverse ? "lg:flex-row-reverse" : ""
      )}
    >
      {/* Background Glow */}
      <div className={cn(
        "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 ease-out bg-gradient-to-br mix-blend-overlay",
        product.color
      )} />

      {/* Content */}
      <div className="flex-1 p-10 md:p-16 flex flex-col justify-center z-10 relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="inline-flex px-4 py-1.5 rounded-full bg-brand-dark text-white text-xs font-bold uppercase tracking-widest mb-6 self-start shadow-sm"
        >
          {product.badge}
        </motion.div>
        
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-black uppercase text-brand-dark mb-6 tracking-tighter"
        >
          {product.title}
        </motion.h3>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-brand-dark/70 mb-10 max-w-md leading-relaxed"
        >
          {product.description}
        </motion.p>
        
        <motion.a 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.3 }}
          href="#catalogo"
          className="inline-flex items-center gap-2 text-brand-dark font-bold uppercase tracking-widest text-sm group/btn w-fit"
        >
          <span className="relative overflow-hidden">
            <span>Ver detalhes</span>
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-dark origin-left scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-300" />
          </span>
          <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform duration-300" />
        </motion.a>
      </div>

      {/* Image Container with Parallax & Hover */}
      <div className="flex-1 relative aspect-square lg:aspect-auto overflow-hidden">
        <motion.div 
          style={{ y: y1, scale }}
          className="absolute inset-[-10%] w-[120%] h-[120%]"
        >
          <img 
            src={product.image} 
            alt={product.title}
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
          />
          {/* Inner Shadow for depth */}
          <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.2)]" />
        </motion.div>
      </div>
    </motion.div>
  );
}

export function Products() {
  return (
    <section id="produtos" className="py-24 md:py-40 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-6xl lg:text-[64px] font-black uppercase tracking-tighter leading-[0.9] text-brand-dark mb-6">
            Nossos Campeões <br className="hidden md:block" />
            <span className="text-brand-orange">de Vendas</span>
          </h2>
          <p className="text-xl text-brand-dark/60 max-w-2xl">
            Uma seleção premium projetada para encantar seus clientes e aumentar a lucratividade do seu negócio.
          </p>
        </motion.div>

        <div className="flex flex-col gap-12 md:gap-24">
          {products.map((product, index) => (
            <ProductShowcase key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
