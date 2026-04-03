"use client";

import { cn } from "@/lib/utils";
import { formatDate } from "@/lib/utils";
import { ProjectItem } from "@/data/items";

const statusStyles: Record<string, { bg: string; text: string; dot: string }> = {
  active: {
    bg: "bg-[#22C55E]/10",
    text: "text-[#22C55E]",
    dot: "bg-[#22C55E]",
  },
  pending: {
    bg: "bg-[#F59E0B]/10",
    text: "text-[#F59E0B]",
    dot: "bg-[#F59E0B]",
  },
  completed: {
    bg: "bg-[#3B82F6]/10",
    text: "text-[#3B82F6]",
    dot: "bg-[#3B82F6]",
  },
  draft: {
    bg: "bg-[#6B7280]/10",
    text: "text-[#6B7280]",
    dot: "bg-[#6B7280]",
  },
  failed: {
    bg: "bg-[#EF4444]/10",
    text: "text-[#EF4444]",
    dot: "bg-[#EF4444]",
  },
};

interface ItemsTableProps {
  items: ProjectItem[];
  onItemClick: (item: ProjectItem) => void;
}

export default function ItemsTable({ items, onItemClick }: ItemsTableProps) {
  return (
    <div className="rounded-[16px] border border-[#1F1F2E] overflow-hidden bg-[#0E0E16]">
      {/* Table Header */}
      <div className="grid grid-cols-[1fr_120px_140px_140px] gap-4 px-6 py-3.5 bg-[#111119] border-b border-[#1A1A28]">
        <span className="text-[11px] font-semibold text-[#4A4A5E] uppercase tracking-wider">
          Name
        </span>
        <span className="text-[11px] font-semibold text-[#4A4A5E] uppercase tracking-wider">
          Status
        </span>
        <span className="text-[11px] font-semibold text-[#4A4A5E] uppercase tracking-wider">
          Last Updated
        </span>
        <span className="text-[11px] font-semibold text-[#4A4A5E] uppercase tracking-wider">
          Owner
        </span>
      </div>

      {/* Table Rows */}
      <div>
        {items.map((item, index) => {
          const style = statusStyles[item.status] || statusStyles.draft;
          return (
            <button
              key={item.id}
              onClick={() => onItemClick(item)}
              className={cn(
                "w-full grid grid-cols-[1fr_120px_140px_140px] gap-4 px-6 py-4 text-left",
                "border-b border-[#141420] last:border-b-0",
                "hover:bg-[#14141E] transition-colors duration-150 group",
                "animate-slide-up"
              )}
              style={{ animationDelay: `${index * 40}ms` }}
            >
              {/* Name */}
              <span className="text-[14px] font-medium text-[#C0C0D0] group-hover:text-[#F0F0F5] transition-colors duration-150 truncate">
                {item.name}
              </span>

              {/* Status Badge */}
              <div>
                <span
                  className={cn(
                    "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium",
                    style.bg,
                    style.text
                  )}
                >
                  <span
                    className={cn("w-1.5 h-1.5 rounded-full", style.dot)}
                  />
                  {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                </span>
              </div>

              {/* Last Updated */}
              <span className="text-[13px] text-[#5A5A73]">
                {formatDate(item.lastUpdated)}
              </span>

              {/* Owner */}
              <span className="text-[13px] text-[#5A5A73] truncate">
                {item.owner}
              </span>
            </button>
          );
        })}
      </div>

      {/* Footer */}
      <div className="px-6 py-3 bg-[#111119] border-t border-[#1A1A28]">
        <p className="text-[11px] text-[#3A3A4E]">
          Showing{" "}
          <span className="text-[#5A5A73] font-medium">{items.length}</span>{" "}
          items
        </p>
      </div>
    </div>
  );
}
