"use client";

export default function DashboardPage() {
  return (
    <div className="flex-1 flex items-center justify-center p-8">
      <div className="text-center animate-fade-in">
        <div className="w-16 h-16 rounded-2xl bg-accent-muted flex items-center justify-center mx-auto mb-4">
          <span className="text-3xl">🚀</span>
        </div>
        <h2 className="text-2xl font-bold text-text-primary tracking-tight mb-2">
          Nexora Dashboard
        </h2>
        <p className="text-text-secondary text-sm max-w-md">
          Layout shell is ready. Sidebar collapses, Topbar actions work.
          <br />
          Next up: Navigation Tabs, Mode Tabs, and Overview Cards.
        </p>
        <div className="mt-8 grid grid-cols-3 gap-3 max-w-sm mx-auto">
          {Array.from({ length: 9 }).map((_, i) => (
            <div
              key={i}
              className="h-20 rounded-xl bg-bg-secondary border border-border-default hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300 cursor-pointer"
              style={{ animationDelay: `${i * 60}ms` }}
            />
          ))}
        </div>
        <p className="text-text-muted text-xs mt-6">
          Phase 2 Complete — Cards placeholder above
        </p>
      </div>
    </div>
  );
}
