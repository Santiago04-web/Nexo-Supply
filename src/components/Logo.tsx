import React from 'react';

interface LogoProps {
  variant?: 'full' | 'compact' | 'white' | 'icon-only';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  showSlogan?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'full',
  size = 'md',
  className = '',
  showSlogan = false,
}) => {
  const sizeClasses = {
    sm: { icon: 'w-8 h-8', title: 'text-lg', subtitle: 'text-[9px] tracking-[0.2em]', slogan: 'text-[8px]' },
    md: { icon: 'w-10 h-10', title: 'text-xl', subtitle: 'text-[10px] tracking-[0.25em]', slogan: 'text-[9px]' },
    lg: { icon: 'w-14 h-14', title: 'text-2xl sm:text-3xl', subtitle: 'text-xs tracking-[0.3em]', slogan: 'text-[11px]' },
    xl: { icon: 'w-20 h-20', title: 'text-4xl sm:text-5xl', subtitle: 'text-sm tracking-[0.35em]', slogan: 'text-xs' },
  }[size];

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* 3D Geometric N Ribbon Vector */}
      <div className={`relative flex-shrink-0 ${sizeClasses.icon}`}>
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-md">
          <defs>
            <linearGradient id="nexoGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00D2FF" />
              <stop offset="100%" stopColor="#0066FF" />
            </linearGradient>
            <linearGradient id="nexoGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0052CC" />
              <stop offset="100%" stopColor="#0A2558" />
            </linearGradient>
            <linearGradient id="nexoGrad3" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0066FF" />
              <stop offset="100%" stopColor="#38BDF8" />
            </linearGradient>
          </defs>

          {/* Left Ribbon stem */}
          <path
            d="M20 78V30C20 28.5 21 27.5 22.5 28L36 34V85L22.5 90C21 90.5 20 89.5 20 88V78Z"
            fill="url(#nexoGrad2)"
          />
          {/* Main Diagonal Fold */}
          <path
            d="M22 28L78 72V42L36 12L22 28Z"
            fill="url(#nexoGrad1)"
          />
          {/* Right Ribbon Stem */}
          <path
            d="M64 15L78 20C79.5 20.5 80 21.5 80 23V74C80 75.5 79 76.5 77.5 76L64 70V15Z"
            fill="url(#nexoGrad3)"
          />
          {/* Subtle light reflection overlay */}
          <path
            d="M22 28L48 48L42 54L22 36V28Z"
            fill="#FFFFFF"
            fillOpacity="0.25"
          />
        </svg>
      </div>

      {variant !== 'icon-only' && (
        <div className="flex flex-col justify-center leading-none">
          <div className="flex items-center tracking-tight font-extrabold font-display">
            <span className={`${sizeClasses.title} font-black text-white`}>N</span>
            <span className={`${sizeClasses.title} font-black text-white relative`}>
              E
              <span className="absolute left-[3px] right-[1px] top-[48%] h-[2.5px] bg-[#0066FF] rounded-full"></span>
            </span>
            <span className={`${sizeClasses.title} font-black text-white`}>XO</span>
          </div>
          <span className={`font-semibold text-slate-300 uppercase ${sizeClasses.subtitle} mt-0.5`}>
            SUPPLY
          </span>
          {showSlogan && (
            <span className={`text-slate-400 uppercase tracking-wider ${sizeClasses.slogan} mt-1 font-medium`}>
              Soluciones que impulsan tu negocio
            </span>
          )}
        </div>
      )}
    </div>
  );
};

