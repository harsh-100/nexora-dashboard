"use client";

import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface CreatePopupProps { isOpen: boolean; onClose: () => void; }

export default function CreatePopup({ isOpen, onClose }: CreatePopupProps) {
  if (!isOpen) return null;

  const inputClasses = cn(
    "w-full px-4 py-3 rounded-[12px] text-[14px]",
    "bg-bg-raised border border-border-mid",
    "text-text-primary placeholder:text-text-ghost",
    "focus:outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/15",
    "transition-all duration-200"
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 backdrop-blur-md" style={{ background: "var(--backdrop-color)" }} onClick={onClose} />
      <div className="relative z-10 w-full max-w-[480px] bg-bg-overlay border border-border-strong rounded-[20px] animate-fade-in-scale" style={{ boxShadow: "var(--shadow-popup)" }}>
        <div className="flex items-center justify-between px-7 pt-7 pb-1">
          <div>
            <h2 className="text-[17px] font-semibold text-text-primary tracking-[-0.01em]">Create New Item</h2>
            <p className="text-[13px] text-text-subtle mt-1.5">Start a new project item with pre-configured templates.</p>
          </div>
          <button onClick={onClose} className="p-2 rounded-xl text-text-subtle hover:text-text-primary hover:bg-bg-active transition-all duration-200 self-start">
            <X className="w-[18px] h-[18px]" />
          </button>
        </div>
        <div className="px-7 py-6 space-y-5">
          <div>
            <label className="block text-[12px] font-medium text-text-muted mb-2 tracking-wide uppercase">Item Name</label>
            <input type="text" placeholder="Enter item name..." className={inputClasses} />
          </div>
          <div>
            <label className="block text-[12px] font-medium text-text-muted mb-2 tracking-wide uppercase">Category</label>
            <select className={cn(inputClasses, "appearance-none cursor-pointer")}>
              <option>Requirements Engineering</option>
              <option>Architecture and Design</option>
              <option>Implementation</option>
              <option>Testing</option>
              <option>Deployment & Release</option>
            </select>
          </div>
        </div>
        <div className="flex items-center gap-3 px-7 pb-7 pt-2 border-t border-border-default mx-5">
          <button onClick={onClose} className="flex-1 px-5 py-3 rounded-[12px] text-[14px] font-medium bg-accent text-white hover:bg-accent-hover active:scale-[0.98] transition-all duration-200" style={{ boxShadow: "var(--shadow-button)" }}>
            Create Item
          </button>
          <button onClick={onClose} className="px-5 py-3 rounded-[12px] text-[14px] font-medium bg-bg-raised border border-border-mid text-text-tertiary hover:text-text-primary hover:bg-bg-active hover:border-border-strong transition-all duration-200">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
