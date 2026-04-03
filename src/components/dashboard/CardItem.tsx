"use client";

import { useState } from "react";
import {
  Calendar, ClipboardList, Blocks, Code, FlaskConical,
  CheckCircle, Settings, BarChart3, Rocket, Info,
} from "lucide-react";
import { ProcessCard } from "@/data/cards";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ElementType> = {
  calendar: Calendar, "clipboard-list": ClipboardList, blocks: Blocks,
  code: Code, "flask-conical": FlaskConical, "check-circle": CheckCircle,
  settings: Settings, "bar-chart": BarChart3, rocket: Rocket,
};

const statusConfig = {
  active: { dot: "bg-status-active", glow: "shadow-[0_0_6px_var(--status-active-glow)]", label: "Active", border: "border-status-active/20" },
  pending: { dot: "bg-status-pending", glow: "shadow-[0_0_6px_var(--status-pending-glow)]", label: "Pending", border: "border-status-pending/20" },
  empty: { dot: "bg-status-empty", glow: "", label: "Empty", border: "border-border-mid" },
  failed: { dot: "bg-status-failed", glow: "shadow-[0_0_6px_var(--status-failed-glow)]", label: "Failed", border: "border-status-failed/20" },
};

interface CardItemProps { card: ProcessCard; index: number; }

export default function CardItem({ card, index }: CardItemProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const Icon = iconMap[card.icon] || Blocks;
  const status = statusConfig[card.status];

  return (
    <div
      className={cn(
        "relative group rounded-[16px] p-5 cursor-default",
        "bg-bg-raised border transition-all duration-300 ease-out",
        "animate-slide-up",
        isHovered
          ? "border-accent/30 scale-[1.02] -translate-y-0.5"
          : `${status.border} hover:border-border-vivid`
      )}
      style={{
        animationDelay: `${index * 60}ms`,
        boxShadow: isHovered ? "var(--shadow-card)" : "none",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => { setIsHovered(false); setShowTooltip(false); }}
    >
      {/* Status dot */}
      <div className="absolute top-4 right-4 flex items-center gap-2">
        <div className={cn("w-2 h-2 rounded-full", status.dot, status.glow)} />
        <button
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          className="p-0.5 rounded-md text-text-invisible hover:text-text-subtle transition-colors duration-150"
        >
          <Info className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Tooltip */}
      {showTooltip && (
        <div
          className="absolute top-12 right-3 z-30 w-56 p-3.5 rounded-[12px] bg-bg-active border border-border-strong animate-fade-in-scale"
          style={{ boxShadow: "var(--shadow-toast)" }}
        >
          <p className="text-[12px] text-text-secondary leading-relaxed">{card.description}</p>
        </div>
      )}

      {/* Icon */}
      <div
        className={cn(
          "w-11 h-11 rounded-[12px] flex items-center justify-center mb-4 transition-all duration-300",
          isHovered ? "bg-accent-muted text-accent" : "bg-bg-hover text-text-faint"
        )}
      >
        <Icon className="w-5 h-5" />
      </div>

      {/* Title */}
      <h3 className={cn(
        "text-[14px] font-semibold leading-tight mb-1.5 pr-10 transition-colors duration-200",
        isHovered ? "text-text-primary" : "text-text-secondary"
      )}>
        {card.title}
      </h3>

      {/* Sub-label */}
      {card.subLabel && (
        <span className="inline-block text-[11px] font-medium text-sub-label-text bg-sub-label-bg px-2 py-0.5 rounded-md mb-2">
          {card.subLabel}
        </span>
      )}

      {/* Items count */}
      <p className="text-[12px] text-text-faint">
        Items: <span className="text-text-muted font-medium">{card.items}</span>
      </p>

      {/* Hover description */}
      <div className={cn(
        "overflow-hidden transition-all duration-300 ease-out",
        isHovered ? "max-h-16 opacity-100 mt-3" : "max-h-0 opacity-0 mt-0"
      )}>
        <p className="text-[12px] text-text-subtle leading-relaxed line-clamp-2">{card.description}</p>
      </div>

      {/* Bottom status */}
      <div className={cn(
        "flex items-center gap-1.5 transition-all duration-300",
        isHovered ? "mt-3 opacity-100" : "mt-0 opacity-0 h-0"
      )}>
        <div className={cn("w-1.5 h-1.5 rounded-full", status.dot)} />
        <span className="text-[11px] text-text-faint font-medium">{status.label}</span>
      </div>
    </div>
  );
}
