"use client";

import { useState } from "react";
import {
  Calendar, ClipboardList, Blocks, Code, FlaskConical,
  CheckCircle, Settings, BarChart3, Rocket, Info,
} from "lucide-react";
import { processCards, ProcessCard } from "@/data/cards";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ElementType> = {
  calendar: Calendar, "clipboard-list": ClipboardList, blocks: Blocks,
  code: Code, "flask-conical": FlaskConical, "check-circle": CheckCircle,
  settings: Settings, "bar-chart": BarChart3, rocket: Rocket,
};

const statusConfig: Record<string, { dot: string; label: string; text: string }> = {
  active: { dot: "bg-status-active", label: "Active", text: "text-status-active" },
  pending: { dot: "bg-status-pending", label: "Pending", text: "text-status-pending" },
  empty: { dot: "bg-status-empty", label: "Empty", text: "text-status-empty" },
  failed: { dot: "bg-status-failed", label: "Failed", text: "text-status-failed" },
};

export default function CardListView() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <div className="rounded-[16px] border border-border-default overflow-hidden bg-bg-surface">
      {/* Table Header */}
      <div className="grid grid-cols-[1fr_100px_80px_80px_40px] gap-4 px-6 py-3.5 bg-bg-surface-2 border-b border-border-subtle">
        <span className="text-[11px] font-semibold text-text-ghost uppercase tracking-wider">Process</span>
        <span className="text-[11px] font-semibold text-text-ghost uppercase tracking-wider">Group</span>
        <span className="text-[11px] font-semibold text-text-ghost uppercase tracking-wider">Status</span>
        <span className="text-[11px] font-semibold text-text-ghost uppercase tracking-wider">Items</span>
        <span className="text-[11px] font-semibold text-text-ghost uppercase tracking-wider sr-only">Info</span>
      </div>

      {/* Rows */}
      <div>
        {processCards.map((card, index) => {
          const Icon = iconMap[card.icon] || Blocks;
          const status = statusConfig[card.status];
          const isExpanded = expandedId === card.id;

          return (
            <div
              key={`${card.id}-${index}`}
              className={cn(
                "border-b border-border-subtle last:border-b-0",
                "animate-slide-up"
              )}
              style={{ animationDelay: `${index * 30}ms` }}
            >
              {/* Main Row */}
              <div
                className={cn(
                  "grid grid-cols-[1fr_100px_80px_80px_40px] gap-4 px-6 py-4 items-center",
                  "hover:bg-bg-raised transition-colors duration-150 group",
                  isExpanded && "bg-bg-raised"
                )}
              >
                {/* Process Name + Icon */}
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-8 h-8 rounded-[8px] bg-bg-hover flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4 text-text-faint" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[14px] font-medium text-text-secondary group-hover:text-text-primary transition-colors duration-150 truncate block">
                      {card.title}
                    </span>
                    {card.subLabel && (
                      <span className="text-[10px] font-medium text-sub-label-text bg-sub-label-bg px-1.5 py-0.5 rounded mt-0.5 inline-block">
                        {card.subLabel}
                      </span>
                    )}
                  </div>
                </div>

                {/* Group */}
                <span className="text-[12px] text-text-faint">{card.group}</span>

                {/* Status */}
                <div className="flex items-center gap-1.5">
                  <div className={cn("w-1.5 h-1.5 rounded-full", status.dot)} />
                  <span className={cn("text-[11px] font-medium", status.text)}>
                    {status.label}
                  </span>
                </div>

                {/* Items Count */}
                <span className="text-[13px] text-text-muted font-medium">{card.items}</span>

                {/* Info Toggle */}
                <button
                  onClick={() => setExpandedId(isExpanded ? null : card.id)}
                  className={cn(
                    "p-1.5 rounded-lg transition-all duration-200",
                    isExpanded
                      ? "text-accent bg-accent-muted"
                      : "text-text-invisible hover:text-text-subtle hover:bg-bg-hover"
                  )}
                  title={isExpanded ? "Hide details" : "Show details"}
                >
                  <Info className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Expanded Description */}
              <div
                className={cn(
                  "overflow-hidden transition-all duration-300 ease-out",
                  isExpanded ? "max-h-24 opacity-100" : "max-h-0 opacity-0"
                )}
              >
                <div className="px-6 pb-4 pl-[4.25rem]">
                  <p className="text-[12px] text-text-faint leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <div className="px-6 py-3 bg-bg-surface-2 border-t border-border-subtle">
        <p className="text-[11px] text-text-invisible">
          Showing <span className="text-text-faint font-medium">{processCards.length}</span> processes
        </p>
      </div>
    </div>
  );
}
