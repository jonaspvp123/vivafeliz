import { Navbar } from "@/src/components/Navbar";
import { Hero } from "@/src/components/Hero";
import { Products } from "@/src/components/Products";
import { Differentials } from "@/src/components/Differentials";
import { TargetAudience } from "@/src/components/TargetAudience";
import { Catalog } from "@/src/components/Catalog";
import { SocialProof } from "@/src/components/SocialProof";
import { Footer } from "@/src/components/Footer";

export default function App() {
  return (
    <div className="relative antialiased selection:bg-brand-orange selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Products />
        <Differentials />
        <TargetAudience />
        <Catalog />
        <SocialProof />
      </main>
      <Footer />
    </div>
  );
}
