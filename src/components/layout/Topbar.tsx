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
  Sun,
  Moon,
} from "lucide-react";
import { menuActions } from "@/data/menu-actions";
import { cn } from "@/lib/utils";
import { useTheme } from "@/lib/theme-context";

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
  const { theme, toggleTheme } = useTheme();

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
    <header className="relative z-20 flex items-center justify-between h-[60px] px-6 border-b border-border-default bg-bg-surface/80 backdrop-blur-sm shrink-0">
      {/* Left — Project Info */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 cursor-pointer group">
          <h1 className="text-[15px] font-semibold text-text-primary group-hover:text-text-primary transition-colors">
            TestAPr1
          </h1>
          <ChevronDown className="w-3.5 h-3.5 text-text-faint" />
        </div>
        <div className="hidden md:block w-px h-5 bg-border-mid mx-1" />
        <span className="text-[12px] text-text-faint hidden md:inline-block">
          Product Type (System): Battery Management System
        </span>
      </div>

      {/* Center — Settings + Theme Toggle */}
      <div className="flex items-center gap-1">
        <button className="p-2.5 rounded-xl text-text-faint hover:text-text-muted hover:bg-bg-hover transition-all duration-200">
          <Settings2 className="w-[18px] h-[18px]" />
        </button>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="p-2.5 rounded-xl text-text-faint hover:text-text-muted hover:bg-bg-hover transition-all duration-200"
          title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        >
          {theme === "dark" ? (
            <Sun className="w-[18px] h-[18px]" />
          ) : (
            <Moon className="w-[18px] h-[18px]" />
          )}
        </button>
      </div>

      {/* Right — Actions */}
      <div className="flex items-center gap-2.5">
        {/* + Create Button */}
        <button
          onClick={onCreateClick}
          className="flex items-center gap-2 px-5 py-2.5 rounded-[12px] text-[13px] font-semibold bg-accent text-white hover:bg-accent-hover active:scale-[0.97] transition-all duration-200"
          style={{ boxShadow: "var(--shadow-button)" }}
        >
          <Plus className="w-4 h-4" />
          <span>Create</span>
        </button>

        {/* Menu Button */}
        <div className="relative" ref={menuRef}>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={cn(
              "flex items-center gap-2 px-4 py-2.5 rounded-[12px] text-[13px] font-medium",
              "border border-border-mid text-text-muted",
              "hover:text-text-primary hover:border-border-vivid hover:bg-bg-hover",
              "transition-all duration-200",
              menuOpen && "bg-bg-hover border-border-vivid text-text-primary"
            )}
          >
            <MoreHorizontal className="w-4 h-4" />
            <span className="hidden sm:inline">Menu</span>
          </button>

          {menuOpen && (
            <div
              className="absolute right-0 top-full mt-2.5 w-56 z-50 bg-bg-overlay border border-border-strong rounded-[16px] py-2 animate-fade-in-scale"
              style={{ boxShadow: "var(--shadow-dropdown)" }}
            >
              {menuActions.map((action, index) => {
                const Icon = iconMap[action.icon] || MoreHorizontal;
                return (
                  <div key={action.id}>
                    <button
                      onClick={() => setMenuOpen(false)}
                      className={cn(
                        "w-full flex items-center gap-3 px-4 py-2.5 text-[13px]",
                        "transition-colors duration-150",
                        action.id === "delete"
                          ? "text-status-failed hover:bg-status-failed-bg"
                          : "text-text-tertiary hover:text-text-primary hover:bg-bg-raised"
                      )}
                    >
                      <Icon className="w-4 h-4 shrink-0 opacity-70" />
                      <span>{action.label}</span>
                    </button>
                    {action.dividerAfter && index < menuActions.length - 1 && (
                      <div className="my-1.5 mx-4 h-px bg-border-default" />
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
