"use client";

import { useState } from "react";
import { ArrowLeft, Save, X, Check } from "lucide-react";
import { ProjectItem } from "@/data/items";
import { cn, formatDate } from "@/lib/utils";

interface ItemFormProps {
  item: ProjectItem;
  onBack: () => void;
}

export default function ItemForm({ item, onBack }: ItemFormProps) {
  const [showToast, setShowToast] = useState(false);

  const handleSave = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <div className="animate-fade-in">
      {/* Top Bar — Back + Title */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <button
            onClick={onBack}
            className={cn(
              "flex items-center gap-2 px-3.5 py-2 rounded-[10px] text-[13px] font-medium",
              "text-[#8A8AA3] bg-[#14141E] border border-[#1F1F2E]",
              "hover:text-[#F0F0F5] hover:border-[#2A2A3C] hover:bg-[#1A1A25]",
              "transition-all duration-200"
            )}
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to List</span>
          </button>
        </div>
        <span className="text-[11px] text-[#3A3A4E] font-medium uppercase tracking-wider">
          Item Detail
        </span>
      </div>

      {/* Form Card */}
      <div className="rounded-[20px] border border-[#1F1F2E] bg-[#0E0E16] overflow-hidden">
        {/* Form Header */}
        <div className="px-8 py-6 border-b border-[#1A1A28] bg-[#111119]">
          <h3 className="text-[18px] font-semibold text-[#F0F0F5] tracking-[-0.01em]">
            {item.name}
          </h3>
          <p className="text-[13px] text-[#5A5A73] mt-1">
            {item.category} · Last updated {formatDate(item.lastUpdated)}
          </p>
        </div>

        {/* Form Fields */}
        <div className="px-8 py-7 space-y-6">
          {/* Title */}
          <div>
            <label className="block text-[12px] font-medium text-[#6B6B85] mb-2 uppercase tracking-wider">
              Title
            </label>
            <input
              type="text"
              defaultValue={item.name}
              className={cn(
                "w-full px-4 py-3 rounded-[12px] text-[14px]",
                "bg-[#14141E] border border-[#1F1F2E]",
                "text-[#F0F0F5] placeholder:text-[#3A3A4E]",
                "focus:outline-none focus:border-[#3B82F6]/50 focus:ring-2 focus:ring-[#3B82F6]/10",
                "transition-all duration-200"
              )}
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-[12px] font-medium text-[#6B6B85] mb-2 uppercase tracking-wider">
              Description
            </label>
            <textarea
              rows={4}
              defaultValue={item.description}
              className={cn(
                "w-full px-4 py-3 rounded-[12px] text-[14px] resize-none leading-relaxed",
                "bg-[#14141E] border border-[#1F1F2E]",
                "text-[#C0C0D0] placeholder:text-[#3A3A4E]",
                "focus:outline-none focus:border-[#3B82F6]/50 focus:ring-2 focus:ring-[#3B82F6]/10",
                "transition-all duration-200"
              )}
            />
          </div>

          {/* Two-column row */}
          <div className="grid grid-cols-2 gap-5">
            {/* Status */}
            <div>
              <label className="block text-[12px] font-medium text-[#6B6B85] mb-2 uppercase tracking-wider">
                Status
              </label>
              <select
                defaultValue={item.status}
                className={cn(
                  "w-full px-4 py-3 rounded-[12px] text-[14px] appearance-none cursor-pointer",
                  "bg-[#14141E] border border-[#1F1F2E]",
                  "text-[#F0F0F5]",
                  "focus:outline-none focus:border-[#3B82F6]/50 focus:ring-2 focus:ring-[#3B82F6]/10",
                  "transition-all duration-200"
                )}
              >
                <option value="active">Active</option>
                <option value="pending">Pending</option>
                <option value="draft">Draft</option>
                <option value="completed">Completed</option>
                <option value="failed">Failed</option>
              </select>
            </div>

            {/* Owner */}
            <div>
              <label className="block text-[12px] font-medium text-[#6B6B85] mb-2 uppercase tracking-wider">
                Owner
              </label>
              <input
                type="text"
                defaultValue={item.owner}
                className={cn(
                  "w-full px-4 py-3 rounded-[12px] text-[14px]",
                  "bg-[#14141E] border border-[#1F1F2E]",
                  "text-[#F0F0F5] placeholder:text-[#3A3A4E]",
                  "focus:outline-none focus:border-[#3B82F6]/50 focus:ring-2 focus:ring-[#3B82F6]/10",
                  "transition-all duration-200"
                )}
              />
            </div>
          </div>

          {/* Last Updated (Read-only) */}
          <div>
            <label className="block text-[12px] font-medium text-[#6B6B85] mb-2 uppercase tracking-wider">
              Last Updated
            </label>
            <input
              type="text"
              value={formatDate(item.lastUpdated)}
              readOnly
              className={cn(
                "w-full px-4 py-3 rounded-[12px] text-[14px]",
                "bg-[#0E0E16] border border-[#1A1A28]",
                "text-[#5A5A73] cursor-not-allowed"
              )}
            />
          </div>
        </div>

        {/* Form Actions */}
        <div className="flex items-center justify-between px-8 py-5 border-t border-[#1A1A28] bg-[#111119]">
          <button
            onClick={onBack}
            className={cn(
              "flex items-center gap-2 px-5 py-2.5 rounded-[12px] text-[13px] font-medium",
              "bg-[#14141E] border border-[#1F1F2E] text-[#8A8AA3]",
              "hover:text-[#F0F0F5] hover:bg-[#1A1A25] hover:border-[#2A2A3C]",
              "transition-all duration-200"
            )}
          >
            <X className="w-3.5 h-3.5" />
            <span>Cancel</span>
          </button>

          <button
            onClick={handleSave}
            className={cn(
              "flex items-center gap-2 px-6 py-2.5 rounded-[12px] text-[13px] font-semibold",
              "bg-[#3B82F6] text-white",
              "hover:bg-[#2563EB] active:scale-[0.97]",
              "transition-all duration-200",
              "shadow-[0_2px_12px_rgba(59,130,246,0.25)]"
            )}
          >
            <Save className="w-4 h-4" />
            <span>Save Changes</span>
          </button>
        </div>
      </div>

      {/* Toast Notification */}
      {showToast && (
        <div
          className={cn(
            "fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-3.5 rounded-[14px]",
            "bg-[#16161F] border border-[#22C55E]/30",
            "shadow-[0_12px_40px_rgba(0,0,0,0.5)]",
            "animate-slide-up"
          )}
        >
          <div className="w-7 h-7 rounded-full bg-[#22C55E]/15 flex items-center justify-center">
            <Check className="w-4 h-4 text-[#22C55E]" />
          </div>
          <div>
            <p className="text-[13px] font-medium text-[#F0F0F5]">
              Changes saved successfully
            </p>
            <p className="text-[11px] text-[#5A5A73]">
              Item has been updated
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
