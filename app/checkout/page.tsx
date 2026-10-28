"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function CheckoutPage() {
  const {
    items,
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
  } = useCart();

  const [paymentMethod, setPaymentMethod] = useState<"card" | "apple" | "cash">("card");
  const [name, setName] = useState("Clara Henderson");
  const [phone, setPhone] = useState("(503) 892-4110");
  const [email, setEmail] = useState("clara.henderson@craftgrain.org");
  const [isOrdered, setIsOrdered] = useState(false);

  const timeSlots = [
    {
      id: "slot_early",
      name: "Early Pull",
      time: "7:30 – 9:00 AM",
      desc: "Steam fresh out of oven",
    },
    {
      id: "slot_prime",
      name: "Prime Window",
      time: "9:00 – 10:30 AM",
      desc: "Ideal slicing temp",
    },
    {
      id: "slot_midday",
      name: "Midday Run",
      time: "10:30 – 12:00 PM",
      desc: "Cedar shelf held",
    },
  ];

  const handleConfirmReservation = (e: React.FormEvent) => {
    e.preventDefault();
    if (items.length === 0) {
      alert("Your cart is empty! Add some fresh loaves from our menu first.");
      return;
    }
    setIsOrdered(true);
  };

  if (isOrdered) {
    return (
      <div className="max-w-3xl mx-auto px-margin py-space-xl text-center">
        <div className="bg-surface-container-lowest rounded-2xl p-space-xl shadow-lg border border-outline-variant/30 flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-primary-container text-on-primary flex items-center justify-center mb-space-md shadow-md">
            <span className="material-symbols-outlined text-[36px]">check_circle</span>
          </div>

          <span className="text-xs uppercase font-bold tracking-widest text-primary mb-1">
            Reservation Confirmed · Ticket #HC-8429
          </span>
          <h1 className="font-headline text-3xl sm:text-4xl font-semibold text-on-surface mb-space-xs">
            See You at the Porch Cubby!
          </h1>
          <p className="text-sm text-on-surface-variant max-w-lg mb-space-lg leading-relaxed">
            Thank you, {name}! Your batch bake has been queued with Head Baker Anselm. An SMS ding with your automated cubby lock PIN will arrive at <span className="font-bold text-on-surface">{phone}</span> as soon as your loaves conclude their cool-down on Saturday morning.
          </p>

          <div className="w-full bg-surface-container-low p-space-md rounded-xl text-left mb-space-lg border border-outline-variant/20">
            <div className="flex items-center justify-between pb-space-xs border-b border-outline-variant/20 text-xs font-bold text-on-surface">
              <span>Pickup Window</span>
              <span className="text-primary font-headline text-base">Saturday, Oct 28 (9:00 – 10:30 AM)</span>
            </div>
            <div className="flex items-center justify-between py-space-xs border-b border-outline-variant/20 text-xs text-on-surface-variant">
              <span>Collection Point</span>
              <span className="font-semibold text-on-surface">The Porch Pantry, 42 Millers Lane (Cubby #04)</span>
            </div>
            <div className="flex items-center justify-between pt-space-xs text-xs font-bold text-on-surface">
              <span>Total Paid ({paymentMethod === "card" ? "Credit Card" : paymentMethod === "apple" ? "Apple Pay" : "Porch Cash"})</span>
              <span className="text-primary text-base">${totalAmount.toFixed(2)}</span>
            </div>
          </div>

          <div className="flex gap-space-sm">
            <button
              onClick={() => {
                clearCart();
                setIsOrdered(false);
              }}
              className="px-space-lg py-space-sm bg-primary-container text-on-primary-container hover:bg-primary hover:text-on-primary font-bold text-sm rounded-lg transition-colors shadow-sm"
            >
              Order More Loaves
            </button>
            <Link
              href="/"
              className="px-space-md py-space-sm bg-surface-container-high text-on-surface hover:bg-surface-container-highest font-semibold text-sm rounded-lg transition-colors border border-outline-variant/30"
            >
              Back to Storefront
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full pb-space-xl">
      <div className="max-w-7xl mx-auto px-margin py-space-xl w-full">
        {/* Breadcrumb & Bake Window Urgency Pill */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm mb-space-lg">
          <div className="flex items-center gap-space-xs text-on-surface-variant text-xs">
            <Link href="/" className="hover:text-primary transition-colors font-medium">
              Today's Bake
            </Link>
            <span className="opacity-50">/</span>
            <span className="text-primary font-bold">Baker's Cart &amp; Pickup Dispatch</span>
          </div>

          <div className="inline-flex items-center gap-space-xs px-space-md py-space-xs bg-surface-container-high rounded-full self-start sm:self-auto border border-outline-variant/30">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-xs text-on-surface-variant font-medium">
              Batch #104 · Oven pulls conclude at 07:45 AM
            </span>
          </div>
        </div>

        {/* Main Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">
          {/* LEFT COLUMN: Basket Items, Packaging, Pickup Window */}
          <div className="lg:col-span-7 flex flex-col gap-space-xl">
            {/* Section Title */}
            <div>
              <span className="text-xs uppercase font-bold tracking-widest text-primary block mb-space-xs">
                Batch Order Details
              </span>
              <h1 className="font-headline text-3xl sm:text-4xl font-semibold text-on-surface">
                Review Reserved Bakes
              </h1>
              <p className="text-sm text-on-surface-variant mt-space-xs">
                Your natural sourdough loaves and pastries are fermented over 36 hours and scheduled for Saturday morning pull.
              </p>
            </div>

            {/* Cart Items List */}
            {items.length === 0 ? (
              <div className="bg-surface-container-lowest rounded-xl p-space-xl shadow-sm text-center border border-outline-variant/30">
                <span className="material-symbols-outlined text-outline text-[48px] mb-space-sm">
                  shopping_bag
                </span>
                <p className="font-headline text-xl text-on-surface">Your bread basket is empty</p>
                <p className="text-xs text-on-surface-variant mt-1 mb-space-md">
                  Browse our weekly batch drops and reserve your stoneground sourdough loaves.
                </p>
                <Link
                  href="/menu"
                  className="inline-block px-space-lg py-2.5 bg-primary-container text-on-primary-container font-bold text-xs rounded-lg hover:bg-primary hover:text-on-primary transition-colors shadow-sm"
                >
                  Explore Saturday Batch Drops &rarr;
                </Link>
              </div>
            ) : (
              <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-lg border border-outline-variant/30">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-md pb-space-md bg-surface-container-low/40 p-space-md rounded-lg border border-outline-variant/20"
                  >
                    <div className="flex items-center gap-space-md min-w-0">
                      <img
                        className="w-20 h-20 rounded-lg object-cover flex-shrink-0 border border-outline-variant/20"
                        src={item.product.image}
                        alt={item.product.name}
                      />
                      <div className="min-w-0">
                        <span className="text-[10px] uppercase font-bold px-space-xs py-0.5 rounded bg-primary-fixed text-on-primary-fixed">
                          Stone Hearth #01
                        </span>
                        <h3 className="font-headline text-lg font-bold text-on-surface truncate mt-1">
                          {item.product.name}
                        </h3>
                        <p className="text-xs text-on-surface-variant">
                          Prep:{" "}
                          {item.slicePreference === "thick"
                            ? "Thick Hearth Sliced (18mm)"
                            : item.slicePreference === "standard"
                            ? "Standard Slice (12mm)"
                            : "Unsliced Boule"}{" "}
                          · 82% Hydration
                        </p>
                        {item.selectedAddons && item.selectedAddons.length > 0 && (
                          <div className="text-[11px] text-secondary font-medium">
                            + {item.selectedAddons.map((a) => a.name).join(", ")}
                          </div>
                        )}
                        <span className="text-sm font-bold text-primary mt-1 block">
                          ${(
                            (item.product.price +
                              (item.selectedAddons || []).reduce((a, b) => a + b.price, 0)) *
                            item.quantity
                          ).toFixed(2)}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto gap-space-md">
                      {/* Pill Quantity Cluster */}
                      <div className="inline-flex items-center bg-surface-container rounded-full p-1 shadow-inner border border-outline-variant/30">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, -1)}
                          className="w-7 h-7 rounded-full flex items-center justify-center hover:bg-surface-container-lowest text-on-surface transition-colors"
                        >
                          <span className="material-symbols-outlined text-[16px]">remove</span>
                        </button>
                        <span className="w-8 text-center text-xs font-bold text-on-surface">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, 1)}
                          className="w-7 h-7 rounded-full flex items-center justify-center hover:bg-surface-container-lowest text-on-surface transition-colors"
                        >
                          <span className="material-symbols-outlined text-[16px]">add</span>
                        </button>
                      </div>

                      {/* Delete */}
                      <button
                        type="button"
                        onClick={() => removeFromCart(item.id)}
                        className="p-2 text-outline hover:text-error transition-colors rounded-full hover:bg-surface-container"
                        title="Remove item"
                      >
                        <span className="material-symbols-outlined text-[20px]">
                          delete_outline
                        </span>
                      </button>
                    </div>
                  </div>
                ))}

                {/* Order Notes */}
                <div className="mt-space-sm pt-space-md bg-surface-container-low rounded-lg p-space-md border border-outline-variant/20">
                  <label
                    htmlFor="order-notes"
                    className="flex items-center gap-space-xs text-xs font-bold text-on-surface mb-space-xs"
                  >
                    <span className="material-symbols-outlined text-primary text-[18px]">
                      edit_note
                    </span>
                    <span>Baker's Note &amp; Porch Drop Instructions</span>
                  </label>
                  <input
                    id="order-notes"
                    type="text"
                    value={orderNotes}
                    onChange={(e) => setOrderNotes(e.target.value)}
                    placeholder="e.g. Leave in shaded cubby, keep warm, packaging preferences..."
                    className="w-full bg-surface-container-lowest px-space-md py-space-sm rounded-lg text-xs text-on-surface shadow-inner focus:outline-none focus:ring-1 focus:ring-primary border border-outline-variant/20"
                  />
                  <span className="text-[11px] text-on-surface-variant mt-space-xs block">
                    Baker Luke reads all ticket notes during the Saturday 5:30 AM assembly prep.
                  </span>
                </div>
              </div>
            )}

            {/* Packaging Choice Selection */}
            <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm border border-outline-variant/30">
              <div className="flex items-center justify-between mb-space-md">
                <div>
                  <span className="text-xs uppercase font-bold tracking-widest text-primary block mb-space-xs">
                    Sustainable Dispatch
                  </span>
                  <h2 className="font-headline text-xl font-semibold text-on-surface">
                    Baker's Sustainable Packaging
                  </h2>
                </div>
                <span className="material-symbols-outlined text-primary text-[24px]">eco</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                {/* Zero-waste Linen */}
                <label
                  onClick={() => setSelectedPackaging("linen")}
                  className={`relative flex flex-col p-space-md rounded-lg cursor-pointer transition-all border ${
                    selectedPackaging === "linen"
                      ? "bg-surface-container ring-2 ring-primary border-transparent"
                      : "bg-surface-container-low hover:bg-surface-container border-outline-variant/20"
                  }`}
                >
                  <div className="flex items-center justify-between mb-space-xs">
                    <span className="text-xs font-bold text-on-surface">
                      Zero-Waste Linen Wrap
                    </span>
                    <span
                      className={`material-symbols-outlined text-[18px] text-primary ${
                        selectedPackaging === "linen" ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      check_circle
                    </span>
                  </div>
                  <p className="text-xs text-on-surface-variant">
                    Breathable natural French linen cloth + recycled twine tie. Best for crust crispness.
                  </p>
                  <span className="text-xs text-primary mt-space-sm font-semibold">
                    +$1.00 Washable Return Deposit
                  </span>
                </label>

                {/* Classic Kraft Paper */}
                <label
                  onClick={() => setSelectedPackaging("paper")}
                  className={`relative flex flex-col p-space-md rounded-lg cursor-pointer transition-all border ${
                    selectedPackaging === "paper"
                      ? "bg-surface-container ring-2 ring-primary border-transparent"
                      : "bg-surface-container-low hover:bg-surface-container border-outline-variant/20"
                  }`}
                >
                  <div className="flex items-center justify-between mb-space-xs">
                    <span className="text-xs font-bold text-on-surface">
                      Classic Kraft Bread Bag
                    </span>
                    <span
                      className={`material-symbols-outlined text-[18px] text-primary ${
                        selectedPackaging === "paper" ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      check_circle
                    </span>
                  </div>
                  <p className="text-xs text-on-surface-variant">
                    100% Recycled post-consumer kraft paper with micro-perforations. Fully compostable.
                  </p>
                  <span className="text-xs text-on-surface-variant mt-space-sm font-semibold">
                    Free · No deposit
                  </span>
                </label>
              </div>
            </div>

            {/* Curbside Porch Pickup Selector */}
            <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm border border-outline-variant/30">
              <div className="flex items-center justify-between mb-space-md">
                <div>
                  <span className="text-xs uppercase font-bold tracking-widest text-primary block mb-space-xs">
                    Porch Pantry Dispatch
                  </span>
                  <h2 className="font-headline text-xl font-semibold text-on-surface">
                    Curbside Pickup Window
                  </h2>
                </div>
                <span className="px-space-sm py-1 bg-surface-container-high rounded-full text-xs font-bold text-primary">
                  Saturday, Oct 28
                </span>
              </div>

              {/* Location Badge */}
              <div className="p-space-md rounded-lg bg-surface-container-low mb-space-lg flex items-start gap-space-md border border-outline-variant/20">
                <div className="p-space-sm rounded-lg bg-primary-container text-on-primary flex-shrink-0">
                  <span className="material-symbols-outlined text-[24px]">cottage</span>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-on-surface">
                    The Porch Pantry at Hearth &amp; Crumb
                  </h4>
                  <p className="text-xs text-on-surface-variant mt-0.5">
                    42 Millers Lane, Oakridge Craft Quarter (East Gate)
                  </p>
                  <div className="flex flex-wrap items-center gap-space-sm mt-space-xs text-[11px] text-secondary font-medium">
                    <span className="inline-flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">lock_open</span>
                      Code-Free Porch Cubby
                    </span>
                    <span>·</span>
                    <span className="inline-flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">thermostat</span>
                      Insulated Cedar Warming Chest
                    </span>
                  </div>
                </div>
              </div>

              {/* Slot Tiles */}
              <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider block mb-space-sm">
                Select Your Morning Window
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-sm">
                {timeSlots.map((slot) => {
                  const isSelected = selectedSlot === slot.id;
                  return (
                    <button
                      key={slot.id}
                      type="button"
                      onClick={() => setSelectedSlot(slot.id)}
                      className={`flex flex-col items-start p-space-md rounded-lg transition-all text-left border ${
                        isSelected
                          ? "bg-primary-fixed/40 ring-2 ring-primary border-transparent"
                          : "bg-surface-container-low hover:bg-surface-container border-outline-variant/20"
                      }`}
                    >
                      <span className="text-xs font-bold text-on-surface-variant">
                        {slot.name}
                      </span>
                      <span className="font-headline text-lg font-bold text-on-surface mt-1">
                        {slot.time}
                      </span>
                      <span className="text-[11px] text-outline mt-space-xs">
                        {slot.desc}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Notice */}
              <div className="flex items-center gap-space-xs mt-space-md p-space-sm bg-surface-container rounded-lg text-xs text-on-surface-variant">
                <span className="material-symbols-outlined text-primary text-[18px]">info</span>
                <p>Running late? Any unclaimed batch bakes remain in shaded cubby #04 until 6:00 PM.</p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Sticky Summary, Tips & Payment */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 flex flex-col gap-space-lg">
            <form
              onSubmit={handleConfirmReservation}
              className="bg-surface-container-lowest rounded-xl p-space-lg shadow-md flex flex-col gap-space-lg border border-outline-variant/30"
            >
              <div className="flex items-center justify-between pb-space-sm border-b border-outline-variant/20">
                <h2 className="font-headline text-2xl font-bold text-on-surface">
                  Payment &amp; Dispatch
                </h2>
                <span className="text-xs px-space-xs py-0.5 rounded bg-surface-container font-medium text-on-surface-variant">
                  Safe 256-Bit
                </span>
              </div>

              {/* Contact Inputs */}
              <div className="space-y-space-sm">
                <div>
                  <label htmlFor="contact-name" className="text-xs text-on-surface-variant block mb-1 font-medium">
                    Your Full Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-surface-container-low px-space-md py-space-sm rounded-lg text-xs text-on-surface focus:outline-none focus:ring-1 focus:ring-primary shadow-inner border border-outline-variant/20"
                  />
                </div>

                <div>
                  <label htmlFor="contact-phone" className="flex items-center justify-between text-xs text-on-surface-variant mb-1 font-medium">
                    <span>Mobile (for SMS Warm Oven Ding)</span>
                    <span className="text-primary font-bold text-[10px] uppercase">
                      Required for pickup lock
                    </span>
                  </label>
                  <div className="relative">
                    <input
                      id="contact-phone"
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-surface-container-low px-space-md py-space-sm rounded-lg text-xs text-on-surface focus:outline-none focus:ring-1 focus:ring-primary shadow-inner border border-outline-variant/20"
                    />
                    <span className="material-symbols-outlined absolute right-3 top-2.5 text-primary text-[18px]">
                      sms
                    </span>
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-email" className="text-xs text-on-surface-variant block mb-1 font-medium">
                    Email Receipt &amp; Flour Log
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-surface-container-low px-space-md py-space-sm rounded-lg text-xs text-on-surface focus:outline-none focus:ring-1 focus:ring-primary shadow-inner border border-outline-variant/20"
                  />
                </div>
              </div>

              {/* Tip Selector */}
              <div className="p-space-md bg-surface-container-low rounded-lg border border-outline-variant/20">
                <div className="flex items-center justify-between mb-space-xs">
                  <span className="text-xs font-bold text-on-surface flex items-center gap-1">
                    <span className="material-symbols-outlined text-primary text-[16px]">
                      volunteer_activism
                    </span>
                    <span>Flour the Baker Tip</span>
                  </span>
                  <span className="text-[10px] text-primary font-semibold">
                    100% directly to apprentice guild
                  </span>
                </div>

                <div className="grid grid-cols-4 gap-space-xs mt-space-sm">
                  {[10, 15, 20].map((pct) => (
                    <button
                      key={pct}
                      type="button"
                      onClick={() => setTipPercent(pct)}
                      className={`py-space-xs px-1 rounded-lg text-xs font-bold transition-colors ${
                        tipPercent === pct
                          ? "bg-primary-container text-on-primary-container shadow-sm"
                          : "bg-surface-container text-on-surface hover:bg-surface-container-high"
                      }`}
                    >
                      {pct}% (${((subtotal * pct) / 100).toFixed(2)})
                    </button>
                  ))}
                  <button
                    type="button"
                    onClick={() => setTipPercent(0)}
                    className={`py-space-xs px-1 rounded-lg text-xs font-bold transition-colors ${
                      tipPercent === 0
                        ? "bg-primary-container text-on-primary-container"
                        : "bg-surface-container text-on-surface hover:bg-surface-container-high"
                    }`}
                  >
                    Custom
                  </button>
                </div>
              </div>

              {/* Price Ledger Breakdown */}
              <div className="space-y-space-xs text-on-surface-variant text-xs">
                <div className="flex justify-between">
                  <span>Bakehouse Subtotal ({itemCount} {itemCount === 1 ? "item" : "items"})</span>
                  <span className="text-on-surface font-semibold">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Local Artisan Food Tax (8%)</span>
                  <span className="text-on-surface font-semibold">${taxAmount.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Paper Linen Packaging Deposit</span>
                  <span className="text-on-surface font-semibold">${packagingDeposit.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Baker's Guild Tip ({tipPercent}%)</span>
                  <span className="text-on-surface font-semibold">${tipAmount.toFixed(2)}</span>
                </div>

                <div className="pt-space-sm mt-space-xs bg-surface-container-high/40 p-space-sm rounded-lg flex justify-between items-baseline text-on-surface">
                  <div>
                    <span className="font-headline text-lg font-bold">Total Due</span>
                    <span className="block text-[10px] text-on-surface-variant">
                      Includes refundable linen deposit
                    </span>
                  </div>
                  <span className="font-headline text-2xl text-primary font-bold">
                    ${totalAmount.toFixed(2)}
                  </span>
                </div>
              </div>

              {/* Payment Method Selector */}
              <div className="space-y-space-xs">
                <label className="text-[11px] text-on-surface-variant uppercase tracking-wider block font-bold">
                  Select Payment Preference
                </label>
                <div className="grid grid-cols-3 gap-space-xs">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod("apple")}
                    className={`flex flex-col items-center justify-center p-space-sm rounded-lg transition-colors border ${
                      paymentMethod === "apple"
                        ? "bg-primary-fixed/50 ring-2 ring-primary border-transparent text-primary"
                        : "bg-surface-container hover:bg-surface-container-high text-on-surface border-outline-variant/20"
                    }`}
                  >
                    <span className="material-symbols-outlined text-[20px]">contactless</span>
                    <span className="text-xs font-bold mt-1">Apple Pay</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod("card")}
                    className={`flex flex-col items-center justify-center p-space-sm rounded-lg transition-colors border ${
                      paymentMethod === "card"
                        ? "bg-primary-fixed/50 ring-2 ring-primary border-transparent text-primary"
                        : "bg-surface-container hover:bg-surface-container-high text-on-surface border-outline-variant/20"
                    }`}
                  >
                    <span className="material-symbols-outlined text-[20px]">credit_card</span>
                    <span className="text-xs font-bold mt-1">Card Online</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod("cash")}
                    className={`flex flex-col items-center justify-center p-space-sm rounded-lg transition-colors border ${
                      paymentMethod === "cash"
                        ? "bg-primary-fixed/50 ring-2 ring-primary border-transparent text-primary"
                        : "bg-surface-container hover:bg-surface-container-high text-on-surface border-outline-variant/20"
                    }`}
                  >
                    <span className="material-symbols-outlined text-[20px]">payments</span>
                    <span className="text-xs font-bold mt-1">Porch Cash</span>
                  </button>
                </div>
              </div>

              {/* Confirm Reservation CTA */}
              <button
                type="submit"
                className="w-full bg-primary-container text-on-primary-container hover:bg-primary hover:text-on-primary py-space-md px-space-lg rounded-lg text-sm font-bold flex items-center justify-center gap-space-xs shadow-md hover:shadow-lg transition-all active:scale-[0.99]"
              >
                <span className="material-symbols-outlined text-[20px]">oven_gen</span>
                <span>Confirm Batch Reservation (${totalAmount.toFixed(2)})</span>
              </button>

              {/* Hearth Warmth Guarantee */}
              <div className="p-space-md rounded-lg bg-surface-container-low flex items-start gap-space-sm border border-outline-variant/20">
                <span className="material-symbols-outlined text-primary text-[20px] flex-shrink-0 mt-0.5">
                  verified_user
                </span>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  <strong className="text-on-surface font-semibold">100% Hearth Warmth Guarantee:</strong>{" "}
                  Baked freshly from the 6:00 AM stone oven shift. If unforeseen delay prevents pickup during your window, your order is secured in cubby 04 until 6:00 PM.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

