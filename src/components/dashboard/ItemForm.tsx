"use client";

import { useState } from "react";
import { ArrowLeft, Save, X, Check } from "lucide-react";
import { ProjectItem } from "@/data/items";
import { cn, formatDate } from "@/lib/utils";

interface ItemFormProps { item: ProjectItem; onBack: () => void; }

export default function ItemForm({ item, onBack }: ItemFormProps) {
  const [showToast, setShowToast] = useState(false);

  const handleSave = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const inputClasses = cn(
    "w-full px-4 py-3 rounded-[12px] text-[14px]",
    "bg-bg-raised border border-border-default",
    "text-text-primary placeholder:text-text-invisible",
    "focus:outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/10",
    "transition-all duration-200"
  );

  return (
    <div className="animate-fade-in">
      {/* Top Bar */}
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={onBack}
          className="flex items-center gap-2 px-3.5 py-2 rounded-[10px] text-[13px] font-medium text-text-muted bg-bg-raised border border-border-default hover:text-text-primary hover:border-border-strong hover:bg-bg-hover transition-all duration-200"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to List</span>
        </button>
        <span className="text-[11px] text-text-invisible font-medium uppercase tracking-wider">Item Detail</span>
      </div>

      {/* Form Card */}
      <div className="rounded-[20px] border border-border-default bg-bg-surface overflow-hidden">
        {/* Header */}
        <div className="px-8 py-6 border-b border-border-subtle bg-bg-surface-2">
          <h3 className="text-[18px] font-semibold text-text-primary tracking-[-0.01em]">{item.name}</h3>
          <p className="text-[13px] text-text-faint mt-1">{item.category} · Last updated {formatDate(item.lastUpdated)}</p>
        </div>

        {/* Fields */}
        <div className="px-8 py-7 space-y-6">
          <div>
            <label className="block text-[12px] font-medium text-text-subtle mb-2 uppercase tracking-wider">Title</label>
            <input type="text" defaultValue={item.name} className={inputClasses} />
          </div>
          <div>
            <label className="block text-[12px] font-medium text-text-subtle mb-2 uppercase tracking-wider">Description</label>
            <textarea rows={4} defaultValue={item.description} className={cn(inputClasses, "resize-none leading-relaxed text-text-secondary")} />
          </div>
          <div className="grid grid-cols-2 gap-5">
            <div>
              <label className="block text-[12px] font-medium text-text-subtle mb-2 uppercase tracking-wider">Status</label>
              <select defaultValue={item.status} className={cn(inputClasses, "appearance-none cursor-pointer")}>
                <option value="active">Active</option>
                <option value="pending">Pending</option>
                <option value="draft">Draft</option>
                <option value="completed">Completed</option>
                <option value="failed">Failed</option>
              </select>
            </div>
            <div>
              <label className="block text-[12px] font-medium text-text-subtle mb-2 uppercase tracking-wider">Owner</label>
              <input type="text" defaultValue={item.owner} className={inputClasses} />
            </div>
          </div>
          <div>
            <label className="block text-[12px] font-medium text-text-subtle mb-2 uppercase tracking-wider">Last Updated</label>
            <input type="text" value={formatDate(item.lastUpdated)} readOnly className="w-full px-4 py-3 rounded-[12px] text-[14px] bg-bg-surface border border-border-subtle text-text-faint cursor-not-allowed" />
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-center gap-4 px-8 py-5 border-t border-border-subtle bg-bg-surface-2">
          <button
            onClick={onBack}
            className="flex items-center gap-2 px-5 py-2.5 rounded-[12px] text-[13px] font-medium bg-bg-raised border border-border-default text-text-muted hover:text-text-primary hover:bg-bg-hover hover:border-border-strong transition-all duration-200"
          >
            <X className="w-3.5 h-3.5" />
            <span>Cancel</span>
          </button>
          <button
            onClick={handleSave}
            className="flex items-center gap-2 px-6 py-2.5 rounded-[12px] text-[13px] font-semibold bg-accent text-white hover:bg-accent-hover active:scale-[0.97] transition-all duration-200"
            style={{ boxShadow: "var(--shadow-button)" }}
          >
            <Save className="w-4 h-4" />
            <span>Save Changes</span>
          </button>
        </div>
      </div>

      {/* Toast */}
      {showToast && (
        <div
          className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-3.5 rounded-[14px] bg-bg-overlay border border-status-active/30 animate-slide-up"
          style={{ boxShadow: "var(--shadow-toast)" }}
        >
          <div className="w-7 h-7 rounded-full bg-status-active-bg flex items-center justify-center">
            <Check className="w-4 h-4 text-status-active" />
          </div>
          <div>
            <p className="text-[13px] font-medium text-text-primary">Changes saved successfully</p>
            <p className="text-[11px] text-text-faint">Item has been updated</p>
          </div>
        </div>
      )}
    </div>
  );
}
