"use client";

import { useState } from "react";
import Sidebar from "@/components/layout/Sidebar";
import Topbar from "@/components/layout/Topbar";
import ChatPanel from "@/components/layout/ChatPanel";
import NavigationTabs from "@/components/dashboard/NavigationTabs";
import ModeTabs from "@/components/dashboard/ModeTabs";
import CreatePopup from "@/components/shared/CreatePopup";
import ModePopup from "@/components/shared/ModePopup";
import FloatingAIButton from "@/components/shared/FloatingAIButton";
import AIAgentPopup from "@/components/shared/AIAgentPopup";
import { DashboardProvider, useDashboard } from "@/lib/dashboard-context";

function DashboardShell({ children }: { children: React.ReactNode }) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [aiPopupOpen, setAiPopupOpen] = useState(false);

  const {
    activeTab,
    setActiveTab,
    activeMode,
    createPopupOpen,
    setCreatePopupOpen,
    modePopupOpen,
    setModePopupOpen,
    selectedModeName,
    setSelectedModeName,
    setActiveMode,
  } = useDashboard();

  const handleModeClick = (mode: typeof activeMode) => {
    setActiveMode(mode);
    setSelectedModeName(mode.charAt(0).toUpperCase() + mode.slice(1));
    setModePopupOpen(true);
  };

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[#0A0A0F]">
      {/* Sidebar */}
      <Sidebar
        collapsed={sidebarCollapsed}
        onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
      />

      {/* Main Area — shrinks when chat is open */}
      <div
        className="flex-1 flex flex-col min-w-0 overflow-hidden transition-all duration-300 ease-in-out"
        style={{ marginRight: chatOpen ? 420 : 0 }}
      >
        {/* Topbar */}
        <Topbar onCreateClick={() => setCreatePopupOpen(true)} />

        {/* Navigation Tabs */}
        <NavigationTabs activeTab={activeTab} onTabChange={setActiveTab} />

        {/* Mode Tabs */}
        <ModeTabs activeMode={activeMode} onModeClick={handleModeClick} />

        {/* Content Area */}
        <main className="flex-1 overflow-y-auto overflow-x-hidden px-6 py-5">
          {children}
        </main>
      </div>

      {/* Chat Panel */}
      <ChatPanel isOpen={chatOpen} onToggle={() => setChatOpen(!chatOpen)} />

      {/* Floating AI Agent Button — hidden when chat is open */}
      {!chatOpen && (
        <FloatingAIButton onClick={() => setAiPopupOpen(true)} />
      )}

      {/* Popups */}
      <CreatePopup
        isOpen={createPopupOpen}
        onClose={() => setCreatePopupOpen(false)}
      />
      <ModePopup
        isOpen={modePopupOpen}
        modeName={selectedModeName}
        onClose={() => setModePopupOpen(false)}
      />
      <AIAgentPopup
        isOpen={aiPopupOpen}
        onClose={() => setAiPopupOpen(false)}
      />
    </div>
  );
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DashboardProvider>
      <DashboardShell>{children}</DashboardShell>
    </DashboardProvider>
  );
}
