"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { PRODUCTS } from "@/data/products";
import { WEEKLY_SCHEDULE } from "@/data/schedule";
import { ProductCard } from "@/components/ProductCard";

export default function HomePage() {
  const [timeLeft, setTimeLeft] = useState("14h 22m 18s");

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const hours = 23 - now.getHours();
      const minutes = 59 - now.getMinutes();
      const seconds = 59 - now.getSeconds();
      setTimeLeft(`${hours}h ${minutes}m ${seconds}s`);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const featuredProducts = PRODUCTS.slice(0, 4);

  return (
    <div className="flex flex-col w-full">
      {/* Top Announce / Urgent Drop Alert */}
      <section className="w-full bg-surface-container py-space-sm border-b border-outline-variant/30">
        <div className="max-w-7xl mx-auto px-margin flex flex-wrap items-center justify-between gap-space-sm text-on-surface">
          <div className="flex items-center gap-space-xs">
            <span className="inline-flex w-2.5 h-2.5 rounded-full bg-primary-container animate-pulse"></span>
            <span className="text-xs uppercase font-bold tracking-wider text-primary">
              Micro-Batch Notice
            </span>
            <span className="text-xs text-on-surface-variant hidden sm:inline">
              · Wood-fired brick oven firing starts Friday midnight
            </span>
          </div>

          <div className="flex items-center gap-space-md">
            <div className="flex items-center gap-space-xs bg-surface-container-lowest px-space-sm py-0.5 rounded-full shadow-sm border border-outline-variant/20">
              <span className="material-symbols-outlined text-primary text-[16px]">alarm</span>
              <span className="text-xs text-primary font-bold">
                Saturday Drop Closes: {timeLeft}
              </span>
            </div>
            <a
              href="#schedule"
              className="text-xs text-on-surface hover:text-primary transition-colors hidden md:inline font-semibold"
            >
              View Flour Milling Schedule &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Editorial Hero Section */}
      <section className="relative w-full bg-background pt-space-lg pb-space-xl overflow-hidden border-b border-outline-variant/20">
        <div className="max-w-7xl mx-auto px-margin grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
          {/* Copy Column */}
          <div className="lg:col-span-7 flex flex-col z-10">
            <div className="inline-flex items-center gap-space-xs px-space-sm py-1 bg-surface-container-high rounded-full w-fit mb-space-md shadow-sm border border-outline-variant/20">
              <span className="material-symbols-outlined text-secondary text-[16px]">nature</span>
              <span className="text-xs font-semibold text-on-surface-variant">
                Wild Fermentation · Single-Origin Heritage Grains
              </span>
            </div>

            <h1 className="font-headline text-4xl sm:text-5xl lg:text-6xl text-on-surface tracking-tight mb-space-md font-medium leading-[1.15]">
              Naturally Leavened, <br className="hidden sm:inline" />
              <span className="italic text-primary font-normal">Stone-Milled Bread</span> <br className="hidden sm:inline" />
              Crafted in Small Batches.
            </h1>

            <p className="text-base sm:text-lg text-on-surface-variant max-w-xl mb-space-lg leading-relaxed">
              Baked deliberately at our Oakridge micro-bakehouse. Hand-shaped using 100% freshly stoneground heirloom flour, 36-hour slow proofing, and our 7-year-old sourdough culture ‘Barnaby’.
            </p>

            {/* Pre-order Card Badge & CTAs */}
            <div className="p-space-md bg-surface-container-low rounded-xl mb-space-lg shadow-sm max-w-xl border border-outline-variant/30">
              <div className="flex items-center justify-between mb-space-xs">
                <span className="text-xs uppercase font-bold tracking-wider text-secondary">
                  Next Bake Drop Allocation
                </span>
                <span className="px-space-xs py-0.5 bg-secondary-fixed text-on-secondary-fixed rounded text-xs font-bold">
                  82% Reserved
                </span>
              </div>
              <p className="font-headline text-xl text-on-surface font-semibold mb-space-sm">
                Saturday Morning Hearth Release
              </p>
              <div className="w-full bg-surface-container-highest rounded-full h-2 mb-space-sm overflow-hidden">
                <div className="bg-primary-container h-full rounded-full w-[82%] transition-all duration-1000"></div>
              </div>
              <div className="flex flex-wrap items-center gap-space-sm text-on-surface-variant text-xs font-medium">
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px] text-primary">pin_drop</span>
                  Porch Box #04 Pickup
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px] text-primary">timelapse</span>
                  Saturday 8:00 AM – 1:30 PM
                </span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-space-md">
              <Link
                href="/menu"
                className="px-space-lg py-3 bg-primary-container text-on-primary-container text-sm font-bold rounded-lg shadow-md hover:bg-primary hover:text-on-primary transition-all flex items-center gap-space-xs"
              >
                <span>Pre-Order for Saturday Pickup</span>
                <span className="material-symbols-outlined text-[18px]">east</span>
              </Link>
              <a
                href="#schedule"
                className="px-space-md py-3 bg-surface-container-high text-on-surface text-sm font-semibold rounded-lg hover:bg-surface-container-highest transition-colors border border-outline-variant/30"
              >
                View This Week’s Roster
              </a>
            </div>
          </div>

          {/* Visual Collage Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative w-full h-[460px] rounded-xl overflow-hidden shadow-xl bg-surface-container border border-outline-variant/30">
              <img
                className="w-full h-full object-cover"
                alt="Close up artisanal rustic sourdough boules with blistered crust on linen"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdvOHV2m5d14gcGmAAwJ1X3lMQVFexJ9TsYdQVJ7fnpDrpcrVWpNJH1CDEMnOj5_cOojYDD_WnYHORKg8p7XKIuLKV1F8fbxzpleXuLyhm8X9loR0OblsFDDhLbnAFY3twdf_ZFX-iLLDbuZN0Twu_Ag-YkDwa0lIUhH7A8zIbThR1GwT5ICSTsSTJBOjYuXeA93rAO3M7hdkZ52YqlabGqnUg6xmnaBlNEL0g26yH2XkRBL0tFRQg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

              {/* Floating Pill on Image */}
              <div className="absolute bottom-space-md left-space-md right-space-md bg-surface-container-lowest/95 backdrop-blur-sm p-space-md rounded-xl shadow-lg border border-outline-variant/30">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-[11px] text-primary uppercase font-bold tracking-wider block">
                      Signature Release
                    </span>
                    <Link href="/product/heritage-spelt-boule">
                      <span className="font-headline text-lg font-bold text-on-surface hover:text-primary transition-colors">
                        Spelt &amp; Red Fife Batard
                      </span>
                    </Link>
                    <p className="text-xs text-on-surface-variant mt-0.5">
                      Milled 18 hours prior to bake. Deep nutty hazelnut crumb.
                    </p>
                  </div>
                  <span className="font-headline text-xl text-primary font-bold">
                    $11.50
                  </span>
                </div>
              </div>
            </div>

            {/* Overlapping Wood-Fired Badge */}
            <div className="absolute -top-4 -left-4 bg-surface-container-lowest p-space-sm rounded-xl shadow-md hidden sm:flex items-center gap-space-sm max-w-xs border border-outline-variant/30">
              <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-[22px]">local_fire_department</span>
              </div>
              <div>
                <p className="text-xs text-on-surface font-bold">100% Wood-Fired</p>
                <p className="text-[11px] text-on-surface-variant">Oak &amp; Applewood Embers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bake Schedule Calendar Bar */}
      <section className="w-full bg-surface-container-low py-space-xl border-b border-outline-variant/20" id="schedule">
        <div className="max-w-7xl mx-auto px-margin">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-lg gap-space-sm">
            <div>
              <span className="text-xs uppercase font-bold tracking-wider text-secondary">
                Weekly Micro-Drop Cycle
              </span>
              <h2 className="font-headline text-3xl font-semibold text-on-surface">
                The Weekly Hearth Cadence
              </h2>
            </div>
            <p className="text-sm text-on-surface-variant max-w-md">
              We fire our stone ovens four mornings a week. Loaves proof for 36 hours; reserve early to guarantee your household allocation.
            </p>
          </div>

          {/* Schedule Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md">
            {WEEKLY_SCHEDULE.map((item, idx) => (
              <div
                key={idx}
                className={`p-space-md rounded-xl shadow-sm transition-all flex flex-col justify-between border ${
                  item.isMainDrop
                    ? "bg-primary text-on-primary border-primary relative overflow-hidden"
                    : "bg-surface-container-lowest border-outline-variant/30 hover:shadow-md"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-space-sm">
                    <span
                      className={`text-xs uppercase font-bold ${
                        item.isMainDrop ? "text-primary-fixed" : "text-secondary"
                      }`}
                    >
                      {item.day}
                    </span>
                    <span
                      className={`px-space-xs py-0.5 rounded text-[11px] font-bold ${
                        item.isMainDrop
                          ? "bg-secondary-container text-on-secondary-container"
                          : item.status === "past"
                          ? "bg-surface-container-high text-on-surface-variant"
                          : "bg-secondary-fixed text-on-secondary-fixed"
                      }`}
                    >
                      {item.statusLabel}
                    </span>
                  </div>

                  <h3
                    className={`font-headline text-xl mb-space-xs font-semibold ${
                      item.isMainDrop ? "text-on-primary" : "text-on-surface"
                    }`}
                  >
                    {item.title}
                  </h3>

                  <p
                    className={`text-xs mb-space-md leading-relaxed ${
                      item.isMainDrop ? "text-primary-fixed" : "text-on-surface-variant"
                    }`}
                  >
                    {item.description}
                  </p>
                </div>

                <div
                  className={`pt-space-sm -mx-space-md -mb-space-md p-space-md rounded-b-xl flex items-center justify-between text-xs font-medium ${
                    item.isMainDrop
                      ? "bg-primary-container text-on-primary-container"
                      : "bg-surface-container-low text-on-surface-variant"
                  }`}
                >
                  <span>{item.pickupWindow}</span>
                  {item.isMainDrop ? (
                    <Link href="/menu" className="underline font-bold hover:text-white">
                      Reserve Now &rarr;
                    </Link>
                  ) : (
                    <span>{item.status === "past" ? "Sold Out" : "Standby"}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Batch Cards */}
      <section className="w-full bg-background py-space-xl" id="featured-batches">
        <div className="max-w-7xl mx-auto px-margin">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-lg gap-space-sm">
            <div>
              <span className="text-xs uppercase font-bold tracking-wider text-primary">
                Saturday Batch Roster
              </span>
              <h2 className="font-headline text-3xl font-semibold text-on-surface">
                Fresh From the Hearth
              </h2>
            </div>
            <div className="flex items-center gap-space-xs text-on-surface-variant text-xs font-medium">
              <span className="inline-block w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
              <span>Live Bakery Inventory Updated Every 15 Minutes</span>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">
            {featuredProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>

          <div className="mt-space-lg text-center">
            <Link
              href="/menu"
              className="inline-flex items-center gap-space-xs font-semibold text-primary hover:text-secondary text-sm"
            >
              <span>Explore All 10 Saturday Bakes &amp; Sourdough Drops</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Micro-Bakery Storytelling & Grain Transparency */}
      <section className="w-full bg-surface-container-low py-space-xl border-t border-b border-outline-variant/20">
        <div className="max-w-7xl mx-auto px-margin">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
            {/* Image Column */}
            <div className="lg:col-span-5 relative">
              <div className="relative w-full h-[420px] rounded-xl overflow-hidden shadow-lg bg-surface-container border border-outline-variant/30">
                <img
                  className="w-full h-full object-cover"
                  alt="An artisanal stone grain mill with wooden casing grinding wheat"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZxrGRhwTSnylwLiZ9hn5ZaG2AEZ9Chi7p3x1VRwbF6BER0g4wP64KraIBzWLoh2eMq4YVuUS5e2uP9JwAz2Ns9kHXM00IhLmfCKLEvPTpZoUqm--r0kxfa-8X_ITtvappzesDgjW5ObS2luGLoQ3ZnDxLYJKU7_Plfd2d4ENyAEKzjpYbPtjxx6pXXaa1tHUPuMa6NN34EVkALYsuOXu_yTKgeLPz6MuTiNJwePNr_8ojgmZYpnZR"
                />
              </div>

              {/* Starter Barnaby Badge */}
              <div className="absolute -bottom-6 -right-6 bg-surface-container-lowest p-space-md rounded-xl shadow-md hidden sm:block max-w-xs border border-outline-variant/30">
                <div className="flex items-center gap-space-sm mb-space-xs">
                  <span className="material-symbols-outlined text-primary text-[28px]">biotech</span>
                  <div>
                    <span className="font-headline text-base font-bold text-on-surface block">
                      Starter ‘Barnaby’
                    </span>
                    <span className="text-[11px] text-on-surface-variant">
                      Active since October 2018
                    </span>
                  </div>
                </div>
                <p className="text-xs text-on-surface-variant">
                  Fed twice daily with 100% whole grain rye and pure mountain spring water.
                </p>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-7 flex flex-col">
              <span className="text-xs uppercase font-bold tracking-wider text-primary">
                Flour Craft &amp; Provenance
              </span>
              <h2 className="font-headline text-3xl sm:text-4xl text-on-surface mb-space-md tracking-tight font-medium">
                Nothing Stripped Out. <br />
                Every Grain Has a Name.
              </h2>
              <p className="text-base text-on-surface-variant mb-space-md leading-relaxed">
                Commercial flour sits on warehouse shelves for months, bleached and depleted of live enzymes. We stone-mill certified organic grains in our micro-milling corner just 24 hours before our mixing bowls turn.
              </p>
              <p className="text-sm text-on-surface-variant mb-space-lg leading-relaxed">
                This protects the nutrient-dense germ oil and bran, resulting in a naturally aromatic, deeply golden crumb with complex caramel notes and significantly gentler digestion.
              </p>

              {/* 3 Provenance Pills */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-md">
                <div className="p-space-md bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant/20">
                  <span className="text-[11px] text-secondary uppercase font-bold block mb-1">
                    Skagit Valley, WA
                  </span>
                  <p className="font-headline text-lg font-bold text-on-surface">
                    Red Fife Wheat
                  </p>
                  <p className="text-xs text-on-surface-variant mt-1">
                    Rich cinnamon and dark walnut aromatics.
                  </p>
                </div>

                <div className="p-space-md bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant/20">
                  <span className="text-[11px] text-secondary uppercase font-bold block mb-1">
                    Ancient Heritage Strain
                  </span>
                  <p className="font-headline text-lg font-bold text-on-surface">
                    Einkorn &amp; Spelt
                  </p>
                  <p className="text-xs text-on-surface-variant mt-1">
                    Delicate gluten structure, nutty sweet crumb.
                  </p>
                </div>

                <div className="p-space-md bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant/20">
                  <span className="text-[11px] text-secondary uppercase font-bold block mb-1">
                    Wild Starter Ferment
                  </span>
                  <p className="font-headline text-lg font-bold text-on-surface">
                    36–48 Hours
                  </p>
                  <p className="text-xs text-on-surface-variant mt-1">
                    Slow lactobacillus action breaks down phytic acid.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Porch Pickup Guide & 7-Minute Crust Revival */}
      <section className="w-full bg-background py-space-xl">
        <div className="max-w-7xl mx-auto px-margin">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl">
            {/* Porch Pickup Guidance */}
            <div className="lg:col-span-7 bg-surface-container-low p-space-lg rounded-xl shadow-sm flex flex-col justify-between border border-outline-variant/30">
              <div>
                <div className="flex items-center gap-space-xs text-secondary text-xs uppercase font-bold mb-space-xs">
                  <span className="material-symbols-outlined text-[18px]">cottage</span>
                  <span>Porch Pickup Protocol</span>
                </div>
                <h3 className="font-headline text-2xl font-semibold text-on-surface mb-space-sm">
                  How Front Gate Cubby Collection Works
                </h3>
                <p className="text-sm text-on-surface-variant mb-space-md leading-relaxed">
                  No lines, no sterile packaging. Your warm brown paper bag awaits you in our dedicated insulated porch cubbies on Millers Lane.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-md mb-space-md">
                  <div className="bg-surface-container-lowest p-space-sm rounded-lg border border-outline-variant/20">
                    <span className="font-headline text-xl text-primary mb-1 block font-bold">01</span>
                    <p className="text-xs font-bold text-on-surface">Pre-Order Window</p>
                    <p className="text-[11px] text-on-surface-variant mt-0.5">
                      Lock in your loaves before Saturday 8:00 PM cutoff.
                    </p>
                  </div>
                  <div className="bg-surface-container-lowest p-space-sm rounded-lg border border-outline-variant/20">
                    <span className="font-headline text-xl text-primary mb-1 block font-bold">02</span>
                    <p className="text-xs font-bold text-on-surface">Bake Day SMS</p>
                    <p className="text-[11px] text-on-surface-variant mt-0.5">
                      Receive a text with your Cubby Locker pin as loaves cool.
                    </p>
                  </div>
                  <div className="bg-surface-container-lowest p-space-sm rounded-lg border border-outline-variant/20">
                    <span className="font-headline text-xl text-primary mb-1 block font-bold">03</span>
                    <p className="text-xs font-bold text-on-surface">Breeze By</p>
                    <p className="text-[11px] text-on-surface-variant mt-0.5">
                      Grab your loaf anytime during your selected batch window.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-surface-container-lowest p-space-md rounded-lg flex items-center justify-between border border-outline-variant/20">
                <div className="flex items-center gap-space-sm">
                  <span className="material-symbols-outlined text-primary text-[28px]">location_on</span>
                  <div>
                    <p className="text-xs font-bold text-on-surface">42 Millers Lane, Oakridge</p>
                    <p className="text-[11px] text-on-surface-variant">
                      Porch Gate Cubby #04 • Walk-up or bike-friendly
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => alert("Map directions to 42 Millers Lane copied to clipboard!")}
                  className="text-xs text-primary font-bold hover:underline"
                >
                  Get Directions
                </button>
              </div>
            </div>

            {/* Crust Revival Guide */}
            <div className="lg:col-span-5 bg-surface-container p-space-lg rounded-xl shadow-sm flex flex-col justify-between border border-outline-variant/30">
              <div>
                <div className="flex items-center gap-space-xs text-primary text-xs uppercase font-bold mb-space-xs">
                  <span className="material-symbols-outlined text-[18px]">outdoor_grill</span>
                  <span>Baker's Ritual</span>
                </div>
                <h3 className="font-headline text-2xl font-semibold text-on-surface mb-space-sm">
                  The 7-Minute Crust Revival
                </h3>
                <p className="text-xs text-on-surface-variant mb-space-md leading-relaxed">
                  Sourdough made without commercial yeast lasts naturally for 5–6 days. Here is how to restore that deafening fresh-from-the-oven crunch:
                </p>

                <ul className="space-y-space-sm mb-space-md">
                  <li className="flex items-start gap-space-xs text-xs text-on-surface">
                    <span className="material-symbols-outlined text-secondary text-[18px] shrink-0 mt-0.5">
                      water_drop
                    </span>
                    <span>Lightly mist or brush the entire loaf crust with cold tap water.</span>
                  </li>
                  <li className="flex items-start gap-space-xs text-xs text-on-surface">
                    <span className="material-symbols-outlined text-secondary text-[18px] shrink-0 mt-0.5">
                      thermostat
                    </span>
                    <span>Place on middle rack of preheated oven at 375°F (190°C) for 7–9 minutes.</span>
                  </li>
                  <li className="flex items-start gap-space-xs text-xs text-on-surface">
                    <span className="material-symbols-outlined text-secondary text-[18px] shrink-0 mt-0.5">
                      hourglass_top
                    </span>
                    <span>Crucial step: Let rest on a wire rack for 10 minutes before slicing. Crust will sing!</span>
                  </li>
                </ul>
              </div>

              <div className="pt-space-sm border-t border-outline-variant/20 flex items-center justify-between">
                <span className="text-[11px] text-on-surface-variant font-medium">Have questions about bread storage?</span>
                <Link href="/product/heritage-spelt-boule" className="text-xs font-bold text-primary hover:underline">
                  View Full Care Guide &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

