"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import { PRODUCTS, Product } from "@/data/products";
import { useCart } from "@/context/CartContext";

export default function ProductDetailPage() {
  const params = useParams();
  const { addToCart, toastMessage } = useCart();

  // Find product by id or fallback to first
  const product =
    PRODUCTS.find((p) => p.id === params.id) ||
    PRODUCTS.find((p) => p.id === "heritage-spelt-boule") ||
    PRODUCTS[0];

  const gallery = product.galleryImages || [
    {
      src: product.image,
      alt: product.name,
      label: "1 of 1 Perspective: Signature View",
    },
  ];

  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);
  const [slicePreference, setSlicePreference] = useState<"unsliced" | "thick" | "standard">("unsliced");
  const [addons, setAddons] = useState<{ [key: string]: boolean }>({});
  const [pickupSlot, setPickupSlot] = useState<"slot_morning" | "slot_midday">("slot_morning");
  const [qty, setQty] = useState(1);

  const addonOptions = [
    {
      id: "butter",
      name: "Artisan Salted Cultured Butter",
      desc: "84% butterfat churned cream with flaked sea salt (200g)",
      price: 6.0,
    },
    {
      id: "honey",
      name: "Local Wildflower Blossom Honey",
      desc: "Raw unfiltered nectar from Skagit Valley apiaries (250g)",
      price: 9.0,
    },
    {
      id: "linen_bag",
      name: "Linen Bread Storage Bag",
      desc: "Pure natural flax linen with drawstring; retains crust snap",
      price: 14.0,
    },
  ];

  const handleToggleAddon = (id: string) => {
    setAddons((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const selectedAddonsList = addonOptions
    .filter((a) => addons[a.id])
    .map((a) => ({ name: a.name, price: a.price }));

  const addonsTotal = selectedAddonsList.reduce((sum, a) => sum + a.price, 0);
  const totalPrice = (product.price * qty) + addonsTotal;

  const handleAdjustQty = (delta: number) => {
    setQty((prev) => Math.max(1, Math.min(6, prev + delta)));
  };

  const handleAddToCart = () => {
    addToCart(product, qty, slicePreference, selectedAddonsList);
  };

  return (
    <div className="flex flex-col w-full pb-32">
      <div className="max-w-7xl mx-auto w-full px-margin py-space-md">
        {/* Breadcrumb Bar */}
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-space-xs text-on-surface-variant mb-space-lg text-xs"
        >
          <Link href="/menu" className="hover:text-primary transition-colors font-medium">
            Menu
          </Link>
          <span className="material-symbols-outlined text-[14px] text-outline-variant">
            chevron_right
          </span>
          <Link href="/menu" className="hover:text-primary transition-colors font-medium">
            Signature Sourdough
          </Link>
          <span className="material-symbols-outlined text-[14px] text-outline-variant">
            chevron_right
          </span>
          <span className="text-primary font-bold">{product.name}</span>
        </nav>

        {/* Main Two-Column Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
          {/* Left Column: Gallery & Baker's Log (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col gap-space-md">
            {/* Main Image Stage */}
            <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-sm bg-surface-container border border-outline-variant/30">
              <img
                src={gallery[activeGalleryIndex].src}
                alt={gallery[activeGalleryIndex].alt}
                className="w-full h-full object-cover transition-all duration-500 ease-out"
              />
              <div className="absolute top-space-md left-space-md flex flex-wrap gap-space-xs">
                <span className="bg-surface/90 backdrop-blur-md px-space-sm py-1 rounded-full text-xs font-bold text-primary uppercase shadow-sm">
                  Stone Hearth Batch #104
                </span>
              </div>
              <div className="absolute bottom-space-md right-space-md bg-surface/90 backdrop-blur-md px-space-sm py-1 rounded-lg text-on-surface flex items-center gap-1 shadow-sm text-xs font-semibold">
                <span className="material-symbols-outlined text-[16px] text-primary">
                  photo_camera
                </span>
                <span>{gallery[activeGalleryIndex].label}</span>
              </div>
            </div>

            {/* Thumbnails */}
            {gallery.length > 1 && (
              <div className="grid grid-cols-4 gap-space-sm">
                {gallery.map((img, idx) => {
                  const isActive = idx === activeGalleryIndex;
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setActiveGalleryIndex(idx)}
                      className={`relative aspect-square rounded-lg overflow-hidden shadow-sm bg-surface-container group focus:outline-none border-2 transition-all ${
                        isActive ? "border-primary" : "border-transparent opacity-70 hover:opacity-100"
                      }`}
                    >
                      <img
                        src={img.src}
                        alt={img.alt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                      <span className="absolute bottom-1 left-1 right-1 text-[10px] text-center bg-surface/85 rounded py-0.5 text-on-surface font-semibold truncate px-1">
                        {img.label.split(":")[1]?.trim() || `View ${idx + 1}`}
                      </span>
                    </button>
                  );
                })}
              </div>
            )}

            {/* Baker's Sensory Log Panel */}
            <div className="bg-surface-container-low rounded-xl p-space-lg shadow-sm border border-outline-variant/20 mt-space-sm">
              <div className="flex items-center gap-space-sm mb-space-sm">
                <span className="material-symbols-outlined text-primary text-[22px]">
                  menu_book
                </span>
                <h3 className="font-headline text-xl text-on-surface font-semibold">
                  From the Baker's Log
                </h3>
              </div>
              <p className="font-body text-sm text-on-surface-variant italic mb-space-md leading-relaxed">
                "Batch #104 marries our hearty Skagit Valley Spelt with Cairnspring Mills Trailblazer flour. Fermented slowly over two chilly nights in cedar drawers to coax out notes of roasted hazelnuts, warm clover, and a subtle milk-caramel tang that pairs majestically with cultured dairy."
              </p>
              <div className="flex items-center justify-between text-on-surface-variant text-xs pt-space-xs border-t border-outline-variant/20">
                <span>Proofed at 52°F · Ambient Retard</span>
                <span className="text-primary font-bold">Head Baker Anselm V.</span>
              </div>
            </div>
          </div>

          {/* Right Column: Customization Form (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-space-lg">
            <div>
              {/* Badges Strip */}
              <div className="flex flex-wrap gap-space-xs mb-space-sm">
                <span className="bg-surface-container-high text-primary text-xs font-bold px-space-sm py-1 rounded-full">
                  Naturally Leavened
                </span>
                <span className="bg-surface-container-high text-on-surface-variant text-xs font-semibold px-space-sm py-1 rounded-full">
                  Cold Fermented 36h
                </span>
                <span className="bg-surface-container-high text-on-surface-variant text-xs font-semibold px-space-sm py-1 rounded-full">
                  Organic Grain Blend
                </span>
              </div>

              <h1 className="font-headline text-3xl sm:text-4xl text-on-surface tracking-tight mb-space-xs font-semibold">
                {product.name}
              </h1>

              <div className="flex items-baseline gap-space-md mb-space-md">
                <span className="font-headline text-3xl text-primary font-bold">
                  ${product.price.toFixed(2)}
                </span>
                <span className="text-xs text-on-surface-variant">
                  {product.weight || "Approx. 880g baked weight"}
                </span>
              </div>

              {/* Inventory Scarcity Callout */}
              <div className="bg-surface-container-highest/60 rounded-lg p-space-sm flex items-center justify-between shadow-sm border border-outline-variant/30">
                <div className="flex items-center gap-space-xs text-on-secondary-container">
                  <span className="material-symbols-outlined text-[20px] text-secondary">
                    local_fire_department
                  </span>
                  <span className="text-xs font-bold text-on-surface">Batch Scarcity</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                  <span className="text-xs text-secondary font-bold">
                    Only {product.totalBatch - product.claimed} loaves remaining for Saturday
                  </span>
                </div>
              </div>
            </div>

            {/* Customization Matrix Form */}
            <form className="flex flex-col gap-space-lg">
              {/* Slicing Selection */}
              <div className="flex flex-col gap-space-sm">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold text-on-surface uppercase tracking-wider">
                    1. Slicing Preference
                  </label>
                  <span className="text-xs text-primary font-semibold">Freshness Choice</span>
                </div>

                <div className="grid grid-cols-1 gap-space-xs">
                  <label
                    className={`relative flex items-start gap-space-sm p-space-md rounded-lg cursor-pointer transition-all border ${
                      slicePreference === "unsliced"
                        ? "bg-surface-container ring-2 ring-primary border-transparent"
                        : "bg-surface-container-low hover:bg-surface-container border-outline-variant/20"
                    }`}
                  >
                    <input
                      type="radio"
                      name="slice_pref"
                      checked={slicePreference === "unsliced"}
                      onChange={() => setSlicePreference("unsliced")}
                      className="mt-1 accent-primary"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-on-surface">
                          Leave Unsliced
                        </span>
                        <span className="bg-primary/10 text-primary text-[10px] font-bold px-2 py-0.5 rounded">
                          Recommended
                        </span>
                      </div>
                      <p className="text-xs text-on-surface-variant mt-0.5">
                        Retains moisture &amp; crust snap up to 5 days on your cutting board.
                      </p>
                    </div>
                  </label>

                  <label
                    className={`relative flex items-start gap-space-sm p-space-md rounded-lg cursor-pointer transition-all border ${
                      slicePreference === "thick"
                        ? "bg-surface-container ring-2 ring-primary border-transparent"
                        : "bg-surface-container-low hover:bg-surface-container border-outline-variant/20"
                    }`}
                  >
                    <input
                      type="radio"
                      name="slice_pref"
                      checked={slicePreference === "thick"}
                      onChange={() => setSlicePreference("thick")}
                      className="mt-1 accent-primary"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-on-surface">
                          Thick Artisan Slice (~3/4 in)
                        </span>
                        <span className="text-[10px] text-on-surface-variant font-medium">
                          Best for Toast
                        </span>
                      </div>
                      <p className="text-xs text-on-surface-variant mt-0.5">
                        Optimal density for poached eggs, hearty tartines, and grilled cheese.
                      </p>
                    </div>
                  </label>

                  <label
                    className={`relative flex items-start gap-space-sm p-space-md rounded-lg cursor-pointer transition-all border ${
                      slicePreference === "standard"
                        ? "bg-surface-container ring-2 ring-primary border-transparent"
                        : "bg-surface-container-low hover:bg-surface-container border-outline-variant/20"
                    }`}
                  >
                    <input
                      type="radio"
                      name="slice_pref"
                      checked={slicePreference === "standard"}
                      onChange={() => setSlicePreference("standard")}
                      className="mt-1 accent-primary"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-on-surface">
                          Standard Slice (1/2 in)
                        </span>
                        <span className="text-[10px] text-on-surface-variant font-medium">
                          Everyday Table
                        </span>
                      </div>
                      <p className="text-xs text-on-surface-variant mt-0.5">
                        Classic sandwich cut, pre-sliced using our stone-ground oil blade.
                      </p>
                    </div>
                  </label>
                </div>
              </div>

              {/* Grain Composition Bar */}
              <div className="flex flex-col gap-space-sm">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold text-on-surface uppercase tracking-wider">
                    2. Grain Composition
                  </label>
                  <span className="text-xs text-on-surface-variant font-medium">100% Unbleached</span>
                </div>

                <div className="bg-surface-container-low rounded-lg p-space-md shadow-sm border border-outline-variant/20">
                  <div className="flex h-3 w-full rounded-full overflow-hidden mb-space-sm bg-surface-container">
                    <div className="bg-primary h-full" style={{ width: "65%" }}></div>
                    <div className="bg-tertiary-container h-full" style={{ width: "25%" }}></div>
                    <div className="bg-secondary h-full" style={{ width: "10%" }}></div>
                  </div>
                  <div className="grid grid-cols-3 gap-space-xs text-center">
                    <div className="flex flex-col items-center">
                      <div className="flex items-center gap-1 text-xs text-on-surface font-bold">
                        <span className="w-2 h-2 rounded-full bg-primary inline-block"></span> 65%
                      </div>
                      <span className="text-[10px] text-on-surface-variant leading-tight">
                        Cairnspring Hard Red
                      </span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="flex items-center gap-1 text-xs text-on-surface font-bold">
                        <span className="w-2 h-2 rounded-full bg-tertiary-container inline-block"></span> 25%
                      </div>
                      <span className="text-[10px] text-on-surface-variant leading-tight">
                        Stoneground Spelt
                      </span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="flex items-center gap-1 text-xs text-on-surface font-bold">
                        <span className="w-2 h-2 rounded-full bg-secondary inline-block"></span> 10%
                      </div>
                      <span className="text-[10px] text-on-surface-variant leading-tight">
                        Mountain Dark Rye
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Add-ons */}
              <div className="flex flex-col gap-space-sm">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold text-on-surface uppercase tracking-wider">
                    3. Artisanal Add-ons
                  </label>
                  <span className="text-xs text-on-surface-variant font-medium">Hearth Pantry</span>
                </div>

                <div className="space-y-space-xs">
                  {addonOptions.map((addon) => {
                    const isChecked = !!addons[addon.id];
                    return (
                      <label
                        key={addon.id}
                        className={`flex items-center justify-between p-space-md rounded-lg cursor-pointer transition-all border ${
                          isChecked
                            ? "bg-surface-container ring-1 ring-primary border-primary"
                            : "bg-surface-container-low hover:bg-surface-container border-outline-variant/20"
                        }`}
                      >
                        <div className="flex items-center gap-space-sm">
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={() => handleToggleAddon(addon.id)}
                            className="w-4 h-4 accent-primary rounded"
                          />
                          <div>
                            <p className="text-xs font-bold text-on-surface">{addon.name}</p>
                            <p className="text-[11px] text-on-surface-variant">{addon.desc}</p>
                          </div>
                        </div>
                        <span className="text-xs font-bold text-primary whitespace-nowrap ml-2">
                          + ${addon.price.toFixed(2)}
                        </span>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* Pickup Window Selection */}
              <div className="flex flex-col gap-space-sm">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold text-on-surface uppercase tracking-wider">
                    4. Saturday Pickup Window
                  </label>
                  <span className="text-xs text-primary font-semibold">Porch Cubby 04</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm">
                  <label
                    onClick={() => setPickupSlot("slot_morning")}
                    className={`relative flex flex-col p-space-md rounded-lg cursor-pointer transition-all border ${
                      pickupSlot === "slot_morning"
                        ? "bg-primary-fixed/40 ring-2 ring-primary border-transparent"
                        : "bg-surface-container-low hover:bg-surface-container border-outline-variant/20"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold text-on-surface">Early Hearth</span>
                      <span className="material-symbols-outlined text-[18px] text-primary">
                        {pickupSlot === "slot_morning" ? "check_circle" : "radio_button_unchecked"}
                      </span>
                    </div>
                    <span className="text-sm font-bold text-primary">8:30 AM – 10:00 AM</span>
                    <span className="text-[11px] text-on-surface-variant mt-0.5">
                      Warm from the deck oven
                    </span>
                  </label>

                  <label
                    onClick={() => setPickupSlot("slot_midday")}
                    className={`relative flex flex-col p-space-md rounded-lg cursor-pointer transition-all border ${
                      pickupSlot === "slot_midday"
                        ? "bg-primary-fixed/40 ring-2 ring-primary border-transparent"
                        : "bg-surface-container-low hover:bg-surface-container border-outline-variant/20"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold text-on-surface">Midday Run</span>
                      <span className="material-symbols-outlined text-[18px] text-primary">
                        {pickupSlot === "slot_midday" ? "check_circle" : "radio_button_unchecked"}
                      </span>
                    </div>
                    <span className="text-sm font-bold text-on-surface">10:00 AM – 12:00 PM</span>
                    <span className="text-[11px] text-on-surface-variant mt-0.5">
                      Full crumb set &amp; ready to cut
                    </span>
                  </label>
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* Deep Bake Specifications Bento Grid */}
        <section className="mt-space-xl pt-space-xl border-t border-outline-variant/20">
          <div className="flex items-center gap-space-sm mb-space-lg">
            <span className="material-symbols-outlined text-primary text-[28px]">science</span>
            <div>
              <h2 className="font-headline text-3xl font-semibold text-on-surface">
                Deep Bake Specifications
              </h2>
              <p className="text-xs text-on-surface-variant">
                The micro-chemistry and provenance behind our signature sourdough
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter mb-space-xl">
            <div className="bg-surface-container-low p-space-lg rounded-xl shadow-sm border border-outline-variant/20">
              <div className="flex items-center justify-between text-on-surface-variant mb-space-sm">
                <span className="text-[11px] uppercase tracking-wider font-bold">Hydration Level</span>
                <span className="material-symbols-outlined text-primary text-[20px]">water_drop</span>
              </div>
              <div className="font-headline text-3xl text-primary font-bold">78%</div>
              <p className="text-xs text-on-surface-variant mt-1">
                High-moisture open crumb with glossy, gelatinized dough cell walls.
              </p>
            </div>

            <div className="bg-surface-container-low p-space-lg rounded-xl shadow-sm border border-outline-variant/20">
              <div className="flex items-center justify-between text-on-surface-variant mb-space-sm">
                <span className="text-[11px] uppercase tracking-wider font-bold">Fermentation Cycle</span>
                <span className="material-symbols-outlined text-primary text-[20px]">hourglass_top</span>
              </div>
              <div className="font-headline text-3xl text-primary font-bold">36 Hours</div>
              <p className="text-xs text-on-surface-variant mt-1">
                Cold retardation breaks down complex starches for gut-friendly digestion.
              </p>
            </div>

            <div className="bg-surface-container-low p-space-lg rounded-xl shadow-sm border border-outline-variant/20">
              <div className="flex items-center justify-between text-on-surface-variant mb-space-sm">
                <span className="text-[11px] uppercase tracking-wider font-bold">Flour Provenance</span>
                <span className="material-symbols-outlined text-primary text-[20px]">agriculture</span>
              </div>
              <div className="font-headline text-2xl text-on-surface font-bold">Pacific NW</div>
              <p className="text-xs text-on-surface-variant mt-1">
                Milled at Cairnspring Mills, Skagit Valley. Cold stone-ground to preserve oils.
              </p>
            </div>

            <div className="bg-surface-container-low p-space-lg rounded-xl shadow-sm border border-outline-variant/20">
              <div className="flex items-center justify-between text-on-surface-variant mb-space-sm">
                <span className="text-[11px] uppercase tracking-wider font-bold">Sensory Notes</span>
                <span className="material-symbols-outlined text-primary text-[20px]">psychology</span>
              </div>
              <div className="font-headline text-2xl text-on-surface font-bold">Nutty &amp; Lactic</div>
              <p className="text-xs text-on-surface-variant mt-1">
                Roasted hazelnuts, subtle buttermilk acidity, bittersweet caramel blister crust.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Sticky Bottom Pre-Order Bar Container */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-surface/95 backdrop-blur-md shadow-[0_-4px_20px_rgba(28,25,23,0.08)] border-t border-outline-variant/30 py-space-md">
        <div className="max-w-7xl mx-auto px-margin flex flex-col sm:flex-row items-center justify-between gap-space-md">
          {/* Left: Summary & Quantity */}
          <div className="flex items-center gap-space-md w-full sm:w-auto justify-between sm:justify-start">
            <div className="flex flex-col">
              <span className="text-[11px] uppercase tracking-wider text-on-surface-variant font-bold">
                Saturday Batch Pre-order
              </span>
              <div className="flex items-baseline gap-space-xs">
                <span className="font-headline text-2xl text-primary font-bold">
                  ${totalPrice.toFixed(2)}
                </span>
                <span className="text-xs text-on-surface-variant font-medium">
                  · {qty} {qty === 1 ? "Boule" : "Boules"} ·{" "}
                  {slicePreference === "unsliced"
                    ? "Unsliced"
                    : slicePreference === "thick"
                    ? "Thick Slice"
                    : "Standard Slice"}
                </span>
              </div>
            </div>

            {/* Quantity Pill */}
            <div className="flex items-center bg-surface-container rounded-full p-1 shadow-inner border border-outline-variant/20">
              <button
                type="button"
                onClick={() => handleAdjustQty(-1)}
                className="w-8 h-8 rounded-full flex items-center justify-center text-on-surface hover:bg-surface transition-colors"
              >
                <span className="material-symbols-outlined text-[18px]">remove</span>
              </button>
              <span className="font-body text-xs font-bold px-space-sm min-w-[28px] text-center">
                {qty}
              </span>
              <button
                type="button"
                onClick={() => handleAdjustQty(1)}
                className="w-8 h-8 rounded-full flex items-center justify-center text-on-surface hover:bg-surface transition-colors"
              >
                <span className="material-symbols-outlined text-[18px]">add</span>
              </button>
            </div>
          </div>

          {/* Right Action */}
          <div className="flex items-center gap-space-sm w-full sm:w-auto">
            <button
              type="button"
              onClick={handleAddToCart}
              className="w-full sm:w-auto flex items-center justify-center gap-space-sm bg-primary-container text-on-primary-container hover:bg-primary hover:text-on-primary text-sm font-bold px-space-xl py-3 rounded-lg shadow-md transition-all active:scale-[0.98]"
            >
              <span className="material-symbols-outlined text-[20px]">shopping_basket</span>
              <span>Reserve Loaf for Saturday</span>
            </button>
            <Link
              href="/checkout"
              className="px-space-md py-3 rounded-lg bg-surface-container-high hover:bg-surface-container-highest text-on-surface text-sm font-semibold transition-colors border border-outline-variant/30"
            >
              Go to Cart
            </Link>
          </div>
        </div>
      </div>

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-24 right-6 z-50 bg-inverse-surface text-inverse-on-surface px-space-lg py-space-sm rounded-lg shadow-xl flex items-center gap-space-sm text-xs font-bold animate-bounce">
          <span className="material-symbols-outlined text-secondary-fixed text-[20px]">
            check_circle
          </span>
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
