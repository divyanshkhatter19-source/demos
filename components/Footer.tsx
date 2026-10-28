"use client";

import React from "react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="w-full bg-surface-container-low shadow-[0_-1px_12px_rgba(28,25,23,0.04)] border-t border-outline-variant/30 mt-space-xl">
      <div className="max-w-7xl mx-auto px-margin py-space-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-space-xl">
          {/* Brand info */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-space-sm mb-space-sm">
              <div className="w-8 h-8 rounded-full bg-primary-container text-on-primary flex items-center justify-center font-headline font-bold text-lg">
                <span className="material-symbols-outlined text-[20px]">bakery_dining</span>
              </div>
              <span className="font-headline text-xl font-bold text-primary">
                Hearth &amp; Crumb
              </span>
            </div>
            <p className="font-body text-sm text-on-surface-variant mb-space-md leading-relaxed">
              Slow-fermented heritage grains, single-origin stoneground flours, and naturally leavened loaves crafted in micro-batches for our local neighborhood community.
            </p>
            <div className="flex items-center gap-space-xs text-on-surface-variant text-sm font-medium">
              <span className="material-symbols-outlined text-primary text-[20px]">verified</span>
              <span>100% Wild Sourdough Fermentation</span>
            </div>
          </div>

          {/* Location & Hours */}
          <div className="lg:col-span-3">
            <h4 className="font-body text-xs font-bold text-primary uppercase mb-space-md tracking-wider">
              Bakehouse &amp; Pickup
            </h4>
            <p className="font-body text-sm text-on-surface font-semibold mb-space-xs">
              The Stone Hearth Porch
            </p>
            <p className="font-body text-sm text-on-surface-variant mb-space-md leading-relaxed">
              42 Millers Lane, Oakridge Craft Quarter<br />
              Front Gate Pickup Cubby 04
            </p>
            <h5 className="font-body text-xs font-semibold text-on-surface uppercase mb-space-xs">
              Batch Windows
            </h5>
            <p className="font-body text-sm text-on-surface-variant">
              Sat &amp; Sun: 8:00 AM – 1:30 PM<br />
              Wed Hearth Drop: 4:00 PM – 7:00 PM
            </p>
          </div>

          {/* Batch Links */}
          <div className="lg:col-span-2">
            <h4 className="font-body text-xs font-bold text-primary uppercase mb-space-md tracking-wider">
              Batch Drops
            </h4>
            <ul className="space-y-space-sm text-sm text-on-surface-variant">
              <li>
                <Link href="/menu" className="hover:text-primary transition-colors">Country Batard</Link>
              </li>
              <li>
                <Link href="/menu" className="hover:text-primary transition-colors">Einkorn &amp; Seed Loaf</Link>
              </li>
              <li>
                <Link href="/menu" className="hover:text-primary transition-colors">Cardamom Knots</Link>
              </li>
              <li>
                <Link href="/menu" className="hover:text-primary transition-colors">Miso Sesame Focaccia</Link>
              </li>
              <li>
                <Link href="/menu" className="hover:text-primary transition-colors">Baker’s Flour Shares</Link>
              </li>
            </ul>
          </div>

          {/* Newsletter / Hearth Dispatches */}
          <div className="lg:col-span-3">
            <h4 className="font-body text-xs font-bold text-primary uppercase mb-space-md tracking-wider">
              Hearth Dispatches
            </h4>
            <p className="font-body text-sm text-on-surface-variant mb-space-md">
              Receive secret batch drops, seasonal pastry notices, and flour milling schedule alerts 24 hours before public pre-orders open.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you! You are now subscribed to Hearth Dispatches.");
              }}
              className="flex flex-col gap-space-sm"
            >
              <div className="flex items-center bg-surface-container rounded-lg p-1 shadow-sm border border-outline-variant/30">
                <input
                  type="email"
                  required
                  placeholder="baker@domain.com"
                  className="bg-transparent px-space-sm py-space-xs text-sm text-on-surface w-full focus:outline-none placeholder:text-outline-variant"
                />
                <button
                  type="submit"
                  className="bg-primary-container text-on-primary-container font-semibold text-xs px-space-md py-space-xs rounded-md hover:bg-primary hover:text-on-primary transition-colors"
                >
                  Join
                </button>
              </div>
              <span className="text-xs text-on-surface-variant">
                Zero fluff. Only fresh hot bread announcements.
              </span>
            </form>
          </div>
        </div>

        <div className="mt-space-xl pt-space-lg border-t border-outline-variant/20 flex flex-col sm:flex-row items-center justify-between gap-space-md">
          <p className="font-body text-xs text-on-surface-variant">
            &copy; 2026 Hearth &amp; Crumb Micro-Bakehouse. Deliberate bakes &amp; stoneground flour.
          </p>
          <div className="flex items-center gap-space-md text-xs text-on-surface-variant">
            <span className="hover:text-on-surface cursor-pointer">Flour Sourcing</span>
            <span className="hover:text-on-surface cursor-pointer">Bakehouse FAQ</span>
            <span className="hover:text-on-surface cursor-pointer">Pre-Order Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

