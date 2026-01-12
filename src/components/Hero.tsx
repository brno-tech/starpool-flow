import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Shield, Star, Phone } from "lucide-react";
import heroImage from "@/assets/hero-pool.jpg";
import { trackWhatsAppClick, trackPhoneClick } from "@/hooks/useTracking";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const scrolled = window.scrollY;
      const heroBackground = heroRef.current.querySelector(".hero-background") as HTMLElement;
      
      if (heroBackground && window.innerWidth > 768) {
        // Parallax effect: background moves slower than scroll (50% speed)
        heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-primary via-primary-glow to-primary"
    >
      {/* Parallax Background Layer with Real Pool Image */}
      <div
        className="hero-background absolute inset-0 opacity-30 pointer-events-none parallax-slow"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      
      {/* Gradient Overlay for Better Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70" />

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          {/* Trust Badges */}
          <div className="flex flex-wrap gap-4 mb-8 animate-fade-in">
            <div className="glass-dark px-4 py-2 rounded-full flex items-center gap-2 text-white text-sm">
              <Award className="w-4 h-4 text-secondary" />
              <span>+200 Projetos Entregues</span>
            </div>
            <div className="glass-dark px-4 py-2 rounded-full flex items-center gap-2 text-white text-sm">
              <Star className="w-4 h-4 text-secondary" />
              <span>4.9/5 Avaliação</span>
            </div>
            <div className="glass-dark px-4 py-2 rounded-full flex items-center gap-2 text-white text-sm">
              <Shield className="w-4 h-4 text-secondary" />
              <span>10 Anos de Garantia</span>
            </div>
          </div>

          {/* Main Content */}
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight animate-slide-in-left">
            Sua Piscina dos{" "}
            <span className="text-secondary">Sonhos</span> Começa Aqui
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl animate-fade-in">
            Especialistas em construção de piscinas exclusivas em alvenaria e concreto armado. 
            Acabamentos premium que transformam seu quintal em um verdadeiro oásis.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-scale-in">
            <Button
              size="lg"
              variant="hero"
              onClick={() => document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" })}
              className="text-lg px-8 py-6 pulse-glow group"
            >
              Receber Orçamento Grátis
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button
              size="lg"
              variant="hero-outline"
              asChild
              className="text-lg px-8 py-6"
            >
              <a
                href="tel:+5531998562030"
                onClick={() => trackPhoneClick("hero")}
              >
                <Phone className="mr-2" />
                Ligar Agora
              </a>
            </Button>

            <Button
              size="lg"
              variant="hero-outline"
              onClick={() => {
                trackWhatsAppClick("home");
                window.open("https://wa.me/5531998562030", "_blank");
              }}
              className="text-lg px-8 py-6"
            >
              WhatsApp Direto
            </Button>
          </div>

          {/* Urgency Badge */}
          <div className="glass-dark inline-block px-6 py-3 rounded-lg animate-pulse">
            <p className="text-white text-sm">
              🔥 <span className="font-semibold">Últimas 3 vagas</span> para projetos neste mês
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
