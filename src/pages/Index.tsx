import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import ProcessTimeline from "@/components/ProcessTimeline";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ExitPopup from "@/components/ExitPopup";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <SocialProof />
        <ProcessTimeline />
        <Services />
        <Gallery />
        <Testimonials />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <ExitPopup />
    </div>
  );
};

export default Index;
