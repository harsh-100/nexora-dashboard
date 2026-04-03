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
        "relative flex flex-col h-full border-r border-border-default bg-bg-secondary",
        "transition-all duration-300 ease-in-out shrink-0",
        collapsed ? "w-16" : "w-60"
      )}
    >
      {/* Logo / Brand */}
      <div className="flex items-center h-16 px-4 border-b border-border-subtle">
        <div className="flex items-center gap-3 overflow-hidden">
          <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center shrink-0">
            <span className="text-white font-bold text-sm">Ω</span>
          </div>
          <span
            className={cn(
              "text-text-primary font-semibold text-sm whitespace-nowrap transition-opacity duration-200",
              collapsed ? "opacity-0 w-0" : "opacity-100"
            )}
          >
            omega123.ai
          </span>
        </div>
      </div>

      {/* Navigation Items */}
      <nav className="flex-1 py-4 px-2 space-y-1 overflow-y-auto overflow-x-hidden">
        {sidebarNavItems.map((item) => {
          const Icon = iconMap[item.icon] || LayoutDashboard;
          const isActive = activeNav === item.id;

          return (
            <button
              key={item.id}
              onClick={() => setActiveNav(item.id)}
              title={collapsed ? item.label : undefined}
              className={cn(
                "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm",
                "transition-all duration-200 ease-in-out group relative",
                isActive
                  ? "bg-accent-muted text-accent"
                  : "text-text-secondary hover:text-text-primary hover:bg-bg-hover"
              )}
            >
              {/* Active indicator bar */}
              {isActive && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-5 bg-accent rounded-r-full" />
              )}
              <Icon className="w-[18px] h-[18px] shrink-0" />
              <span
                className={cn(
                  "whitespace-nowrap transition-opacity duration-200",
                  collapsed ? "opacity-0 w-0 overflow-hidden" : "opacity-100"
                )}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </nav>

      {/* Footer — Only visible when expanded */}
      <div
        className={cn(
          "border-t border-border-subtle transition-opacity duration-200",
          collapsed ? "opacity-0 h-0 overflow-hidden p-0" : "opacity-100 p-4"
        )}
      >
        {/* Legal Section */}
        <div className="mb-3">
          <p className="text-[10px] font-semibold text-text-tertiary uppercase tracking-wider mb-2">
            Legal
          </p>
          <div className="flex items-center gap-1.5 mb-2">
            <span className="text-xs cursor-pointer">🇬🇧</span>
            <span className="text-xs cursor-pointer">🇩🇪</span>
          </div>
          <div className="space-y-0.5">
            {legalLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block text-xs text-text-tertiary hover:text-text-secondary transition-colors duration-150"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* User Info */}
        <div className="pt-3 border-t border-border-subtle">
          <p className="text-xs text-text-secondary truncate">
            {userInfo.email}
          </p>
          <p className="text-[10px] text-text-tertiary mt-0.5">
            {userInfo.status}
          </p>
          <button className="mt-2 flex items-center gap-2 text-xs text-text-tertiary hover:text-text-secondary transition-colors duration-150">
            <LogOut className="w-3.5 h-3.5" />
            <span>Sign Out</span>
          </button>
          <div className="mt-3 space-y-0.5">
            <p className="text-[10px] text-text-muted">
              Omega version: {userInfo.omegaVersion}
            </p>
            <p className="text-[10px] text-text-muted">
              AI package version: {userInfo.aiPackageVersion}
            </p>
          </div>
        </div>
      </div>

      {/* Collapse Toggle Button */}
      <button
        onClick={onToggle}
        className={cn(
          "absolute -right-3 top-20 z-10",
          "w-6 h-6 rounded-full bg-bg-secondary border border-border-default",
          "flex items-center justify-center",
          "text-text-tertiary hover:text-text-primary hover:border-accent",
          "transition-all duration-200 shadow-md"
        )}
      >
        {collapsed ? (
          <ChevronRight className="w-3.5 h-3.5" />
        ) : (
          <ChevronLeft className="w-3.5 h-3.5" />
        )}
      </button>
    </aside>
  );
}
