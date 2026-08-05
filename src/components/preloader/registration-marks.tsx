"use client";

export default function RegistrationMarks() {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 p-2 sm:p-4 md:p-8 flex flex-col justify-between overflow-hidden opacity-60 sm:opacity-75">
      {/* Top Registration Crosshairs */}
      <div className="flex justify-between items-center">
        {/* Top Left */}
        <div className="relative w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center">
          <div className="absolute w-4 sm:w-6 h-[1px] bg-[#1c1917]/40" />
          <div className="absolute h-4 sm:h-6 w-[1px] bg-[#1c1917]/40" />
          <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full border border-[#1c1917]/40" />
        </div>

        {/* Top Center Reticle (Desktop Only) */}
        <div className="hidden md:flex items-center space-x-1">
          <div className="w-2 h-[1px] bg-[#1c1917]/30" />
          <div className="w-1.5 h-1.5 rounded-full border border-[#b91c1c]" />
          <div className="w-2 h-[1px] bg-[#1c1917]/30" />
        </div>

        {/* Top Right */}
        <div className="relative w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center">
          <div className="absolute w-4 sm:w-6 h-[1px] bg-[#1c1917]/40" />
          <div className="absolute h-4 sm:h-6 w-[1px] bg-[#1c1917]/40" />
          <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full border border-[#1c1917]/40" />
        </div>
      </div>

      {/* Middle Edge Reticles (Tablet/Desktop Only) */}
      <div className="hidden sm:flex justify-between items-center my-auto">
        <div className="flex flex-col items-center space-y-1">
          <div className="w-3 h-[1px] bg-[#1c1917]/40" />
          <div className="w-2 h-2 rounded-full border border-[#b91c1c] bg-[#b91c1c]/20" />
          <div className="w-3 h-[1px] bg-[#1c1917]/40" />
        </div>

        <div className="flex flex-col items-center space-y-1">
          <div className="w-3 h-[1px] bg-[#1c1917]/40" />
          <div className="w-2 h-2 rounded-full border border-[#b91c1c] bg-[#b91c1c]/20" />
          <div className="w-3 h-[1px] bg-[#1c1917]/40" />
        </div>
      </div>

      {/* Bottom Registration Crosshairs */}
      <div className="flex justify-between items-center">
        {/* Bottom Left */}
        <div className="relative w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center">
          <div className="absolute w-4 sm:w-6 h-[1px] bg-[#1c1917]/40" />
          <div className="absolute h-4 sm:h-6 w-[1px] bg-[#1c1917]/40" />
          <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full border border-[#1c1917]/40" />
        </div>

        {/* Bottom Center Reticle (Desktop Only) */}
        <div className="hidden md:flex items-center space-x-1">
          <div className="w-2 h-[1px] bg-[#1c1917]/30" />
          <div className="w-1.5 h-1.5 rounded-full border border-[#b91c1c]" />
          <div className="w-2 h-[1px] bg-[#1c1917]/30" />
        </div>

        {/* Bottom Right */}
        <div className="relative w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center">
          <div className="absolute w-4 sm:w-6 h-[1px] bg-[#1c1917]/40" />
          <div className="absolute h-4 sm:h-6 w-[1px] bg-[#1c1917]/40" />
          <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full border border-[#1c1917]/40" />
        </div>
      </div>
    </div>
  );
}
