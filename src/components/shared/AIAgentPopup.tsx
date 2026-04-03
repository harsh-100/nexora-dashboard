"use client";

import { X, Sparkles, FileText, GitPullRequest, ShieldCheck } from "lucide-react";
import { aiAgents } from "@/data/ai-agents";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ElementType> = {
  "file-text": FileText, "git-pull-request": GitPullRequest, "shield-check": ShieldCheck,
};

const statusBadge: Record<string, { label: string; bg: string; text: string }> = {
  available: { label: "Available", bg: "bg-status-active-bg", text: "text-status-active" },
  beta: { label: "Beta", bg: "bg-status-pending-bg", text: "text-status-pending" },
  "coming-soon": { label: "Coming Soon", bg: "bg-status-empty-bg", text: "text-status-empty" },
};

interface AIAgentPopupProps { isOpen: boolean; onClose: () => void; }

export default function AIAgentPopup({ isOpen, onClose }: AIAgentPopupProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 backdrop-blur-md" style={{ background: "var(--backdrop-color)" }} onClick={onClose} />
      <div className="relative z-10 w-full max-w-[520px] bg-bg-overlay border border-border-strong rounded-[20px] animate-fade-in-scale overflow-hidden" style={{ boxShadow: "var(--shadow-popup)" }}>
        <div className="flex items-center justify-between px-7 pt-7 pb-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-[12px] bg-gradient-to-br from-accent to-accent-secondary flex items-center justify-center" style={{ boxShadow: "var(--shadow-button)" }}>
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-[17px] font-semibold text-text-primary tracking-[-0.01em]">AI Agent</h2>
              <p className="text-[12px] text-text-faint mt-0.5">Intelligent tools to accelerate your workflow</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 rounded-xl text-text-subtle hover:text-text-primary hover:bg-bg-active transition-all duration-200">
            <X className="w-[18px] h-[18px]" />
          </button>
        </div>
        <div className="px-5 pb-2 space-y-2.5">
          {aiAgents.map((agent, index) => {
            const Icon = iconMap[agent.icon] || FileText;
            const badge = statusBadge[agent.status];
            return (
              <button key={agent.id} className={cn(
                "w-full flex items-start gap-4 px-5 py-4 rounded-[14px] text-left",
                "bg-bg-raised border border-border-mid",
                "hover:bg-bg-hover hover:border-accent/20",
                "transition-all duration-250 group cursor-pointer animate-slide-up"
              )} style={{ animationDelay: `${index * 80}ms` }}>
                <div className="w-10 h-10 rounded-[10px] bg-accent-muted group-hover:bg-accent/15 flex items-center justify-center shrink-0 transition-colors duration-200">
                  <Icon className="w-5 h-5 text-accent/70 group-hover:text-accent transition-colors duration-200" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[14px] font-medium text-text-secondary group-hover:text-text-primary transition-colors duration-200">{agent.name}</span>
                    <span className={cn("px-2 py-0.5 rounded-md text-[10px] font-semibold uppercase tracking-wider", badge.bg, badge.text)}>{badge.label}</span>
                  </div>
                  <p className="text-[12px] text-text-faint leading-relaxed line-clamp-2">{agent.description}</p>
                </div>
                <svg className="w-4 h-4 mt-1 text-border-strong group-hover:text-text-faint group-hover:translate-x-0.5 transition-all duration-200 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            );
          })}
        </div>
        <div className="px-7 py-4 mt-2 border-t border-border-default">
          <p className="text-[11px] text-text-invisible text-center">Powered by <span className="text-text-faint font-medium">Omega AI v1.3.34</span></p>
        </div>
      </div>
    </div>
  );
}
