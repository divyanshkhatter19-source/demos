"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";

export const ProductCard = ({ product }: { product: Product }) => {
  const { addToCart } = useCart();
  const [qty, setQty] = useState(1);

  const percentClaimed = Math.min(
    100,
    Math.round((product.claimed / product.totalBatch) * 100)
  );

  const isSoldOut = product.badgeType === "soldout" || product.claimed >= product.totalBatch;
  const isLowStock = product.totalBatch - product.claimed <= 3 && !isSoldOut;

  const handleAdjustQty = (delta: number) => {
    setQty((prev) => Math.max(1, Math.min(6, prev + delta)));
  };

  const handleReserve = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isSoldOut) {
      alert(`You are on the alert list for the next batch of ${product.shortName}!`);
      return;
    }
    addToCart(product, qty, "unsliced");
  };

  return (
    <article className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm flex flex-col justify-between group hover:shadow-md transition-all border border-outline-variant/30">
      <div>
        {/* Product Image Stage */}
        <Link href={`/product/${product.id}`} className="relative h-60 w-full block overflow-hidden bg-surface-container">
          <img
            src={product.image}
            alt={product.name}
            className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ${
              isSoldOut ? "filter grayscale contrast-75" : ""
            }`}
          />

          {/* Badge */}
          {product.badge && (
            <span
              className={`absolute top-3 left-3 px-2 py-1 rounded text-[11px] font-bold tracking-wide uppercase shadow-sm ${
                isSoldOut
                  ? "bg-surface-container-highest text-on-surface-variant"
                  : isLowStock
                  ? "bg-error text-white"
                  : product.badgeType === "secondary"
                  ? "bg-secondary text-on-secondary"
                  : "bg-surface/90 backdrop-blur text-primary"
              }`}
            >
              {product.badge}
            </span>
          )}

          {/* Price pill */}
          <div className="absolute bottom-3 right-3 px-2 py-0.5 rounded bg-surface-container-lowest/95 backdrop-blur font-headline text-lg font-bold text-primary shadow-sm">
            ${product.price.toFixed(2)}
          </div>
        </Link>

        {/* Content */}
        <div className="p-space-md">
          {/* Metadata */}
          <div className="flex items-center gap-space-xs text-[11px] text-on-surface-variant mb-space-xs font-medium">
            {product.proofTime && (
              <>
                <span className="text-secondary font-semibold">{product.proofTime}</span>
                <span>·</span>
              </>
            )}
            {product.flourType && <span>{product.flourType}</span>}
          </div>

          <Link href={`/product/${product.id}`}>
            <h3 className="font-headline text-xl text-on-surface leading-snug group-hover:text-primary transition-colors">
              {product.shortName || product.name}
            </h3>
          </Link>

          <p className="font-body text-xs text-on-surface-variant mt-1 line-clamp-2">
            {product.description}
          </p>

          {/* Stock Meter */}
          <div className="mt-space-md">
            <div className="flex items-center justify-between text-[11px] mb-1 font-medium">
              <span className={isLowStock ? "text-error font-bold" : "text-on-surface"}>
                {product.claimed} of {product.totalBatch} claimed
              </span>
              <span className={isLowStock ? "text-error font-bold" : "text-secondary font-semibold"}>
                {isSoldOut ? "Sold Out" : `${product.totalBatch - product.claimed} left`}
              </span>
            </div>
            <div className="w-full h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full transition-all duration-700 ${
                  isSoldOut
                    ? "bg-outline"
                    : isLowStock
                    ? "bg-error"
                    : "bg-primary"
                }`}
                style={{ width: `${percentClaimed}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Card Actions */}
      <div className="p-space-md pt-0">
        <div className="flex items-center gap-space-sm pt-space-sm border-t border-outline-variant/20">
          {!isSoldOut && (
            <div className="flex items-center bg-surface-container rounded-lg p-0.5 border border-outline-variant/30">
              <button
                type="button"
                onClick={() => handleAdjustQty(-1)}
                className="w-7 h-7 rounded flex items-center justify-center text-on-surface hover:bg-surface-container-highest transition-colors font-bold text-sm"
              >
                -
              </button>
              <span className="w-7 text-center font-body text-xs font-bold">
                {qty}
              </span>
              <button
                type="button"
                onClick={() => handleAdjustQty(1)}
                className="w-7 h-7 rounded flex items-center justify-center text-on-surface hover:bg-surface-container-highest transition-colors font-bold text-sm"
              >
                +
              </button>
            </div>
          )}

          <button
            type="button"
            onClick={handleReserve}
            className={`flex-1 py-2 px-space-sm rounded-lg text-xs font-bold transition-all text-center flex items-center justify-center gap-1 shadow-sm ${
              isSoldOut
                ? "bg-surface-container-high text-on-surface hover:bg-surface-container-highest"
                : "bg-primary-container text-on-primary-container hover:bg-primary hover:text-on-primary"
            }`}
          >
            <span className="material-symbols-outlined text-[16px]">
              {isSoldOut ? "notifications" : "shopping_basket"}
            </span>
            <span>{isSoldOut ? "Notify Next Batch" : "Reserve Loaf"}</span>
          </button>
        </div>
      </div>
    </article>
  );
};

