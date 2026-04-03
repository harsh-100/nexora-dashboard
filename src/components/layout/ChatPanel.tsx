"use client";

import { useState } from "react";
import {
  MessageSquare,
  X,
  ChevronDown,
  Send,
  Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface ChatPanelProps {
  isOpen: boolean;
  onToggle: () => void;
}

export default function ChatPanel({ isOpen, onToggle }: ChatPanelProps) {
  const [message, setMessage] = useState("");

  return (
    <>
      {/* Collapsed — Capsule Toggle Button */}
      {!isOpen && (
        <button
          onClick={onToggle}
          className={cn(
            "fixed right-0 top-1/2 -translate-y-1/2 z-40",
            "flex items-center gap-2 px-2.5 py-4",
            "bg-[#16161F] border border-[#2A2A3C] border-r-0",
            "rounded-l-[14px]",
            "text-[#6B6B85] hover:text-[#3B82F6] hover:bg-[#1A1A25]",
            "transition-all duration-300",
            "shadow-[-4px_0_20px_rgba(0,0,0,0.3)]",
            "group"
          )}
        >
          <div className="flex flex-col items-center gap-2">
            <MessageSquare className="w-4 h-4 group-hover:text-[#3B82F6] transition-colors" />
            <span
              className="text-[11px] font-medium tracking-wider"
              style={{ writingMode: "vertical-lr" }}
            >
              Chat
            </span>
          </div>
        </button>
      )}

      {/* Expanded Panel */}
      <div
        className={cn(
          "fixed top-0 right-0 h-full z-40",
          "bg-[#0E0E16] border-l border-[#1F1F2E]",
          "flex flex-col",
          "transition-all duration-300 ease-in-out",
          "shadow-[-8px_0_30px_rgba(0,0,0,0.4)]",
          isOpen ? "w-[420px] translate-x-0" : "w-0 translate-x-full"
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 h-[60px] border-b border-[#1A1A28] shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-[#3B82F6]" />
              <span className="text-[14px] font-semibold text-[#F0F0F5]">
                You&apos;re in Ask mode
              </span>
            </div>
            <ChevronDown className="w-3.5 h-3.5 text-[#5A5A73]" />
          </div>

          <div className="flex items-center gap-3">
            {/* Progress */}
            <div className="flex items-center gap-2">
              <div className="w-16 h-1.5 rounded-full bg-[#1A1A28] overflow-hidden">
                <div className="w-0 h-full rounded-full bg-[#3B82F6]" />
              </div>
              <span className="text-[11px] text-[#3A3A4E] font-medium">0%</span>
            </div>

            {/* Close */}
            <button
              onClick={onToggle}
              className="p-1.5 rounded-lg text-[#5A5A73] hover:text-[#F0F0F5] hover:bg-[#1A1A25] transition-all duration-200"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Messages area */}
        <div className="flex-1 flex items-center justify-center px-6 overflow-y-auto">
          <div className="text-center">
            <div className="w-14 h-14 rounded-2xl bg-[#3B82F6]/8 flex items-center justify-center mx-auto mb-4">
              <MessageSquare className="w-6 h-6 text-[#3B82F6]/50" />
            </div>
            <p className="text-[15px] font-medium text-[#6B6B85]">
              No messages yet.
            </p>
            <p className="text-[13px] text-[#3A3A4E] mt-1">
              Start a conversation!
            </p>
          </div>
        </div>

        {/* Input area */}
        <div className="px-4 pb-4 pt-2 shrink-0">
          <div className="flex items-center gap-2 p-1.5 rounded-[14px] bg-[#14141E] border border-[#1F1F2E] focus-within:border-[#3B82F6]/30 transition-colors duration-200">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 px-3 py-2.5 bg-transparent text-[14px] text-[#F0F0F5] placeholder:text-[#3A3A4E] focus:outline-none"
            />
            <button
              className={cn(
                "p-2.5 rounded-[10px] transition-all duration-200",
                message.trim()
                  ? "bg-[#3B82F6] text-white hover:bg-[#2563EB] shadow-[0_2px_8px_rgba(59,130,246,0.3)]"
                  : "bg-[#1A1A25] text-[#3A3A4E] cursor-not-allowed"
              )}
            >
              <Send className="w-4 h-4" />
            </button>
          </div>

          {/* Disclaimer */}
          <p className="text-[10px] text-[#2E2E42] text-center mt-2.5 px-2">
            Omega can make mistakes. Check important information.
          </p>
        </div>
      </div>
    </>
  );
}
