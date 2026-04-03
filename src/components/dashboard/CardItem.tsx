"use client";

import { useState } from "react";
import {
  Calendar,
  ClipboardList,
  Blocks,
  Code,
  FlaskConical,
  CheckCircle,
  Settings,
  BarChart3,
  Rocket,
  Info,
} from "lucide-react";
import { ProcessCard } from "@/data/cards";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ElementType> = {
  calendar: Calendar,
  "clipboard-list": ClipboardList,
  blocks: Blocks,
  code: Code,
  "flask-conical": FlaskConical,
  "check-circle": CheckCircle,
  settings: Settings,
  "bar-chart": BarChart3,
  rocket: Rocket,
};

const statusConfig = {
  active: {
    dot: "bg-[#22C55E]",
    dotGlow: "shadow-[0_0_6px_rgba(34,197,94,0.5)]",
    label: "Active",
    border: "border-[#22C55E]/20",
  },
  pending: {
    dot: "bg-[#F59E0B]",
    dotGlow: "shadow-[0_0_6px_rgba(245,158,11,0.5)]",
    label: "Pending",
    border: "border-[#F59E0B]/20",
  },
  empty: {
    dot: "bg-[#4A4A5E]",
    dotGlow: "",
    label: "Empty",
    border: "border-[#252535]",
  },
  failed: {
    dot: "bg-[#EF4444]",
    dotGlow: "shadow-[0_0_6px_rgba(239,68,68,0.5)]",
    label: "Failed",
    border: "border-[#EF4444]/20",
  },
};

interface CardItemProps {
  card: ProcessCard;
  index: number;
}

export default function CardItem({ card, index }: CardItemProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const Icon = iconMap[card.icon] || Blocks;
  const status = statusConfig[card.status];

  return (
    <div
      className={cn(
        "relative group rounded-[16px] p-5 cursor-default",
        "bg-[#13131B] border transition-all duration-300 ease-out",
        "animate-slide-up",
        isHovered
          ? "border-[#3B82F6]/30 shadow-[0_4px_24px_rgba(59,130,246,0.08)] scale-[1.02] -translate-y-0.5"
          : `${status.border} hover:border-[#3A3A4A]`
      )}
      style={{ animationDelay: `${index * 60}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setShowTooltip(false);
      }}
    >
      {/* Status dot */}
      <div className="absolute top-4 right-4 flex items-center gap-2">
        <div
          className={cn("w-2 h-2 rounded-full", status.dot, status.dotGlow)}
        />
        {/* Info button */}
        <button
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          className="p-0.5 rounded-md text-[#3A3A4E] hover:text-[#6B6B85] transition-colors duration-150"
        >
          <Info className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Info Tooltip */}
      {showTooltip && (
        <div
          className={cn(
            "absolute top-12 right-3 z-30 w-56 p-3.5 rounded-[12px]",
            "bg-[#1E1E2A] border border-[#2A2A3C]",
            "shadow-[0_12px_40px_rgba(0,0,0,0.5)]",
            "animate-fade-in-scale"
          )}
        >
          <p className="text-[12px] text-[#B0B0C5] leading-relaxed">
            {card.description}
          </p>
        </div>
      )}

      {/* Icon */}
      <div
        className={cn(
          "w-11 h-11 rounded-[12px] flex items-center justify-center mb-4",
          "transition-all duration-300",
          isHovered
            ? "bg-[#3B82F6]/12 text-[#3B82F6]"
            : "bg-[#1A1A25] text-[#5A5A73]"
        )}
      >
        <Icon className="w-5 h-5" />
      </div>

      {/* Title */}
      <h3
        className={cn(
          "text-[14px] font-semibold leading-tight mb-1.5 pr-10",
          "transition-colors duration-200",
          isHovered ? "text-[#F0F0F5]" : "text-[#C0C0D0]"
        )}
      >
        {card.title}
      </h3>

      {/* Sub-label (e.g., Functional Safety) */}
      {card.subLabel && (
        <span className="inline-block text-[11px] font-medium text-[#F59E0B] bg-[#F59E0B]/10 px-2 py-0.5 rounded-md mb-2">
          {card.subLabel}
        </span>
      )}

      {/* Items count */}
      <p className="text-[12px] text-[#5A5A73]">
        Items: <span className="text-[#8A8AA3] font-medium">{card.items}</span>
      </p>

      {/* Hover description (fades in) */}
      <div
        className={cn(
          "overflow-hidden transition-all duration-300 ease-out",
          isHovered ? "max-h-16 opacity-100 mt-3" : "max-h-0 opacity-0 mt-0"
        )}
      >
        <p className="text-[12px] text-[#6B6B85] leading-relaxed line-clamp-2">
          {card.description}
        </p>
      </div>

      {/* Bottom status label */}
      <div
        className={cn(
          "flex items-center gap-1.5 transition-all duration-300",
          isHovered ? "mt-3 opacity-100" : "mt-0 opacity-0 h-0"
        )}
      >
        <div className={cn("w-1.5 h-1.5 rounded-full", status.dot)} />
        <span className="text-[11px] text-[#5A5A73] font-medium">
          {status.label}
        </span>
      </div>
    </div>
  );
}
