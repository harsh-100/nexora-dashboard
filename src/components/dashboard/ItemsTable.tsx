"use client";

import { cn, formatDate } from "@/lib/utils";
import { ProjectItem } from "@/data/items";

const statusStyles: Record<string, { bg: string; text: string; dot: string }> = {
  active:    { bg: "bg-status-active-bg",    text: "text-status-active",    dot: "bg-status-active" },
  pending:   { bg: "bg-status-pending-bg",   text: "text-status-pending",   dot: "bg-status-pending" },
  completed: { bg: "bg-status-completed-bg", text: "text-status-completed", dot: "bg-status-completed" },
  draft:     { bg: "bg-status-draft-bg",     text: "text-status-draft",     dot: "bg-status-draft" },
  failed:    { bg: "bg-status-failed-bg",    text: "text-status-failed",    dot: "bg-status-failed" },
};

interface ItemsTableProps {
  items: ProjectItem[];
  onItemClick: (item: ProjectItem) => void;
}

export default function ItemsTable({ items, onItemClick }: ItemsTableProps) {
  return (
    <div className="rounded-[16px] border border-border-default overflow-hidden bg-bg-surface">
      {/* Header */}
      <div className="grid grid-cols-[1fr_120px_140px_140px] gap-4 px-6 py-3.5 bg-bg-surface-2 border-b border-border-subtle">
        <span className="text-[11px] font-semibold text-text-ghost uppercase tracking-wider">Name</span>
        <span className="text-[11px] font-semibold text-text-ghost uppercase tracking-wider">Status</span>
        <span className="text-[11px] font-semibold text-text-ghost uppercase tracking-wider">Last Updated</span>
        <span className="text-[11px] font-semibold text-text-ghost uppercase tracking-wider">Owner</span>
      </div>

      {/* Rows */}
      <div>
        {items.map((item, index) => {
          const style = statusStyles[item.status] || statusStyles.draft;
          return (
            <button
              key={item.id}
              onClick={() => onItemClick(item)}
              className={cn(
                "w-full grid grid-cols-[1fr_120px_140px_140px] gap-4 px-6 py-4 text-left",
                "border-b border-border-subtle last:border-b-0",
                "hover:bg-bg-raised transition-colors duration-150 group",
                "animate-slide-up"
              )}
              style={{ animationDelay: `${index * 40}ms` }}
            >
              <span className="text-[14px] font-medium text-text-secondary group-hover:text-text-primary transition-colors duration-150 truncate">
                {item.name}
              </span>
              <div>
                <span className={cn("inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium", style.bg, style.text)}>
                  <span className={cn("w-1.5 h-1.5 rounded-full", style.dot)} />
                  {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                </span>
              </div>
              <span className="text-[13px] text-text-faint">{formatDate(item.lastUpdated)}</span>
              <span className="text-[13px] text-text-faint truncate">{item.owner}</span>
            </button>
          );
        })}
      </div>

      {/* Footer */}
      <div className="px-6 py-3 bg-bg-surface-2 border-t border-border-subtle">
        <p className="text-[11px] text-text-invisible">
          Showing <span className="text-text-faint font-medium">{items.length}</span> items
        </p>
      </div>
    </div>
  );
}
