"use client";

import { cn } from "@/lib/utils";

export type NavigationTab = "overview" | "items";

interface NavigationTabsProps {
  activeTab: NavigationTab;
  onTabChange: (tab: NavigationTab) => void;
}

const tabs: { id: NavigationTab; label: string }[] = [
  { id: "overview", label: "Overview" },
  { id: "items", label: "Items" },
];

export default function NavigationTabs({
  activeTab,
  onTabChange,
}: NavigationTabsProps) {
  return (
    <div className="flex items-center gap-1 px-6 border-b border-[#1A1A28]">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={cn(
              "relative px-5 py-3.5 text-[13px] font-medium transition-all duration-200",
              isActive
                ? "text-[#F0F0F5]"
                : "text-[#5A5A73] hover:text-[#9999B0]"
            )}
          >
            {tab.label}

            {/* Active underline indicator */}
            {isActive && (
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-10 h-[2px] bg-[#3B82F6] rounded-full" />
            )}
          </button>
        );
      })}
    </div>
  );
}
