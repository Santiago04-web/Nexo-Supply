import React from 'react';
import { Building, CheckSquare, Globe, Mail, Phone, FileCheck, ShieldCheck } from 'lucide-react';

import { COMPANY_DATA } from '../constants/companyData';
import { Logo } from './Logo';

export const AboutSection: React.FC = () => {
  return (
    <section id="nosotros" className="py-24 relative bg-[#091323]/70 border-y border-slate-800/80">
      {/* Background Subtle Highlights */}
      <div className="absolute inset-0 bg-dot-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/40 border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Building className="w-3.5 h-3.5" />
            <span>Identidad Institucional</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display mb-6">
            Sobre Nexo Supply
          </h2>
          <p className="text-lg text-slate-300 leading-relaxed font-normal">
            {COMPANY_DATA.aboutText}
          </p>
        </div>

        {/* Corporate Legal & Institutional Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Institutional Information Card */}
          <div className="lg:col-span-7 flex flex-col justify-between glass-card rounded-3xl p-8 sm:p-10 relative overflow-hidden border border-slate-700/60 shadow-2xl">
            <div className="absolute -top-24 -right-24 w-60 h-60 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between pb-6 border-b border-slate-800">
                <Logo size="md" />
                <div className="flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-medium">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Registro Mercantil Activo</span>
                </div>
              </div>

              <div className="mt-8 space-y-6">
                <p className="text-slate-300 leading-relaxed text-base">
                  Desarrollamos nuestras actividades empresariales enfocados en atender de manera seria, estructurada y transparente los requerimientos de suministro de las organizaciones.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800/90">
                    <p className="text-xs text-slate-400 font-medium uppercase tracking-wider mb-1">Razón Social</p>
                    <p className="text-base font-bold text-white">{COMPANY_DATA.legalName}</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800/90">
                    <p className="text-xs text-slate-400 font-medium uppercase tracking-wider mb-1">Número de Identificación Tributaria (NIT)</p>
                    <p className="text-base font-bold text-blue-400 font-mono">{COMPANY_DATA.nit}</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800/90">
                    <p className="text-xs text-slate-400 font-medium uppercase tracking-wider mb-1">Ubicación y Domicilio</p>
                    <p className="text-sm font-semibold text-slate-200">{COMPANY_DATA.fullLocation}</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800/90">
                    <p className="text-xs text-slate-400 font-medium uppercase tracking-wider mb-1">Dirección Principal</p>
                    <p className="text-sm font-semibold text-slate-200">{COMPANY_DATA.address}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400 font-medium">
              <span className="flex items-center gap-1.5">
                <FileCheck className="w-4 h-4 text-blue-400" />
                Matrícula No. {COMPANY_DATA.registrationNumber}
              </span>
              <span className="flex items-center gap-1.5">
                <CheckSquare className="w-4 h-4 text-blue-400" />
                Grupo NIIF: {COMPANY_DATA.niifGroup}
              </span>
              <span className="flex items-center gap-1.5">
                <Building className="w-4 h-4 text-blue-400" />
                {COMPANY_DATA.chamberOfCommerce}
              </span>
            </div>
          </div>

          {/* Right: Operational & Contact Verified Card */}
          <div className="lg:col-span-5 flex flex-col justify-between glass-card rounded-3xl p-8 sm:p-10 border border-blue-900/40 relative bg-gradient-to-b from-slate-900/90 to-[#0c182c]/90 shadow-2xl">
            
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-300 text-xs font-semibold mb-6">
                <span>Información Oficial Verificada</span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4 font-display">
                Canales Oficiales
              </h3>

              <p className="text-slate-400 text-sm leading-relaxed mb-8">
                Toda nuestra comunicación corporativa se realiza a través de nuestros canales oficiales verificados.
              </p>

              <div className="space-y-4">
                <a
                  href={`tel:${COMPANY_DATA.phoneRaw}`}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-blue-500/50 hover:bg-slate-850 transition-all group"
                >
                  <div className="p-3 rounded-xl bg-blue-600/10 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 uppercase font-medium">Línea Telefónica Comercial</p>
                    <p className="text-base font-bold text-white mt-0.5">{COMPANY_DATA.phoneFormatted}</p>
                  </div>
                </a>

                <a
                  href={`mailto:${COMPANY_DATA.email}`}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-blue-500/50 hover:bg-slate-850 transition-all group"
                >
                  <div className="p-3 rounded-xl bg-blue-600/10 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 uppercase font-medium">Correo Institucional</p>
                    <p className="text-base font-bold text-white mt-0.5">{COMPANY_DATA.email}</p>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
                  <div className="p-3 rounded-xl bg-blue-600/10 text-blue-400">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 uppercase font-medium">Dominio Oficial</p>
                    <p className="text-base font-bold text-blue-400 mt-0.5">{COMPANY_DATA.domain}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800/80">
              <p className="text-xs text-slate-400 leading-relaxed text-center">
                Registro mercantil renovado año {COMPANY_DATA.lastRenewalYear}. Información pública disponible para consulta y verificación empresarial.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

