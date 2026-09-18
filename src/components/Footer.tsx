import React from 'react';
import { MapPin, Phone, Mail, Globe, Shield, ArrowUp } from 'lucide-react';
import { COMPANY_DATA } from '../constants/companyData';
import { Logo } from './Logo';

interface FooterProps {
  onOpenLegal: (type: 'privacy' | 'terms') => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#050b14] border-t border-slate-800 text-slate-400 text-sm relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800/80">
          
          {/* Brand & Corporate Intro */}
          <div className="lg:col-span-4 space-y-4">
            <Logo size="md" showSlogan={false} />
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mt-4">
              {COMPANY_DATA.shortDescription}
            </p>
            <div className="pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs text-blue-400 font-mono">
                <Shield className="w-3.5 h-3.5" />
                <span>NIT {COMPANY_DATA.nit}</span>
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider font-display">
              Navegación
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="#inicio"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('inicio');
                  }}
                  className="hover:text-white transition-colors block text-xs sm:text-sm"
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="#nosotros"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('nosotros');
                  }}
                  className="hover:text-white transition-colors block text-xs sm:text-sm"
                >
                  Nosotros
                </a>
              </li>
              <li>
                <a
                  href="#soluciones"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('soluciones');
                  }}
                  className="hover:text-white transition-colors block text-xs sm:text-sm"
                >
                  Soluciones
                </a>
              </li>
              <li>
                <a
                  href="#contacto"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('contacto');
                  }}
                  className="hover:text-white transition-colors block text-xs sm:text-sm"
                >
                  Contacto
                </a>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegal('privacy')}
                  className="text-slate-400 hover:text-white transition-colors text-left block text-xs sm:text-sm cursor-pointer"
                >
                  Política de privacidad
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegal('terms')}
                  className="text-slate-400 hover:text-white transition-colors text-left block text-xs sm:text-sm cursor-pointer"
                >
                  Términos y condiciones
                </button>
              </li>
            </ul>
          </div>

          {/* Exact Official Legal Information */}
          <div className="lg:col-span-5 space-y-3">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider font-display">
              Datos Institucionales Oficiales
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">{COMPANY_DATA.address}</p>
                  <p className="text-slate-400 text-xs">{COMPANY_DATA.fullLocation}</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <a href={`tel:${COMPANY_DATA.phoneRaw}`} className="text-slate-300 hover:text-white transition-colors">
                  {COMPANY_DATA.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <a href={`mailto:${COMPANY_DATA.email}`} className="text-slate-300 hover:text-white transition-colors">
                  {COMPANY_DATA.email}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Globe className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <a href={COMPANY_DATA.websiteUrl} className="text-blue-400 hover:text-blue-300 transition-colors">
                  {COMPANY_DATA.domain}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500 text-center sm:text-left">
            © 2026 Nexo Supply. Todos los derechos reservados.
          </p>

          <div className="flex items-center gap-4">
            <span className="text-xs text-slate-500">
              {COMPANY_DATA.city}, {COMPANY_DATA.department}
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-blue-600 transition-all cursor-pointer"
              aria-label="Volver arriba"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

