"use client";

import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { modePopupItems } from "@/data/ai-agents";

interface ModePopupProps { isOpen: boolean; modeName: string; onClose: () => void; }

export default function ModePopup({ isOpen, modeName, onClose }: ModePopupProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 backdrop-blur-md" style={{ background: "var(--backdrop-color)" }} onClick={onClose} />
      <div className="relative z-10 w-full max-w-[520px] bg-bg-overlay border border-border-strong rounded-[20px] animate-fade-in-scale" style={{ boxShadow: "var(--shadow-popup)" }}>
        <div className="flex items-center justify-between px-7 pt-7 pb-5">
          <div>
            <h2 className="text-[17px] font-semibold text-text-primary tracking-[-0.01em]">{modeName} Mode</h2>
            <p className="text-[13px] text-text-subtle mt-1.5">Select an item to view details</p>
          </div>
          <button onClick={onClose} className="p-2 rounded-xl text-text-subtle hover:text-text-primary hover:bg-bg-active transition-all duration-200">
            <X className="w-[18px] h-[18px]" />
          </button>
        </div>
        <div className="px-5 pb-2 space-y-2.5">
          {modePopupItems.map((item, index) => (
            <button key={item.id} className={cn(
              "w-full flex items-center gap-4 px-5 py-4 rounded-[14px] text-left",
              "bg-bg-raised border border-border-mid",
              "hover:bg-bg-hover hover:border-accent/25",
              "transition-all duration-250 group cursor-pointer animate-slide-up"
            )} style={{ animationDelay: `${index * 70}ms` }}>
              <div className="w-9 h-9 rounded-[10px] bg-accent-muted flex items-center justify-center shrink-0">
                <span className="text-[13px] font-semibold text-accent">{String(index + 1).padStart(2, "0")}</span>
              </div>
              <span className="text-[14px] font-medium text-text-tertiary group-hover:text-text-primary transition-colors duration-200">{item.name}</span>
              <svg className="w-4 h-4 ml-auto text-border-vivid group-hover:text-text-subtle group-hover:translate-x-0.5 transition-all duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          ))}
        </div>
        <div className="px-7 py-4 mt-2 border-t border-border-default">
          <p className="text-[11px] text-text-ghost text-center tracking-wide">
            Showing {modePopupItems.length} items in <span className="text-text-faint font-medium">{modeName}</span> mode
          </p>
        </div>
      </div>
    </div>
  );
}
