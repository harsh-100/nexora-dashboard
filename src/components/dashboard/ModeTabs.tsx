"use client";

import { cn } from "@/lib/utils";
import { Compass, FolderKanban, Play } from "lucide-react";

export type Mode = "explore" | "organize" | "demo";

interface ModeTabsProps {
  activeMode: Mode;
  onModeClick: (mode: Mode) => void;
}

const modes: { id: Mode; label: string; icon: React.ElementType }[] = [
  { id: "explore", label: "Explore", icon: Compass },
  { id: "organize", label: "Organize", icon: FolderKanban },
  { id: "demo", label: "Demo", icon: Play },
];

export default function ModeTabs({ activeMode, onModeClick }: ModeTabsProps) {
  return (
    <div className="flex items-center gap-2.5 px-6 py-3.5">
      {modes.map((mode) => {
        const Icon = mode.icon;
        const isActive = activeMode === mode.id;
        return (
          <button
            key={mode.id}
            onClick={() => onModeClick(mode.id)}
            className={cn(
              "flex items-center gap-2 px-4 py-2 rounded-full text-[13px] font-medium",
              "transition-all duration-200 border",
              isActive
                ? "bg-accent-muted text-accent border-accent-border"
                : "bg-bg-raised text-text-subtle border-border-default hover:text-text-secondary hover:bg-bg-hover hover:border-border-strong"
            )}
            style={isActive ? { boxShadow: "0 0 12px var(--accent-glow)" } : undefined}
          >
            <Icon className="w-3.5 h-3.5" />
            <span>{mode.label}</span>
          </button>
        );
      })}
    </div>
  );
}
