"use client";

import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface FloatingAIButtonProps {
  onClick: () => void;
}

export default function FloatingAIButton({ onClick }: FloatingAIButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "fixed bottom-6 right-6 z-30",
        "flex items-center gap-2.5 px-5 py-3 rounded-full",
        "bg-gradient-to-r from-[#3B82F6] to-[#6366F1]",
        "text-white text-[13px] font-semibold",
        "shadow-[0_4px_20px_rgba(59,130,246,0.35)]",
        "hover:shadow-[0_6px_28px_rgba(59,130,246,0.5)]",
        "hover:scale-105 active:scale-95",
        "transition-all duration-250",
        "animate-pulse-glow"
      )}
    >
      <span>AI Agent</span>
      <Sparkles className="w-4 h-4" />
    </button>
  );
}
