import { motion, useInView, useAnimation } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Star } from "lucide-react";

// Minimal custom hook for animating numbers
function useAnimatedNumber(targetNumber: number, duration: number = 2) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      let animationFrame: number;

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = (timestamp - startTime) / (duration * 1000);

        if (progress < 1) {
          setCount(Math.floor(targetNumber * progress));
          animationFrame = requestAnimationFrame(animate);
        } else {
          setCount(targetNumber);
        }
      };

      animationFrame = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(animationFrame);
    }
  }, [isInView, targetNumber, duration]);

  return { count, ref };
}

function StatCard({ number, label, suffix = "" }: { number: number, label: string, suffix?: string }) {
  const { count, ref } = useAnimatedNumber(number, 2);

  return (
    <div ref={ref} className="text-center">
      <div className="text-5xl md:text-7xl font-black text-brand-orange mb-2 uppercase tracking-tighter">
        {count}{suffix}
      </div>
      <div className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-brand-dark/60">{label}</div>
    </div>
  );
}

export function SocialProof() {
  return (
    <section className="py-24 md:py-32 bg-brand-cream relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-16 md:gap-8 mb-24">
          <StatCard number={500} label="Clientes Atendidos" suffix="+" />
          <div className="hidden md:block w-px h-24 bg-brand-dark/10" />
          <StatCard number={2} label="Produtos Entregues" suffix="M+" />
          <div className="hidden md:block w-px h-24 bg-brand-dark/10" />
          <StatCard number={50} label="Parceiros Comerciais" suffix="+" />
        </div>

        {/* Testimonial / Trust */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="flex justify-center gap-1 mb-8">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} className="w-6 h-6 fill-brand-yellow text-brand-yellow" />
            ))}
          </div>
          <h3 className="text-2xl md:text-4xl font-bold uppercase tracking-tight leading-relaxed text-brand-dark mb-8">
            "A qualidade dos sucos da Viva Feliz transformou as vendas do nosso café. O suporte e a logística são impecáveis, garantindo que nunca falte produto fresco para nossos clientes."
          </h3>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-12 rounded-full bg-brand-dark/5 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=150&auto=format&fit=crop" alt="Avatar" className="w-full h-full object-cover" />
            </div>
            <div className="text-left font-sans">
              <div className="font-bold text-brand-dark uppercase tracking-widest text-sm">João Silva</div>
              <div className="text-[10px] uppercase tracking-widest text-brand-dark/60">Proprietário, Padaria Bela Vista</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
