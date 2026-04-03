"use client";

import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface CreatePopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CreatePopup({ isOpen, onClose }: CreatePopupProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Popup */}
      <div
        className={cn(
          "relative z-10 w-full max-w-[480px]",
          "bg-[#16161F] border border-[#2A2A3C] rounded-[20px]",
          "shadow-[0_24px_80px_rgba(0,0,0,0.6)]",
          "animate-fade-in-scale"
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-7 pt-7 pb-1">
          <div>
            <h2 className="text-[17px] font-semibold text-[#F0F0F5] tracking-[-0.01em]">
              Create New Item
            </h2>
            <p className="text-[13px] text-[#6B6B85] mt-1.5">
              Start a new project item with pre-configured templates.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-[#6B6B85] hover:text-[#F0F0F5] hover:bg-[#22222F] transition-all duration-200 self-start"
          >
            <X className="w-[18px] h-[18px]" />
          </button>
        </div>

        {/* Form Fields */}
        <div className="px-7 py-6 space-y-5">
          <div>
            <label className="block text-[12px] font-medium text-[#8A8AA3] mb-2 tracking-wide uppercase">
              Item Name
            </label>
            <input
              type="text"
              placeholder="Enter item name..."
              className={cn(
                "w-full px-4 py-3 rounded-[12px] text-[14px]",
                "bg-[#1C1C28] border border-[#252535]",
                "text-[#F0F0F5] placeholder:text-[#4A4A5E]",
                "focus:outline-none focus:border-[#3B82F6]/50 focus:ring-2 focus:ring-[#3B82F6]/15",
                "transition-all duration-200"
              )}
            />
          </div>
          <div>
            <label className="block text-[12px] font-medium text-[#8A8AA3] mb-2 tracking-wide uppercase">
              Category
            </label>
            <select
              className={cn(
                "w-full px-4 py-3 rounded-[12px] text-[14px] appearance-none",
                "bg-[#1C1C28] border border-[#252535]",
                "text-[#F0F0F5]",
                "focus:outline-none focus:border-[#3B82F6]/50 focus:ring-2 focus:ring-[#3B82F6]/15",
                "transition-all duration-200 cursor-pointer"
              )}
            >
              <option>Requirements Engineering</option>
              <option>Architecture and Design</option>
              <option>Implementation</option>
              <option>Testing</option>
              <option>Deployment & Release</option>
            </select>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 px-7 pb-7 pt-2 border-t border-[#222230] mx-5">
          <button
            onClick={onClose}
            className={cn(
              "flex-1 px-5 py-3 rounded-[12px] text-[14px] font-medium",
              "bg-[#3B82F6] text-white",
              "hover:bg-[#2563EB] active:scale-[0.98]",
              "transition-all duration-200",
              "shadow-[0_2px_12px_rgba(59,130,246,0.25)]"
            )}
          >
            Create Item
          </button>
          <button
            onClick={onClose}
            className={cn(
              "px-5 py-3 rounded-[12px] text-[14px] font-medium",
              "bg-[#1C1C28] border border-[#252535] text-[#9999B0]",
              "hover:text-[#F0F0F5] hover:bg-[#22222F] hover:border-[#2A2A3C]",
              "transition-all duration-200"
            )}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
