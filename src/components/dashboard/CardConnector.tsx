"use client";

import { cn } from "@/lib/utils";

interface CardConnectorProps {
  direction?: "horizontal" | "down-right" | "down-left";
  visible?: boolean;
}

export default function CardConnector({
  direction = "horizontal",
  visible = true,
}: CardConnectorProps) {
  if (!visible) return null;

  if (direction === "horizontal") {
    return (
      <div className="absolute -right-5 top-1/2 -translate-y-1/2 z-10 flex items-center">
        {/* Animated line */}
        <div className="w-6 h-[2px] relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#2A2A3C] via-[#3B82F6]/40 to-[#2A2A3C]" />
          <div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-[#3B82F6]/60 to-transparent"
            style={{
              animation: "shimmer 2s ease-in-out infinite",
              backgroundSize: "200% 100%",
            }}
          />
        </div>
        {/* Arrow head */}
        <svg
          width="8"
          height="10"
          viewBox="0 0 8 10"
          fill="none"
          className="-ml-0.5"
        >
          <path
            d="M1 1L6 5L1 9"
            stroke="#3B82F6"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.45"
          />
        </svg>
      </div>
    );
  }

  return null;
}
