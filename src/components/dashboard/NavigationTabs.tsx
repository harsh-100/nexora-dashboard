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
    <div className="flex items-center gap-1 px-6 border-b border-border-subtle">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={cn(
              "relative px-5 py-3.5 text-[13px] font-medium transition-all duration-200",
              isActive
                ? "text-text-primary"
                : "text-text-faint hover:text-text-tertiary"
            )}
          >
            {tab.label}
            {isActive && (
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-10 h-[2px] bg-accent rounded-full" />
            )}
          </button>
        );
      })}
    </div>
  );
}
