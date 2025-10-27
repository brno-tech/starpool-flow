import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { Lock, Send } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    interest: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validação básica
    if (!formData.name || !formData.phone || !formData.interest) {
      toast.error("Por favor, preencha todos os campos obrigatórios");
      return;
    }

    // Criar mensagem para WhatsApp
    const whatsappMessage = `Olá! Meu nome é ${formData.name}. 
    
Interesse: ${formData.interest}
Telefone: ${formData.phone}
${formData.message ? `\nMensagem: ${formData.message}` : ''}

Gostaria de receber um orçamento!`;

    const whatsappUrl = `https://wa.me/5531998562030?text=${encodeURIComponent(whatsappMessage)}`;
    
    window.open(whatsappUrl, "_blank");
    toast.success("Redirecionando para o WhatsApp...");
    
    // Limpar formulário
    setFormData({ name: "", phone: "", interest: "", message: "" });
  };

  return (
    <section id="contato" className="py-20 bg-gradient-to-br from-primary via-primary-glow to-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2760%27 height=%2760%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath d=%27M30 0l30 30-30 30L0 30z%27 fill=%27%23fff%27/%3E%3C/svg%3E')]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="text-secondary font-bold uppercase tracking-wider text-sm">
              Entre em contato
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-2 mb-4">
              Solicite Seu Orçamento
            </h2>
            <p className="text-white/90 text-lg">
              Preencha o formulário e receba uma proposta personalizada em até 24 horas
            </p>
          </div>

          {/* Form Card */}
          <div className="glass-dark rounded-3xl p-8 md:p-12 shadow-2xl">
            {/* Urgency Banner */}
            <div className="bg-secondary/20 border border-secondary/30 rounded-xl p-4 mb-8 text-center">
              <p className="text-white font-semibold">
                🔥 Promoção válida para os próximos 5 orçamentos - Ganhe desconto especial!
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Nome */}
                <div>
                  <Label htmlFor="name" className="text-white mb-2 block font-semibold">
                    Nome Completo *
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Seu nome"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-secondary"
                    required
                  />
                </div>

                {/* Telefone */}
                <div>
                  <Label htmlFor="phone" className="text-white mb-2 block font-semibold">
                    WhatsApp *
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="(31) 99999-9999"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-secondary"
                    required
                  />
                </div>
              </div>

              {/* Interesse */}
              <div>
                <Label htmlFor="interest" className="text-white mb-2 block font-semibold">
                  Tipo de Interesse *
                </Label>
                <Select value={formData.interest} onValueChange={(value) => setFormData({ ...formData, interest: value })}>
                  <SelectTrigger className="bg-white/10 border-white/20 text-white focus:border-secondary">
                    <SelectValue placeholder="Selecione o tipo de projeto" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="piscina-nova">Construção de Piscina Nova</SelectItem>
                    <SelectItem value="reforma">Reforma de Piscina</SelectItem>
                    <SelectItem value="azulejo">Acabamento em Azulejo</SelectItem>
                    <SelectItem value="pastilha">Acabamento em Pastilha</SelectItem>
                    <SelectItem value="plastering">Pool Plastering</SelectItem>
                    <SelectItem value="outro">Outro</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Mensagem */}
              <div>
                <Label htmlFor="message" className="text-white mb-2 block font-semibold">
                  Mensagem (Opcional)
                </Label>
                <Textarea
                  id="message"
                  placeholder="Conte-nos mais sobre seu projeto..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-secondary min-h-[120px]"
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                size="lg"
                className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg font-bold py-6 pulse-glow group"
              >
                <Send className="mr-2 group-hover:translate-x-1 transition-transform" />
                Receber Orçamento via WhatsApp
              </Button>

              {/* Security Badge */}
              <div className="flex items-center justify-center gap-2 text-white/70 text-sm">
                <Lock className="w-4 h-4" />
                <span>Seus dados estão seguros e protegidos</span>
              </div>
            </form>
          </div>

          {/* Additional Info */}
          <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
            <div className="glass-dark p-6 rounded-xl">
              <p className="text-white/80 font-semibold mb-2">📞 Telefone</p>
              <p className="text-white">(31) 99856-2030</p>
            </div>
            <div className="glass-dark p-6 rounded-xl">
              <p className="text-white/80 font-semibold mb-2">📧 Email</p>
              <p className="text-white">contato@starpools.com</p>
            </div>
            <div className="glass-dark p-6 rounded-xl">
              <p className="text-white/80 font-semibold mb-2">⏰ Horário</p>
              <p className="text-white">Seg-Sex: 8h-18h | Sáb: 8h-12h</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
