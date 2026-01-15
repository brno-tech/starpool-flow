import { Waves, Brush, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import piscinasAlvenaria from "@/assets/piscinasalvenaria.jpg";
import acabamentoAzulejo from "@/assets/acabamentoazulejo.jpg";
import poolPlastering from "@/assets/poolplastering.jpg";

const services = [
  {
    icon: Waves,
    title: "Projetos Arquitetônicos Sob Medida",
    description: "Estrutura robusta e durável, ideal para projetos personalizados com formas e tamanhos sob medida.",
    image: piscinasAlvenaria,
    features: [
      "Estrutura em alvenaria reforçada",
      "Impermeabilização de alta qualidade",
      "Sistema de filtração eficiente",
      "Iluminação LED subaquática",
    ],
    gradient: "from-primary to-primary-glow",
  },
  {
    icon: Brush,
    title: "Alto Padrão de Acabamento",
    description: "Beleza e sofisticação com azulejos e pastilhas que transformam sua piscina em obra de arte.",
    image: acabamentoAzulejo,
    features: [
      "Pastilhas de vidro importadas",
      "Azulejos cerâmicos premium",
      "Design personalizado",
      "Durabilidade garantida",
    ],
    gradient: "from-secondary to-accent",
  },
  {
    icon: Sparkles,
    title: "Revestimento Americano Premium",
    description: "Revestimento americano de alta performance, resistente e com acabamento impecável tipo resort.",
    image: poolPlastering,
    features: [
      "Revestimento americano premium",
      "Textura suave ao toque",
      "Resistente a manchas",
      "Manutenção facilitada",
    ],
    gradient: "from-primary-glow to-secondary",
  },
];

const Services = () => {
  return (
    <section id="servicos" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-secondary font-bold uppercase tracking-wider text-sm">
            Nossos serviços
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary mt-2 mb-4">
            Soluções Completas
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Da estrutura ao acabamento, cuidamos de cada detalhe da sua piscina
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="group hover-lift bg-card rounded-3xl overflow-hidden shadow-lg"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient Header with Image */}
              <div className={`bg-gradient-to-br ${service.gradient} relative overflow-hidden h-64`}>
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-80" />
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <service.icon className="w-16 h-16 text-white mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm">
                      <div className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                        <div className="w-2 h-2 rounded-full bg-secondary" />
                      </div>
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant="outline"
                  className="w-full border-primary/20 hover:bg-primary hover:text-primary-foreground transition-all"
                  onClick={() => document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Solicitar Orçamento
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Guarantee Badge */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 glass p-6 rounded-2xl">
            <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <p className="font-bold text-primary text-xl">Garantia de 10 Anos</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
