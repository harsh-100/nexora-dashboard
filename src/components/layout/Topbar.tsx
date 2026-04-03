"use client";

import { useState, useRef, useEffect } from "react";
import {
  ChevronDown,
  Plus,
  MoreHorizontal,
  Settings2,
  History,
  GitBranch,
  Upload,
  Copy,
  Download,
  Trash2,
} from "lucide-react";
import { menuActions } from "@/data/menu-actions";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ElementType> = {
  history: History,
  "git-branch": GitBranch,
  upload: Upload,
  copy: Copy,
  download: Download,
  "trash-2": Trash2,
};

interface TopbarProps {
  onCreateClick: () => void;
}

export default function Topbar({ onCreateClick }: TopbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="flex items-center justify-between h-16 px-6 border-b border-border-default bg-bg-secondary/50 backdrop-blur-sm shrink-0">
      {/* Left — Project Info */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2">
          <h1 className="text-lg font-semibold text-text-primary">TestAPr1</h1>
          <ChevronDown className="w-4 h-4 text-text-tertiary" />
        </div>
        <span className="text-xs text-text-tertiary hidden md:inline-block">
          Product Type (System): Battery Management System
        </span>
      </div>

      {/* Center — Settings */}
      <button className="p-2 rounded-lg text-text-tertiary hover:text-text-secondary hover:bg-bg-hover transition-all duration-200">
        <Settings2 className="w-5 h-5" />
      </button>

      {/* Right — Actions */}
      <div className="flex items-center gap-2">
        {/* + Create Button (Primary CTA) */}
        <button
          onClick={onCreateClick}
          className={cn(
            "flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium",
            "bg-accent text-white",
            "hover:bg-accent-hover active:scale-[0.97]",
            "transition-all duration-200",
            "shadow-sm hover:shadow-md hover:shadow-accent/20"
          )}
        >
          <Plus className="w-4 h-4" />
          <span>Create</span>
        </button>

        {/* Menu Button (Secondary) */}
        <div className="relative" ref={menuRef}>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={cn(
              "flex items-center gap-2 px-3 py-2 rounded-lg text-sm",
              "border border-border-default text-text-secondary",
              "hover:text-text-primary hover:border-border-strong hover:bg-bg-hover",
              "transition-all duration-200",
              menuOpen && "bg-bg-hover border-border-strong text-text-primary"
            )}
          >
            <MoreHorizontal className="w-4 h-4" />
            <span className="hidden sm:inline">Menu</span>
          </button>

          {/* Dropdown Menu */}
          {menuOpen && (
            <div
              className={cn(
                "absolute right-0 top-full mt-2 w-52 z-50",
                "bg-bg-elevated border border-border-default rounded-xl",
                "shadow-lg py-1.5",
                "animate-fade-in-scale"
              )}
            >
              {menuActions.map((action, index) => {
                const Icon = iconMap[action.icon] || MoreHorizontal;
                return (
                  <div key={action.id}>
                    <button
                      onClick={() => setMenuOpen(false)}
                      className={cn(
                        "w-full flex items-center gap-3 px-3.5 py-2 text-sm",
                        "transition-colors duration-150",
                        action.id === "delete"
                          ? "text-status-failed hover:bg-status-failed/10"
                          : "text-text-secondary hover:text-text-primary hover:bg-bg-hover"
                      )}
                    >
                      <Icon className="w-4 h-4 shrink-0" />
                      <span>{action.label}</span>
                    </button>
                    {action.dividerAfter &&
                      index < menuActions.length - 1 && (
                        <div className="my-1.5 mx-3.5 h-px bg-border-subtle" />
                      )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
