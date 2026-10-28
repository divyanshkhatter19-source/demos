"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "@/context/CartContext";

export const Navbar = () => {
  const pathname = usePathname();
  const { subtotal, itemCount } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Storefront / Today's Bake", href: "/" },
    { label: "Menu & Drops", href: "/menu" },
    { label: "Sourdough Specials", href: "/product/heritage-spelt-boule" },
    { label: "Pickup & Cart", href: "/checkout" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface/90 backdrop-blur-md shadow-[0_1px_8px_rgba(28,25,23,0.06)] border-b border-outline-variant/30">
      <div className="max-w-7xl mx-auto px-margin flex items-center justify-between h-20 gap-space-md">
        {/* Brand & Bake Window Alert */}
        <div className="flex items-center gap-space-lg">
          <Link href="/" className="flex items-center gap-space-sm group">
            {/* Hearth & Crumb Logo Mark */}
            <div className="w-9 h-9 rounded-full bg-primary-container text-on-primary flex items-center justify-center font-headline font-bold text-xl shadow-sm">
              <span className="material-symbols-outlined text-[22px]">bakery_dining</span>
            </div>
            <span className="font-headline text-headline-sm text-primary tracking-tight font-semibold group-hover:text-secondary transition-colors">
              Hearth &amp; Crumb
            </span>
          </Link>

          <div className="hidden xl:flex items-center gap-space-xs px-space-sm py-1 bg-surface-container-high rounded-full">
            <span className="material-symbols-outlined text-primary text-[18px]">schedule</span>
            <span className="font-body text-xs text-on-surface-variant font-medium">
              Next Bake: <span className="text-primary font-semibold">Saturday 8:00 AM</span> · Orders close in 14h
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-space-xs">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-space-md py-space-sm text-sm font-semibold transition-colors rounded-lg ${
                  isActive
                    ? "bg-primary-container text-on-primary-container"
                    : "text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Actions: Cart & Profile */}
        <div className="flex items-center gap-space-sm">
          {/* Notifications button */}
          <button
            type="button"
            aria-label="Notifications"
            onClick={() => alert("Bake notifications: You are subscribed for Saturday 8:00 AM oven alerts.")}
            className="p-space-sm rounded-full text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors"
          >
            <span className="material-symbols-outlined text-[22px]">notifications</span>
          </button>

          {/* Cart Pill */}
          <Link
            href="/checkout"
            className="flex items-center gap-space-xs px-space-md py-space-sm bg-surface-container-low hover:bg-surface-container-high rounded-full transition-colors border border-outline-variant/40 shadow-sm"
          >
            <span className="material-symbols-outlined text-primary text-[20px]">shopping_bag</span>
            <span className="text-sm text-on-surface font-bold">
              ${subtotal.toFixed(2)}
            </span>
            <span className="text-on-surface-variant text-xs">
              · {itemCount} {itemCount === 1 ? "item" : "items"}
            </span>
          </Link>

          {/* Profile Avatar */}
          <div className="hidden sm:block ml-space-xs">
            <img
              alt="Profile"
              className="w-9 h-9 rounded-full object-cover ring-2 ring-primary/20"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhaIXOiFO_6J0qOIqXUj2iuTQY-APkj-TZfsWfMpsTW9ku0ksEDPb3-PNrDpS7q5bcYQd_zsEdgIt4Sz24LLA3FwEfrif0TE1bCG7uzg9piwzdx9XNqF129JdzM5Sdr5xfzjKlRUrdzAHacTStg6e5HrAyU_FSNA7NPYoDrtWNQ-ePARmzFzIFD_92l-FJDYpXv5_a9c8P2CLvtX8NpujCs1j1k-mXn5h7JFfeyZLcn6yNvEtAcegw"
            />
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className="lg:hidden p-2 text-on-surface-variant hover:text-on-surface"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="material-symbols-outlined text-[26px]">
              {mobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-surface-container border-b border-outline-variant/40 px-margin py-space-md flex flex-col gap-space-sm shadow-xl">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`px-space-md py-space-sm rounded-lg text-sm font-semibold ${
                pathname === link.href
                  ? "bg-primary-container text-on-primary-container"
                  : "text-on-surface-variant hover:bg-surface-container-high"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-space-xs border-t border-outline-variant/30 flex items-center gap-space-xs text-xs text-on-surface-variant">
            <span className="material-symbols-outlined text-primary text-[18px]">schedule</span>
            Next Bake: Saturday 8:00 AM · Orders close in 14h
          </div>
        </div>
      )}
    </header>
  );
};

