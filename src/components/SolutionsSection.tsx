import React from 'react';
import { Package, Building2, UserCheck, Handshake, ArrowUpRight } from 'lucide-react';
import { SOLUTIONS } from '../constants/companyData';

export const SolutionsSection: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Package':
        return <Package className="w-6 h-6" />;
      case 'Building2':
        return <Building2 className="w-6 h-6" />;
      case 'UserCheck':
        return <UserCheck className="w-6 h-6" />;
      case 'Handshake':
        return <Handshake className="w-6 h-6" />;
      default:
        return <Package className="w-6 h-6" />;
    }
  };

  const scrollToContact = () => {
    const el = document.getElementById('contacto');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="soluciones" className="py-24 relative overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-96 h-96 bg-cyan-600/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-900/40 border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Package className="w-3.5 h-3.5" />
            <span>Capacidades Corporativas</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display mb-6">
            Soluciones para empresas
          </h2>
          <p className="text-lg text-slate-300 leading-relaxed font-normal">
            Estructuramos nuestras soluciones para responder con agilidad, orden y solvencia a las demandas de abastecimiento corporativo.
          </p>
        </div>

        {/* 4 Solutions Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SOLUTIONS.map((solution, idx) => (
            <div
              key={solution.id}
              className="group glass-card glass-card-hover rounded-3xl p-8 sm:p-10 relative overflow-hidden border border-slate-800 flex flex-col justify-between"
            >
              {/* Top ambient highlight inside card */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-colors pointer-events-none" />

              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-blue-600/10 border border-blue-500/30 text-blue-400 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white group-hover:scale-110 transition-all duration-300 shadow-lg">
                    {getIcon(solution.icon)}
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-900/80 border border-slate-700/80 text-slate-300">
                    {solution.badge}
                  </span>
                </div>

                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-mono text-blue-400 font-semibold">0{idx + 1}.</span>
                  <h3 className="text-2xl font-bold text-white font-display group-hover:text-blue-300 transition-colors">
                    {solution.title}
                  </h3>
                </div>

                <p className="text-slate-300 text-base leading-relaxed mb-6 font-normal">
                  {solution.description}
                </p>
              </div>

              <div className="pt-6 border-t border-slate-800/80 flex items-center justify-between text-sm">
                <span className="text-xs text-slate-400 font-medium">Enfoque empresarial</span>
                <button
                  onClick={scrollToContact}
                  className="inline-flex items-center gap-1.5 text-blue-400 font-semibold group-hover:text-blue-300 transition-colors cursor-pointer"
                >
                  <span>Consultar requerimiento</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

