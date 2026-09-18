import React from 'react';
import { ArrowRight, Sparkles, Shield, Cpu, PackageCheck, MapPin, CheckCircle2 } from 'lucide-react';
import { COMPANY_DATA } from '../constants/companyData';

export const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Dynamic Background Glows & Patterns */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      
      {/* Radial ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/15 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 -right-20 w-[400px] h-[400px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-2/3 -left-20 w-[400px] h-[400px] bg-indigo-600/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text & Call to Action */}
          <div className="lg:col-span-7 text-center lg:text-left">
            
            {/* Corporate Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-blue-500/30 text-blue-300 text-xs sm:text-sm font-medium mb-6 shadow-inner backdrop-blur-md">
              <span className="flex h-2 w-2 rounded-full bg-blue-400 animate-pulse" />
              <span>Soluciones Integrales para Empresas</span>
              <span className="text-slate-500">|</span>
              <span className="text-slate-300 flex items-center gap-1">
                <MapPin className="w-3 h-3 text-blue-400" />
                Sabaneta, Antioquia
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.12] mb-6 font-display">
              Soluciones que{' '}
              <span className="text-gradient-electric">impulsan tu negocio.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal mb-8">
              {COMPANY_DATA.shortDescription}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={() => scrollTo('soluciones')}
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-xl shadow-blue-600/25 hover:shadow-blue-500/40 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Conocer más</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => scrollTo('contacto')}
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 shadow-lg transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Contactarnos</span>
              </button>
            </div>

            {/* Institutional Trust Badges (Factual & Prudent) */}
            <div className="mt-10 pt-8 border-t border-slate-800/80 grid grid-cols-3 gap-4 text-left">
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-1">
                  <Shield className="w-3.5 h-3.5 text-blue-400" />
                  <span>Confianza</span>
                </div>
                <span className="text-xs text-slate-400 font-medium leading-tight">Transparencia y cumplimiento</span>
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-1.5 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-1">
                  <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Eficiencia</span>
                </div>
                <span className="text-xs text-slate-400 font-medium leading-tight">Procesos ágiles para operar</span>
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-1.5 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-1">
                  <PackageCheck className="w-3.5 h-3.5 text-blue-300" />
                  <span>Crecimiento</span>
                </div>
                <span className="text-xs text-slate-400 font-medium leading-tight">Acompañamiento empresarial</span>
              </div>
            </div>

          </div>

          {/* Right Visual Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Visual Image Card with Backdrop */}
              <div className="relative rounded-3xl p-1 bg-gradient-to-b from-blue-500/30 via-slate-700/20 to-slate-800/40 shadow-2xl shadow-blue-900/30 backdrop-blur-xl group overflow-hidden">
                <div className="relative rounded-[22px] overflow-hidden bg-slate-900">
                  <img
                    src="/assets/nexo-banner.png"
                    alt="Nexo Supply - Operaciones y Suministros Empresariales"
                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070e1b] via-transparent to-transparent opacity-80" />
                  
                  {/* Subtle overlay info */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-950/80 backdrop-blur-md border border-slate-800 flex items-center justify-between">
                    <div>
                      <p className="text-xs text-slate-400 font-mono uppercase">Razón Social Registrada</p>
                      <p className="text-sm font-bold text-white tracking-wide">NEXO SUPPLY</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-slate-400 font-mono">NIT</p>
                      <p className="text-sm font-semibold text-blue-400 font-mono">{COMPANY_DATA.nit}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Verified Card Top Right */}
              <div className="hidden sm:flex absolute -top-5 -right-5 items-center gap-3 p-3.5 rounded-2xl bg-slate-900/90 border border-blue-500/40 shadow-xl backdrop-blur-xl animate-bounce-slow">
                <div className="w-9 h-9 rounded-xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400">
                  <CheckCircle2 className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-[11px] text-slate-400 uppercase font-semibold tracking-wider">Atención Empresarial</p>
                  <p className="text-xs font-bold text-white">Sabaneta, Antioquia</p>
                </div>
              </div>

              {/* Floating Supply Card Bottom Left */}
              <div className="hidden sm:flex absolute -bottom-6 -left-6 items-center gap-3 p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl backdrop-blur-xl">
                <div className="w-9 h-9 rounded-xl bg-cyan-600/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
                  <Sparkles className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <p className="text-[11px] text-slate-400 uppercase font-semibold tracking-wider">Propuesta</p>
                  <p className="text-xs font-bold text-slate-200">Suministros y Soluciones</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

