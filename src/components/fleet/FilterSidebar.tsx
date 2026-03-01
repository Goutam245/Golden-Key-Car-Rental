import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { SlidersHorizontal, X } from "lucide-react";

const categories = ["Economy", "Sedan", "SUV", "Luxury", "Sports", "Van"];
const transmissions = ["Automatic", "Manual"];
const fuels = ["Petrol", "Diesel", "Hybrid", "Electric"];

interface FilterState {
  categories: string[];
  priceRange: [number, number];
  transmissions: string[];
  fuels: string[];
}

interface Props {
  filters: FilterState;
  onChange: (f: FilterState) => void;
  mobileOpen: boolean;
  onClose: () => void;
}

export default function FilterSidebar({ filters, onChange, mobileOpen, onClose }: Props) {
  const toggle = (key: keyof Pick<FilterState, "categories" | "transmissions" | "fuels">, value: string) => {
    const arr = filters[key];
    onChange({
      ...filters,
      [key]: arr.includes(value) ? arr.filter((v) => v !== value) : [...arr, value],
    });
  };

  const reset = () =>
    onChange({ categories: [], priceRange: [0, 1500], transmissions: [], fuels: [] });

  const content = (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-foreground flex items-center gap-2">
          <SlidersHorizontal className="w-4 h-4 text-primary" /> Filters
        </h3>
        <button onClick={reset} className="text-xs text-primary hover:underline">Reset</button>
      </div>

      {/* Categories */}
      <div>
        <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">Category</p>
        <div className="space-y-2">
          {categories.map((c) => (
            <label key={c} className="flex items-center gap-2 cursor-pointer text-sm text-foreground">
              <Checkbox
                checked={filters.categories.includes(c)}
                onCheckedChange={() => toggle("categories", c)}
              />
              {c}
            </label>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">
          Price Range (AED/day)
        </p>
        <Slider
          min={0}
          max={1500}
          step={50}
          value={filters.priceRange}
          onValueChange={(v) => onChange({ ...filters, priceRange: v as [number, number] })}
          className="my-4"
        />
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>AED {filters.priceRange[0]}</span>
          <span>AED {filters.priceRange[1]}</span>
        </div>
      </div>

      {/* Transmission */}
      <div>
        <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">Transmission</p>
        <div className="space-y-2">
          {transmissions.map((t) => (
            <label key={t} className="flex items-center gap-2 cursor-pointer text-sm text-foreground">
              <Checkbox
                checked={filters.transmissions.includes(t)}
                onCheckedChange={() => toggle("transmissions", t)}
              />
              {t}
            </label>
          ))}
        </div>
      </div>

      {/* Fuel */}
      <div>
        <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">Fuel Type</p>
        <div className="space-y-2">
          {fuels.map((f) => (
            <label key={f} className="flex items-center gap-2 cursor-pointer text-sm text-foreground">
              <Checkbox
                checked={filters.fuels.includes(f)}
                onCheckedChange={() => toggle("fuels", f)}
              />
              {f}
            </label>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop */}
      <aside className="hidden lg:block w-64 shrink-0">
        <div className="sticky top-24 bg-card rounded-xl border border-border p-5">
          {content}
        </div>
      </aside>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-foreground/40" onClick={onClose} />
          <div className="absolute right-0 top-0 h-full w-80 bg-card p-5 overflow-y-auto shadow-xl">
            <button onClick={onClose} className="absolute top-4 right-4 text-foreground">
              <X className="w-5 h-5" />
            </button>
            {content}
          </div>
        </div>
      )}
    </>
  );
}
