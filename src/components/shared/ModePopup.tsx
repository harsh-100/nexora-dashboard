"use client";

import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { modePopupItems } from "@/data/ai-agents";

interface ModePopupProps {
  isOpen: boolean;
  modeName: string;
  onClose: () => void;
}

export default function ModePopup({
  isOpen,
  modeName,
  onClose,
}: ModePopupProps) {
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
          "relative z-10 w-full max-w-[520px]",
          "bg-[#16161F] border border-[#2A2A3C] rounded-[20px]",
          "shadow-[0_24px_80px_rgba(0,0,0,0.6)]",
          "animate-fade-in-scale"
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-7 pt-7 pb-5">
          <div>
            <h2 className="text-[17px] font-semibold text-[#F0F0F5] tracking-[-0.01em]">
              {modeName} Mode
            </h2>
            <p className="text-[13px] text-[#6B6B85] mt-1.5">
              Select an item to view details
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-[#6B6B85] hover:text-[#F0F0F5] hover:bg-[#22222F] transition-all duration-200"
          >
            <X className="w-[18px] h-[18px]" />
          </button>
        </div>

        {/* Content — 3 horizontal card items */}
        <div className="px-5 pb-2 space-y-2.5">
          {modePopupItems.map((item, index) => (
            <button
              key={item.id}
              className={cn(
                "w-full flex items-center gap-4 px-5 py-4 rounded-[14px] text-left",
                "bg-[#1C1C28] border border-[#252535]",
                "hover:bg-[#20202E] hover:border-[#3B82F6]/25 hover:shadow-[0_0_16px_rgba(59,130,246,0.06)]",
                "transition-all duration-250 group cursor-pointer",
                "animate-slide-up"
              )}
              style={{ animationDelay: `${index * 70}ms` }}
            >
              {/* Number indicator */}
              <div className="w-9 h-9 rounded-[10px] bg-[#3B82F6]/10 flex items-center justify-center shrink-0">
                <span className="text-[13px] font-semibold text-[#3B82F6]">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Name */}
              <span className="text-[14px] font-medium text-[#9999B0] group-hover:text-[#F0F0F5] transition-colors duration-200">
                {item.name}
              </span>

              {/* Arrow */}
              <svg
                className="w-4 h-4 ml-auto text-[#3A3A4E] group-hover:text-[#6B6B85] group-hover:translate-x-0.5 transition-all duration-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          ))}
        </div>

        {/* Footer */}
        <div className="px-7 py-4 mt-2 border-t border-[#222230]">
          <p className="text-[11px] text-[#4A4A5E] text-center tracking-wide">
            Showing {modePopupItems.length} items in{" "}
            <span className="text-[#7B7B95] font-medium">{modeName}</span>{" "}
            mode
          </p>
        </div>
      </div>
    </div>
  );
}
