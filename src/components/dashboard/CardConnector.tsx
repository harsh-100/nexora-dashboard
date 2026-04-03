"use client";

export default function CardConnector() {
  return (
    <div className="absolute -right-5 top-1/2 -translate-y-1/2 z-10 flex items-center">
      <div className="w-6 h-[2px] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-border-strong via-accent/40 to-border-strong" />
      </div>
      <svg width="8" height="10" viewBox="0 0 8 10" fill="none" className="-ml-0.5">
        <path d="M1 1L6 5L1 9" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.45" />
      </svg>
    </div>
  );
}
