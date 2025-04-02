
import React from 'react';

type CyclePhase = 'menstrual' | 'follicular' | 'ovulation' | 'luteal';

type CycleCharacterProps = {
  phase: CyclePhase;
  size?: 'sm' | 'md' | 'lg';
  showEmotions?: boolean;
};

const CycleCharacter: React.FC<CycleCharacterProps> = ({ 
  phase = 'follicular', 
  size = 'md',
  showEmotions = true 
}) => {
  // Size classes map
  const sizeClasses = {
    sm: "w-16 h-16",
    md: "w-24 h-24",
    lg: "w-32 h-32"
  };

  // Colors based on phase
  const phaseColors = {
    menstrual: '#F8A5A5', // soft red
    follicular: '#A5D7F8', // soft blue
    ovulation: '#F8E2A5', // soft yellow
    luteal: '#C5A5F8', // soft purple
  };

  // Gradient color based on phase
  const gradientMap = {
    menstrual: 'from-rose-100 to-rose-300',
    follicular: 'from-sky-100 to-sky-300',
    ovulation: 'from-amber-100 to-amber-300',
    luteal: 'from-violet-100 to-violet-300',
  };

  // Expressions based on phase
  const expressions = {
    menstrual: (
      <svg viewBox="0 0 100 40" className="w-full">
        {/* Gentle smile */}
        <path 
          d="M30,25 Q50,15 70,25" 
          fill="none" 
          stroke="#333" 
          strokeWidth="3" 
          strokeLinecap="round"
        />
        {/* Closed sleepy eyes */}
        <path d="M30,15 Q40,10 50,15" fill="none" stroke="#333" strokeWidth="3" strokeLinecap="round" />
        <path d="M70,15 Q60,10 50,15" fill="none" stroke="#333" strokeWidth="3" strokeLinecap="round" />
      </svg>
    ),
    follicular: (
      <svg viewBox="0 0 100 40" className="w-full">
        {/* Optimistic smile */}
        <path 
          d="M30,25 Q50,35 70,25" 
          fill="none" 
          stroke="#333" 
          strokeWidth="3" 
          strokeLinecap="round"
        />
        {/* Happy eyes */}
        <circle cx="35" cy="15" r="5" fill="#333" />
        <circle cx="65" cy="15" r="5" fill="#333" />
      </svg>
    ),
    ovulation: (
      <svg viewBox="0 0 100 40" className="w-full">
        {/* Confident smile */}
        <path 
          d="M25,25 Q50,40 75,25" 
          fill="none" 
          stroke="#333" 
          strokeWidth="3" 
          strokeLinecap="round"
        />
        {/* Energetic eyes */}
        <ellipse cx="35" cy="15" rx="6" ry="5" fill="#333" />
        <ellipse cx="65" cy="15" rx="6" ry="5" fill="#333" />
      </svg>
    ),
    luteal: (
      <svg viewBox="0 0 100 40" className="w-full">
        {/* Balanced smile */}
        <path 
          d="M30,25 Q50,30 70,25" 
          fill="none" 
          stroke="#333" 
          strokeWidth="3" 
          strokeLinecap="round"
        />
        {/* Calm eyes */}
        <ellipse cx="35" cy="15" rx="5" ry="4" fill="#333" />
        <ellipse cx="65" cy="15" rx="5" ry="4" fill="#333" />
      </svg>
    ),
  };

  return (
    <div 
      className={`relative ${sizeClasses[size]} flex items-center justify-center animate-pulse rounded-full overflow-hidden bg-gradient-to-b ${gradientMap[phase]}`}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        {showEmotions && expressions[phase]}
      </div>
    </div>
  );
};

export default CycleCharacter;
