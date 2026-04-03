"use client";

import { useState } from "react";
import {
  LayoutDashboard,
  Building2,
  Settings,
  UserCog,
  ChevronLeft,
  ChevronRight,
  LogOut,
} from "lucide-react";
import { sidebarNavItems, legalLinks, userInfo } from "@/data/sidebar-nav";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ElementType> = {
  "layout-dashboard": LayoutDashboard,
  "building-2": Building2,
  settings: Settings,
  "user-cog": UserCog,
};

interface SidebarProps {
  collapsed: boolean;
  onToggle: () => void;
}

export default function Sidebar({ collapsed, onToggle }: SidebarProps) {
  const [activeNav, setActiveNav] = useState("dashboard");

  return (
    <aside
      className={cn(
        "relative flex flex-col h-full border-r border-border-default bg-bg-surface",
        "transition-all duration-300 ease-in-out shrink-0",
        collapsed ? "w-[68px]" : "w-[248px]"
      )}
    >
      {/* Logo / Brand */}
      <div className="flex items-center h-[60px] px-4 border-b border-border-subtle">
        <div className="flex items-center gap-3 overflow-hidden">
          <div
            className="w-9 h-9 rounded-[10px] bg-gradient-to-br from-accent to-accent-hover flex items-center justify-center shrink-0"
            style={{ boxShadow: "var(--shadow-button)" }}
          >
            <span className="text-white font-bold text-[14px]">Ω</span>
          </div>
          <span
            className={cn(
              "text-[14px] font-semibold text-text-secondary whitespace-nowrap transition-all duration-250",
              collapsed ? "opacity-0 w-0 overflow-hidden" : "opacity-100"
            )}
          >
            omega123.ai
          </span>
        </div>
      </div>

      {/* Navigation Items */}
      <nav className="flex-1 py-4 px-3 space-y-1 overflow-y-auto overflow-x-hidden">
        {sidebarNavItems.map((item) => {
          const Icon = iconMap[item.icon] || LayoutDashboard;
          const isActive = activeNav === item.id;

          return (
            <button
              key={item.id}
              onClick={() => setActiveNav(item.id)}
              title={collapsed ? item.label : undefined}
              className={cn(
                "w-full flex items-center gap-3 py-2.5 rounded-[10px] text-[13px] font-medium",
                "transition-all duration-200 group relative",
                collapsed ? "px-0 justify-center" : "px-3",
                isActive
                  ? "bg-accent-muted text-accent"
                  : "text-text-subtle hover:text-text-secondary hover:bg-bg-overlay"
              )}
            >
              {isActive && !collapsed && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-5 bg-accent rounded-r-full" />
              )}
              <Icon className="w-[18px] h-[18px] shrink-0" />
              <span
                className={cn(
                  "whitespace-nowrap transition-all duration-250",
                  collapsed ? "opacity-0 w-0 overflow-hidden" : "opacity-100"
                )}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </nav>

      {/* Footer */}
      <div
        className={cn(
          "border-t border-border-subtle transition-all duration-250",
          collapsed ? "opacity-0 h-0 overflow-hidden p-0" : "opacity-100 px-4 py-4"
        )}
      >
        <div className="mb-3">
          <p className="text-[10px] font-semibold text-text-invisible uppercase tracking-widest mb-2">
            Legal
          </p>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[12px] cursor-pointer hover:opacity-80 transition-opacity">🇬🇧</span>
            <span className="text-[12px] cursor-pointer hover:opacity-80 transition-opacity">🇩🇪</span>
          </div>
          <div className="space-y-1">
            {legalLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block text-[11px] text-text-ghost hover:text-text-muted transition-colors duration-150"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="pt-3 border-t border-border-subtle">
          <p className="text-[12px] text-text-muted truncate">{userInfo.email}</p>
          <p className="text-[10px] text-text-ghost mt-0.5">{userInfo.status}</p>
          <button className="mt-2.5 flex items-center gap-2 text-[11px] text-text-ghost hover:text-text-muted transition-colors duration-150 group">
            <LogOut className="w-3.5 h-3.5 group-hover:text-status-failed transition-colors" />
            <span>Sign Out</span>
          </button>
          <div className="mt-3 space-y-0.5">
            <p className="text-[10px] text-text-ultra-faint">
              Omega version: {userInfo.omegaVersion}
            </p>
            <p className="text-[10px] text-text-ultra-faint">
              AI package version: {userInfo.aiPackageVersion}
            </p>
          </div>
        </div>
      </div>

      {/* Collapse Toggle */}
      <button
        onClick={onToggle}
        className={cn(
          "absolute -right-3 top-[76px] z-10",
          "w-6 h-6 rounded-full bg-bg-overlay border border-border-strong",
          "flex items-center justify-center",
          "text-text-faint hover:text-text-primary hover:border-accent/50",
          "transition-all duration-200 shadow-md"
        )}
      >
        {collapsed ? (
          <ChevronRight className="w-3 h-3" />
        ) : (
          <ChevronLeft className="w-3 h-3" />
        )}
      </button>
    </aside>
  );
}
