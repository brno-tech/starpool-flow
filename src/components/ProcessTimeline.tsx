import { Search, Palette, Hammer, CheckCircle2 } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Visita Técnica",
    description: "Avaliação completa do terreno e levantamento das suas necessidades",
    duration: "1-3 dias",
    color: "bg-primary",
  },
  {
    icon: Palette,
    title: "Projeto Personalizado",
    description: "Desenvolvimento do projeto 3D com acabamentos à sua escolha",
    duration: "5-10 dias",
    color: "bg-secondary",
  },
  {
    icon: Hammer,
    title: "Construção",
    description: "Execução com mão de obra especializada e materiais premium",
    duration: "60-90 dias",
    color: "bg-primary",
  },
  {
    icon: CheckCircle2,
    title: "Entrega",
    description: "Finalização com garantia de 10 anos e suporte pós-obra",
    duration: "1 dia",
    color: "bg-secondary",
  },
];

const ProcessTimeline = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-secondary font-bold uppercase tracking-wider text-sm">
            Processo transparente
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary mt-2 mb-4">
            Como Funciona
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Do sonho à realidade em 4 etapas simples e transparentes
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Connecting Line - Desktop */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary transform -translate-y-1/2" />

          {/* Steps Grid */}
          <div className="grid md:grid-cols-4 gap-8 md:gap-4 relative">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Mobile Connector */}
                {index < steps.length - 1 && (
                  <div className="md:hidden absolute left-8 top-20 w-1 h-full bg-gradient-to-b from-primary to-secondary" />
                )}

                {/* Card */}
                <div className="bg-card rounded-2xl p-6 shadow-md hover-lift relative z-10 border-2 border-transparent hover:border-secondary transition-all">
                  {/* Icon */}
                  <div className={`${step.color} w-16 h-16 rounded-full flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}>
                    <step.icon className="w-8 h-8" />
                  </div>

                  {/* Step Number */}
                  <div className="absolute top-4 right-4 text-4xl font-bold text-muted/20">
                    {index + 1}
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-primary mb-2">{step.title}</h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {step.description}
                  </p>

                  {/* Duration Badge */}
                  <div className="inline-flex items-center gap-2 bg-muted px-3 py-1 rounded-full">
                    <div className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
                    <span className="text-xs font-semibold text-foreground">{step.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scarcity Badge */}
        <div className="mt-16 text-center">
          <div className="inline-block glass p-6 rounded-2xl border-2 border-secondary/20">
            <p className="text-lg font-semibold text-primary mb-2">
              ⏰ Agenda Limitada
            </p>
            <p className="text-muted-foreground">
              Aceitamos apenas <span className="text-secondary font-bold">12 projetos por mês</span> para garantir qualidade máxima
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
