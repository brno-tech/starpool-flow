import { Star, Quote } from "lucide-react";
import { Card } from "@/components/ui/card";

const testimonials = [
  {
    name: "Carlos Mendes",
    location: "Belo Horizonte, MG",
    rating: 5,
    text: "Simplesmente perfeito! A equipe da Piscinas Exclusivas superou todas as expectativas. O acabamento em pool plastering ficou impecável e a piscina é o sonho da família.",
    project: "Pool Plastering Premium",
  },
  {
    name: "Marina Silva",
    location: "Nova Lima, MG",
    rating: 5,
    text: "Profissionalismo do início ao fim. Cumpriram todos os prazos, foram transparentes com os custos e o resultado final é simplesmente incrível. Super recomendo!",
    project: "Piscina em Pastilha",
  },
  {
    name: "Roberto Alves",
    location: "Lagoa Santa, MG",
    rating: 5,
    text: "A melhor decisão foi contratar a Piscinas Exclusivas. Eles transformaram nosso quintal em um verdadeiro resort. A qualidade dos materiais e mão de obra é excepcional.",
    project: "Piscina Alvenaria + Azulejo",
  },
];

const Testimonials = () => {
  return (
    <section id="depoimentos" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-secondary font-bold uppercase tracking-wider text-sm">
            Depoimentos
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary mt-2 mb-4">
            O Que Dizem Nossos Clientes
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Histórias reais de quem confiou na Piscinas Exclusivas para realizar o sonho da piscina perfeita
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-8 hover-lift relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 w-12 h-12 text-secondary/20" />

              {/* Rating Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-foreground mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Author Info */}
              <div className="border-t border-border pt-4">
                <p className="font-bold text-primary">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                <p className="text-xs text-secondary font-semibold mt-2">{testimonial.project}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Social Proof Stats */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-6 glass p-6 rounded-2xl">
            <div>
              <div className="text-4xl font-extrabold text-primary mb-1">4.9/5</div>
              <p className="text-sm text-muted-foreground">Avaliação Média</p>
            </div>
            <div className="w-px h-12 bg-border" />
            <div>
              <div className="text-4xl font-extrabold text-primary mb-1">100+</div>
              <p className="text-sm text-muted-foreground">Avaliações</p>
            </div>
            <div className="w-px h-12 bg-border" />
            <div>
              <div className="text-4xl font-extrabold text-primary mb-1">98%</div>
              <p className="text-sm text-muted-foreground">Recomendação</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
