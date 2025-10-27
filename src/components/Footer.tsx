import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="text-2xl font-bold mb-4 flex items-center gap-2">
              <span className="text-secondary">★</span>
              Starpools
            </div>
            <p className="text-white/70 mb-6 leading-relaxed">
              Especialistas em construção de piscinas exclusivas em Belo Horizonte e região.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-secondary rounded-full flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-secondary rounded-full flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-secondary rounded-full flex items-center justify-center transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-lg font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <a href="#hero" className="text-white/70 hover:text-secondary transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-white/70 hover:text-secondary transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#galeria" className="text-white/70 hover:text-secondary transition-colors">
                  Galeria
                </a>
              </li>
              <li>
                <a href="#depoimentos" className="text-white/70 hover:text-secondary transition-colors">
                  Depoimentos
                </a>
              </li>
              <li>
                <a href="#faq" className="text-white/70 hover:text-secondary transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Serviços */}
          <div>
            <h3 className="text-lg font-bold mb-4">Serviços</h3>
            <ul className="space-y-3">
              <li className="text-white/70">Piscinas em Alvenaria</li>
              <li className="text-white/70">Piscinas em Concreto</li>
              <li className="text-white/70">Acabamento em Azulejo</li>
              <li className="text-white/70">Acabamento em Pastilha</li>
              <li className="text-white/70">Pool Plastering</li>
              <li className="text-white/70">Reforma de Piscinas</li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white/70">Telefone</p>
                  <a href="tel:5531998562030" className="hover:text-secondary transition-colors">
                    (31) 99856-2030
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white/70">Email</p>
                  <a href="mailto:contato@starpools.com" className="hover:text-secondary transition-colors">
                    contato@starpools.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white/70">Localização</p>
                  <p>Belo Horizonte, MG</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              © {currentYear} Starpools. Todos os direitos reservados.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-white/60 hover:text-secondary transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-white/60 hover:text-secondary transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
