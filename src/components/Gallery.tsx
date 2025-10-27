import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ZoomIn } from "lucide-react";
import poolAzulejo from "@/assets/pool-azulejo.jpg";
import poolPastilha from "@/assets/pool-pastilha.jpg";
import poolPlastering from "@/assets/pool-plastering.jpg";

const galleryItems = [
  { id: 1, category: "azulejo", title: "Piscina Resort com Azulejo Premium", type: "image", image: poolAzulejo },
  { id: 2, category: "pastilha", title: "Piscina Infinita com Pastilha", type: "image", image: poolPastilha },
  { id: 3, category: "plastering", title: "Pool Plastering Premium", type: "image", image: poolPlastering },
  { id: 4, category: "azulejo", title: "Projeto Residencial Luxo", type: "image", image: poolAzulejo },
  { id: 5, category: "pastilha", title: "Piscina com Borda Infinita", type: "image", image: poolPastilha },
  { id: 6, category: "plastering", title: "Revestimento Americano", type: "image", image: poolPlastering },
];

const Gallery = () => {
  const [selectedTab, setSelectedTab] = useState("todos");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredItems =
    selectedTab === "todos"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedTab);

  return (
    <section id="galeria" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-secondary font-bold uppercase tracking-wider text-sm">
            Nossos projetos
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary mt-2 mb-4">
            Galeria de Obras
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Conheça alguns dos projetos que transformamos em realidade
          </p>
        </div>

        {/* Filter Tabs */}
        <Tabs value={selectedTab} onValueChange={setSelectedTab} className="mb-12">
          <TabsList className="grid w-full md:w-auto md:inline-grid grid-cols-2 md:grid-cols-4 gap-2 bg-muted p-2 rounded-xl">
            <TabsTrigger value="todos" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              Todos
            </TabsTrigger>
            <TabsTrigger value="azulejo" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              Azulejo
            </TabsTrigger>
            <TabsTrigger value="pastilha" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              Pastilha
            </TabsTrigger>
            <TabsTrigger value="plastering" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              Pool Plastering
            </TabsTrigger>
          </TabsList>
        </Tabs>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative aspect-video rounded-2xl overflow-hidden hover-lift cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedImage(item.id)}
            >
              {/* Real Pool Image */}
              <img 
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6 w-full">
                  <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                  <div className="flex items-center gap-2">
                    <ZoomIn className="w-4 h-4 text-secondary" />
                    <span className="text-white/90 text-sm">Clique para ampliar</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6 text-lg">
            Quer ver seu projeto aqui? Vamos tornar seu sonho realidade!
          </p>
          <Button
            size="lg"
            onClick={() => document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-primary hover:bg-primary-glow text-primary-foreground px-8"
          >
            Solicitar Meu Projeto
          </Button>
        </div>
      </div>

      {/* Lightbox Dialog */}
      <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl">
          {selectedImage && (
            <img 
              src={galleryItems.find(item => item.id === selectedImage)?.image}
              alt="Pool"
              className="w-full h-auto rounded-lg"
            />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Gallery;
