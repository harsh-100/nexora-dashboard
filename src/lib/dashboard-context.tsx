"use client";

import React, { createContext, useContext, useState } from "react";
import { NavigationTab } from "@/components/dashboard/NavigationTabs";
import { Mode } from "@/components/dashboard/ModeTabs";
import { ProjectItem } from "@/data/items";

interface DashboardState {
  activeTab: NavigationTab;
  setActiveTab: (tab: NavigationTab) => void;
  activeMode: Mode;
  setActiveMode: (mode: Mode) => void;
  // Items view state
  selectedItem: ProjectItem | null;
  setSelectedItem: (item: ProjectItem | null) => void;
  itemsView: "list" | "detail";
  setItemsView: (view: "list" | "detail") => void;
  // Popups
  createPopupOpen: boolean;
  setCreatePopupOpen: (open: boolean) => void;
  modePopupOpen: boolean;
  setModePopupOpen: (open: boolean) => void;
  selectedModeName: string;
  setSelectedModeName: (name: string) => void;
}

const DashboardContext = createContext<DashboardState | null>(null);

export function useDashboard() {
  const ctx = useContext(DashboardContext);
  if (!ctx) throw new Error("useDashboard must be used within DashboardProvider");
  return ctx;
}

export function DashboardProvider({ children }: { children: React.ReactNode }) {
  const [activeTab, setActiveTab] = useState<NavigationTab>("overview");
  const [activeMode, setActiveMode] = useState<Mode>("explore");
  const [selectedItem, setSelectedItem] = useState<ProjectItem | null>(null);
  const [itemsView, setItemsView] = useState<"list" | "detail">("list");
  const [createPopupOpen, setCreatePopupOpen] = useState(false);
  const [modePopupOpen, setModePopupOpen] = useState(false);
  const [selectedModeName, setSelectedModeName] = useState("");

  return (
    <DashboardContext.Provider
      value={{
        activeTab,
        setActiveTab,
        activeMode,
        setActiveMode,
        selectedItem,
        setSelectedItem,
        itemsView,
        setItemsView,
        createPopupOpen,
        setCreatePopupOpen,
        modePopupOpen,
        setModePopupOpen,
        selectedModeName,
        setSelectedModeName,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
}
