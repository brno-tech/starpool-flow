import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Quanto tempo leva para construir uma piscina?",
    answer: "O prazo médio é de 60 a 90 dias úteis, dependendo do tamanho e complexidade do projeto. Isso inclui todas as etapas: escavação, estrutura, impermeabilização, acabamento e sistema de filtração.",
  },
  {
    question: "Qual a diferença entre os acabamentos disponíveis?",
    answer: "Azulejo: durável, tradicional e com bom custo-benefício. Pastilha: mais moderna, diversidade de cores e design sofisticado. Pool Plastering (revestimento americano): acabamento premium, superfície lisa, resistente a manchas e fácil manutenção.",
  },
  {
    question: "Vocês trabalham com projeto 3D antes da obra?",
    answer: "Sim! Desenvolvemos um projeto 3D completo para que você visualize exatamente como ficará sua piscina antes de iniciarmos a construção. Isso inclui escolha de acabamentos, iluminação e paisagismo.",
  },
  {
    question: "Qual é o valor do investimento?",
    answer: "O investimento varia conforme tamanho, acabamentos e recursos adicionais (iluminação, aquecimento, cascata, etc). Realizamos uma visita técnica gratuita para entender suas necessidades e elaborar um orçamento personalizado e transparente.",
  },
  {
    question: "A garantia está inclusa?",
    answer: "Sim! Oferecemos 10 anos de garantia em toda estrutura e impermeabilização, além de 1 ano nos equipamentos. Também fornecemos suporte técnico pós-obra para dúvidas sobre manutenção.",
  },
  {
    question: "Vocês cuidam da documentação e licenças?",
    answer: "Sim, nossa equipe cuida de toda a parte burocrática, incluindo projetos aprovados, alvará quando necessário e documentação técnica. Deixamos tudo regularizado para sua tranquilidade.",
  },
  {
    question: "Como funciona o pagamento?",
    answer: "Trabalhamos com condições flexíveis: entrada, parcelas durante a obra conforme etapas concluídas e saldo final na entrega. Aceitamos diversas formas de pagamento. As condições exatas são definidas no contrato após o orçamento.",
  },
  {
    question: "Fazem reforma de piscinas antigas?",
    answer: "Sim! Realizamos reformas completas: troca de revestimento, recuperação de estrutura, modernização do sistema de filtração, iluminação LED e muito mais. Fazemos avaliação gratuita para apresentar as melhores soluções.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-secondary font-bold uppercase tracking-wider text-sm">
            Dúvidas frequentes
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary mt-2 mb-4">
            Perguntas & Respostas
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Tire suas dúvidas sobre nossos serviços e processos
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border rounded-xl px-6 bg-card hover:border-secondary/50 transition-colors"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-primary hover:text-secondary hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="glass inline-block p-8 rounded-2xl max-w-2xl">
            <h3 className="text-2xl font-bold text-primary mb-3">
              Ainda tem dúvidas?
            </h3>
            <p className="text-muted-foreground mb-6">
              Nossa equipe está pronta para esclarecer todas as suas questões e ajudar no seu projeto
            </p>
            <button
              onClick={() => window.open("https://wa.me/5531920021799?text=Olá! Tenho algumas dúvidas sobre construção de piscinas", "_blank")}
              className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary/90 text-secondary-foreground px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Falar no WhatsApp
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
