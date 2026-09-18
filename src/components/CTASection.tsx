import React from 'react';
import { PhoneCall, ArrowRight, Sparkles } from 'lucide-react';
import { COMPANY_DATA } from '../constants/companyData';

export const CTASection: React.FC = () => {
  const scrollToContact = () => {
    const el = document.getElementById('contacto');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-b from-[#070e1b] via-[#09152a] to-[#070e1b]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-600/20 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="glass-card rounded-3xl p-10 sm:p-14 border border-blue-500/30 text-center shadow-2xl relative overflow-hidden">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-600/20 border border-blue-500/40 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>Contacto Directo</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight font-display mb-6">
            ¿Buscas una solución para tu empresa?
          </h2>

          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10 font-normal">
            Hablemos sobre tus necesidades y encontremos una alternativa adecuada.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={scrollToContact}
              className="w-full sm:w-auto px-9 py-4 rounded-xl font-bold text-white bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-xl shadow-blue-600/30 hover:shadow-blue-500/50 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-3 text-base cursor-pointer"
            >
              <PhoneCall className="w-5 h-5 text-blue-200" />
              <span>Hablar con nosotros</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={`tel:${COMPANY_DATA.phoneRaw}`}
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold text-slate-300 bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 text-base"
            >
              <span>Llamar al {COMPANY_DATA.phoneFormatted}</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

