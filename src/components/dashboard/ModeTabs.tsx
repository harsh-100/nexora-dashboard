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
                ? "bg-[#3B82F6]/10 text-[#3B82F6] border-[#3B82F6]/25 shadow-[0_0_12px_rgba(59,130,246,0.08)]"
                : "bg-[#14141C] text-[#6B6B85] border-[#1F1F2E] hover:text-[#B0B0C5] hover:bg-[#1A1A25] hover:border-[#2A2A3C]"
            )}
          >
            <Icon className="w-3.5 h-3.5" />
            <span>{mode.label}</span>
          </button>
        );
      })}
    </div>
  );
}
