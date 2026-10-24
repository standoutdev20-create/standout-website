
"use client";

import { SlidersHorizontal } from "lucide-react";

export default function WorkFilter({
  filters = ["All", "Website", "Product"],
  activeFilter,
  onFilterChange,
}) {
  return (
    <div className="flex flex-col gap-4 border-b border-slate-200 pb-6 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-2 text-sm font-semibold text-slate-600">
        <SlidersHorizontal size={17} className="text-blue-600" />
        Explore by category
      </div>

      <div className="flex flex-wrap gap-2">
        {filters.map((filter) => {
          const active = activeFilter === filter;

          return (
            <button
              key={filter}
              type="button"
              onClick={() => onFilterChange(filter)}
              aria-pressed={active}
              className={`rounded-xl border px-4 py-2.5 text-sm font-semibold transition-all duration-300 ${
                active
                  ? "border-[#2563EB] bg-[#2563EB] text-white shadow-md shadow-blue-600/15"
                  : "border-slate-200 bg-white text-slate-600 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
              }`}
            >
              {filter}
            </button>
          );
        })}
      </div>
    </div>
  );
}
