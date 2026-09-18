import React, { useState } from 'react';
import { Mail, Phone, MapPin, Globe, Send, CheckCircle2, AlertCircle, Building, User, PhoneCall, MessageSquare, Loader2 } from 'lucide-react';
import { COMPANY_DATA } from '../constants/companyData';
import type { ContactFormData, FormStatus } from '../types';


export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    nombre: '',
    empresa: '',
    correo: '',
    telefono: '',
    mensaje: '',
  });

  const [status, setStatus] = useState<FormStatus>({
    submitting: false,
    success: false,
    error: null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nombre || !formData.correo || !formData.mensaje) {
      setStatus({
        submitting: false,
        success: false,
        error: 'Por favor completa todos los campos requeridos (*).',
      });
      return;
    }

    setStatus({ submitting: true, error: null, success: false });

    // Simulate reliable submission
    setTimeout(() => {
      setStatus({ submitting: false, success: true, error: null });
      console.log('Mensaje enviado:', formData);
    }, 900);
  };

  const handleReset = () => {
    setFormData({
      nombre: '',
      empresa: '',
      correo: '',
      telefono: '',
      mensaje: '',
    });
    setStatus({ submitting: false, success: false, error: null });
  };

  return (
    <section id="contacto" className="py-24 relative bg-[#070e1b] overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-600/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-cyan-600/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-900/40 border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Mail className="w-3.5 h-3.5" />
            <span>Atención Inmediata</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display mb-6">
            Contáctanos
          </h2>
          <p className="text-lg text-slate-300 leading-relaxed font-normal">
            Estamos disponibles para atender tus requerimientos de suministro y estructurar alternativas a la medida de tu organización.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Official Contact & Legal Data Display */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Legal Identity Card */}
            <div className="rounded-3xl p-8 bg-gradient-to-b from-slate-900/95 to-[#0b172a]/95 border border-slate-800 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
              
              <div className="mb-6">
                <span className="text-xs font-mono uppercase text-blue-400 tracking-wider">Identidad Corporativa Oficial</span>
                <h3 className="text-2xl font-black text-white font-display mt-1">
                  {COMPANY_DATA.name.toUpperCase()}
                </h3>
                <div className="mt-2 inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-950/80 border border-blue-600/30">
                  <span className="text-xs text-slate-400 font-mono">NIT:</span>
                  <span className="text-xs font-bold text-blue-300 font-mono">{COMPANY_DATA.nit}</span>
                </div>
              </div>

              <div className="space-y-4 pt-4 border-t border-slate-800/80">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-slate-800/80 text-blue-400 flex-shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-medium uppercase">Dirección</p>
                    <p className="text-sm font-semibold text-white mt-0.5">{COMPANY_DATA.address}</p>
                    <p className="text-xs text-slate-400">{COMPANY_DATA.fullLocation}</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-slate-800/80 text-blue-400 flex-shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-medium uppercase">Teléfono Comercial</p>
                    <a
                      href={`tel:${COMPANY_DATA.phoneRaw}`}
                      className="text-sm font-semibold text-white hover:text-blue-400 transition-colors block mt-0.5"
                    >
                      {COMPANY_DATA.phone}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-slate-800/80 text-blue-400 flex-shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-medium uppercase">Correo Electrónico</p>
                    <a
                      href={`mailto:${COMPANY_DATA.email}`}
                      className="text-sm font-semibold text-white hover:text-blue-400 transition-colors block mt-0.5 break-all"
                    >
                      {COMPANY_DATA.email}
                    </a>
                  </div>
                </div>

                {/* Web Domain */}
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-slate-800/80 text-blue-400 flex-shrink-0 mt-0.5">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-medium uppercase">Sitio Web Oficial</p>
                    <a
                      href={COMPANY_DATA.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors block mt-0.5"
                    >
                      {COMPANY_DATA.websiteUrl}
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 text-xs text-slate-400">
                <p>
                  Sabaneta, Antioquia, Colombia • {COMPANY_DATA.chamberOfCommerce}
                </p>
              </div>
            </div>

            {/* Direct WhatsApp Callout */}
            <div className="rounded-2xl p-5 bg-blue-950/40 border border-blue-800/40 flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold text-blue-300 uppercase">Atención Rápida por WhatsApp</p>
                <p className="text-sm text-slate-200 font-medium">Línea directa: {COMPANY_DATA.phone}</p>
              </div>
              <a
                href={`https://wa.me/57${COMPANY_DATA.phone}?text=Hola%20Nexo%20Supply,%20quisiera%20solicitar%20informaci%C3%B3n%20sobre%20sus%20soluciones.`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-lg shadow-emerald-600/20 transition-all"
              >
                Abrir Chat
              </a>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl p-8 sm:p-10 bg-slate-900/90 border border-slate-800 shadow-2xl relative">
              
              {status.success ? (
                <div className="text-center py-12 px-4 space-y-6">
                  <div className="w-16 h-16 bg-emerald-500/20 border border-emerald-500/40 rounded-full flex items-center justify-center text-emerald-400 mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2 font-display">
                      ¡Mensaje enviado exitosamente!
                    </h3>
                    <p className="text-slate-300 text-base max-w-md mx-auto leading-relaxed">
                      Gracias por contactar a <strong className="text-white">Nexo Supply</strong>. Un representante de nuestro equipo revisará tu requerimiento y te responderá a la brevedad.
                    </p>
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      onClick={handleReset}
                      type="button"
                      className="px-6 py-2.5 rounded-xl text-sm font-semibold bg-slate-800 text-slate-200 hover:bg-slate-700 transition-colors cursor-pointer"
                    >
                      Enviar otro mensaje
                    </button>
                    <a
                      href={`https://wa.me/57${COMPANY_DATA.phone}?text=Hola%20Nexo%20Supply,%20acabo%20de%20enviar%20un%20formulario%20de%20contacto.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2.5 rounded-xl text-sm font-semibold bg-blue-600 text-white hover:bg-blue-500 transition-colors"
                    >
                      Confirmar por WhatsApp
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white font-display mb-1">
                      Envíanos un mensaje
                    </h3>
                    <p className="text-sm text-slate-400">
                      Completa los campos a continuación y nos pondremos en contacto.
                    </p>
                  </div>

                  {status.error && (
                    <div className="p-4 rounded-xl bg-rose-950/60 border border-rose-500/40 text-rose-300 text-sm flex items-center gap-3">
                      <AlertCircle className="w-5 h-5 flex-shrink-0 text-rose-400" />
                      <span>{status.error}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Nombre */}
                    <div>
                      <label htmlFor="nombre" className="block text-xs font-semibold uppercase text-slate-300 mb-2">
                        Nombre completo <span className="text-blue-400">*</span>
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5 pointer-events-none" />
                        <input
                          type="text"
                          id="nombre"
                          name="nombre"
                          value={formData.nombre}
                          onChange={handleChange}
                          required
                          placeholder="Tu nombre y apellido"
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm transition-all"
                        />
                      </div>
                    </div>

                    {/* Empresa */}
                    <div>
                      <label htmlFor="empresa" className="block text-xs font-semibold uppercase text-slate-300 mb-2">
                        Empresa / Organización
                      </label>
                      <div className="relative">
                        <Building className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5 pointer-events-none" />
                        <input
                          type="text"
                          id="empresa"
                          name="empresa"
                          value={formData.empresa}
                          onChange={handleChange}
                          placeholder="Nombre de tu empresa"
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Correo */}
                    <div>
                      <label htmlFor="correo" className="block text-xs font-semibold uppercase text-slate-300 mb-2">
                        Correo electrónico <span className="text-blue-400">*</span>
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5 pointer-events-none" />
                        <input
                          type="email"
                          id="correo"
                          name="correo"
                          value={formData.correo}
                          onChange={handleChange}
                          required
                          placeholder="ejemplo@empresa.com"
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm transition-all"
                        />
                      </div>
                    </div>

                    {/* Teléfono */}
                    <div>
                      <label htmlFor="telefono" className="block text-xs font-semibold uppercase text-slate-300 mb-2">
                        Teléfono / Celular <span className="text-blue-400">*</span>
                      </label>
                      <div className="relative">
                        <PhoneCall className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5 pointer-events-none" />
                        <input
                          type="tel"
                          id="telefono"
                          name="telefono"
                          value={formData.telefono}
                          onChange={handleChange}
                          required
                          placeholder="300 000 0000"
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Mensaje */}
                  <div>
                    <label htmlFor="mensaje" className="block text-xs font-semibold uppercase text-slate-300 mb-2">
                      Mensaje o Requerimiento <span className="text-blue-400">*</span>
                    </label>
                    <div className="relative">
                      <MessageSquare className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5 pointer-events-none" />
                      <textarea
                        id="mensaje"
                        name="mensaje"
                        rows={4}
                        value={formData.mensaje}
                        onChange={handleChange}
                        required
                        placeholder="Describe brevemente tus requerimientos o inquietudes..."
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm transition-all resize-none"
                      />
                    </div>
                  </div>

                  {/* Legal Notice */}
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Al enviar este formulario aceptas el tratamiento de tus datos para fines exclusivamente de contacto comercial e institucional según la normativa colombiana de protección de datos (Ley 1581 de 2012).
                  </p>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status.submitting}
                    className="w-full py-4 px-6 rounded-xl font-bold text-white bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-xl shadow-blue-600/30 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                  >
                    {status.submitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Enviando mensaje...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Enviar mensaje</span>
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

