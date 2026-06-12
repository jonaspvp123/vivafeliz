import { motion } from "motion/react";
import { ShieldCheck, Leaf, Truck, HeartHandshake, TrendingUp, Map } from "lucide-react";
import { cn } from "@/src/lib/utils";

const differentials = [
  { icon: ShieldCheck, title: "Qualidade Garantida", desc: "Controle rigoroso em todas as etapas, do produtor até a sua vitrine." },
  { icon: Leaf, title: "Produtos Selecionados", desc: "Matérias-primas frescas e fornecedores criteriosamente homologados." },
  { icon: Truck, title: "Entrega Eficiente", desc: "Logística inteligente e frota dedicada para manter o frescor impecável." },
  { icon: HeartHandshake, title: "Atendimento Próximo", desc: "Relacionamento consultivo focado no crescimento do seu negócio." },
  { icon: TrendingUp, title: "Alta Aceitação", desc: "Produtos com giro rápido e margem atrativa aprovados pelo público." },
  { icon: Map, title: "Distribuição Ampla", desc: "Capilaridade logística para atender diversos formatos de varejo e food service." },
];

export function Differentials() {
  return (
    <section id="diferenciais" className="py-24 md:py-40 bg-brand-dark text-brand-cream relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 right-0 w-[80vw] h-[80vw] bg-brand-orange rounded-full blur-[150px] -translate-y-1/2 translate-x-1/3 mix-blend-screen opacity-30" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-4xl md:text-6xl lg:text-[64px] font-black uppercase tracking-tighter leading-[0.9] mb-6">
            Por que escolher a <span className="text-brand-yellow">Viva Feliz?</span>
          </h2>
          <p className="text-xl text-brand-cream/70">
            Não somos apenas um fornecedor. Somos o parceiro estratégico para a evolução do seu cardápio e das suas vendas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {differentials.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group p-8 rounded-3xl bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-brand-orange/50"
              >
                <div className="w-14 h-14 rounded-2xl bg-brand-orange/10 flex items-center justify-center mb-6 text-brand-orange group-hover:scale-110 group-hover:bg-brand-orange group-hover:text-brand-dark transition-all duration-300">
                  <Icon size={28} strokeWidth={2} />
                </div>
                <h3 className="text-xl font-bold uppercase tracking-tight mb-3 text-brand-yellow">{item.title}</h3>
                <p className="text-brand-cream/60 leading-relaxed group-hover:text-brand-cream/80 transition-colors">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
