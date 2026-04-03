"use client";

import CardGrid from "@/components/dashboard/CardGrid";
import ItemsTable from "@/components/dashboard/ItemsTable";
import ItemForm from "@/components/dashboard/ItemForm";
import { useDashboard } from "@/lib/dashboard-context";
import { projectItems } from "@/data/items";

export default function DashboardPage() {
  const {
    activeTab,
    selectedItem,
    setSelectedItem,
    itemsView,
    setItemsView,
  } = useDashboard();

  // ── ITEMS VIEW ──
  if (activeTab === "items") {
    // Detail form
    if (itemsView === "detail" && selectedItem) {
      return (
        <ItemForm
          item={selectedItem}
          onBack={() => {
            setItemsView("list");
            setSelectedItem(null);
          }}
        />
      );
    }

    // Items list
    return (
      <div className="animate-fade-in">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-[17px] font-semibold text-[#F0F0F5] tracking-[-0.01em]">
              Project Items
            </h2>
            <p className="text-[12px] text-[#4A4A5E] mt-1">
              All items across engineering phases
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[11px] text-[#3A3A4E] font-medium uppercase tracking-wider">
              Total
            </span>
            <span className="text-[12px] text-[#6B6B85] font-semibold bg-[#1A1A25] px-2.5 py-1 rounded-[8px] border border-[#222230]">
              {projectItems.length}
            </span>
          </div>
        </div>

        {/* Items Table */}
        <ItemsTable
          items={projectItems}
          onItemClick={(item) => {
            setSelectedItem(item);
            setItemsView("detail");
          }}
        />
      </div>
    );
  }

  // ── OVERVIEW VIEW (default) ──
  return (
    <div className="animate-fade-in">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-[17px] font-semibold text-[#F0F0F5] tracking-[-0.01em]">
            Project Overview
          </h2>
          <p className="text-[12px] text-[#4A4A5E] mt-1">
            Engineering process lifecycle — 9 steps
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[11px] text-[#3A3A4E] font-medium uppercase tracking-wider">
            Steps
          </span>
          <span className="text-[12px] text-[#6B6B85] font-semibold bg-[#1A1A25] px-2.5 py-1 rounded-[8px] border border-[#222230]">
            9
          </span>
        </div>
      </div>

      {/* Cards Grid */}
      <CardGrid />
    </div>
  );
}
