import React from 'react';
import { ShieldCheck, Zap, TrendingUp, Sparkles, CheckCircle2 } from 'lucide-react';
import { VALUE_PILLARS } from '../constants/companyData';

export const ValueProposition: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-8 h-8" />;
      case 'Zap':
        return <Zap className="w-8 h-8" />;
      case 'TrendingUp':
        return <TrendingUp className="w-8 h-8" />;
      default:
        return <Sparkles className="w-8 h-8" />;
    }
  };

  return (
    <section id="enfoque" className="py-24 relative bg-[#060c18] border-y border-slate-800/90">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-blue-600/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-900/40 border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Nuestros Principios</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display mb-6">
            Lo que nos mueve
          </h2>
          <p className="text-lg text-slate-300 leading-relaxed font-normal">
            Nuestra labor corporativa se fundamenta en principios sólidos que guían cada interacción y solución con el sector empresarial.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {VALUE_PILLARS.map((pillar, idx) => (
            <div
              key={pillar.id}
              className="relative group rounded-3xl p-8 sm:p-10 bg-slate-900/80 border border-slate-800 hover:border-blue-500/40 transition-all duration-300 hover:-translate-y-1.5 shadow-xl flex flex-col justify-between"
            >
              {/* Pillar Accent Line */}
              <div className="absolute top-0 inset-x-8 h-1 bg-gradient-to-r from-transparent via-blue-500/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div>
                {/* Icon Container */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600/20 to-indigo-700/20 border border-blue-500/30 text-blue-400 flex items-center justify-center mb-8 group-hover:scale-105 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-md">
                  {getIcon(pillar.icon)}
                </div>

                {/* Subtitle / Number */}
                <p className="text-xs font-mono text-blue-400 uppercase tracking-widest font-semibold mb-2">
                  Pilar 0{idx + 1}
                </p>

                {/* Pillar Title */}
                <h3 className="text-2xl font-black text-white font-display tracking-wide mb-4">
                  {pillar.title}
                </h3>

                {/* Pillar Description */}
                <p className="text-slate-300 text-base leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              {/* Bottom Feature tag */}
              <div className="mt-8 pt-6 border-t border-slate-800/80 flex items-center gap-2 text-xs text-slate-400 font-medium">
                <CheckCircle2 className="w-4 h-4 text-blue-400" />
                <span>Compromiso de marca corporativa</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

