"use client";

import { useState } from "react";
import { MessageSquare, X, ChevronDown, Send, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface ChatPanelProps {
  isOpen: boolean;
  onToggle: () => void;
}

export default function ChatPanel({ isOpen, onToggle }: ChatPanelProps) {
  const [message, setMessage] = useState("");

  return (
    <>
      {/* Collapsed — Capsule Toggle */}
      {!isOpen && (
        <button
          onClick={onToggle}
          className={cn(
            "fixed right-0 top-1/2 -translate-y-1/2 z-40",
            "flex items-center gap-2 px-2.5 py-4",
            "bg-bg-overlay border border-border-strong border-r-0",
            "rounded-l-[14px]",
            "text-text-subtle ",
            "transition-all duration-300 group bg-gradient-to-r from-accent to-accent-secondary text-white text-[13px] font-semibold hover:scale-105 active:scale-95 transition-all duration-250 animate-pulse-glow"
          )}
          style={{ boxShadow: "var(--shadow-chat)" }}
        >
          <div className="flex flex-col items-center gap-2">
            <MessageSquare className="w-4 h-4  transition-colors" />
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
          "bg-bg-surface border-l border-border-default",
          "flex flex-col",
          "transition-all duration-300 ease-in-out",
          isOpen ? "w-[420px] translate-x-0" : "w-0 translate-x-full"
        )}
        style={{ boxShadow: isOpen ? "var(--shadow-chat)" : "none" }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 h-[60px] border-b border-border-subtle shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-[14px] font-semibold text-text-primary">
                You&apos;re in Ask mode
              </span>
            </div>
            <ChevronDown className="w-3.5 h-3.5 text-text-faint" />
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <div className="w-16 h-1.5 rounded-full bg-bg-hover overflow-hidden">
                <div className="w-0 h-full rounded-full bg-accent" />
              </div>
              <span className="text-[11px] text-text-invisible font-medium">0%</span>
            </div>
            <button
              onClick={onToggle}
              className="p-1.5 rounded-lg text-text-faint hover:text-text-primary hover:bg-bg-hover transition-all duration-200"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Messages area */}
        <div className="flex-1 flex items-center justify-center px-6 overflow-y-auto">
          <div className="text-center">
            <div className="w-14 h-14 rounded-2xl bg-accent-muted flex items-center justify-center mx-auto mb-4">
              <MessageSquare className="w-6 h-6 text-accent/50" />
            </div>
            <p className="text-[15px] font-medium text-text-subtle">
              No messages yet.
            </p>
            <p className="text-[13px] text-text-invisible mt-1">
              Start a conversation!
            </p>
          </div>
        </div>

        {/* Input area */}
        <div className="px-4 pb-4 pt-2 shrink-0">
          <div className="flex items-center gap-2 p-1.5 rounded-[14px] bg-bg-raised border border-border-default focus-within:border-accent/30 transition-colors duration-200">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 px-3 py-2.5 bg-transparent text-[14px] text-text-primary placeholder:text-text-invisible focus:outline-none"
            />
            <button
              className={cn(
                "p-2.5 rounded-[10px] transition-all duration-200",
                message.trim()
                  ? "bg-accent text-white hover:bg-accent-hover"
                  : "bg-bg-hover text-text-invisible cursor-not-allowed"
              )}
              style={message.trim() ? { boxShadow: "var(--shadow-button)" } : undefined}
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
          <p className="text-[10px] text-text-ultra-faint text-center mt-2.5 px-2">
            Omega can make mistakes. Check important information.
          </p>
        </div>
      </div>
    </>
  );
}
