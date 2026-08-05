"use client";

export default function HeritageSkyline() {
  return (
    <div className="flex flex-col items-center">
      <svg
        viewBox="0 0 200 45"
        className="w-36 md:w-44 text-[#1c1917]/70"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Heritage Arch & Towers Line Art (Gateway of India style) */}
        {/* Base line */}
        <line x1="10" y1="42" x2="190" y2="42" strokeWidth="1.5" />
        
        {/* Main Central Arch */}
        <path d="M 85 42 L 85 24 Q 100 12 115 24 L 115 42" strokeWidth="1.5" fill="none" />
        <path d="M 90 42 L 90 26 Q 100 16 110 26 L 110 42" />

        {/* Central Dome/Tower */}
        <path d="M 82 22 L 118 22 L 100 8 Z" fill="currentColor" fillOpacity="0.1" />
        <line x1="100" y1="8" x2="100" y2="3" />
        <circle cx="100" cy="3" r="1" fill="currentColor" />

        {/* Left Wing */}
        <rect x="35" y="24" width="45" height="18" />
        <line x1="45" y1="24" x2="45" y2="42" />
        <line x1="55" y1="24" x2="55" y2="42" />
        <line x1="65" y1="24" x2="65" y2="42" />
        <path d="M 32 24 L 82 24 L 57 14 Z" />

        {/* Left Side Minaret Tower */}
        <rect x="20" y="16" width="12" height="26" />
        <path d="M 18 16 L 34 16 L 26 6 Z" />
        <line x1="26" y1="6" x2="26" y2="2" />

        {/* Right Wing */}
        <rect x="120" y="24" width="45" height="18" />
        <line x1="130" y1="24" x2="130" y2="42" />
        <line x1="140" y1="24" x2="140" y2="42" />
        <line x1="150" y1="24" x2="150" y2="42" />
        <path d="M 118 24 L 168 24 L 143 14 Z" />

        {/* Right Side Minaret Tower */}
        <rect x="168" y="16" width="12" height="26" />
        <path d="M 166 16 L 182 16 L 174 6 Z" />
        <line x1="174" y1="6" x2="174" y2="2" />
      </svg>
    </div>
  );
}
