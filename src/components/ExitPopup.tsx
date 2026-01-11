import { useState, useEffect } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X, Gift } from "lucide-react";
import { trackWhatsAppClick } from "@/hooks/useTracking";

const ExitPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      // Only trigger if mouse leaves from the top and popup hasn't been shown yet
      if (e.clientY <= 0 && !hasShown) {
        setIsOpen(true);
        setHasShown(true);
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [hasShown]);

  const handleClaim = () => {
    trackWhatsAppClick("home");
    const message = "Olá! Vi a oferta especial e gostaria de garantir meu desconto de 10%!";
    window.open(`https://wa.me/5531998562030?text=${encodeURIComponent(message)}`, "_blank");
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-2xl p-0 overflow-hidden border-4 border-secondary">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 z-50 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-100 transition-colors"
        >
          <X className="w-5 h-5 text-primary" />
        </button>

        <div className="bg-gradient-to-br from-primary via-primary-glow to-primary p-12 text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 bg-secondary rounded-full mb-6 animate-bounce">
            <Gift className="w-10 h-10 text-white" />
          </div>

          {/* Headline */}
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Espere! 🎁
          </h2>
          <p className="text-2xl text-white font-bold mb-6">
            Ganhe 10% de Desconto Especial
          </p>

          {/* Description */}
          <p className="text-xl text-white/90 mb-8 max-w-xl mx-auto leading-relaxed">
            Antes de sair, aproveite nossa <span className="font-bold text-secondary">oferta exclusiva</span> para
            os próximos clientes que solicitarem orçamento agora!
          </p>

          {/* Benefits */}
          <div className="glass-dark rounded-2xl p-6 mb-8 max-w-md mx-auto">
            <ul className="space-y-3 text-left">
              <li className="flex items-center gap-3 text-white">
                <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span>10% de desconto no projeto completo</span>
              </li>
              <li className="flex items-center gap-3 text-white">
                <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span>Visita técnica gratuita</span>
              </li>
              <li className="flex items-center gap-3 text-white">
                <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span>Projeto 3D sem custo adicional</span>
              </li>
            </ul>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-4">
            <Button
              size="lg"
              onClick={handleClaim}
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg font-bold py-6 pulse-glow"
            >
              Sim! Quero Garantir Meu Desconto
            </Button>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/70 hover:text-white text-sm underline transition-colors"
            >
              Não, obrigado. Prefiro pagar o preço cheio.
            </button>
          </div>

          {/* Urgency Timer */}
          <div className="mt-8 inline-block bg-red-500/20 border border-red-500/30 rounded-lg px-6 py-3">
            <p className="text-white text-sm font-semibold">
              ⏰ Oferta válida apenas para os próximos 5 orçamentos!
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ExitPopup;
