import { Instagram, MessageCircle, MapPin, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative z-20 bg-brand-dark text-white px-6 py-12 md:px-12 md:py-8 lg:py-6 flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-0 mt-20">
      <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] opacity-60">
        <span>Padarias</span>
        <span>Mercados</span>
        <span>Restaurantes</span>
        <span>Bares</span>
        <span>Lanchonetes</span>
      </div>
      <div className="flex flex-col md:flex-row gap-6 items-center text-xs text-brand-cream/80">
        <span className="font-medium">vendas@vivafeliz.com.br</span>
        <div className="hidden md:block w-1 h-1 bg-white/30 rounded-full"></div>
        <span className="font-medium">(11) 99999-9999</span>
        <div className="hidden md:block w-1 h-1 bg-white/30 rounded-full"></div>
        <span className="font-medium">São Paulo, SP</span>
        <div className="flex gap-3 md:ml-4">
          <a href="#" className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-brand-orange hover:border-brand-orange transition-colors">
            <Instagram size={14} />
          </a>
          <a href="#" className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-brand-orange hover:border-brand-orange transition-colors">
            <MessageCircle size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
}
