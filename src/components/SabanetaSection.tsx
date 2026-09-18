import React from 'react';
import { MapPin, Navigation, Compass, Building2, Map, ExternalLink } from 'lucide-react';
import { COMPANY_DATA } from '../constants/companyData';

export const SabanetaSection: React.FC = () => {
  return (
    <section id="sabaneta" className="py-24 relative bg-[#060c18] border-y border-slate-800/90 overflow-hidden">
      {/* Subtle Glows */}
      <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-blue-600/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text & Territorial Context */}
          <div className="lg:col-span-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-900/40 border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-6">
              <Compass className="w-3.5 h-3.5" />
              <span>Presencia y Territorio</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display mb-6">
              Desde Sabaneta, Antioquia
            </h2>

            <p className="text-lg text-slate-300 leading-relaxed font-normal mb-8">
              {COMPANY_DATA.territoryText}
            </p>

            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-start gap-4 text-left">
                <div className="p-3 rounded-xl bg-blue-600/20 text-blue-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wide">Dirección Principal</h4>
                  <p className="text-slate-300 text-sm mt-0.5">{COMPANY_DATA.address}</p>
                  <p className="text-xs text-slate-400 mt-0.5">{COMPANY_DATA.fullLocation}</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-start gap-4 text-left">
                <div className="p-3 rounded-xl bg-blue-600/20 text-blue-400">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wide">Cámara de Comercio de Registro</h4>
                  <p className="text-slate-300 text-sm mt-0.5">{COMPANY_DATA.chamberOfCommerce}</p>
                  <p className="text-xs text-slate-400 mt-0.5">Matrícula No. {COMPANY_DATA.registrationNumber} • NIT {COMPANY_DATA.nit}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Map / Regional Representation Visual */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl p-1 bg-gradient-to-tr from-blue-500/30 via-slate-800/40 to-cyan-500/20 shadow-2xl">
              <div className="rounded-[22px] bg-slate-950 p-6 sm:p-8 border border-slate-800 relative overflow-hidden">
                
                <div className="flex items-center justify-between pb-6 border-b border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400">
                      <Map className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-mono text-slate-400 uppercase">Área Metropolitana</p>
                      <h3 className="text-lg font-bold text-white">Valle de Aburrá / Antioquia</h3>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-blue-900/60 text-blue-300 text-xs font-medium border border-blue-500/30">
                    Sabaneta
                  </span>
                </div>

                {/* Regional Territory Badges */}
                <div className="my-8 grid grid-cols-2 sm:grid-cols-3 gap-3">
                  <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-center">
                    <p className="text-xs text-slate-400">Municipio</p>
                    <p className="text-sm font-bold text-white mt-1">Sabaneta</p>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-center">
                    <p className="text-xs text-slate-400">Departamento</p>
                    <p className="text-sm font-bold text-white mt-1">Antioquia</p>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-center col-span-2 sm:col-span-1">
                    <p className="text-xs text-slate-400">País</p>
                    <p className="text-sm font-bold text-white mt-1">Colombia</p>
                  </div>
                </div>

                {/* Territorial Address Pin Display */}
                <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-950/70 to-slate-900/80 border border-blue-800/40 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Navigation className="w-5 h-5 text-blue-400 animate-pulse" />
                    <div>
                      <p className="text-xs text-slate-400 font-mono">Ubicación Registrada</p>
                      <p className="text-sm font-semibold text-white">{COMPANY_DATA.address}</p>
                    </div>
                  </div>
                  <a
                    href="https://maps.google.com/?q=Sabaneta+Antioquia+CR+48+50+SUR+128"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-blue-600/20 text-blue-400 hover:bg-blue-600 hover:text-white transition-colors"
                    aria-label="Ver en mapa"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

