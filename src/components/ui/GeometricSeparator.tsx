import React from 'react';

interface SeparatorProps {
  fillColor?: string;
  className?: string;
  type?: 'wave' | 'curve' | 'triangle';
}

export default function GeometricSeparator({ fillColor = '#ffffff', className = '', type = 'wave' }: SeparatorProps) {
  return (
    <div className={`w-full overflow-hidden leading-zero ${className}`} style={{ lineHeight: 0 }}>
      {type === 'wave' && (
        <svg
          className="relative block w-full h-[50px] md:h-[100px]"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C73.82,21.5,145.86,59.35,321.39,56.44Z"
            fill={fillColor}
          ></path>
        </svg>
      )}
      {type === 'curve' && (
        <svg
          className="relative block w-full h-[50px] md:h-[100px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,120H1200V0C1200,0,900,120,600,120C300,120,0,0,0,0V120Z"
            fill={fillColor}
          ></path>
        </svg>
      )}
      {type === 'triangle' && (
        <svg
          className="relative block w-full h-[50px] md:h-[100px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M1200 120L0 120 600 0 1200 120z"
            fill={fillColor}
          ></path>
        </svg>
      )}
    </div>
  );
}
