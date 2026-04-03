"use client";

import { Sparkles } from "lucide-react";

interface FloatingAIButtonProps { onClick: () => void; }

export default function FloatingAIButton({ onClick }: FloatingAIButtonProps) {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-6 right-6 z-30 flex items-center gap-2.5 px-5 py-3 rounded-full bg-gradient-to-r from-accent to-accent-secondary text-white text-[13px] font-semibold hover:scale-105 active:scale-95 transition-all duration-250 animate-pulse-glow"
      style={{ boxShadow: "var(--shadow-button)" }}
    >
      <span>AI Agent</span>
      <Sparkles className="w-4 h-4" />
    </button>
  );
}
