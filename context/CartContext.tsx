"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Product } from "@/data/products";

export interface CartItem {
  id: string;
  product: Product;
  quantity: number;
  slicePreference?: "unsliced" | "thick" | "standard";
  selectedAddons?: { name: string; price: number }[];
  pickupSlot?: string;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (
    product: Product,
    quantity?: number,
    slicePreference?: "unsliced" | "thick" | "standard",
    selectedAddons?: { name: string; price: number }[]
  ) => void;
  removeFromCart: (itemId: string) => void;
  updateQuantity: (itemId: string, delta: number) => void;
  clearCart: () => void;
  subtotal: number;
  itemCount: number;
  packagingDeposit: number;
  selectedPackaging: "linen" | "paper";
  setSelectedPackaging: (pkg: "linen" | "paper") => void;
  tipPercent: number;
  setTipPercent: (percent: number) => void;
  selectedSlot: string;
  setSelectedSlot: (slot: string) => void;
  orderNotes: string;
  setOrderNotes: (notes: string) => void;
  taxAmount: number;
  tipAmount: number;
  totalAmount: number;
  toastMessage: string | null;
  triggerToast: (msg: string) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([
    {
      id: "heritage-spelt-boule-default",
      product: {
        id: "heritage-spelt-boule",
        name: "Heritage Spelt Country Sourdough Boule",
        shortName: "Heritage Country Loaf",
        price: 14.00,
        description: "Stoneground spelt, 82% hydration, thick hearth sliced.",
        details: "Skagit valley grains, cold fermented for 36 hours.",
        claimed: 16,
        totalBatch: 24,
        category: "sourdough",
        dietTags: ["Vegan"],
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC7HXdYcTMXc3Wd0V4Xtao8050wpOBD2abudCWkz04ethigDdlqMDmo65rjdXTc8vbWZqvE3rCHaFHzQwh8hGE0J-QFXdiSUZzY-si2vwkUU_VEO2IPn9kBoszFecWhs7CYprCv0XZDy-Agb-pA3C15fVqY8fsvtzicFu-OhP-WifpmgymOXhBg1UY6WENSpKcUX2vwFtT1PSpCa9KvfpuMXyGkNAzilD3jZ1ljxXuucqcPcaDIdCEG"
      },
      quantity: 1,
      slicePreference: "thick",
      selectedAddons: []
    },
    {
      id: "honey-lavender-buns-default",
      product: {
        id: "honey-lavender-buns",
        name: "Honey Lavender Morning Buns",
        shortName: "Honey Lavender Buns",
        price: 6.75,
        description: "Batch Pair (Pack of 2) · Local Meadow Honey Glaze",
        details: "Laminated Normandy butter dough with organic lavender.",
        claimed: 18,
        totalBatch: 24,
        category: "viennoiserie",
        dietTags: ["Vegetarian"],
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD9j1S71p1aVKRzQehQl357K_hBaLLX2-ZXUdPbzLcXginUZiDrRgw-gIbzID-lSbMv4pDiwuQqUUfgR9hu-oNFIQI4wtjQ7VvtVKB0fBPZCAOUyxRcMPDdS07G40cXVrXLLVgFhOT63dIeTg4jNQhaJm7UJ54tp1TCoKRqDcj9YktryKCroYSXQ16etUr3DM1-SKJMUwNL9cdksAYqmIbN2H0yLDHy50S5rAK-9Zsc3zQrfmd6r_lJ"
      },
      quantity: 2,
      selectedAddons: []
    },
    {
      id: "cultured-butter-default",
      product: {
        id: "cultured-butter",
        name: "Cultured Farmhouse Artisan Butter",
        shortName: "Cultured Artisan Butter",
        price: 9.00,
        description: "250g Block · Sea Salt Crystals · 4-Day Fermented Cream",
        details: "Hand-churned with crunchy sea salt crystals.",
        claimed: 8,
        totalBatch: 12,
        category: "pantry",
        dietTags: ["Vegetarian"],
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCmfO11MEjeJKtgX3tIFSHi3gxHJEed8HrRxBBpSRdhelw-CxkdwyhXkw4z452L9c_SQBk5K4zmsvgmDu91h1TzNRz_hITwezjC5m--VXjocPFu-72mxzxSucrFBX_AiMk9fEmk4R9JgYwHkUN3p-UTQ-rONLq3JeYTpZE0Cia-OjnDZ-SNLTM2pKuSzegutAQOwsS_ozqMzmj5Y91PV2uyOYibBQqdwpBmxh5AGXGijwCisyJHdKeh"
      },
      quantity: 1,
      selectedAddons: []
    }
  ]);

  const [selectedPackaging, setSelectedPackaging] = useState<"linen" | "paper">("linen");
  const [tipPercent, setTipPercent] = useState<number>(15);
  const [selectedSlot, setSelectedSlot] = useState<string>("slot_prime");
  const [orderNotes, setOrderNotes] = useState<string>("Leave in shade box if after 11am; Gift loaf for neighbor");
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3200);
  };

  const addToCart = (
    product: Product,
    quantity: number = 1,
    slicePreference: "unsliced" | "thick" | "standard" = "unsliced",
    selectedAddons: { name: string; price: number }[] = []
  ) => {
    const itemKey = `${product.id}-${slicePreference}-${selectedAddons.map(a => a.name).sort().join(",")}`;
    setItems((prev) => {
      const existing = prev.find((i) => i.id === itemKey);
      if (existing) {
        return prev.map((i) =>
          i.id === itemKey ? { ...i, quantity: i.quantity + quantity } : i
        );
      }
      return [
        ...prev,
        {
          id: itemKey,
          product,
          quantity,
          slicePreference,
          selectedAddons,
        },
      ];
    });
    triggerToast(`Added ${quantity} × ${product.shortName || product.name} to your reservation!`);
  };

  const removeFromCart = (itemId: string) => {
    setItems((prev) => prev.filter((i) => i.id !== itemId));
  };

  const updateQuantity = (itemId: string, delta: number) => {
    setItems((prev) =>
      prev
        .map((i) => {
          if (i.id === itemId) {
            const nextQty = i.quantity + delta;
            return nextQty > 0 ? { ...i, quantity: nextQty } : null;
          }
          return i;
        })
        .filter((i): i is CartItem => i !== null)
    );
  };

  const clearCart = () => setItems([]);

  // Calculations
  const subtotal = items.reduce((sum, item) => {
    const addonsTotal = (item.selectedAddons || []).reduce((a, b) => a + b.price, 0);
    return sum + (item.product.price + addonsTotal) * item.quantity;
  }, 0);

  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const packagingDeposit = selectedPackaging === "linen" ? 1.00 : 0.00;
  const taxAmount = +(subtotal * 0.08).toFixed(2);
  const tipAmount = +(subtotal * (tipPercent / 100)).toFixed(2);
  const totalAmount = +(subtotal + taxAmount + packagingDeposit + tipAmount).toFixed(2);

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        subtotal,
        itemCount,
        packagingDeposit,
        selectedPackaging,
        setSelectedPackaging,
        tipPercent,
        setTipPercent,
        selectedSlot,
        setSelectedSlot,
        orderNotes,
        setOrderNotes,
        taxAmount,
        tipAmount,
        totalAmount,
        toastMessage,
        triggerToast,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

