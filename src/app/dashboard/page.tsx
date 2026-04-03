"use client";

import CardGrid from "@/components/dashboard/CardGrid";
import ItemsTable from "@/components/dashboard/ItemsTable";
import ItemForm from "@/components/dashboard/ItemForm";
import { useDashboard } from "@/lib/dashboard-context";
import { projectItems } from "@/data/items";

export default function DashboardPage() {
  const { activeTab, selectedItem, setSelectedItem, itemsView, setItemsView } = useDashboard();

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

  return (
    <div className="animate-fade-in">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-[17px] font-semibold text-text-primary tracking-[-0.01em]">Project Overview</h2>
          <p className="text-[12px] text-text-ghost mt-1">Engineering process lifecycle — 9 steps</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[11px] text-text-invisible font-medium uppercase tracking-wider">Steps</span>
          <span className="text-[12px] text-text-subtle font-semibold bg-bg-hover px-2.5 py-1 rounded-[8px] border border-border-default">9</span>
        </div>
      </div>
      <CardGrid />
    </div>
  );
}
