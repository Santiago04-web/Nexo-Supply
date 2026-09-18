import React from 'react';
import { X, ShieldCheck, FileText } from 'lucide-react';
import { COMPANY_DATA } from '../constants/companyData';

interface LegalModalProps {
  isOpen: boolean;
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ isOpen, type, onClose }) => {
  if (!isOpen || !type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-3xl rounded-3xl bg-slate-900 border border-slate-700 shadow-2xl p-6 sm:p-10 my-8 overflow-hidden">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center">
              {type === 'privacy' ? <ShieldCheck className="w-5 h-5" /> : <FileText className="w-5 h-5" />}
            </div>
            <div>
              <h3 className="text-xl font-bold text-white font-display">
                {type === 'privacy'
                  ? 'Política de Tratamiento de Datos Personales'
                  : 'Términos y Condiciones'}
              </h3>
              <p className="text-xs text-slate-400">
                {COMPANY_DATA.legalName} • NIT {COMPANY_DATA.nit}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Cerrar modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content Body */}
        <div className="py-6 max-h-[60vh] overflow-y-auto space-y-4 text-sm text-slate-300 pr-2 leading-relaxed">
          {type === 'privacy' ? (
            <>
              <p>
                <strong>1. Responsable del Tratamiento:</strong> {COMPANY_DATA.legalName}, identificada con NIT {COMPANY_DATA.nit}, con domicilio principal en {COMPANY_DATA.fullLocation}, dirección {COMPANY_DATA.address}, correo electrónico {COMPANY_DATA.email} y teléfono {COMPANY_DATA.phone}.
              </p>
              <p>
                <strong>2. Marco Legal:</strong> La presente política se rige bajo los lineamientos de la Ley Estatutaria 1581 de 2012 y el Decreto Reglamentario 1377 de 2013 de la República de Colombia.
              </p>
              <p>
                <strong>3. Finalidad del Tratamiento:</strong> Los datos personales recolectados a través de nuestro sitio web {COMPANY_DATA.domain} o formularios de contacto serán tratados exclusivamente para:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-slate-300">
                <li>Atender solicitudes, consultas comerciales y requerimientos de suministro para empresas.</li>
                <li>Establecer canales directos de comunicación institucional y comercial.</li>
                <li>Cumplir con las obligaciones legales y regulatorias vigentes en Colombia.</li>
              </ul>
              <p>
                <strong>4. Derechos de los Titulares:</strong> Los titulares de los datos personales tienen derecho a conocer, actualizar, rectificar y suprimir su información, así como a revocar la autorización otorgada, mediante solicitud formal dirigida al correo electrónico: <strong className="text-blue-400">{COMPANY_DATA.email}</strong>.
              </p>
              <p>
                <strong>5. Seguridad de la Información:</strong> {COMPANY_DATA.legalName} adopta medidas técnicas, administrativas y de seguridad adecuadas para proteger la información contra pérdida, uso indebido, acceso no autorizado o alteración.
              </p>
            </>
          ) : (
            <>
              <p>
                <strong>1. Información General:</strong> El presente sitio web {COMPANY_DATA.websiteUrl} es propiedad y está administrado por {COMPANY_DATA.legalName}, sociedad inscrita bajo la Matrícula No. {COMPANY_DATA.registrationNumber} ante la {COMPANY_DATA.chamberOfCommerce}, identificada con NIT {COMPANY_DATA.nit}, con sede en {COMPANY_DATA.fullLocation}.
              </p>
              <p>
                <strong>2. Aceptación de Términos:</strong> El acceso y navegación en este sitio web atribuye la condición de usuario e implica la aceptación plena de las presentes condiciones generales de uso.
              </p>
              <p>
                <strong>3. Objeto del Sitio:</strong> Este sitio web tiene carácter corporativo e informativo, orientado a presentar los servicios de abastecimiento y soluciones para empresas ofrecidos por {COMPANY_DATA.legalName}.
              </p>
              <p>
                <strong>4. Propiedad Intelectual:</strong> Los contenidos, textos, marcas, logotipos, elementos gráficos y código fuente son propiedad exclusiva de {COMPANY_DATA.legalName} o cuentan con las autorizaciones correspondientes para su difusión.
              </p>
              <p>
                <strong>5. Ley Aplicable y Jurisdicción:</strong> Los presentes términos se rigen por las leyes de la República de Colombia. Cualquier controversia será dirimida ante las autoridades competentes del municipio de Sabaneta y el departamento de Antioquia.
              </p>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold transition-colors cursor-pointer"
          >
            Entendido
          </button>
        </div>

      </div>
    </div>
  );
};

