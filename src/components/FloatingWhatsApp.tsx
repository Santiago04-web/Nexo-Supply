import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { COMPANY_DATA } from '../constants/companyData';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const whatsappUrl = `https://wa.me/57${COMPANY_DATA.phone}?text=Hola%20Nexo%20Supply,%20quisiera%20solicitar%20informaci%C3%B3n%20sobre%20sus%20soluciones%20de%20suministro.`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
      {/* Tooltip */}
      {showTooltip && (
        <div className="flex items-center gap-2 p-3 bg-slate-900/95 border border-slate-700/80 rounded-2xl shadow-2xl backdrop-blur-md max-w-xs">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <p className="text-xs text-slate-200">
            ¿Necesitas suministros para tu empresa? <span className="font-semibold text-emerald-400">Escríbenos</span>
          </p>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-white p-0.5 rounded-full cursor-pointer"
            aria-label="Cerrar notificación"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white shadow-xl shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:scale-110 active:scale-95 transition-all duration-300"
        aria-label="Contactar por WhatsApp a Nexo Supply"
      >
        <span className="absolute -inset-1 rounded-full bg-emerald-500/30 animate-pulse pointer-events-none" />
        <MessageCircle className="w-7 h-7 fill-current" />
      </a>
    </div>
  );
};

