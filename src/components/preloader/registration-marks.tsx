"use client";

const CrosshairMark = ({ className }: { className?: string }) => (
  <div className={`absolute pointer-events-none flex items-center justify-center z-20 ${className}`}>
    {/* Horizontal axis line */}
    <div className="absolute w-6 sm:w-8 h-[1px] bg-[#1c1917]/80" />
    {/* Vertical axis line */}
    <div className="absolute h-6 sm:h-8 w-[1px] bg-[#1c1917]/80" />
    {/* Circle target */}
    <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full border border-[#1c1917]/80 bg-[#efe4cb]" />
    {/* Red center dot */}
    <div className="w-1 h-1 rounded-full bg-[#b91c1c]" />
  </div>
);

export default function RegistrationMarks() {
  return (
    <>
      {/* 4 Corner Registration Marks centered directly on border intersections */}
      <CrosshairMark className="top-0 left-0 -translate-x-1/2 -translate-y-1/2" />
      <CrosshairMark className="top-0 right-0 translate-x-1/2 -translate-y-1/2" />
      <CrosshairMark className="bottom-0 left-0 -translate-x-1/2 translate-y-1/2" />
      <CrosshairMark className="bottom-0 right-0 translate-x-1/2 translate-y-1/2" />

      {/* 2 Side Edge Registration Marks centered on vertical border lines */}
      <CrosshairMark className="hidden sm:flex top-1/2 left-0 -translate-x-1/2 -translate-y-1/2" />
      <CrosshairMark className="hidden sm:flex top-1/2 right-0 translate-x-1/2 -translate-y-1/2" />
    </>
  );
}
