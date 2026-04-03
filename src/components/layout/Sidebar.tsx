"use client";

import {
  Building2,
  ChevronLeft,
  ChevronRight,
  LayoutDashboard,
  LogOut,
  Settings,
  UserCog,
} from "lucide-react";
import { legalLinks, sidebarNavItems, userInfo } from "@/data/sidebar-nav";

import { cn } from "@/lib/utils";
import { useState } from "react";

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
        "relative flex flex-col h-full border-r border-[#1F1F2E] bg-[#0E0E16]",
        "transition-all duration-300 ease-in-out shrink-0",
        collapsed ? "w-[68px]" : "w-[248px]"
      )}
    >
      {/* Logo / Brand */}
      <div className="flex items-center h-[60px] px-4 border-b border-[#1A1A28]">
        <div className="flex items-center gap-3 overflow-hidden">
          <div className="w-9 h-9 rounded-[10px] bg-gradient-to-br from-[#3B82F6] to-[#2563EB] flex items-center justify-center shrink-0 shadow-[0_2px_8px_rgba(59,130,246,0.3)]">
            <span className="text-white font-bold text-[14px]">Ω</span>
          </div>
          <span
            className={cn(
              "text-[14px] font-semibold text-[#E0E0E8] whitespace-nowrap transition-all duration-250",
              collapsed
                ? "opacity-0 w-0 overflow-hidden"
                : "opacity-100"
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
                  ? "bg-[#3B82F6]/10 text-[#3B82F6]"
                  : "text-[#6B6B85] hover:text-[#B0B0C5] hover:bg-[#16161F]"
              )}
            >
              {/* Active indicator bar */}
              {isActive && !collapsed && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-5 bg-[#3B82F6] rounded-r-full" />
              )}
              <Icon className="w-[18px] h-[18px] shrink-0" />
              <span
                className={cn(
                  "whitespace-nowrap transition-all duration-250",
                  collapsed
                    ? "opacity-0 w-0 overflow-hidden"
                    : "opacity-100"
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
          "border-t border-[#1A1A28] transition-all duration-250",
          collapsed
            ? "opacity-0 h-0 overflow-hidden p-0"
            : "opacity-100 px-4 py-4"
        )}
      >
        {/* Legal Section */}
        <div className="mb-3">
          <p className="text-[10px] font-semibold text-[#3A3A50] uppercase tracking-widest mb-2">
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
                className="block text-[11px] text-[#4A4A60] hover:text-[#8A8AA3] transition-colors duration-150"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* User Info */}
        <div className="pt-3 border-t border-[#1A1A28]">
          <p className="text-[12px] text-[#8A8AA3] truncate">{userInfo.email}</p>
          <p className="text-[10px] text-[#4A4A60] mt-0.5">{userInfo.status}</p>
          <button className="mt-2.5 flex items-center gap-2 text-[11px] text-[#4A4A60] hover:text-[#8A8AA3] transition-colors duration-150 group">
            <LogOut className="w-3.5 h-3.5 group-hover:text-[#EF4444] transition-colors" />
            <span>Sign Out</span>
          </button>
          <div className="mt-3 space-y-0.5">
            <p className="text-[10px] text-[#2E2E42]">
              Omega version: {userInfo.omegaVersion}
            </p>
            <p className="text-[10px] text-[#2E2E42]">
              AI package version: {userInfo.aiPackageVersion}
            </p>
          </div>
        </div>
      </div>

      {/* Collapse Toggle Button */}
      <button
        onClick={onToggle}
        className={cn(
          "absolute -right-3 top-[76px] z-10",
          "w-6 h-6 rounded-full bg-[#16161F] border border-[#2A2A3C]",
          "flex items-center justify-center",
          "text-[#5A5A73] hover:text-[#F0F0F5] hover:border-[#3B82F6]/50",
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
