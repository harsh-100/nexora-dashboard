"use client";

import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface CreatePopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CreatePopup({ isOpen, onClose }: CreatePopupProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Popup */}
      <div
        className={cn(
          "relative z-10 w-full max-w-md mx-4",
          "bg-bg-elevated border border-border-default rounded-2xl",
          "shadow-2xl p-6",
          "animate-fade-in-scale"
        )}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-lg text-text-tertiary hover:text-text-primary hover:bg-bg-hover transition-colors duration-150"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-text-primary">
            Create New Item
          </h2>
          <p className="text-sm text-text-secondary mt-1">
            Start a new project item with pre-configured templates.
          </p>
        </div>

        {/* Form Fields (Mock) */}
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-text-secondary mb-1.5">
              Item Name
            </label>
            <input
              type="text"
              placeholder="Enter item name..."
              className={cn(
                "w-full px-3 py-2.5 rounded-lg text-sm",
                "bg-bg-tertiary border border-border-default",
                "text-text-primary placeholder:text-text-muted",
                "focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30",
                "transition-all duration-200"
              )}
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-text-secondary mb-1.5">
              Category
            </label>
            <select
              className={cn(
                "w-full px-3 py-2.5 rounded-lg text-sm appearance-none",
                "bg-bg-tertiary border border-border-default",
                "text-text-primary",
                "focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30",
                "transition-all duration-200"
              )}
            >
              <option>Requirements Engineering</option>
              <option>Architecture and Design</option>
              <option>Implementation</option>
              <option>Testing</option>
              <option>Deployment & Release</option>
            </select>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 mt-6 pt-4 border-t border-border-subtle">
          <button
            onClick={onClose}
            className={cn(
              "flex-1 px-4 py-2.5 rounded-lg text-sm font-medium",
              "bg-accent text-white",
              "hover:bg-accent-hover active:scale-[0.97]",
              "transition-all duration-200"
            )}
          >
            Create Item
          </button>
          <button
            onClick={onClose}
            className={cn(
              "px-4 py-2.5 rounded-lg text-sm",
              "border border-border-default text-text-secondary",
              "hover:text-text-primary hover:bg-bg-hover",
              "transition-all duration-200"
            )}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
