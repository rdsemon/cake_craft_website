"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import type { CakeCardProp } from "@/types/cake.types";

export function CakeCard({
  id,
  title,
  description,
  coverImage,
  price,
  onAddToCart,
  isClickable = true,
}: CakeCardProp) {
  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onAddToCart) {
      onAddToCart({
        id,
        title,
        price,
        quantity: 1,
        coverImage,
        description,
      });
    }
  };

  return (
    <div className="group flex flex-col h-full">
      <div className="relative overflow-hidden rounded-lg bg-muted aspect-square mb-4">
        <Image
          src={coverImage as string}
          alt={title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {/* {badge && (
          <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
            {badge}
          </div>
        )} */}
      </div>

      <div className="space-y-3 flex-1 flex flex-col">
        <div>
          <h3 className="text-lg font-serif font-semibold text-foreground group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2 mt-1">
            {description}
          </p>
        </div>

        <div className="mt-auto pt-4 flex items-center justify-between">
          <p className="text-primary font-semibold text-lg">
            ${price.toFixed(2)}
          </p>
          {isClickable && onAddToCart && (
            <Button size="sm" onClick={handleAddToCart} className="gap-2">
              <ShoppingCart className="w-4 h-4" />
              <span className="hidden sm:inline">Add</span>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
