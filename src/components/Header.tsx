import React, { useState, useEffect } from 'react';
import { Menu, X, PhoneCall, ChevronRight } from 'lucide-react';
import { NAVIGATION_LINKS, COMPANY_DATA } from '../constants/companyData';
import { Logo } from './Logo';

interface HeaderProps {
  onContactClick?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onContactClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = ['inicio', 'nosotros', 'soluciones', 'enfoque', 'sabaneta', 'contacto'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#070e1b]/90 backdrop-blur-xl border-b border-slate-800/80 shadow-2xl py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand / Logo */}
          <a
            href="#inicio"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#inicio');
            }}
            className="flex items-center gap-2 group transition-transform hover:scale-[1.02]"
            aria-label="Nexo Supply - Inicio"
          >
            <Logo size="md" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 bg-slate-900/60 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-md">
            {NAVIGATION_LINKS.map((link) => {
              const linkId = link.href.replace('#', '');
              const isActive = activeSection === linkId;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Action CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#contacto"
              onClick={(e) => {
                e.preventDefault();
                if (onContactClick) onContactClick();
                handleNavClick('#contacto');
              }}
              className="relative group inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-lg shadow-blue-600/25 transition-all duration-300 hover:shadow-blue-500/40 hover:-translate-y-0.5 active:translate-y-0"
            >
              <PhoneCall className="w-4 h-4 text-blue-200 group-hover:rotate-12 transition-transform duration-300" />
              <span>Hablar con nosotros</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
              aria-expanded={mobileMenuOpen}
              aria-label="Abrir menú principal"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`md:hidden fixed inset-x-0 top-[65px] bg-[#070e1b]/98 backdrop-blur-2xl border-b border-slate-800 transition-all duration-300 ease-in-out px-4 py-6 shadow-2xl ${
          mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="flex flex-col gap-2">
          {NAVIGATION_LINKS.map((link) => {
            const linkId = link.href.replace('#', '');
            const isActive = activeSection === linkId;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                  isActive
                    ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30'
                    : 'text-slate-300 hover:bg-slate-800/50 hover:text-white'
                }`}
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 opacity-50" />
              </a>
            );
          })}

          <div className="pt-4 mt-2 border-t border-slate-800/80">
            <a
              href="#contacto"
              onClick={(e) => {
                e.preventDefault();
                setMobileMenuOpen(false);
                handleNavClick('#contacto');
              }}
              className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl text-center font-semibold text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-600/30 transition-all"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Hablar con nosotros</span>
            </a>

            <div className="mt-4 text-center">
              <p className="text-xs text-slate-400 font-medium">NIT: {COMPANY_DATA.nit}</p>
              <p className="text-xs text-slate-500">{COMPANY_DATA.fullLocation}</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

