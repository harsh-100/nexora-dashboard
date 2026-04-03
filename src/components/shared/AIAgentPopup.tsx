"use client";

import { X, Sparkles, FileText, GitPullRequest, ShieldCheck } from "lucide-react";
import { aiAgents } from "@/data/ai-agents";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ElementType> = {
  "file-text": FileText,
  "git-pull-request": GitPullRequest,
  "shield-check": ShieldCheck,
};

const statusBadge: Record<string, { label: string; bg: string; text: string }> = {
  available: {
    label: "Available",
    bg: "bg-[#22C55E]/10",
    text: "text-[#22C55E]",
  },
  beta: {
    label: "Beta",
    bg: "bg-[#F59E0B]/10",
    text: "text-[#F59E0B]",
  },
  "coming-soon": {
    label: "Coming Soon",
    bg: "bg-[#6B7280]/10",
    text: "text-[#6B7280]",
  },
};

interface AIAgentPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AIAgentPopup({ isOpen, onClose }: AIAgentPopupProps) {
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
          "animate-fade-in-scale overflow-hidden"
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-7 pt-7 pb-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-[12px] bg-gradient-to-br from-[#3B82F6] to-[#6366F1] flex items-center justify-center shadow-[0_4px_12px_rgba(59,130,246,0.3)]">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-[17px] font-semibold text-[#F0F0F5] tracking-[-0.01em]">
                AI Agent
              </h2>
              <p className="text-[12px] text-[#5A5A73] mt-0.5">
                Intelligent tools to accelerate your workflow
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-[#6B6B85] hover:text-[#F0F0F5] hover:bg-[#22222F] transition-all duration-200"
          >
            <X className="w-[18px] h-[18px]" />
          </button>
        </div>

        {/* AI Tools List */}
        <div className="px-5 pb-2 space-y-2.5">
          {aiAgents.map((agent, index) => {
            const Icon = iconMap[agent.icon] || FileText;
            const badge = statusBadge[agent.status];
            return (
              <button
                key={agent.id}
                className={cn(
                  "w-full flex items-start gap-4 px-5 py-4.5 rounded-[14px] text-left",
                  "bg-[#1C1C28] border border-[#252535]",
                  "hover:bg-[#20202E] hover:border-[#3B82F6]/20 hover:shadow-[0_0_16px_rgba(59,130,246,0.06)]",
                  "transition-all duration-250 group cursor-pointer",
                  "animate-slide-up"
                )}
                style={{ animationDelay: `${index * 80}ms` }}
              >
                {/* Icon */}
                <div className="w-10 h-10 rounded-[10px] bg-[#3B82F6]/8 group-hover:bg-[#3B82F6]/15 flex items-center justify-center shrink-0 transition-colors duration-200">
                  <Icon className="w-5 h-5 text-[#3B82F6]/70 group-hover:text-[#3B82F6] transition-colors duration-200" />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[14px] font-medium text-[#C0C0D0] group-hover:text-[#F0F0F5] transition-colors duration-200">
                      {agent.name}
                    </span>
                    <span
                      className={cn(
                        "px-2 py-0.5 rounded-md text-[10px] font-semibold uppercase tracking-wider",
                        badge.bg,
                        badge.text
                      )}
                    >
                      {badge.label}
                    </span>
                  </div>
                  <p className="text-[12px] text-[#5A5A73] leading-relaxed line-clamp-2">
                    {agent.description}
                  </p>
                </div>

                {/* Arrow */}
                <svg
                  className="w-4 h-4 mt-1 text-[#2A2A3C] group-hover:text-[#5A5A73] group-hover:translate-x-0.5 transition-all duration-200 shrink-0"
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
            );
          })}
        </div>

        {/* Footer */}
        <div className="px-7 py-4 mt-2 border-t border-[#222230]">
          <p className="text-[11px] text-[#3A3A4E] text-center">
            Powered by{" "}
            <span className="text-[#5A5A73] font-medium">
              Omega AI v1.3.34
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
