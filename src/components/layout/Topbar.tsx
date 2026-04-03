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
    <header className="flex items-center justify-between h-[60px] px-6 border-b border-[#1F1F2E] bg-[#12121A]/80 backdrop-blur-sm shrink-0">
      {/* Left — Project Info */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 cursor-pointer group">
          <h1 className="text-[15px] font-semibold text-[#F0F0F5] group-hover:text-white transition-colors">
            TestAPr1
          </h1>
          <ChevronDown className="w-3.5 h-3.5 text-[#5A5A73]" />
        </div>
        <div className="hidden md:block w-px h-5 bg-[#252535] mx-1" />
        <span className="text-[12px] text-[#5A5A73] hidden md:inline-block">
          Product Type (System): Battery Management System
        </span>
      </div>

      {/* Center — Settings */}
      <button className="p-2.5 rounded-xl text-[#5A5A73] hover:text-[#8A8AA3] hover:bg-[#1A1A25] transition-all duration-200">
        <Settings2 className="w-[18px] h-[18px]" />
      </button>

      {/* Right — Actions */}
      <div className="flex items-center gap-2.5">
        {/* + Create Button (Primary CTA) */}
        <button
          onClick={onCreateClick}
          className={cn(
            "flex items-center gap-2 px-5 py-2.5 rounded-[12px] text-[13px] font-semibold",
            "bg-[#3B82F6] text-white",
            "hover:bg-[#2563EB] active:scale-[0.97]",
            "transition-all duration-200",
            "shadow-[0_2px_12px_rgba(59,130,246,0.25)]"
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
              "flex items-center gap-2 px-4 py-2.5 rounded-[12px] text-[13px] font-medium",
              "border border-[#252535] text-[#8A8AA3]",
              "hover:text-[#F0F0F5] hover:border-[#3A3A4A] hover:bg-[#1A1A25]",
              "transition-all duration-200",
              menuOpen && "bg-[#1A1A25] border-[#3A3A4A] text-[#F0F0F5]"
            )}
          >
            <MoreHorizontal className="w-4 h-4" />
            <span className="hidden sm:inline">Menu</span>
          </button>

          {/* Dropdown Menu */}
          {menuOpen && (
            <div
              className={cn(
                "absolute right-0 top-full mt-2.5 w-56 z-50",
                "bg-[#16161F] border border-[#2A2A3C] rounded-[16px]",
                "shadow-[0_16px_48px_rgba(0,0,0,0.5)] py-2",
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
                        "w-full flex items-center gap-3 px-4 py-2.5 text-[13px]",
                        "transition-colors duration-150",
                        action.id === "delete"
                          ? "text-[#EF4444] hover:bg-[#EF4444]/8"
                          : "text-[#9999B0] hover:text-[#F0F0F5] hover:bg-[#1C1C28]"
                      )}
                    >
                      <Icon className="w-4 h-4 shrink-0 opacity-70" />
                      <span>{action.label}</span>
                    </button>
                    {action.dividerAfter &&
                      index < menuActions.length - 1 && (
                        <div className="my-1.5 mx-4 h-px bg-[#222230]" />
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
