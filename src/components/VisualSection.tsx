import React from 'react';
import { Layers, Warehouse, Truck, Users, Shield, Boxes } from 'lucide-react';

export const VisualSection: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-[#070e1b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-900/40 border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>Infraestructura & Gestión</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display mb-6">
            Eficiencia Operativa y Logística
          </h2>
          <p className="text-lg text-slate-300 leading-relaxed font-normal">
            Enfoque estratégico orientado a la coordinación ágil, el abastecimiento organizado y la continuidad de las operaciones empresariales.
          </p>
        </div>

        {/* High Impact Visual Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Visual Feature: Large Corporate Supply Banner with Glass Overlay */}
          <div className="lg:col-span-8 rounded-3xl relative overflow-hidden border border-slate-800 group shadow-2xl min-h-[420px] flex flex-col justify-end p-8 sm:p-12">
            <img
              src="/assets/nexo-banner.png"
              alt="Cadena de suministro y almacén moderno Nexo Supply"
              className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070e1b] via-[#070e1b]/70 to-transparent" />
            
            <div className="relative z-10 max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600/90 text-white text-xs font-semibold uppercase tracking-wider mb-3">
                <Warehouse className="w-3.5 h-3.5" />
                <span>Gestión de Suministros</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white font-display mb-3">
                Procesos ordenados para responder a los retos del negocio
              </h3>
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                Integramos visión territorial, cumplimiento estricto y atención directa para apoyar a las organizaciones en sus necesidades de abastecimiento.
              </p>
            </div>
          </div>

          {/* Right Column: 2 Visual Concept Cards */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            
            {/* Card 1: Distribución & Flujo */}
            <div className="flex-1 rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-slate-900 to-[#0e1d35] border border-slate-800 shadow-xl flex flex-col justify-between group hover:border-blue-500/40 transition-all">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-blue-600/20 border border-blue-500/40 text-blue-400 flex items-center justify-center mb-5 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <Truck className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-white font-display mb-2">
                  Distribución y Flujo Continuo
                </h4>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Compromiso constante con la puntualidad y el seguimiento transparente en la entrega de suministros.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-800 flex items-center gap-2 text-xs text-blue-400 font-semibold">
                <Boxes className="w-4 h-4" />
                <span>Organización logística</span>
              </div>
            </div>

            {/* Card 2: Equipo y Atención */}
            <div className="flex-1 rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-slate-900 to-[#0b1b30] border border-slate-800 shadow-xl flex flex-col justify-between group hover:border-blue-500/40 transition-all">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-cyan-600/20 border border-cyan-500/40 text-cyan-400 flex items-center justify-center mb-5 group-hover:bg-cyan-600 group-hover:text-white transition-all">
                  <Users className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-white font-display mb-2">
                  Atención Directa y Cercana
                </h4>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Interlocución clara y personalizada con los responsables de compras y operaciones de cada empresa.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-800 flex items-center gap-2 text-xs text-cyan-400 font-semibold">
                <Shield className="w-4 h-4" />
                <span>Respaldo institucional</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

