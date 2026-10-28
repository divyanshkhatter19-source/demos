"use client";

import React, { useState } from "react";
import { PRODUCTS, Product } from "@/data/products";
import { BAKE_STAGES } from "@/data/schedule";
import { ProductCard } from "@/components/ProductCard";

export default function MenuPage() {
  const [selectedDate, setSelectedDate] = useState<"sat" | "wed">("sat");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedDiet, setSelectedDiet] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<string>("picks");

  // Filtering
  let filtered = PRODUCTS.filter((p) => {
    if (selectedCategory !== "all" && p.category !== selectedCategory) {
      return false;
    }
    if (selectedDiet && !p.dietTags.includes(selectedDiet)) {
      return false;
    }
    return true;
  });

  // Sorting
  filtered.sort((a, b) => {
    if (sortBy === "price-asc") return a.price - b.price;
    if (sortBy === "price-desc") return b.price - a.price;
    if (sortBy === "sellout") {
      const remainingA = a.totalBatch - a.claimed;
      const remainingB = b.totalBatch - b.claimed;
      return remainingA - remainingB;
    }
    // "picks" (signature first)
    if (a.isSignature && !b.isSignature) return -1;
    if (!a.isSignature && b.isSignature) return 1;
    return 0;
  });

  const categories = [
    { id: "all", label: `All Drops (${PRODUCTS.length})` },
    { id: "sourdough", label: "Signature Sourdough" },
    { id: "viennoiserie", label: "Laminated Viennoiserie" },
    { id: "focaccia", label: "Focaccia & Savory" },
    { id: "pantry", label: "Pantry & Starters" },
  ];

  const dietOptions = [
    { id: "Vegan", icon: "eco", label: "Vegan" },
    { id: "Whole Grain", icon: "grain", label: "Whole Grain" },
    { id: "Ancient Grains", icon: "spa", label: "Ancient Grains" },
    { id: "Nut-Free", icon: "check_circle", label: "Nut-Free" },
  ];

  return (
    <div className="flex flex-col w-full pb-space-xl">
      {/* Fermentation Timeline Track */}
      <section className="max-w-7xl mx-auto w-full px-margin py-space-md">
        <div className="bg-surface-container rounded-xl p-space-md shadow-sm border border-outline-variant/30">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md">
            <div className="flex items-start gap-space-sm max-w-md">
              <div className="p-space-xs rounded-full bg-primary-container text-on-primary flex items-center justify-center shrink-0 mt-0.5">
                <span className="material-symbols-outlined text-[20px]">local_fire_department</span>
              </div>
              <div>
                <div className="flex items-center gap-space-xs">
                  <span className="text-xs uppercase font-bold tracking-wider text-primary">
                    Micro-Bake Schedule · Batch #114
                  </span>
                  <span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-[10px] font-bold bg-tertiary-fixed text-on-tertiary-fixed">
                    Live Ferment
                  </span>
                </div>
                <p className="font-headline text-lg font-bold text-on-surface">
                  The 48-Hour Deliberate Cycle
                </p>
                <p className="text-xs text-on-surface-variant">
                  Every loaf is shaped by hand and cold-fermented for open wild crumb. Pre-order before flour hits water.
                </p>
              </div>
            </div>

            {/* Stages Track */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-space-xs w-full lg:w-auto overflow-x-auto pb-1 lg:pb-0">
              {BAKE_STAGES.map((s, idx) => (
                <div
                  key={idx}
                  className={`flex flex-col p-space-xs rounded-lg min-w-[100px] text-center border ${
                    s.current
                      ? "bg-primary-container text-on-primary-container shadow-sm border-primary"
                      : "bg-surface-container-low text-on-surface border-outline-variant/20"
                  }`}
                >
                  <span
                    className={`text-[10px] uppercase font-bold ${
                      s.current ? "text-tertiary-fixed" : "text-primary"
                    }`}
                  >
                    {s.time}
                  </span>
                  <span className="text-xs font-bold leading-tight mt-0.5">
                    {s.step}
                  </span>
                  <span
                    className={`text-[10px] leading-tight ${
                      s.current ? "text-on-primary-container/80" : "text-on-surface-variant"
                    }`}
                  >
                    {s.detail}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Control Room: Date Selector & Sort */}
      <section className="max-w-7xl mx-auto w-full px-margin pt-space-xs pb-space-lg">
        <div className="flex flex-col gap-space-md">
          {/* Row 1: Drop Window Selector & Sort */}
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-space-md bg-surface-container-lowest p-space-md rounded-xl shadow-sm border border-outline-variant/30">
            <div className="flex items-center gap-space-sm overflow-x-auto pb-1 md:pb-0">
              <span className="text-xs font-bold uppercase tracking-wider text-on-surface-variant whitespace-nowrap">
                Bake Date:
              </span>
              <button
                type="button"
                onClick={() => setSelectedDate("sat")}
                className={`flex items-center gap-space-xs px-space-md py-space-xs rounded-lg text-left transition-all shadow-sm ${
                  selectedDate === "sat"
                    ? "bg-primary-container text-on-primary-container ring-2 ring-primary"
                    : "bg-surface-container hover:bg-surface-container-high text-on-surface"
                }`}
              >
                <span className="material-symbols-outlined text-[18px]">calendar_today</span>
                <div>
                  <p className="text-xs font-bold leading-none">Saturday, Oct 28</p>
                  <p className="text-[10px] text-on-primary-container/80 leading-tight">
                    Morning Deck Bake (8:00 AM – 1:30 PM)
                  </p>
                </div>
                <span className="ml-space-xs px-1.5 py-0.5 rounded text-[10px] font-bold bg-secondary text-on-secondary">
                  82% Claimed
                </span>
              </button>

              <button
                type="button"
                onClick={() => setSelectedDate("wed")}
                className={`flex items-center gap-space-xs px-space-md py-space-xs rounded-lg text-left transition-all ${
                  selectedDate === "wed"
                    ? "bg-primary-container text-on-primary-container ring-2 ring-primary"
                    : "bg-surface-container hover:bg-surface-container-high text-on-surface"
                }`}
              >
                <span className="material-symbols-outlined text-[18px] text-on-surface-variant">
                  event_available
                </span>
                <div>
                  <p className="text-xs font-bold leading-none">Wednesday, Nov 1</p>
                  <p className="text-[10px] text-on-surface-variant leading-tight">
                    Twilight Hearth Drop (4:00 PM – 7:00 PM)
                  </p>
                </div>
                <span className="ml-space-xs px-1.5 py-0.5 rounded text-[10px] font-semibold bg-surface-container-highest text-on-surface-variant">
                  Pre-orders Open
                </span>
              </button>
            </div>

            {/* Sort Select */}
            <div className="flex items-center gap-space-sm shrink-0 self-end md:self-auto">
              <label htmlFor="catalog-sort" className="text-xs text-on-surface-variant font-medium whitespace-nowrap">
                Sort by:
              </label>
              <div className="relative">
                <select
                  id="catalog-sort"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-surface-container px-space-md py-space-xs pr-8 rounded-lg text-xs font-semibold text-on-surface focus:outline-none cursor-pointer border border-outline-variant/30"
                >
                  <option value="sellout">Earliest Sellout First</option>
                  <option value="picks">Baker's Signature Choice</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                </select>
                <span className="material-symbols-outlined text-[18px] text-on-surface-variant absolute right-2 top-2 pointer-events-none">
                  expand_more
                </span>
              </div>
            </div>
          </div>

          {/* Row 2: Categories Nav & Dietary Pill Badges */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md">
            {/* Category Tabs */}
            <div className="flex items-center gap-space-xs overflow-x-auto pb-1 lg:pb-0">
              {categories.map((c) => (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => setSelectedCategory(c.id)}
                  className={`px-space-md py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-colors ${
                    selectedCategory === c.id
                      ? "bg-on-background text-background"
                      : "bg-surface-container-high hover:bg-surface-container text-on-surface-variant"
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>

            {/* Dietary Check Toggles */}
            <div className="flex items-center gap-space-xs overflow-x-auto">
              <span className="text-[11px] text-outline uppercase tracking-wider shrink-0 mr-1 font-bold">
                Flour Profile:
              </span>
              {dietOptions.map((d) => {
                const isSelected = selectedDiet === d.id;
                return (
                  <button
                    key={d.id}
                    type="button"
                    onClick={() => setSelectedDiet(isSelected ? null : d.id)}
                    className={`px-space-sm py-1 rounded-md text-[11px] font-bold flex items-center gap-1 transition-colors border ${
                      isSelected
                        ? "bg-primary-container text-on-primary-container border-primary"
                        : "bg-surface-container hover:bg-surface-container-high text-on-surface border-outline-variant/20"
                    }`}
                  >
                    <span className="material-symbols-outlined text-[14px]">
                      {d.icon}
                    </span>
                    {d.label}
                  </button>
                );
              })}
              {selectedDiet && (
                <button
                  type="button"
                  onClick={() => setSelectedDiet(null)}
                  className="text-xs text-secondary underline ml-1"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Catalog Grid */}
      <section className="max-w-7xl mx-auto w-full px-margin">
        {filtered.length === 0 ? (
          <div className="text-center py-space-xl bg-surface-container rounded-xl">
            <p className="font-headline text-xl text-on-surface">No bakes match your filters</p>
            <button
              onClick={() => {
                setSelectedCategory("all");
                setSelectedDiet(null);
              }}
              className="mt-space-md text-xs font-bold text-primary underline"
            >
              Reset all filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-lg">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

