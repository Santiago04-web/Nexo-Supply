import { useState } from 'react';

import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { SolutionsSection } from './components/SolutionsSection';
import { ValueProposition } from './components/ValueProposition';
import { VisualSection } from './components/VisualSection';
import { SabanetaSection } from './components/SabanetaSection';
import { CTASection } from './components/CTASection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { LegalModal } from './components/LegalModals';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export function App() {
  const [legalModal, setLegalModal] = useState<{
    isOpen: boolean;
    type: 'privacy' | 'terms' | null;
  }>({
    isOpen: false,
    type: null,
  });

  const handleOpenLegal = (type: 'privacy' | 'terms') => {
    setLegalModal({ isOpen: true, type });
  };

  const handleCloseLegal = () => {
    setLegalModal({ isOpen: false, type: null });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#070e1b] text-slate-100 font-sans selection:bg-[#0066FF] selection:text-white">
      {/* Header Sticky */}
      <Header />

      {/* Main Corporate Sections */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Sobre Nexo Supply (Institutional Block & Legal Identity) */}
        <AboutSection />

        {/* 3. Soluciones para Empresas (4 Conceptual Blocks) */}
        <SolutionsSection />

        {/* 4. Lo que nos mueve (Confianza, Eficiencia, Crecimiento) */}
        <ValueProposition />

        {/* 5. Sección Visual de Alto Impacto */}
        <VisualSection />

        {/* 6. Sabaneta, Antioquia (Presencia y Territorio) */}
        <SabanetaSection />

        {/* 7. CTA de Conversión */}
        <CTASection />

        {/* 8. Contacto Oficial y Formulario */}
        <ContactSection />
      </main>

      {/* Corporate Footer */}
      <Footer onOpenLegal={handleOpenLegal} />

      {/* Legal Modals (Términos & Políticas) */}
      <LegalModal
        isOpen={legalModal.isOpen}
        type={legalModal.type}
        onClose={handleCloseLegal}
      />

      {/* Quick WhatsApp Floating Contact */}
      <FloatingWhatsApp />
    </div>
  );
}

export default App;

