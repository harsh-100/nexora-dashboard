"use client";

import { useState } from "react";
import { LayoutGrid, List } from "lucide-react";
import CardGrid from "@/components/dashboard/CardGrid";
import CardListView from "@/components/dashboard/CardListView";
import ItemsTable from "@/components/dashboard/ItemsTable";
import ItemForm from "@/components/dashboard/ItemForm";
import { useDashboard } from "@/lib/dashboard-context";
import { projectItems } from "@/data/items";
import { processCards } from "@/data/cards";
import { cn } from "@/lib/utils";

type OverviewLayout = "grid" | "list";

export default function DashboardPage() {
  const { activeTab, selectedItem, setSelectedItem, itemsView, setItemsView } = useDashboard();
  const [overviewLayout, setOverviewLayout] = useState<OverviewLayout>("grid");

  // ── ITEMS VIEW ──
  if (activeTab === "items") {
    if (itemsView === "detail" && selectedItem) {
      return <ItemForm item={selectedItem} onBack={() => { setItemsView("list"); setSelectedItem(null); }} />;
    }
    return (
      <div className="animate-fade-in">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-[17px] font-semibold text-text-primary tracking-[-0.01em]">Project Items</h2>
            <p className="text-[12px] text-text-ghost mt-1">All items across engineering phases</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[11px] text-text-invisible font-medium uppercase tracking-wider">Total</span>
            <span className="text-[12px] text-text-subtle font-semibold bg-bg-hover px-2.5 py-1 rounded-[8px] border border-border-default">{projectItems.length}</span>
          </div>
        </div>
        <ItemsTable items={projectItems} onItemClick={(item) => { setSelectedItem(item); setItemsView("detail"); }} />
      </div>
    );
  }

  // ── OVERVIEW VIEW ──
  return (
    <div className="animate-fade-in">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-[17px] font-semibold text-text-primary tracking-[-0.01em]">Project Overview</h2>
          <p className="text-[12px] text-text-ghost mt-1">
            Engineering process lifecycle — {processCards.length} steps
          </p>
        </div>

        <div className="flex items-center gap-3">
          {/* View Toggle */}
          <div className="flex items-center bg-bg-raised border border-border-default rounded-[10px] p-0.5">
            <button
              onClick={() => setOverviewLayout("grid")}
              className={cn(
                "p-2 rounded-[8px] transition-all duration-200 relative group",
                overviewLayout === "grid"
                  ? "bg-accent text-white shadow-sm"
                  : "text-text-faint hover:text-text-muted hover:bg-bg-hover"
              )}
              title="Grid view"
            >
              <LayoutGrid className="w-4 h-4" />
              {/* Tooltip */}
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 rounded-md text-[10px] font-medium bg-bg-overlay border border-border-strong text-text-secondary whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"
                style={{ boxShadow: "var(--shadow-dropdown)" }}
              >
                Grid view
              </span>
            </button>
            <button
              onClick={() => setOverviewLayout("list")}
              className={cn(
                "p-2 rounded-[8px] transition-all duration-200 relative group",
                overviewLayout === "list"
                  ? "bg-accent text-white shadow-sm"
                  : "text-text-faint hover:text-text-muted hover:bg-bg-hover"
              )}
              title="List view"
            >
              <List className="w-4 h-4" />
              {/* Tooltip */}
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 rounded-md text-[10px] font-medium bg-bg-overlay border border-border-strong text-text-secondary whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"
                style={{ boxShadow: "var(--shadow-dropdown)" }}
              >
                List view
              </span>
            </button>
          </div>

          {/* Count Badge */}
          <div className="flex items-center gap-2">
            <span className="text-[11px] text-text-invisible font-medium uppercase tracking-wider">Steps</span>
            <span className="text-[12px] text-text-subtle font-semibold bg-bg-hover px-2.5 py-1 rounded-[8px] border border-border-default">{processCards.length}</span>
          </div>
        </div>
      </div>

      {/* Conditional View */}
      {overviewLayout === "grid" ? <CardGrid /> : <CardListView />}
    </div>
  );
}
