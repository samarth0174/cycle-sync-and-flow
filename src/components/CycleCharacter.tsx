
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

  // SVG character instead of just expressions
  const renderCharacter = () => {
    // Base character with different expressions based on phase
    return (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        {/* Background shape based on phase */}
        <ellipse 
          cx="100" 
          cy="110" 
          rx="80" 
          ry="70" 
          fill={phaseColors[phase]} 
          opacity="0.5"
        />
        
        {/* Character body - white round shape */}
        <circle cx="100" cy="100" r="60" fill="white" stroke="#333" strokeWidth="2" />
        
        {/* Little ear */}
        <circle cx="150" cy="70" r="15" fill="#333" />
        
        {/* Rosy cheeks */}
        <circle cx="70" cy="110" r="12" fill="#FFAAAA" opacity="0.6" />
        <circle cx="130" cy="110" r="12" fill="#FFAAAA" opacity="0.6" />
        
        {/* Eyes and expressions that change based on phase */}
        {phase === 'menstrual' && (
          <>
            {/* Sleepy eyes */}
            <path d="M80,90 Q90,85 100,90" fill="none" stroke="#333" strokeWidth="3" />
            <path d="M120,90 Q110,85 100,90" fill="none" stroke="#333" strokeWidth="3" />
            {/* Small relaxed smile */}
            <path d="M85,110 Q100,120 115,110" fill="none" stroke="#333" strokeWidth="3" strokeLinecap="round" />
            {/* Little item - heating pad */}
            <ellipse cx="100" cy="150" rx="30" ry="15" fill="#FFD1DC" stroke="#333" strokeWidth="1.5" />
          </>
        )}
        
        {phase === 'follicular' && (
          <>
            {/* Bright eyes */}
            <circle cx="80" cy="90" r="6" fill="#333" />
            <circle cx="120" cy="90" r="6" fill="#333" />
            {/* Cheerful smile */}
            <path d="M85,110 Q100,125 115,110" fill="none" stroke="#333" strokeWidth="3" strokeLinecap="round" />
            {/* Little item - book */}
            <rect x="70" y="140" width="25" height="20" fill="#A5D7F8" stroke="#333" strokeWidth="1.5" />
            <line x1="80" y1="145" x2="95" y2="145" stroke="#333" strokeWidth="1" />
            <line x1="80" y1="150" x2="90" y2="150" stroke="#333" strokeWidth="1" />
            <line x1="80" y1="155" x2="93" y2="155" stroke="#333" strokeWidth="1" />
          </>
        )}
        
        {phase === 'ovulation' && (
          <>
            {/* Wide awake eyes */}
            <circle cx="80" cy="90" r="7" fill="#333" />
            <circle cx="120" cy="90" r="7" fill="#333" />
            <circle cx="83" cy="87" r="2" fill="white" />
            <circle cx="123" cy="87" r="2" fill="white" />
            {/* Big smile */}
            <path d="M80,110 Q100,130 120,110" fill="none" stroke="#333" strokeWidth="3" strokeLinecap="round" />
            {/* Little item - star */}
            <path d="M100,150 L105,160 L115,160 L107,167 L110,177 L100,170 L90,177 L93,167 L85,160 L95,160 Z" fill="#F8E2A5" stroke="#333" strokeWidth="1.5" />
          </>
        )}
        
        {phase === 'luteal' && (
          <>
            {/* Contemplative eyes */}
            <circle cx="80" cy="90" r="6" fill="#333" />
            <circle cx="120" cy="90" r="6" fill="#333" />
            {/* Subtle smile */}
            <path d="M85,115 Q100,120 115,115" fill="none" stroke="#333" strokeWidth="3" strokeLinecap="round" />
            {/* Little item - small plush toy */}
            <ellipse cx="130" cy="150" rx="15" ry="12" fill="#C5A5F8" stroke="#333" strokeWidth="1.5" />
            <circle cx="125" cy="145" r="2" fill="#333" />
            <circle cx="135" cy="145" r="2" fill="#333" />
            <path d="M125,152 Q130,155 135,152" fill="none" stroke="#333" strokeWidth="1.5" strokeLinecap="round" />
          </>
        )}
      </svg>
    );
  };

  return (
    <div 
      className={`relative ${sizeClasses[size]} flex items-center justify-center animate-pulse rounded-full overflow-hidden`}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        {renderCharacter()}
      </div>
    </div>
  );
};

export default CycleCharacter;
