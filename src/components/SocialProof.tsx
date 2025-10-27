import { useEffect, useRef, useState } from "react";
import { Award, Users, Ruler, ThumbsUp } from "lucide-react";

const stats = [
  { icon: Award, number: 500, suffix: "+", label: "Projetos Concluídos", color: "text-secondary" },
  { icon: Users, number: 450, suffix: "+", label: "Clientes Satisfeitos", color: "text-primary" },
  { icon: Ruler, number: 12000, suffix: "m²", label: "Área Construída", color: "text-secondary" },
  { icon: ThumbsUp, number: 98, suffix: "%", label: "Taxa de Satisfação", color: "text-primary" },
];

const Counter = ({ end, suffix, duration = 2000 }: { end: number; suffix: string; duration?: number }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const increment = end / (duration / 16);
          let current = 0;
          
          const timer = setInterval(() => {
            current += increment;
            if (current >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, 16);

          return () => clearInterval(timer);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [end, duration, hasAnimated]);

  return (
    <div ref={ref} className="animate-count">
      {count.toLocaleString("pt-BR")}
      {suffix}
    </div>
  );
};

const SocialProof = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-secondary font-bold uppercase tracking-wider text-sm">
            Números que impressionam
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary mt-2 mb-4">
            Experiência Comprovada
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Anos de dedicação construindo piscinas que transformam vidas
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group hover-lift bg-card p-8 rounded-2xl shadow-md hover:shadow-lg"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 ${stat.color} bg-secondary/10 rounded-full mb-4 group-hover:scale-110 transition-transform`}>
                <stat.icon className="w-8 h-8" />
              </div>
              <div className="text-4xl md:text-5xl font-extrabold text-primary mb-2">
                <Counter end={stat.number} suffix={stat.suffix} />
              </div>
              <p className="text-muted-foreground font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Trust Logos */}
        <div className="mt-20 text-center">
          <p className="text-muted-foreground mb-8 font-medium">
            Atendemos os principais bairros de Belo Horizonte e região
          </p>
          <div className="flex flex-wrap justify-center gap-8 opacity-60">
            {["Savassi", "Lourdes", "Belvedere", "Pampulha", "Nova Lima", "Mangabeiras"].map((area) => (
              <span key={area} className="text-lg font-semibold text-primary">
                {area}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
